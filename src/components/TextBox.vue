<template>
  <div class="text-box">
    <h2>{{ title }}</h2>
    <div>
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
