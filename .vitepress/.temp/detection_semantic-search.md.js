import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Semantic search","description":"","frontmatter":{"title":"Semantic search"},"headers":[],"relativePath":"detection/semantic-search.md","filePath":"detection/semantic-search.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "detection/semantic-search.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection/semantic-search.md for this page in Markdown format</div><h1 id="semantic-search" tabindex="-1">Semantic search <a class="header-anchor" href="#semantic-search" aria-label="Permalink to &quot;Semantic search&quot;">​</a></h1><p>Semantic search lets you find moments in your recordings by <strong>describing them in plain words</strong>, like &quot;person with a red jacket&quot; or &quot;delivery truck&quot;, instead of filtering by type. It is powered by CLIP.</p><h2 id="what-you-need" tabindex="-1">What you need <a class="header-anchor" href="#what-you-need" aria-label="Permalink to &quot;What you need&quot;">​</a></h2><p>Semantic search needs an AI backend that provides <strong>CLIP</strong> (CoreML, OpenVINO, or ONNX) enabled on your cameras. As those cameras record, camera.ui makes every person, vehicle and animal it detects searchable. Events without one of those, like plain motion, won&#39;t show up in the results.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><h2 id="searching" tabindex="-1">Searching <a class="header-anchor" href="#searching" aria-label="Permalink to &quot;Searching&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/ai-search.png",
    alt: "AI Search results in Recordings"
  }, null, _parent));
  _push(`<p>In <a href="/recording/browsing">Recordings</a>, open <strong>AI Search</strong> and describe what you&#39;re looking for. camera.ui ranks events by how well they match, and you can raise <strong>Min. Match Score</strong> to keep only close matches.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Semantic search builds on recording, which requires an active camera.ui subscription. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/semantic-search.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const semanticSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  semanticSearch as default
};
