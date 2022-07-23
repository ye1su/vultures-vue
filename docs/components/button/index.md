<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:19:25
 * @FilePath: /iuUI/docs/components/button/index.md
 * @Description: update here
-->
# Button 按钮

:::demo 按钮

```vue
<template>
  <div>
  <h4 class="p8">基本用法</h4>
    <vul-button></vul-button>
    <h4c lass="p8" >霓虹灯按钮</h4c>
    <vul-button type="neno"></vul-button>
    <h4 class="p8" >渐变按钮</h4>
    <vul-button type="fradual"></vul-button>
    <h4 class="p8" >流光按钮</h4>
    <vul-button type="streamer"></vul-button>
    <h4 class="p8" >弹跳按钮</h4>
    <vul-button type="bounce"></vul-button>
  </div>
</template>
<style>
.p8{
  style:"padding:8px"
}

</style>

```

:::

### API

|    参数     |   类型    | 默认  |           说明           |
| :---------: | :-------: | :---: | :----------------------: |
|   type   | `string`  |  'default'   |   default/neno/fradual/streamer/bounce |
|   content   | `string`  |  'BUTTON'   |   按钮内容   |
