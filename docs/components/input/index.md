# Input 输入框

:::demo 输入框

```vue
<template>
  <h4 style="padding:8px" >基本用法</h4 style="padding:8px"></h4>
  <i-input placeholder="Happy to use iuUI"  v-model:modlueValue="modlueValue"></i-input>
  <h4 style="padding:8px">禁止使用</h4 style="padding:8px"></h4>
  <i-input :disabled="true" placeholder="Happy to use iuUI"></i-input>
  <h4 style="padding:8px">onChange 事件触发</h4 style="padding:8px"></h4>
  <i-input @onHandleChange="getChange" placeholder="Happy to use iuUI" ></i-input>
</template>

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
| :---------: | :-------: | :---: | :----------------------: | --- |
|   v-model   | `string`  |  ''   |          绑定值          |
| placeholder | `string`  |  --   | 可选，文本框 placeholder |     |
|  disabled   | `boolean` | false |  可选，文本框是否被禁用  |

### methods

|   参数   | 参数 | 默认 |    说明    |
| :------: | :--: | :--: | :--------: |
| onChange | `e`  |  --  | 事件绑定值 |
