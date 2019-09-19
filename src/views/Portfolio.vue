<template>
  <div id="portfolio" class="content">
    <TitleBox v-bind="title"/>
<!--    <h2>{{ $t('portfolio.company') }}</h2>-->
<!--    <div>-->
<!--      contact: {{ $t('contact.email') }}-->
<!--    </div>-->
    <h2>{{ $t('portfolio.cookie') }}</h2>
    <PortfolioBox v-bind="projects.pokedex"/>
    <PortfolioBox v-bind="projects.naverMessageHelper"/>
    <PortfolioBox v-bind="projects.createElement"/>
  </div>
</template>

<script>
import TitleBox from '@/components/TitleBox.vue';
import PortfolioBox from '@/components/PortfolioBox.vue';

export default {
  data() {
    return {
      title: {
        title: this.$t('menu.portfolio'),
      },
      projects: {
        createElement: this.$t('portfolio.createElement'),
        naverMessageHelper: this.$t('portfolio.naverMessageHelper'),
        pokedex: this.$t('portfolio.pokedex'),
      },
    };
  },
  name: 'home',
  components: {
    TitleBox,
    PortfolioBox,
  },
};
</script>
