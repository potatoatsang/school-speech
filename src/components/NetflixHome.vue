<template>
  <div class="nf-home">
    <!-- Top navbar -->
    <header class="nf-header">
      <div class="nf-logo">N</div>
      <nav class="nf-nav-links">
        <span>首頁</span>
        <span>節目</span>
        <span>電影</span>
        <span>遊戲</span>
        <span>我的口袋名單</span>
      </nav>
      <div class="nf-header-right">
        <!-- <svg class="nf-icon" viewBox="0 0 24 24" fill="white">
          <path
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg> -->
        <div class="nf-avatar">C</div>
      </div>
    </header>

    <!-- Hero banner -->
    <section class="nf-hero">
      <div class="nf-hero-bg">
        <div class="nf-hero-overlay"></div>
      </div>
      <div class="nf-hero-content">
        <div class="nf-hero-tag">獨家</div>
        <h1 class="nf-hero-title">學校沒教的事：其實念資工系很好</h1>
        <p class="nf-hero-desc">
          為什麼你已經贏在起跑點了，未來有什麼工作可以做，你現在可以怎麼做，以及
          AI 出現後，現在學的東西以後還有用嗎？
        </p>
        <div class="nf-hero-btns">
          <button class="nf-btn-play" @click="goPlayer()">
            <svg viewBox="0 0 24 24" fill="black">
              <path d="M8 5v14l11-7z" />
            </svg>
            播放
          </button>
          <!-- <button class="nf-btn-info">
            <svg viewBox="0 0 24 24" fill="white">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
              />
            </svg>
            詳細資訊
          </button> -->
        </div>
      </div>
    </section>

    <!-- My List row -->
    <section class="nf-row">
      <h2 class="nf-row-title">我的口袋名單</h2>
      <div class="nf-row-track">
        <!-- Single card -->
        <div
          class="nf-card"
          :class="{ 'nf-card--hovered': hovered }"
          @mouseenter="hovered = true"
          @mouseleave="hovered = false"
        >
          <!-- Base thumbnail -->
          <div class="nf-card-thumb">
            <div class="nf-card-thumb-bg"></div>
            <!-- 最新上線 badge — bottom center -->
            <div class="nf-card-new-badge">
              <span class="nf-card-new-label">最新上線</span>
            </div>
          </div>
          <!-- Expanded hover panel: grows from bottom-left, 2.5x scale, overlays the thumbnail -->
          <div class="nf-card-expanded">
            <div class="nf-card-hover-screen"></div>
            <div class="nf-preview-body">
              <div class="nf-preview-actions">
                <button
                  class="nf-preview-btn nf-preview-btn--play"
                  @click="goPlayer()"
                >
                  <svg viewBox="0 0 24 24" fill="black">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <!-- <button class="nf-preview-btn">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </button>
                <button class="nf-preview-btn">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M1 12l20-9-4 9 4 9z" />
                  </svg>
                </button>
                <button class="nf-preview-btn nf-preview-btn--down">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  </svg>
                </button> -->
              </div>
              <div class="nf-preview-meta">
                <span class="nf-preview-match">98% 符合</span>
                <span class="nf-preview-badge">12+</span>
                <span class="nf-preview-ep">12 張投影片</span>
              </div>
              <div class="nf-preview-tags">
                <span>薪資</span><span class="nf-dot">•</span>
                <span>職涯發展</span><span class="nf-dot">•</span>
                <span>AI 時代</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const hovered = ref(false);

function goPlayer() {
  router.push("/player");
}
</script>

<style scoped>
/* ==========================================
   Netflix Home — rem-based, RWD
   Anchor: .nf-btn-play font-size = 1.6rem
   Scale reference at 16px root:
     1.6rem = 25.6px  (button)
     2.8rem = 44.8px  (logo)
     clamp(1.8rem,3vw+0.4rem,3.2rem) (hero title)
   ========================================== */

.nf-home {
  background: #141414;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem; /* base */
  overflow: hidden;
}

