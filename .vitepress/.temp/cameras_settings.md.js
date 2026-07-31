import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Camera settings","description":"","frontmatter":{"title":"Camera settings"},"headers":[],"relativePath":"cameras/settings.md","filePath":"cameras/settings.md","lastUpdated":1785427198000}');
const _sfc_main = { name: "cameras/settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /cameras/settings.md for this page in Markdown format</div><h1 id="camera-settings" tabindex="-1">Camera settings <a class="header-anchor" href="#camera-settings" aria-label="Permalink to &quot;Camera settings&quot;">​</a></h1><p>Every camera has a settings drawer where you configure how it connects, what it detects, and how it behaves. Open it with the <strong>Settings</strong> (cog) button on the camera. It is available to admins.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/cameras/settings-drawer.png",
    alt: "Camera settings drawer"
  }, null, _parent));
  _push(`<p>The drawer has four tabs.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The camera&#39;s status and device info, plus a live view of its sensors and accessories. Read-only sensors (contact, temperature, motion, and so on) show their current state, and you can operate the controllable ones right here, such as turning a light on, locking a door, or arming a security system.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p>Add, change, and remove the camera&#39;s stream <a href="/cameras/add-camera#sources-and-roles">sources</a> here, just like when <a href="/cameras/add-camera">adding a camera</a>: each source&#39;s name, role (high, mid, low resolution, or snapshot), stream URLs, and options such as hot mode, preload, and mute audio (drops the audio track from that source). Each source also shows its live status, detected codecs, and stream URL.</p><h2 id="settings" tabindex="-1">Settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;Settings&quot;">​</a></h2><p>The main configuration form, grouped into sections:</p><ul><li><strong>General.</strong> Name, room, camera type, and whether the camera is disabled (also where you remove a camera).</li><li><strong>Branding.</strong> Manufacturer, model, and other device details.</li><li><strong>Interface.</strong> The <a href="/cameras/live-view#streaming-modes">streaming mode and source</a>, and the display aspect ratio. Pick a preset (16:9, 4:3, 1:1, and more) or type a custom <code>width:height</code> like <code>21:9</code>, with a live preview of the camera framed at that ratio.</li><li><strong>Detection.</strong> Per-camera tuning for motion, object, audio, and sensor detection (sensitivity, confidence, timeouts, triggers, and stationary-object handling), plus a snooze switch. See <a href="/detection/">Detection &amp; AI</a>.</li><li><strong>Autotrack.</strong> Let a PTZ camera follow detected objects automatically. See <a href="/sensors/ptz">PTZ &amp; autotrack</a>.</li><li><strong>Zones.</strong> Draw detection zones, ignore zones, and crossing lines. See <a href="/cameras/zones-and-masks">Zones &amp; lines</a>.</li><li><strong>Snapshot.</strong> How still images are refreshed and cached (auto-refresh, cache time, and refresh interval).</li><li><strong>Frame Worker.</strong> The frame rate used for analysis, plus whether event thumbnails are captured from the highest-resolution stream.</li></ul><h2 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;Plugins&quot;">​</a></h2><p>Enable plugins for this camera and choose which provides each of its <a href="/sensors/">sensors and accessories</a>. This is also where you turn individual sensors on or off and adjust the settings a plugin offers per camera. See <a href="/sensors/setup">Set up sensors</a> for the full walkthrough.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("cameras/settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  settings as default
};
