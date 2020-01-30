<template>
  <label class="Will-radio" :class="[{ 'is-checked': model === label }]">
    <span class="Will-radio-input">
      <span class="Will-radio-inner"></span>
      <input
        :name="name"
        :value="label"
        v-model="model"
        type="radio"
        class="Will-radio-original"
      />
    </span>
    <span class="Will-radio-label">
      <slot>{{ this.label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "WillRadio",
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: null
    },
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    // 组件内部的双向绑定使用这个 因为不能直接修改父组件的value
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(val) {
        this.isGroup
          ? this.RadioGroup.$emit("input", val)
          : this.$emit("input", val);

        this.emitChange();
      }
    },
    // 判断是否被radiogroup包裹
    isGroup() {
      return !!this.RadioGroup;
    }
  },
  methods: {
    emitChange() {
      this.$nextTick().then(() => {
        this.isGroup
          ? this.RadioGroup.$emit("change", {
              name: this.name,
              label: this.label,
              value: this.RadioGroup.value
            })
          : this.$emit("change", {
              name: this.name,
              label: this.label,
              value: this.value
            });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.Will-radio {
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
  .Will-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .Will-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) scale(0);
        transform: translate(-50%, -50%) scale(0);
        -webkit-transition: -webkit-transform 0.15s ease-in;
        transition: -webkit-transform 0.15s ease-in;
        transition: transform 0.15s ease-in;
        transition: transform 0.15s ease-in, -webkit-transform 0.15s ease-in;
      }
    }
    .Will-radio-original {
      width: 0;
      height: 0;
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      opacity: 0;
      outline: none;
      margin: 0;
    }
  }
  .Will-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
  &.is-checked {
    .Will-radio-input {
      .Will-radio-inner {
        background-color: #409eff;
        border-color: #409eff;
        &:after {
          -webkit-transform: translate(-50%, -50%) scale(1);
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .Will-radio-label {
      color: #409eff;
    }
  }
}
</style>
