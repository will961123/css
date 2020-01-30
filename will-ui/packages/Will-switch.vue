<template>
  <div
    class="Will-switch"
    :class="{ 'is-checked': value }"
    @click="handleChange"
  >
    <input
      :checked="value"
      class="Will-switch-input"
      type="checkbox"
      :name="name"
    />
    <span class="Will-switch-core" ref="core">
      <span class="Will-switch-button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "WillSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  //   不采用style修改颜色 试下生命周期
  mounted() {
    this.setColor();
  },
  methods: {
    async handleChange() {
      this.$emit("input", !this.value);
      this.$emit("change", { label: this.name, value: !this.value });
      //  等value值改变了才修改
      //  this.$nextTick(this.setColor);

      await this.$nextTick();
      this.setColor();
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        let color = this.value
          ? this.activeColor || "#409eff"
          : this.inactiveColor || "#dcdfe6";
        this.$refs.core.style.backgroundColor = color;
        this.$refs.core.style.borderColor = color;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.Will-switch {
  display: inline-block;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  font-style: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .Will-switch-input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
    margin: 0;
  }
  .Will-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #dcdfe6;
    cursor: pointer;
    -webkit-transition: border-color 0.3s, background-color 0.3s;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .Will-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked {
    .Will-switch-core {
      border-color: #409eff;
      background-color: #409eff;
    }
    .Will-switch-button {
      -webkit-transform: translateX(20px);
      transform: translateX(20px);
    }
  }
}
</style>
