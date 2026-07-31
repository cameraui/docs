import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kennzeichen","description":"","frontmatter":{"title":"Kennzeichen"},"headers":[],"relativePath":"de/detection/license-plates.md","filePath":"de/detection/license-plates.md","lastUpdated":1785045033000}');
const _sfc_main = { name: "de/detection/license-plates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/detection/license-plates.md for this page in Markdown format</div><h1 id="kennzeichen" tabindex="-1">Kennzeichen <a class="header-anchor" href="#kennzeichen" aria-label="Permalink to &quot;Kennzeichen&quot;">​</a></h1><p>Die Kennzeichenerkennung liest Nummernschilder von Fahrzeugen. Sie baut auf der <a href="/de/detection/ai-backends">Objekterkennung</a> auf: Ein Fahrzeug wird erkannt, dann sein Kennzeichen lokalisiert und per OCR gelesen. Aktiviere an der Kamera ein KI-Backend mit Kennzeichen-Unterstützung. Wenn die Kamera Objekte selbst erkennt, aber nicht meldet, wo sie sind (viele Reolink-Modelle), aktiviere <a href="/de/detection/ai-backends#objekt-assistenz">Objekt-Assistenz</a>, damit Kennzeichen einen passenden Ausschnitt bekommen.</p><h2 id="einrichtung" tabindex="-1">Einrichtung <a class="header-anchor" href="#einrichtung" aria-label="Permalink to &quot;Einrichtung&quot;">​</a></h2><p>In den Plugin-Settings des Backends nutzen Kennzeichen zwei Modelle, einen <strong>Detektor</strong>, der das Schild findet, und ein <strong>OCR-Modell</strong>, das die Zeichen liest, plus einen Confidence-Schwellwert. camera.ui lädt sie automatisch herunter.</p><p>Pro Kamera gibt es unter <a href="/de/cameras/settings">Einstellungen → Erkennung</a> zwei weitere Optionen: <strong>Kennzeichen-Konfidenz</strong> (Lesungen, bei denen die OCR unsicherer ist als dieser Wert, werden ignoriert, 0 bis 1, Standard 0,9) und <strong>Min. Kennzeichenlänge</strong> (kürzere Lesungen werden als Fragmente verworfen, Standard 4 Zeichen).</p><h2 id="wo-kennzeichen-erscheinen" tabindex="-1">Wo Kennzeichen erscheinen <a class="header-anchor" href="#wo-kennzeichen-erscheinen" aria-label="Permalink to &quot;Wo Kennzeichen erscheinen&quot;">​</a></h2><p>Ein gelesenes Kennzeichen wird seinem Fahrzeug als <strong>Attribut</strong> angehängt. Du findest es:</p><ul><li>Am Ereignis, neben dem Fahrzeug.</li><li>In den <a href="/de/recording/browsing">Aufnahmen</a>, wo du nach dem Attribut <strong>License Plate</strong> filtern oder ein bestimmtes Kennzeichen suchen kannst.</li><li>In <a href="/de/notifications/">Benachrichtigungen</a> und <a href="/de/detection/genai-descriptions">KI-Beschreibungen</a>, zum Beispiel „Plate ABC-123&quot;.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/detection/license-plates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const licensePlates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  licensePlates as default
};
