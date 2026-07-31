import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alexa","description":"","frontmatter":{"title":"Alexa"},"headers":[],"relativePath":"de/plugins/alexa.md","filePath":"de/plugins/alexa.md","lastUpdated":1782477289000}');
const _sfc_main = { name: "de/plugins/alexa.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/plugins/alexa.md for this page in Markdown format</div><h1 id="alexa" tabindex="-1">Alexa <a class="header-anchor" href="#alexa" aria-label="Permalink to &quot;Alexa&quot;">​</a></h1><blockquote><p>🗓️ <strong>Geplant.</strong> Diese Integration ist noch nicht verfügbar.</p></blockquote><p>Eine Alexa-Integration würde es erlauben, deine Kameras auf Echo-Show-Geräten und über die Alexa-App anzusehen. Sie steht auf der Roadmap; diese Seite beschreibt die Einrichtung, sobald sie verfügbar ist.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/plugins/alexa.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alexa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alexa as default
};
