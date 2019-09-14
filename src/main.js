import Vue from 'vue';
import VueHeadful from 'vue-headful';
import VueSemanticUI from 'semantic-ui-vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueSemanticUI);

Vue.config.productionTip = false;

Vue.component('vue-headful', VueHeadful);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
