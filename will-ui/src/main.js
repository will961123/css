import Vue from "vue";
import App from "./App.vue";
import WillButton from "./components/Will-button.vue";
import WillDialog from "./components/Will-dialog.vue";
import WillInput from "./components/Will-input.vue";
import WillSwitch from "./components/Will-switch.vue";
import WillRadio from "./components/Will-radio.vue";
import WillRadioGroup from "./components/Will-radio-group.vue";
import "./assets/fonts/css/font-awesome.css";

Vue.config.productionTip = false;
Vue.component(WillButton.name, WillButton);
Vue.component(WillDialog.name, WillDialog);
Vue.component(WillInput.name, WillInput);
Vue.component(WillSwitch.name, WillSwitch);
Vue.component(WillRadio.name, WillRadio);
Vue.component(WillRadioGroup.name, WillRadioGroup);

new Vue({
  render: h => h(App)
}).$mount("#app");
