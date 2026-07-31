import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSuspense, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Detection & AI","description":"","frontmatter":{"title":"Detection & AI"},"headers":[],"relativePath":"detection/index.md","filePath":"detection/index.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "detection/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection.md for this page in Markdown format</div><h1 id="detection-ai" tabindex="-1">Detection &amp; AI <a class="header-anchor" href="#detection-ai" aria-label="Permalink to &quot;Detection &amp; AI&quot;">​</a></h1><p>Detection is how camera.ui understands what&#39;s in your video: movement, people and vehicles, faces, license plates, and sounds. It runs on your own hardware, and the results become events you can browse, get notified about, and search.</p><h2 id="how-detection-works" tabindex="-1">How detection works <a class="header-anchor" href="#how-detection-works" aria-label="Permalink to &quot;How detection works&quot;">​</a></h2><p>Detection is layered, so it stays efficient:</p><ol><li><strong>Motion</strong> runs continuously and cheaply. It just notices that something changed.</li><li>When a trigger fires, the heavier <strong>AI</strong> wakes up. It runs object detection (people, vehicles, animals), then looks closer at what it found: faces on the people it sees, license plates on the vehicles, and a semantic fingerprint for search. Motion is the usual trigger. A detected sound wakes the AI too, and so can another sensor, for example a door contact.</li></ol><p>This &quot;cascade&quot; means the demanding AI only runs when there&#39;s something to look at, and each step only runs on the objects it applies to, which keeps CPU and GPU use low.</p>`);
  ssrRenderSuspense(_push, {
    default: () => {
      _push(ssrRenderComponent(_component_Mermaid, {
        id: "mermaid-28",
        class: "mermaid",
        graph: "flowchart%20LR%0A%20%20cam%5BCamera%20frame%5D%20--%3E%20motion%7BMotion%3F%7D%0A%20%20cam%20-.%20parallel%20.-%3E%20audio%5BAudio%5D%0A%20%20sensor%5BSensor%20trigger%3Cbr%2F%3Ee.g.%20door%20contact%5D%20--%3E%20obj%0A%20%20motion%20--%20no%20--%3E%20idle%5BHeavy%20AI%20stays%20idle%3Cbr%2F%3Eunless%20another%20trigger%20fires%5D%0A%20%20motion%20--%20yes%20--%3E%20obj%5BObject%20detection%3Cbr%2F%3Eperson%20%C2%B7%20vehicle%20%C2%B7%20animal%5D%0A%20%20audio%20--%20sound%20--%3E%20obj%0A%20%20obj%20--%20person%20--%3E%20face%5BFaces%5D%0A%20%20obj%20--%20vehicle%20--%3E%20plate%5BLicense%20plates%5D%0A%20%20obj%20--%3E%20clip%5BCLIP%5D%0A%20%20obj%20--%3E%20ev%5B(Event)%5D%0A%20%20face%20--%3E%20ev%0A%20%20plate%20--%3E%20ev%0A%20%20audio%20--%3E%20ev%0A"
      }, null, _parent));
    },
    fallback: () => {
      _push(` Loading... `);
    },
    _: 1
  });
  _push(`<h2 id="what-you-can-detect" tabindex="-1">What you can detect <a class="header-anchor" href="#what-you-can-detect" aria-label="Permalink to &quot;What you can detect&quot;">​</a></h2><ul><li><strong><a href="/detection/motion">Motion</a></strong> — movement in the frame.</li><li><strong><a href="/detection/ai-backends">Objects</a></strong> — people, vehicles, and animals.</li><li><strong><a href="/detection/faces">Faces</a></strong> — recognise known people and group unknown ones.</li><li><strong><a href="/detection/license-plates">License plates</a></strong> — read plate numbers.</li><li><strong><a href="/detection/audio">Audio</a></strong> — sounds like glass breaking, alarms, or a dog barking.</li><li><strong><a href="/detection/semantic-search">Semantic search</a></strong> — find moments by describing them in words.</li><li><strong><a href="/detection/genai-descriptions">AI descriptions</a></strong> — a written summary of what happened.</li></ul><h2 id="plugins-do-the-work" tabindex="-1">Plugins do the work <a class="header-anchor" href="#plugins-do-the-work" aria-label="Permalink to &quot;Plugins do the work&quot;">​</a></h2><p>Detection is provided by <a href="/plugins/">plugins</a> you enable per camera: a <strong>motion engine</strong> and an <strong>AI backend</strong> that matches your hardware. You choose and tune them in a camera&#39;s <a href="/cameras/settings">settings</a>. See <a href="/sensors/setup">Set up sensors</a> for how to enable them.</p><p>Each detection becomes part of an <strong>event</strong>. See <a href="/detection/events-and-detections">Events &amp; detections</a> for how those are structured, and <a href="/recording/">Recording (NVR)</a> for browsing them.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
