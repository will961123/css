<template>
  <div v-if="show">
    <div v-if="mask" id="mc"></div>
    <div id="loading">
      <div class="item1"></div>
      <div class="item2"></div>
      <div class="item3"></div>
      <div class="item4"></div>
      <div class="item5"></div>
      <div class="item6"></div>
      <div class="item7"></div>
      <div class="item8"></div> 
      <p style="color:#fff;text-align:center">{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
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

<style scoped >
#loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: rgba(0,0,0,0.7);
  padding: 20px 40px;
  border-radius: 8px;
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
#loading > div {
  width: 6px;
  height: 60px;
  background: #fff;
  display: inline-block;
  animation: loading 1.5s infinite;
  transform-origin: bottom center;
  margin-right: 2px;
}
#loading .item1 {
  animation-delay: 0.1s;
}
#loading .item2 {
  animation-delay: 0.2s;
}
#loading .item3 {
  animation-delay: 0.3s;
}
#loading .item4 {
  animation-delay: 0.4s;
}
#loading .item5 {
  animation-delay: 0.5s;
}
#loading .item6 {
  animation-delay: 0.6s;
}
#loading .item7 {
  animation-delay: 0.7s;
}

#loading .item8 {
  animation-delay: 0.8s;
}
@keyframes loading {
  0% {
    transform: scaleY(0.1);
    background: #fff;
  }
  50% {
    transform: scaleY(1);
    background: #009966;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}
</style>