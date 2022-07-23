<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:35:37
 * @FilePath: /iuUI/docs/components/search/index.md
 * @Description: update here
-->
# Search 搜素框

:::demo 搜索框

```vue
<template>
  <h4 style="padding:8px" >基本用法</h4>
  <vul-search @onSearch="getInfo"></vul-search>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const getInfo = (e:Event) => {
      console.log(e)
    }
    return {
      getInfo,
    }
  }
})
</script>
```

:::

### methods

|  参数   | 参数 | 默认 |    说明    |
| :-----: | :--: | :--: | :--------: |
| onClick | `e`  |  --  | 事件绑定值 |
