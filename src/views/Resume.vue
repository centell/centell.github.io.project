<template>
  <div class="resume content">
    <h1>{{ $t('menu.resume') }}</h1>
    <TextBox v-bind="job"/>
  </div>
</template>

<script>
import TextBox from '@/components/TextBox.vue';

export default {
  data() {
    return {
      job: {
        title: this.$t('words.job'),
        content: this.$t('resume.job'),
      },
    };
  },
  name: 'home',
  components: {
    TextBox,
  },
};
</script>
