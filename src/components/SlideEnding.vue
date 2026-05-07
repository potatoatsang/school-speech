<template>
  <div class="slide ending-slide">
    <div class="ending-inner">
      <blockquote>
        <span class="big"
          >資工不是最輕鬆的路，<br />
          但絕對是回報最高的路之一。</span
        >
      </blockquote>
      <p class="small">
        Lin Ching / 林岱慶<br />朝陽科技大學 資訊工程系 — 2026<br />感謝聆聽
      </p>
    </div>
  </div>
</template>

<style scoped>
.ending-slide {
  background:
    radial-gradient(
      ellipse at 30% 40%,
      rgba(26, 115, 232, 0.25) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 75% 70%,
      rgba(79, 195, 247, 0.12) 0%,
      transparent 55%
    ),
    linear-gradient(160deg, #111827 0%, #0d1220 50%, #0a0e1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ending-inner {
  text-align: center;
  color: #fff;
}
.ending-inner > * {
  animation: slideInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.ending-inner > *:nth-child(1) {
  animation-delay: 0.15s;
}
.ending-inner > *:nth-child(2) {
  animation-delay: 0.45s;
}
blockquote {
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 2.2;
  border: none;
  margin: 0;
  color: #fff;
}
.big {
  font-size: 4rem;
}
.small {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 32px;
  line-height: 2;
}

@media (max-width: 768px) {
  .big {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }
  .small {
    font-size: 1.25rem;
  }
}
@media (max-width: 480px) {
  .big {
    font-size: clamp(1.625rem, 7vw, 2.5rem);
  }
  .small {
    font-size: 1.125rem;
    margin-top: 1.25rem;
  }
}
</style>
