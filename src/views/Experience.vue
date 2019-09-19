<template>
  <div id="experience" class="content">
    <TitleBox v-bind="title"/>
    <TextBox v-bind="lang" />
    <TextBox v-bind="markup" />
    <TextBox v-bind="backend" />
    <TextBox v-bind="frontend" />
    <TextBox v-bind="db" />
    <TextBox v-bind="network" />
    <TextBox v-bind="code" />
    <TextBox v-bind="extra" />
  </div>
</template>

<script>
import TitleBox from '@/components/TitleBox.vue';
import TextBox from '@/components/TextBox.vue';

export default {
  data() {
    return {
      title: {
        title: this.$t('menu.experience'),
      },
      lang: {
        title: this.$t('words.language'),
        content: 'Javascript(Node.js), PHP, Python, Java, Swift',
      },
      markup: {
        title: this.$t('words.markup'),
        content: 'HTML, Markdown',
      },
      backend: {
        title: this.$t('words.backend'),
        content: 'Express(Node.js), npm, nginx, Docker, docker-compose, AWS-CLI, Laravel(php), Shell script, composer, pip, ...',
      },
      frontend: {
        title: this.$t('words.frontend'),
        content: 'Vue-cli, HTML, CSS, SCSS, Bootstrap, SemanticUI, UIkit, ...',
      },
      db: {
        title: this.$t('words.db'),
        content: 'MySQL, MariaDB, MongoDB, SQLite, Firebase, Sequelize, Laravel/queryBuilder, ...',
      },
      network: {
        title: this.$t('words.network'),
        content: 'axios, AWS, puppeteer, BeautifulSoup, selenium, ...',
      },
      code: {
        title: this.$t('words.code'),
        content: 'git, github, gitlab, ...',
      },
      extra: {
        title: this.$t('words.extra'),
        content: 'iOS, Android Application, Electron Windows Application, ...',
      },
    };
  },
  name: 'experience',
  components: {
    TextBox,
    TitleBox,
  },
};
</script>
