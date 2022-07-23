<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:39:43
 * @FilePath: /iuUI/docs/components/tooltip/index.md
 * @Description: update here
-->
# Search 阅读提示

:::demo 阅读提示

```vue
<template>
  <h4 class="p8">基本用法</h4>
  <div style="margin:60px;">
    <vul-tooltip >hover</vul-tooltip>
    <br />
    <vul-tooltip tooltip="love iuUI" position="left">
      <vul-search></vul-search>
    </vul-tooltip>
    <br />
    <vul-tooltip tooltip="love iuUI" position="right">hover right</vul-tooltip>
    <br />
    <vul-tooltip position="bottom">hover bottom</vul-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {}
})
</script>
```

:::
<style>
.p8{
  style:"padding:8px"
}
</style>

### methods

|  参数   | 参数 | 默认 |    说明    |
| :-----: | :--: | :--: | :--------: |
| onClick | `e`  |  --  | 事件绑定值 |
