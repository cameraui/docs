import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"License plates","description":"","frontmatter":{"title":"License plates"},"headers":[],"relativePath":"detection/license-plates.md","filePath":"detection/license-plates.md","lastUpdated":1785045033000}');
const _sfc_main = { name: "detection/license-plates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection/license-plates.md for this page in Markdown format</div><h1 id="license-plates" tabindex="-1">License plates <a class="header-anchor" href="#license-plates" aria-label="Permalink to &quot;License plates&quot;">​</a></h1><p>License-plate recognition reads plate numbers from vehicles. It builds on <a href="/detection/ai-backends">object detection</a>: a vehicle is detected, then its plate is located and read by OCR. Enable an AI backend with license-plate support on the camera. If the camera detects objects itself without reporting where they are (many Reolink models), enable <a href="/detection/ai-backends#object-assist">Object Assist</a> so plates get a proper crop.</p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>In the backend&#39;s plugin settings, license plates use two models, a <strong>detector</strong> that finds the plate and an <strong>OCR model</strong> that reads the characters, plus a confidence threshold. camera.ui downloads them automatically.</p><p>Per camera, <a href="/cameras/settings">Settings → Detection</a> has two more options: <strong>Plate confidence</strong> (reads the OCR is less sure about than this are ignored, 0 to 1, default 0.9) and <strong>Min plate length</strong> (reads shorter than this are dropped as fragments, default 4 characters).</p><h2 id="where-plates-appear" tabindex="-1">Where plates appear <a class="header-anchor" href="#where-plates-appear" aria-label="Permalink to &quot;Where plates appear&quot;">​</a></h2><p>A read plate is attached to its vehicle as an <strong>attribute</strong>. You&#39;ll find it:</p><ul><li>On the event, alongside the vehicle.</li><li>In <a href="/recording/browsing">Recordings</a>, where you can filter by the <strong>License plate</strong> attribute or search for a specific plate.</li><li>In <a href="/notifications/">notifications</a> and <a href="/detection/genai-descriptions">AI descriptions</a>, for example &quot;Plate ABC-123&quot;.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/license-plates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const licensePlates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  licensePlates as default
};
