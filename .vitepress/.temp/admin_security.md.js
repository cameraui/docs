import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Security & 2FA","description":"","frontmatter":{"title":"Security & 2FA"},"headers":[],"relativePath":"admin/security.md","filePath":"admin/security.md","lastUpdated":1784139260000}');
const _sfc_main = { name: "admin/security.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /admin/security.md for this page in Markdown format</div><h1 id="security-2fa" tabindex="-1">Security &amp; 2FA <a class="header-anchor" href="#security-2fa" aria-label="Permalink to &quot;Security &amp; 2FA&quot;">​</a></h1><p>Each account has its own security settings, in <strong>Settings → Account</strong>. They apply to your own login, so every user can set them up.</p><h2 id="two-factor-authentication" tabindex="-1">Two-factor authentication <a class="header-anchor" href="#two-factor-authentication" aria-label="Permalink to &quot;Two-factor authentication&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/admin/2fa-setup.png",
    alt: "Two-factor authentication setup"
  }, null, _parent));
  _push(`<p>Two-factor authentication (2FA) adds a code from an authenticator app, such as Google Authenticator or Authy, on top of your password.</p><p>To turn it on, choose <strong>Set up 2FA</strong>, scan the QR code with your app (or enter the code by hand), then enter the 6-digit code to confirm. camera.ui then shows a set of <strong>backup codes</strong>; save them somewhere safe, as they&#39;re the way back in if you lose your phone.</p><p>Once enabled, you can <strong>regenerate backup codes</strong> or <strong>disable 2FA</strong>, both of which ask for a current code.</p><h3 id="remote-instances" tabindex="-1">Remote instances <a class="header-anchor" href="#remote-instances" aria-label="Permalink to &quot;Remote instances&quot;">​</a></h3><p>If the account on a remote <a href="/admin/instances">instance</a> has 2FA enabled, camera.ui asks for the 6-digit code when you add that instance, change its credentials, or switch to it. Only the code from your authenticator app works here, backup codes aren&#39;t accepted. A wrong code just asks again.</p><p>If you cancel while adding or editing, the instance is still saved, but its card shows <strong>Two-factor confirmation pending</strong>. Pick <strong>Enter code</strong> on the card to finish. Cancelling during a switch only stops the switch.</p><h2 id="biometric-login-mobile-app" tabindex="-1">Biometric login (mobile app) <a class="header-anchor" href="#biometric-login-mobile-app" aria-label="Permalink to &quot;Biometric login (mobile app)&quot;">​</a></h2><p>On a phone or tablet with Face ID or Touch ID, the app offers to save your credentials in the device&#39;s secure storage the first time you sign in successfully. Choose <strong>Enable</strong> to turn it on. If you pick <strong>Not now</strong>, the app won&#39;t ask again for that server.</p><p>Once enabled, a <strong>Sign in with Face ID</strong> button appears on the login screen, so you no longer need to type your password on that device. The <strong>Use Face ID / Touch ID</strong> switch under <strong>Settings → Account</strong> only turns biometric login off: it removes the saved credentials, and the app offers to save them again the next time you sign in.</p><h2 id="active-sessions" tabindex="-1">Active sessions <a class="header-anchor" href="#active-sessions" aria-label="Permalink to &quot;Active sessions&quot;">​</a></h2><p>The <strong>Active sessions</strong> list shows every device signed in to your account, with the current one marked. You can <strong>sign out</strong> a single device, or sign out all the others at once, which is handy if you&#39;ve logged in somewhere you no longer trust.</p><h2 id="password" tabindex="-1">Password <a class="header-anchor" href="#password" aria-label="Permalink to &quot;Password&quot;">​</a></h2><p>Change your password under <strong>Account</strong>. Changing your password or username signs you out everywhere, so you sign back in with the new details.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("admin/security.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  security as default
};
