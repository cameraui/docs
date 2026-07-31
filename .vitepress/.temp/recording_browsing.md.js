import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Browsing & filters","description":"","frontmatter":{"title":"Browsing & filters"},"headers":[],"relativePath":"recording/browsing.md","filePath":"recording/browsing.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "recording/browsing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /recording/browsing.md for this page in Markdown format</div><h1 id="browsing-filters" tabindex="-1">Browsing &amp; filters <a class="header-anchor" href="#browsing-filters" aria-label="Permalink to &quot;Browsing &amp; filters&quot;">​</a></h1><p>The <strong>Recordings</strong> view is where you find past events across your cameras. Each event shows a thumbnail and what was detected, newest first.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/recordings-view.png",
    alt: "Recordings view with events and filters"
  }, null, _parent));
  _push(`<h2 id="filtering" tabindex="-1">Filtering <a class="header-anchor" href="#filtering" aria-label="Permalink to &quot;Filtering&quot;">​</a></h2><p>Narrow the list to exactly what you&#39;re after:</p><ul><li><strong>Camera and time range.</strong></li><li><strong>Only with recording.</strong> On by default. Turn it off to also see events where a trigger fired but nothing was recorded. Those events can&#39;t be downloaded or previewed.</li><li><strong>Labels.</strong> Person, vehicle, animal, package, or other.</li><li><strong>Trigger.</strong> Motion, a doorbell, a sensor, or an audio alarm.</li><li><strong>Attributes.</strong> Events that contain a face or a license plate.</li><li><strong>Confidence.</strong> Hide low-confidence detections.</li><li><strong>Grid search.</strong> With a single camera selected, draw a region on its snapshot to only show events detected inside that part of the frame.</li></ul><p>You can also search by text across detected labels, faces, and plates.</p><h2 id="ai-search" tabindex="-1">AI search <a class="header-anchor" href="#ai-search" aria-label="Permalink to &quot;AI search&quot;">​</a></h2><p>To find moments by describing them, like &quot;a person carrying a package&quot;, use <strong>AI Search</strong>. See <a href="/detection/semantic-search">Semantic search</a>.</p><h2 id="heatmap" tabindex="-1">Heatmap <a class="header-anchor" href="#heatmap" aria-label="Permalink to &quot;Heatmap&quot;">​</a></h2><p>A <strong>heatmap</strong> shows where activity was concentrated over a period. See <a href="/detection/ai-backends">Object detection</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("recording/browsing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const browsing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  browsing as default
};
