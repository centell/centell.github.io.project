<template>
  <div class="grid-row">
    <section>
      <header>
        <div class="buttons">
          <div class="red"></div>
          <div class="yellow"></div>
          <div class="green"></div>
        </div>
        <div class="title-desktop">centell.github.io ─ centell@Centell-Github-pages</div>
        <div class="title-mobile">centell.github.io</div>
      </header>
      <nav>
        <ul class="grid-row">
          <li class="grid-6 selected right-border">Profile</li>
          <li class="grid-6"><a href="https://github.com/centell/" rel="author" target="_blank">Github</a></li>
        </ul>
      </nav>
      <main>
        <!--whoami-->
        <code>
          <span class="font-sky-blue">centell.github.io</span>
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
          <span class="font-sky-blue">centell.github.io</span>
          <span class="font-blue">
            git:(<span class="font-red">master</span>)
          </span>
          $ <span class="font-green">cat <span class="font-white">favorite-tech</span>
          </span>
        </code>
        <code class="ls">
          <span class="font-white">javascript</span>
          <span class="font-white">node.js</span>
          <span class="font-white">linux</span>
          <span class="font-white">mysql</span>
          <span class="font-white">vue.js</span>
          <span class="font-white">AWS</span>
          <span class="font-white">tensorflow</span>
          <span class="font-white">laravel</span>
        </code>
        <!--personal projects-->
        <code>
          <span class="font-sky-blue">centell.github.io</span>
          $ <span class="font-green">ls </span> <span class="font-white">personal_projects</span>
        </code>
        <code class="ls">
          <span class="font-sky-blue">rlidea.com</span>
          <span class="font-sky-blue">pokedex.info</span>
          <span class="font-sky-blue">create-element.js</span>
          <span class="font-sky-blue">grid-system.css</span>
        </code>
        <!--end-->
        <code>
          <span class="font-sky-blue">centell.github.io</span> $
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
