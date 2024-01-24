<script setup>
import { onMounted, ref } from "vue";
import PreviewItem from "@/components/PreviewItem.vue";
import aboutContent from "@/assets/aboutContent.json";
const presentations = ref([])

const lastCirceHeight = ref(1000)

onMounted(async () => {
    const data = await fetch("preview.json").then(res => res.json());
    presentations.value = data.presentations1.concat(data.presentations2);

    const blueCircle = document.getElementById("blueCircle");
    const content = document.getElementsByClassName("content")[0];
    const contentBottom = content.offsetHeight + content.offsetTop;
    const blueCircleBottom = blueCircle.getBoundingClientRect().top + window.scrollY
    lastCirceHeight.value -= blueCircleBottom - contentBottom - 100
});
</script>

<template>
    <div class="container w-screen m-0 min-w-full bg-bg overflow-x-hidden">
        <svg class="relative" width="900" height="900"
            style="left: -406px;top: -276px;filter:drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));">
            <circle cx="450" cy="450" r="450" fill="#0d0d0d" />
        </svg>
        <svg class="relative overflow-hidden" width="1054" height="1054" style="right: -206px;top: -100px">
            <circle cx="527" cy="527" r="527" fill="#E8DF31" />
        </svg>
        <svg id="blueCircle" class="relative overflow-hidden" width="1054" :height="lastCirceHeight"
            style="left: -606px;bottom: 0;">
            <circle cx="527" cy="527" r="527" fill="#25A1D2" />
        </svg>
        <div id="etitle">Aha!</div>
        <div id="ctitle">研讨室</div>
        <div class="flex flex-col absolute right-0 top-0">
            <div class="tile bg-c"></div>
            <div class="tile bg-m"></div>
            <div class="tile bg-y"></div>
            <div class="tile bg-k"></div>
        </div>
        <div class="content flex flex-col gap-5">
            <div class="text-0d w-full text-xl text-center" style="font-weight: 350;">Aha！在这里，你将找到志同道合的伙伴，一起探索未知的世界。</div>
            <div class="text-0d w-full text-xl text-center" style="font-weight: 900;">推荐在PC端进行浏览</div>
            <div class="w-full text-center font-bold text-2xl">本期预告</div>
            <div class="px-9 w-full h-px bg-0d"></div>
            <PreviewItem v-for="item in presentations" :half="item.half" :session="item.session" :author="item.author"
                :title="item.title" :abstract="item.abstract" :time="item.time" :key="item.title + item.author"
                :mobile="true" />
            <div class="w-full text-center font-bold text-2xl">关于我们</div>
            <div class="px-9 w-full h-px bg-0d"></div>
            <div class="text-lg text-center content-between font-light" v-for="item in aboutContent" :key="item.chinese">{{
                item.content }}</div>

        </div>
    </div>
</template>
<style scoped>
#etitle {
    /* Aha! */
    position: absolute;
    top: 2rem;
    transform: translateY(-100%) rotate(90.00deg);
    color: #ededed;
    font-family: Outfit;
    font-size: 240px;
    line-height: 1;
    font-weight: 900;
    /* 绕左下旋转 */
    transform-origin: left bottom;
}

#ctitle {
    /* 研 讨 室 */
    position: absolute;
    top: 2rem;
    left: 220px;
    writing-mode: vertical-lr;
    color: #ededed;
    font-family: Noto Sans SC;
    font-size: 75px;
    font-weight: 900;
}

.tile {
    @apply w-11 h-20;
}

.content {
    @apply absolute w-full p-5;
    top: 640px;
}
</style>