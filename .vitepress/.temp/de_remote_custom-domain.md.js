import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Eigene Domain","description":"","frontmatter":{"title":"Eigene Domain"},"headers":[],"relativePath":"de/remote/custom-domain.md","filePath":"de/remote/custom-domain.md","lastUpdated":1785043977000}');
const _sfc_main = { name: "de/remote/custom-domain.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/remote/custom-domain.md for this page in Markdown format</div><h1 id="eigene-domain" tabindex="-1">Eigene Domain <a class="header-anchor" href="#eigene-domain" aria-label="Permalink to &quot;Eigene Domain&quot;">​</a></h1><p>Wenn du den Server lieber selbst bereitstellst, richte deine eigene Domain darauf. Setze unter <strong>Einstellungen → Remote</strong> die Methode der <strong>direkten Verbindung</strong> auf <strong>Benutzerdefinierte Domain</strong> und gib die <strong>URL</strong> ein, unter der der Server erreichbar ist, zum Beispiel <code>https://nvr.example.com</code>.</p><p>Das setzt voraus, dass du den Server bereits unter dieser Adresse erreichbar gemacht hast, über dein eigenes DNS und einen Reverse-Proxy oder Port-Forwarding an deinem Router. camera.ui ändert hier nichts an deinem Netzwerk; es merkt sich die zu verwendende öffentliche Adresse. Wenn du den Weg über einen Reverse-Proxy gehst, beschreibt <a href="/de/remote/reverse-proxy">Reverse-Proxy</a>, was der Proxy weiterleiten muss.</p><p>Wähle <strong>Speichern</strong>, um die Adresse zu sichern, und nutze dann <strong>Verbindung testen</strong>. Getestet wird die gespeicherte Adresse, eine nur eingetippte URL wird also noch nicht berücksichtigt.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Wenn du keine eigene Domain oder keinen Reverse-Proxy betreibst, ist <a href="/de/remote/cloud">camera.ui Cloud</a> oder ein <a href="/de/remote/cloudflare">Cloudflare-Tunnel</a> einfacher, da keiner Router-Änderungen braucht.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/remote/custom-domain.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customDomain = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customDomain as default
};
