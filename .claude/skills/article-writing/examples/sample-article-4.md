# Sample article 4: The road to bringing Visual Regression Testing in-house

This is a sample of a real published technical article. Use it as a reference for style and voice.

---

## Introduction

Hello! I'm [@\_kimuson](https://x.com/_kimuson), an engineer on the development team driving the Kaipoke renewal.

In frontend development, visual regression testing (VRT from here on) is indispensable. Our team had been using **Chromatic** for a long time, but as the project grew we needed to look for a more scalable and cost-efficient solution.

This article is part one of two, covering the background that led us to the in-house decision and how we evaluated the alternatives. Part two will focus on the implementation and the details of the migration.

## Deciding to build it ourselves

### What Chromatic gets right

Chromatic is a SaaS that provides Storybook-based VRT. Setup is easy, and it offers an excellent developer experience with an intuitive interface.

The things our team valued most:

- You can get Storybook-based VRT running with minimal setup
  - The VRT thresholds are tuned well, and flaky tests stay to a minimum without any tuning of our own
- Clear diff display, and a flexible approve/reject workflow at the Story level
- VRT lets you edit the frontend safely
- The developer experience of automatically seeing how a change affects the UI during code review
- On top of VRT, Storybook gets hosted, letting you share UI states that are hard for non-engineers to reproduce

### What made us consider going in-house

The biggest issue was cost.

Our team was adding roughly 130,000 snapshots per month, and by the time we started evaluating we'd reached about 700,000 in total. Chromatic bills per snapshot, so the cost grows linearly with them. Thinking about a cost structure appropriate for the size of the project, we came around to considering an in-house build.

## Evaluating the alternatives

The key question for building in-house was how to replace the value Chromatic had been providing. Before looking at alternative tools, we first laid out what we were actually getting from Chromatic.

### The value we got from Chromatic

Chromatic isn't just a VRT tool — it provides value across the frontend development flow and quality assurance more broadly.

Three things mattered most:

1. **Regression detection**
   - Automatically catches unintended changes to the UI
   - A foundation for continuous quality assurance

2. **Better development experience**
   - Visually confirm how a PR's changes affect the UI
   - Approving/rejecting at the Story level allows fine-grained, per-component review

3. **A communication platform via Storybook sharing**
   - Works as a communication tool with designers and product managers
   - UI states that are hard to reproduce can be shared with the parameters pinned in Storybook
   - Acts as a catalog where you can browse every variation of a component

### Replacing Storybook hosting

On the "communication platform via Storybook sharing" front, Storybook itself supports static delivery.

So all we needed was a mechanism to "build per branch and host it on something like AWS S3", and it looked like a GitHub Actions workflow uploading to AWS S3 would cover it.

### Replacing VRT runs and report review

#### Storycap + reg-suit

Storycap combined with reg-suit is a widely used option for doing VRT with open source.

VRT breaks down into roughly three pieces:

1. Taking the screenshots
2. Detecting UI diffs
3. Displaying a report

Storycap covers piece 1, the capture, while reg-suit covers 2 and 3, the diff detection and the report.

#### Lost Pixel

We also evaluated Lost Pixel, another tool for Storybook-based VRT. There's a Platform (SaaS) version and an OSS version; we looked at the OSS one.

## Comparing the options and picking one

Based on those evaluations, we decided on the **Storycap + reg-suit** setup.

Why:

- Screenshot capture: Lost Pixel has trouble scaling its run time, and not being able to shard was fatal
- Regression detection and reporting: reg-suit has a report screen, which we judged would preserve developer productivity best

## Wrap-up

While evaluating a move away from Chromatic, we tried several OSS VRT tools and approaches. In the end, balancing cost savings against developer experience, we concluded that Storycap + reg-suit was the best fit.

The deciding factors:

1. **Substantial cost reduction**
2. **Acceptable developer experience**
3. **Realistic CI run times**

### Coming next

In part two I'll cover the things we worked out while actually building the workflow around Storycap + reg-suit, and the migration process itself!
