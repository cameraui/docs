import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bewegungserkennung","description":"","frontmatter":{"title":"Bewegungserkennung"},"headers":[],"relativePath":"de/detection/motion.md","filePath":"de/detection/motion.md","lastUpdated":1783356206000}');
const _sfc_main = { name: "de/detection/motion.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/detection/motion.md for this page in Markdown format</div><h1 id="bewegungserkennung" tabindex="-1">Bewegungserkennung <a class="header-anchor" href="#bewegungserkennung" aria-label="Permalink to &quot;Bewegungserkennung&quot;">​</a></h1><p>Bewegung ist die erste und günstigste Stufe der <a href="/de/detection/">Erkennung</a>. Sie achtet auf Veränderung im Bild und weckt, wenn sie Bewegung sieht, die schwerere KI. Für sich allein kann sie auch Aufnahmen und Benachrichtigungen auslösen.</p><h2 id="eine-bewegungs-engine-wahlen" tabindex="-1">Eine Bewegungs-Engine wählen <a class="header-anchor" href="#eine-bewegungs-engine-wahlen" aria-label="Permalink to &quot;Eine Bewegungs-Engine wählen&quot;">​</a></h2><p>camera.ui bietet mehrere Bewegungs-Plugins, sodass du die CPU-Last an deine Hardware anpassen kannst. Aktiviere eine pro Kamera in den <a href="/de/cameras/settings">Einstellungen</a> unter dem Plugins-Tab (siehe <a href="/de/sensors/setup">Sensoren einrichten</a>):</p><ul><li><strong>Rust Motion.</strong> Schnell und effizient; ein guter Standard für die meisten Setups.</li><li><strong>OpenCV.</strong> Mehrere Algorithmen mit feiner Justierung.</li><li><strong>OpenCL.</strong> GPU-beschleunigt, für sehr geringe CPU-Last.</li><li><strong>WASM Motion.</strong> Plattformübergreifend per WebAssembly.</li><li><strong>Pam Diff.</strong> Leichtgewichtige Pixel-Differenz.</li><li><strong>SMTP.</strong> Für Kameras, die Bewegungsalarme per E-Mail senden, statt das Video zu analysieren.</li></ul><h2 id="empfindlichkeit-justieren" tabindex="-1">Empfindlichkeit justieren <a class="header-anchor" href="#empfindlichkeit-justieren" aria-label="Permalink to &quot;Empfindlichkeit justieren&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/detection-settings.png",
    alt: "Erkennungs-Einstellungen pro Kamera"
  }, null, _parent));
  _push(`<p>Jede Engine bietet eigene Einstellungen (etwa Fläche, Schwellwert und Weichzeichnung) in ihren Plugin-Settings, mit „Zurücksetzen&quot;. Zwei Einstellungen liegen an der Kamera selbst, unter <a href="/de/cameras/settings">Einstellungen → Detection</a>:</p><ul><li><strong>Bewegungs-Auflösung.</strong> Niedrig ist am schnellsten, mittel ausgewogen, hoch am genauesten.</li><li><strong>Bewegungs-Timeout.</strong> Wie lange Bewegung nach dem Stillstand „aktiv&quot; bleibt (mindestens 10 Sekunden).</li></ul><p>Wenn eine Kamera zu empfindlich ist (eine viel befahrene Straße, ein schwankender Baum), begrenze mit <a href="/de/cameras/zones-and-masks">Zonen</a>, wo Bewegung zählt.</p><h2 id="die-kaskade" tabindex="-1">Die Kaskade <a class="header-anchor" href="#die-kaskade" aria-label="Permalink to &quot;Die Kaskade&quot;">​</a></h2><p>Wenn Bewegung auslöst, startet sie die schwereren Detektoren (Objekt, Gesicht usw.). Du kannst diese Kaskade auch von anderen Sensoren starten lassen, etwa einem Tür-Kontaktsensor, der die Objekterkennung auslöst, unter <strong>Sensor-Trigger</strong> in den Erkennungs-Einstellungen der Kamera.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/detection/motion.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const motion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  motion as default
};
