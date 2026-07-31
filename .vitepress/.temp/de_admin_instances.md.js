import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Instanzen","description":"","frontmatter":{"title":"Instanzen"},"headers":[],"relativePath":"de/admin/instances.md","filePath":"de/admin/instances.md","lastUpdated":1784139260000}');
const _sfc_main = { name: "de/admin/instances.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/admin/instances.md for this page in Markdown format</div><h1 id="instanzen" tabindex="-1">Instanzen <a class="header-anchor" href="#instanzen" aria-label="Permalink to &quot;Instanzen&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/admin/instances.png",
    alt: "Die Instanzen-Liste"
  }, null, _parent));
  _push(`<p>Eine <strong>Instanz</strong> ist ein weiterer hier gespeicherter camera.ui-Server, sodass du zu ihm wechseln kannst, ohne dich neu anzumelden. Verwalte sie unter <strong>Instanzen</strong> (im Menü). Instanzen sind eigenständige, vollwertige Server; soll eine zweite Maschine stattdessen die Last <em>dieses</em> Servers mittragen, siehe <a href="/de/admin/workers">Worker</a>.</p><ul><li><strong>Eine Instanz hinzufügen</strong> mit Namen, ihrer URL und einem Benutzernamen und Passwort dafür.</li><li><strong>Konten mit Zwei-Faktor-Authentifizierung.</strong> Ist das Konto auf diesem Server mit Zwei-Faktor-Authentifizierung geschützt, fragt camera.ui beim Hinzufügen oder beim Wechsel nach dem 6-stelligen Code aus deiner Authenticator-App.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> Bis du ihn eingibst, zeigt die Karte ein <strong>2FA</strong>-Tag und <strong>Zwei-Faktor-Bestätigung ausstehend</strong>. Über <strong>Code eingeben</strong> im Menü der Karte schließt du es ab.</li><li>Jede Instanz-Karte zeigt ihren Status: Version, Uptime, Kameras, ob sie online ist und aufnimmt, sowie Ressourcennutzung.</li></ul><p>Sobald du mehr als eine hast, erscheint ein <strong>Instanz-Umschalter</strong> in der oberen Leiste. Wähle einen Server, um zu ihm zu springen, oder kehre zu „Dieser Server&quot; zurück.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Zu einer Instanz über einfaches HTTP zu wechseln überträgt deine Sitzung in der Adresse, daher warnt camera.ui dich zuerst. Nutze HTTPS, wo du kannst.</p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Die Abfrage nimmt nur den 6-stelligen Code aus der App an, keinen Backup-Code. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/admin/instances.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const instances = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  instances as default
};
