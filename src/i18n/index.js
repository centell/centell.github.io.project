import VueCookie from 'vue-cookie';
import i18nDefaultKo from './default/ko.json';
import i18nDefaultEn from './default/en.json';

export default {
  locale: VueCookie.get('Language') || process.env.VUE_APP_LOCALE,
  messages: {
    default: {
      ko: i18nDefaultKo,
      en: i18nDefaultEn,
    },
  },
};
