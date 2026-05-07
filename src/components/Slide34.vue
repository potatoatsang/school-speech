<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第三章 3-4</div>
    <h2 class="slide-title">🎯 給學弟妹的四個具體建議</h2>
    <div class="tips">
      <div v-for="(tip, i) in tips" :key="i" class="tip">
        <span class="num">{{ i + 1 }}</span>
        <span class="title">{{ tip.title }}</span>
        <div class="desc">{{ tip.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tips = [
  { title: '不要只會寫作業', desc: '課堂作業只是最低門檻，業界看的是你能不能「做東西」。' },
  { title: '一定要有作品集', desc: '一個 GitHub 上的 Side Project 勝過一百張證照。' },
  { title: '越早實習越好', desc: '實習讓你知道業界在做什麼、你還缺什麼。' },
  { title: '學會用 AI，但不依賴', desc: 'AI 是放大器：你強它讓你更強，你弱它讓你更懶。' },
]
</script>
