<template>
  <div id="about" class="content">
    <TitleBox v-bind="title"/>
    <TextBox v-bind="tech"/>
    <div class="description">
      <span>{{ req }}</span>
      <br />
      <div class="grid__pos-center email">
        {{ email }}
      </div>
    </div>

<!--    <div>-->
<!--      vue-cli 를 이용하여 개발된 사이트입니다. 저장소는 <a href="https://github.com/centell/centell.github.io">여기</a>입니다.<br>-->
<!--      디플로이-->
<!--    </div>-->
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
      tech: {
        title: this.$t('words.usedTechnologies'),
        content: 'Vue-cli/3.11.0, SCSS, i18n, shell script(bash), git, github pages',
      },
      email: this.$t('contact.email'),
      req: this.$t('contact.request'),
    };
  },
  name: 'about',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TextBox,
    TitleBox,
  },
};
</script>
