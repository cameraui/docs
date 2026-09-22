---
title: Sensoren einrichten
---

# Sensoren einrichten

Die meisten Sensoren stammen von [Plugins](/de/plugins/): Du aktivierst das liefernde Plugin und den Sensor in den Einstellungen der Kamera. Jeder Sensor, auch die ohne Kamera, wird auf der **Sensoren**-Seite verwaltet. Beides erfordert Admin-Rechte.

## Den Plugins-Tab öffnen

Der **Plugins**-Tab in den [Einstellungen](/de/cameras/settings) einer Kamera ist in Kategorien gegliedert:

- **Detection.** Die Detektoren: Bewegung, Objekt, Audio, Gesicht und Kennzeichen.
- **Accessories.** Steuerbares Zubehör und Zustandssensoren, etwa Lichter, Schlösser, Schalter, Sirenen und Kontaktsensoren.
- **Core.** Single-Provider-Sensoren wie PTZ und Batterie.
- **Hub.** Smart-Home- und Plattform-Integrationen, etwa eine HomeKit-Bridge.
- **More.** Ganze Plugins für diese Kamera aktivieren oder deaktivieren.

Eine Kamera, die über ein Plugin hinzugefügt wurde (etwa ONVIF oder Reolink), hat zusätzlich eine Kategorie für dieses Plugin mit dessen Einstellungen.

<Shot src="/img/sensors/plugins-tab.png" alt="Plugins-Tab der Kamera-Einstellungen" />

## Sensoren zuweisen und aktivieren

Wähle innerhalb einer Kategorie einen **Sensor-Typ** und dann das **Plugin**, das ihn bereitstellen soll. Detection-Typen nehmen jeweils einen Anbieter; Zubehör kann von mehreren Plugins kommen. Jeder aktivierte Sensor erscheint in der **Sensors**-Liste, wo du ihn umbenennen kannst.

Eine Türklingel, die einer Kamera zugewiesen ist, startet bei jedem Läuten ein Kamera-Ereignis, ohne dass du sie unter Detection aktivieren musst.

## Einstellungen konfigurieren

Plugin-Einstellungen für diese Kamera und Einstellungen pro Sensor erscheinen an derselben Stelle als Formular. Änderungen wirken sofort.

Aktivierte Sensoren erscheinen in der Übersicht der Kamera und auf dem Video. Siehe [Steuerung & Status](/de/sensors/controls), um sie zu nutzen, und [PTZ & Autotrack](/de/sensors/ptz) für PTZ-Kameras.

## Die Sensoren-Seite

Die Seite hat zwei Listen. **Übernommene Sensoren** hält alles, was camera.ui verwaltet, von Plugins bereitgestellte und virtuelle. Die eigenen Sensoren einer Kamera (Bewegung, Batterie, PTZ) stehen nur dort darin, wo ihr Plugin an dieser Kamera in der passenden Kategorie aktiviert ist. Der Einstellungs-Button neben dem Suchfeld enthält **Nur aktive Kamera-Sensoren zeigen** (standardmäßig an) und **Kamera-Sensoren ausblenden**; beides aus zeigt alles, was beim Aufräumen hilft.

Jede Zeile zeigt Verbindungsstatus, Name, **ID**, Typ, lieferndes Plugin und zugewiesene Kameras. Die ID ist die Adresse des Sensors in seinem Quellsystem (bei Home Assistant die Entity-ID) und unterscheidet gleichnamige Sensoren; die Suche findet sie auch. Sie ist ein Etikett, keine Identität: Benennst du die Entität in Home Assistant um, behält der Sensor Kameras, Automationen und Verlauf, nur die ID ändert sich. Selbst angelegte Sensoren haben keine.

Der Punkt vor dem Namen zeigt einen von vier Zuständen: verbunden, nicht verbunden (das Plugin ist gestoppt), nicht verfügbar (das Plugin läuft, erreicht den Sensor aber nicht, oder die Quelle meldet ihn als nicht verfügbar) und in der Quelle entfernt (die Entität wurde dort gelöscht). Von allein wird nichts gelöscht: Ein entfernter Sensor bleibt, bis du ihn löschst, damit nichts, was auf ihn verweist, still kaputtgeht. Ein Schloss neben der Kamera markiert Kamera-Hardware, ein durchgestrichenes Auge einen fürs Smart Home ausgeblendeten Sensor, und das Icon leuchtet, solange der Sensor aktiv ist. Die schwebenden Buttons legen einen virtuellen Sensor an und starten den Auswahlmodus, um mehrere auf einmal zu löschen.

**Entdeckt** listet, was Plugins gefunden haben, mit Name, ID, Typ, Raum und Plugin. Von allein wird nichts übernommen: Ein Plugin wie Home Assistant bietet alles an, was es versteht, und überlässt dir die Auswahl. Ein übernommener Sensor (eine Zeile, oder viele über den Auswahl-Button) wandert in die Liste darüber und lässt sich Kameras zuweisen. **Neu scannen** fragt die Plugins erneut; die Liste aktualisiert sich auch von selbst, solange die Seite offen ist.

<Shot src="/img/sensors/sensors-page.png" alt="Sensoren-Seite mit allen Sensoren" />

Klicke auf eine Zeile, um den Sensor zu bearbeiten:

- **Name.** Wie der Sensor überall erscheint.
- **ID.** Die Adresse des Sensors in dem System, aus dem er kommt, schreibgeschützt. Wird nur gezeigt, wenn der Sensor eine hat.
- **Zugewiesene Kameras.** Wähle beliebig viele Kameras. Der Sensor erscheint bei diesen Kameras und kann deren Erkennung auslösen. Kamera-Hardware ist fest an ihre Kamera gebunden und lässt sich nicht umziehen.
- **Sensor freigeben.** Ob der Sensor in HomeKit, Home Assistant und MQTT erscheint.

Steuerbare Sensoren lassen sich direkt in diesem Dialog bedienen.

Aktionen pro Zeile:

- **Verlauf.** Die aufgezeichneten Zustandsänderungen des Sensors.
- **Sensor löschen.** Jeder übernommene oder virtuelle Sensor, verbunden oder nicht. Nur die Hardware-Sensoren einer Kamera lassen sich nicht löschen, solange ihre Kamera verbunden ist, sie kämen mit ihr zurück.[^delete]

## Virtuelle Sensoren

Sensoren ohne Plugin dahinter legst du auf der **Sensoren**-Seite an, siehe [Virtuelle Sensoren](/de/sensors/virtual).

[^delete]: Löschen entfernt den Sensor und seine Zuweisungen. Ein gelöschter übernommener Sensor taucht wieder unter Entdeckt auf; übernimmst du ihn erneut, entsteht ein neuer Sensor, und alles, was auf den alten verwies (Automationen, Smart-Home-Freigaben), muss auf den neuen zeigen.
