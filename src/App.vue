<template>
  <div id="app">
    <vue-headful v-bind="meta"/>
    <navigation />
    <router-view/>
    <portal-target name="semantic-ui-vue" />
  </div>
</template>

<script>
export default
{
  data() {
    return {
      meta: {
        title: 'centell.github.io',
        url: '/',
      },
    };
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
