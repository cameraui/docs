import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gesichtserkennung","description":"","frontmatter":{"title":"Gesichtserkennung"},"headers":[],"relativePath":"de/detection/faces.md","filePath":"de/detection/faces.md","lastUpdated":1785045033000}');
const _sfc_main = { name: "de/detection/faces.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/detection/faces.md for this page in Markdown format</div><h1 id="gesichtserkennung" tabindex="-1">Gesichtserkennung <a class="header-anchor" href="#gesichtserkennung" aria-label="Permalink to &quot;Gesichtserkennung&quot;">​</a></h1><p>Gesichtserkennung erkennt Gesichter an deinen Kameras, identifiziert Personen, die du angelegt hast, und gruppiert die noch unbekannten.<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> Sie baut auf der <a href="/de/detection/ai-backends">Objekterkennung</a> auf und braucht daher ein KI-Backend mit Gesichts-Unterstützung, das an der Kamera aktiviert ist. Wenn die Kamera Objekte selbst erkennt, aber nicht meldet, wo sie sind (viele Reolink-Modelle), aktiviere <a href="/de/detection/ai-backends#objekt-assistenz">Objekt-Assistenz</a>, damit Gesichter einen passenden Ausschnitt bekommen.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/faces-view.png",
    alt: "Gesichter-Ansicht mit bekannten und unbekannten Gesichtern"
  }, null, _parent));
  _push(`<h2 id="ein-bekanntes-gesicht-anlegen" tabindex="-1">Ein bekanntes Gesicht anlegen <a class="header-anchor" href="#ein-bekanntes-gesicht-anlegen" aria-label="Permalink to &quot;Ein bekanntes Gesicht anlegen&quot;">​</a></h2><p>Öffne die <strong>Gesichter</strong>-Ansicht. Sie hat zwei Bereiche: <strong>Bekannte Gesichter</strong> und <strong>Unbekannte Gesichter</strong>.</p><p>So fügst du jemanden hinzu:</p><ol><li>Wähle <strong>Gesicht hinzufügen</strong>.</li><li>Gib einen <strong>Namen</strong> ein, wähle das <strong>Gesichtserkennungs-Plugin</strong> und zieh ein klares Foto der Person hinein.</li><li>Wähle <strong>Registrieren</strong>. camera.ui prüft das Foto auf ein Gesicht und sagt dir, wenn es keines findet.</li></ol><p>Die Person wird nun in künftigen Ereignissen erkannt, ihr Name erscheint als Attribut an den Erkennungen.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/detection/faces-enroll.png",
    alt: "Gesicht-anlegen-Dialog"
  }, null, _parent));
  _push(`<h2 id="unbekannte-gesichter" tabindex="-1">Unbekannte Gesichter <a class="header-anchor" href="#unbekannte-gesichter" aria-label="Permalink to &quot;Unbekannte Gesichter&quot;">​</a></h2><p>Gesichter, die zu keiner angelegten Person passen, sammeln sich unter <strong>Unbekannte Gesichter</strong>, automatisch gruppiert, sodass Aufnahmen derselben Person zusammenliegen.</p><ul><li><strong>Weise eine Gruppe</strong> einer Person zu, um alle darin auf einmal anzulegen, oder weise ein einzelnes Gesicht zu.</li><li><strong>Verwirf</strong> Gruppen oder Gesichter, die dich nicht interessieren, oder leere alle ungruppierten Gesichter.</li></ul><h2 id="einstellungen" tabindex="-1">Einstellungen <a class="header-anchor" href="#einstellungen" aria-label="Permalink to &quot;Einstellungen&quot;">​</a></h2><p>In den <a href="/de/recording/">NVR-Einstellungen</a> hat die Gesichtserkennung:</p><ul><li><strong>Match Threshold.</strong> Wie streng der Gesichtsabgleich ist (0,3 bis 0,8).</li><li><strong>Max Training Images.</strong> Wie viele Fotos pro Person behalten werden (5 bis 15); camera.ui behält die besten.</li><li><strong>Max Unknown People.</strong> Wie viele unbekannte Gruppen behalten werden (10 bis 500). Ist das Limit erreicht, fällt die Gruppe raus, die am längsten nicht mehr gesehen wurde. Erhöhe den Wert bei stark frequentierten Außenkameras.</li></ul><p>Pro Kamera gibt es unter <a href="/de/cameras/settings">Einstellungen → Erkennung</a> zusätzlich eine <strong>Gesichts-Konfidenz</strong>: Gesichter, bei denen die KI unsicherer ist als dieser Wert, werden für Ereignisse und Automationen ignoriert (0 bis 1, Standard 0,5).</p><h2 id="erneut-scannen" tabindex="-1">Erneut scannen <a class="header-anchor" href="#erneut-scannen" aria-label="Permalink to &quot;Erneut scannen&quot;">​</a></h2><p>Nachdem du jemanden neu angelegt hast, wähle <strong>Bestehende Events erneut scannen</strong>, um vergangene Aufnahmen erneut zu prüfen und mit dem neu bekannten Gesicht zu markieren.</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p>Gesichtserkennung (der Abgleich mit deinen angelegten Personen) baut auf Aufnahmen auf und erfordert ein aktives camera.ui-Abo. Die reine Gesichts-Detection (dass ein Gesicht da ist) gehört zur kostenlosen Erkennung. <a href="#fnref1" class="footnote-backref">↩︎</a></p></li></ol></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/detection/faces.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faces = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  faces as default
};
