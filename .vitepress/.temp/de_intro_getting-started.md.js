import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Erste Schritte","description":"","frontmatter":{},"headers":[],"relativePath":"de/intro/getting-started.md","filePath":"de/intro/getting-started.md","lastUpdated":1783356206000}');
const _sfc_main = { name: "de/intro/getting-started.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/intro/getting-started.md for this page in Markdown format</div><h1 id="erste-schritte" tabindex="-1">Erste Schritte <a class="header-anchor" href="#erste-schritte" aria-label="Permalink to &quot;Erste Schritte&quot;">​</a></h1><p>Diese Anleitung bringt dich von einer frischen Installation bis zu deiner ersten Kamera. Sie setzt voraus, dass der camera.ui-Server bereits läuft. Falls nicht, beginne mit der <a href="/de/install/">Installation</a>.</p><h2 id="_1-camera-ui-offnen" tabindex="-1">1. camera.ui öffnen <a class="header-anchor" href="#_1-camera-ui-offnen" aria-label="Permalink to &quot;1. camera.ui öffnen&quot;">​</a></h2><p>camera.ui läuft über <strong>HTTPS</strong>. Wie du es öffnest, hängt von der Installationsart ab:</p><ul><li><strong>Desktop-App.</strong> Sie öffnet sich beim Start automatisch (im Server-Modus startet sie den Server für dich).</li><li><strong>Server</strong> (Docker, Proxmox, Bare-Metal). Öffne <code>https://&lt;server-ip&gt;:3443</code> im Browser, oder <code>https://localhost:3443</code> auf derselben Maschine.</li></ul><div class="warning custom-block"><p class="custom-block-title">Zertifikatswarnung beim ersten Besuch</p><p>camera.ui sichert die Verbindung mit einem <strong>selbstsignierten Zertifikat</strong>, daher zeigt dein Browser beim ersten Mal eine Warnung („Diese Verbindung ist nicht sicher&quot;). In deinem lokalen Netzwerk ist das erwartet. Wähle <strong>Erweitert → Fortfahren</strong>, um weiterzumachen. Die Warnung kannst du später entfernen, indem du das Zertifikat unter <strong>Einstellungen → System → Zertifikat</strong> installierst.</p></div>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/cert-warning.png",
    alt: "Browser-Zertifikatswarnung"
  }, null, _parent));
  _push(`<h2 id="_2-anmelden" tabindex="-1">2. Anmelden <a class="header-anchor" href="#_2-anmelden" aria-label="Permalink to &quot;2. Anmelden&quot;">​</a></h2><p>Melde dich beim ersten Mal mit dem Standard-Konto an:</p><ul><li><strong>Benutzername:</strong> <code>admin</code></li><li><strong>Passwort:</strong> <code>admin</code></li></ul><p>Diese ersetzt du im nächsten Schritt.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/login.png",
    alt: "camera.ui Login-Screen"
  }, null, _parent));
  _push(`<h2 id="_3-ersteinrichtung" tabindex="-1">3. Ersteinrichtung <a class="header-anchor" href="#_3-ersteinrichtung" aria-label="Permalink to &quot;3. Ersteinrichtung&quot;">​</a></h2><p>Bei der ersten Anmeldung führt dich camera.ui durch einen kurzen Einrichtungs-Assistenten:</p><p><strong>Willkommen → Erscheinungsbild → Konto → Fertig</strong></p><h3 id="willkommen" tabindex="-1">Willkommen <a class="header-anchor" href="#willkommen" aria-label="Permalink to &quot;Willkommen&quot;">​</a></h3><p>Wähle, wie du starten möchtest:</p><ul><li><strong>Neue Installation.</strong> Einen frischen Server einrichten. Das wählen die meisten.</li><li><strong>Aus Backup wiederherstellen.</strong> Wechsel von einer anderen camera.ui-Installation? Lade dein Backup-Archiv hoch, und camera.ui stellt deine Einstellungen wieder her und startet neu.</li></ul>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/onboarding-welcome.png",
    alt: "Onboarding-Welcome-Schritt"
  }, null, _parent));
  _push(`<h3 id="erscheinungsbild" tabindex="-1">Erscheinungsbild <a class="header-anchor" href="#erscheinungsbild" aria-label="Permalink to &quot;Erscheinungsbild&quot;">​</a></h3><p>Wähle dein <strong>Theme</strong> (hell, dunkel oder dem System folgen) und deine <strong>Sprache</strong>. Beides kannst du jederzeit später ändern.</p><h3 id="konto" tabindex="-1">Konto <a class="header-anchor" href="#konto" aria-label="Permalink to &quot;Konto&quot;">​</a></h3><p>Richte dein eigenes Konto ein. Es ersetzt das Standard-<code>admin</code> / <code>admin</code>:</p><ul><li>Einen <strong>Benutzernamen</strong></li><li>Ein <strong>Passwort</strong> (zweimal eingeben)</li><li>Optional einen Avatar</li></ul><div class="tip custom-block"><p class="custom-block-title">Wähle ein starkes Passwort</p><p>Das ist ein Administrator-Konto. Verwende ein starkes, einzigartiges Passwort, besonders wenn du camera.ui jemals von außerhalb deines lokalen Netzwerks erreichen willst.</p></div>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/onboarding-account.png",
    alt: "Onboarding-Account-Schritt"
  }, null, _parent));
  _push(`<h3 id="fertig" tabindex="-1">Fertig <a class="header-anchor" href="#fertig" aria-label="Permalink to &quot;Fertig&quot;">​</a></h3><p>Wähle <strong>Viel Spaß!</strong>, um zu speichern. camera.ui meldet dich ab, damit das neue Konto wirksam wird. Melde dich dann erneut mit dem <strong>gerade festgelegten Benutzernamen und Passwort</strong> an.</p><h2 id="_4-deine-erste-kamera-hinzufugen" tabindex="-1">4. Deine erste Kamera hinzufügen <a class="header-anchor" href="#_4-deine-erste-kamera-hinzufugen" aria-label="Permalink to &quot;4. Deine erste Kamera hinzufügen&quot;">​</a></h2><p>Nach der Anmeldung landest du auf der <strong>Startseite</strong>. Wähle <strong>Jetzt starten</strong>, oder öffne <strong>Kameras</strong>.</p><p>Die <strong>Kameras</strong>-Seite durchsucht dein Netzwerk und listet gefundene Kameras unter <strong>Entdeckt</strong>. Wähle eine aus, gib Benutzername und Passwort ein, und sie ist hinzugefügt. Falls deine Kamera nicht gefunden wird, gib ihre Stream-Daten über <strong>Kamera hinzufügen</strong> manuell ein.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/getting-started/cameras-page.png",
    alt: "Kameras-Seite mit entdeckten Kameras"
  }, null, _parent));
  _push(`<p>Die vollständige Anleitung findest du unter <strong><a href="/de/cameras/add-camera">Kamera hinzufügen</a></strong>.</p><h2 id="nachste-schritte" tabindex="-1">Nächste Schritte <a class="header-anchor" href="#nachste-schritte" aria-label="Permalink to &quot;Nächste Schritte&quot;">​</a></h2><p>Sobald deine Kamera verbunden ist:</p><ul><li><strong><a href="/de/cameras/live-view">Live-Ansicht</a></strong> — Kameras live ansehen</li><li><strong><a href="/de/recording/">Aufnahmen (NVR)</a></strong> — 24/7- oder Ereignis-Aufnahme aktivieren</li><li><strong><a href="/de/detection/">Erkennung &amp; KI</a></strong> — Bewegungs- und Objekterkennung hinzufügen</li><li><strong><a href="/de/remote/">Remote-Zugriff</a></strong> und die <strong><a href="/de/install/mobile">Mobile-Apps</a></strong> — deine Kameras von überall erreichen</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/intro/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gettingStarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gettingStarted as default
};
