# Card 卡片

通用卡片容器。

### 何时使用

基础卡片容器，其中可包含文字，列表，图片，段落，用于概览展示时。

### 基本用法

:::demo

```vue
<template>
  <Vul-card class="i-card">
    <template #cardAvatar>
      <img src="https://gitee.com/si7578/picbed/raw/master/img/202202031704475.png" ></img>
    </template>
    <template #cardTitle>
      IUUI Course
    </template>
    <template #cardSubtitle class="card-demo-icon">
      <span>IUUI</span>
    </template>
    <template #cardContent>
      IUUI is a free open-source
    </template>
    <template #cardActions>
      <div class="card-block">
        happy to use iuui
      </div>
    </template>
  </Vul-card>
</template>
<style lang="scss">
.card-demo-icon {
  cursor: pointer;
  font-size: 16px;
  margin-right: 8px;
  vertical-align: middle;
}
.card-demo-icon + span {
  vertical-align: middle;
}
.card-block {
  margin-right: 16px;
  i{
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  i + span {
    vertical-align: middle;
  }
}
.i-card {
  cursor: pointer;
  transition:
    box-shadow .3s cubic-bezier(.645,.045,.355,1),
    transform .3s cubic-bezier(.645,.045,.355,1);
  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
    transform: translateY(-5px);
  }
}
.card-container {
  width: 350px;
}
.action-text {
  color: #8a8e99;
}
</style>
```

:::

### 使用图片

:::demo

```vue

<template>
  <i-card class="i-card" :src="'https://devui.design/components/assets/image1.png'">
    <template #cardAvatar>
      <img src="https://gitee.com/si7578/picbed/raw/master/img/202202031704475.png" ></img>
    </template>
    <template #cardTitle>
      IUUI Course
    </template>
    <template #cardSubtitle class="card-demo-icon">
     <span>IUUI</span>
    </template>
    <template #cardContent>
      IUUI is a free open-source
    </template>
    <template #cardActions>
      happy to use iuUI
    </template>
  </i-card>
</template>
<style lang="scss">
  .icon {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .icon + span {
    vertical-align: middle;
  }
  .card-block {
    margin-right: 16px;
    i{
      cursor: pointer;
      font-size: 16px;
      margin-right: 8px;
      vertical-align: middle;
    }
    i + span {
      vertical-align: middle;
    }
  }
  .i-card {
    cursor: pointer;
    transition:
      box-shadow .3s cubic-bezier(.645,.045,.355,1),
      transform .3s cubic-bezier(.645,.045,.355,1);
    &:hover {
      box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
      transform: translateY(-5px);
    }
  }
  .card-container {
    width: 350px;
  }
  img {
    max-width: none;
  }
  .action-text {
    color: #8a8e99;
  }
</style>

```

:::

<style lang="scss">
.card-demo-icon {
  cursor: pointer;
  font-size: 16px;
  margin-right: 8px;
  vertical-align: middle;
}
.card-demo-icon + span {
  vertical-align: middle;
}
.card-block {
  margin-right: 16px;
  i{
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  i + span {
    vertical-align: middle;
  }
}
.i-card {
  cursor: pointer;
  transition:
    box-shadow .3s cubic-bezier(.645,.045,.355,1),
    transform .3s cubic-bezier(.645,.045,.355,1);
  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
    transform: translateY(-5px);
  }
}
.card-container {
  width: 350px;
}
img {
  max-width: none;
}
.action-text {
  color: #8a8e99;
}
.custom-avatar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  .custom-star-action {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>

### 参数

|    参数     |   类型   |   默认    | 说明                     | 跳转 Demo                         |
| :---------: | :------: | :-------: | :----------------------- | -------------------------------- |
|    src     | `string` |    ''    | 可选，图片路径          | [使用图片](#使用图片)             |
|    align     | `'start'\|'end'\|'spaceBetween'\|` |  `'start'` | 可选，操作区域对齐方式，分别对应起始对齐，尾部对齐，拉伸对齐 | [自定义区域](#自定义区域) |

### 插槽

两种方式使用：`v-slot:cardTitle` 或者具名插槽`#cardTitle`
|    名称     |   描述   |
| :---------: | :------: |
|    cardAvatar     | 头像区域，用作头像等图片展示 |
|    cardTitle     | 卡片的主要内容描述，一般定义为卡片名称 |
|    cardSubtitle     | 对标题的补充，可包含标签等信息 |
|    cardActions     | 决策作用，可以包含操作文本或者操作图标 |
