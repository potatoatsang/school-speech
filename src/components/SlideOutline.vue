<template>
  <div class="slide outline-slide">
    <div class="outline-inner">
      <div class="outline-title-block">
        <h2>演講大綱</h2>
        <p>今天我們會走過三個章節</p>
      </div>
      <div class="outline-chapters">
        <div
          v-for="(ch, i) in chapters"
          :key="i"
          class="outline-chapter-card"
          :style="{ '--accent': ch.color }"
        >
          <div class="oc-num">{{ `0${i + 1}` }}</div>
          <div class="oc-body">
            <div class="oc-title">{{ ch.title }}</div>
            <div class="oc-subtitle">{{ ch.subtitle }}</div>
            <ul class="oc-points">
              <li v-for="(pt, j) in ch.points" :key="j">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const chapters = [
  {
    title: '第一章：開始之前',
    subtitle: '資工系畢業，到底值多少？',
    color: '#1a73e8',
    points: ['台灣薪資分布解析（D1–D9 十分位圖）', '資工系起薪 vs 全國中位數比較', '職涯晉升路徑與薪資天花板'],
  },
  {
    title: '第二章：在學期間',
    subtitle: '該學什麼、怎麼選專題、要不要升學？',
    color: '#43a047',
    points: ['六大職涯路線技能樹（可互動）', '專題選老師三大關鍵', '升學三條路：五年一貫、推甄、考試'],
  },
  {
    title: '第三章：畢業之後',
    subtitle: 'AI 時代的生存指南',
    color: '#fb8c00',
    points: ['AI 會取代「只會寫程式」的人', '工具每 2-3 年換一輪', '強者更強的馬太效應', '四個具體建議'],
  },
]
</script>

<style scoped>
.outline-slide {
  background: #0a0e1a;
  display: flex; align-items: center; justify-content: center;
}
.outline-inner {
  width: 100%; max-width: 100%;
  padding: 40px 0;
  display: flex; flex-direction: column; gap: 28px;
}
.outline-title-block { text-align: center; }
.outline-title-block h2 { font-size: 30px; color: #7eb3ff; letter-spacing: 2px; margin-bottom: 6px; }
.outline-title-block p { font-size: 15px; color: #94a3b8; }
.outline-chapters { display: flex; flex-direction: column; gap: 16px; }
.outline-chapter-card {
  background: #1a2438; border-radius: 14px; padding: 20px 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.4);
  display: flex; gap: 20px; align-items: flex-start;
  border-left: 5px solid var(--accent, #1a73e8);
}
.oc-num { font-size: 36px; font-weight: 900; color: var(--accent, #1a73e8); opacity: 0.35; line-height: 1; min-width: 52px; }
.oc-body { flex: 1; }
.oc-title { font-size: 17px; font-weight: 700; color: var(--accent, #1a73e8); margin-bottom: 2px; }
.oc-subtitle { font-size: 13px; color: #94a3b8; margin-bottom: 8px; }
.oc-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 3px; }
.oc-points li { font-size: 13px; color: #94a3b8; }
.oc-points li::before { content: "• "; color: var(--accent); font-weight: 700; }
.outline-footer { text-align: center; font-size: 13px; color: #4a5568; }
</style>
