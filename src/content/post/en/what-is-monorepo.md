---
coverImage:
  src: "@/assets/blogs/what-is-monorepo.png"
  alt: "image by voiceflow.com"
  url: "https://www.voiceflow.com/"
title: "What is Monorepo?"
description: "Learn what monorepo is, its benefits, challenges, and how to implement it with pnpm and GitHub. A complete guide for experienced software engineers."
publishDate: "5 Oct 2024"
tags: ["git", "management"]
---

As a software engineer with over 7 years of experience, I have witnessed the evolution of code management in large projects. One increasingly popular approach is the use of monorepos. Let's discuss what a monorepo is, its benefits, challenges, and how to implement it using pnpm and GitHub.

## Understanding Monorepo

A monorepo, short for "monolithic repository," is a software development strategy where the code for various projects or components is stored in a single version control repository. This differs from the traditional approach where each project or module has a separate repository.

## Benefits of Using Monorepo

1. **Code Sharing**: Facilitates sharing and reusing code across projects.
2. **Large-Scale Refactoring**: Changes can be applied to the entire codebase more easily.
3. **Dependency Management**: Ensures consistency of dependency versions across projects.
4. **Team Collaboration**: Enhances visibility and collaboration among different teams.
5. **Atomic Commits**: Allows changes involving multiple projects in a single commit.

## Challenges of Monorepo

1. **Repository Size**: Can become very large over time.
2. **Build Complexity**: Requires an advanced build system to handle various projects.
3. **Access Control**: May need special strategies to restrict access to certain parts of the repo.
4. **Version Control Performance**: Can slow down git operations at a large scale.

## Setting Up Monorepo with pnpm

pnpm is a package manager well-suited for monorepos due to its workspace features. Here are the basic steps to set up a monorepo with pnpm:

1. Initialize the project:
  ```bash
  mkdir my-monorepo && cd my-monorepo
  pnpm init
  ```

2. Create a `pnpm-workspace.yaml` file:
  ```yaml
  packages:
    - 'packages/*'
  ```

3. Create the folder structure:
  ```bash
  mkdir packages
  mkdir packages/project-a packages/project-b
  ```

4. Initialize sub-projects:
  ```bash
  cd packages/project-a && pnpm init
  cd ../project-b && pnpm init
  ```

5. Add scripts in the main `./package.json`:
  ```json title="package.json"
  {
    "scripts": {
     "dev": "pnpm -r run dev",
     "build": "pnpm -r run build",
     "test": "pnpm -r run test"
    }
  }
  ```

## Example Monorepo Repository Tree Structure

Here is an example folder structure for a monorepo using pnpm:

```
my-monorepo/
├── package.json
├── pnpm-workspace.yaml
├── .gitignore
├── README.md
├── packages/
│   ├── project-a/
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── index.js
│   │   └── tests/
│   │       └── index.test.js
│   ├── project-b/
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── index.js
│   │   └── tests/
│   │       └── index.test.js
│   └── shared-utils/
│       ├── package.json
│       └── src/
│           └── utils.js
├── tools/
│   └── build-scripts/
│       └── build.js
└── docs/
   ├── project-a/
   │   └── README.md
   └── project-b/
      └── README.md
```

In this structure:

- `packages/` contains all sub-projects or packages.
- `project-a/` and `project-b/` are examples of separate projects within the monorepo.
- `shared-utils/` is an example of a package that can be used by other projects.
- `tools/` contains build scripts or other utilities used across the monorepo.
- `docs/` stores documentation for each project.

## Managing Monorepo with GitHub

GitHub provides several features to help manage monorepos:

1. **GitHub Actions**: Create CI/CD workflows that can detect changes in specific sub-projects.

2. **Branch Protection Rules**: Apply branch protection rules to control merges into the main branch.

3. **Code Owners**: Use a CODEOWNERS file to specify who is responsible for certain parts of the monorepo.

4. **GitHub Projects**: Utilize to manage and track work across the monorepo.

## Best Practices and Tips

1. **Use Conventional Commits**: Helps in automatic changelog generation and versioning.

2. **Implement Linting and Formatting**: Use tools like ESLint and Prettier to maintain code consistency.

3. **Automate as Much as Possible**: Use GitHub Actions for testing, building, and deploying.

4. **Good Documentation**: Create clear README.md files for each project and at the root of the monorepo.

5. **Consider Using Changesets**: For better versioning and changelog management.

## Conclusion

Monorepos are not a one-size-fits-all solution, but they can be highly beneficial for large projects with many interrelated components. With tools like pnpm and GitHub features, managing a monorepo becomes easier and more efficient. As an experienced engineer, I have seen how this approach can significantly improve team productivity and code quality when implemented correctly.

Remember that transitioning to a monorepo requires careful planning and may need adjustments in your team's development processes. However, with the benefits it offers, a monorepo is worth considering for large-scale projects and growing teams.
