import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Semantische Suche","description":"","frontmatter":{"title":"Semantische Suche"},"headers":[],"relativePath":"de/detection/semantic-search.md","filePath":"de/detection/semantic-search.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/detection/semantic-search.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/detection/semantic-search.md for this page in Markdown format</div><h1 id="semantische-suche" tabindex="-1">Semantische Suche <a class="header-anchor" href="#semantische-suche" aria-label="Permalink to &quot;Semantische Suche&quot;">​</a></h1><p>Die semantische Suche lässt dich Momente in deinen Aufnahmen finden, indem du sie <strong>in einfachen Worten beschreibst</strong>, etwa „Person mit roter Jacke“ oder „Lieferwagen“, statt nach Typ zu filtern. Sie wird von CLIP angetrieben.</p><h2 id="was-du-brauchst" tabindex="-1">Was du brauchst <a class="header-anchor" href="#was-du-brauchst" aria-label="Permalink to &quot;Was du brauchst&quot;">​</a></h2><p>Die semantische Suche braucht ein KI-Backend, das <strong>CLIP</strong> bereitstellt (CoreML, OpenVINO oder ONNX), aktiviert an deinen Kameras. Während diese Kameras aufnehmen, macht camera.ui jede erkannte Person, jedes Fahrzeug und jedes Tier durchsuchbar. Ereignisse ohne eines davon, etwa reine Bewegung, tauchen in den Ergebnissen nicht auf.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><h2 id="suchen" tabindex="-1">Suchen <a class="header-anchor" href="#suchen" aria-label="Permalink to &quot;Suchen&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/ai-search.png",
    alt: "KI-Suche-Ergebnisse in den Aufnahmen"
  }, null, _parent));
  _push(`<p>Öffne in den <a href="/de/recording/browsing">Aufnahmen</a> die <strong>KI-Suche</strong> und beschreibe, was du suchst. camera.ui ordnet Ereignisse danach, wie gut sie passen, und du kannst <strong>Min. Übereinstimmung</strong> erhöhen, um nur enge Treffer zu behalten.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Die semantische Suche basiert auf Aufnahmen, die ein aktives camera.ui-Abo erfordern. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/detection/semantic-search.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const semanticSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  semanticSearch as default
};
