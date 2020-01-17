<template>
  <div class="container">
    <div id="list">
      <h3>组件</h3>
      <router-link to="/loading" tag="li">loading 加载</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  /* background: #282c34; */
  /* color: aliceblue; */
  background: #ffffff;
  color: #444;
  min-height: 100vh;
}
#list {
  height: 100vh;
  padding: 10px 20px;
  height: 100%;
  overflow-y: auto;
  width: 240px;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.4);

  text-align: left;
}
/* 设置滚动条的样式 */
#list::-webkit-scrollbar {
  width: 8px;
}
/* 滚动槽 */
#list::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}
/* 滚动条滑块 */
#list::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.4);
}
#list::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.4);
}
#list li {
  list-style: none;
  line-height: 40px;
  font-size: 14px;
}
#list li:hover {
  cursor: pointer;
  color: rgb(58, 209, 247)
}

.content {
  width: calc(100% - 240px);
  margin-left: 240px;
  text-align: left;
  padding: 30px;
}
</style>