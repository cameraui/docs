import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Remote-Zugriff","description":"","frontmatter":{"title":"Remote-Zugriff"},"headers":[],"relativePath":"de/remote/index.md","filePath":"de/remote/index.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/remote/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/remote.md for this page in Markdown format</div><h1 id="remote-zugriff" tabindex="-1">Remote-Zugriff <a class="header-anchor" href="#remote-zugriff" aria-label="Permalink to &quot;Remote-Zugriff&quot;">​</a></h1><p>Standardmäßig ist camera.ui in deinem lokalen Netzwerk erreichbar. Um deine Kameras von unterwegs anzusehen, richtest du Remote-Zugriff ein. Er ist kostenlos enthalten und braucht das Aufnahme-Abo nicht.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p><p>Remote-Zugriff ist eine Admin-Einstellung unter <strong>Einstellungen → Remote Zugriff</strong>. Die Seite zeigt deinen aktuellen <strong>Verbindungsstatus</strong> (lokal, lokales Netzwerk, remote oder Cloud) und die Adresse, über die du verbunden bist.</p><h2 id="wie-du-dich-verbindest" tabindex="-1">Wie du dich verbindest <a class="header-anchor" href="#wie-du-dich-verbindest" aria-label="Permalink to &quot;Wie du dich verbindest&quot;">​</a></h2><p>Es gibt zwei Ansätze:</p><ul><li><strong><a href="/de/remote/cloud">camera.ui Cloud</a>.</strong> Die einfachste Option. Anmelden, Server registrieren und von überall erreichen, ohne Router-Einrichtung oder Port-Forwarding. Für die meisten empfohlen und für die <a href="/de/remote/pairing">Mobile-Apps</a> von unterwegs erforderlich.</li><li><strong>Direkte Verbindung.</strong> Den Server mit einer eigenen öffentlichen Adresse bereitstellen, entweder über einen <strong><a href="/de/remote/cloudflare">Cloudflare-Tunnel</a></strong> oder deine <strong><a href="/de/remote/custom-domain">eigene Domain</a></strong>. Für Nutzer, die ihre eigene Infrastruktur verwenden wollen.</li></ul><p>Du kannst den Zugriff auch <strong>nur lokal</strong> halten, indem du Remote-Zugriff aus lässt.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Remote-Zugriff und Kamera-Freigaben sind kostenlos enthalten. Das Abo deckt <a href="/de/recording/">Aufnahmen (NVR)</a> ab, nicht den Remote-Zugriff. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/remote/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
