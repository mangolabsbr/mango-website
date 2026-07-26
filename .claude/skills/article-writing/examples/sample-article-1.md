# Sample article 1: I wanted to install a pile of MCPs, but the context... so I fixed it

This is a sample of a real published technical article. Use it as a reference for style and voice.

---

## Introduction

It's been almost a year since Anthropic released MCP (Model Context Protocol).

Vendors and individuals keep publishing useful MCPs and the range of what you can do keeps growing — but at the same time, attention has shifted to the context bloat problem that comes from registering a lot of MCPs.

A single MCP server registers multiple tools, and the description and schema for every one of those tools gets read in as part of the system prompt. So if you casually add MCPs you only use once in a while, they eat into your context.

This article explains it in detail:

https://zenn.dev/medley/articles/optimizing-claude-code-context-with-mcp-tool-audit

I'm one of those people who doesn't want the context squeezed either, so the only thing I keep connected at all times is upstash/context7 — high usage, few tools — and I connect everything else as needed. Which is pretty inconvenient.

Around that time, Claude shipped a new feature called "Claude Skills".

https://www.anthropic.com/news/skills

The short version:

- A Skill is registered as a directory, with SKILL.md as the entry point
  - You can drop documentation and scripts in there
- Only the list of Skills (name, description) shows up in the system prompt
- When the LLM needs one, it points at it — something like `view(skill='skills/typescript/SKILL.md')` — learns how to use the skill, and then reads files or runs scripts as SKILL.md describes

It looks like you can use this a lot like MCP, but the important difference is that **only the group-level description gets read**, so it's much harder to bloat the context.

Take Playwright MCP as an example: it registers 20-plus tools, so you end up with 20 functions' worth of (name + description + inputSchema) sitting in your context just to drive a browser.

Build the same thing as a Playwright Skill, though, and all that lands in the system prompt is the Playwright Skill's description. The available operations and docs are all read through SKILL.md, so they don't eat context on tasks that don't need them.

Claude Skills seems to solve the parts of MCP — and of always-on prompts — that hurt.

I'd been managing things this way myself for a while, so having it built in was a welcome addition! That said, for tool invocation (≒ running scripts) the MCP ecosystem is the one that's maturing, so honestly my main reaction was: I kind of wish this mechanism had arrived as an MCP extension instead.

And then, thinking about it a bit more — hang on, this doesn't actually need support on the MCP side. You can get there just by proxying existing MCPs and loading the function info lazily. So I threw together an implementation and published it.

## What I built

It's a thin implementation, so you could reproduce it yourself, but I packaged it up on npm to make it easy to try.

https://www.npmjs.com/package/@kimuson/modular-mcp

I named the package modular-mcp.

It's an MCP server that proxies other MCP servers, and — like Claude Skills — it lets you load the detailed tool info for just the group you need, at the moment you need it.

Repository:
https://github.com/d-kimuson/modular-mcp

## How it works?

The idea is simple:

- Bundle 1 MCP server = 1 group, and access each MCP server through `@kimuson/modular-mcp`
  - E.g. in the example above, the tools provided by `@playwright/mcp` = the playwright group
- The only thing registered directly with the agent is `@kimuson/modular-mcp`, so the context (almost) doesn't grow as you add MCPs
- So how does the agent actually use an MCP?
  - The system prompt carries the list of MCP groups and a note on when to use each one
  - The function list and schema for each group get loaded via a `@kimuson/modular-mcp` tool call → they only enter the context when they're needed

Which is pretty close to Claude Skills.

Let me walk through the mechanism roughly.

I'll describe it assuming Claude Code as the agent, but it's MCP, so you aren't tied to any particular agent tool.

First, prepare a config file for the MCPs you want to use. Claude Code doesn't read this directly, so name it whatever you like (e.g. modular-mcp.json) rather than `.mcp.json`.

The config is basically standard MCP config, with the `description` field as the one extension.

```json:modular-mcp.json
{
  "mcpServers": {
    "context7": {
+     "description": "use me when you want to search library documentation",
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"],
      "env": {}
    },
    "playwright": {
+     "description": "use me when you want to drive a browser",
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"],
      "env": {}
    }
  }
}
```

Once that's in place, create the MCP config file you actually register with Claude Code (`.mcp.json`), containing only `@kimuson/modular-mcp`.

