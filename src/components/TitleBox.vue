<template>
  <div class="text-box grid-row">
    <div class="grid-12">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBox',
  props: {
    title: String,
  },
};
</script>
