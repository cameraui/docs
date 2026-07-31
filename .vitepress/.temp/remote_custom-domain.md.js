import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Custom domain","description":"","frontmatter":{"title":"Custom domain"},"headers":[],"relativePath":"remote/custom-domain.md","filePath":"remote/custom-domain.md","lastUpdated":1785043977000}');
const _sfc_main = { name: "remote/custom-domain.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /remote/custom-domain.md for this page in Markdown format</div><h1 id="custom-domain" tabindex="-1">Custom domain <a class="header-anchor" href="#custom-domain" aria-label="Permalink to &quot;Custom domain&quot;">​</a></h1><p>If you&#39;d rather expose the server yourself, point your own domain at it. In <strong>Settings → Remote</strong>, set the <strong>direct connection</strong> method to <strong>Custom domain</strong> and enter the <strong>URL</strong> where the server is reachable, for example <code>https://nvr.example.com</code>.</p><p>This assumes you&#39;ve already made the server reachable at that address, through your own DNS and a reverse proxy or port-forwarding on your router. camera.ui doesn&#39;t change your network for you here; it records the public address to use. If you go the reverse-proxy route, <a href="/remote/reverse-proxy">Reverse proxy</a> covers what the proxy has to forward.</p><p>Choose <strong>Save</strong> to store the address, then use <strong>Test connection</strong>. The test checks the saved address, so a URL you&#39;ve typed but not saved yet won&#39;t be picked up.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you don&#39;t run your own domain or reverse proxy, <a href="/remote/cloud">camera.ui Cloud</a> or a <a href="/remote/cloudflare">Cloudflare tunnel</a> is simpler, since neither needs router changes.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("remote/custom-domain.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const customDomain = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  customDomain as default
};
