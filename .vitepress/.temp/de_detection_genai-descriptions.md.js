import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"KI-Beschreibungen","description":"","frontmatter":{"title":"KI-Beschreibungen"},"headers":[],"relativePath":"de/detection/genai-descriptions.md","filePath":"de/detection/genai-descriptions.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/detection/genai-descriptions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/detection/genai-descriptions.md for this page in Markdown format</div><h1 id="ki-beschreibungen" tabindex="-1">KI-Beschreibungen <a class="header-anchor" href="#ki-beschreibungen" aria-label="Permalink to &quot;KI-Beschreibungen&quot;">​</a></h1><p>camera.ui kann ein generatives KI-Modell nutzen, um eine kurze, gut lesbare Zusammenfassung jedes Ereignisses zu schreiben: einen Titel, eine Beschreibung des Geschehens, eine benachrichtigungstaugliche Zusammenfassung und eine Bedrohungsstufe. Es benennt Personen, Kennzeichen und was sich bewegt hat.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/genai-description.png",
    alt: "Eine KI-generierte Ereignisbeschreibung"
  }, null, _parent));
  _push(`<h2 id="einen-anbieter-wahlen" tabindex="-1">Einen Anbieter wählen <a class="header-anchor" href="#einen-anbieter-wahlen" aria-label="Permalink to &quot;Einen Anbieter wählen&quot;">​</a></h2><p>Öffne in den <a href="/de/recording/">NVR-Einstellungen</a> den Tab <strong>GenAI</strong>, aktiviere <strong>Enabled</strong> und wähle einen Anbieter:</p><ul><li><strong>Ollama.</strong> Führt ein Modell lokal auf deiner eigenen Hardware aus. Setze die <strong>API Base URL</strong> (zum Beispiel <code>http://localhost:11434</code>).</li><li><strong>OpenAI</strong> oder <strong>Gemini.</strong> Nutzt ein Cloud-Modell. Setze deinen <strong>API Key</strong>.</li></ul><p>Dann legst du das <strong>Modell</strong> fest (etwa <code>llava</code>, <code>gpt-4o</code> oder <code>gemini-2.5-flash</code>), eine optionale <strong>Description Language</strong> und wie viele Bilder pro Ereignis gesendet werden. <strong>Request Timeout</strong> legt fest, wie lange camera.ui auf den Anbieter wartet, standardmäßig 60 Sekunden; lokale Ollama-Modelle brauchen oft mehr. <strong>Test Connection</strong> prüft, ob es funktioniert. Aktiviere es pro Kamera mit dem <strong>KI-Beschreibungen</strong>-Schalter der Kamera.</p><h2 id="datenschutz" tabindex="-1">Datenschutz <a class="header-anchor" href="#datenschutz" aria-label="Permalink to &quot;Datenschutz&quot;">​</a></h2><p>Mit Ollama bleibt alles auf deiner eigenen Hardware. Mit OpenAI oder Gemini werden Ereignis-Snapshots an diesen Anbieter gesendet, um die Beschreibung zu erzeugen.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>KI-Beschreibungen bauen auf Aufnahmen auf, die ein aktives camera.ui-Abo erfordern. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/detection/genai-descriptions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const genaiDescriptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  genaiDescriptions as default
};
