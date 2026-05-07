<template>
  <div class="nfp-root">
    <!-- Main content area (current slide) -->
    <div class="nfp-screen">
      <div class="nfp-slide-panel">
        <component :is="slides[current].component" :key="current" v-bind="slides[current].props || {}" />
      </div>
      <div v-if="slides[current].isChapter" class="nfp-image-panel"></div>
    </div>

    <!-- Top bar (same visibility as bottom controls) -->
    <Transition name="nfp-fade">
      <div v-if="controlsVisible" class="nfp-top-bar" @mouseenter="onEnter" @mouseleave="onLeave">
        <button class="nfp-back-btn" @click="$emit('exit')">
          <svg viewBox="0 0 24 24" fill="white"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        </button>
        <div class="nfp-title-area">
          <div class="nfp-show-title">學校沒教的事：其實念資工系很好</div>
          <div class="nfp-ep-title">{{ slides[current].navLabel }} &nbsp;·&nbsp; 第 {{ current + 1 }} / {{ slides.length }} 頁</div>
        </div>
      </div>
    </Transition>

    <!-- Hover trigger zone + Bottom controls -->
    <div
      class="nfp-controls-zone"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
    >
      <Transition name="nfp-fade">
        <div v-if="controlsVisible" class="nfp-controls">
          <!-- Progress bar -->
          <div class="nfp-progress-wrap">
            <div
              class="nfp-progress-bar"
              @click="seekByClick"
            >
              <div class="nfp-progress-bg"></div>
              <div class="nfp-progress-fill" :style="{ width: progressPct + '%' }"></div>
              <div class="nfp-progress-thumb" :style="{ left: progressPct + '%' }"></div>
            </div>
            <div class="nfp-time-labels">
              <span>頁 {{ current + 1 }}</span>
              <span>共 {{ slides.length }} 頁</span>
            </div>
          </div>

          <!-- Buttons row -->
          <div class="nfp-btn-row">
            <div class="nfp-btn-left">
              <!-- Play/pause (decorative) -->
              <button class="nfp-ctrl-btn" title="播放/暫停">
                <svg viewBox="0 0 24 24" fill="white"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              </button>
              <!-- Rewind → Prev page -->
              <button class="nfp-ctrl-btn nfp-ctrl-btn--skip" :disabled="current === 0" @click="$emit('prev')" title="上一頁">
                <svg viewBox="0 0 24 24" fill="white"><path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>
                <span class="nfp-skip-label">上一頁</span>
              </button>
              <!-- Forward → Next page -->
              <button class="nfp-ctrl-btn nfp-ctrl-btn--skip" :disabled="current === slides.length - 1" @click="$emit('next')" title="下一頁">
                <svg viewBox="0 0 24 24" fill="white"><path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/></svg>
                <span class="nfp-skip-label">下一頁</span>
              </button>
              <!-- Volume (decorative) -->
              <button class="nfp-ctrl-btn" title="音量">
                <svg viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
              </button>
            </div>

            <div class="nfp-btn-right">
              <!-- Episodes (decorative) -->
              <button class="nfp-ctrl-btn" title="章節">
                <svg viewBox="0 0 24 24" fill="white"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>
              </button>
              <!-- Subtitles (decorative) -->
              <button class="nfp-ctrl-btn" title="字幕">
                <svg viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"/></svg>
              </button>
              <!-- Fullscreen (decorative) -->
              <button class="nfp-ctrl-btn" title="全螢幕">
                <svg viewBox="0 0 24 24" fill="white"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slides: { type: Array, required: true },
  current: { type: Number, required: true },
})
const emit = defineEmits(['exit', 'prev', 'next'])

const controlsVisible = ref(false)
let hideTimer = null

function onEnter() {
  clearTimeout(hideTimer)
  controlsVisible.value = true
}
function onLeave() {
  hideTimer = setTimeout(() => { controlsVisible.value = false }, 200)
}
const progressPct = computed(() =>
  props.slides.length <= 1 ? 0 : (props.current / (props.slides.length - 1)) * 100
)

function seekByClick(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const pct = (e.clientX - rect.left) / rect.width
  const target = Math.round(pct * (props.slides.length - 1))
  // emit a seek event that App.vue handles
  emit('seek', Math.max(0, Math.min(props.slides.length - 1, target)))
}

function onKey(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); emit('next') }
  else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); emit('prev') }
  else if (e.key === 'Escape') { emit('exit') }
}
onMounted(() => {
  window.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  clearTimeout(hideTimer)
})
</script>

<style scoped>
/* ==========================================
   Netflix Player — rem-based, RWD
   Scale anchored to same 1.6rem base as home
   ========================================== */

.nfp-root {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  cursor: none;
}
.nfp-root:hover { cursor: default; }

