<script setup>
import tippy from 'tippy.js';
import { ref, onMounted } from 'vue';
//上下半场、场次、发表人、标题、摘要、时间、是否为移动端
const props = defineProps(['half', 'session', 'author', 'title', 'abstract', 'time', 'mobile'])
const self = ref(null);
const content = props.abstract + '<br>' + (props.time ?? '');
const showAbstract = ref(false);

onMounted(() => {
    if (props.mobile) {
        self.value.addEventListener('click', () => {
            showAbstract.value = !showAbstract.value;
        });
    } else {
        tippy(self.value, {
            content: content,
            placement: 'right',
            allowHTML: true,
        });
    }

});

</script>
<template>
    <div ref="self" class="p-3">
        <div :class="`tile ${half == '下半场' ? 'bg-m' : 'bg-c'}`"></div>
        <div class="flex">
            <div>{{ half }} #{{ session }}</div>
            <div class="grow"></div>
            <div>By {{ author }}</div>
        </div>
        <div class="text-0d text-2xl font-black">
            {{ title }}
        </div>
        <Transition>
            <div v-if="showAbstract" class="text-0d text-xl font-light">
                {{ abstract }}
            </div>
        </Transition>

    </div>
</template>

<style scoped>
.tile {
    width: 45px;
    height: 4px;
}

/* 为transition编写展开与折叠的动画 */
.v-enter-active,
.v-leave-active {
    transition: transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(-100%);
}
</style>