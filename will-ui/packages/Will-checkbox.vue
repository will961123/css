<template>
  <label class="Will-checkbox" :class="[{ 'is-checked': isChecked }]">
    <span class="Will-checkbox-input">
      <span class="Will-checkbox-inner"></span>
      <input
        :name="name"
        :value="label"
        v-model="model"
        type="checkbox"
        class="Will-checkbox-original"
      />
    </span>
    <span class="Will-checkbox-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "WillCheckbox",
  inject: {
    CheckboxGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(val) {
        this.isGroup
          ? // 只要把group绑定到数组上vue会自己处理这个数组
            this.CheckboxGroup.$emit("input", val)
          : this.$emit("input", val);
      }
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      return this.isGroup
        ? this.CheckboxGroup.value.includes(this.label)
        : this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.Will-checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .Will-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .Will-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      -webkit-transition: border-color 0.25s
          cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        -webkit-transform: rotate(45deg) scaleY(0);
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
        transition: -webkit-transform 0.15s ease-in 0.05s;
        transition: transform 0.15s ease-in 0.05s;
        transition: transform 0.15s ease-in 0.05s,
          -webkit-transform 0.15s ease-in 0.05s;
        -webkit-transform-origin: center;
        transform-origin: center;
      }
    }
    .Will-checkbox-original {
      width: 0;
      height: 0;
      position: absolute;
      z-index: -1;
      left: 10px;
      top: 0;
      opacity: 0;
      outline: none;
      margin: 0;
    }
  }
  .Will-checkbox-label {
    display: inline-block;
    font-size: 14px;
    padding-left: 10px;
    line-height: 19px;
  }
  &.is-checked {
    .Will-checkbox-input {
      .Will-checkbox-inner {
        background-color: #409eff;
        border-color: #409eff;
        &:after {
          -webkit-transform: rotate(45deg) scaleY(1);
          transform: rotate(45deg) scaleY(1);
        }
      }
    }
    .Will-checkbox-label {
      color: #409eff;
    }
  }
}
</style>
