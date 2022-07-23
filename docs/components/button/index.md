<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:11:34
 * @FilePath: /iuUI/docs/components/button/index.md
 * @Description: update here
-->
# Button 按钮

:::demo 按钮

```vue
<template>
  <div>
  <h4 style="padding:8px" >基本用法</h4>
  <Vul-button></Vul-button>
  <h4 style="padding:8px" >霓虹灯按钮</h4>
  <Vul-button type="neno"></Vul-button>
  <h4 style="padding:8px" >渐变按钮</h4>
  <Vul-button type="fradual"></Vul-button>
  <h4 style="padding:8px" >流光按钮</h4>
  <Vul-button type="streamer"></Vul-button>
  <h4 style="padding:8px" >弹跳按钮</h4>
  <Vul-button type="bounce"></Vul-button>
  </div>
</template>


```

:::

### API

|    参数     |   类型    | 默认  |           说明           |
| :---------: | :-------: | :---: | :----------------------: |
|   type   | `string`  |  'default'   |   default/neno/fradual/streamer/bounce |
|   content   | `string`  |  'BUTTON'   |   按钮内容 |
