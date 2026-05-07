<template>
  <div class="slide outline-root">
    <!-- 左 2/3：大綱內容 -->
    <div class="outline-left">
      <div class="slide-chapter-tag">大綱</div>
      <h2 class="slide-title">今天我們會走過三個章節</h2>
      <div class="outline-chapters">
        <div
          v-for="(ch, i) in chapters"
          :key="i"
          class="outline-chapter-card"
          :style="{ '--accent': ch.color }"
        >
          <div class="oc-header">{{ ch.title }}</div>
          <div class="oc-body">
            <div class="oc-title">{{ ch.subtitle }}</div>
            <ul class="oc-points">
              <li v-for="(pt, j) in ch.points" :key="j">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 右 1/3：滿版圖片 -->
    <div class="outline-right">
      <img src="/outline.png" alt="outline" class="outline-img" />
    </div>
  </div>
</template>

<script setup>
const chapters = [
  {
    title: "開始之前",
    subtitle: "第一章：資工系畢業，到底值多少？",
    color: "#1a73e8",
    points: ["台灣薪資分布解析", "畢業薪水落在哪裡", "有哪些路可以走"],
  },
  {
    title: "在學期間",
    subtitle: "第二章：該學什麼、怎麼選專題、要不要升學？",
    color: "#43a047",
    points: ["選修怎麼選", "專題做什麼", "升學三條路"],
  },
  {
    title: "畢業之後",
    subtitle: "第三章：AI 時代的生存指南",
    color: "#fb8c00",
    points: ["不用急著 Vibe Coding"],
  },
];
</script>

<style scoped>
.outline-root {
  padding: 0;
  flex-direction: row;
  overflow: hidden;
}

/* 左側：填滿扣除圖片後的剩餘寬度 */
.outline-left {
  flex: 1;
  min-width: 0;
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;
}

/* 右側圖片：不裁切、保持比例、貼齊上下 */
.outline-right {
  flex: 0 0 auto;
  display: flex;
  align-items: stretch;
}
.outline-img {
  height: 100%;
  width: auto;
  display: block;
}

/* 左側內容進場動畫 */
.outline-left > * {
  animation: slideInUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.outline-left > *:nth-child(1) {
  animation-delay: 0.08s;
}
.outline-left > *:nth-child(2) {
  animation-delay: 0.27s;
}
.outline-left > *:nth-child(3) {
  animation-delay: 0.45s;
}
.outline-chapters {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  width: 95%;
}
.outline-chapter-card {
  flex: 1;
  background: #1a2438;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}
.oc-header {
  background: var(--accent, #1a73e8);
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  padding: 0.4rem 1.25rem;
  line-height: 1.4;
}
.oc-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  justify-content: center;
}
.oc-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}
.oc-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.oc-points li {
  font-size: 1.25rem;
  color: #94a3b8;
  line-height: 1.5;
  padding-left: 0.25rem;
}
.oc-points li::before {
  content: "▸ ";
  color: var(--accent);
  font-weight: 700;
}

/* ---- Mobile RWD ---- */
@media (max-width: 768px) {
  .outline-root {
    flex-direction: column;
  }
  .outline-right {
    display: none;
  }
  .outline-left {
    padding: 1.5rem 1.25rem;
  }
  .outline-chapters {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .outline-left {
    padding: 1.25rem 1rem;
  }
  .oc-header {
    font-size: 1rem;
    padding: 0.35rem 1rem;
  }
  .oc-body {
    padding: 0.25rem 1rem;
  }
  .oc-title {
    font-size: 1rem;
  }
  .oc-points li {
    font-size: 1rem;
  }
}
</style>
