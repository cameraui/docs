import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Apple TV","description":"","frontmatter":{"title":"Apple TV"},"headers":[],"relativePath":"install/tv.md","filePath":"install/tv.md","lastUpdated":null}');
const _sfc_main = { name: "install/tv.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /install/tv.md for this page in Markdown format</div><h1 id="apple-tv" tabindex="-1">Apple TV <a class="header-anchor" href="#apple-tv" aria-label="Permalink to &quot;Apple TV&quot;">​</a></h1><p>The Apple TV app puts your cameras on the big screen: live view, events, and recordings with playback.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> It&#39;s a viewer, so the server runs elsewhere (on your <a href="/install/desktop">desktop</a> or a <a href="/install/">server install</a>) and the app connects to it.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/install/tv-app.png",
    alt: "The camera.ui Apple TV app"
  }, null, _parent));
  _push(`<h2 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;Download&quot;">​</a></h2><p>Currently in <strong>beta</strong>. Join through <a href="https://testflight.apple.com/join/XWw3pmVN" target="_blank" rel="noreferrer">TestFlight</a>: install Apple&#39;s TestFlight app on your Apple TV, then open the invite.<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p><table tabindex="0"><thead><tr><th>Platform</th><th>Requirement</th></tr></thead><tbody><tr><td>Apple TV</td><td>tvOS 17 or newer</td></tr></tbody></table><h2 id="connecting-to-your-server" tabindex="-1">Connecting to your server <a class="header-anchor" href="#connecting-to-your-server" aria-label="Permalink to &quot;Connecting to your server&quot;">​</a></h2><p>The app connects straight to your server, not through camera.ui Cloud. Add a server by its address and sign in:</p><ul><li><strong>On your network.</strong> Enter the server&#39;s local address, for example <code>https://192.168.1.20:3443</code>.</li><li><strong>From anywhere.</strong> Enter your own public address, set up with a <a href="/remote/custom-domain">custom domain</a> and a <a href="/remote/reverse-proxy">reverse proxy</a>.</li></ul><p>You can add more than one server and switch between them, handy if you run separate servers at home and elsewhere.</p><h2 id="updates" tabindex="-1">Updates <a class="header-anchor" href="#updates" aria-label="Permalink to &quot;Updates&quot;">​</a></h2><p>The app updates through TestFlight during the beta, like any other Apple TV app.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>An active camera.ui subscription covers recording (NVR) and the features built on it, such as playback. Live view is free. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>The app moves to the App Store with the public release. <a href="#fnref2" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("install/tv.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tv = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tv as default
};
