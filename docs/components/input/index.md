<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:56:46
 * @FilePath: /iuUI/docs/components/input/index.md
 * @Description: update here
-->
# Input 输入框

:::demo 输入框

```vue
<template>
  <h4 class="p8" >基本用法</h4>
  <vul-input placeholder="Happy to use iuUI"  v-model:modlueValue="modlueValue"></vul-input>
  <h4 class="p8">禁止使用</h4>
  <vul-input :disabled="true" placeholder="Happy to use iuUI"></vul-input>
  <h4 class="p8">onChange 事件触发</h4>
  <vul-input @onHandleChange="getChange" placeholder="Happy to use iuUI" ></vul-input>
</template>
<style scope>
.p8{
  padding:8px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const modlueValue = ref('Happy to use iuUI')
    const getChange = (e:Event):void => {
      console.log(modlueValue.value)
      // console.log(e);
    }
   return {
     getChange,
     modlueValue,
   }
  }
})
</script>


```

:::

### API

|    参数     |   类型    | 默认  |           说明           |
| :---------: | :-------: | :---: | :----------------------: |
|   v-model   | `string`  |  ''   |          绑定值          |
| placeholder | `string`  |  --   | 可选，文本框 placeholder |
|  disabled   | `boolean` | false |  可选，文本框是否被禁用  |

### methods

|   参数   | 参数 | 默认 |    说明    |
| :------: | :--: | :--: | :--------: |
| onChange | `e`  |  --  | 事件绑定值 |
