<template>
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div v-if="src" class="lightbox-overlay" @click.self="close">
        <button class="lightbox-close" @click="close" aria-label="關閉">
          ✕
        </button>
        <img :src="src" :alt="alt" class="lightbox-img" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: "" },
});
const emit = defineEmits(["close"]);

function close() {
  emit("close");
}

function onKeydown(e) {
  if (e.key === "Escape" && props.src) close();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox-img {
  max-width: 92vw;
  max-height: 92vh;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
}
.lightbox-close {
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
}
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
