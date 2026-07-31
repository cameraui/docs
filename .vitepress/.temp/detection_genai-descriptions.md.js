import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AI descriptions","description":"","frontmatter":{"title":"AI descriptions"},"headers":[],"relativePath":"detection/genai-descriptions.md","filePath":"detection/genai-descriptions.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "detection/genai-descriptions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /detection/genai-descriptions.md for this page in Markdown format</div><h1 id="ai-descriptions" tabindex="-1">AI descriptions <a class="header-anchor" href="#ai-descriptions" aria-label="Permalink to &quot;AI descriptions&quot;">​</a></h1><p>camera.ui can use a generative-AI model to write a short, readable summary of each event: a title, a description of what happened, a notification-friendly summary, and a threat level. It names people, plates, and detected movement.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/genai-description.png",
    alt: "An AI-generated event description"
  }, null, _parent));
  _push(`<h2 id="choosing-a-provider" tabindex="-1">Choosing a provider <a class="header-anchor" href="#choosing-a-provider" aria-label="Permalink to &quot;Choosing a provider&quot;">​</a></h2><p>In the <a href="/recording/">NVR settings</a>, open the <strong>GenAI</strong> tab, turn on <strong>Enabled</strong> and pick a provider:</p><ul><li><strong>Ollama.</strong> Runs a model locally on your own hardware. Set the <strong>API Base URL</strong> (for example <code>http://localhost:11434</code>).</li><li><strong>OpenAI</strong> or <strong>Gemini.</strong> Use a cloud model. Set your <strong>API Key</strong>.</li></ul><p>Then set the <strong>Model</strong> (such as <code>llava</code>, <code>gpt-4o</code>, or <code>gemini-2.5-flash</code>), an optional <strong>Description Language</strong>, and how many images per event to send. <strong>Request Timeout</strong> is how long camera.ui waits for the provider, 60 seconds by default; local Ollama models often need more. <strong>Test Connection</strong> checks it works. Enable it per camera with the camera&#39;s <strong>AI descriptions</strong> toggle.</p><h2 id="privacy" tabindex="-1">Privacy <a class="header-anchor" href="#privacy" aria-label="Permalink to &quot;Privacy&quot;">​</a></h2><p>With Ollama, everything stays on your own hardware. With OpenAI or Gemini, event snapshots are sent to that provider to generate the description.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>AI descriptions build on recording, which requires an active camera.ui subscription. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("detection/genai-descriptions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const genaiDescriptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  genaiDescriptions as default
};
