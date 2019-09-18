<template>
  <div id="resume" class="content">
    <TitleBox v-bind="title"/>
    <TextBox v-bind="job"/>
    <TextBox v-bind="summary"/>
  </div>
</template>

<script>
import TitleBox from '@/components/TitleBox.vue';
import TextBox from '@/components/TextBox.vue';

export default {
  data() {
    return {
      title: {
        title: this.$t('menu.resume'),
      },
      job: {
        title: this.$t('words.job'),
        content: this.$t('resume.job'),
      },
      summary: {
        title: this.$t('words.summary'),
        content: this.$t('resume.summary'),
      },
    };
  },
  name: 'home',
  components: {
    TextBox,
    TitleBox,
  },
};
</script>
