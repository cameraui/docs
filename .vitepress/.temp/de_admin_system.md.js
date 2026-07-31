import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"System & Netzwerk","description":"","frontmatter":{"title":"System & Netzwerk"},"headers":[],"relativePath":"de/admin/system.md","filePath":"de/admin/system.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/admin/system.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/admin/system.md for this page in Markdown format</div><h1 id="system-netzwerk" tabindex="-1">System &amp; Netzwerk <a class="header-anchor" href="#system-netzwerk" aria-label="Permalink to &quot;System &amp; Netzwerk&quot;">​</a></h1><p>Die Seite <strong>Einstellungen → System</strong> (nur Admins) kümmert sich um die Version des Servers und ein paar Server-Aktionen.</p><h2 id="version-und-updates" tabindex="-1">Version und Updates <a class="header-anchor" href="#version-und-updates" aria-label="Permalink to &quot;Version und Updates&quot;">​</a></h2><p>Sie zeigt die <strong>Server</strong>-Version, und in der Desktop- und der mobilen App die <strong>App</strong>-Version. Wenn ein Update verfügbar ist, wähle <strong>Aktualisieren</strong>, um es zu installieren, oder <strong>Verwalten</strong>, um eine bestimmte Version zu wählen. Vorabversionen erscheinen in dieser Liste nur, wenn <strong>Beta-Updates</strong> aktiv ist, der Schalter oben auf der Seite. Siehe <a href="/de/install/updating">Aktualisieren</a>, wie Updates plattformübergreifend funktionieren.</p><h2 id="server-aktionen" tabindex="-1">Server-Aktionen <a class="header-anchor" href="#server-aktionen" aria-label="Permalink to &quot;Server-Aktionen&quot;">​</a></h2><ul><li><strong>Server neustarten.</strong> camera.ui neu starten, etwa nach einer Änderung, die das erfordert.</li><li><strong>Server zurücksetzen.</strong> Die Konfiguration auf Standard zurücksetzen. Das entfernt alle deine Einstellungen und Daten und kann nicht rückgängig gemacht werden, daher ist es auf das Master-Konto beschränkt.</li></ul><p>Der Server bietet außerdem einen <strong>Zertifikat</strong>-Download für sein HTTPS.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Suchst du den Servernamen oder die Netzwerk-Adressen? Die liegen unter <a href="/de/remote/">Remote-Zugriff</a>. Design und Sprache liegen unter <strong>Erscheinungsbild</strong>.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/admin/system.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const system = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  system as default
};
