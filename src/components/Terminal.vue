<template>
  <div class="grid-row terminal">
    <section>
      <header>
        <div class="buttons">
          <div class="red"></div>
          <div class="yellow"></div>
          <div class="green"></div>
        </div>
        <div class="title-desktop">devcjkim.github.io ─ devcjkim@devcjkim-Github-pages</div>
        <div class="title-mobile">devcjkim.github.io</div>
      </header>
      <nav>
        <ul class="grid-row">
          <li class="grid-6 selected right-border">Profile</li>
          <li class="grid-6"><a href="https://github.com/devcjkim/" rel="author" target="_blank">Github</a></li>
        </ul>
      </nav>
      <main>
        <!--welcome-->
        <code>
          <span class="font-white">Welcome to devcjkim.github.io 1.01.3 LTS (Vue-cli 3.11.0)</span>
        </code>
        <!--whoami-->
        <code>
          <span class="font-sky-blue">devcjkim.github.io</span>
          <span class="font-blue">
            git:(<span class="font-red">master</span>)</span> $ <span class="font-green">whoami
          </span>
        </code>
        <code>
          <span class="font-white">job: web developer</span>
        </code>
        <code>
          <span class="font-white">location: Busan, Korea</span>
        </code>
        <!--skills-->
        <code>
          <span class="font-sky-blue">devcjkim.github.io</span>
          <span class="font-blue">
            git:(<span class="font-red">master</span>)
          </span>
          $ <span class="font-green">cat <span class="font-white">favorite-tech</span>
          </span>
        </code>
        <code class="ls">
          <span class="font-white list">javascript</span>
          <span class="font-white list">node.js</span>
          <span class="font-white list">linux</span>
          <span class="font-white list">mysql</span>
          <span class="font-white list">vue.js</span>
          <span class="font-white list">AWS</span>
          <span class="font-white list">tensorflow</span>
          <span class="font-white list">laravel</span>
        </code>
        <!--personal projects-->
        <code>
          <span class="font-sky-blue">devcjkim.github.io</span>
          $ <span class="font-green">ls </span> <span class="font-white">personal_projects</span>
        </code>
        <code class="ls">
          <span class="font-sky-blue list">rlidea.com</span>
          <span class="font-sky-blue list">pokedex.info</span>
          <span class="font-sky-blue list">create-element.js</span>
          <span class="font-sky-blue list">grid-system.css</span>
        </code>
        <!--end-->
        <code>
          <span class="font-sky-blue">devcjkim.github.io</span> $
        </code>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Terminal',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "./../assets/css/terminal.css";
</style>
