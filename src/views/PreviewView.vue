<script setup>
import { ref } from "vue";
import PreviewItem from "@/components/PreviewItem.vue";

const year = ref(2077);
const issue = ref(1);

</script>

<template>
    <div class="container w-full h-full bg-bg absolute overflow-hidden" style="max-width: 100%;">
        <div class="texture">
            <div>INTRODUCE</div>
            <div>OUR NEW</div>
            <div>EVENT</div>
        </div>
        <canvas />
        <div class="absolute -rotate-90 right-8 bottom-1/2 text-bg font-black translate-x-1/2 -translate-y-3/4"
            style="font-size: 144px;font-family: Noto Sans SC;">PREVIEW</div>
        <div class="absolute text-0d font-black right-0 bottom-0"
            style="font-size: 240px;line-height: 302px;font-family: Outfit;">
            {{ issue.toString().padStart(2, '0') }}
        </div>
        <div class="absolute right-0 bottom-0 bg-0d rotate-45 translate-x-1/2 translate-y-1/2"
            style="width: 200px;height: 375px;"></div>
        <div class="content flex flex-col">
            <div class="issueIndex">
                {{ year }}{{ issue.toString().padStart(2, '0') }}期
            </div>
            <div>
                <span class="text-0d text-5xl font-black">本期预告</span>
                <span class="text-0d text-2xl font-black" style="font-family: Noto Sans SC;">ABSTRACTS</span>
            </div>
            <div class="flex my-2">
                <div class="tile bg-c"></div>
                <div class="tile bg-m"></div>
                <div class="tile bg-y"></div>
                <div class="tile bg-k"></div>
            </div>
            <div class="flex">
                <div class="flex flex-col" style="width: 25vw;">
                    <PreviewItem half="上半场" session="1" author="Hapenia" title="Wordle之谜：挖掘数字分数和解决方案单词的秘密" abstract="Aha"
                        time="Aha" />
                    <PreviewItem half="上半场" session="2" author="Hapenia" title="Wordle之谜：挖掘数字分数和解决方案单词的秘密" abstract="Aha"
                        time="Aha" />
                    <PreviewItem half="上半场" session="3" author="Hapenia" title="Wordle之谜：挖掘数字分数和解决方案单词的秘密" abstract="Aha"
                        time="Aha" />
                </div>
                <div class="flex flex-col w-1/4 ml-4" style="width: 25vw;">
                    <PreviewItem half="下半场" session="1" author="Hapenia" title="Wordle之谜：挖掘数字分数和解决方案单词的秘密" abstract="Aha"
                        time="Aha" />
                    <PreviewItem half="下半场" session="2" author="Hapenia" title="Wordle之谜：挖掘数字分数和解决方案单词的秘密" abstract="Aha"
                        time="Aha" />
                    <PreviewItem half="下半场" session="3" author="Hapenia" title="Wordle之谜：挖掘数字分数和解决方案单词的秘密" abstract="Aha"
                        time="Aha" />
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.texture {
    @apply pointer-events-none absolute select-none;
    bottom: -10vh;
    left: -230px;
    transform: rotate(-90.00deg);
    opacity: 0.13;
    color: rgb(13, 13, 13);
    font-family: Noto Sans SC;
    font-size: 144px;
    font-weight: 900;
    line-height: 169px;
}

.content {
    @apply absolute select-none left-9;
    top: calc(10% + 40px);
}

.issueIndex {
    @apply text-0d;
    font-family: Noto Sans SC;
    font-size: 96px;
    font-weight: 900;
    line-height: 113px;
}

.tile {
    width: 45px;
    height: 4px;
}
</style>