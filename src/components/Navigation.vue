<template>
  <div id="nav">
    <router-link to="/">{{ $t('menu.home') }}</router-link> |
    <router-link to="/resume">{{ $t('menu.resume')}}</router-link> |
    <router-link to="/portfolio">{{ $t('menu.portfolio')}}</router-link> |
    <router-link to="/about">{{ $t('menu.about')}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    msg: String,
  },
};
</script>
