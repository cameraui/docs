import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shortcuts","description":"","frontmatter":{"title":"Shortcuts"},"headers":[],"relativePath":"de/cameras/shortcuts.md","filePath":"de/cameras/shortcuts.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/cameras/shortcuts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/cameras/shortcuts.md for this page in Markdown format</div><h1 id="shortcuts" tabindex="-1">Shortcuts <a class="header-anchor" href="#shortcuts" aria-label="Permalink to &quot;Shortcuts&quot;">​</a></h1><p>Shortcuts sind Bedienelemente, die du direkt auf dem Video einer Kamera platzierst. Ein Shortcut zeigt auf eine andere <strong>Kamera</strong> oder einen <strong>Sensor</strong>, und was er tut, hängt davon ab, ob du darüber fährst oder klickst. Shortcuts werden pro Kamera und pro Benutzer gespeichert, sodass jeder seine eigenen anordnen kann.</p><h2 id="kamera-shortcuts" tabindex="-1">Kamera-Shortcuts <a class="header-anchor" href="#kamera-shortcuts" aria-label="Permalink to &quot;Kamera-Shortcuts&quot;">​</a></h2><p>Ein Kamera-Shortcut bringt eine Nachbar-Kamera in Reichweite:</p><ul><li><strong>Hover</strong> zeigt diese Kamera als Inline-Vorschau, ohne die aktuelle zu verlassen. Beim Durchsehen einer Aufnahme zeigt die Vorschau diese Kamera zum selben Zeitpunkt und folgt mit, während du scrubbst.</li><li><strong>Klick</strong> wechselt zu dieser Kamera. Beim Durchsehen der Vergangenheit öffnet sie am selben Zeitpunkt, sodass du einer Person von einer Kamera zur nächsten folgen kannst, ohne deine Stelle zu verlieren.</li></ul><p>Beispiel: Beim Durchsehen von Material verlässt eine Person das Bild von Kamera A in Richtung Kamera B. Fahre über Bs Shortcut, um weiter zuzusehen, oder klicke ihn, um genau zu diesem Moment zu B zu springen.</p><h2 id="sensor-shortcuts" tabindex="-1">Sensor-Shortcuts <a class="header-anchor" href="#sensor-shortcuts" aria-label="Permalink to &quot;Sensor-Shortcuts&quot;">​</a></h2><p>Ein Sensor-Shortcut bringt ein Zubehör aufs Video:</p><ul><li><strong>Hover</strong> liest den aktuellen Status, etwa offen/geschlossen eines Kontaktsensors, eine Temperatur oder den Status eines Schlosses.</li><li><strong>Klick</strong> steuert es, bei steuerbarem Zubehör: ein Licht oder einen Schalter umschalten, ver-/entriegeln, eine Garage öffnen, eine Sirene auslösen, eine Türklingel läuten oder einen Scharf-Zustand einer Alarmanlage wählen. Read-only-Sensoren zeigen nur ihren Status.</li></ul><p>Das Steuern von Zubehör erfordert Admin-Rechte. Siehe <a href="/de/sensors/">Sensoren &amp; Zubehör</a> für die Funktion der einzelnen Typen.</p><h2 id="shortcuts-hinzufugen-und-bearbeiten" tabindex="-1">Shortcuts hinzufügen und bearbeiten <a class="header-anchor" href="#shortcuts-hinzufugen-und-bearbeiten" aria-label="Permalink to &quot;Shortcuts hinzufügen und bearbeiten&quot;">​</a></h2><ol><li>Öffne an der Kamera das Optionen-Menü und wähle <strong>Shortcuts bearbeiten</strong>. Die Schaltfläche <strong>Shortcuts</strong> in der Werkzeugleiste zeigt oder versteckt nur die Shortcuts, die du bereits hast.</li><li>Klicke irgendwo auf das Video, um einen Shortcut zu setzen, und wähle dann eine <strong>Kamera</strong> oder einen <strong>Sensor</strong> als Ziel.</li><li>Ziehe einen Shortcut, um ihn neu zu positionieren. Positionen werden relativ zum Bild gespeichert, sodass sie beim Skalieren des Videos an Ort und Stelle bleiben.</li><li>Per Long-Press entfernst du einen Shortcut.</li><li>Wähle <strong>Bearbeitung beenden</strong>, wenn du fertig bist.</li></ol>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/cameras/shortcuts-overlay.png",
    alt: "Shortcuts-Overlay auf einer Kamera"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/cameras/shortcuts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shortcuts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shortcuts as default
};
