---
title: Sensoren einrichten
---

# Sensoren einrichten

Die meisten Sensoren stammen von [Plugins](/de/plugins/). Um einer Kamera einen Sensor zu geben, aktivierst du das Plugin, das ihn bereitstellt, und schaltest den Sensor ein, alles in den Einstellungen der Kamera. Jeder Sensor im System, auch die ohne Kamera, wird danach auf der **Sensoren**-Seite verwaltet. Beides erfordert Admin-Rechte.

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

Eine Türklingel, die einer Kamera zugewiesen ist, startet bei jedem Läuten automatisch ein Kamera-Ereignis, ohne dass du sie unter Detection aktivieren musst. Türklingeln, die du vor diesem Release zugewiesen hast, behalten ihre aktuelle Einstellung.

## Einstellungen konfigurieren

Viele Plugins und Sensoren haben eigene Optionen, die direkt als Formular erscheinen: Plugin-Einstellungen, die für diese Kamera gelten, und Einstellungen pro Sensor. Änderungen wirken sofort.

Einmal aktiviert, erscheinen Sensoren in der Übersicht der Kamera und auf dem Video. Siehe [Steuerung & Status](/de/sensors/controls), um sie zu nutzen, und [PTZ & Autotrack](/de/sensors/ptz) für PTZ-Kameras.

## Die Sensoren-Seite

Die **Sensoren**-Seite listet die Sensoren, die du verwaltest: von Plugins bereitgestellte und virtuelle. Sensoren, die eine Kamera selbst mitbringt, ihre Bewegung, Batterie oder PTZ, sind standardmäßig ausgeblendet; der Einstellungs-Button neben dem Suchfeld holt sie zurück. Jede Zeile zeigt Verbindungsstatus, Name, **ID**, Typ, lieferndes Plugin und zugewiesene Kameras. Die ID ist die Kennung, die der Sensor in dem System trägt, aus dem er kommt, und unterscheidet zwei Sensoren mit gleichem Namen; bei einer Home-Assistant-Entität ist es die Entity-ID. Selbst angelegte Sensoren haben keine. Auf schmalen Bildschirmen rutscht die ID unter den Namen, und die Suche findet Sensoren darüber. Eine Kamera-Hardware-Zeile trägt ein Schloss neben ihrer Kamera; ein Sensor, der fürs Smart Home ausgeblendet ist, ein durchgestrichenes Auge neben dem Namen. Zwei schwebende Buttons wechseln zwischen der Tabelle und einer Kartenansicht und starten den Auswahlmodus, in dem du beliebig viele Sensoren markierst und auf einmal ausblendest, wieder einblendest oder löschst. Das Icon eines Sensors leuchtet, solange er aktiv ist, du erkennst also auf einen Blick, dass Bewegung läuft, eine Tür offen ist, ein Licht an ist oder eine Türklingel läutet. Suche und sortierbare Spalten halten große Setups überschaubar.

<Shot src="/img/sensors/sensors-page.png" alt="Sensoren-Seite mit allen Sensoren" />

Klicke auf eine Zeile, um den Sensor zu bearbeiten:

- **Name.** Wie der Sensor überall erscheint.
- **ID.** Die Kennung des Sensors in dem System, aus dem er kommt, schreibgeschützt. Wird nur gezeigt, wenn der Sensor eine hat.
- **Zugewiesene Kameras.** Wähle beliebig viele Kameras. Der Sensor erscheint bei diesen Kameras und kann deren Erkennung auslösen. Kamera-Hardware ist fest an ihre Kamera gebunden und lässt sich nicht umziehen.
- **Sensor freigeben.** Ob der Sensor in HomeKit, Home Assistant und MQTT erscheint.

Steuerbare Sensoren lassen sich direkt in diesem Dialog bedienen.

Jede Zeile bietet ein paar Aktionen:

- **Verlauf.** Die aufgezeichneten Zustandsänderungen des Sensors.
- **Sensor ausblenden.** Nimmt die Zeile aus der Liste, für Sensoren, die dich nicht interessieren. **Ausgeblendete anzeigen** unten holt sie zurück; am Sensor selbst ändert das nichts.
- **Sensor löschen.** Nur virtuelle Sensoren und getrennte Plugin-Überbleibsel lassen sich löschen. Ein Sensor, dessen Plugin verbunden ist, käme beim nächsten Verbinden ohnehin zurück, deshalb ist der Button dort deaktiviert.[^delete]

## Virtuelle Sensoren

Hinter manchen Sensoren steckt kein Plugin: die erstellst du selbst auf der **Sensoren**-Seite. Siehe [Virtuelle Sensoren](/de/sensors/virtual).

[^delete]: Löschen entfernt den Sensor und seine Zuweisungen. Ein gelöschter Plugin-Sensor wird als neuer Sensor angelegt, wenn sein Plugin ihn erneut registriert, und alles, was auf den alten verwies (Automationen, Smart-Home-Freigaben), muss auf den neuen zeigen.
