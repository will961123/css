<template>
  <div class="Will-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WillRadioGroup",
  //   provide: {
  //     RadioGroup: 'this 穿不过去 改成函数'
  //   },
  provide() {
    return {
      RadioGroup: this
    };
  },
  props: {
    value: null
  }
};
</script>

<style></style>
