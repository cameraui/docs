import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Face recognition","description":"","frontmatter":{"title":"Face recognition"},"headers":[],"relativePath":"detection/faces.md","filePath":"detection/faces.md","lastUpdated":1785045033000}');
const _sfc_main = { name: "detection/faces.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection/faces.md for this page in Markdown format</div><h1 id="face-recognition" tabindex="-1">Face recognition <a class="header-anchor" href="#face-recognition" aria-label="Permalink to &quot;Face recognition&quot;">​</a></h1><p>Face recognition spots faces on your cameras, recognises people you have enrolled, and groups the ones it doesn&#39;t know yet.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> It builds on <a href="/detection/ai-backends">object detection</a>, so it needs an AI backend with face support enabled on the camera. If the camera detects objects itself without reporting where they are (many Reolink models), enable <a href="/detection/ai-backends#object-assist">Object Assist</a> so faces get a proper crop.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/faces-view.png",
    alt: "Faces view with known and unknown faces"
  }, null, _parent));
  _push(`<h2 id="enrolling-a-known-face" tabindex="-1">Enrolling a known face <a class="header-anchor" href="#enrolling-a-known-face" aria-label="Permalink to &quot;Enrolling a known face&quot;">​</a></h2><p>Open the <strong>Faces</strong> view. It has two sections: <strong>Known Faces</strong> and <strong>Unknown Faces</strong>.</p><p>To add someone:</p><ol><li>Select <strong>Add Face</strong>.</li><li>Enter a <strong>name</strong>, pick the <strong>face detection plugin</strong>, and drop in a clear photo of the person.</li><li>Select <strong>Enroll</strong>. camera.ui checks the photo for a face and tells you if it can&#39;t find one.</li></ol><p>The person is now recognised in future events, with their name shown as an attribute on detections.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/faces-enroll.png",
    alt: "Enroll face dialog"
  }, null, _parent));
  _push(`<h2 id="unknown-faces" tabindex="-1">Unknown faces <a class="header-anchor" href="#unknown-faces" aria-label="Permalink to &quot;Unknown faces&quot;">​</a></h2><p>Faces that don&#39;t match anyone enrolled collect under <strong>Unknown Faces</strong>, grouped automatically so the same person&#39;s shots cluster together.</p><ul><li><strong>Assign a group</strong> to a person to enrol everyone in it at once, or assign a single face.</li><li><strong>Discard</strong> groups or faces you don&#39;t care about, or clear all ungrouped faces.</li></ul><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><p>In the <a href="/recording/">NVR settings</a>, face recognition has:</p><ul><li><strong>Match threshold.</strong> How strict face matching is (0.3 to 0.8).</li><li><strong>Max training images.</strong> How many photos to keep per person (5 to 15); camera.ui keeps the best ones.</li><li><strong>Max unknown people.</strong> How many unknown groups are kept (10 to 500). Once the limit is hit, the group that was seen longest ago is dropped. Raise it for busy outdoor cameras.</li></ul><p>Per camera, <a href="/cameras/settings">Settings → Detection</a> also has a <strong>Face confidence</strong>: faces the AI is less sure about than this are ignored for events and automations (0 to 1, default 0.5).</p><h2 id="rescanning" tabindex="-1">Rescanning <a class="header-anchor" href="#rescanning" aria-label="Permalink to &quot;Rescanning&quot;">​</a></h2><p>After enrolling someone new, select <strong>Rescan existing events</strong> to re-check past recordings and tag them with the newly known face.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Face recognition (matching faces against your enrolled people) builds on recording and requires an active camera.ui subscription. Detecting that a face is present is part of the free detection. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/faces.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faces = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  faces as default
};
