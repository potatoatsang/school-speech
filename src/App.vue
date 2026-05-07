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
import { ref, onMounted, onUnmounted } from 'vue'
import NetflixHome from './components/NetflixHome.vue'
import NetflixPlayer from './components/NetflixPlayer.vue'
import SlideOutline from './components/SlideOutline.vue'
import Slide11 from './components/Slide11.vue'
import Slide12 from './components/Slide12.vue'
import Slide13 from './components/Slide13.vue'
import Slide14 from './components/Slide14.vue'
import Slide21 from './components/Slide21.vue'
import Slide22 from './components/Slide22.vue'
import Slide31 from './components/Slide31.vue'
import Slide32 from './components/Slide32.vue'
import Slide33 from './components/Slide33.vue'
import Slide34 from './components/Slide34.vue'
import SlideEnding from './components/SlideEnding.vue'

const slides = [
  { component: SlideOutline, navLabel: '大綱' },
  { component: Slide11, navLabel: '1-1', isChapter: true },
  { component: Slide12, navLabel: '1-2', isChapter: true },
  { component: Slide13, navLabel: '1-3', isChapter: true },
  { component: Slide14, navLabel: '1-4', isChapter: true },
  { component: Slide21, navLabel: '2-1', isChapter: true },
  { component: Slide22, navLabel: '2-2', isChapter: true },
  { component: Slide31, navLabel: '3-1', isChapter: true },
  { component: Slide32, navLabel: '3-2', isChapter: true },
  { component: Slide33, navLabel: '3-3', isChapter: true },
  { component: Slide34, navLabel: '3-4', isChapter: true },
  { component: SlideEnding, navLabel: '結尾' },
]

const mode = ref('home') // 'home' | 'player'
const current = ref(0)

function enterPlayer() {
  current.value = 0
  mode.value = 'player'
}
function goTo(i) {
  current.value = Math.max(0, Math.min(slides.length - 1, i))
}
function next() { goTo(current.value + 1) }
function prev() { goTo(current.value - 1) }
</script>
