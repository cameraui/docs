import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"System & network","description":"","frontmatter":{"title":"System & network"},"headers":[],"relativePath":"admin/system.md","filePath":"admin/system.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "admin/system.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /admin/system.md for this page in Markdown format</div><h1 id="system-network" tabindex="-1">System &amp; network <a class="header-anchor" href="#system-network" aria-label="Permalink to &quot;System &amp; network&quot;">​</a></h1><p>The <strong>Settings → System</strong> page (admins only) handles the server&#39;s version and a few power actions.</p><h2 id="version-and-updates" tabindex="-1">Version and updates <a class="header-anchor" href="#version-and-updates" aria-label="Permalink to &quot;Version and updates&quot;">​</a></h2><p>It shows the <strong>server</strong> version, and the <strong>app</strong> version in the desktop and mobile apps. When an update is available, choose <strong>Update</strong> to install it, or <strong>Manage</strong> to pick a specific version. Pre-release versions only show up in that list when <strong>Beta updates</strong> is on, the toggle at the top of the page. See <a href="/install/updating">Updating</a> for how updates work across platforms.</p><h2 id="server-actions" tabindex="-1">Server actions <a class="header-anchor" href="#server-actions" aria-label="Permalink to &quot;Server actions&quot;">​</a></h2><ul><li><strong>Restart server.</strong> Restart camera.ui, for example after a change that needs it.</li><li><strong>Reset server.</strong> Wipe the configuration back to defaults. This removes all your settings and data and can&#39;t be undone, so it&#39;s limited to the master account.</li></ul><p>The server also offers a <strong>certificate</strong> download for its HTTPS.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Looking for the server name or network addresses? Those are under <a href="/remote/">Remote access</a>. Theme and language are under <strong>Appearance</strong>.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("admin/system.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const system = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  system as default
};
