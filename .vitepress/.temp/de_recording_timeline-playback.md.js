import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Timeline & Wiedergabe","description":"","frontmatter":{"title":"Timeline & Wiedergabe"},"headers":[],"relativePath":"de/recording/timeline-playback.md","filePath":"de/recording/timeline-playback.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/recording/timeline-playback.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/recording/timeline-playback.md for this page in Markdown format</div><h1 id="timeline-wiedergabe" tabindex="-1">Timeline &amp; Wiedergabe <a class="header-anchor" href="#timeline-wiedergabe" aria-label="Permalink to &quot;Timeline &amp; Wiedergabe&quot;">​</a></h1><p>Öffne eine Kamera und nutze ihre <strong>Zeitleiste</strong>, um durch aufgenommenes Material zu scrubben. Zieh entlang der Timeline, um durch die Zeit zu navigieren; Markierungen zeigen, wo Ereignisse waren.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/recording/timeline.png",
    alt: "Aufnahme-Timeline und Scrubber"
  }, null, _parent));
  _push(`<h2 id="material-durchsehen" tabindex="-1">Material durchsehen <a class="header-anchor" href="#material-durchsehen" aria-label="Permalink to &quot;Material durchsehen&quot;">​</a></h2><ul><li><strong>Scrubbe</strong> flüssig entlang der Timeline. camera.ui nutzt zum Scrubben den niedrig aufgelösten Stream, sodass es schnell bleibt.</li><li><strong>Wiedergabe und Pause</strong>, 30 Sekunden zurück oder vor springen und die <strong>Geschwindigkeit</strong> zwischen 0.25x und 8x ändern.</li><li><strong>Sieh auf einen Blick</strong>, was passiert ist. Ereignis-Markierungen auf der Timeline zeigen ein Vorschaubild. Klick eines an, um zu diesem Moment zu springen.</li><li><strong>Zoome</strong> die Timeline rein und raus, vom groben Überblick bis auf Sekunden genau. In der tiefsten Zoomstufe wird das Scrubben bildgenau und die Timeline zeigt ein <strong>Feinsteuerung</strong>-Badge.</li><li><strong>Springe zu einem Tag</strong> über den Kalender, der die Tage mit Material hervorhebt.</li></ul><h2 id="zeitleiste-oder-erkennungen" tabindex="-1">Zeitleiste oder Erkennungen <a class="header-anchor" href="#zeitleiste-oder-erkennungen" aria-label="Permalink to &quot;Zeitleiste oder Erkennungen&quot;">​</a></h2><p>Auf der Kameraseite hat das Panel zwei Ansichten, zwischen denen du wechseln kannst. <strong>Zeitleiste</strong> ist die Skala, auf der du scrubbst. <strong>Erkennungen</strong> ersetzt sie durch eine Liste dessen, was erkannt wurde: Tag, Uhrzeit, Dauer, ein Vorschaubild und Icons für die erkannten Typen. Klick einen Eintrag an, um direkt dorthin zu springen.</p><h2 id="mehrere-kameras-gleichzeitig" tabindex="-1">Mehrere Kameras gleichzeitig <a class="header-anchor" href="#mehrere-kameras-gleichzeitig" aria-label="Permalink to &quot;Mehrere Kameras gleichzeitig&quot;">​</a></h2><p>In <a href="/de/cameras/camview">Camview</a> scrubbt die Timeline <strong>alle Kameras des Layouts gemeinsam</strong> und hält sie synchron. Ideal, um etwas über mehrere Kameras zum selben Zeitpunkt zu verfolgen.</p><h2 id="zuschneiden" tabindex="-1">Zuschneiden <a class="header-anchor" href="#zuschneiden" aria-label="Permalink to &quot;Zuschneiden&quot;">​</a></h2><p>Öffne das Player-Menü und wähle <strong>Export</strong>, um das Zuschneiden einzuschalten. Zieh die Griffe auf der Timeline, um Start und Ende zu setzen, und exportiere die Auswahl. Siehe <a href="/de/recording/export">Export &amp; Download</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/recording/timeline-playback.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timelinePlayback = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timelinePlayback as default
};
