<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第一章 1-4</div>
    <h2 class="slide-title">🌳 資工系畢業，可以走哪些路？</h2>

    <div class="skill-tree">
      <span class="root">資工系畢業</span>
      <div class="connector"></div>
      <div class="branches">
        <div
          v-for="(r, i) in routes" :key="i"
          class="branch"
          :class="{ highlight: selectedRoute === i }"
          @click="selectRoute(i)"
          role="button" :aria-pressed="selectedRoute === i"
        >
          {{ r.icon }} {{ r.name }}
        </div>
      </div>
    </div>

    <Transition name="skill-fade">
      <div v-if="selectedRoute !== null" class="skill-detail-panel">
        <div class="sdp-header" :style="{ borderLeftColor: routes[selectedRoute].color }">
          <span class="sdp-icon">{{ routes[selectedRoute].icon }}</span>
          <div>
            <div class="sdp-title">{{ routes[selectedRoute].name }}</div>
            <div class="sdp-tagline">{{ routes[selectedRoute].tagline }}</div>
          </div>
          <button class="sdp-close" @click="selectedRoute = null" aria-label="關閉">✕</button>
        </div>
        <div class="sdp-body">
          <div class="sdp-col">
            <div class="sdp-col-title">📌 必學技能</div>
            <ul><li v-for="(sk, j) in routes[selectedRoute].must" :key="j">{{ sk }}</li></ul>
          </div>
          <div class="sdp-col">
            <div class="sdp-col-title">⭐ 加分技能</div>
            <ul><li v-for="(sk, j) in routes[selectedRoute].bonus" :key="j">{{ sk }}</li></ul>
          </div>
          <div class="sdp-col sdp-col-full">
            <div class="sdp-col-title">📁 作品建議</div>
            <p>{{ routes[selectedRoute].project }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <div v-if="selectedRoute === null" class="callout green" style="margin-top:12px">
      👆 點選上方任一路線，查看必學技能與作品建議。
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedRoute = ref(null)
function selectRoute(i) { selectedRoute.value = selectedRoute.value === i ? null : i }
const routes = [
  { name: '前端工程師', icon: '🖥️', color: '#1a73e8', tagline: '打造用戶第一眼看到的畫面',
    must: ['HTML / CSS / JavaScript', 'Vue 或 React（擇一深入）', 'Git 版本控制', 'RWD 響應式設計'],
    bonus: ['TypeScript', 'UI/UX 設計概念', 'WebPack / Vite', 'Storybook'],
    project: '做一個響應式個人作品集網站，部署到 GitHub Pages 或 Vercel，展示 3 個以上實作案例。' },
  { name: '後端工程師', icon: '⚙️', color: '#6200ea', tagline: '驅動應用的核心邏輯與資料',
    must: ['Java / Python / Node.js（擇一）', 'SQL（MySQL / PostgreSQL）', 'RESTful API 設計', 'Linux 基礎'],
    bonus: ['Docker 容器化', 'Redis 快取', '系統設計（CAP、負載均衡）', 'Spring Boot 或 FastAPI'],
    project: '做一個具備登入、資料庫 CRUD、JWT 驗證的完整 API 服務，並撰寫 README。' },
  { name: '全端工程師', icon: '🔗', color: '#00897b', tagline: '一人獨立完成整個產品',
    must: ['前端核心（Vue / React）', '後端核心（Node.js / FastAPI）', '資料庫設計', 'Git + GitHub 協作'],
    bonus: ['CI/CD（GitHub Actions）', '雲端部署（Vercel + Railway）', 'Docker Compose', 'Monorepo'],
    project: '獨立完成一個具備前後端的全端應用，部署到公開 URL。' },
  { name: 'App 行動開發', icon: '📱', color: '#e53935', tagline: '讓產品活在每個人的口袋裡',
    must: ['Dart + Flutter 或 React Native', 'Mobile UI 元件設計', 'API 串接（RESTful）', 'Git'],
    bonus: ['原生開發（Swift / Kotlin）', 'Firebase / Supabase', '推播通知', 'Play Store 上架流程'],
    project: '完成並上架一個功能完整的 App 至 Google Play，展示安裝連結或截圖。' },
  { name: 'AI / 資料', icon: '🤖', color: '#f57c00', tagline: '讓機器學習讓數據說話',
    must: ['Python（NumPy / Pandas）', '線性代數 / 機率統計', '機器學習基礎（sklearn）', 'Jupyter Notebook'],
    bonus: ['PyTorch 深度學習', 'Kaggle 競賽', 'LangChain / LLM 應用', 'SQL + BigQuery'],
    project: '完成一個有問題定義、資料清理、建模、評估流程的 AI 專案，並寫 Notebook 報告。' },
]
</script>
