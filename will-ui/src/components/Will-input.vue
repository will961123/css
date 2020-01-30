<template>
  <div class="Will-input">
    <input
      class="Will-input-inner"
      :class="[
        { 'is-disabled': disabled },
        { 'Will-input-needPadding': clearable || showPassword }
      ]"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="Will-input-suffix">
      <i
        @click="clear"
        v-if="clearable && value"
        class="Will-input-icon fa-times-circle-o"
      ></i>
      <i
        @click="handlePassword"
        v-if="showPassword"
        class="Will-input-icon "
        :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "WillInput",
  props: {
    placeholder: {
      type: String,
      defult: ""
    },
    type: {
      type: String,
      defult: "text"
    },
    name: {
      type: String,
      defult: ""
    },
    disabled: {
      type: Boolean,
      defult: false
    },
    value: {
      type: String,
      defult: ""
    },
    clearable: {
      type: Boolean,
      defult: false
    },
    showPassword: {
      type: Boolean,
      defult: false
    }
  },
  data() {
    return {
      // 如果传showPassword 这个属性才有用
      passwordVisible: false
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      window.console.log(1);
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.Will-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .Will-input-inner {
    -webkit-appearance: none;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .Will-input-needPadding {
    padding-right: 30px;
  }
  .Will-input-suffix {
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
    line-height: 40px;
    text-align: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      -webkit-transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
