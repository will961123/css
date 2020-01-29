import Vue from "vue";
import App from "./App.vue";
import WillButton from "./components/Will-button.vue";
import WillDialog from "./components/Will-dialog.vue";
import "./assets/fonts/css/font-awesome.css";

Vue.config.productionTip = false;
Vue.component(WillButton.name, WillButton);
Vue.component(WillDialog.name, WillDialog);

new Vue({
  render: h => h(App)
}).$mount("#app");
