<script setup>
import AhaLogo from '@/components/AhaLogo.vue'
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

class Rand {
  constructor(min, max, frequency = 2, momentum = 0.5) {
    this.min = min;
    this.max = max;
    this.x = Math.random() * Math.PI * 2;
    this.frequency = frequency;
    this.momentum = momentum;
    this.lastChange = 0;
  }

  next() {
    const change = this.frequency / 100 * Math.random() + this.momentum * this.lastChange;
    this.x += change;
    this.lastChange = change;
    const sinValue = Math.sin(this.x) * Math.sin(2 * this.x + Math.PI / 3);
    // 将 -1~1 映射到 min~max
    return ((sinValue + 1) / 2) * (this.max - this.min) + this.min;
  }
}

const randX = new Rand(-2, 2, 0.5)
const randY = new Rand(-5, 5, 1)

function draw() {
  //#region 画布初始化
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  const w = window.innerWidth
  const h = window.innerHeight
  canvas.height = h * window.devicePixelRatio;
  canvas.width = w * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  //#endregion
  //左侧竖条
  ctx.fillStyle = "#0d"
  ctx.fillRect(40, 0, 120, 0.94 * h)
  ctx.globalCompositeOperation = "xor"
  //底部横条
  ctx.fillRect(0, 0.875 * h, w, 0.125 * h)
  //#region 文字
  ctx.font = "900 240px 'Outfit'"
  ctx.fillText("Aha!", 58, h / 2)
  if (isSafari) {
    ctx.font = "100 96px '苹方-简'"
  }
  else {
    ctx.font = "900 96px 'Noto Sans SC'"
  }
  ctx.fillText("研讨室", 63, h / 2 + 117)
  //#endregion
  //#region 画圆
  ctx.arc(w - 60, 0.75 * h, 0.5 * h + 7.5, 0, 2 * Math.PI)
  ctx.arc(w, 0, 0.5 * h - 7.5, 0, 2 * Math.PI)
  ctx.lineWidth = 2
  ctx.strokeStyle = "#0d"
  ctx.stroke()
  //#endregion
  //#region 字母
  ctx.font = "900 48px 'Outfit'"
  ctx.fillText("T", w - 0.45 * h, 0.5 * h - 75)
  ctx.fillText("A", w - 0.45 * h, 0.5 * h + 75)
  ctx.fillText("P", w - 0.45 * h + 150, 0.5 * h - 75)
  const x_offset_rand = 5 + randX.next()
  const y_offset_rand = 12 + randY.next()
  ctx.fillText("T",
    w - 0.45 * h + x_offset_rand,
    0.5 * h - 75 + y_offset_rand)
  ctx.fillText("A",
    w - 0.45 * h + x_offset_rand,
    0.5 * h + 75 + y_offset_rand)
  ctx.fillText("P",
    w - 0.45 * h + 150 + x_offset_rand,
    0.5 * h - 75 + y_offset_rand)
  ctx.beginPath()
  //原来的三个字母占据了左上、左下、右上三个象限，现在要在右下角画一个直角
  ctx.moveTo(w - 0.45 * h + 150, 0.5 * h + 85)
  ctx.lineTo(w - 0.45 * h + 180, 0.5 * h + 85)
  ctx.lineTo(w - 0.45 * h + 180, 0.5 * h + 55)
  ctx.stroke()
  //#endregion
  //#region 实心圆
  ctx.globalCompositeOperation = "destination-over"
  ctx.fillStyle = "#25A1D2"
  ctx.beginPath()
  const r = 0.5 * h + 0.026 * h
  const x_offset = Math.sqrt(r * r - 0.25 * h * h)
  ctx.arc(w - x_offset, 0.5 * h, r, 0, 2 * Math.PI)
  ctx.fill()
  //#endregion
}
window.setInterval(draw, 16.66)

</script>

<template>
  <div class="container w-full h-full bg-bg absolute" style="max-width: 100%;">
    <div class="absolute left-9" style="top: 4%;">
      <AhaLogo />
    </div>
    <canvas id="canvas" class="bg-bg w-full h-full"></canvas>
  </div>
</template>
