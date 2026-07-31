import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Timeline & playback","description":"","frontmatter":{"title":"Timeline & playback"},"headers":[],"relativePath":"recording/timeline-playback.md","filePath":"recording/timeline-playback.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "recording/timeline-playback.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /recording/timeline-playback.md for this page in Markdown format</div><h1 id="timeline-playback" tabindex="-1">Timeline &amp; playback <a class="header-anchor" href="#timeline-playback" aria-label="Permalink to &quot;Timeline &amp; playback&quot;">​</a></h1><p>Open a camera and use its <strong>timeline</strong> to scrub through recorded footage. Drag along the timeline to move through time; marks show where events happened.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/timeline.png",
    alt: "Recording timeline and scrubber"
  }, null, _parent));
  _push(`<h2 id="reviewing-footage" tabindex="-1">Reviewing footage <a class="header-anchor" href="#reviewing-footage" aria-label="Permalink to &quot;Reviewing footage&quot;">​</a></h2><ul><li><strong>Scrub</strong> smoothly along the timeline. camera.ui uses the low-resolution stream for scrubbing, so it stays fast.</li><li><strong>Play and pause</strong>, skip 30 seconds back or forward, and change the <strong>speed</strong> between 0.25x and 8x.</li><li><strong>See what happened</strong> at a glance. Event marks on the timeline show a thumbnail. Click one to jump to that moment.</li><li><strong>Zoom</strong> the timeline in and out, from a broad overview down to seconds-level detail. At the deepest zoom level scrubbing becomes frame-accurate and the timeline shows a <strong>Fine Scrubbing</strong> badge.</li><li><strong>Jump to a day</strong> with the calendar, which highlights the days that have footage.</li></ul><h2 id="timeline-or-detections" tabindex="-1">Timeline or detections <a class="header-anchor" href="#timeline-or-detections" aria-label="Permalink to &quot;Timeline or detections&quot;">​</a></h2><p>On the camera page the panel has two views you can switch between. <strong>Timeline</strong> is the scale you scrub. <strong>Detections</strong> replaces it with a list of what was detected: day, time, duration, a preview image and icons for the detected types. Click an entry to jump straight to it.</p><h2 id="several-cameras-at-once" tabindex="-1">Several cameras at once <a class="header-anchor" href="#several-cameras-at-once" aria-label="Permalink to &quot;Several cameras at once&quot;">​</a></h2><p>In <a href="/cameras/camview">Camview</a>, the timeline scrubs <strong>all cameras in the layout together</strong>, keeping them in sync. This is ideal for following something across cameras at the same moment in time.</p><h2 id="trimming" tabindex="-1">Trimming <a class="header-anchor" href="#trimming" aria-label="Permalink to &quot;Trimming&quot;">​</a></h2><p>Open the player menu and pick <strong>Export</strong> to turn on trimming. Drag the handles on the timeline to set the start and end, then export the selection. See <a href="/recording/export">Export &amp; download</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("recording/timeline-playback.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timelinePlayback = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timelinePlayback as default
};