/* ---- Screen ---- */
.nfp-screen {
  flex: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
}

/* Left 2/3: slide content */
.nfp-slide-panel {
  flex: 2;
  overflow: hidden;
  position: relative;
}
.nfp-slide-panel > * {
  width: 100%;
  height: 100%;
}

/* Right 1/3: home.png */
.nfp-image-panel {
  flex: 1;
  background-image: url('/home.png');
  background-size: cover;
  background-position: center center;
  flex-shrink: 0;
}

/* ---- Top bar (always visible) ---- */
.nfp-top-bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 5rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0 2.5rem;
  z-index: 10;
  pointer-events: auto;
}

/* ---- Controls hover zone ---- */
/* Invisible sentinel zone at the bottom; hovering it reveals controls */
.nfp-controls-zone {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  /* tall enough to include controls + a bit above for easy targeting */
  height: 10rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.nfp-back-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  width: 2.75rem; height: 2.75rem;
  border-radius: 50%;
  flex-shrink: 0;
  transition: background 0.15s;
}
.nfp-back-btn:hover { background: rgba(255,255,255,0.15); }
.nfp-back-btn svg { width: 1.75rem; height: 1.75rem; }
.nfp-title-area { display: flex; flex-direction: column; gap: 0.125rem; }
.nfp-show-title { font-size: 1.125rem; font-weight: 700; color: #fff; }
.nfp-ep-title { font-size: 0.875rem; color: rgba(255,255,255,0.7); }

/* ---- Controls ---- */
.nfp-controls {
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%);
  padding: 0 2.5rem 1.75rem;
  width: 100%;
}

/* Progress bar */
.nfp-progress-wrap { margin-bottom: 0.5rem; }
.nfp-progress-bar {
  position: relative;
  height: 4px;
  cursor: pointer;
  margin-bottom: 0.375rem;
}
.nfp-progress-bar:hover .nfp-progress-fill { height: 6px; }
.nfp-progress-bar:hover .nfp-progress-thumb { opacity: 1; }
.nfp-progress-bg {
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
}
.nfp-progress-fill {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  background: #e50914;
  border-radius: 2px;
  transition: height 0.1s;
}
.nfp-progress-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.875rem; height: 0.875rem;
  background: #e50914;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.1s;
}
.nfp-time-labels {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
}

/* Buttons row */
.nfp-btn-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nfp-btn-left, .nfp-btn-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.nfp-ctrl-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  width: 2.75rem; height: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  border-radius: 4px;
  transition: background 0.15s;
  opacity: 0.9;
}
.nfp-ctrl-btn:hover { background: rgba(255,255,255,0.1); opacity: 1; }
.nfp-ctrl-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.nfp-ctrl-btn svg { width: 1.75rem; height: 1.75rem; }
.nfp-ctrl-btn--skip { width: 3.5rem; }
.nfp-skip-label {
  font-size: 0.625rem;
  color: rgba(255,255,255,0.85);
  font-family: inherit;
  white-space: nowrap;
}

/* ---- Transitions ---- */
.nfp-fade-enter-active, .nfp-fade-leave-active { transition: opacity 0.4s; }
.nfp-fade-enter-from, .nfp-fade-leave-to { opacity: 0; }

/* ==========================================
   RWD — 768px
   ========================================== */
@media (max-width: 768px) {
  .nfp-top-bar { padding: 0 1.25rem; gap: 0.75rem; height: 4rem; }
  .nfp-show-title { font-size: 0.95rem; }
  .nfp-ep-title { font-size: 0.75rem; }
  .nfp-back-btn { width: 2.25rem; height: 2.25rem; }
  .nfp-back-btn svg { width: 1.4rem; height: 1.4rem; }
  .nfp-controls { padding: 0 1.25rem 1.25rem; }
  .nfp-ctrl-btn { width: 2.25rem; height: 2.25rem; }
  .nfp-ctrl-btn svg { width: 1.4rem; height: 1.4rem; }
  .nfp-ctrl-btn--skip { width: 3rem; }
  .nfp-skip-label { font-size: 0.55rem; }
  .nfp-time-labels { font-size: 0.65rem; }
}

/* ==========================================
   RWD — 480px
   ========================================== */
@media (max-width: 480px) {
  .nfp-top-bar { padding: 0 0.75rem; }
  .nfp-show-title { font-size: 0.85rem; }
  .nfp-ep-title { font-size: 0.7rem; }
  .nfp-controls { padding: 0 0.75rem 1rem; }
  .nfp-ctrl-btn { width: 2rem; height: 2rem; }
  .nfp-ctrl-btn svg { width: 1.2rem; height: 1.2rem; }
  .nfp-ctrl-btn--skip { width: 2.75rem; }
  .nfp-btn-right { display: none; } /* hide decorative right controls on tiny screens */
}
</style>
