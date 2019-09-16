import Vue from 'vue';
import VueHeadful from 'vue-headful';
import VueCookie from 'vue-cookie';
import VueI18n from 'vue-i18n';
import VuePortal from 'portal-vue';

import App from './App.vue';
import router from './router';
import store from './store';
import Language from './i18n';
import Navigation from './components/navigators/Navigation.vue';
import LanguageSelector from './components/navigators/LanguageSelector.vue';

Vue.use(VueCookie);
Vue.use(VueI18n);
Vue.use(VuePortal); // https://github.com/LinusBorg/portal-vue

Vue.component('vue-headful', VueHeadful);
Vue.component('navigation', Navigation);
Vue.component('language-selector', LanguageSelector);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: Language.locale,
  messages: Language.messages.default,
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
