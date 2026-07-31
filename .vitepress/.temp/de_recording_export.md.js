import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Export & Download","description":"","frontmatter":{"title":"Export & Download"},"headers":[],"relativePath":"de/recording/export.md","filePath":"de/recording/export.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/recording/export.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/recording/export.md for this page in Markdown format</div><h1 id="export-download" tabindex="-1">Export &amp; Download <a class="header-anchor" href="#export-download" aria-label="Permalink to &quot;Export &amp; Download&quot;">​</a></h1><p>Du kannst Aufnahmen als Datei speichern, um sie zu behalten oder zu teilen, entweder einen einzelnen Clip oder mehrere Kameras und Tage auf einmal.</p><h2 id="einen-clip-exportieren" tabindex="-1">Einen Clip exportieren <a class="header-anchor" href="#einen-clip-exportieren" aria-label="Permalink to &quot;Einen Clip exportieren&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/export-trim.png",
    alt: "Einen Clip auf der Timeline zuschneiden"
  }, null, _parent));
  _push(`<p>Zieh auf der <a href="/de/recording/timeline-playback">Timeline</a> die Trim-Griffe, um Anfang und Ende des gewünschten Teils zu wählen, und exportiere dann. camera.ui erzeugt eine <strong>MP4</strong>-Datei und bietet dir einen Download.</p><h2 id="mehrere-aufnahmen-exportieren" tabindex="-1">Mehrere Aufnahmen exportieren <a class="header-anchor" href="#mehrere-aufnahmen-exportieren" aria-label="Permalink to &quot;Mehrere Aufnahmen exportieren&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/export-recordings.png",
    alt: "Der Dialog „Aufnahmen exportieren“"
  }, null, _parent));
  _push(`<p>In der Ansicht Aufnahmen öffnet die Download-Schaltfläche den Dialog „Aufnahmen exportieren“, um mehr als einen Clip auf einmal zu exportieren. Wähle eine oder mehrere Kameras, einen Zeitbereich über mehrere Tage, eine Qualität (Beste Qualität oder Kleinste Dateien) und optional ein Zeitraffer-Intervall. camera.ui erzeugt pro Kamera und Tag eine MP4-Datei (der erste und letzte Tag decken den gewählten Zeitraum ab, die Tage dazwischen werden komplett exportiert) und schätzt die Gesamtgröße, bevor du exportierst. Erzeugt der Export mehr als eine Datei, kommen sie als ein einzelnes ZIP. Eine einzelne Datei wird direkt als MP4 heruntergeladen.</p><h2 id="zeitraffer" tabindex="-1">Zeitraffer <a class="header-anchor" href="#zeitraffer" aria-label="Permalink to &quot;Zeitraffer&quot;">​</a></h2><p>Beide Export-Varianten können statt eines normalen Clips einen <strong>Zeitraffer</strong> erzeugen, der einen langen Zeitraum in einen kurzen Clip komprimiert, indem er Bilder in einem Intervall abtastet. Gut, um einen ganzen Tag schnell durchzusehen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/recording/export.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _export = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _export as default
};
