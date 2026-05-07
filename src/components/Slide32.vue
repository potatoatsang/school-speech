<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第三章 3-2</div>
    <h2 class="slide-title">⚠️ 現實二：工具每 2-3 年換一輪</h2>
    <p class="slide-lead">
      jQuery → React → 下一個？你現在學的框架，5 年後可能沒人用。
    </p>
    <div class="callout">
      <strong>重要的不是你「會什麼工具」，是你「學新工具的速度」。</strong><br>
      打穩基礎（資料結構、演算法、作業系統、網路）＝ 不管工具怎麼換，你都能快速上手。
    </div>
    <div class="timeline">
      <div v-for="(era, i) in timeline" :key="i" class="era-item">
        <div class="era-period">{{ era.period }}</div>
        <div class="era-tools">{{ era.tools }}</div>
        <div class="era-arrow" v-if="i < timeline.length - 1">→</div>
      </div>
    </div>
    <div class="callout green" style="margin-top:16px">
      <strong>核心不變的是：</strong>資料結構、演算法、作業系統、網路、資料庫設計——這些是學越久越值錢的基礎。
    </div>
  </div>
</template>

<script setup>
const timeline = [
  { period: '2005–2012', tools: 'jQuery\nPHP\nMySQL' },
  { period: '2013–2018', tools: 'React / Angular\nNode.js\nMongoDB' },
  { period: '2019–2023', tools: 'Vue 3 / Next.js\nDocker\nK8s' },
  { period: '2024–', tools: 'AI Copilot\nLLM Tools\n?' },
]
</script>

<style scoped>
.timeline {
  display: flex; align-items: center; gap: 0;
  background: #131d30; border-radius: 12px; padding: 20px 16px; margin-top: 20px;
  flex-wrap: wrap; justify-content: center;
}
.era-item { display: flex; align-items: center; }
.era-period {
  background: #1a2438; border: 2px solid #1a73e8; border-radius: 10px;
  padding: 10px 14px; text-align: center;
  font-size: 12px; font-weight: 700; color: #7eb3ff; white-space: pre-line; line-height: 1.8;
}
.era-tools {
  background: rgba(26,115,232,0.15); border-radius: 8px; padding: 8px 12px;
  margin-left: 8px; font-size: 12px; white-space: pre-line; line-height: 1.8; color: #b0bec5;
}
.era-arrow { font-size: 20px; color: #2a3a58; margin: 0 10px; }
</style>
