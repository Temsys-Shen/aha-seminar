<script setup>
import { onMounted, watch } from 'vue';


const props = defineProps({
    year: {
        type: Number,
        default: 2077
    },
    season: {
        type: Number,
        default: 1
    },
    width: {
        type: Number,
        default: 95
    },
    height: {
        type: Number,
        default: 50
    }
})

let canvas = null
/** @type {CanvasRenderingContext2D} */
let ctx = null

onMounted(() => {
    canvas = document.getElementById("timeline")
    ctx = canvas.getContext("2d")
    draw(props.year, props.season)
})

watch(props, (newProps) => {
    draw(newProps.year, newProps.season)
})

function draw(year, season) {
    canvas.height = props.height * devicePixelRatio
    canvas.width = props.width * devicePixelRatio
    const w = props.width
    const h = props.height
    ctx.scale(0.8 * window.devicePixelRatio, 0.8 * window.devicePixelRatio)
    ctx.fillStyle = "#0d0d0d80"
    for (let i = 0; i < 11; i++) {
        ctx.fillRect(w / 2 - 8 * (5 - i), h / 4, 1, 3)
    }
    ctx.fillStyle = "#0d0d0dff"
    ctx.fillRect(w / 2 - 2, h / 4, 4, 4)
    ctx.fillRect(w / 2 - 32, h / 4, 2, 4)
    ctx.fillRect(w / 2 + 32, h / 4, 2, 4)
    const seasonMap = {
        1: [14, 11],
        2: [13, 12],
        3: [12.5, 12.5],
        4: [12, 13]
    }
    ctx.fillStyle = "#0d0d0d80"
    ctx.font = "700 11px 'Roboto Condensed'"
    ctx.fillText(year - 1, w / 2 - 45, h / 4 + 17)

    ctx.fillStyle = "#0d0d0dff"
    ctx.font = `900 ${seasonMap[season][0]}px 'Roboto Condensed'`
    ctx.fillText(year, w / 2 - 15, h / 4 + 20)

    ctx.fillStyle = "#0d0d0d80"
    ctx.font = `700 ${seasonMap[season][1]}px 'Roboto Condensed'`
    ctx.fillText(year + 1, w / 2 + 20, h / 4 + 17)

    ctx.fillStyle = "#CF2485ff"
    ctx.fillRect(w / 2 - 0.5, h / 4 - 4, 1, 12)

}
</script>

<template>
    <canvas id="timeline" class="bg-opacity-0"></canvas>
</template>