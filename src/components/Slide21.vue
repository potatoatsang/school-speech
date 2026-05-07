<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第二章 2-1</div>
    <h2 class="slide-title">選修怎麼選</h2>
    <p class="slide-lead">
      不論是必修還是選修，只是為了讓你站上起跑線而已，剩下的還是要靠自己。
    </p>
    <div class="img-wrap">
      <img
        src="/114-1.png"
        alt="資電工程組"
        class="img clickable-img"
        @click="lightboxSrc = './114-1.png'"
      />
      <img
        src="/114-2.png"
        alt="人工智慧工組"
        class="img clickable-img"
        @click="lightboxSrc = './114-2.png'"
      />
    </div>
    <div class="caption">資料來源：朝陽科技大學資訊工程系「課程規劃」</div>
    <div class="callout orange">
      盡量選擇相同領域的課程。</br>
      亂選也是一種選擇
    </div>
    <ImageLightbox :src="lightboxSrc" @close="lightboxSrc = null" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageLightbox from "./ImageLightbox.vue";
const lightboxSrc = ref(null);
</script>

<style scoped>
.img-wrap {
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: flex-start;
}
.img {
  flex: 1;
  min-width: 0;
  max-height: 50vh;
  width: 100%;
  object-fit: contain;
}
.clickable-img {
  cursor: zoom-in;
  transition: opacity 0.15s;
}
.clickable-img:hover {
  opacity: 0.85;
}

@media (max-width: 640px) {
  .img-wrap {
    flex-direction: column;
  }
  .img {
    max-height: 32vh;
    width: 100%;
  }
}
</style>
