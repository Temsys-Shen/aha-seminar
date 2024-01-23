<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    },
    currentId: {
        type: String,
        required: true
    },
    ratio: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <div class="flex flex-col items-end gap-2">
        <div v-for="(i, j) in items" :key="i.id" class="flex items-center h-4">
            <div v-if="i.id == currentId" class="content-label text-0d drop-shadow-lg pointer-events-none select-none">
                {{ i.name }}
            </div>
            <div class="rounded-lg bg-black ml-2" style="min-width: 6px;height:6px;"
                :style="`width:${30 * Math.exp(-Math.abs(4 * (ratio - j / items.length)) * 0.693)}px`">
            </div>
        </div>
    </div>
</template>

<style>
.content-label {
    font-family: 'Roboto Condensed';
    font-weight: 700;
}
</style>