<template>
  <!--过渡 用transition包裹 指定name -->
  <transition name="dialogTransiton">
    <div v-show="visible" class="Will-dialog-wrapper" @click.self="handleClose">
      <div class="Will-dialog" :style="{ 'margin-top': top, width: width }">
        <div class="Will-dialog-header">
          <!--具名插槽 当传递slot时显示slot -->
          <slot name="title">
            <span class="Will-dialog-title">{{ title }} </span>
          </slot>

          <button class="Will-dialog-headerbtn" @click="handleClose">
            <i class="fa-times"></i>
          </button>
        </div>
        <div class="Will-dialog-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="Will-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "WillDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    }
  }
};
</script>

<style lang="scss" scoped>
// 过渡6种状态
// .dialogTransiton-enter {
//   opacity: 0;
// }
// .dialogTransiton-enter-to {
//   opacity: 1;
// }
// .dialogTransiton-enter-active {
//   -webkit-transition: all 0.5s;
//   transition: all 0.5s;
// }
// .dialogTransiton-leave {
//   opacity: 1;
// }
// .dialogTransiton-leave-to {
//   opacity: 0;
// }
// .dialogTransiton-leave-active {
//   -webkit-transition: all 0.5s;
//   transition: all 0.5s;
// }

// 或者在两种状态加上自定义动画
.dialogTransiton-enter-active {
  -webkit-animation: toggle 0.5s;
  animation: toggle 0.5s;
}
.dialogTransiton-leave-active {
  animation: toggle 0.5s reverse;
}
@-webkit-keyframes toggle {
  from {
    opacity: 0;
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes toggle {
  from {
    opacity: 0;
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}

.Will-dialog-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 2001;
  background: rgba(0, 0, 0, 0.5);
  .Will-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 30%;
    .Will-dialog-header {
      padding: 20px 20px 10px;
      .Will-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .Will-dialog-headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        i {
          color: #909399;
        }
      }
    }
    .Will-dialog-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .Will-dialog-footer {
      padding: 10px 20px 20px;
      text-align: right;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      // 深度选择 当前组件添加scoped属性的话如果想要影响其他组件 需要用到
      // scss ::v-deep less /deep/ css >>>
      ::v-deep .Will-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
