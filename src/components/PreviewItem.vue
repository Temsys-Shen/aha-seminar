<script setup>
//上下半场、场次、发表人、标题、摘要、时间
defineProps(['half', 'session', 'author', 'title', 'abstract', 'time',])

</script>
<template>
    <div class="p-3">
        <div :class="`tile ${half == '下半场' ? 'bg-m' : 'bg-c'}`"></div>
        <div class="flex">
            <div>{{ half }} #{{ session }}</div>
            <div class="grow"></div>
            <div>By {{ author }}</div>
        </div>
        <div class="text-0d text-2xl font-black">
            {{ title }}
        </div>
    </div>
</template>

<style scoped>
.tile {
    width: 45px;
    height: 4px;
}
</style>