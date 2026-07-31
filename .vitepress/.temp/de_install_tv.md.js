import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Apple TV","description":"","frontmatter":{"title":"Apple TV"},"headers":[],"relativePath":"de/install/tv.md","filePath":"de/install/tv.md","lastUpdated":null}');
const _sfc_main = { name: "de/install/tv.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/install/tv.md for this page in Markdown format</div><h1 id="apple-tv" tabindex="-1">Apple TV <a class="header-anchor" href="#apple-tv" aria-label="Permalink to &quot;Apple TV&quot;">​</a></h1><p>Die Apple-TV-App bringt deine Kameras auf den großen Bildschirm: Live-Ansicht, Ereignisse und Aufnahmen mit Wiedergabe.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> Sie ist ein Viewer, der Server läuft also woanders (auf deinem <a href="/de/install/desktop">Desktop</a> oder einer <a href="/de/install/">Server-Installation</a>), und die App verbindet sich mit ihm.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/install/tv-app.png",
    alt: "Die camera.ui Apple-TV-App"
  }, null, _parent));
  _push(`<h2 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;Download&quot;">​</a></h2><p>Derzeit in der <strong>Beta</strong>. Tritt über <a href="https://testflight.apple.com/join/XWw3pmVN" target="_blank" rel="noreferrer">TestFlight</a> bei: Apples TestFlight-App auf dem Apple TV installieren, dann die Einladung öffnen.<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p><table tabindex="0"><thead><tr><th>Plattform</th><th>Voraussetzung</th></tr></thead><tbody><tr><td>Apple TV</td><td>tvOS 17 oder neuer</td></tr></tbody></table><h2 id="mit-deinem-server-verbinden" tabindex="-1">Mit deinem Server verbinden <a class="header-anchor" href="#mit-deinem-server-verbinden" aria-label="Permalink to &quot;Mit deinem Server verbinden&quot;">​</a></h2><p>Die App verbindet sich direkt mit deinem Server, nicht über camera.ui Cloud. Füge einen Server über seine Adresse hinzu und melde dich an:</p><ul><li><strong>Im lokalen Netzwerk.</strong> Gib die lokale Adresse des Servers ein, zum Beispiel <code>https://192.168.1.20:3443</code>.</li><li><strong>Von überall.</strong> Gib deine eigene öffentliche Adresse ein, eingerichtet mit einer <a href="/de/remote/custom-domain">eigenen Domain</a> und einem <a href="/de/remote/reverse-proxy">Reverse-Proxy</a>.</li></ul><p>Du kannst mehrere Server hinzufügen und zwischen ihnen wechseln, praktisch, wenn du zu Hause und woanders getrennte Server betreibst.</p><h2 id="updates" tabindex="-1">Updates <a class="header-anchor" href="#updates" aria-label="Permalink to &quot;Updates&quot;">​</a></h2><p>Die App aktualisiert sich während der Beta über TestFlight, wie jede andere Apple-TV-App.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Ein aktives camera.ui-Abo deckt Aufnahmen (NVR) und die darauf aufbauenden Funktionen ab, etwa Wiedergabe. Die Live-Ansicht ist kostenlos. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li><li id="fn2" class="footnote-item"><p>Mit dem öffentlichen Release wechselt die App in den App Store. <a href="#fnref2" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/install/tv.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tv = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tv as default
};
