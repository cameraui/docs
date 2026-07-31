import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSuspense, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Erkennung & KI","description":"","frontmatter":{"title":"Erkennung & KI"},"headers":[],"relativePath":"de/detection/index.md","filePath":"de/detection/index.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/detection/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/detection.md for this page in Markdown format</div><h1 id="erkennung-ki" tabindex="-1">Erkennung &amp; KI <a class="header-anchor" href="#erkennung-ki" aria-label="Permalink to &quot;Erkennung &amp; KI&quot;">​</a></h1><p>Erkennung ist, wie camera.ui versteht, was in deinem Video passiert: Bewegung, Personen und Fahrzeuge, Gesichter, Kennzeichen und Geräusche. Sie läuft auf deiner eigenen Hardware, und die Ergebnisse werden zu Ereignissen, die du durchsuchen, über die du benachrichtigt werden und nach denen du suchen kannst.</p><h2 id="wie-erkennung-funktioniert" tabindex="-1">Wie Erkennung funktioniert <a class="header-anchor" href="#wie-erkennung-funktioniert" aria-label="Permalink to &quot;Wie Erkennung funktioniert&quot;">​</a></h2><p>Erkennung ist gestuft, damit sie effizient bleibt:</p><ol><li><strong>Bewegung</strong> läuft durchgehend und günstig. Sie bemerkt nur, dass sich etwas geändert hat.</li><li>Wenn ein Trigger auslöst, wacht die schwerere <strong>KI</strong> auf. Sie führt Objekterkennung aus (Personen, Fahrzeuge, Tiere) und schaut dann genauer auf das Gefundene: Gesichter bei den erkannten Personen, Kennzeichen bei den Fahrzeugen und einen semantischen Fingerabdruck für die Suche. Bewegung ist der übliche Trigger. Auch ein erkanntes Geräusch weckt die KI, ebenso ein anderer Sensor, zum Beispiel ein Kontaktsensor an einer Tür.</li></ol><p>Diese „Kaskade&quot; bedeutet, dass die anspruchsvolle KI nur läuft, wenn es etwas zu sehen gibt, und jeder Schritt nur auf den Objekten, für die er gilt, was CPU- und GPU-Last niedrig hält.</p>`);
  ssrRenderSuspense(_push, {
    default: () => {
      _push(ssrRenderComponent(_component_Mermaid, {
        id: "mermaid-28",
        class: "mermaid",
        graph: "flowchart%20LR%0A%20%20cam%5BKamerabild%5D%20--%3E%20motion%7BBewegung%3F%7D%0A%20%20cam%20-.%20parallel%20.-%3E%20audio%5BAudio%5D%0A%20%20sensor%5BSensor-Trigger%3Cbr%2F%3Ez.%20B.%20Kontaktsensor%20an%20einer%20T%C3%BCr%5D%20--%3E%20obj%0A%20%20motion%20--%20nein%20--%3E%20idle%5BSchwere%20KI%20bleibt%20im%20Leerlauf%3Cbr%2F%3Ebis%20ein%20anderer%20Trigger%20ausl%C3%B6st%5D%0A%20%20motion%20--%20ja%20--%3E%20obj%5BObjekterkennung%3Cbr%2F%3EPerson%20%C2%B7%20Fahrzeug%20%C2%B7%20Tier%5D%0A%20%20audio%20--%20Ger%C3%A4usch%20--%3E%20obj%0A%20%20obj%20--%20Person%20--%3E%20face%5BGesichter%5D%0A%20%20obj%20--%20Fahrzeug%20--%3E%20plate%5BKennzeichen%5D%0A%20%20obj%20--%3E%20clip%5BCLIP%5D%0A%20%20obj%20--%3E%20ev%5B(Ereignis)%5D%0A%20%20face%20--%3E%20ev%0A%20%20plate%20--%3E%20ev%0A%20%20audio%20--%3E%20ev%0A"
      }, null, _parent));
    },
    fallback: () => {
      _push(` Loading... `);
    },
    _: 1
  });
  _push(`<h2 id="was-du-erkennen-kannst" tabindex="-1">Was du erkennen kannst <a class="header-anchor" href="#was-du-erkennen-kannst" aria-label="Permalink to &quot;Was du erkennen kannst&quot;">​</a></h2><ul><li><strong><a href="/de/detection/motion">Bewegung</a></strong> — Bewegung im Bild.</li><li><strong><a href="/de/detection/ai-backends">Objekte</a></strong> — Personen, Fahrzeuge und Tiere.</li><li><strong><a href="/de/detection/faces">Gesichter</a></strong> — bekannte Personen erkennen und unbekannte gruppieren.</li><li><strong><a href="/de/detection/license-plates">Kennzeichen</a></strong> — Kennzeichen lesen.</li><li><strong><a href="/de/detection/audio">Audio</a></strong> — Geräusche wie Glasbruch, Alarme oder Hundebellen.</li><li><strong><a href="/de/detection/semantic-search">Semantische Suche</a></strong> — Momente finden, indem du sie in Worten beschreibst.</li><li><strong><a href="/de/detection/genai-descriptions">KI-Beschreibungen</a></strong> — eine schriftliche Zusammenfassung des Geschehens.</li></ul><h2 id="plugins-erledigen-die-arbeit" tabindex="-1">Plugins erledigen die Arbeit <a class="header-anchor" href="#plugins-erledigen-die-arbeit" aria-label="Permalink to &quot;Plugins erledigen die Arbeit&quot;">​</a></h2><p>Erkennung wird von <a href="/de/plugins/">Plugins</a> bereitgestellt, die du pro Kamera aktivierst: eine <strong>Bewegungs-Engine</strong> und ein <strong>KI-Backend</strong>, das zu deiner Hardware passt. Du wählst und justierst sie in den <a href="/de/cameras/settings">Einstellungen</a> einer Kamera. Siehe <a href="/de/sensors/setup">Sensoren einrichten</a>, um sie zu aktivieren.</p><p>Jede Erkennung wird Teil eines <strong>Ereignisses</strong>. Siehe <a href="/de/detection/events-and-detections">Events &amp; Erkennungen</a> für deren Aufbau und <a href="/de/recording/">Aufnahmen (NVR)</a> zum Durchsehen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/detection/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
