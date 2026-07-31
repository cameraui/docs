import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mobile Apps koppeln","description":"","frontmatter":{"title":"Mobile Apps koppeln"},"headers":[],"relativePath":"de/remote/pairing.md","filePath":"de/remote/pairing.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/remote/pairing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/remote/pairing.md for this page in Markdown format</div><h1 id="mobile-apps-koppeln" tabindex="-1">Mobile Apps koppeln <a class="header-anchor" href="#mobile-apps-koppeln" aria-label="Permalink to &quot;Mobile Apps koppeln&quot;">​</a></h1><p>Die <a href="/de/install/mobile">Mobile-Apps</a> verbinden sich über camera.ui Cloud mit deinem Server, sodass du ihn von überall erreichst. Du koppelst die App einmal mit deinem Server.</p><h2 id="koppeln" tabindex="-1">Koppeln <a class="header-anchor" href="#koppeln" aria-label="Permalink to &quot;Koppeln&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/remote/pairing.png",
    alt: "Server-Kopplung mit QR-Code und Pair-Code"
  }, null, _parent));
  _push(`<ol><li>Stelle sicher, dass <a href="/de/remote/cloud">camera.ui Cloud</a> auf dem Server aktiviert ist.</li><li>Öffne auf dem Server <strong>Einstellungen → Remote Zugriff</strong> und wähle <strong>Server registrieren</strong>. Ein <strong>QR-Code</strong>, ein <strong>Pair-Code</strong> und eine <strong>Pair-URL</strong> erscheinen.</li><li>Scanne den QR-Code mit der Kamera deines Handys oder öffne die Pair-URL im Browser. Die camera.ui-Anmeldeseite öffnet sich. Melde dich an deinem camera.ui-Konto an. Der Code ist 10 Minuten gültig.</li><li>Drücke auf <strong>Verbinden</strong>. Der Server erscheint in deinem Konto.</li></ol><h2 id="verbinden" tabindex="-1">Verbinden <a class="header-anchor" href="#verbinden" aria-label="Permalink to &quot;Verbinden&quot;">​</a></h2><p>Einmal gekoppelt, zeigt die App deine Server in der Cloud-Server-Liste. Wähle einen zum Verbinden. Hast du mehrere Server, kannst du in der App zwischen ihnen wechseln.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/remote/pairing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pairing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pairing as default
};
