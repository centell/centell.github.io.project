<template>
  <div id="app">
    <vue-headful v-bind="meta"/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<!--<template>-->
<!--  <div id="app">-->
<!--    <vue-headful v-bind="meta" />-->

<!--    <component v-bind:is="layout">-->
<!--      <router-view />-->
<!--    </component>-->

<!--    <portal-target name="semantic-ui-vue" />-->
<!--  </div>-->
<!--</template>-->

<script>
export default
{
  data() {
    return {
      meta: {
        title: "Centell's resume",
        url: '/',
      },
    };
  },
};
</script>
<style scoped>
  @import url('./assets/css/app.css');
</style>
