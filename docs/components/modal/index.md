# Search 模态框

:::demo 模态框

```vue
<template>
  <h4 class="p8" >基本用法</h4>
  <vul-button content="打开弹窗" @click="openWindow"></vul-button>
  <vul-modal v-model="isShow" @onSure="getModal"></vul-modal>
  <h4 class="p8" >插槽用法</h4>
  <vul-button content="打开弹窗" type="streamer" @click="openWindow1"></vul-button>
  <vul-modal v-model="isShow1" @onSure="getModal">
    <template v-slot:title>
      <h1>Hellow iuui</h1>
    </template>
    <vul-search></vul-search>
  </vul-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let isShow = ref(false)
    let isShow1 = ref(false)
    const openWindow = () =>{
      isShow.value = true
    }
    const openWindow1 = () =>{
      isShow1.value = true
    }
    const getModal = () =>{
      alert('happy to use iuui')
    }
    return {
      openWindow,
      openWindow1,
      isShow,
      isShow1,
      getModal
    }
  }
})
</script>
<style scope>
.p8{
  style:"padding:8px"
}
</style>

```

:::

### API

|    参数     |   类型    | 默认  |           说明           |
| :---------: | :-------: | :---: | :----------------------: |
|   v-model   | `boolean`  |  ''   |        显示/隐藏          |

### methods

|  参数   | 参数 | 默认 |    说明    |
| :-----: | :--: | :--: | :--------: |
| onSure |   |  --  | 事件触发后执行的函数 |
