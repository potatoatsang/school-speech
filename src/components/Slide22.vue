<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第二章 2-2</div>
    <h2 class="slide-title">專題做什麼</h2>
    <p class="slide-lead">做專題的本質是「展示肌肉」而不是「改變世界」。</p>
    <div class="topic-cards">
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="topic-card"
        :style="{ '--accent': card.color }"
      >
        <div class="tc-header">{{ card.title }}</div>
        <div class="tc-body">
          <div class="tc-content">{{ card.content }}</div>
        </div>
      </div>
    </div>
    <div class="callout orange">
      大學專題是證明「我會用這個工具」；研究所題目是證明「我能讓這個工具變得更好」；博士題目才是為了「改變世界」
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    title: "發想題目的迷思",
    content:
      "以為題目越有創意越好，過度理想化而忽略「可行性」，做不出來等於作夢，不要做沒人做過的題目。",
    color: "#1a73e8",
  },
  {
    title: "技術選型的偏誤",
    content:
      "以為使用的技術越新越好，應優先選擇當前最普及、社群最活躍的技術來做專題，不要盲目跟風新技術。",
    color: "#43a047",
  },
  {
    title: "挑選教授的重點",
    content:
      "名師或涼師都不是重點，重點是「教授的研究領域是否與你想用的技術和題目有關？」",
    color: "#fb8c00",
  },
];
</script>

<style scoped>
.callout {
  font-size: 1.25rem;
  padding: 1rem 1.375rem;
  margin: 0.875rem 0;
}
.topic-cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 0;
  margin-bottom: 0.5rem;
}
.topic-card {
  flex: 1;
  background: #1a2438;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}
.tc-header {
  background: var(--accent, #1a73e8);
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  padding: 0.4rem 1.25rem;
  line-height: 1.4;
}
.tc-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1.25rem 0.75rem;
  justify-content: center;
}

.tc-content {
  font-size: 1.25rem;
  line-height: 1.5;
}
</style>
