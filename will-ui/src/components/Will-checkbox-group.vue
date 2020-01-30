<template>
  <div class="Will-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WillCheckboxGroup",
  //   provide: {
  //     CheckboxGroup: 'this 传不过去 改成函数'
  //   },
  provide() {
    return {
      CheckboxGroup: this
    };
  },
  props: {
    value: {
      type: Array
    }
  }
};
</script>

<style></style>