```json:.mcp.json
{
  "mcpServers": {
    "modular-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@kimuson/modular-mcp@latest", "./modular-mcp.json"],
      "env": {}
    }
  }
}
```

When the MCP starts up and you begin talking to the agent, `@kimuson/modular-mcp` registers two tools:

- `get-modular-tools(group: string)`: fetch the tool list and schemas for a specific group
- `call-modular-tool(group: string, name: string, args: object)`: run a tool from a specific group

And the description of `get-modular-tools` adds something like this to the system prompt:

```
modular-mcp manages multiple MCP servers as organized groups and, instead of
overwhelming the LLM with every tool description, serves only the tool
descriptions for the group you need, on demand.
Use this tool to fetch the tools available in a given group, then use
call-modular-tool to run them.

Available groups:
- context7: use me when you want to search library documentation
- playwright: use me when you want to drive and automate a browser
```

Putting the names and descriptions of the available groups in that description is the crux of it: the agent learns which groups exist straight from the system prompt, with no tool call required.

After that, actually running something is easy:

1. It hits a situation that needs browser automation and, knowing from the system prompt that "browser stuff apparently means the playwright group", it looks up the usable functions: `get-modular-tools(group="playwright")`
2. Function names and schemas come back, and it calls `call-modular-tool(group="playwright", name="browser_navigate", args={"url": "https://example.com"})` accordingly

Here's a log of it actually running in Claude Code:

[screenshot]

Compared to the normal approach there's one extra `get-modular-tools` step, but it works correctly.

## Let's look at the context

So — the whole point was reducing context size, so let's see how much difference it actually makes.

The only MCP I keep permanently installed is `@upstash/context7-mcp`, since it's used often and has few tools, precisely to avoid context bloat. So, as before, I'll add Playwright MCP and check.

### First, the before

```
> /context
  ⎿
      Context Usage
     ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁   claude-sonnet-4-5-20250929 · 82k/200k tokens (41%)
     ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛀ ⛀ ⛀
     ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶   ⛁ System prompt: 2.4k tokens (1.2%)
     ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶   ⛁ System tools: 15.7k tokens (7.8%)
     ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶   ⛁ MCP tools: 16.7k tokens (8.3%)
     ...
```

⛁ System tools: 15.7k tokens (7.8%)
⛁ MCP tools: 16.7k tokens (8.3%)

Those two look like the big ones.

Playwright's footprint is large as expected — MCP alone takes up 8.3% of the window (16.7k/200k).

### After: using Modular MCP

```
> /context
  ⎿
      Context Usage
     ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁ ⛁   claude-sonnet-4-5-20250929 · 68k/200k tokens (34%)
     ⛀ ⛀ ⛀ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶
     ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶   ⛁ System prompt: 2.5k tokens (1.2%)
     ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶   ⛁ System tools: 15.7k tokens (7.8%)
     ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶ ⛶   ⛁ MCP tools: 2.7k tokens (1.4%)
     ...
```

⛁ System tools: 15.7k tokens (7.8%)
⛁ MCP tools: 2.7k tokens (1.4%)

System tools obviously haven't changed, but MCP went from 8.3% → 1.4%. That's roughly an 84% cut in token size, which is pretty substantial.

Also, for the "nice to have occasionally, but 80% of tasks don't need it" class of MCP — like Playwright — you can now toss them in without much thought, since going through Modular MCP only adds one line to the system prompt.

In fact, I added aws-knowledge-mcp-server, which costs 4.8k tokens when added directly, and saw no increase in token size at all.

## Wrap-up

Inspired by Claude Skills, I built Modular MCP to get the same context efficiency out of MCP, and this was the introduction!

https://github.com/d-kimuson/modular-mcp

If you're someone who has a ton of MCPs registered, there's a good chance you're robbing your agent of a fair bit of its thinking ability. Routing them through `@kimuson/modular-mcp` might give your everyday agent a noticeable bump in power.

And if, like me, you've been swapping MCPs in and out by hand because you care about context, this setup makes it much easier to casually register those "useful but rarely needed" MCP servers. Give it a go!

If you look at the repo you'll see it's a fairly thin library, so if security or anything similar worries you, implementing your own on the spot shouldn't take much effort.

See you around!
