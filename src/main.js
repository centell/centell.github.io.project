import Vue from 'vue';
import VueHeadful from 'vue-headful';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.component('vue-headful', VueHeadful);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
