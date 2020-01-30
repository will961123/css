<template>
  <div class="Will-form-item">
    <label class="Will-form-item-label" :style="{ width: Form.labelWidth }">{{
      label
    }}</label>
    <div class="Will-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WillFormItem",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  inject: {
    Form: {
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.Will-form-item {
  margin-bottom: 25px;
  .Will-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .Will-form-item-content {
    line-height: 40px;
    position: relative;
    font-style: 14px;
    overflow: hidden;
  }
}
</style>
