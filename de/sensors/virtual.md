---
title: Virtuelle Sensoren
---

# Virtuelle Sensoren

Ein **virtueller Sensor** ist ein Sensor ohne Plugin dahinter. Du erstellst ihn selbst, camera.ui hält seinen Zustand, und du setzt diesen Zustand über die Oberfläche oder per [Automation](/de/automations/).

Typische Fälle: eine Türklingel, die du per Automation auslöst, ein Kontakt, den du bei einer MQTT-Nachricht umlegst, ein Schalter für etwas, das kein Plugin meldet. Ansonsten verhält er sich wie jeder andere [Sensor](/de/sensors/): Kameras zuweisen, als [Shortcut](/de/cameras/shortcuts) aufs Video legen, ins Smart Home freigeben, als Automations-Trigger nutzen.

Erstellen, Umbenennen und Löschen virtueller Sensoren erfordert Admin-Rechte.

## Virtuellen Sensor anlegen

**Virtuellen Sensor anlegen** auf der **Sensoren**-Seite fragt nach:

- **Typ.** Was der Sensor darstellt. Lässt sich später nicht ändern.
- **Name.** Wie der Sensor in camera.ui erscheint, zum Beispiel "Haustür". Zwei virtuelle Sensoren desselben Typs können sich keinen Namen teilen.

Der Sensor startet im Ruhezustand: aus, geschlossen, verriegelt oder deaktiviert, je nach Typ. Er gehört keiner Kamera, bis du über seine Zeile Kameras zuweist; dann taucht er in deren Übersicht auf.[^cameradelete]

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

Türklingel, Schalter, Licht, Sirene, Schloss, Garagentor und Alarmanlage bekommen dieselben Bedienelemente wie die von Plugins (siehe [Steuerung & Status](/de/sensors/controls)): im **Übersicht**-Tab einer zugewiesenen Kamera und im Bearbeiten-Dialog auf der **Sensoren**-Seite, der auch Sensoren ohne Kamera abdeckt.

Kontakt, Belegung, Rauchmelder, Wassersensor, Temperatur, Feuchtigkeit, Gasmelder, Kohlenmonoxid, Hitze, Kälte, Vibration, Sabotage, Problem, Strom, Helligkeit und CO₂ sind read-only. Ihr Wert kommt aus einer Automation.

Schloss, Garagentor und Alarmanlage schalten sofort, ohne Zwischenzustand wie "verriegelt gerade" oder "öffnet gerade".

Der letzte Zustand übersteht einen Neustart.

## Per Automation steuern

Im [Automations-Editor](/de/automations/) setzt eine **Sensor steuern**-Aktion einen virtuellen Sensor, und ein **Sensoränderung**-Trigger reagiert, wenn sich sein Zustand ändert. Für die read-only-Typen ist das der einzige Weg, einen Wert zu setzen: Eine Automation, die eine MQTT-Nachricht empfängt, kann diesen Wert etwa auf einen virtuellen Temperatursensor legen.

## Umbenennen oder löschen

Auf der **Sensoren**-Seite: Klick auf die Zeile zum Umbenennen, der Löschen-Button der Zeile zum Entfernen.[^delete]

Ein neuer Name gilt überall (Übersicht, Shortcuts, Automationen), und Automationen, die den Sensor nutzen, laufen weiter.

[^cameradelete]: Wenn du eine Kamera löschst, wird nur die Zuweisung entfernt. Der Sensor selbst bleibt und lässt sich anderen Kameras zuweisen.

[^delete]: Wenn du einen virtuellen Sensor löschst, funktionieren Automationen, die ihn verwenden, nicht mehr. Ein neuer Sensor mit gleichem Typ und Namen stellt die Verknüpfung nicht wieder her, denn er ist ein neuer Sensor. Richte die Automation neu auf ihn aus.
