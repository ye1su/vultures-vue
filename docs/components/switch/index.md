<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:38:38
 * @FilePath: /iuUI/docs/components/switch/index.md
 * @Description: update here
-->
# Search 搜素框

:::demo 搜索框

```vue
<template>
  <h4 class="p8">基本用法</h4>
  <vul-switch v-model="value" @change="getChange" ></vul-switch>
  <h4 class="p8" >自定义颜色</h4>
  <vul-switch v-model="value1" color="#1f2f3f"></vul-switch>
  <h4 class="p8" >禁用</h4>
  <vul-switch v-model="value1" :disabled="true"></vul-switch>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let value =ref(false)
    let value1 =ref(true)
    const getChange = (e) => {
      console.log(e)
    }
    return {
      value,
      value1,
      getChange
    }
  }
})
</script>
```

:::

<style>
.p8{
  style:"padding:8px"
}
</style>

### API

|    参数     |   类型    | 默认  |           说明           |
| :---------: | :-------: | :---: | :----------------------: |
|   v-model   | `string`  |  ''   |          绑定值          |
| color  | `string`  |  --   | 可选，开关颜色 |
|  disabled   | `boolean` | false |  可选，开关是否被禁用  |

### methods

|  参数   | 参数 | 默认 |    说明    |
| :-----: | :--: | :--: | :--------: |
| change | `e`  |  --  | 事件绑定值 |
