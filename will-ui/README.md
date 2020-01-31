# will-ui

## 如何使用

- 初始化您的项目

```
vue create demo
```

- 安装 will-ui 组件库

```
npm i @will1123/will-ui
```

- 全局引入

```
import WillUi from '@will1123/will-ui'
import "@will1123/will-ui/dist/will-ui.css";

Vue.use(WillUi)
```

# 组件

### Will-button

| 参数     | 说明                     | 类型    | 可选                                        | 默认  |
| :------- | :----------------------- | :------ | :------------------------------------------ | :---- |
| type     | 类型                     | string  | primary / success / warning / danger / info | ——    |
| plain    | 是否朴素按钮             | boolean | true / false                                | false |
| round    | 是否圆角按钮             | boolean | true / false                                | false |
| circle   | 是否圆形按钮             | boolean | true / false                                | false |
| disabled | 是否禁用状态             | boolean | true / false                                | false |
| icon     | 图标类名 font-awesome 库 | string  | ——                                          | ——    |

### Will-input

| 参数          | 说明                 | 类型    | 可选         | 默认  |
| :------------ | :------------------- | :------ | :----------- | :---- |
| v-model       | 绑定值               | string  | ——           | ——    |
| placeholder   | 输入框占位文本       | string  | ——           | ——    |
| clearable     | 是否可清空           | boolean | true / false | false |
| show-password | 是否显示切换密码图标 | boolean | true / false | false |
| disabled      | 是否禁用状态         | boolean | true / false | false |

### Will-switch

| 参数               | 说明                  | 类型     | 可选 | 默认    |
| :----------------- | :-------------------- | :------- | :--- | :------ |
| v-model            | 是否选中              | boolean  | ——   | ——      |
| name               | 原生 name 属性        | string   | ——   | ——      |
| activeColor        | switch 打开时的背景色 | string   | ——   | #409eff |
| show-inactiveColor | switch 关闭时的背景色 | string   | ——   | dcdfe6  |
| @change            | change 事件           | function | ——   | ——      |

### Will-dialog

| 参数    | 说明                                                       | 类型    | 可选         | 默认  |
| :------ | :--------------------------------------------------------- | :------ | :----------- | :---- |
| title   | Dialog 的标题，也可通过具名 slot 为 title 的 template 传递 | string  | ——           | 提示  |
| width   | Dialog 的宽度                                              | string  | ——           | 50%   |
| top     | Dialog CSS 中的 margin-top 值                              | string  | ——           | 15vh  |
| visible | 是否显示 Dialog，支持 .sync 修饰符                         | boolean | true / false | false |

### Will-checkbox

| 参数    | 说明                                                                       | 类型    | 可选         | 默认  |
| :------ | :------------------------------------------------------------------------- | :------ | :----------- | :---- |
| label   | 选中状态的值（只有在 checkbox-group 时有效）,不传递匿名 slot 时 显示 label | string  | ——           | ——    |
| name    | 原生 name 属性                                                             | string  | ——           | ——    |
| v-model | 不使用 Will-checkbox-group 时是否勾选                                      | boolean | true / false | false |

### Will-checkbox-group

| 参数    | 说明                              | 类型     | 可选 | 默认 |
| :------ | :-------------------------------- | :------- | :--- | :--- |
| v-model | 存放选中的 checkbox 的 label 数据 | Array    | ——   | ——   |
| @change | change 事件                       | function | ——   | ——   |

### Will-radio

| 参数    | 说明                       | 类型     | 可选 | 默认 |
| :------ | :------------------------- | :------- | :--- | :--- |
| label   | Radio 的 value             | string   | ——   | ——   |
| name    | 原生 name 属性             | string   | ——   | ——   |
| v-model | 绑定值 与 label 一致时选中 | ——       | ——   | ——   |
| @change | change 事件                | function | ——   | ——   |

### Will-radio-group

| 参数    | 说明                           | 类型   | 可选 | 默认 |
| :------ | :----------------------------- | :----- | :--- | :--- |
| v-model | 存放选中的 radio 的 label 数据 | String | ——   | ——   |

### Will-form

| 参数        | 说明                                                                                    | 类型   | 可选 | 默认 |
| :---------- | :-------------------------------------------------------------------------------------- | :----- | :--- | :--- |
| model       | 表单数据对象                                                                            | object | ——   | ——   |
| label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。 | string | ——   | ——   |

### Will-form-item

| 参数  | 说明             | 类型   | 可选 | 默认 |
| :---- | :--------------- | :----- | :--- | :--- |
| label | 表单域标签的内容 | String | ——   | ——   |
