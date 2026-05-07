<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第三章 3-1</div>
    <h2 class="slide-title">⚠️ 現實一：AI 會取代「只會寫程式」的人</h2>
    <p class="slide-lead">
      AI 輔助寫程式已是常態。單純「把需求翻譯成程式碼」的工作價值正在下降。
    </p>
    <div class="callout orange">
      <strong>不會被取代的是：</strong><br>
      • 能拆解複雜問題的人（問對問題 &gt; 寫對程式）<br>
      • 能設計系統架構的人（AI 寫得了函式，設計不了系統）<br>
      • 能清楚溝通技術的人（跨團隊協作是 AI 做不到的）
    </div>
    <div class="three-cols">
      <div class="col-card" v-for="card in cards" :key="card.title">
        <div class="col-icon">{{ card.icon }}</div>
        <div class="col-title">{{ card.title }}</div>
        <div class="col-desc">{{ card.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  { icon: '🧩', title: '拆解問題', desc: '問對問題比寫對程式更有價值。能把模糊需求結構化的人，AI 幫不了。' },
  { icon: '🏗️', title: '系統設計', desc: 'AI 能寫函式，但架構決策、容量規劃、技術選型需要人來判斷。' },
  { icon: '🤝', title: '跨團隊溝通', desc: '跟 PM、設計師、業務解釋技術限制，這是工程師的核心軟技能。' },
]
</script>

<style scoped>
.three-cols { display: flex; gap: 16px; margin-top: 20px; }
.col-card {
  flex: 1; background: #1a2438; border: 1px solid #2a3a58;
  border-radius: 12px; padding: 18px 16px; text-align: center;
}
.col-icon { font-size: 28px; margin-bottom: 8px; }
.col-title { font-weight: 700; font-size: 15px; color: #7eb3ff; margin-bottom: 6px; }
.col-desc { font-size: 13px; color: #94a3b8; line-height: 1.6; }
</style>
