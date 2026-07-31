import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steuerung & Status","description":"","frontmatter":{"title":"Steuerung & Status"},"headers":[],"relativePath":"de/sensors/controls.md","filePath":"de/sensors/controls.md","lastUpdated":1785427198000}');
const _sfc_main = { name: "de/sensors/controls.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/sensors/controls.md for this page in Markdown format</div><h1 id="steuerung-status" tabindex="-1">Steuerung &amp; Status <a class="header-anchor" href="#steuerung-status" aria-label="Permalink to &quot;Steuerung &amp; Status&quot;">​</a></h1><p>Sobald eine Kamera <a href="/de/sensors/setup">eingerichtete Sensoren</a> hat, siehst du ihren Status und bedienst die, die das unterstützen.</p><h2 id="wo-sensoren-erscheinen" tabindex="-1">Wo Sensoren erscheinen <a class="header-anchor" href="#wo-sensoren-erscheinen" aria-label="Permalink to &quot;Wo Sensoren erscheinen&quot;">​</a></h2><ul><li><strong>Die Übersicht der Kamera</strong> (im <a href="/de/cameras/settings">Einstellungs</a>-Drawer) listet jeden der Kamera zugewiesenen Sensor mit seinem Live-Status und, bei steuerbaren, den Bedienelementen.</li><li><strong><a href="/de/cameras/shortcuts">Shortcuts</a></strong> lassen dich einen Sensor aufs Video legen, um per Hover den Status zu lesen und per Klick zu bedienen.</li><li><strong>Die <a href="/de/sensors/setup#die-sensoren-seite">Sensoren-Seite</a></strong> listet jeden Sensor im System. Ihr Bearbeiten-Dialog zeigt dieselben Bedienelemente, auch für Sensoren ohne Kamera.</li></ul><h2 id="read-only-sensoren" tabindex="-1">Read-only-Sensoren <a class="header-anchor" href="#read-only-sensoren" aria-label="Permalink to &quot;Read-only-Sensoren&quot;">​</a></h2><p>Diese zeigen ihren aktuellen Status, werden aber nicht bedient:</p><ul><li><strong>Kontakt.</strong> Offen oder geschlossen, für eine Tür oder ein Fenster.</li><li><strong>Temperatur</strong> und <strong>Feuchtigkeit.</strong> Der aktuelle Wert.</li><li><strong>Belegung.</strong> Belegt oder leer.</li><li><strong>Rauchmelder</strong> und <strong>Wassersensor.</strong> Klar oder ausgelöst.</li><li><strong>Batterie.</strong> Ladestand und Laden.</li></ul><h2 id="steuerbares-zubehor" tabindex="-1">Steuerbares Zubehör <a class="header-anchor" href="#steuerbares-zubehor" aria-label="Permalink to &quot;Steuerbares Zubehör&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/sensors/accessory-controls.png",
    alt: "Zubehör-Steuerung in der Kamera-Übersicht"
  }, null, _parent));
  _push(`<p>Dieses kannst du bedienen (nur Admin):</p><ul><li><strong>Licht.</strong> An oder aus, und Helligkeit, wo unterstützt.</li><li><strong>Schalter.</strong> An oder aus.</li><li><strong>Schloss.</strong> Ver- oder entriegeln.</li><li><strong>Sirene.</strong> An oder aus, und Lautstärke, wo unterstützt.</li><li><strong>Garagentor.</strong> Öffnen oder schließen.</li><li><strong>Türklingel.</strong> Ein Läuten auslösen.</li><li><strong>Alarmanlage.</strong> Einen Modus wählen: Aus, Zuhause, Abwesend oder Nacht. Wenn der Alarm ausgelöst wird, zeigt das Element einen Alarmhinweis und die Modi bleiben gesperrt, solange er aktiv ist.</li></ul><p>PTZ-Kameras haben ihre eigene <a href="/de/sensors/ptz">Steuerung und Autotrack</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/sensors/controls.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const controls = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  controls as default
};
