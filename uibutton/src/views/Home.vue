<template>
  <div class="page-home">
    <div class="container">
      <UIButton
        @click="homeClick"
        :color="color"
        :large="large"
        :xlarge="xlarge"
        :small="small"
        :xsmall="xsmall"
        :tile="tile"
        :rounded="rounded"
        :circle="circle"
        :disabled="disabled"
      >{{sizeName}}</UIButton>
    </div>
    <div class="btnList">
      <UIButton @click="resize('default')">默认</UIButton>
      <UIButton @click="resize('large')" large>大</UIButton>
      <UIButton @click="resize('xlarge')" xlarge>超大</UIButton>
      <UIButton @click="resize('small')" small>小</UIButton>
      <UIButton @click="resize('xsmall')" xsmall>超小</UIButton>
    </div>
    <div class="btnList">
      <UIButton @click="changeRadius('default')">默认</UIButton>
      <UIButton tile @click="changeRadius('tile')">矩形</UIButton>
      <UIButton rounded @click="changeRadius('rounded')">半圆</UIButton>
      <UIButton circle @click="changeRadius('circle')">圆形</UIButton>
    </div>
    <div class="btnList">
      <UIButton @click="()=>disabled=!disabled">禁用</UIButton>
    </div>
    <div class="btnList">
      <UIButton color='red' @click="()=>color='red'">红</UIButton>
      <UIButton color='yellow' @click="()=>color='yellow'">黄</UIButton>
      <UIButton color='pink' @click="()=>color='pink'">粉</UIButton>
    </div> 
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UIButton from "@/components/UI/UIButton.vue";

@Component({
  components: {
    UIButton
  }
})
export default class Home extends Vue {
  private large: boolean = false;
  private xlarge: boolean = false;
  private small: boolean = false;
  private xsmall: boolean = false;
  private sizeName: string = "默认";
  private tile: boolean = false;
  private rounded: boolean = false;
  private circle: boolean = false;
  private disabled: boolean = false;
  private color: string = "";

  // private 私有的
  // 此时监听不到这个点击事件 因为这个事件是组件处理的 就算不加private关键字也一样
  // 可以在组件身上加 v-on="$listeners" 来监听事件 但是为了封装我们不这样做
  private homeClick(event: MouseEvent) {
    console.log(event);
  } 
  private resize(size: string) {
    switch (size) {
      case "default":
        this.large = false;
        this.xlarge = false;
        this.small = false;
        this.xsmall = false;
        this.sizeName = "默认";
        break;
      case "large":
        this.large = true;
        this.xlarge = false;
        this.small = false;
        this.xsmall = false;
        this.sizeName = "大";
        break;
      case "xlarge":
        this.large = false;
        this.xlarge = true;
        this.small = false;
        this.xsmall = false;
        this.sizeName = "超大";
        break;
      case "small":
        this.large = false;
        this.xlarge = false;
        this.small = true;
        this.xsmall = false;
        this.sizeName = "小";
        break;
      case "xsmall":
        this.large = false;
        this.xlarge = false;
        this.small = false;
        this.xsmall = true;
        this.sizeName = "超小";
        break;
    }
  }

  changeRadius(radius: string) {
    switch (radius) {
      case "default":
        this.tile = false;
        this.rounded = false;
        this.circle = false;
        this.sizeName = "默认";
        break;
      case "tile":
        this.tile = true;
        this.rounded = false;
        this.circle = false;
        this.sizeName = "矩形";
        break;
      case "rounded":
        this.tile = false;
        this.rounded = true;
        this.circle = false;
        this.sizeName = "半圆";
        break;
      case "circle":
        this.tile = false;
        this.rounded = false;
        this.circle = true;
        this.sizeName = "圆形";
        break;
    }
  }
}
</script>


<style scoped lang='stylus'>
.page-home {
  width: 100%;
  height: 160px;
  text-align: center;

  .btnList {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
}
</style>