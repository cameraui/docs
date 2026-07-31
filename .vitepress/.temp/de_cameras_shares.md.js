import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Freigaben","description":"","frontmatter":{"title":"Freigaben"},"headers":[],"relativePath":"de/cameras/shares.md","filePath":"de/cameras/shares.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/cameras/shares.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/cameras/shares.md for this page in Markdown format</div><h1 id="freigaben" tabindex="-1">Freigaben <a class="header-anchor" href="#freigaben" aria-label="Permalink to &quot;Freigaben&quot;">​</a></h1><p>Eine Freigabe lässt jemanden den Live-Stream einer einzelnen Kamera ohne camera.ui-Konto ansehen, über einen Link und einen Zugangscode. Freigaben zu erstellen und zu verwalten ist Admins vorbehalten.</p><h2 id="eine-freigabe-erstellen" tabindex="-1">Eine Freigabe erstellen <a class="header-anchor" href="#eine-freigabe-erstellen" aria-label="Permalink to &quot;Eine Freigabe erstellen&quot;">​</a></h2><p>Wähle an einer Kamera <strong>Kamera teilen</strong> in der Player-Werkzeugleiste und lege fest:</p><ul><li><strong>Quelle.</strong> Welche Stream-Qualität geteilt wird (hohe, mittlere oder niedrige Auflösung).</li><li><strong>Gültig für.</strong> Wie lange der Link gültig bleibt.</li><li><strong>Max. Zuschauer.</strong> Wie viele Personen gleichzeitig zusehen können, oder unbegrenzt.</li><li><strong>Bezeichnung.</strong> Ein optionaler Name, um die Freigabe später wiederzuerkennen.</li></ul><p>Wähle <strong>Erstellen</strong>. camera.ui gibt dir einen <strong>Share-Link</strong> und einen <strong>Zugangscode</strong>. Schicke beide an die Person, mit der du teilen willst. Der Zugangscode wird nur einmal angezeigt, kopiere ihn also vor dem Schließen.</p><p>Die Person öffnet den Link, gibt den Code ein und sieht den Live-Stream. Ein camera.ui-Konto ist nicht nötig.</p><p>Die Zuschauer-Seite startet ohne Ton. Die Person kann ihn einschalten und bei Kameras mit Zwei-Wege-Audio über den Mikrofon-Button zurücksprechen. Picture-in-Picture und Vollbild gibt es ebenfalls.</p><div class="tip custom-block"><p class="custom-block-title">Erfordert camera.ui Cloud</p><p>Teilen setzt voraus, dass dein Server mit <strong>camera.ui Cloud</strong> verbunden (<a href="/de/remote/cloud">Einstellungen → Remote</a>) und online ist. Die Cloud hostet den Link und hilft dem Zuschauer, deinen Server zu finden, aber das Video läuft über eine <strong>direkte, Ende-zu-Ende-verschlüsselte Verbindung</strong> zwischen Zuschauer und deinem Server. Es passiert nie camera.uis Server, und der Zugangscode wird nur auf deinem eigenen Server geprüft.</p></div>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/cameras/share-dialog.png",
    alt: "Freigabe-Dialog mit Link und Zugangscode"
  }, null, _parent));
  _push(`<h2 id="freigaben-verwalten" tabindex="-1">Freigaben verwalten <a class="header-anchor" href="#freigaben-verwalten" aria-label="Permalink to &quot;Freigaben verwalten&quot;">​</a></h2><p>Der <strong>Freigaben</strong>-Tab einer Kamera listet ihre aktiven Share-Links: Bezeichnung, geteilte Quelle, Erstellzeitpunkt, Ablauf und wie viele Zuschauer gerade zusehen, gemessen am Limit. Der Kopier-Button kopiert den Share-Link erneut, falls du ihn nochmal verschicken musst. Der Zugangscode lässt sich nicht mehr abrufen. Wähle <strong>Widerrufen</strong>, um eine Freigabe sofort zu beenden.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/cameras/shares.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shares = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shares as default
};
