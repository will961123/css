// 整个包的入口
import WillButton from "./Will-button.vue";
import WillDialog from "./Will-dialog.vue";
import WillInput from "./Will-input.vue";
import WillSwitch from "./Will-switch.vue";
import WillRadio from "./Will-radio.vue";
import WillRadioGroup from "./Will-radio-group.vue";
import WillCheckbox from "./Will-checkbox.vue";
import WillCheckboxGroup from "./Will-checkbox-group.vue";
import WillForm from "./Will-form.vue";
import WillFormItem from "./Will-form-item.vue";
import "../assets/fonts/css/font-awesome.css";

import Vue from "vue";
import loadingComponent from "./will-loading.vue";
import tostComponent from "./will-tost.vue";
const components = [
  WillButton,
  WillDialog,
  WillInput,
  WillSwitch,
  WillRadio,
  WillRadioGroup,
  WillCheckbox,
  WillCheckboxGroup,
  WillForm,
  WillFormItem
];

/**
 * loading
 */
const LoadingConstructor = Vue.extend(loadingComponent);
const instance_Loading = new LoadingConstructor({
  el: document.createElement("div")
});
instance_Loading.show = false; // 默认隐藏
const loading = {
  showLoading(options = {}) {
    instance_Loading.show = true;
    instance_Loading.content = options.content || "";
    instance_Loading.mask = options.mask || false;

    document.body.appendChild(instance_Loading.$el);
  },
  hideLoading() {
    instance_Loading.show = false;
  }
};

/**
 * tost
 */
const TostConstructor = Vue.extend(tostComponent);
const instance_Tost = new TostConstructor({
  el: document.createElement("div")
});
instance_Tost.show = false; // 默认隐藏
var TostTimer = null;
const tost = {
  showTost(options = {}) {
    clearTimeout(TostTimer);
    TostTimer = setTimeout(() => {
      instance_Tost.show = false;
    }, options.time || 3000);
    instance_Tost.show = true;
    instance_Tost.content = options.content || "";
    instance_Tost.mask = options.mask || false;
    document.body.appendChild(instance_Tost.$el);
  },
  hideTost() {
    clearTimeout(TostTimer);
    instance_Tost.show = false;
  }
};

const install = function(Vue) {
  // 变量注册组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  if (!Vue.$loading) {
    Vue.$loading = loading;
  }
  if (!Vue.$tost) {
    Vue.$tost = tost;
  }
  Vue.mixin({
    beforeCreate() {
      instance_Loading.show = false;
      instance_Tost.show = false;
    },
    created() {
      this.$loading = Vue.$loading;
      this.$tost = Vue.$tost;
    }
  });
};
// 判断全局是否有Vue对象 如果有引用组件库的时候可以不用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install };
