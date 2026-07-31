import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Logs & console","description":"","frontmatter":{"title":"Logs & console"},"headers":[],"relativePath":"admin/logs.md","filePath":"admin/logs.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "admin/logs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /admin/logs.md for this page in Markdown format</div><h1 id="logs-console" tabindex="-1">Logs &amp; console <a class="header-anchor" href="#logs-console" aria-label="Permalink to &quot;Logs &amp; console&quot;">​</a></h1><p>When something isn&#39;t working, the <strong>Logs</strong> view (in the menu, admins only) shows what the server is doing.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/admin/logs.png",
    alt: "The Logs view"
  }, null, _parent));
  _push(`<h2 id="reading-the-logs" tabindex="-1">Reading the logs <a class="header-anchor" href="#reading-the-logs" aria-label="Permalink to &quot;Reading the logs&quot;">​</a></h2><p>Logs stream live. You can:</p><ul><li>Filter by source: <strong>All</strong>, a system component (<strong>Server</strong>, <strong>go2rtc</strong>, <strong>nats</strong>, <strong>tunnel</strong>), a specific <strong>camera</strong>, or a specific <strong>plugin</strong>.</li><li><strong>Search</strong> the visible lines.</li><li><strong>Download</strong> the log to share when asking for help, <strong>copy all</strong> of it to the clipboard, or <strong>delete</strong> it.</li><li>Zoom the text in and out.</li></ul><h2 id="console" tabindex="-1">Console <a class="header-anchor" href="#console" aria-label="Permalink to &quot;Console&quot;">​</a></h2><p>The <strong>Console</strong> (in the menu, available to every user) shows the log of the app itself, not the server. Use it when the app misbehaves: a view stays empty, a stream won&#39;t play, a button does nothing.</p><p>It only collects entries while <strong>Record logs</strong> is on, and tells you when it isn&#39;t. Turn it on in <strong>Settings → Appearance</strong>. The same section has <strong>Verbose logging</strong>, which adds debug-level entries.</p><p>In the Console you can:</p><ul><li>Filter by level with the <strong>Levels</strong> menu: Debug, Log, Info, Warning, Error.</li><li><strong>Search</strong> the visible lines.</li><li><strong>Copy</strong> the output, <strong>Export / share</strong> it as a text file, or <strong>Clear</strong> it.</li></ul><p>For problems with the app, the Console export is the useful thing to attach. For problems with the server, the Logs download.</p><h2 id="terminal" tabindex="-1">Terminal <a class="header-anchor" href="#terminal" aria-label="Permalink to &quot;Terminal&quot;">​</a></h2><p>There&#39;s also a <strong>Terminal</strong> in the menu, an interactive shell on the server for advanced troubleshooting. It&#39;s available on server installations, not in the desktop app.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("admin/logs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const logs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  logs as default
};
