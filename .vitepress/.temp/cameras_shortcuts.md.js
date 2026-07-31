import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shortcuts","description":"","frontmatter":{"title":"Shortcuts"},"headers":[],"relativePath":"cameras/shortcuts.md","filePath":"cameras/shortcuts.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "cameras/shortcuts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /cameras/shortcuts.md for this page in Markdown format</div><h1 id="shortcuts" tabindex="-1">Shortcuts <a class="header-anchor" href="#shortcuts" aria-label="Permalink to &quot;Shortcuts&quot;">​</a></h1><p>Shortcuts are controls you place directly on a camera&#39;s video. A shortcut points at another <strong>camera</strong> or a <strong>sensor</strong>, and what it does depends on whether you hover or click. Shortcuts are saved per camera and per user, so everyone can arrange their own.</p><h2 id="camera-shortcuts" tabindex="-1">Camera shortcuts <a class="header-anchor" href="#camera-shortcuts" aria-label="Permalink to &quot;Camera shortcuts&quot;">​</a></h2><p>A camera shortcut puts a neighbouring camera one move away:</p><ul><li><strong>Hover</strong> to preview that camera inline, without leaving the one you&#39;re watching. While reviewing a recording, the preview shows that camera at the same moment and follows along as you scrub.</li><li><strong>Click</strong> to switch to that camera. When you&#39;re reviewing the past, it opens at the same timestamp, so you can follow a person from one camera to the next without losing your place.</li></ul><p>For example, while reviewing footage a person walks out of camera A&#39;s view toward camera B. Hover B&#39;s shortcut to keep watching, or click it to jump to B at that exact moment.</p><h2 id="sensor-shortcuts" tabindex="-1">Sensor shortcuts <a class="header-anchor" href="#sensor-shortcuts" aria-label="Permalink to &quot;Sensor shortcuts&quot;">​</a></h2><p>A sensor shortcut puts an accessory on the video:</p><ul><li><strong>Hover</strong> to read its current state, such as a contact sensor&#39;s open or closed, a temperature, or a lock&#39;s status.</li><li><strong>Click</strong> to control it, for accessories that can be controlled: toggle a light or switch, lock or unlock, open a garage, sound a siren, ring a doorbell, or pick an arm state for a security system. Read-only sensors only show their state.</li></ul><p>Controlling accessories requires admin. See <a href="/sensors/">Sensors &amp; accessories</a> for what each type does.</p><h2 id="adding-and-editing-shortcuts" tabindex="-1">Adding and editing shortcuts <a class="header-anchor" href="#adding-and-editing-shortcuts" aria-label="Permalink to &quot;Adding and editing shortcuts&quot;">​</a></h2><ol><li>On the camera, open the options menu and select <strong>Edit Shortcuts</strong>. The <strong>Shortcuts</strong> button in the toolbar only shows or hides the shortcuts you already have.</li><li>Click anywhere on the video to drop a shortcut, then choose a <strong>Camera</strong> or a <strong>Sensor</strong> as its target.</li><li>Drag a shortcut to reposition it. Positions are stored relative to the frame, so they stay put when the video resizes.</li><li>Long-press a shortcut to remove it.</li><li>Select <strong>Finish Editing</strong> when you&#39;re done.</li></ol>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/cameras/shortcuts-overlay.png",
    alt: "Shortcuts overlay on a camera"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cameras/shortcuts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shortcuts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shortcuts as default
};
