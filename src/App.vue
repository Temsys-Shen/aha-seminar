<script setup>
import { onMounted, ref } from "vue";
import AboutView from "./views/AboutView.vue";
import HomeView from "./views/HomeView.vue";
import AhaLogo from '@/components/AhaLogo.vue'
import OutLine from '@/components/OutlineC.vue'

const currentView = ref('homeView');
const atMain = ref(true);
const items = [
  {
    id: 'homeView',
    name: 'home.'
  },
  {
    id: 'preview',
    name: 'prev.'
  },
  {
    id: 'pastPresentations',
    name: 'pres.'
  },
  {
    id: 'aboutView',
    name: 'about.'
  }
]
// 当前滚动位置占全屏比例
const ratio = ref(0);

onMounted(() => {
  const main = document.querySelector('main');
  main.addEventListener('scroll', function () {
    ratio.value = main.scrollTop / main.scrollHeight;
    var sections = document.querySelectorAll('section');
    Array.prototype.forEach.call(sections, function (section) {
      if (section.id == 'preview') {
        atMain.value = main.scrollTop < section.offsetTop - 110;
      }

      var top = main.scrollTop
      var distance = top - section.offsetTop;
      var id = section.id;
      if (distance < 200 && distance > -200 && id) {
        currentView.value = id;
      }
    });
  });
})


</script>

<template>
  <main>
    <section id="homeView">
      <HomeView />
    </section>
    <section id="preview">
      <img src="https://cdn.seovx.com/d/?mom=302">
    </section>
    <section id="pastPresentations">
      <img src="https://cdn.seovx.com/d/?mom=302">
    </section>
    <section id="aboutView">
      <AboutView />
    </section>
  </main>
  <AhaLogo :class="`fixed left-9 ${atMain ? 'bg-opacity-0' : 'bg-opacity-85'}`" />
  <div id="season">
    {{ new Date().getFullYear() }} Q{{ Math.floor((new Date().getMonth() + 3) / 3) }}
  </div>
  <OutLine class="fixed right-0 top-1/2 -translate-y-2/3 m-4" :items="items" :currentId="currentView" :ratio="ratio" />
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

#season {
  @apply fixed top-12 left-1/2 pointer-events-none;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ededed;
  mix-blend-mode: exclusion;
}
</style>
