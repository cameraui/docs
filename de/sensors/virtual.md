---
title: Virtuelle Sensoren
---

# Virtuelle Sensoren

Ein **virtueller Sensor** ist ein Sensor ohne Plugin dahinter. Du erstellst ihn selbst, camera.ui hält seinen Zustand, und du setzt diesen Zustand über die Oberfläche oder per [Automation](/de/automations/).

Nutze ihn, um ein externes Gerät oder einen Zustand in camera.ui abzubilden: eine Türklingel, die du per Automation auslöst, einen Kontakt, den du umlegst, wenn eine MQTT-Nachricht eintrifft, einen Schalter, der für etwas steht, das kein Plugin meldet. Einmal erstellt, verhält sich ein virtueller Sensor wie jeder andere [Sensor](/de/sensors/). Du kannst ihn Kameras zuweisen, als [Shortcut](/de/cameras/shortcuts) aufs Video legen, ins Smart Home freigeben und als Automations-Trigger nutzen.

Erstellen, Umbenennen und Löschen virtueller Sensoren erfordert Admin-Rechte.

## Virtuellen Sensor anlegen

Öffne die **Sensoren**-Seite und klicke auf **Virtuellen Sensor anlegen**. Füll aus:

- **Typ.** Was der Sensor darstellt. Du wählst ihn einmal, später lässt er sich nicht ändern.
- **Name.** Wie der Sensor in camera.ui erscheint, zum Beispiel "Haustür". Zwei virtuelle Sensoren desselben Typs können sich keinen Namen teilen.

Der Sensor startet im Ruhezustand: aus, geschlossen, verriegelt oder deaktiviert, je nach Typ. Er gehört noch keiner Kamera; klicke auf seine Zeile, um Kameras zuzuweisen, dann taucht er sofort in deren Übersicht auf.[^cameradelete]

<Shot src="/img/sensors/virtual-sensors-list.png" alt="Virtuelle Sensoren auf der Sensoren-Seite" />

## Verfügbare Typen

Es gibt 23 Typen:

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
- **Gasmelder.** Klar oder ausgelöst.
- **Kohlenmonoxid.** Klar oder ausgelöst.
- **Hitze.** Klar oder ausgelöst.
- **Kälte.** Klar oder ausgelöst.
- **Vibration.** Klar oder ausgelöst.
- **Sabotage.** Klar oder ausgelöst.
- **Problem.** Klar oder ausgelöst.
- **Strom.** Klar oder ausgelöst.
- **Helligkeit.** Ein Helligkeitswert in Lux.
- **CO₂.** Ein CO₂-Wert in ppm.

## Steuern

Im **Übersicht**-Tab einer zugewiesenen Kamera liegen Türklingel, Schalter, Licht, Sirene, Schloss, Garagentor und Alarmanlage mit ihren Bedienelementen und funktionieren genauso wie die von Plugins bereitgestellten, siehe [Steuerung & Status](/de/sensors/controls). Dieselben Bedienelemente stecken im Bearbeiten-Dialog auf der **Sensoren**-Seite, der auch Sensoren ohne Kamera abdeckt.

Kontakt, Belegung, Rauchmelder, Wassersensor, Temperatur, Feuchtigkeit, Gasmelder, Kohlenmonoxid, Hitze, Kälte, Vibration, Sabotage, Problem, Strom, Helligkeit und CO₂ sind read-only. Ihr Wert kommt aus einer Automation.

Schloss, Garagentor und Alarmanlage folgen sofort dem, was du setzt. Es gibt keine Hardware, die zurückmeldet, also hängen sie nie in einem Zustand wie "verriegelt gerade" oder "öffnet gerade".

camera.ui merkt sich den letzten Zustand eines virtuellen Sensors, er übersteht also einen Neustart.

## Per Automation steuern

Im [Automations-Editor](/de/automations/) setzt eine **Sensor steuern**-Aktion einen virtuellen Sensor, und ein **Sensoränderung**-Trigger reagiert, wenn sich sein Zustand ändert. Für die read-only-Typen ist das der einzige Weg, einen Wert zu setzen: Eine Automation, die eine MQTT-Nachricht empfängt, kann diesen Wert etwa auf einen virtuellen Temperatursensor legen.

## Umbenennen oder löschen

Beides passiert auf der **Sensoren**-Seite: Klicke auf die Zeile, um den Sensor umzubenennen, und nutze den Löschen-Button der Zeile, um ihn zu entfernen.[^delete]

Das Umbenennen ändert den Namen überall, in der Übersicht, auf Shortcuts und in Automationen. Automationen, die den Sensor nutzen, laufen weiter.

[^cameradelete]: Wenn du eine Kamera löschst, wird nur die Zuweisung entfernt. Der Sensor selbst bleibt und lässt sich anderen Kameras zuweisen.

[^delete]: Wenn du einen virtuellen Sensor löschst, funktionieren Automationen, die ihn verwenden, nicht mehr. Ein neuer Sensor mit gleichem Typ und Namen stellt die Verknüpfung nicht wieder her, denn er ist ein neuer Sensor. Richte die Automation neu auf ihn aus.
