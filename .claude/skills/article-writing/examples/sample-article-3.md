# Sample article 3: Digging into how RUN --mount=type=bind works to get rid of COPY overhead

This is a sample of a real published technical article. Use it as a reference for style and voice.

---

## Introduction

This article is the December 6th entry in series 2 of the SMS Co., Ltd. Advent Calendar 2024.

I tried out `RUN --mount=type=bind`, which lets you mount files at build time in Docker, and ran into a few things:

- I kept confusing it with `docker run --mount type=bind` and got stuck on the mental model
- Later steps can't see the mount, so using it for real takes some thought

In this entry I'll poke at the finer details to build up an understanding, then think about how to actually put it to work in a Dockerfile.

## Recap: `docker container run --mount type=bind`

Before getting to the main topic, `RUN --mount=type=bind`, let's recap the well-known mount bind from docker run.

Passing the `--mount type=bind` option to docker run mounts files or directories from the host machine into the container.
While it's mounted, the container can read the files bound from the host, and changes on the host side are reflected inside the container:

```bash
$ echo 'dummy' >> ./dummy.txt
$ docker container run --mount type=bind,source=./,target=/run-mount ubuntu:latest bash -c 'cat /run-mount/dummy.txt'
dummy
```

And if you edit a file inside the container, the change shows up on the host too:

```bash
$ docker container run -it --mount type=bind,source=./,target=/run-mount ubuntu:latest bash -c 'echo "dummy from container" >> /run-mount/dummy.txt'
$ cat ./dummy.txt
dummy
dummy from container
```

It gets used all over the place — feeding in config files after startup (rather than at build time), keeping files in sync between the container and the host when developing on Docker, and so on.

## `RUN --mount-type=bind`: binding the context at build time

So, on to the main topic: `RUN --mount-type=bind`.

Let's start with the official documentation.

[Dockerfile reference | Docker Docs](https://docs.docker.com/reference/dockerfile/#run---mount)

> (on --mount)
> RUN --mount allows you to create filesystem mounts that the build can access. This can be used to:
>
> (on type=bind)
> This mount type allows binding files or directories to the build container. A bind mount is read-only by default.
>
> (on the from option)
> Build stage, context, or image name for the root of the source. Defaults to the build context.

So specifying `--mount=type=bind, ...` reads as:

- It creates a read-only mount that the build can access
- Unless you specify `from` explicitly, the mount source is the build context (**not the host machine**)
  - Specify it and you can mount from any stage or any image

Which means a build that copies the source in, like this:

```dockerfile
WORKDIR /app
COPY . .
RUN pnpm build
```

can be written to mount the source instead of copying it:

```dockerfile
WORKDIR /app
RUN --mount=type=bind,source=.,target=/app \
  pnpm build
```

## Building in a single stage

For a concrete example, let's start with using `RUN --mount=type=bind` in a single stage.

```dockerfile
FROM node:20-slim AS build

WORKDIR /app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline

RUN --mount=type=bind,source=.,target=/app \
    npm run build
```

Here we mount `package.json` and `package-lock.json` to run `npm ci`, then mount the whole source tree and build.

The important part: **a mount only lives for that one step**. The next step can't see it.

## Dealing with artifacts written out via the readwrite option

If you want to use the build artifacts in a later step, the `readwrite` option gives you a writable mount.

```dockerfile
RUN --mount=type=bind,source=.,target=/app,readwrite \
    npm run build
```

Even then, though, the artifacts are written to the mount target, so later steps still can't see them.

To actually use the artifacts, you have to copy them explicitly:

```dockerfile
RUN --mount=type=bind,source=.,target=/build-context,readwrite \
    npm run build && \
    cp -r /build-context/dist /app/dist
```

## Wrap-up

Using `RUN --mount=type=bind` cuts down the overhead of COPY.

Key points:

- A mount only lives for that one step
- Using the artifacts requires an explicit copy
- It works well combined with cache mounts

It helps with build times and image size, so give it a try!
