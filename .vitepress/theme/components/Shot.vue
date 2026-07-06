<template>
  <figure class="shot">
    <div class="shot-win">
      <img
        v-if="src && !failed"
        ref="imgEl"
        :src="src"
        :alt="alt"
        class="shot-img"
        @error="failed = true"
      />
      <div
        v-else
        class="shot-pending"
        :style="{ aspectRatio: ratio }"
        role="img"
        :aria-label="
          alt ? alt + ' — screenshot coming soon' : 'Screenshot coming soon'
        "
      >
        <div class="shot-sheen"></div>
        <div class="shot-ph">
          <img class="shot-logo" src="/logo.svg" alt="" aria-hidden="true" />
          <span class="shot-label">Screenshot coming soon</span>
        </div>
      </div>
    </div>
  </figure>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = withDefaults(
  defineProps<{ src?: string; alt?: string; ratio?: string }>(),
  {
    alt: '',
    ratio: '16 / 9',
  },
);

const failed = ref(false);
const imgEl = ref<HTMLImageElement | null>(null);

onMounted(() => {
  const el = imgEl.value;
  if (el && el.complete && el.naturalWidth === 0) failed.value = true;
});
</script>

<style scoped>
.shot {
  margin: 22px 0;
}
.shot-win {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 14px 34px -10px rgba(0, 0, 0, 0.2);
}
.dark .shot-win {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.5),
    0 18px 44px -12px rgba(0, 0, 0, 0.55);
}
.shot-img {
  display: block;
  width: 100%;
  height: auto;
}
.shot-pending {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: var(--vp-c-bg-soft);
}
.shot-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    transparent 32%,
    var(--vp-c-bg) 50%,
    transparent 68%
  );
  opacity: 0.45;
  transform: translateX(-100%);
  animation: shot-sweep 3.6s ease-in-out infinite;
  will-change: transform;
}
.shot-ph {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.shot-logo {
  width: 52px;
  height: auto;
  opacity: 0.8;
}
.shot-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-3);
  letter-spacing: 0.01em;
}
@keyframes shot-sweep {
  0% {
    transform: translateX(-100%);
  }
  55%,
  100% {
    transform: translateX(100%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .shot-sheen {
    animation: none;
    opacity: 0.2;
    transform: none;
  }
}
</style>
