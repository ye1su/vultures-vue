# 快速开始

引导您如何在项目中使用iuUI


### 1. 创建一个项目

推荐使用@vite/cli创建你的项目

```shell
yarn create vite my-vue-app --template vue-ts
```

### 2. 安装

进入你的项目文件夹，使用yarn安装DevUI

```shell
yarn add vue-iuui
```

### 3. 引入模块和样式

main.ts

```js
// 全局引入
import iuui from 'vue-iuuiui'
import 'vue-devui/style.css'

createApp(App).use(iuui).mount('#app')
```


### 4. 启动开发调试

```shell
yarn dev
```