---
title: Virtuelle Sensoren
---

# Virtuelle Sensoren

Ein **virtueller Sensor** ist ein Sensor ohne Plugin dahinter. Du erstellst ihn selbst an einer Kamera, camera.ui hält seinen Zustand, und du setzt diesen Zustand über den Übersicht-Tab der Kamera oder per [Automation](/de/automations/).

Nutze ihn, um ein externes Gerät oder einen Zustand in camera.ui abzubilden: eine Türklingel, die du per Automation auslöst, einen Kontakt, den du umlegst, wenn eine MQTT-Nachricht eintrifft, einen Schalter, der für etwas steht, das kein Plugin meldet. Einmal erstellt, verhält sich ein virtueller Sensor wie jeder andere [Sensor](/de/sensors/). Er erscheint in der Übersicht der Kamera, lässt sich als [Shortcut](/de/cameras/shortcuts) aufs Video legen und funktioniert als Automations-Trigger.

Erstellen, Umbenennen und Löschen virtueller Sensoren erfordert Admin-Rechte.

## Virtuellen Sensor erstellen

Öffne die [Einstellungen](/de/cameras/settings) der Kamera, geh zum **Einstellungen**-Tab und klapp **Virtuelle Sensoren** auf. Klick auf **Virtuellen Sensor erstellen** und füll aus:

- **Typ.** Was der Sensor darstellt. Du wählst ihn einmal, später lässt er sich nicht ändern.
- **Name.** Wie der Sensor in camera.ui erscheint, zum Beispiel "Haustür". Zwei Sensoren desselben Typs an einer Kamera können sich keinen Namen teilen.

Der Sensor gehört zu dieser Kamera und taucht sofort in ihrer Übersicht auf.[^cameradelete] Ein neuer startet im Ruhezustand: aus, geschlossen, verriegelt oder deaktiviert, je nach Typ.

<Shot src="/img/sensors/virtual-sensors-list.png" alt="Bereich Virtuelle Sensoren in den Kamera-Einstellungen" />

## Verfügbare Typen

Es gibt 13 Typen:

- **Türklingel.** Ein Läuten, das du auslöst. Es setzt sich zwei Sekunden später selbst zurück.
- **Schalter.** An oder aus.
- **Kontakt.** Offen oder geschlossen, für eine Tür oder ein Fenster.
- **Belegung.** Belegt oder leer.
- **Rauchmelder.** Klar oder ausgelöst.
- **Wassersensor.** Klar oder ausgelöst.
- **Licht.** An oder aus, mit Helligkeit.
- **Sirene.** An oder aus, mit Lautstärke.
- **Schloss.** Verriegelt oder entriegelt.
- **Garagentor.** Offen oder geschlossen.
- **Alarmanlage.** Aus, Zuhause, Abwesend oder Nacht.
- **Temperatur.** Ein Temperaturwert.
- **Feuchtigkeit.** Ein Feuchtigkeitswert.

## Über die Übersicht steuern

Öffne die Kamera und geh zum **Übersicht**-Tab. Türklingel, Schalter, Licht, Sirene, Schloss, Garagentor und Alarmanlage liegen dort mit ihren Bedienelementen und funktionieren genauso wie die von Plugins bereitgestellten, siehe [Steuerung & Status](/de/sensors/controls).

Kontakt, Belegung, Rauchmelder, Wassersensor, Temperatur und Feuchtigkeit sind in der Übersicht read-only. Ihr Wert kommt aus einer Automation.

Schloss, Garagentor und Alarmanlage folgen sofort dem, was du setzt. Es gibt keine Hardware, die zurückmeldet, also hängen sie nie in einem Zustand wie "verriegelt gerade" oder "öffnet gerade".

camera.ui merkt sich den letzten Zustand eines virtuellen Sensors, er übersteht also einen Neustart.

## Per Automation steuern

Im [Automations-Editor](/de/automations/) setzt eine **Sensor steuern**-Aktion einen virtuellen Sensor, und ein **Sensoränderung**-Trigger reagiert, wenn sich sein Zustand ändert. Für die read-only-Typen ist das der einzige Weg, einen Wert zu setzen: Eine Automation, die eine MQTT-Nachricht empfängt, kann diesen Wert etwa auf einen virtuellen Temperatursensor legen.

## Umbenennen oder löschen

Die Liste **Virtuelle Sensoren** zeigt jeden virtuellen Sensor der Kamera mit seinem Typ. Mit dem Stift benennst du ihn um, mit dem roten Symbol löschst du ihn.[^delete]

Das Umbenennen ändert den Namen überall, in der Übersicht, auf Shortcuts und in Automationen. Automationen, die den Sensor nutzen, laufen weiter.

[^cameradelete]: Wenn du eine Kamera löschst, werden auch die virtuellen Sensoren gelöscht, die du an ihr erstellt hast.

[^delete]: Wenn du einen virtuellen Sensor löschst, funktionieren Automationen, die ihn verwenden, nicht mehr. Ein neuer Sensor mit gleichem Typ und Namen stellt die Verknüpfung nicht wieder her, denn er ist ein neuer Sensor. Richte die Automation neu auf ihn aus.
