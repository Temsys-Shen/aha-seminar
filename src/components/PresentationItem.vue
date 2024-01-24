<script setup>
defineProps(['title', 'abstract', 'blink', 'glink'])

</script>

<template>
    <div class="flex flex-col">
        <div class="text-sm">{{ title }}</div>
        <div class="flex grow">
            <div class="flex flex-col justify-around m-1">
                <a class="link" :href="blink"
                    :style="`background-color:${blink ? '#CF2485' : 'grey;cursor: not-allowed;'};`">Bilibili</a>
                <a class="link" :href="glink"
                    :style="`background-color:${glink ? '#202328' : 'grey;cursor: not-allowed;'};`">Github</a>
            </div>
            <div class="font-light" style="font-size: 11px;color: #666666;">{{ abstract }}</div>
        </div>
    </div>
</template>

<style scoped>
.link {
    @apply px-1 py-0.5 text-center font-bold;
    border-radius: 5px;
    font-family: Outfit;
    font-size: 11px;
    color: #DEDEDE;
    line-height: 11px;
}
</style>