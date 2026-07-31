import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Audio-Erkennung","description":"","frontmatter":{"title":"Audio-Erkennung"},"headers":[],"relativePath":"de/detection/audio.md","filePath":"de/detection/audio.md","lastUpdated":1785045033000}');
const _sfc_main = { name: "de/detection/audio.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/detection/audio.md for this page in Markdown format</div><h1 id="audio-erkennung" tabindex="-1">Audio-Erkennung <a class="header-anchor" href="#audio-erkennung" aria-label="Permalink to &quot;Audio-Erkennung&quot;">​</a></h1><p>Audio-Erkennung hört auf den Ton einer Kamera nach bestimmten Geräuschen, etwa Glasbruch, einem Alarm oder Hundebellen. Sie läuft neben der Video-Erkennung und kann allein Ereignisse und Benachrichtigungen auslösen. Die Kamera muss dafür einen Audio-Stream liefern.</p><h2 id="einrichtung" tabindex="-1">Einrichtung <a class="header-anchor" href="#einrichtung" aria-label="Permalink to &quot;Einrichtung&quot;">​</a></h2><p>Aktiviere das Audio-Plugin für eine Kamera unter <a href="/de/cameras/settings">Einstellungen → Plugins</a> (siehe <a href="/de/sensors/setup">Sensoren einrichten</a>). In seinen Einstellungen:</p><ul><li><strong>Listen Labels.</strong> Wähle, welche Geräusche erkannt werden.</li><li><strong>Konfidenzschwelle.</strong> Wie sicher es sein muss, bevor es ein Geräusch meldet (0,1 bis 1).</li></ul><p>Zu den erkennbaren Geräuschen gehören Glasbruch, Schreien, Schüsse, Alarme (Rauch, Auto, Sirene), eine Türklingel, Klopfen, Hundebellen, eine Katze, Babyweinen und Sprache.</p><h2 id="lautstarke-gate-und-timeout" tabindex="-1">Lautstärke-Gate und Timeout <a class="header-anchor" href="#lautstarke-gate-und-timeout" aria-label="Permalink to &quot;Lautstärke-Gate und Timeout&quot;">​</a></h2><p>Drei weitere Einstellungen liegen an der Kamera selbst, unter <a href="/de/cameras/settings">Einstellungen → Detection</a>:</p><ul><li><strong>Min. Lautstärke (dBFS).</strong> Audio-Frames unterhalb dieses Pegels werden übersprungen, sodass leise Hintergrundgeräusche nie analysiert werden. Reicht von -100 (Stille) bis 0 (Maximum), Standard -40.</li><li><strong>Audio-Konfidenz.</strong> Erkannte Geräusche, bei denen der Detektor unsicherer ist als dieser Wert, zählen nicht als Ereignis und lösen keine Automationen aus (0 bis 1, Standard 0,7). Sie liegt über dem eigenen Schwellwert des Plugins, sodass das Plugin empfindlich bleiben kann und trotzdem nur sichere Geräusche auslösen. Erhöhe sie bei falschen Glasbruch- oder Schuss-Alarmen.</li><li><strong>Audio-Timeout.</strong> Wie lange ein Audio-Ereignis nach dem letzten Trigger „aktiv&quot; bleibt (mindestens 10 Sekunden).</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/detection/audio.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const audio = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  audio as default
};
