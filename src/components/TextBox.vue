<template>
  <div class="text-box grid-row">
    <div class="grid-lg-2 grid-md-2">
      <h2>{{ title }}</h2>
    </div>
    <div class="grid-lg-10 grid-md-10 ct">
      <h4>{{ content }}</h4>
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
  .text-box {
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
    .ct {
      margin-top: 5px;
    }
  }
</style>
