import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Remote access","description":"","frontmatter":{"title":"Remote access"},"headers":[],"relativePath":"remote/index.md","filePath":"remote/index.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "remote/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /remote.md for this page in Markdown format</div><h1 id="remote-access" tabindex="-1">Remote access <a class="header-anchor" href="#remote-access" aria-label="Permalink to &quot;Remote access&quot;">​</a></h1><p>By default, camera.ui is reachable on your local network. To view your cameras while you&#39;re away, you set up remote access. It&#39;s included for free and doesn&#39;t need the recording subscription.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><p>Remote access is an admin setting, under <strong>Settings → Remote Access</strong>. The page shows your current <strong>connection status</strong> (local, local network, remote, or cloud) and the address you&#39;re connected on.</p><h2 id="choosing-how-to-connect" tabindex="-1">Choosing how to connect <a class="header-anchor" href="#choosing-how-to-connect" aria-label="Permalink to &quot;Choosing how to connect&quot;">​</a></h2><p>There are two approaches:</p><ul><li><strong><a href="/remote/cloud">camera.ui Cloud</a>.</strong> The easiest option. Sign in, register your server, and reach it from anywhere with no router setup or port-forwarding. Recommended for most people, and required for the <a href="/remote/pairing">mobile apps</a> when away from home.</li><li><strong>Direct connection.</strong> Expose your server with a public address of your own, either through a <strong><a href="/remote/cloudflare">Cloudflare tunnel</a></strong> or your <strong><a href="/remote/custom-domain">own domain</a></strong>. For users who want to use their own infrastructure.</li></ul><p>You can also keep access <strong>local only</strong> by leaving remote access off.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Remote access and camera sharing are included at no cost. The subscription covers <a href="/recording/">recording (NVR)</a>, not remote access. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("remote/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
