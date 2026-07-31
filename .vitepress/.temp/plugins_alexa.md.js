import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alexa","description":"","frontmatter":{"title":"Alexa"},"headers":[],"relativePath":"plugins/alexa.md","filePath":"plugins/alexa.md","lastUpdated":1782477289000}');
const _sfc_main = { name: "plugins/alexa.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /plugins/alexa.md for this page in Markdown format</div><h1 id="alexa" tabindex="-1">Alexa <a class="header-anchor" href="#alexa" aria-label="Permalink to &quot;Alexa&quot;">​</a></h1><blockquote><p>🗓️ <strong>Planned.</strong> This integration isn&#39;t available yet.</p></blockquote><p>An Alexa integration would let you view your cameras on Echo Show devices and through the Alexa app. It&#39;s on the roadmap; this page will cover setup once it&#39;s available.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("plugins/alexa.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alexa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alexa as default
};
