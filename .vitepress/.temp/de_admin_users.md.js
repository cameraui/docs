import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Benutzer & Rollen","description":"","frontmatter":{"title":"Benutzer & Rollen"},"headers":[],"relativePath":"de/admin/users.md","filePath":"de/admin/users.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/admin/users.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/admin/users.md for this page in Markdown format</div><h1 id="benutzer-rollen" tabindex="-1">Benutzer &amp; Rollen <a class="header-anchor" href="#benutzer-rollen" aria-label="Permalink to &quot;Benutzer &amp; Rollen&quot;">​</a></h1><p>camera.ui unterstützt mehrere Benutzerkonten, jedes mit einer Rolle, die bestimmt, was es darf. Verwalte sie unter <strong>Einstellungen → Benutzer</strong> (nur Admins).</p><h2 id="rollen" tabindex="-1">Rollen <a class="header-anchor" href="#rollen" aria-label="Permalink to &quot;Rollen&quot;">​</a></h2><p>Es gibt drei Rollen:</p><ul><li><strong>Benutzer.</strong> Alltäglicher Zugriff: Live-Ansicht, Aufnahmen, Kameransicht und die eigenen Konto-Einstellungen.</li><li><strong>Admin.</strong> Alles, was ein Benutzer kann, plus Verwalten von Kameras, Plugins, Automatisierungen, Benutzern und allen Server-Einstellungen.</li><li><strong>Master.</strong> Das Hauptkonto. Wie ein Admin, plus es kann den Server zurücksetzen. Es kann nicht gelöscht werden, und seine Rolle lässt sich nicht ändern, auch nicht von ihm selbst. Nur der Master kann seinen eigenen Benutzernamen, sein Passwort und seinen Avatar bearbeiten; andere Admins bekommen dabei einen Fehler.</li></ul><p>Der Zugriff wird über die Rolle bestimmt, nicht pro Kamera; es gibt keine kamerabezogenen Berechtigungen.</p><h2 id="benutzer-verwalten" tabindex="-1">Benutzer verwalten <a class="header-anchor" href="#benutzer-verwalten" aria-label="Permalink to &quot;Benutzer verwalten&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/admin/users.png",
    alt: "Die Liste registrierter Benutzer"
  }, null, _parent));
  _push(`<p>Unter <strong>Einstellungen → Benutzer</strong> zeigt die Liste <strong>Registrierte Benutzer</strong> alle an. Von dort kannst du:</p><ul><li><strong>Einen neuen Benutzer anlegen</strong>, mit Benutzername, Passwort und Rolle (Benutzer oder Admin).</li><li>Einen Benutzer <strong>bearbeiten</strong>, um Details oder Rolle zu ändern.</li><li>Einen Benutzer <strong>entfernen</strong>.</li></ul><h2 id="das-erste-konto" tabindex="-1">Das erste Konto <a class="header-anchor" href="#das-erste-konto" aria-label="Permalink to &quot;Das erste Konto&quot;">​</a></h2><p>camera.ui startet mit einem einzigen Master-Konto (Benutzername <code>admin</code>, Passwort <code>admin</code>). Ändere dessen Passwort sofort; beim ersten Login wirst du dazu aufgefordert.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/admin/users.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const users = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  users as default
};
