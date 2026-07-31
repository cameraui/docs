import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Instances","description":"","frontmatter":{"title":"Instances"},"headers":[],"relativePath":"admin/instances.md","filePath":"admin/instances.md","lastUpdated":1784139260000}');
const _sfc_main = { name: "admin/instances.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /admin/instances.md for this page in Markdown format</div><h1 id="instances" tabindex="-1">Instances <a class="header-anchor" href="#instances" aria-label="Permalink to &quot;Instances&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/admin/instances.png",
    alt: "The instances list"
  }, null, _parent));
  _push(`<p>An <strong>instance</strong> is another camera.ui server saved here, so you can switch to it without logging in again. Manage them in <strong>Instances</strong> (in the menu). Instances are separate, full servers; to make a second machine share the load of <em>this</em> server instead, see <a href="/admin/workers">Workers</a>.</p><ul><li><strong>Add an instance</strong> with a name, its URL, and a username and password for it.</li><li><strong>Two-factor accounts.</strong> If the account on that server uses two-factor authentication, camera.ui asks for the 6-digit code from your authenticator app when you add the instance or switch to it.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> Until you enter it, the card shows a <strong>2FA</strong> tag and <strong>Two-factor confirmation pending</strong>. Use <strong>Enter code</strong> in the card&#39;s menu to finish.</li><li>Each instance card shows its status: version, uptime, cameras, whether it&#39;s online and recording, and resource use.</li></ul><p>When you have more than one, an <strong>instance switcher</strong> appears in the top bar. Pick a server to jump to it, or return to &quot;This Server&quot;.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Switching to an instance over plain HTTP passes your session in the address, so camera.ui warns you first. Use HTTPS where you can.</p></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>The prompt takes the 6-digit code from the app only, not a backup code. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("admin/instances.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const instances = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  instances as default
};
