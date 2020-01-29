<template>
  <div id="app">
    <div class="row">
      <Will-button>默认</Will-button>
      <Will-button type="primary">primary</Will-button>
      <Will-button type="success">success</Will-button>
      <Will-button type="info">info</Will-button>
      <Will-button type="warning">waring</Will-button>
      <Will-button type="danger">danger</Will-button>
    </div>
    <div class="row">
      <Will-button plain>朴素按钮</Will-button>
      <Will-button plain type="primary">primary</Will-button>
      <Will-button plain type="success">success</Will-button>
      <Will-button plain type="info">info</Will-button>
      <Will-button plain type="warning">waring</Will-button>
      <Will-button plain type="danger">danger</Will-button>
    </div>
    <div class="row">
      <Will-button plain round>圆角按钮</Will-button>
      <Will-button plain round type="primary">primary</Will-button>
      <Will-button plain round type="success">success</Will-button>
      <Will-button plain round type="info">info</Will-button>
      <Will-button plain round type="warning">waring</Will-button>
      <Will-button plain round type="danger">danger</Will-button>
    </div>
    <div class="row">
      <Will-button plain circle>圆</Will-button>
      <Will-button plain circle type="primary">圆</Will-button>
      <Will-button plain circle type="success">圆</Will-button>
      <Will-button plain circle type="info">圆</Will-button>
      <Will-button plain circle type="warning">圆</Will-button>
      <Will-button plain circle type="danger">圆</Will-button>
    </div>
    <div class="row">
      <Will-button plain circle icon="fa-quora"></Will-button>
      <Will-button plain circle icon="fa-quora" type="primary"></Will-button>
      <Will-button plain circle icon="fa-phone" type="success"></Will-button>
      <Will-button plain circle icon="fa-phone" type="info"></Will-button>
      <Will-button plain circle icon="fa-phone" type="warning"></Will-button>
      <Will-button plain circle icon="fa-phone" type="danger"></Will-button>
    </div>
    <div class="row">
      <Will-button plain round icon="fa-phone">圆角按钮</Will-button>
      <Will-button plain round icon="fa-phone" type="primary"
        >primary</Will-button
      >
      <Will-button plain round icon="fa-phone" type="success"
        >success</Will-button
      >
      <Will-button plain round icon="fa-phone" type="info">info</Will-button>
      <Will-button plain round icon="fa-phone" type="warning"
        >waring</Will-button
      >
      <Will-button plain round icon="fa-phone" type="danger"
        >danger</Will-button
      >
    </div>
    <div class="row">
      <Will-button plain round disabled>禁用样式</Will-button>
      <Will-button plain round disabled type="primary">primary</Will-button>
      <Will-button plain round disabled type="success">success</Will-button>
      <Will-button plain round disabled type="info">info</Will-button>
      <Will-button plain round disabled type="warning">waring</Will-button>
      <Will-button plain round disabled type="danger">danger</Will-button>
    </div>

    <div class="row">
      <Will-button type="primary" @click="showDiaLog">显示dialog</Will-button>
    </div>

    <!--
    标题通过属性传递
    <Will-dialog title="标题"></Will-dialog>
    -->
    <!--
    标题通过插槽传递 
    <Will-dialog>
      <template v-slot:title>
        <h3>标题</h3>
      </template>
    </Will-dialog>
    -->
    <!--
    距离顶部高度和宽度
    <Will-dialog title="标题" width="60%" top="100px"></Will-dialog>
    -->

    <!--
    匿名插槽body区域和具名插槽footer
    <Will-dialog title="标题">
      body
      <template v-slot:footer>
        <Will-button>取消</Will-button>
        <Will-button type="primary">确定</Will-button>
      </template>
    </Will-dialog>
    -->

    <!--
    通过注册close事件关闭（麻烦，下面是正确示例，用sync修饰符）
    <Will-dialog title="标题" :visible="visible" @close="close">
      body
      <template v-slot:footer>
        <Will-button>取消</Will-button>
        <Will-button type="primary">确定</Will-button>
      </template>
    </Will-dialog>
    -->

    <!--
    sync修饰符
    // 父组件
    <demo :visible='visible' :money='money' @update:money='val => { money=val }' ></demo>
    // 子组件发布事件
    this.$emit("update:money",200)
    // 使用sync修饰符时 无需父组件无需注册相应的更新事件 但子组件需要按照格式发布事件
    <demo :visible='visible' :money.sync='money' ></demo>
    -->
    <Will-dialog title="标题" :visible.sync="visible" @close="close">
      body
      <template v-slot:footer>
        <Will-button>取消</Will-button>
        <Will-button type="primary">确定</Will-button>
      </template>
    </Will-dialog>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showDiaLog() {
      this.visible = true;
    },
    // 通过注册close事件关闭（麻烦，正确示例用sync修饰符）
    close(type) {
      this.visible = type;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.row {
  margin: 20px;
  // 深度选择 当前组件添加scoped属性的话如果想要影响其他组件 需要用到
  // scss ::v-deep less /deep/ css >>>
  ::v-deep .Will-button {
    margin-right: 10px;
  }
}
</style>
