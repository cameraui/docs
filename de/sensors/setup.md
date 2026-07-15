---
title: Sensoren einrichten
---

# Sensoren einrichten

Die meisten Sensoren stammen von [Plugins](/de/plugins/). Um einer Kamera einen Sensor zu geben, aktivierst du das Plugin, das ihn bereitstellt, und schaltest den Sensor ein, alles in den Einstellungen der Kamera. Virtuelle Sensoren sind die Ausnahme: die erstellst du selbst, ganz ohne Plugin. Beides erfordert Admin-Rechte.

## Den Plugins-Tab öffnen

Öffne die [Einstellungen](/de/cameras/settings) einer Kamera und gehe zum **Plugins**-Tab. Er ist in Kategorien gegliedert:

- **Detection.** Die Detektoren: Bewegung, Objekt, Audio, Gesicht und Kennzeichen.
- **Accessories.** Steuerbares Zubehör und Zustandssensoren, etwa Lichter, Schlösser, Schalter, Sirenen und Kontaktsensoren.
- **Core.** Single-Provider-Sensoren wie PTZ und Batterie.
- **Hub.** Smart-Home- und Plattform-Integrationen, etwa eine HomeKit-Bridge.
- **More.** Ganze Plugins für diese Kamera aktivieren oder deaktivieren.

Eine Kamera, die über ein Plugin hinzugefügt wurde (etwa ONVIF oder eine Cloud-Kamera), hat zusätzlich eine Kategorie für dieses Plugin mit dessen Einstellungen.

<Shot src="/img/sensors/plugins-tab.png" alt="Plugins-Tab der Kamera-Einstellungen" />

## Sensoren zuweisen und aktivieren

Wähle innerhalb einer Kategorie einen **Sensor-Typ** und dann das **Plugin**, das ihn bereitstellen soll. Detection-Typen nehmen jeweils einen Anbieter; Zubehör kann von mehreren Plugins kommen. Jeder aktivierte Sensor erscheint in der **Sensors**-Liste, wo du ihn umbenennen kannst.

## Einstellungen konfigurieren

Viele Plugins und Sensoren haben eigene Optionen, die direkt als Formular erscheinen: Plugin-Einstellungen, die für diese Kamera gelten, und Einstellungen pro Sensor. Änderungen wirken sofort.

Einmal aktiviert, erscheinen Sensoren in der Übersicht der Kamera und auf dem Video. Siehe [Steuerung & Status](/de/sensors/controls), um sie zu nutzen, und [PTZ & Autotrack](/de/sensors/ptz) für PTZ-Kameras.

## Virtuelle Sensoren

Hinter manchen Sensoren steckt kein Plugin: die erstellst du selbst im **Einstellungen**-Tab der Kamera. Siehe [Virtuelle Sensoren](/de/sensors/virtual).
