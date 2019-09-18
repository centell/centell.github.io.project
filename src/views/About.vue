<template>
  <div id="about" class="content">
    <TitleBox v-bind="title"/>
  </div>
</template>

<script>
import TitleBox from '@/components/TitleBox.vue';
import TextBox from '@/components/TextBox.vue';

export default {
  data() {
    return {
      title: {
        title: this.$t('menu.about'),
      },
    };
  },
  name: 'home',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TextBox,
    TitleBox,
  },
};
</script>