/* ---- Header ---- */
.nf-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.25rem;
  display: flex;
  align-items: center;
  padding: 0 3.75rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  z-index: 100;
  transition: background 0.3s;
  gap: 2rem;
}
.nf-logo {
  color: #e50914;
  font-size: 2.8rem;
  font-weight: 900;
  letter-spacing: -0.1em;
  line-height: 1;
  flex-shrink: 0;
}
.nf-nav-links {
  display: flex;
  gap: 1.25rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
}
.nf-nav-links span {
  cursor: pointer;
  transition: color 0.15s;
}
.nf-nav-links span:hover {
  color: #fff;
}
.nf-header-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1.125rem;
  flex-shrink: 0;
}
.nf-icon {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}
.nf-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  background: #e50914;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
}

/* ---- Hero ---- */
.nf-hero {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5rem;
}
.nf-hero-bg {
  position: absolute;
  inset: 0;
  background-image: url("/home.png");
  background-size: cover;
  background-position: center center;
}
.nf-hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to right,
      rgba(20, 20, 20, 0.9) 0%,
      rgba(20, 20, 20, 0.4) 50%,
      rgba(20, 20, 20, 0) 100%
    ),
    linear-gradient(to top, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0) 30%);
}
.nf-hero-content {
  position: relative;
  padding-left: 3.75rem;
  max-width: 37.5rem;
}
.nf-hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  color: #e50914;
  margin-bottom: 0.875rem;
}
.nf-hero-tag::before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 1.4rem;
  background: #e50914;
  border-radius: 2px;
}
.nf-hero-title {
  font-size: clamp(1.8rem, 3vw + 0.4rem, 3.2rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.125rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}
.nf-hero-desc {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.75rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}
.nf-hero-btns {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* ▶ Play button — ANCHOR: 1.6rem */
.nf-btn-play,
.nf-btn-info {
  display: flex;
  align-items: center;
  gap: 0.45em; /* em → scales with font-size */
  padding: 0.38em 1.1em;
  border-radius: 0.25rem;
  border: none;
  font-size: 1.6rem; /* ← ANCHOR */
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition:
    opacity 0.15s,
    background 0.15s;
}
.nf-btn-play svg,
.nf-btn-info svg {
  width: 1.35em;
  height: 1.35em; /* em → tracks button font */
  flex-shrink: 0;
}
.nf-btn-play {
  background: #fff;
  color: #000;
}
.nf-btn-play:hover {
  background: rgba(255, 255, 255, 0.75);
}
.nf-btn-info {
  background: rgba(109, 109, 110, 0.7);
  color: #fff;
}
.nf-btn-info:hover {
  background: rgba(109, 109, 110, 0.4);
}

/* ---- Row ---- */
.nf-row {
  padding: 0 3.75rem 2rem;
  flex-shrink: 0;
  position: relative;
  z-index: 20;
}
.nf-row-title {
  font-size: 1.4vw;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #e5e5e5;
}
.nf-row-track {
  display: flex;
  gap: 0.5rem;
  position: relative;
  isolation: isolate;
}

/* ---- Card ---- */
.nf-card {
  position: relative;
  width: 13.75rem;
  height: 7.75rem;
  flex-shrink: 0;
  cursor: pointer;
  z-index: 1;
  /* card itself does NOT scale — expanded overlay handles the growth */
}
.nf-card--hovered {
  z-index: 999;
}

/* Base thumbnail */
.nf-card-thumb {
  position: absolute;
  inset: 0;
  border-radius: 6px;
  overflow: hidden;
  background: #141414;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
}
.nf-card-thumb-bg {
  position: absolute;
  inset: 0;
  background-image: url("/home.png");
  background-size: cover;
  background-position: center top;
}

/* 最新上線 badge — bottom center (Netflix style) */
.nf-card-new-badge {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 2;
}
.nf-card-new-label {
  background: #e50914;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  padding: 0.45em 0.85em;
  border-radius: 2px;
  text-transform: uppercase;
  line-height: 1;
}

/* Expanded hover panel:
   - same width as card, positioned at bottom-left
   - scale(0→2.5) from transform-origin bottom left
   - original thumbnail remains fully visible underneath */
.nf-card-expanded {
  position: absolute;
  bottom: -5px;
  left: -5px;
  width: 13.75rem;
  background: #181818;
  border-radius: 6px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.9);
  overflow: hidden;
  transform-origin: bottom left;
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  z-index: 200;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
  will-change: transform, opacity;
}
.nf-card--hovered .nf-card-expanded {
  transform: scale(2.5);
  opacity: 1;
  pointer-events: auto;
}

/* Top screen area — uses same home.png so hover feels continuous */
.nf-card-hover-screen {
  width: 100%;
  height: 7.75rem;
  background-image: url("/home.png");
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nf-preview-art {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.nf-preview-icon {
  font-size: 2rem;
}
.nf-preview-title {
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
}
.nf-preview-body {
  padding: 0.6rem 0.75rem 0.875rem;
  background: #181818;
}
.nf-preview-actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
}
.nf-preview-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.15s;
}
.nf-preview-btn svg {
  width: 1rem;
  height: 1rem;
}
.nf-preview-btn:hover {
  border-color: #fff;
}
.nf-preview-btn--play {
  background: #fff;
  border-color: #fff;
  width: 2.25rem;
  height: 2.25rem;
}
.nf-preview-btn--play svg {
  width: 1.2rem;
  height: 1.2rem;
}
.nf-preview-btn--down {
  margin-left: auto;
}
.nf-preview-meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.3rem;
  font-size: 0.72rem;
}
.nf-preview-match {
  color: #46d369;
  font-weight: 700;
}
.nf-preview-badge {
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1px 0.3rem;
  font-size: 0.65rem;
  border-radius: 2px;
}
.nf-preview-ep {
  color: rgba(255, 255, 255, 0.7);
}
.nf-preview-tags {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}
.nf-dot {
  opacity: 0.5;
}

