# Search 阅读提示

:::demo 阅读提示

```vue
<template>
  <h4 style="padding:8px">基本用法</h4>
  <div style="margin:60px;">
    <i-tooltip >hover</i-tooltip>
    <br />
    <i-tooltip tooltip="love iuUI" position="left">
      <i-search></i-search>
    </i-tooltip>
    <br />
    <i-tooltip tooltip="love iuUI" position="right">hover right</i-tooltip>
    <br />
    <i-tooltip position="bottom">hover bottom</i-tooltip>
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

### methods

|  参数   | 参数 | 默认 |    说明    |
| :-----: | :--: | :--: | :--------: |
| onClick | `e`  |  --  | 事件绑定值 |
