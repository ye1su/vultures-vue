<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:37:06
 * @FilePath: /iuUI/docs/components/skeleton/index.md
 * @Description: update here
-->
# Skeleton 骨架屏

:::demo 骨架屏

```vue
<template>
  <h4 class="p8">基本用法</h4>
  <vul-skeleton></vul-skeleton>
  <h4 class="p8" >长度和数量可变</h4>
  <vul-skeleton :length="500" :num="6"></vul-skeleton>
</template>

```

:::
<style>
.p8{
  style:"padding:8px"
}
</style>

### API

|  参数  |   类型   | 默认 |     说明     |
| :----: | :------: | :--: | :----------: |
| length | `number` | 300  | 可选，文本值 |
|  num   | `number` |  4   | 可选，文本框 |
