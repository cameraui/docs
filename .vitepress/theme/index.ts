import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { useRoute } from 'vitepress';
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom';
import './style.css';

// Extend the default theme and enable click-to-zoom on content images.
export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      mediumZoom('.vp-doc img:not(a img)', { background: 'var(--vp-c-bg)' });
    };
    onMounted(initZoom);
    watch(
      () => route.path,
      () => nextTick(initZoom),
    );
  },
} satisfies Theme;
