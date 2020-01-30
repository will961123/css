<template>
  <button
    class="Will-button"
    :class="[
      `Will-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled }
    ]"
    @click="handlerClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="[icon]"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "WillButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  methods: {
    handlerClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
// 基本样式
.Will-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

// type开始
.Will-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #66b1ff;
    border-color: #66b1ff;
    background-color: #fff;
  }
}
.Will-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    color: #85ce61;
    border-color: #85ce61;
    background-color: #fff;
  }
}
.Will-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #a6a9ad;
    border-color: #a6a9ad;
    background-color: #fff;
  }
}
.Will-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    color: #ebb563;
    border-color: #ebb563;
    background-color: #fff;
  }
}
.Will-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    color: #f78989;
    border-color: #f78989;
    background-color: #fff;
  }
}
// type 结束

// plain 开始
.Will-button.is-plain {
  &:hover,
  &:focus {
    background-color: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.Will-button--primary.is-plain {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.Will-button--success.is-plain {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.Will-button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background-color: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.Will-button--warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.Will-button--danger.is-plain {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// plain 结束

// round 开始
.Will-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// round 结束

// circle 开始
.Will-button.is-circle {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  line-height: 40px;
}
// circle 结束

// icon 开始
.Will-button [class*="fa-"] + span {
  margin-left: 10px;
}
// icon 结束

// disabled 开始
.Will-button.is-disabled {
  cursor: not-allowed;
}
// disabled 结束
</style>
