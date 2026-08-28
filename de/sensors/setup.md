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

Die Seite hat zwei Listen. **Übernommene Sensoren** hält alles, was camera.ui verwaltet, von Plugins bereitgestellte und virtuelle. Sensoren, die eine Kamera selbst mitbringt, ihre Bewegung, Batterie oder PTZ, sind standardmäßig ausgeblendet; der Einstellungs-Button neben dem Suchfeld holt sie zurück. Jede Zeile zeigt Verbindungsstatus, Name, **ID**, Typ, lieferndes Plugin und zugewiesene Kameras. Die ID ist die Adresse, die der Sensor in dem System trägt, aus dem er kommt, und unterscheidet zwei Sensoren mit gleichem Namen; bei einer Home-Assistant-Entität ist es die Entity-ID. Sie ist ein Etikett, keine Identität: Benennst du die Entität in Home Assistant um, bleibt der Sensor derselbe, mit Kameras, Automationen und Verlauf, nur die ID ändert sich. Selbst angelegte Sensoren haben keine. Der Punkt vor dem Namen unterscheidet vier Zustände: verbunden, nicht verbunden (das Plugin ist gestoppt), nicht verfügbar (das Plugin läuft, erreicht den Sensor aber nicht, oder die Quelle meldet ihn als nicht verfügbar) und in der Quelle entfernt (die Entität wurde dort gelöscht). Von allein wird nichts gelöscht: Ein entfernter Sensor bleibt, bis du ihn löschst, damit nichts, was auf ihn verweist, still kaputtgeht. Auf schmalen Bildschirmen rutscht die ID unter den Namen, und die Suche findet Sensoren darüber. Eine Kamera-Hardware-Zeile trägt ein Schloss neben ihrer Kamera; ein Sensor, der fürs Smart Home ausgeblendet ist, ein durchgestrichenes Auge neben dem Namen. Das Icon eines Sensors leuchtet, solange er aktiv ist, du erkennst also auf einen Blick, dass Bewegung läuft, eine Tür offen ist, ein Licht an ist oder eine Türklingel läutet. Suche und sortierbare Spalten halten große Setups überschaubar. Die schwebenden Buttons legen einen virtuellen Sensor an und starten den Auswahlmodus, in dem du beliebig viele Sensoren markierst und auf einmal löschst.

**Entdeckt** darunter listet, was Plugins gefunden und angeboten haben, mit Name, ID, Typ, Raum und dem Plugin dahinter. Wähl eine Zeile und bestätige, dann wandert der Sensor in die Liste darüber und lässt sich Kameras zuweisen; mit dem Auswahl-Button in der Ecke markierst du viele auf einmal und übernimmst sie gemeinsam. Von allein kommt nichts: Ein Plugin mit einem großen Bestand dahinter, etwa Home Assistant mit hunderten Entitäten, bietet alles an, was es versteht, und überlässt dir die Auswahl. **Neu scannen** fragt die Plugins erneut, und die Liste aktualisiert sich von selbst, solange die Seite offen ist.

<Shot src="/img/sensors/sensors-page.png" alt="Sensoren-Seite mit allen Sensoren" />

Klicke auf eine Zeile, um den Sensor zu bearbeiten:

- **Name.** Wie der Sensor überall erscheint.
- **ID.** Die Adresse des Sensors in dem System, aus dem er kommt, schreibgeschützt. Wird nur gezeigt, wenn der Sensor eine hat.
- **Zugewiesene Kameras.** Wähle beliebig viele Kameras. Der Sensor erscheint bei diesen Kameras und kann deren Erkennung auslösen. Kamera-Hardware ist fest an ihre Kamera gebunden und lässt sich nicht umziehen.
- **Sensor freigeben.** Ob der Sensor in HomeKit, Home Assistant und MQTT erscheint.

Steuerbare Sensoren lassen sich direkt in diesem Dialog bedienen.

Jede Zeile bietet ein paar Aktionen:

- **Verlauf.** Die aufgezeichneten Zustandsänderungen des Sensors.
- **Sensor löschen.** Jeder übernommene oder virtuelle Sensor, verbunden oder nicht. Nur die Hardware-Sensoren einer Kamera lassen sich nicht löschen, solange ihre Kamera verbunden ist, sie kämen mit ihr zurück.[^delete]

## Virtuelle Sensoren

Hinter manchen Sensoren steckt kein Plugin: die erstellst du selbst auf der **Sensoren**-Seite. Siehe [Virtuelle Sensoren](/de/sensors/virtual).

[^delete]: Löschen entfernt den Sensor und seine Zuweisungen. Ein gelöschter übernommener Sensor taucht wieder unter Entdeckt auf; übernimmst du ihn erneut, entsteht ein neuer Sensor, und alles, was auf den alten verwies (Automationen, Smart-Home-Freigaben), muss auf den neuen zeigen.
