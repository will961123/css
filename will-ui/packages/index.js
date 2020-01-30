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
import "./fonts/css/font-awesome.css";
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

const install = function(Vue) {
  // 变量注册组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
// 判断全局是否有Vue对象 如果有引用组件库的时候可以不用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install };
