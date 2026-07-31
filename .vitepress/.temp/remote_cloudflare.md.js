import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cloudflare tunnel","description":"","frontmatter":{"title":"Cloudflare tunnel"},"headers":[],"relativePath":"remote/cloudflare.md","filePath":"remote/cloudflare.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "remote/cloudflare.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /remote/cloudflare.md for this page in Markdown format</div><h1 id="cloudflare-tunnel" tabindex="-1">Cloudflare tunnel <a class="header-anchor" href="#cloudflare-tunnel" aria-label="Permalink to &quot;Cloudflare tunnel&quot;">​</a></h1><p>A Cloudflare tunnel gives your server a public address through Cloudflare&#39;s network, without opening ports on your router. In <strong>Settings → Remote</strong>, set the <strong>Direct connection</strong> method to <strong>Cloudflare</strong>, then pick a variant:</p><ul><li><strong>Quick Tunnel.</strong> A temporary address with no Cloudflare account needed. Good for a quick test. The address changes each time.</li><li><strong>Named Tunnel (Token).</strong> Use your own domain. Create a tunnel in your Cloudflare dashboard and give it a public hostname that points at your server, for example <code>https://192.168.1.10:3443</code>. The server uses a self-signed certificate, so turn on <strong>No TLS Verify</strong> in the tunnel&#39;s origin settings. Then paste <strong>Hostname</strong> and <strong>Tunnel Token</strong> here. Your domain must already be a zone in your Cloudflare account.</li><li><strong>Named Tunnel (OAuth).</strong> Use your own domain, with camera.ui doing the setup. Enter a hostname, choose <strong>Connect Cloudflare</strong>, sign in to authorise your zone, and camera.ui creates the tunnel and DNS record for you.</li></ul><p>Use <strong>Test connection</strong> to confirm the server is reachable.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("remote/cloudflare.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cloudflare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cloudflare as default
};
