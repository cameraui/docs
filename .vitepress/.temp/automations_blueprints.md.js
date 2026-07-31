import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blueprints & store","description":"","frontmatter":{"title":"Blueprints & store"},"headers":[],"relativePath":"automations/blueprints.md","filePath":"automations/blueprints.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "automations/blueprints.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /automations/blueprints.md for this page in Markdown format</div><h1 id="blueprints-store" tabindex="-1">Blueprints &amp; store <a class="header-anchor" href="#blueprints-store" aria-label="Permalink to &quot;Blueprints &amp; store&quot;">​</a></h1><p>A <strong>blueprint</strong> is an automation saved as a file, so you can back it up, move it between servers, or share it with someone else.</p><h2 id="exporting" tabindex="-1">Exporting <a class="header-anchor" href="#exporting" aria-label="Permalink to &quot;Exporting&quot;">​</a></h2><p>Open an automation and choose <strong>Export blueprint</strong>. camera.ui downloads a <code>.blueprint.json</code> file containing the flow&#39;s nodes and connections, but not its secrets, such as webhook keys.</p><h2 id="importing" tabindex="-1">Importing <a class="header-anchor" href="#importing" aria-label="Permalink to &quot;Importing&quot;">​</a></h2><p>On the <strong>Automations</strong> list, choose <strong>Import blueprint</strong> and pick a <code>.blueprint.json</code> file. camera.ui adds it as a new automation, <strong>disabled</strong>, so you can review and adjust it before turning it on. Imported flows get fresh internal IDs, so importing the same blueprint twice won&#39;t clash.</p><h2 id="sharing" tabindex="-1">Sharing <a class="header-anchor" href="#sharing" aria-label="Permalink to &quot;Sharing&quot;">​</a></h2><p>To share an automation, export it and send the file. The other person imports it on their own server.</p><h2 id="community-blueprints" tabindex="-1">Community blueprints <a class="header-anchor" href="#community-blueprints" aria-label="Permalink to &quot;Community blueprints&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/automations/blueprint-store.png",
    alt: "The community automations store"
  }, null, _parent));
  _push(`<p>On the <strong>Automations</strong> list, choose <strong>Browse community automations</strong> to open the store. It lists blueprints shared by the camera.ui community, with search, a category filter, and a featured row.</p><p>Opening a blueprint shows what it needs before you import it: required plugins (with a link to the plugin store if one is missing) and required inputs such as a camera, notification recipients, or a sensor. Choosing <strong>Import</strong> walks you through the blueprint&#39;s inputs. You pick your own cameras, sensors, plugins, and notification recipients from dropdowns, and you type in plain values where the blueprint needs one, such as an MQTT topic. Some fields arrive with a default already filled in, which you can overwrite. A blueprint&#39;s page doesn&#39;t list the typed values, so expect a few more fields during import. If the blueprint has no references to bind, it imports directly. Either way it lands in your automations list <strong>disabled</strong>, same as a manually imported file.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("automations/blueprints.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blueprints = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blueprints as default
};
