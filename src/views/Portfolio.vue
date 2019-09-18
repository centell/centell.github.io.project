<template>
  <div id="portfolio" class="content">
    <TitleBox v-bind="title"/>
  </div>
</template>

<script>
import TitleBox from '@/components/TitleBox.vue';

export default {
  data() {
    return {
      title: {
        title: this.$t('menu.portfolio'),
      },
    };
  },
  name: 'home',
  components: {
    TitleBox,
  },
};
</script>
