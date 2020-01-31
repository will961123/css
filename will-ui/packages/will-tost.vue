<template>
  <div v-if="show"> 
    <div v-if="mask" id="mc"></div>
    <div id="tost">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: "Tost",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#tost {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px 40px;
  border-radius: 8px;
  color: #fff;
}
#mc {
  background: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 998;
}
</style>