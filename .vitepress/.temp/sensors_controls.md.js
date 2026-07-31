import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Controls & states","description":"","frontmatter":{"title":"Controls & states"},"headers":[],"relativePath":"sensors/controls.md","filePath":"sensors/controls.md","lastUpdated":1785427198000}');
const _sfc_main = { name: "sensors/controls.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /sensors/controls.md for this page in Markdown format</div><h1 id="controls-states" tabindex="-1">Controls &amp; states <a class="header-anchor" href="#controls-states" aria-label="Permalink to &quot;Controls &amp; states&quot;">​</a></h1><p>Once a camera has <a href="/sensors/setup">sensors set up</a>, you can see their state and operate the ones that support it.</p><h2 id="where-sensors-appear" tabindex="-1">Where sensors appear <a class="header-anchor" href="#where-sensors-appear" aria-label="Permalink to &quot;Where sensors appear&quot;">​</a></h2><ul><li><strong>The camera&#39;s Overview</strong> (in the <a href="/cameras/settings">settings</a> drawer) lists every sensor assigned to the camera with its live state and, for controllable ones, the controls.</li><li><strong><a href="/cameras/shortcuts">Shortcuts</a></strong> let you place a sensor on the video to read its state on hover and operate it on click.</li><li><strong>The <a href="/sensors/setup#the-sensors-page">Sensors page</a></strong> lists every sensor in the system. Its edit dialog shows the same controls, including for sensors assigned to no camera.</li></ul><h2 id="read-only-sensors" tabindex="-1">Read-only sensors <a class="header-anchor" href="#read-only-sensors" aria-label="Permalink to &quot;Read-only sensors&quot;">​</a></h2><p>These show their current state but aren&#39;t operated:</p><ul><li><strong>Contact.</strong> Open or closed, for a door or window.</li><li><strong>Temperature</strong> and <strong>humidity.</strong> The current reading.</li><li><strong>Occupancy.</strong> Occupied or empty.</li><li><strong>Smoke</strong> and <strong>leak.</strong> Clear or triggered.</li><li><strong>Battery.</strong> Level and charging.</li></ul><h2 id="controllable-accessories" tabindex="-1">Controllable accessories <a class="header-anchor" href="#controllable-accessories" aria-label="Permalink to &quot;Controllable accessories&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/sensors/accessory-controls.png",
    alt: "Accessory controls in the camera overview"
  }, null, _parent));
  _push(`<p>These you can operate (admin only):</p><ul><li><strong>Light.</strong> On or off, and brightness where supported.</li><li><strong>Switch.</strong> On or off.</li><li><strong>Lock.</strong> Lock or unlock.</li><li><strong>Siren.</strong> On or off, and volume where supported.</li><li><strong>Garage.</strong> Open or close.</li><li><strong>Doorbell.</strong> Trigger a ring.</li><li><strong>Security system.</strong> Choose a mode: Off, Home, Away or Night. If the alarm goes off, the control shows an alarm banner and the modes stay locked while it&#39;s active.</li></ul><p>PTZ cameras have their own <a href="/sensors/ptz">controls and autotrack</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sensors/controls.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const controls = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  controls as default
};
