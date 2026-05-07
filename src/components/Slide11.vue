<template>
  <div class="slide content-slide">
    <div class="slide-chapter-tag">第一章 1-1</div>
    <h2 class="slide-title">台灣薪資分布解析</h2>
    <p class="slide-lead">
      下圖是台灣全體受僱員工的「總薪資分布曲線」，X
      軸是年薪，代表收入在全體的相對位置。
    </p>
    <div class="d9-img-wrap">
      <img
        src="/D9.png"
        alt="薪資分布圖 D1-D9"
        class="d9-img clickable-img"
        @click="lightboxOpen = true"
      />
      <div class="d9-caption">
        資料來源：行政院主計總處「受僱員工薪資中位數及分布統計」
      </div>
    </div>
    <ImageLightbox
      :src="lightboxOpen ? './D9.png' : null"
      alt="薪資分布圖 D1-D9"
      @close="lightboxOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageLightbox from "./ImageLightbox.vue";
const lightboxOpen = ref(false);
</script>

<style scoped>
.d9-img-wrap {
  text-align: center;
  margin-top: 16px;
}
.d9-img {
  max-width: 100%;
  max-height: 55vh;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
.d9-caption {
  font-size: 1.25rem;
  color: #999;
  margin-top: 6px;
}
.clickable-img {
  cursor: zoom-in;
  transition: opacity 0.15s;
}
.clickable-img:hover {
  opacity: 0.85;
}
</style>
