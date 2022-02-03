# Button 按钮

:::demo 按钮

```vue
<template>
  <div>
  <h4 style="padding:8px" >基本用法</h4>
  <i-button></i-button>
  <h4 style="padding:8px" >霓虹灯按钮</h4>
  <i-button type="neno"></i-button>
  <h4 style="padding:8px" >渐变按钮</h4>
  <i-button type="fradual"></i-button>
  <h4 style="padding:8px" >流光按钮</h4>
  <i-button type="streamer"></i-button>
  <h4 style="padding:8px" >弹跳按钮</h4>
  <i-button type="bounce"></i-button>
  </div>
</template>


```
:::

### API

|    参数     |   类型    | 默认  |           说明           |
| :---------: | :-------: | :---: | :----------------------: |
|   type   | `string`  |  'default'   |   default/neno/fradual/streamer/bounce |
|   content   | `string`  |  'BUTTON'   |   按钮内容 |