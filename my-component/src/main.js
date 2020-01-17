import Vue from 'vue'
import App from './App.vue'
import router from './router' 

Vue.config.productionTip = false 

import will_components  from './utils/components'  
Vue.use( will_components )  
 
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");