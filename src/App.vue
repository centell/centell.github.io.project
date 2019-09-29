<template>
  <div id="app">
    <vue-headful v-bind="meta"/>
    <div id="nav">
      <span @click="goto('#home')">{{ $t('menu.home') }}</span> |
      <span @click="goto('#resume')">{{ $t('menu.resume')}}</span> |
      <span @click="goto('#portfolio')">{{ $t('menu.portfolio')}}</span> |
      <span @click="goto('#about')">{{ $t('menu.about')}}</span>
    </div>
<!--    <navigation />-->
<!--    <language-selector />-->
<!--    <router-view/>-->
    <home />
    <resume />
    <experience />
    <portfolio />
    <about />
  </div>
</template>

<script>
import anime from 'animejs';

export default
{
  data() {
    return {
      meta: {
        title: 'devcjkim.github.io',
        url: '/',
      },
    };
  },
  methods: {
    scroll(arg) {
      const el = document.querySelector(arg.to);
      const offset = parseInt(arg.offset, 10) || 0;
      const duration = arg.duration || 800;
      const easing = arg.easing || 'easeOutExpo';
      const callback = arg.callback || null;

      if (el) {
        anime({
          targets: ['html', 'body'],
          scrollTop: (el.offsetTop - offset),
          duration,
          easing,
          complete: callback,
        });
      }
    },
    goto(id) {
      this.scroll({
        to: id,
      });
    },
  },
  watch: {
    '$i18n.locale': function (v) {
      this.$cookie.set('language', v);
    },
  },
};
</script>
<style scoped>
  @import url('./assets/css/app.css');
</style>
