<template>
  <div class="text-box grid-row left-space">
    <div class="grid-lg-3 grid-md-3">
      <h2>{{ title }}</h2>
    </div>
    <div class="grid-lg-9 grid-md-9 ct">
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
