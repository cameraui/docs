import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blueprints & Store","description":"","frontmatter":{"title":"Blueprints & Store"},"headers":[],"relativePath":"de/automations/blueprints.md","filePath":"de/automations/blueprints.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/automations/blueprints.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/automations/blueprints.md for this page in Markdown format</div><h1 id="blueprints-store" tabindex="-1">Blueprints &amp; Store <a class="header-anchor" href="#blueprints-store" aria-label="Permalink to &quot;Blueprints &amp; Store&quot;">​</a></h1><p>Ein <strong>Blueprint</strong> ist eine Automation als Datei gespeichert, sodass du sie sichern, zwischen Servern verschieben oder mit jemandem teilen kannst.</p><h2 id="exportieren" tabindex="-1">Exportieren <a class="header-anchor" href="#exportieren" aria-label="Permalink to &quot;Exportieren&quot;">​</a></h2><p>Öffne eine Automation und wähle <strong>Blueprint exportieren</strong>. camera.ui lädt eine <code>.blueprint.json</code>-Datei herunter, die die Nodes und Verbindungen des Ablaufs enthält, aber nicht seine Geheimnisse wie Webhook-Schlüssel.</p><h2 id="importieren" tabindex="-1">Importieren <a class="header-anchor" href="#importieren" aria-label="Permalink to &quot;Importieren&quot;">​</a></h2><p>Wähle in der <strong>Automations</strong>-Liste <strong>Blueprint importieren</strong> und nimm eine <code>.blueprint.json</code>-Datei. camera.ui fügt sie als neue Automation hinzu, <strong>deaktiviert</strong>, sodass du sie prüfen und anpassen kannst, bevor du sie einschaltest. Importierte Abläufe bekommen frische interne IDs, sodass es beim doppelten Import desselben Blueprints keine Konflikte gibt.</p><h2 id="teilen" tabindex="-1">Teilen <a class="header-anchor" href="#teilen" aria-label="Permalink to &quot;Teilen&quot;">​</a></h2><p>Um eine Automation zu teilen, exportiere sie und sende die Datei. Die andere Person importiert sie auf ihrem eigenen Server.</p><h2 id="community-blueprints" tabindex="-1">Community-Blueprints <a class="header-anchor" href="#community-blueprints" aria-label="Permalink to &quot;Community-Blueprints&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/automations/blueprint-store.png",
    alt: "Der Community-Automatisierungen-Store"
  }, null, _parent));
  _push(`<p>Wähle in der <strong>Automations</strong>-Liste <strong>Community-Automatisierungen durchsuchen</strong>, um den Store zu öffnen. Er listet Blueprints, die von der camera.ui-Community geteilt wurden, mit Suche, einem Kategoriefilter und einer Reihe empfohlener Blueprints.</p><p>Öffnest du einen Blueprint, siehst du vor dem Import, was er benötigt: erforderliche Plugins (mit einem Link zum Plugin-Store, falls eines fehlt) und benötigte Eingaben wie eine Kamera, Benachrichtigungsempfänger oder einen Sensor. Über <strong>Importieren</strong> führt dich der Assistent durch die Eingaben des Blueprints. Kameras, Sensoren, Plugins und Benachrichtigungsempfänger wählst du selbst aus, und wo der Blueprint einen einfachen Wert braucht, tippst du ihn ein, etwa ein MQTT-Topic. Manche Felder sind schon mit einem Vorschlag gefüllt, den du überschreiben kannst. Die Seite eines Blueprints listet diese Textfelder nicht auf, erwarte beim Import also ein paar Felder mehr. Enthält der Blueprint keine Referenzen zum Verknüpfen, wird er direkt importiert. In beiden Fällen landet er <strong>deaktiviert</strong> in deiner Automations-Liste, genau wie beim manuellen Import einer Datei.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/automations/blueprints.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blueprints = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blueprints as default
};
