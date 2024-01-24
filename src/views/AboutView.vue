<script setup>
import CircleDecoration from '@/components/CircleDecoration.vue';
import aboutContent from '@/assets/aboutContent.json';
import { computed, ref } from 'vue';

const show = ref(true);
const introductions = aboutContent
const currentIntroduction = ref(0);
const large = computed(() => introductions[currentIntroduction.value].large);
const small = computed(() => introductions[currentIntroduction.value].small);
const chinese = computed(() => introductions[currentIntroduction.value].chinese);
const content = computed(() => introductions[currentIntroduction.value].content);
// 循环切换介绍
function nextIntroduction() {
  currentIntroduction.value = (currentIntroduction.value + 1) % introductions.length;
  show.value = false;
  window.setTimeout(() => {
    show.value = true;
  }, 300);

}
function prevIntroduction() {
  currentIntroduction.value = (currentIntroduction.value - 1 + introductions.length) % introductions.length;
  show.value = false;
  window.setTimeout(() => {
    show.value = true;
  }, 300);
}
</script>

<template>
  <div class="container w-full h-full bg-bg absolute overflow-hidden" style="max-width: 100%;">
    <CircleDecoration theme-color="#EF068A" />
    <div class="absolute right-0 bottom-0 bg-0d rotate-45 translate-x-1/2 translate-y-1/2"
      style="width: 200px;height: 375px;"></div>
    <Transition name="fade">
      <div v-if="show"
        class="absolute -rotate-90 right-8 bottom-1/2 text-bg font-black translate-x-1/2 -translate-y-3/4 pointer-events-none select-none"
        style="font-size: 144px;font-family: Noto Sans SC;">{{ large + small }}</div>
    </Transition>

    <div class="content flex flex-col">
      <Transition name="slide-fade">
        <div v-if="show">
          <div class="large">
            {{ large }}
          </div>
          <div class="flex">
            <div class="text-0d text-9xl font-black" style="font-family: Outfit;line-height: 100px;">{{ small }}</div>
            <div class="flex flex-col ml-12 items-center text-0d text-6xl font-black justify-end translate-y-3">
              <div>{{ chinese }}</div>
              <div class="flex my-2">
                <div class="tile bg-c"></div>
                <div class="tile bg-m"></div>
                <div class="tile bg-y"></div>
                <div class="tile bg-k"></div>
              </div>
            </div>
            <div class="text-0d text-2xl ml-6 self-end font-serif" style="letter-spacing: -0.2em;">
              &gt;&gt;&gt;
            </div>
          </div>
        </div>
      </Transition>
      <div class="flex my-12 grow text-2xl font-light items-center" style="width: 50vw;">
        <button class="switchButton" @click="prevIntroduction">&lt;</button>
        <Transition name="slide-fade">
          <div v-if="show" class="grow mx-6 text-justify">{{ content }}</div>
        </Transition>
        <button class="switchButton" @click="nextIntroduction">&gt;</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.content {
  @apply absolute select-none left-10;
  top: 25%
}

.large {
  @apply text-0d;
  font-family: Outfit;
  font-size: 150px;
  font-weight: 900;
  line-height: 113px;
}

.tile {
  width: 45px;
  height: 4px;
}

.switchButton {
  @apply text-4xl drop-shadow-lg font-mono select-none;
}

/* 按钮摇摆 */
@keyframes swing {

  0%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(5px);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(-5px);
  }
}

.switchButton:hover {
  animation: swing 4s infinite ease-in-out;
}

/* 滑动+透明度逐渐变化 */
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* 透明度逐渐变化 */
.fade-enter-active {
  transition: opacity 0.8s ease-out;
}

.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
