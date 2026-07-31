import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PTZ & Autotrack","description":"","frontmatter":{"title":"PTZ & Autotrack"},"headers":[],"relativePath":"de/sensors/ptz.md","filePath":"de/sensors/ptz.md","lastUpdated":1784134587000}');
const _sfc_main = { name: "de/sensors/ptz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Shot = resolveComponent("Shot");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true" data-nosnippet>Are you an LLM? You can read better optimized documentation at /de/sensors/ptz.md for this page in Markdown format</div><h1 id="ptz-autotrack" tabindex="-1">PTZ &amp; Autotrack <a class="header-anchor" href="#ptz-autotrack" aria-label="Permalink to &quot;PTZ &amp; Autotrack&quot;">​</a></h1><p>PTZ-Kameras (Schwenken, Neigen, Zoomen) lassen sich in camera.ui bewegen, und mit <strong>Autotrack</strong> folgen sie erkannten Objekten von selbst.</p><p>PTZ ist ein <a href="/de/sensors/">Sensor</a>, den ein Plugin einer Kamera bereitstellt. Das <a href="/de/plugins/">ONVIF-Plugin</a> kann zum Beispiel PTZ für eine ONVIF-Kamera bereitstellen. Du aktivierst es für die Kamera in ihren <a href="/de/cameras/settings">Einstellungen</a> unter dem <strong>Plugins</strong>-Tab. Die Kamera zeigt dann nur die Bewegungen, die das Plugin meldet (Schwenken, Neigen, Zoomen, Presets und Home).</p><h2 id="eine-ptz-kamera-steuern" tabindex="-1">Eine PTZ-Kamera steuern <a class="header-anchor" href="#eine-ptz-kamera-steuern" aria-label="Permalink to &quot;Eine PTZ-Kamera steuern&quot;">​</a></h2><p>Öffne eine PTZ-Kamera und wähle im Player die <strong>PTZ</strong>-Schaltfläche, um die Steuerung einzublenden:</p><ul><li><strong>Schwenken und Neigen.</strong> Mit dem Joystick auf dem Bildschirm.</li><li><strong>Zoomen.</strong> Die Kamera hinein- und herauszoomen.</li><li><strong>Presets.</strong> Zu einer gespeicherten Position springen, falls deine Kamera Presets unterstützt.</li><li><strong>Home.</strong> Mit <strong>Zurück zur Startposition</strong> zur Home-Position zurückkehren.</li></ul>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/sensors/ptz-joystick.png",
    alt: "PTZ-Joystick-Steuerung"
  }, null, _parent));
  _push(`<h2 id="autotrack" tabindex="-1">Autotrack <a class="header-anchor" href="#autotrack" aria-label="Permalink to &quot;Autotrack&quot;">​</a></h2><p>Autotrack lässt eine PTZ-Kamera <strong>erkannten Objekten automatisch folgen</strong>, über Schwenken und Neigen. Da sie Erkennungen folgt, braucht sie eingerichtete <a href="/de/detection/">Objekterkennung</a> auf der Kamera.</p><p>Konfiguriere es in den <a href="/de/cameras/settings">Einstellungen</a> der Kamera unter <strong>Autotrack</strong>:</p><ul><li><strong>Autotrack aktivieren.</strong> Verfolgung einschalten.</li><li><strong>Ziel-Labels.</strong> Welchen Objekttypen die Kamera folgen soll, etwa Personen oder Fahrzeuge.</li><li><strong>Minimale Konfidenz.</strong> Nur Erkennungen über diesem Konfidenz-Wert verfolgen.</li><li><strong>Totzone.</strong> Ein zentraler Bereich, in dem sich ein Ziel bewegen kann, ohne dass die Kamera nachregelt, was ständige kleine Bewegungen vermeidet.</li><li><strong>Verfolgungsgeschwindigkeit.</strong> Wie energisch die Kamera nachzieht, um das Ziel zu zentrieren. Höher ist schneller, niedriger ist sanfter.</li><li><strong>Bewegungsvorhersage.</strong> Zielt einem bewegten Objekt um so viele Erkennungs-Frames voraus, damit die Kamera mithält statt hinterherzuhängen. Auf 0 gesetzt schaltet die Vorhersage ab.</li><li><strong>Schwenkraten-Kalibrierung.</strong> Kalibriert, wie weit ein Bewegungsschritt bei deiner Kamera schwenkt. Kleiner, wenn die Kamera vor dem Ziel stoppt, größer, wenn sie überschießt.</li><li><strong>Zur Home-Position zurückkehren.</strong> Die Kamera zur Home-Position zurückfahren, wenn länger kein Ziel erkannt wird.</li><li><strong>Wartezeit vor Rückkehr.</strong> Wie lange ohne Ziel gewartet wird, bevor die Kamera zurückkehrt.</li></ul><p>Wenn du die Kamera selbst bewegst, per Joystick oder mit der App deiner Kamera, pausiert Autotrack für 45 Sekunden und kommt dir nicht in die Quere. Die Zeit beginnt, sobald du aufhörst zu bewegen.</p>`);
  _push(ssrRenderComponent(_component_Shot, {
    src: "/img/sensors/ptz-autotrack.png",
    alt: "PTZ-Autotrack-Einstellungen"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("de/sensors/ptz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ptz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ptz as default
};
