<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第三章 3-3</div>
    <h2 class="slide-title">⚠️ 現實三：強者更強、弱者更弱</h2>
    <table>
      <thead><tr><th>類型</th><th>結果</th></tr></thead>
      <tbody>
        <tr><td>會用 AI 的工程師</td><td>一個人做三個人的事 → <strong>更值錢</strong></td></tr>
        <tr><td>不會用 AI 的工程師</td><td>被會用的人取代 → <strong>更難找工作</strong></td></tr>
      </tbody>
    </table>
    <div class="callout orange" style="margin-top:16px">
      差距不會縮小，<strong>只會被放大</strong>。
    </div>
    <div class="gap-visual">
      <div class="gap-side good">
        <div class="gap-icon">🚀</div>
        <div class="gap-label">會用 AI</div>
        <div class="gap-desc">效率 ×3<br>薪資 ↑<br>需求更高</div>
      </div>
      <div class="gap-middle">
        <div class="gap-arrow">⟷</div>
        <div class="gap-label-center">差距<br>持續放大</div>
      </div>
      <div class="gap-side bad">
        <div class="gap-icon">⚠️</div>
        <div class="gap-label">不會用 AI</div>
        <div class="gap-desc">效率不變<br>被動取代<br>競爭力下滑</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gap-visual {
  display: flex; align-items: center; gap: 0; margin-top: 24px;
  justify-content: center;
}
.gap-side {
  flex: 1; max-width: 220px; border-radius: 14px; padding: 20px 16px; text-align: center;
}
.gap-side.good { background: rgba(67,160,71,0.12); border: 2px solid #43a047; }
.gap-side.bad { background: rgba(251,140,0,0.12); border: 2px solid #fb8c00; }
.gap-icon { font-size: 32px; margin-bottom: 8px; }
.gap-label { font-weight: 700; font-size: 16px; margin-bottom: 8px; }
.gap-side.good .gap-label { color: #a5d6a7; }
.gap-side.bad .gap-label { color: #ffb74d; }
.gap-desc { font-size: 13px; line-height: 2; color: #94a3b8; }
.gap-middle { text-align: center; padding: 0 20px; }
.gap-arrow { font-size: 28px; color: #2a3a58; }
.gap-label-center { font-size: 13px; color: #64748b; margin-top: 6px; line-height: 1.6; }
</style>
