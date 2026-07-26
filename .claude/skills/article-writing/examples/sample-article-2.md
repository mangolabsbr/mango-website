# Sample article 2: Tips for building AI Agents with the Vercel AI SDK and mastra

This is a sample of a real published technical article. Use it as a reference for style and voice.

---

_Because I wanted to skive off the boring parts of development_, I've been building my own autonomous, Devin-like LLM agent on top of the [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction) and [mastra](https://mastra.ai/) ecosystem, so here's what I learned.

Hopefully it's useful to anyone about to build an agent in the TypeScript ecosystem, not just a development agent.

I won't cover the specifics of how to use each SDK — I'll focus on the technology choices and the spots where I kept getting stuck.

## Choosing an SDK in the TypeScript ecosystem

If you want to touch an LLM from code, reaching for an SDK is the quickest route, but there are several options.

- Use a specific provider's SDK, like OpenAI's or Anthropic's
  - Official, stable, easy to use
  - On the other hand, it's awkward to swap models, or to use another provider's model for one particular purpose
    - Claude Sonnet 3.5 (or 3.7) is the popular choice for agent work, but it's fairly expensive, so you often want to route some tasks to a more cost-effective model

- Use an SDK that abstracts over LLM providers behind a common interface
  - The well-known ones are LangChain and LiteLLM
    - Both are written in Python, though each ships a JavaScript version too
    - (Purely my own impression, but) they feel like a straight port of an SDK designed for Python, and the experience was pretty rough
  - [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction): Vercel's SDK, written in TypeScript. The abstractions feel TypeScript-native and pleasant to write against, and you can also use [mastra](https://mastra.ai/), an agent framework that sits on top of it

This article is about the Vercel AI SDK and mastra, since they're the comfortable option in TypeScript.

## Choosing a model

For model selection, the sensible approach seems to be adjusting as you go — build the agent, see where it trips up, and get a feel for the quality you actually need.

That said, if you're just starting out, Claude Sonnet 3.5 (or 3.7) is a safe pick.

OpenAI's o1 and o3 family are a poor fit for computer-using agentic workflows. These models are built to think at length about a given prompt and then return an answer, and as a trade-off they don't support tool calls.

Agentic workflows, meanwhile, loop: make tool calls, feed the results back to the model, use another tool or move on to the next step. So if you're building the computer-using kind of agent, you need a model with tool call support.

## Implementing RAG

If your agent needs to reference a codebase or external documentation, you'll need RAG (Retrieval Augmented Generation).

mastra does provide RAG machinery, but personally I decided against using it.

There were two main reasons:

### Data source support

mastra's RAG is handled through an abstraction called a Retriever. It's the layer that takes a data source (a GitHub repository, Notion data, etc.), embeds it, and builds the RAG index.

The set of supported data sources is limited right now, and the one I wanted wasn't among them, so I implemented the retriever part myself.

### Building the Knowledge object

In mastra you enable RAG by constructing a Knowledge object.

```typescript
const knowledge = new Knowledge({
  name: "my-knowledge",
  embedder,
  vectorStore,
  retriever,
});
```

The embedder and vectorStore that this Knowledge object needs are things you have to supply yourself.

The docs show an example combining OpenAI and Pinecone, but I wanted something a bit simpler, so I built mine with [Chroma](https://www.trychroma.com/), which runs locally.

## Writing the loop yourself

mastra's Agent handles the loop for you — calling tools and moving to the next step using the results.

In practice, though, plenty of cases came up where I wanted to slip custom processing into the middle of that loop.

For example:

- Logging tool execution results
- Running extra work when a particular tool gets called
- Saving state partway through the loop

To handle those, I ended up implementing the loop myself.

```typescript
while (true) {
  const result = await generateText({
    model,
    messages,
    tools,
  });

  if (result.finishReason === "stop") {
    break;
  }

  // Run the tool
  for (const toolCall of result.toolCalls) {
    const toolResult = await executeTool(toolCall);

    // Custom processing goes here
    await logToolExecution(toolCall, toolResult);

    messages.push({
      role: "tool",
      content: toolResult,
    });
  }
}
```

Writing the loop yourself like this gives you much more flexible control.

## Wrap-up

I've collected the key points for developing an AI agent with the Vercel AI SDK and mastra.

- Claude Sonnet 3.5/3.7 is the model I'd recommend
- Depending on your use case, consider implementing RAG yourself
- Writing the loop yourself buys you a lot of flexibility

Hope it helps anyone about to start on agent development!
