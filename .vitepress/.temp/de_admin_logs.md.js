import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Logs & Konsole","description":"","frontmatter":{"title":"Logs & Konsole"},"headers":[],"relativePath":"de/admin/logs.md","filePath":"de/admin/logs.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/admin/logs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/admin/logs.md for this page in Markdown format</div><h1 id="logs-konsole" tabindex="-1">Logs &amp; Konsole <a class="header-anchor" href="#logs-konsole" aria-label="Permalink to &quot;Logs &amp; Konsole&quot;">​</a></h1><p>Wenn etwas nicht funktioniert, zeigt die <strong>Logs</strong>-Ansicht (im Menü, nur Admins), was der Server tut.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/admin/logs.png",
    alt: "Die Logs-Ansicht"
  }, null, _parent));
  _push(`<h2 id="die-logs-lesen" tabindex="-1">Die Logs lesen <a class="header-anchor" href="#die-logs-lesen" aria-label="Permalink to &quot;Die Logs lesen&quot;">​</a></h2><p>Logs streamen live. Du kannst:</p><ul><li>Nach Quelle filtern: <strong>All</strong>, eine Systemkomponente (<strong>Server</strong>, <strong>go2rtc</strong>, <strong>nats</strong>, <strong>tunnel</strong>), eine bestimmte <strong>Kamera</strong> oder ein bestimmtes <strong>Plugin</strong>.</li><li>Die sichtbaren Zeilen <strong>durchsuchen</strong>.</li><li>Das Log <strong>herunterladen</strong>, um es bei einer Anfrage um Hilfe zu teilen, mit <strong>Alles kopieren</strong> in die Zwischenablage übernehmen oder <strong>löschen</strong>.</li><li>Den Text vergrößern und verkleinern.</li></ul><h2 id="konsole" tabindex="-1">Konsole <a class="header-anchor" href="#konsole" aria-label="Permalink to &quot;Konsole&quot;">​</a></h2><p>Die <strong>Konsole</strong> (im Menü, für jeden Benutzer verfügbar) zeigt das Log der App selbst, nicht das des Servers. Nutze sie, wenn die App sich merkwürdig verhält: eine Ansicht bleibt leer, ein Stream startet nicht, ein Button tut nichts.</p><p>Sie sammelt Einträge nur, solange <strong>Protokolle aufzeichnen</strong> aktiv ist, und weist dich darauf hin, wenn es aus ist. Aktiviere es unter <strong>Einstellungen → Erscheinungsbild</strong>. Im selben Abschnitt gibt es <strong>Ausführliches Logging</strong>, das Debug-Einträge ergänzt.</p><p>In der Konsole kannst du:</p><ul><li>Über das Menü <strong>Level</strong> nach Level filtern: Debug, Log, Info, Warnung, Fehler.</li><li>Die sichtbaren Zeilen <strong>durchsuchen</strong>.</li><li>Die Ausgabe <strong>kopieren</strong>, als Textdatei <strong>exportieren / teilen</strong> oder <strong>leeren</strong>.</li></ul><p>Bei Problemen mit der App hilft der Konsolen-Export, bei Problemen mit dem Server der Logs-Download.</p><h2 id="terminal" tabindex="-1">Terminal <a class="header-anchor" href="#terminal" aria-label="Permalink to &quot;Terminal&quot;">​</a></h2><p>Es gibt außerdem ein <strong>Terminal</strong> im Menü, eine interaktive Shell auf dem Server für fortgeschrittene Fehlersuche. Es ist auf Server-Installationen verfügbar, nicht in der Desktop-App.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/admin/logs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const logs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  logs as default
};
