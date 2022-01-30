# Search 模态框

:::demo 模态框

```vue
<template>
  <h4 style="padding:8px" >基本用法</h4 style="padding:8px"></h4>
  <button @click="openWindow">open the Modal</button>
  <i-modal v-model="isShow"></i-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let isShow = ref(false)
    const openWindow = () =>{
      isShow.value = true
    }
    return {
      openWindow,
      isShow
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