/* ==========================================
   RWD — 1024px (tablet)
   ========================================== */
@media (max-width: 1024px) {
  .nf-header {
    padding: 0 2.5rem;
    gap: 1.5rem;
  }
  .nf-hero-content {
    padding-left: 2.5rem;
    max-width: 30rem;
  }
  .nf-row {
    padding: 0 2.5rem 2.5rem;
  }
  .nf-hero-title {
    font-size: clamp(1.6rem, 3.5vw, 2.6rem);
  }
  .nf-btn-play,
  .nf-btn-info {
    font-size: 1.3rem;
  }
  .nf-logo {
    font-size: 2.4rem;
  }
}

/* ==========================================
   RWD — 768px (mobile-landscape / large phone)
   ========================================== */
@media (max-width: 768px) {
  .nf-header {
    padding: 0 1.25rem;
    gap: 1rem;
    height: 3.5rem;
  }
  .nf-logo {
    font-size: 2rem;
  }
  .nf-nav-links {
    display: none;
  } /* collapse nav on small screens */
  .nf-icon {
    width: 1.1rem;
    height: 1.1rem;
  }

  .nf-hero {
    padding-bottom: 3rem;
    align-items: flex-end;
  }
  .nf-hero-content {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    max-width: 100%;
  }
  .nf-hero-title {
    font-size: clamp(1.4rem, 5vw, 2rem);
  }
  .nf-hero-desc {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
  }
  .nf-btn-play,
  .nf-btn-info {
    font-size: 1.1rem;
    padding: 0.4em 1em;
  }

  .nf-row {
    padding: 0 1.25rem 1.5rem;
  }
  .nf-row-title {
    font-size: 2.5vw;
  }
  .nf-card {
    width: 11rem;
    height: 6.2rem;
  }
  .nf-card-hover-screen {
    height: 6.2rem;
  }
}

/* ==========================================
   RWD — 480px (mobile-portrait)
   ========================================== */
@media (max-width: 480px) {
  .nf-logo {
    font-size: 1.75rem;
  }
  .nf-avatar {
    width: 1.75rem;
    height: 1.75rem;
    font-size: 0.65rem;
  }

  .nf-hero {
    padding-bottom: 2rem;
  }
  .nf-hero-title {
    font-size: clamp(1.2rem, 6vw, 1.6rem);
  }
  .nf-hero-desc {
    display: none;
  } /* hide on very small screens */
  .nf-hero-btns {
    gap: 0.5rem;
  }
  .nf-btn-play,
  .nf-btn-info {
    font-size: 0.95rem;
  }
  .nf-btn-info {
    display: none;
  } /* only play button on tiny screens */

  .nf-row-title {
    font-size: 3.5vw;
  }
  .nf-card {
    width: 9rem;
    height: 5.05rem;
  }
  .nf-card-hover-screen {
    height: 5.05rem;
  }
  .nf-preview-icon {
    font-size: 1.6rem;
  }
}
</style>
