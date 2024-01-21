<script setup>
//判断是否为safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function draw() {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  const w = window.innerWidth
  const h = window.innerHeight
  canvas.width = w
  canvas.height = h
  ctx.fillStyle = "#0d"
  ctx.fillRect(40, 0, 112, 0.94 * h)
  ctx.globalCompositeOperation = "xor"
  ctx.fillRect(0, 0.875 * h, w, 0.125 * h)
  ctx.font = "900 240px 'Outfit'"
  ctx.fillText("Aha!", 50, h / 2)
  if (isSafari) {
    ctx.font = "100 96px '苹方-简'"
  }
  else {
    ctx.font = "900 96px 'Noto Sans SC'"
  }
  ctx.fillText("研讨室", 55, h / 2 + 117)
}
window.setInterval(draw, 1000)

</script>

<template>
  <div class="container w-full h-full bg-bg absolute" style="max-width: 100%;">

    <box class="box">
      <!-- <div class="bg-0d w-28 ml-10 z-0 absolute mix" style="height: 94%; " />
      <div class="bg-0d w-full h-1/8 z-10 absolute mix" style="top:87.5%" /> -->
    </box>

    <canvas id="canvas" class="bg-bg h-full"></canvas>

  </div>
</template>

<style scoped>
.mix {}

.box {
  isolation: isolate;
}
</style>
