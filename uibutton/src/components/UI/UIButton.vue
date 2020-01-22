<template>
  <div>
    <button
      class="UI-button"
      :class="{
      'UI-button-large':large,
      'UI-button-xlarge':xlarge,
      'UI-button-small':small,
      'UI-button-xsmall':xsmall,
      'UI-button-tile':tile,
      'UI-button-rounded':rounded,
      'UI-button-circle':circle,
      'UI-button-disabled':disabled,
      }"
      :style="`--button-backcolor:${color?color:'#2d8cf0'}`"
      @click="BtnClick"
    >
      <slot>按钮</slot>
    </button>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";

@Component
export default class UIButton extends Vue {
  // 定义私有变量
  // 定义类型为布尔 当使用组件添加large属性时 这个数据模型为true
  @Prop(Boolean)
  private large: boolean | undefined;
  @Prop(Boolean) private xlarge: boolean | undefined;
  @Prop(Boolean) private small: boolean | undefined;
  @Prop(Boolean) private xsmall: boolean | undefined;

  @Prop(Boolean) private tile: boolean | undefined;
  @Prop(Boolean) private rounded: boolean | undefined;
  @Prop(Boolean) private circle: boolean | undefined;

  @Prop(Boolean) private disabled: boolean | undefined;

  @Prop(String) private color: string | undefined;

  @Emit("click")
  private emitClickEvent(event: MouseEvent) {}

  private BtnClick(event: MouseEvent) {
    if (this.disabled) return;

    // this.$emit("click");
    // 调用方法去发送点击事件 和上面这一行效果一样
    this.emitClickEvent(event);
  }
}
</script>


<style scoped lang='stylus'>
// 定义混合
resize(min-width, height, padding, font-size) {
  min-width: min-width;
  height: height;
  padding: 0 padding;
  font-size: font-size;

  &.UI-button-rounded, &.UI-button-circle {
    // 放到混合里面随着高度变化而变化
    border-radius: (@height / 2);
  }

  &.UI-button-circle {
    width: @height;
    min-width: 0;
    padding: 0;
  }
}

.UI-button {
  resize(64px, 36px, 16px, 0.875rem);
  border-radius: 4px;
  border: 0px solid black;
  outline: none;
  background-color: var(--button-backcolor, #2d8cf0);
  color: #17233d;
  font-weight: 500;
  letter-spacing: 0.09em;
  cursor: pointer;
  user-select: none;

  &:hover {
    // 动态计算颜色 
    filter: brightness(120%);
  }
  &:active {
    // 动态计算颜色 
    filter: brightness(80%);
  }

  &.UI-button-xsmall {
    // 调用混合
    resize(36px, 20px, 9px, 0.625rem);
  }

  &.UI-button-small {
    resize(50px, 28px, 12px, 0.75rem);
  }

  &.UI-button-large {
    resize(78px, 44px, 19px, 0.875rem);
  }

  &.UI-button-xlarge {
    resize(92px, 52px, 23px, 1rem);
  }

  &.UI-button-tile {
    border-radius: 0;
  }

  &.UI-button-disabled {
    background: #f5f5f5;
    color: #cc8c e;
    cursor: not-allowed;
  }
}
</style>