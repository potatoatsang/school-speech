<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第一章 1-2</div>
    <h2 class="slide-title">📐 十分位數是什麼？</h2>
    <p class="slide-lead">把全部受僱者由低到高排列，每 10% 切一刀，得到 D1～D9 九個門檻值：</p>
    <div class="decile-grid">
      <div
        v-for="d in deciles" :key="d.label"
        class="decile-card"
        :class="{ 'decile-highlight': d.highlight }"
      >
        <div class="decile-label">{{ d.label }}</div>
        <div class="decile-value">{{ d.value }}</div>
        <div class="decile-desc">{{ d.desc }}</div>
      </div>
    </div>
    <div class="callout">
      <strong>關鍵解讀：</strong>
      超過 <strong>D9（133.6 萬）</strong> 代表你的收入已高於 <strong>90% 的受僱者</strong>。
      圖中「您的總薪資」標示在 D8 附近——這正是資深工程師（5–8 年）的典型水準。
    </div>
  </div>
</template>

<script setup>
const deciles = [
  { label: 'D1', value: '33.0 萬', desc: '高於 10%', highlight: false },
  { label: 'D2', value: '38.1 萬', desc: '高於 20%', highlight: false },
  { label: 'D3', value: '43.2 萬', desc: '高於 30%', highlight: false },
  { label: 'D4', value: '48.7 萬', desc: '高於 40%', highlight: false },
  { label: 'D5', value: '54.6 萬', desc: '中位數', highlight: false },
  { label: 'D6', value: '62.8 萬', desc: '高於 60%', highlight: false },
  { label: 'D7', value: '75.3 萬', desc: '高於 70%', highlight: true },
  { label: 'D8', value: '95.9 萬', desc: '高於 80%', highlight: true },
  { label: 'D9', value: '133.6 萬', desc: '高於 90%', highlight: true },
]
</script>

<style scoped>
.decile-grid {
  display: grid; grid-template-columns: repeat(9, 1fr); gap: 8px; margin-bottom: 18px;
}
.decile-card {
  background: #1a2438; border: 1px solid #2a3a58; border-radius: 10px;
  padding: 10px 4px; text-align: center; font-size: 11px;
}
.decile-label { font-weight: 700; color: #94a3b8; margin-bottom: 3px; }
.decile-value { font-weight: 800; font-size: 13px; color: #e2e8f0; }
.decile-desc { color: #64748b; margin-top: 3px; font-size: 10px; }
.decile-highlight { background: rgba(26,115,232,0.2); border-color: #1a73e8; }
.decile-highlight .decile-label, .decile-highlight .decile-value { color: #7eb3ff; }
</style>
