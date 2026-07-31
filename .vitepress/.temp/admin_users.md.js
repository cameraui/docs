import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Users & roles","description":"","frontmatter":{"title":"Users & roles"},"headers":[],"relativePath":"admin/users.md","filePath":"admin/users.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "admin/users.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /admin/users.md for this page in Markdown format</div><h1 id="users-roles" tabindex="-1">Users &amp; roles <a class="header-anchor" href="#users-roles" aria-label="Permalink to &quot;Users &amp; roles&quot;">​</a></h1><p>camera.ui supports multiple user accounts, each with a role that decides what they can do. Manage them in <strong>Settings → Users</strong> (admins only).</p><h2 id="roles" tabindex="-1">Roles <a class="header-anchor" href="#roles" aria-label="Permalink to &quot;Roles&quot;">​</a></h2><p>There are three roles:</p><ul><li><strong>User.</strong> Day-to-day access: live view, recordings, Camview, and their own account settings.</li><li><strong>Admin.</strong> Everything a user can do, plus managing cameras, plugins, automations, users, and all server settings.</li><li><strong>Master.</strong> The main account. The same as an admin, plus it can reset the server. It can&#39;t be deleted, and its role can&#39;t be changed, not even by itself. Only the master can edit its own username, password and avatar; other admins get an error if they try.</li></ul><p>Access is decided by role, not per camera; there are no per-camera permissions.</p><h2 id="managing-users" tabindex="-1">Managing users <a class="header-anchor" href="#managing-users" aria-label="Permalink to &quot;Managing users&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/admin/users.png",
    alt: "The registered users list"
  }, null, _parent));
  _push(`<p>In <strong>Settings → Users</strong>, the <strong>Registered users</strong> list shows everyone. From there you can:</p><ul><li><strong>Create a new user</strong>, setting a username, password, and role (user or admin).</li><li><strong>Edit</strong> a user to change their details or role.</li><li><strong>Remove</strong> a user.</li></ul><h2 id="the-first-account" tabindex="-1">The first account <a class="header-anchor" href="#the-first-account" aria-label="Permalink to &quot;The first account&quot;">​</a></h2><p>camera.ui starts with a single master account (username <code>admin</code>, password <code>admin</code>). Change its password right away; you&#39;re prompted to on first login.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("admin/users.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const users = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  users as default
};
