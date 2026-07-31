import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Durchsuchen & Filter","description":"","frontmatter":{"title":"Durchsuchen & Filter"},"headers":[],"relativePath":"de/recording/browsing.md","filePath":"de/recording/browsing.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/recording/browsing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/recording/browsing.md for this page in Markdown format</div><h1 id="durchsuchen-filter" tabindex="-1">Durchsuchen &amp; Filter <a class="header-anchor" href="#durchsuchen-filter" aria-label="Permalink to &quot;Durchsuchen &amp; Filter&quot;">​</a></h1><p>Die <strong>Aufnahmen</strong>-Ansicht ist der Ort, an dem du vergangene Ereignisse über deine Kameras hinweg findest. Jedes Ereignis zeigt ein Thumbnail und das Erkannte, neueste zuerst.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/recordings-view.png",
    alt: "Recordings-Ansicht mit Ereignissen und Filtern"
  }, null, _parent));
  _push(`<h2 id="filtern" tabindex="-1">Filtern <a class="header-anchor" href="#filtern" aria-label="Permalink to &quot;Filtern&quot;">​</a></h2><p>Grenze die Liste auf genau das ein, was du suchst:</p><ul><li><strong>Kamera und Zeitraum.</strong></li><li><strong>Nur mit Aufnahme.</strong> Standardmäßig an. Schalte es aus, um auch Ereignisse zu sehen, bei denen ein Trigger ausgelöst hat, aber nichts aufgenommen wurde. Diese Ereignisse lassen sich nicht herunterladen oder abspielen.</li><li><strong>Labels.</strong> Person, Fahrzeug, Tier, Paket oder Sonstige.</li><li><strong>Auslöser.</strong> Bewegung, eine Türklingel, ein Sensor oder ein Alarmgeräusch.</li><li><strong>Attribute.</strong> Ereignisse, die ein Gesicht oder ein Kennzeichen enthalten.</li><li><strong>Konfidenz.</strong> Erkennungen mit niedriger Konfidenz ausblenden.</li><li><strong>Rastersuche.</strong> Ist genau eine Kamera ausgewählt, kannst du einen Bereich auf ihrem Snapshot markieren, um nur Ereignisse anzuzeigen, die in diesem Teil des Bildes erkannt wurden.</li></ul><p>Du kannst außerdem per Text über erkannte Labels, Gesichter und Kennzeichen suchen.</p><h2 id="ki-suche" tabindex="-1">KI-Suche <a class="header-anchor" href="#ki-suche" aria-label="Permalink to &quot;KI-Suche&quot;">​</a></h2><p>Um Momente durch Beschreibung zu finden, etwa „eine Person, die ein Paket trägt&quot;, nutze die <strong>KI-Suche</strong>. Siehe <a href="/de/detection/semantic-search">Semantische Suche</a>.</p><h2 id="heatmap" tabindex="-1">Heatmap <a class="header-anchor" href="#heatmap" aria-label="Permalink to &quot;Heatmap&quot;">​</a></h2><p>Eine <strong>Heatmap</strong> zeigt, wo sich Aktivität über einen Zeitraum konzentriert hat. Siehe <a href="/de/detection/ai-backends">Objekterkennung</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/recording/browsing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const browsing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  browsing as default
};
