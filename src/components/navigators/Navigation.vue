<template>
  <div id="nav">
        <span @click="gotoHome">{{ $t('menu.home') }}</span> |
        <span @click="gotoResume">{{ $t('menu.resume')}}</span> |
<!--    <router-link to="/">{{ $t('menu.home') }}</router-link> |-->
<!--    <router-link to="/resume">{{ $t('menu.resume')}}</router-link> |-->
<!--    <router-link to="/portfolio">{{ $t('menu.portfolio')}}</router-link> |-->
<!--    <router-link to="/about">{{ $t('menu.about')}}</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    msg: String,
  },
  methods: {
  //   gotoHome() {
  //     const h = this.$el.querySelector('#home');
  //     h.scrollTop = h.scrollHeight;
  //   },
  //   gotoResume() {
  //     const r = document.querySelector('#resume');
  //     console.log(this.$el);
  //     console.log(r);
  //   },
  },
};
</script>
