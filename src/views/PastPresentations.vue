<script setup>
import CircleDecoration from '@/components/CircleDecoration.vue';
import PresentationItem from '@/components/PresentationItem.vue';
import { onMounted, ref } from 'vue';

const year = ref(new Date().getFullYear());
const season = ref(Math.floor((new Date().getMonth() + 3) / 3));
const presentations = ref([]);
const show = ref(true);
function nextSeason() {
    season.value = (season.value + 1) % 5;
    if (season.value === 0) {
        year.value++;
        season.value = 1;
    }
    show.value = false;
    loadPresentations(year.value, season.value);
    window.setTimeout(() => {
        show.value = true;
    }, 300);
}
function prevSeason() {
    season.value = (season.value + 4) % 5;
    if (season.value === 0) {
        year.value--;
        season.value = 4;
    }
    show.value = false;
    loadPresentations(year.value, season.value);
    window.setTimeout(() => {
        show.value = true;
    }, 300);
}
async function loadPresentations(year, season) {
    const source = `presentations/${year}/${season}.json`;
    presentations.value = await fetch(source).then(res => res.json()).catch(() => []);
}
onMounted(() => {
    loadPresentations(year.value, season.value);
});
</script>

<template>
    <div class="container w-full h-full bg-bg absolute overflow-hidden" style="max-width: 100%;">
        <CircleDecoration theme-color="#E8DF31" />
        <div class="absolute right-0 bottom-0 bg-0d rotate-45 translate-x-1/2 translate-y-1/2"
            style="width: 200px;height: 375px;"></div>
        <div class="absolute -rotate-90 right-8 bottom-1/2 text-bg font-black translate-x-1/2 -translate-y-3/4 pointer-events-none select-none"
            style="font-size: 144px;font-family: Noto Sans SC;">REPORTS</div>
        <Transition name="slide-fade">
            <div v-if="show" class="content flex flex-col gap-2">
                <div class="title font-black" style="font-family: Noto Sans SC;font-size: 64px;">
                    {{ year }} Q{{ season }} 报告
                </div>
                <div>
                    <span class="text-2xl font-light" style="font-family: Outfit;">
                        all presentations: {{ year }} Q{{ season }}
                    </span>
                    <span class="text-0d text-2xl ml-2 self-end font-serif" style="letter-spacing: -0.2em;">
                        &gt;&gt;&gt;</span>
                </div>
                <div class="grid grid-cols-2 grid-rows-6 gap-y-2.5 gap-x-6" style="width: 65vw;">
                    <PresentationItem v-for="(presentation, i) in presentations" :title="presentation.title"
                        :abstract="presentation.abstract" :blink="presentation.blink" :glink="presentation.glink"
                        :key="i" />
                </div>
            </div>
        </Transition>

        <div class="absolute" style="left:450px;top:calc(10% + 70px);">
            <button class="switchButton" @click="prevSeason">&lt;</button>
            <button class="switchButton" @click="nextSeason">&gt;</button>
        </div>
    </div>
</template>

<style scoped>
.content {
    @apply absolute select-none left-9;
    top: calc(10% + 40px);
}

.title {
    @apply text-0d text-5xl font-black;
    font-family: Outfit;
}

.switchButton {
    @apply text-4xl drop-shadow-lg font-mono px-4 select-none;
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
</style>
