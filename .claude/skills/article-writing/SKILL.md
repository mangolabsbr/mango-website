---
name: article-writing
description: Use when turning bullet-point notes into a finished technical article. Guidelines for writing in a natural voice and style.
---

# Purpose

Transform technical bullet-point content into natural, readable articles that avoid AI-generated writing patterns while maintaining technical accuracy.

# Writing Guidelines

<natural_writing>

## What natural writing looks like

**Core principle**: avoid the mechanical, formal impression of AI-generated text. Aim for a technical article that reads like a person wrote it.

Voice:

- Plain conversational register — write the way you'd explain it to a colleague
- Casual and approachable tone
- Use the first person where it fits ("I", "personally")
- Include personal phrasing: "I gave it a try", "I think", "this one's handy"

Paragraphs:

- Keep them short
- One topic per paragraph
- Connect paragraphs naturally ("So,", "Anyway,", "Around that time,", "Which got me thinking,")
- Break lines often enough to stay readable

</natural_writing>

<avoid_ai_like_patterns>

## Concrete ways to avoid AI-sounding prose

Don't number your headings:

- ❌ `## 1. Introduction`
- ❌ `## 2. How it works`
- ✅ `## Introduction`
- ✅ `## How it works`

Using lists:

- Prefer bullets (`-`); use numbered lists (`1. 2. 3.`) only when the order genuinely matters
- ❌ Numbered lists everywhere
- ✅ A reasonable balance of bullets and explanatory paragraphs

Avoid manual-speak:

- ❌ "First, run X. Next, configure Y. Finally, verify Z."
- ✅ "Run X, then configure Y. That's enough to see Z working."

Avoid overly formal wording:

- ❌ "utilize", "in order to", "perform verification", "it is possible to"
- ✅ "use", "to", "check", "take a look", "you can"

Don't force your conclusions on the reader:

- ❌ "This clearly improves X."
- ✅ "It feels like X got better." / "Seems to have a real effect on X."

</avoid_ai_like_patterns>

<article_structure>

## Article structure patterns

**Intro**: start with the background, the problem, or your own motivation for looking into it.

**Body**: structure with h2/h3 (no numbers in headings), balancing explanation and concrete examples.

**Wrap-up**: restate the key points, and offer the reader a next step or a call to action.

</article_structure>

<content_balance>

## Balancing the content

- Mix bullet lists with explanatory paragraphs
- Include concrete examples and use cases — explain _why_ you did it that way, not just what you did
- Keep technical facts objective; keep impressions and judgments personal
- Don't overstate. Leave room for uncertainty ("this might be...", "I'd guess that...")

</content_balance>

<code_blocks>

## Handling code blocks

- Tag the language properly (`typescript`, `bash`, `json`, …)
- Add the filename as a title where it helps (`typescript:src/config.ts`)
- Explain the code in the prose — don't lean on comments alone
- For long code, show an excerpt rather than the whole thing

</code_blocks>

# Reference Articles

**CRITICAL: Before writing ANY article, you MUST read ALL 4 reference articles below.**

Style can't be fully captured in a description. Read all four real articles and learn their flow, phrasing, and rhythm.

Read every reference article (paths are relative to this skill's directory):

- `examples/sample-article-1.md`
- `examples/sample-article-2.md`
- `examples/sample-article-3.md`
- `examples/sample-article-4.md`

When reading the sample articles, pay attention to:

- Natural paragraph transitions ("So,", "Anyway,", "Around that time,", "And that's roughly it,", "…is what happened")
- Personal voice and casual expressions ("I gave it a try", "it tends to be", "…right?", "this one's handy")
- When the author uses lists vs. narrative paragraphs
- How code blocks are introduced and explained naturally
- The conversational flow from introduction to conclusion
- Personal anecdotes and motivations ("because I wanted to skive off the boring parts of development", "I'm one of those people myself")
- Always link to our app's page if mentioned
