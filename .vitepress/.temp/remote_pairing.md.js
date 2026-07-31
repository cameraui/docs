import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pairing mobile apps","description":"","frontmatter":{"title":"Pairing mobile apps"},"headers":[],"relativePath":"remote/pairing.md","filePath":"remote/pairing.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "remote/pairing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /remote/pairing.md for this page in Markdown format</div><h1 id="pairing-mobile-apps" tabindex="-1">Pairing mobile apps <a class="header-anchor" href="#pairing-mobile-apps" aria-label="Permalink to &quot;Pairing mobile apps&quot;">​</a></h1><p>The <a href="/install/mobile">mobile apps</a> connect to your server through camera.ui Cloud, so you can reach it from anywhere. You pair the app with your server once.</p><h2 id="pairing" tabindex="-1">Pairing <a class="header-anchor" href="#pairing" aria-label="Permalink to &quot;Pairing&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/remote/pairing.png",
    alt: "Server pairing QR code and pair code"
  }, null, _parent));
  _push(`<ol><li>Make sure <a href="/remote/cloud">camera.ui Cloud</a> is enabled on the server.</li><li>On the server, open <strong>Settings → Remote Access</strong> and choose <strong>Register server</strong>. A <strong>QR code</strong>, a <strong>pair code</strong>, and a <strong>pair URL</strong> appear.</li><li>Scan the QR code with your phone&#39;s camera, or open the pair URL in a browser. The camera.ui sign-in page opens. Sign in to your camera.ui account. The code is valid for 10 minutes.</li><li>Press <strong>Connect</strong>. The server appears in your account.</li></ol><h2 id="connecting" tabindex="-1">Connecting <a class="header-anchor" href="#connecting" aria-label="Permalink to &quot;Connecting&quot;">​</a></h2><p>Once paired, the app shows your servers in the cloud server list. Pick one to connect. If you have several servers, you can switch between them in the app.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("remote/pairing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pairing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pairing as default
};
