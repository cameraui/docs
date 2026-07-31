import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Events & detections","description":"","frontmatter":{"title":"Events & detections"},"headers":[],"relativePath":"detection/events-and-detections.md","filePath":"detection/events-and-detections.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "detection/events-and-detections.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection/events-and-detections.md for this page in Markdown format</div><h1 id="events-detections" tabindex="-1">Events &amp; detections <a class="header-anchor" href="#events-detections" aria-label="Permalink to &quot;Events &amp; detections&quot;">​</a></h1><p>When detection fires, camera.ui groups what it finds into an <strong>event</strong>. Knowing the pieces helps when you browse recordings, set up notifications, or search.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/event-detections.png",
    alt: "An event with its detections"
  }, null, _parent));
  _push(`<h2 id="the-pieces" tabindex="-1">The pieces <a class="header-anchor" href="#the-pieces" aria-label="Permalink to &quot;The pieces&quot;">​</a></h2><ul><li><strong>Event.</strong> Everything that happens during one continuous burst of activity at a camera. An event has a start and an end, and can update as it goes.</li><li><strong>Segment.</strong> A stretch of an event where the AI kept seeing objects, with its own thumbnail. Objects leaving and coming back start a new segment, and an event where the AI never sees an object, like a doorbell press with nobody in view, has none.</li><li><strong>Detection.</strong> Something the AI found in a segment, such as a person or a vehicle, with a confidence score.</li><li><strong>Attribute.</strong> Extra detail on a detection, such as a recognised face, a license plate, or a semantic (CLIP) embedding used for search.</li></ul><h2 id="triggers-vs-detections" tabindex="-1">Triggers vs detections <a class="header-anchor" href="#triggers-vs-detections" aria-label="Permalink to &quot;Triggers vs detections&quot;">​</a></h2><p>Two things can start or shape an event:</p><ul><li>A <strong>trigger</strong> is a signal that something happened: motion, a doorbell, a contact sensor, an alarm sound. A trigger can start an event on its own.</li><li>A <strong>detection</strong> is what the AI actually recognised in the video, like an object, a face, or a plate.</li></ul><p>The difference matters for filtering and notifications: you can alert on a doorbell press (a trigger) or only when a person is seen (a detection).</p><h2 id="stationary-objects" tabindex="-1">Stationary objects <a class="header-anchor" href="#stationary-objects" aria-label="Permalink to &quot;Stationary objects&quot;">​</a></h2><p>A car parked in the driveway or a bin left in view would otherwise be detected again every time something moves. <strong>Ignore stationary objects</strong> is on by default in a camera&#39;s <a href="/cameras/settings">Settings → Detection</a>: once an object has held still for a while, camera.ui stops counting it as a detection, and it stays ignored across later events. You still see its box in the live view. It counts again once it moves off the spot, or if the camera pans or tilts.</p><h2 id="where-events-show-up" tabindex="-1">Where events show up <a class="header-anchor" href="#where-events-show-up" aria-label="Permalink to &quot;Where events show up&quot;">​</a></h2><p>Events drive the rest of camera.ui:</p><ul><li><strong><a href="/recording/browsing">Recordings</a></strong> — browse and filter past events.</li><li><strong><a href="/notifications/">Notifications</a></strong> — get alerted about the ones that matter.</li><li><strong><a href="/detection/semantic-search">Semantic search</a></strong> — find events by describing them.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/events-and-detections.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eventsAndDetections = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eventsAndDetections as default
};
