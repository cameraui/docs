import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Getting started","description":"","frontmatter":{},"headers":[],"relativePath":"intro/getting-started.md","filePath":"intro/getting-started.md","lastUpdated":1783356206000}');
const _sfc_main = { name: "intro/getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /intro/getting-started.md for this page in Markdown format</div><h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h1><p>This guide takes you from a fresh install to your first camera. It assumes the camera.ui server is already running. If not, start with <a href="/install/">Installation</a>.</p><h2 id="_1-open-camera-ui" tabindex="-1">1. Open camera.ui <a class="header-anchor" href="#_1-open-camera-ui" aria-label="Permalink to &quot;1. Open camera.ui&quot;">​</a></h2><p>camera.ui runs over <strong>HTTPS</strong>. How you open it depends on how you installed it:</p><ul><li><strong>Desktop app.</strong> It opens automatically when you launch it (in Server mode it starts the server for you).</li><li><strong>Server</strong> (Docker, Proxmox, bare-metal). Open <code>https://&lt;server-ip&gt;:3443</code> in your browser, or <code>https://localhost:3443</code> on the same machine.</li></ul><div class="warning custom-block"><p class="custom-block-title">First-visit certificate warning</p><p>camera.ui secures the connection with a <strong>self-signed certificate</strong>, so your browser shows a &quot;your connection is not private&quot; warning the first time. This is expected on your local network. Choose <strong>Advanced → Proceed</strong> to continue. You can remove the warning later by installing the certificate from <strong>Settings → System → Certificate</strong>.</p></div>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/cert-warning.png",
    alt: "Browser certificate warning"
  }, null, _parent));
  _push(`<h2 id="_2-sign-in" tabindex="-1">2. Sign in <a class="header-anchor" href="#_2-sign-in" aria-label="Permalink to &quot;2. Sign in&quot;">​</a></h2><p>The first time, sign in with the default account:</p><ul><li><strong>Username:</strong> <code>admin</code></li><li><strong>Password:</strong> <code>admin</code></li></ul><p>You&#39;ll replace these in the next step.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/login.png",
    alt: "camera.ui login screen"
  }, null, _parent));
  _push(`<h2 id="_3-first-run-setup" tabindex="-1">3. First-run setup <a class="header-anchor" href="#_3-first-run-setup" aria-label="Permalink to &quot;3. First-run setup&quot;">​</a></h2><p>On first sign-in, camera.ui walks you through a short setup wizard:</p><p><strong>Welcome → Appearance → Account → Finish</strong></p><h3 id="welcome" tabindex="-1">Welcome <a class="header-anchor" href="#welcome" aria-label="Permalink to &quot;Welcome&quot;">​</a></h3><p>Choose how to start:</p><ul><li><strong>New Installation.</strong> Set up a fresh server. This is what most people pick.</li><li><strong>Restore from Backup.</strong> Moving from another camera.ui install? Upload your backup archive, and camera.ui restores your settings and restarts.</li></ul>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/onboarding-welcome.png",
    alt: "Onboarding welcome step"
  }, null, _parent));
  _push(`<h3 id="appearance" tabindex="-1">Appearance <a class="header-anchor" href="#appearance" aria-label="Permalink to &quot;Appearance&quot;">​</a></h3><p>Pick your <strong>theme</strong> (light, dark, or follow the system) and your <strong>language</strong>. You can change both anytime later.</p><h3 id="account" tabindex="-1">Account <a class="header-anchor" href="#account" aria-label="Permalink to &quot;Account&quot;">​</a></h3><p>Set up your own account. This replaces the default <code>admin</code> / <code>admin</code>:</p><ul><li>A <strong>username</strong></li><li>A <strong>password</strong> (entered twice)</li><li>Optionally, an avatar</li></ul><div class="tip custom-block"><p class="custom-block-title">Choose a strong password</p><p>This is an administrator account. Use a strong, unique password, especially if you ever plan to reach camera.ui from outside your local network.</p></div>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/onboarding-account.png",
    alt: "Onboarding account step"
  }, null, _parent));
  _push(`<h3 id="finish" tabindex="-1">Finish <a class="header-anchor" href="#finish" aria-label="Permalink to &quot;Finish&quot;">​</a></h3><p>Select <strong>Enjoy!</strong> to save. camera.ui signs you out so the new account takes effect, then sign back in with the <strong>username and password you just set</strong>.</p><h2 id="_4-add-your-first-camera" tabindex="-1">4. Add your first camera <a class="header-anchor" href="#_4-add-your-first-camera" aria-label="Permalink to &quot;4. Add your first camera&quot;">​</a></h2><p>After signing in you land on the <strong>Home</strong> screen. Select <strong>Get started</strong>, or open <strong>Cameras</strong>.</p><p>The <strong>Cameras</strong> page scans your network and lists the cameras it finds under <strong>Discovered</strong>. Select one, enter its username and password, and it&#39;s added. If your camera isn&#39;t found, use <strong>Add camera</strong> to enter its stream details by hand.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/cameras-page.png",
    alt: "Cameras page with discovered cameras"
  }, null, _parent));
  _push(`<p>For the full walkthrough, see <strong><a href="/cameras/add-camera">Adding a camera</a></strong>.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>Once your camera is connected:</p><ul><li><strong><a href="/cameras/live-view">Live view</a></strong> — watch your cameras live</li><li><strong><a href="/recording/">Recording (NVR)</a></strong> — turn on 24/7 or event recording</li><li><strong><a href="/detection/">Detection &amp; AI</a></strong> — add motion and object detection</li><li><strong><a href="/remote/">Remote access</a></strong> and the <strong><a href="/install/mobile">mobile apps</a></strong> — reach your cameras from anywhere</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("intro/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};
