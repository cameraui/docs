import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cloudflare-Tunnel","description":"","frontmatter":{"title":"Cloudflare-Tunnel"},"headers":[],"relativePath":"de/remote/cloudflare.md","filePath":"de/remote/cloudflare.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/remote/cloudflare.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/remote/cloudflare.md for this page in Markdown format</div><h1 id="cloudflare-tunnel" tabindex="-1">Cloudflare-Tunnel <a class="header-anchor" href="#cloudflare-tunnel" aria-label="Permalink to &quot;Cloudflare-Tunnel&quot;">​</a></h1><p>Ein Cloudflare-Tunnel gibt deinem Server eine öffentliche Adresse über Cloudflares Netzwerk, ohne Ports am Router zu öffnen. Setze unter <strong>Einstellungen → Remote</strong> bei <strong>Direkte Verbindung</strong> die Methode auf <strong>Cloudflare</strong> und wähle dann eine Variante:</p><ul><li><strong>Quick Tunnel.</strong> Eine temporäre Adresse, ohne Cloudflare-Konto. Gut für einen schnellen Test. Die Adresse ändert sich jedes Mal.</li><li><strong>Named Tunnel (Token).</strong> Mit eigener Domain. Erstelle einen Tunnel in deinem Cloudflare-Dashboard und gib ihm einen öffentlichen Hostnamen, der auf deinen Server zeigt, zum Beispiel <code>https://192.168.1.10:3443</code>. Der Server nutzt ein selbstsigniertes Zertifikat, aktiviere daher <strong>No TLS Verify</strong> in den Origin-Einstellungen des Tunnels. Trage dann hier <strong>Hostname</strong> und <strong>Tunnel Token</strong> ein. Deine Domain muss bereits eine Zone in deinem Cloudflare-Konto sein.</li><li><strong>Named Tunnel (OAuth).</strong> Mit eigener Domain, wobei camera.ui die Einrichtung übernimmt. Gib einen Hostnamen ein, wähle <strong>Cloudflare verbinden</strong>, melde dich an, um deine Zone zu autorisieren, und camera.ui erstellt Tunnel und DNS-Eintrag für dich.</li></ul><p>Nutze <strong>Verbindung testen</strong>, um die Erreichbarkeit des Servers zu bestätigen.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/remote/cloudflare.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cloudflare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cloudflare as default
};
