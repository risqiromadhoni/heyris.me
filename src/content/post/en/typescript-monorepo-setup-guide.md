---
coverImage:
  src: "@/assets/blogs/how-to-build-typescript-library-in-monorepo.jpg"
  alt: "Photo by Mohammad Rahmani from Unsplash"
  url: "https://unsplash.com/photos/black-laptop-computer-turned-on-displaying-blue-screen-cY1SvvEfRwk"
title: "Building a TypeScript Library in a Monorepo with PNPM and Turborepo"
description: "Learn how to set up a scalable TypeScript monorepo using PNPM, Turborepo, and TypeScript. Step-by-step guide for efficient library development!"
publishDate: "1 December 2024"
tags: ["typescript", "monorepo", "advanced", "library"]
---

## 📌 Introduction

Building a TypeScript library in a monorepo offers several advantages, including better code sharing, streamlined dependency management, and easier maintainability. This guide will walk you through setting up a monorepo structure for a TypeScript library using modern tools like `pnpm`, `Turborepo`, and `TypeScript`.

## 🛠️ Setting Up the Monorepo

### Initialize the Monorepo
We will use `pnpm` as our package manager since it natively supports workspaces and provides better performance compared to `npm` and `yarn`.

```sh
mkdir ts-monorepo && cd ts-monorepo
pnpm init
```

Enable workspaces in `pnpm` by adding the following to `package.json`:

```json
{
  "private": true,
  "workspaces": ["packages/*"]
}
```

### Install Turborepo for Task Orchestration
[Turborepo](https://turbo.build/) helps manage build processes and dependencies efficiently.

```sh
pnpm add -D turbo
```

Create a `turbo.json` configuration file:

```json
{
  "$schema": "https://turborepo.org/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "lint": {},
    "test": {}
  }
}
```

## 🏗️ Creating the TypeScript Library

### Set Up the Package
Create a new package for the library:

```sh
mkdir -p packages/my-library && cd packages/my-library
pnpm init
```

Install TypeScript and necessary dependencies:

```sh
pnpm add -D typescript tsup eslint @types/node
```

Create a `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "module": "ESNext",
    "target": "ES6",
    "declaration": true,
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
```

### Implement the Library Code
Inside `packages/my-library`, create a `src` folder and an `index.ts` file:

```sh
mkdir src && touch src/index.ts
```

Write a simple function inside `src/index.ts`:

```ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

### Build the Library
Add a build script to `package.json`:

```json
{
  "scripts": {
    "build": "tsup src/index.ts --format esm,cjs --dts"
  }
}
```

Run the build command:

```sh
pnpm build
```

### Link the Library in Another Package
If you want to use the library in another package within the monorepo, create another package (e.g., `app`) and add `my-library` as a dependency:

```sh
pnpm add my-library --filter app
```

Now, you can import and use the library inside the `app` package.

```ts
import { greet } from "my-library";
console.log(greet("World"));
```

## ✅ Conclusion

Setting up a TypeScript library in a monorepo structure provides a scalable way to manage dependencies, reuse code, and streamline development. By leveraging `pnpm`, `Turborepo`, and `TypeScript`, you can build and maintain a high-performance library efficiently.
