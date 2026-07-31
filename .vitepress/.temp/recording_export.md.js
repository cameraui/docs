import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Export & download","description":"","frontmatter":{"title":"Export & download"},"headers":[],"relativePath":"recording/export.md","filePath":"recording/export.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "recording/export.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /recording/export.md for this page in Markdown format</div><h1 id="export-download" tabindex="-1">Export &amp; download <a class="header-anchor" href="#export-download" aria-label="Permalink to &quot;Export &amp; download&quot;">​</a></h1><p>You can save recordings as files to keep or share, either a single clip or a batch across cameras and days.</p><h2 id="export-a-clip" tabindex="-1">Export a clip <a class="header-anchor" href="#export-a-clip" aria-label="Permalink to &quot;Export a clip&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/export-trim.png",
    alt: "Trimming a clip on the timeline"
  }, null, _parent));
  _push(`<p>On the <a href="/recording/timeline-playback">timeline</a>, drag the trim handles to select the start and end of the part you want, then export. camera.ui produces an <strong>MP4</strong> file and gives you a download.</p><h2 id="export-multiple-recordings" tabindex="-1">Export multiple recordings <a class="header-anchor" href="#export-multiple-recordings" aria-label="Permalink to &quot;Export multiple recordings&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/export-recordings.png",
    alt: "The Export recordings dialog"
  }, null, _parent));
  _push(`<p>In the Recordings view, the download button opens an <strong>Export recordings</strong> dialog for exporting more than one clip at once. Choose one or more cameras, a time range spanning multiple days, a quality (Best quality or Smallest files), and optionally a timelapse interval. camera.ui produces one MP4 file per camera per day (the first and last day cover the selected time range, the days in between are exported in full) and estimates the total size before you export. If the export produces more than one file, they come as a single ZIP. A single file downloads as a plain MP4.</p><h2 id="timelapse" tabindex="-1">Timelapse <a class="header-anchor" href="#timelapse" aria-label="Permalink to &quot;Timelapse&quot;">​</a></h2><p>Either export flow can produce a <strong>timelapse</strong> instead of a normal clip, which compresses a long period into a short clip by sampling frames at an interval. Good for reviewing a whole day quickly.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("recording/export.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _export = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _export as default
};
