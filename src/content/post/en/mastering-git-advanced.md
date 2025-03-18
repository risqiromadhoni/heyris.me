---
coverImage:
  src: "@/assets/blogs/advanced-git.jpg"
  alt: "Photo by RealToughCandy.com from Freepik"
  url: "https://www.pexels.com/photo/person-holding-a-small-paper-11035539"
title: "Mastering Git for Efficient Development"
description: "Master advanced Git techniques like rebase, cherry-picking, Git hooks with Husky, Commitlint, debugging, and managing large repositories. Boost your Git workflow!"
publishDate: "1 Oct 2024 02:00"
tags: ["git", "engineer", "advanced"]
---

## Introduction
As you become more comfortable with Git, you’ll need to leverage its advanced features to streamline your workflow, optimize collaboration, and manage complex projects efficiently. This guide covers some of Git’s powerful commands and techniques.

## 1. Working with Rebase
### Rebasing vs. Merging
Rebasing allows you to integrate changes from one branch into another more cleanly compared to merging.

- **Merge**: Creates a new commit to join branches.
- **Rebase**: Moves the base of your branch to a new commit.

```sh
# Switch to your feature branch
git checkout feature-branch

# Rebase from the main branch
git rebase main
```

If conflicts occur during rebase, resolve them and continue:
```sh
git rebase --continue
```
To abort a rebase:
```sh
git rebase --abort
```

## 2. Cherry-Picking Commits
Cherry-picking allows you to apply specific commits from one branch to another.
```sh
git checkout main
git cherry-pick <commit-hash>
```
This is useful when you want to bring only select changes into a branch without merging everything.

## 3. Interactive Rebase
Interactive rebasing helps you clean up your commit history by squashing, reordering, or editing commits.
```sh
git rebase -i HEAD~5
```
In the interactive editor, replace `pick` with:
- `squash (s)`: Merge commit with the previous one.
- `edit (e)`: Modify commit message or content.
- `reword (r)`: Change commit message.

## 4. Stashing Changes for Later
If you need to switch branches but don’t want to commit yet, stash your changes.
```sh
git stash
```
To apply the latest stash:
```sh
git stash apply
```
To apply and remove the stash:
```sh
git stash pop
```
To view all stashed changes:
```sh
git stash list
```

## 5. Undoing Changes
### Reset a Commit
Soft reset (keeps changes in the staging area):
```sh
git reset --soft HEAD~1
```
Hard reset (removes changes permanently):
```sh
git reset --hard HEAD~1
```

### Revert a Commit
Revert keeps the commit history intact by creating a new commit to undo the previous one:
```sh
git revert <commit-hash>
```

## 6. Working with Tags
Tags help mark important commits, such as release versions.

### Creating a Tag
```sh
git tag -a v1.0 -m "Version 1.0 release"
```
Push a tag to the remote repository:
```sh
git push origin v1.0
```
List all tags:
```sh
git tag
```

### Deleting a Tag
```sh
git tag -d v1.0
```
Remove a remote tag:
```sh
git push --delete origin v1.0
```

## 7. Bisect for Debugging
Git Bisect helps find the commit that introduced a bug.
```sh
git bisect start
git bisect bad # Mark the current commit as bad
git bisect good <commit-hash> # Mark a known good commit
```
Git will check out a commit in between. Test your code and mark it good or bad:
```sh
git bisect good # or
git bisect bad
```
Once found, reset bisect:
```sh
git bisect reset
```

## 8. Git Hooks
Hooks allow you to run scripts before or after Git events (e.g., pre-commit, pre-push).

Example: Create a pre-commit hook to check for linting issues.
```sh
nano .git/hooks/pre-commit
```
Add the following script:
```sh
#!/bin/sh
npm run lint
if [ $? -ne 0 ]; then
  echo "Linting failed. Commit aborted."
  exit 1
fi
```
Save and make it executable:
```sh
chmod +x .git/hooks/pre-commit
```

### Using Husky for Git Hooks
Husky is a tool that simplifies Git hooks in Node.js projects.

Install Husky:
```sh
npm install husky --save-dev
```
Enable Husky in your project:
```sh
npx husky install
```
Add a pre-commit hook:
```sh
npx husky add .husky/pre-commit "npm run lint"
```
Ensure the hook is executable:
```sh
chmod +x .husky/pre-commit
```

### Enforcing Commit Message Conventions with Commitlint
Commitlint helps ensure commit messages follow a standard format.

Install Commitlint:
```sh
npm install --save-dev @commitlint/{config-conventional,cli}
```
Create a configuration file:
```sh
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```
Add a commit-msg hook with Husky:
```sh
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
Ensure the hook is executable:
```sh
chmod +x .husky/commit-msg
```
Now, commits that don’t follow the conventional format will be rejected.

## 9. Managing Large Repositories with Git LFS
Git LFS (Large File Storage) helps manage large files efficiently.
```sh
git lfs install
git lfs track "*.psd"
```
Commit and push as usual.

## 10. Cleaning Up Unused Data
```sh
git gc --prune=now
```
Removes unnecessary files and optimizes the local repository.

## Conclusion
Mastering these advanced Git techniques will improve your workflow, efficiency, and collaboration. Keep practicing and refining your Git skills to become a power user!

