<template>
  <div class="slide chapter-root">
    <!-- 左側：置中靠左標題 -->
    <div class="chapter-left">
      <div class="chapter-content">
        <div class="chapter-tag">第一章</div>
        <h2 class="chapter-title">資工系畢業，到底値多少？</h2>
      </div>
    </div>
    <!-- 右 1/3：滿版背景圖片 -->
    <div class="chapter-right">
      <img src="/chapter1.png" alt="chapter1" class="chapter-img" />
    </div>
  </div>
</template>

<style scoped>
.chapter-root {
  padding: 0;
  flex-direction: row;
  overflow: hidden;
}

/* 左側：填滿扣除圖片後的剩餘寬度，垂直置中 */
.chapter-left {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 4rem;
}

/* 內容群組：靠左對齊 */
.chapter-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.chapter-tag {
  display: inline-block;
  background: rgba(26, 115, 232, 0.2);
  color: #7eb3ff;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.75rem 2.5rem;
  border-radius: 3rem;
  letter-spacing: 0.1rem;
}

.chapter-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #e2e8f0;
  line-height: 1.4;
  text-align: left;
  border-left: 6px solid #1a73e8;
  padding-left: 1.25rem;
}

/* 內容群組進場動畫 */
.chapter-content > * {
  animation: slideInUp 0.825s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.chapter-content > *:nth-child(1) {
  animation-delay: 0.12s;
}
.chapter-content > *:nth-child(2) {
  animation-delay: 0.33s;
}

/* 右側圖片：不製作動畫 */
.chapter-right {
  flex: 0 0 auto;
  display: flex;
  align-items: stretch;
}
.chapter-img {
  height: 100%;
  width: auto;
  display: block;
}
</style>
