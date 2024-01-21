<script setup>
import AboutView from "./views/AboutView.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <main>
    <section>
      <HomeView />
    </section>
    <section>
      <img src="https://cdn.seovx.com/d/?mom=302">
    </section>
    <section>
      <AboutView />
    </section>
  </main>
</template>

<style scoped>
main {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

section {
  width: 100%;
  height: 100%;
  scroll-snap-stop: always;
  scroll-snap-align: start;
  overflow: hidden;
}
</style>
