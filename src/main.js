import Vue from 'vue';
import VueHeadful from 'vue-headful';
import VueSemanticUI from 'semantic-ui-vue';
import VueCookie from 'vue-cookie';
import VueI18n from 'vue-i18n';
import VuePortal from 'portal-vue';

import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line import/extensions
import Navigation from './components/Navigation';
// eslint-disable-next-line import/extensions
import language from './i18n';

Vue.use(VueSemanticUI);
Vue.use(VueCookie);
Vue.use(VueI18n);
Vue.use(VuePortal); // https://github.com/LinusBorg/portal-vue

Vue.component('vue-headful', VueHeadful);
Vue.component('navigation', Navigation);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: language.locale,
  messages: language.messages.default,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
