<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第一章 1-3</div>
    <h2 class="slide-title">有哪些路可以走</h2>

    <div class="skill-tree">
      <span class="root">資工系畢業</span>
      <div class="connector"></div>
      <div class="branches">
        <div
          v-for="(r, i) in routes"
          :key="i"
          class="branch"
          :class="{ highlight: selectedRoute === i }"
          @click="selectRoute(i)"
          role="button"
          :aria-pressed="selectedRoute === i"
        >
          {{ r.name }}
        </div>
      </div>
    </div>

    <Transition name="skill-fade">
      <div v-if="selectedRoute !== null" class="skill-detail-panel">
        <div
          class="sdp-header"
          :style="{ borderLeftColor: routes[selectedRoute].color }"
        >
          <div>
            <div class="sdp-title">{{ routes[selectedRoute].name }}</div>
            <div class="sdp-tagline">{{ routes[selectedRoute].tagline }}</div>
          </div>
          <button
            class="sdp-close"
            @click="selectedRoute = null"
            aria-label="關閉"
          >
            ✕
          </button>
        </div>
        <div class="sdp-body">
          <p class="sdp-content">{{ routes[selectedRoute].content }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectedRoute = ref(null);
function selectRoute(i) {
  selectedRoute.value = selectedRoute.value === i ? null : i;
}
const routes = [
  {
    name: "前端工程師",
    color: "#1a73e8",
    tagline: "打造用戶看到的畫面",
    content:
      "網頁上的按鈕會動、滑動有動畫、手機上的版面也好看，讓人用起來順暢、看起來舒服。",
  },
  {
    name: "後端工程師",
    color: "#6200ea",
    tagline: "驅動應用的邏輯與資料",
    content:
      "網頁上的登入怎麼驗證身分？購物車結帳，金額怎麼算、庫存怎麼扣？這些邏輯都是後端在處理。",
  },
  {
    name: "維運工程師",
    color: "#e53935",
    tagline: "讓整個系統穩穩地跑起來",
    content:
      "使用雲端平台（如 AWS, Azure, Google Cloud Platform）來架設和維護伺服器、資料庫、網路等環境。確保應用程式不會因為流量暴增或系統故障而崩潰，讓用戶隨時都能順暢使用。",
  },
  {
    name: "全端工程師",
    color: "#00897b",
    tagline: "一人獨立完成整個產品",
    content:
      "前端後端都會，甚至包括維運。小公司或新創常常需要全端工程師來一肩扛起整個產品的開發和維護。",
  },
  {
    name: "AI工程師",
    color: "#f57c00",
    tagline: "讓機器變聰明",
    content:
      "分成應用開發和模型訓練兩個方向。應用開發是直接用現成的 AI（如 ChatGPT）來做產品。模型訓練是拿現有的 AI 模型（如 Llama），餵它吃特定的資料，讓它變專業。",
  },
];
</script>

<style scoped>
/* 取消全域動畫對互動元素的影響 */
.skill-detail-panel {
  animation: none !important;
  opacity: 1 !important;
  transform: none !important;
}
</style>
