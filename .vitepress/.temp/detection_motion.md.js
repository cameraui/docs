import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Motion detection","description":"","frontmatter":{"title":"Motion detection"},"headers":[],"relativePath":"detection/motion.md","filePath":"detection/motion.md","lastUpdated":1783356206000}');
const _sfc_main = { name: "detection/motion.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection/motion.md for this page in Markdown format</div><h1 id="motion-detection" tabindex="-1">Motion detection <a class="header-anchor" href="#motion-detection" aria-label="Permalink to &quot;Motion detection&quot;">​</a></h1><p>Motion is the first and cheapest layer of <a href="/detection/">detection</a>. It watches for change in the frame and, when it sees movement, wakes the heavier AI. On its own it can also trigger recordings and notifications.</p><h2 id="choosing-a-motion-engine" tabindex="-1">Choosing a motion engine <a class="header-anchor" href="#choosing-a-motion-engine" aria-label="Permalink to &quot;Choosing a motion engine&quot;">​</a></h2><p>camera.ui offers several motion plugins, so you can match CPU use to your hardware. Enable one for a camera in its <a href="/cameras/settings">settings</a> under the Plugins tab (see <a href="/sensors/setup">Set up sensors</a>):</p><ul><li><strong>Rust Motion.</strong> Fast and efficient; a good default for most setups.</li><li><strong>OpenCV.</strong> Several algorithms with fine-grained tuning.</li><li><strong>OpenCL.</strong> GPU-accelerated, for very low CPU use.</li><li><strong>WASM Motion.</strong> Cross-platform WebAssembly.</li><li><strong>Pam Diff.</strong> Lightweight pixel-difference.</li><li><strong>SMTP.</strong> For cameras that send motion alerts by email instead of analysing the video.</li></ul><h2 id="tuning-sensitivity" tabindex="-1">Tuning sensitivity <a class="header-anchor" href="#tuning-sensitivity" aria-label="Permalink to &quot;Tuning sensitivity&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/detection-settings.png",
    alt: "Per-camera detection settings"
  }, null, _parent));
  _push(`<p>Each engine exposes its own settings (such as area, threshold, and blur) in its plugin settings, with a reset to defaults. Two settings live on the camera itself, in <a href="/cameras/settings">Settings → Detection</a>:</p><ul><li><strong>Motion resolution.</strong> Low is fastest, medium is balanced, high is most accurate.</li><li><strong>Motion timeout.</strong> How long motion stays &quot;active&quot; after movement stops (minimum 10 seconds).</li></ul><p>If a camera is too sensitive (a busy road, a swaying tree), limit where motion counts with <a href="/cameras/zones-and-masks">zones</a>.</p><h2 id="the-cascade" tabindex="-1">The cascade <a class="header-anchor" href="#the-cascade" aria-label="Permalink to &quot;The cascade&quot;">​</a></h2><p>When motion fires, it triggers the heavier detectors (object, face, and so on). You can also let other sensors start this cascade, for example a door contact sensor triggering object detection, under <strong>Sensor triggers</strong> in the camera&#39;s detection settings.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/motion.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const motion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  motion as default
};
