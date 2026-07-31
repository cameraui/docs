import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PTZ & autotrack","description":"","frontmatter":{"title":"PTZ & autotrack"},"headers":[],"relativePath":"sensors/ptz.md","filePath":"sensors/ptz.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "sensors/ptz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /sensors/ptz.md for this page in Markdown format</div><h1 id="ptz-autotrack" tabindex="-1">PTZ &amp; autotrack <a class="header-anchor" href="#ptz-autotrack" aria-label="Permalink to &quot;PTZ &amp; autotrack&quot;">​</a></h1><p>PTZ cameras (pan, tilt, zoom) can be moved from camera.ui, and with <strong>autotrack</strong> they follow detected objects on their own.</p><p>PTZ is a <a href="/sensors/">sensor</a> that a plugin provides to a camera. The <a href="/plugins/">ONVIF plugin</a>, for example, can provide PTZ for an ONVIF camera. You enable it for the camera in its <a href="/cameras/settings">settings</a>, under the <strong>Plugins</strong> tab. The camera then shows only the moves the plugin reports (pan, tilt, zoom, presets, and home).</p><h2 id="controlling-a-ptz-camera" tabindex="-1">Controlling a PTZ camera <a class="header-anchor" href="#controlling-a-ptz-camera" aria-label="Permalink to &quot;Controlling a PTZ camera&quot;">​</a></h2><p>Open a PTZ camera and select the <strong>PTZ</strong> button in the player to show the controls:</p><ul><li><strong>Pan and tilt.</strong> Use the on-screen joystick.</li><li><strong>Zoom.</strong> Zoom the camera in and out.</li><li><strong>Presets.</strong> Jump to a saved position, if your camera supports presets.</li><li><strong>Home.</strong> Return to the home position with <strong>Go to home</strong>.</li></ul>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/sensors/ptz-joystick.png",
    alt: "PTZ joystick control"
  }, null, _parent));
  _push(`<h2 id="autotrack" tabindex="-1">Autotrack <a class="header-anchor" href="#autotrack" aria-label="Permalink to &quot;Autotrack&quot;">​</a></h2><p>Autotrack lets a PTZ camera <strong>follow detected objects automatically</strong> using its pan and tilt. Because it follows detections, it needs <a href="/detection/">object detection</a> set up on the camera.</p><p>Configure it in the camera&#39;s <a href="/cameras/settings">settings</a>, under <strong>Autotrack</strong>:</p><ul><li><strong>Enable autotrack.</strong> Turn tracking on.</li><li><strong>Target labels.</strong> Which object types the camera should follow, such as people or vehicles.</li><li><strong>Minimum confidence.</strong> Only track detections above this confidence score.</li><li><strong>Dead zone.</strong> A central area where a target can move without the camera adjusting, which avoids constant small movements.</li><li><strong>Tracking speed.</strong> How aggressively the camera moves to re-center the target. Higher is snappier, lower is smoother.</li><li><strong>Motion prediction.</strong> Aims ahead of a moving target by this many detection frames, so the camera keeps pace instead of trailing. Set it to 0 to turn prediction off.</li><li><strong>Pan-rate calibration.</strong> Calibrates how far each move step travels on your camera. Lower it if the camera stops short of the target, raise it if it overshoots.</li><li><strong>Return to home.</strong> Move the camera back to its home position when no target is seen for a while.</li><li><strong>Wait before returning.</strong> How long to wait without a target before returning home.</li></ul><p>If you move the camera yourself, with the joystick or your camera&#39;s own app, autotrack pauses for 45 seconds so it doesn&#39;t fight you. The countdown starts when you stop moving.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/sensors/ptz-autotrack.png",
    alt: "PTZ autotrack settings"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sensors/ptz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ptz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ptz as default
};
