<template>
  <!-- Netflix Home -->
  <NetflixHome v-if="mode === 'home'" @play="enterPlayer" />

  <!-- Netflix Player -->
  <NetflixPlayer
    v-else-if="mode === 'player'"
    :slides="slides"
    :current="current"
    @exit="mode = 'home'"
    @prev="prev"
    @next="next"
    @seek="goTo"
  />
</template>

<script setup>
import { ref } from "vue";
import NetflixHome from "./components/NetflixHome.vue";
import NetflixPlayer from "./components/NetflixPlayer.vue";
import SlideOutline from "./components/SlideOutline.vue";
import SlideChapter1 from "./components/SlideChapter1.vue";
import Slide11 from "./components/Slide11.vue";
import Slide13 from "./components/Slide13.vue";
import Slide14 from "./components/Slide14.vue";
import SlideChapter2 from "./components/SlideChapter2.vue";
import Slide21 from "./components/Slide21.vue";
import Slide22 from "./components/Slide22.vue";
import Slide23 from "./components/Slide23.vue";
import SlideChapter3 from "./components/SlideChapter3.vue";
import Slide31 from "./components/Slide31.vue";
import SlideEnding from "./components/SlideEnding.vue";

const slides = [
  { component: SlideOutline, navLabel: "大綱" },
  { component: SlideChapter1, navLabel: "第一章" },
  { component: Slide11, navLabel: "1-1" },
  { component: Slide13, navLabel: "1-2" },
  { component: Slide14, navLabel: "1-3" },
  { component: SlideChapter2, navLabel: "第二章" },
  { component: Slide21, navLabel: "2-1" },
  { component: Slide22, navLabel: "2-2" },
  { component: Slide23, navLabel: "2-3" },
  { component: SlideChapter3, navLabel: "第三章" },
  { component: Slide31, navLabel: "3-1" },
  { component: SlideEnding, navLabel: "結尾" },
];

const mode = ref("home"); // 'home' | 'player'
const current = ref(0);

function enterPlayer() {
  current.value = 0;
  mode.value = "player";
}
function goTo(i) {
  current.value = Math.max(0, Math.min(slides.length - 1, i));
}
function next() {
  goTo(current.value + 1);
}
function prev() {
  goTo(current.value - 1);
}
</script>
