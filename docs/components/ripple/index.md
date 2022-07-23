<!--
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 22:34:52
 * @FilePath: /iuUI/docs/components/ripple/index.md
 * @Description: update here
-->
# Ripple 水波纹指令

<span color="#409EFF">`v-ripple`</span> 指令 用于用户动作交互场景, 可以应用于任何块级元素 <span color="#409EFF">`注：只能作用于块级元素`</span>

:::demo 用户 可以在组件 或者 HTML 元素上任意使用 <span color="#409EFF">`v-ripple`</span> 指令 使用基本的 <span color="#409EFF">`v-ripple`</span> 指令， `v-ripple` 接收 一个对象

```vue
<template>
  <h4 style="padding:8px" >基本用法</h4>
  <div class="ripple-button">
    <div class="ripple-htmlElement" v-ripple="{ color: '#5e7ce0',duration: 0.3 }">HTML元素 中使用 v-ripple</div>
  </div>
  <div class="ripple-button">
    <div class="ripple-htmlElement" v-ripple="{ duration: 0.8 }">HTML元素 中使用 v-ripple</div>
  </div>
</template>
<style scoped>
.ripple-button {
  display: flex;
}
</style>
```

:::

### 自定义色彩

:::demo

```vue
<template>
  <div>
    <ul>
      <li
        v-for="item in [
          { color: '#409EFF', text: '这是一条 Primary 涟漪' },
          { color: '#67C23A', text: '这是一条 Success 涟漪' },
          { color: '#E6A23C', text: '这是一条 Warning 涟漪' },
          { color: '#F56C6C', text: '这是一条 Danger 涟漪' },
          { color: '#909399', text: '这是一条 Info 涟漪' }
        ]"
        :style="{ color: item.color }"
      >
        <div class="ripple-changeTextColor" v-ripple="{ duration: 0.39 }">
          {{ item.text }}
        </div>
      </li>
    </ul>
  </div>
</template>
```

:::

<style>
.ripple-htmlElement {
    width: 600px;
    height: 150px;
    text-align: center;
    line-height: 150px;
    border: 1px solid #eee50;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;
    user-select: none;
}
.ripple-changeTextColor {
    display: block;
    padding: 20px;
    user-select: none;
}
ul,li{
  list-style:none;
}
</style>

### API

|      参数       |   类型    |    默认     |               说明                |
| :-------------: | :-------: | :---------: | :-------------------------------: |
|      color      | `string`  | `#00000050` |      可选，默认当前文本颜色       |
| initial-opacity | `number`  |    `0.1`    |   可选，初始交互效果透明度大小    |
|  final-opacity  | `number`  |    `0.1`    | 可选，结束交互效果长按透明度大小  |
|    duration     | `number`  |   `0.4s`    |          可选，持续时间           |
|     easing      | `string`  | `ease-out`  |          可选，缓动动画           |
|   delay-time    | `number`  |   `75ms`    | 可选，延迟 debouceTime 时间后调用 |
|    disabled     | `boolean` |   `false`   |        可选，禁止水波效果         |
