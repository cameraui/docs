import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Shares","description":"","frontmatter":{"title":"Shares"},"headers":[],"relativePath":"cameras/shares.md","filePath":"cameras/shares.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "cameras/shares.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /cameras/shares.md for this page in Markdown format</div><h1 id="shares" tabindex="-1">Shares <a class="header-anchor" href="#shares" aria-label="Permalink to &quot;Shares&quot;">​</a></h1><p>A share lets someone watch a single camera&#39;s live stream without a camera.ui account, using a link and an access code. Creating and managing shares is for admins.</p><h2 id="creating-a-share" tabindex="-1">Creating a share <a class="header-anchor" href="#creating-a-share" aria-label="Permalink to &quot;Creating a share&quot;">​</a></h2><p>From a camera, select <strong>Share Camera</strong> in the player toolbar, then set:</p><ul><li><strong>Source.</strong> Which stream quality to share (high, mid, or low resolution).</li><li><strong>Expires after.</strong> How long the link stays valid.</li><li><strong>Max Viewers.</strong> How many people can watch at the same time, or unlimited.</li><li><strong>Label.</strong> An optional name to recognise the share later.</li></ul><p>Select <strong>Create</strong>. camera.ui gives you a <strong>Share Link</strong> and an <strong>Access Code</strong>. Send both to the person you want to share with. The access code is shown only once, so copy it before closing.</p><p>The recipient opens the link, enters the code, and watches the live stream. They don&#39;t need a camera.ui account.</p><p>The viewer page starts with the sound off. The recipient can turn it on, and on cameras with two-way audio, use the microphone button to talk back. Picture-in-picture and fullscreen are available too.</p><div class="tip custom-block"><p class="custom-block-title">Requires camera.ui Cloud</p><p>Sharing needs your server connected to <strong>camera.ui Cloud</strong> (<a href="/remote/cloud">Settings → Remote</a>) and online. The cloud hosts the link and helps the viewer find your server, but the video travels over a <strong>direct, end-to-end-encrypted connection</strong> between the viewer and your server. It never passes through camera.ui&#39;s servers, and the access code is checked only on your own server.</p></div>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/cameras/share-dialog.png",
    alt: "Share dialog with link and access code"
  }, null, _parent));
  _push(`<h2 id="managing-shares" tabindex="-1">Managing shares <a class="header-anchor" href="#managing-shares" aria-label="Permalink to &quot;Managing shares&quot;">​</a></h2><p>A camera&#39;s <strong>Shares</strong> tab lists its active share links: the label, the shared source, when each was created, when it expires, and how many people are watching against the viewer limit. The copy button copies the share link again if you need to resend it. The access code can&#39;t be retrieved. Select <strong>Revoke</strong> to end a share immediately.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cameras/shares.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shares = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  shares as default
};
