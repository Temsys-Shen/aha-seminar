<script setup>
// import Timeline from '@/components/TimelineC.vue'
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

function calOffset(m, baseOnX = true, breathe = true, k = 1) {
  let p;
  if (baseOnX) {
    p = mouseX - window.innerWidth / 2
  }
  else {
    p = mouseY - window.innerHeight / 2
  }
  return k * p / m + breathe * (globalXBias.next() / Math.sqrt(m) * 0.5)
}

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
  ctx.fillRect(40 + calOffset(160), 0, 120, 0.94 * h)
  ctx.globalCompositeOperation = "xor"
  //底部横条
  ctx.fillRect(0, 0.875 * h, w, 0.125 * h)
  //#region 文字
  ctx.font = "900 240px 'Outfit'"
  ctx.fillText("Aha!", 58, h / 2 + calOffset(80, false))
  if (isSafari) {
    ctx.font = "100 96px '苹方-简'"
  }
  else {
    ctx.font = "900 96px 'Noto Sans SC'"
  }
  ctx.fillText("研讨室", 63, h / 2 + 117 + calOffset(40, false))
  //#endregion
  //#region 画圆
  ctx.arc(w + calOffset(16), 0, 0.5 * h - 7.5, 0, 2 * Math.PI)
  ctx.arc(w - 60 + calOffset(40), 0.75 * h, 0.5 * h + 7.5, 0, 2 * Math.PI)
  ctx.lineWidth = 2
  ctx.strokeStyle = "#0d"
  ctx.stroke()
  //#endregion
  //#region 字母
  const text1Bias = calOffset(7.5)
  const text2Bias = calOffset(11)
  const text3Bias = calOffset(9)
  const text4Bias = calOffset(6)
  ctx.font = "900 48px 'Outfit'"
  ctx.fillText("T", w - 0.45 * h + text1Bias, 0.5 * h - 75)
  ctx.fillText("P", w - 0.45 * h + text2Bias + 150, 0.5 * h - 75)
  ctx.fillText("A", w - 0.45 * h + text3Bias, 0.5 * h + 75)
  const x_offset_rand = 5 + randX.next()
  const y_offset_rand = 12 + randY.next()
  ctx.fillText("T",
    w - 0.45 * h + x_offset_rand + text1Bias,
    0.5 * h - 75 + y_offset_rand)
  ctx.fillText("P",
    w - 0.45 * h + 150 + x_offset_rand + text2Bias,
    0.5 * h - 75 + y_offset_rand)
  ctx.fillText("A",
    w - 0.45 * h + x_offset_rand + text3Bias,
    0.5 * h + 75 + y_offset_rand)
  ctx.beginPath()
  //直角
  ctx.moveTo(w - 0.45 * h + 150 + text4Bias, 0.5 * h + 85)
  ctx.lineTo(w - 0.45 * h + 180 + text4Bias, 0.5 * h + 85)
  ctx.lineTo(w - 0.45 * h + 180 + text4Bias, 0.5 * h + 55)
  ctx.stroke()
  //#endregion
  //#region 实心圆
  ctx.globalCompositeOperation = "destination-over"
  ctx.fillStyle = "#25A1D2"
  ctx.beginPath()
  const r = 0.5 * h + 0.026 * h
  const x_offset = Math.sqrt(r * r - 0.25 * h * h)
  ctx.arc(w - x_offset + calOffset(80), 0.5 * h, r, 0, 2 * Math.PI)
  ctx.fill()
  //#endregion
  //#region 色块
  ctx.globalCompositeOperation = "source-over"
  const tileY = 0.5 * h + 142 + calOffset(30, false)
  ctx.fillStyle = "#25A1D2"
  ctx.fillRect(63, tileY, 45, 4)
  ctx.fillStyle = '#CF2485'
  ctx.fillRect(108, tileY, 45, 4)
  ctx.fillStyle = '#E8DF31'
  ctx.fillRect(153, tileY, 45, 4)
  ctx.fillStyle = '#221E1F'
  ctx.fillRect(198, tileY, 45, 4)
  //#endregion
  //#region 画线
  ctx.globalCompositeOperation = "xor"
  ctx.beginPath()
  ctx.moveTo(mouseX + 1, 0)
  ctx.lineTo(mouseX + 1, h)
  ctx.lineWidth = 1.5
  ctx.stroke()
  //#endregion

  document.getElementById("slogan").style.transform = `translateY(${calOffset(40, false) + 27}px)`
}

function scrollToAbout() {
  document.getElementById("aboutView").scrollIntoView()
}

const randX = new Rand(-2, 2, 0.5)
const randY = new Rand(-5, 5, 1)
const globalXBias = new Rand(-20, 20, 0.1)
let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX
  mouseY = event.clientY
})
window.setInterval(draw, 20)

</script>

<template>
  <div class="container w-full h-full bg-bg absolute" style="max-width: 100%;">
    <div id="slogan">
      Aha！在这里，你将找到志同道合的伙伴，一起探索未知的世界。
    </div>
    <button id="about-us" @click="scrollToAbout">About us</button>
    <canvas id="canvas" class="bg-bg w-full h-full"></canvas>
  </div>
</template>

<style scoped>
#slogan {
  @apply text-0d select-none absolute left-96 pointer-events-none;
  font-size: 24px;
  font-weight: 350;
  font-family: 'Noto Sans SC';
  top: 50%;
  transform: translateY(27px);
  max-width: 315px;
  line-height: 36px;
}

#about-us {
  @apply text-0d absolute right-10 top-10 select-none;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Roboto Condensed';
  line-height: 16px;
  padding: 0.5rem 1rem;
  transition: all 0.2s;
}
</style>