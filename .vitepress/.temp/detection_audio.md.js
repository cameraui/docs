import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Audio detection","description":"","frontmatter":{"title":"Audio detection"},"headers":[],"relativePath":"detection/audio.md","filePath":"detection/audio.md","lastUpdated":1785045033000}');
const _sfc_main = { name: "detection/audio.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection/audio.md for this page in Markdown format</div><h1 id="audio-detection" tabindex="-1">Audio detection <a class="header-anchor" href="#audio-detection" aria-label="Permalink to &quot;Audio detection&quot;">​</a></h1><p>Audio detection listens to a camera&#39;s audio for specific sounds, such as glass breaking, an alarm, or a dog barking. It runs alongside video detection and can trigger events and notifications on its own. The camera needs to provide an audio stream.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>Enable the audio plugin for a camera in <a href="/cameras/settings">Settings → Plugins</a> (see <a href="/sensors/setup">Set up sensors</a>). In its settings:</p><ul><li><strong>Listen labels.</strong> Choose which sounds to detect.</li><li><strong>Confidence threshold.</strong> How sure it must be before reporting a sound (0.1 to 1).</li></ul><p>The sounds it can recognise include glass breaking, screaming, gunshots, alarms (smoke, car, siren), a doorbell, knocking, a dog bark, a cat, a baby crying, and speech.</p><h2 id="volume-gate-and-timeout" tabindex="-1">Volume gate and timeout <a class="header-anchor" href="#volume-gate-and-timeout" aria-label="Permalink to &quot;Volume gate and timeout&quot;">​</a></h2><p>Three more settings live on the camera itself, in <a href="/cameras/settings">Settings → Detection</a>:</p><ul><li><strong>Min. volume (dBFS).</strong> Audio frames below this level are skipped, so quiet background noise is never analysed. Ranges from -100 (silence) to 0 (maximum), default -40.</li><li><strong>Audio confidence.</strong> Recognised sounds the detector is less sure about than this don&#39;t count as events or trigger automations (0 to 1, default 0.7). It sits on top of the plugin&#39;s own threshold, so the plugin can stay sensitive while only confident sounds actually fire. Raise it if you get false glass-break or gunshot alarms.</li><li><strong>Audio timeout.</strong> How long an audio event stays active after the last trigger (minimum 10 seconds).</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/audio.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const audio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  audio as default
};
