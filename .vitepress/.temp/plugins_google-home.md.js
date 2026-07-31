import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Google Home","description":"","frontmatter":{"title":"Google Home"},"headers":[],"relativePath":"plugins/google-home.md","filePath":"plugins/google-home.md","lastUpdated":1782477289000}');
const _sfc_main = { name: "plugins/google-home.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /plugins/google-home.md for this page in Markdown format</div><h1 id="google-home" tabindex="-1">Google Home <a class="header-anchor" href="#google-home" aria-label="Permalink to &quot;Google Home&quot;">​</a></h1><blockquote><p>🗓️ <strong>Planned.</strong> This integration isn&#39;t available yet.</p></blockquote><p>A Google Home integration would let you add your cameras to the Google Home app and view them on Nest displays. It&#39;s on the roadmap; this page will cover setup once it&#39;s available.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("plugins/google-home.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const googleHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  googleHome as default
};
