<template>
  <div class="container">
    <div v-for="(item,index) in 10" :key="index" @click="change(index)">{{item}}</div>
    <button @click="show">加载中,防止穿透</button>
    <button @click="$loading.showLoading()">不显示加载中,不防止穿透</button>
    <button @click="$loading.hideLoading()">关闭</button>
  </div>
</template>

<script>
export default {
  methods: {
    change(idx) {
      window.console.log(idx);
    },
    show() {
      this.$loading.showLoading({
        content: "加载中...",
        mask: true
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