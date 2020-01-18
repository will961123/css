<template>
  <div class="container">
    <div v-for="(item,index) in 10" :key="index" @click="change(index)">{{item}}</div>
    <button @click="show">加载中,防止穿透</button>
    <button @click="show2">不显示加载中,不防止穿透,1s消失</button>
    <button @click="$tost.hideTost()">关闭</button>
  </div>
</template>

<script>
export default {
  methods: {
    change(idx) {
      window.console.log(idx);
    },
    show() {
      this.$tost.showTost({
        content: "加载中...",
        mask: true
      });
    },
    show2() {
      this.$tost.showTost({
        time: 1000
      });
    }
  }
};
</script>

<style scoped>
.container > button {
  margin: 10px;
  padding: 3px 5px;
}
</style>