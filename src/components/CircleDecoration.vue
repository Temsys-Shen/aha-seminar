<script setup>
import { ref } from "vue";

const props = defineProps({
    themeColor: {
        type: String,
        required: true
    }
})
const decoCanvas = ref(null)

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {string} color 
 */
function draw(canvas, color) {
    const ctx = canvas.getContext("2d");
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (h * window.devicePixelRatio == canvas.height && w * window.devicePixelRatio == canvas.width) {
        return
    }
    canvas.height = h * window.devicePixelRatio;
    canvas.width = w * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.fillStyle = "#0d0d0d";
    // ctx.fillRect(0, 0, w, 1);
    // ctx.fillRect(0, h - 1, w, 1);
    ctx.setLineDash([1, 15]);
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, h - 1);
    ctx.lineTo(w, h - 1);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineCap = 'butt';

    ctx.beginPath();
    ctx.arc(w, 0, 0.5 * h - 7.5, 0, 2 * Math.PI)
    ctx.arc(w - 60, 0.75 * h, 0.5 * h + 7.5, 0, 2 * Math.PI)
    ctx.lineWidth = 2
    ctx.strokeStyle = "#0d"
    ctx.stroke()

    ctx.globalCompositeOperation = "destination-over"
    ctx.fillStyle = color;
    ctx.beginPath()
    const r = 0.5 * h + 0.026 * h
    const x_offset = Math.sqrt(r * r - 0.25 * h * h)
    ctx.arc(w - x_offset, 0.5 * h, r, 0, 2 * Math.PI)
    ctx.fill()
}

window.setInterval(() => {
    draw(decoCanvas.value, props.themeColor)
}, 20)
</script>

<template>
    <canvas ref="decoCanvas" class="absolute w-full h-full" />
</template>