<template>
  <div class="portfolio-box grid-row card">
    <div class="grid-md-12 grid-lg-12">
      <div>
        <h2 class="project-title">{{ title }}</h2>
      </div>
      <div>
        <div>
          <div class="tag-box" v-bind:key="tech" v-for="tech in techs">{{ tech }}</div>
        </div>
      </div>
      <div>
        <ul>
          <li v-bind:key="description" v-for="description in descriptions">
            <h3>{{ description }}</h3>
          </li>
        </ul>
      </div>
      <div v-if="url !== ''">
        <h3>URL: <a v-bind:href="url" target="_blank">{{ url }}</a></h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TitleBox',
  props: {
    title: String,
    descriptions: Array,
    techs: Array,
    url: String,
    image_url: String,
  },
};
</script>
