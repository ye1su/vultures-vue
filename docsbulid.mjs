#!/usr/bin/env zx

await $`yarn docs:build`
cd('./docs/.vitepress/dist')
await $`pwd`
await $`git init`
await $`git add .`
await $`git commit -m page`
await $`git push https://gitee.com/si7578/iuUI.git master`