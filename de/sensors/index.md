---
title: Sensoren & Zubehör
---

# Sensoren & Zubehör

Ein **Sensor** ist jede Nicht-Video-Fähigkeit in camera.ui: eine Erkennung, ein Umgebungswert oder ein steuerbares Zubehör. Die meisten Sensoren stammen von [Plugins](/de/plugins/); virtuelle Sensoren erstellst du selbst.

Jeder Sensor ist ein eigenes Objekt. Er behält Name, Einstellungen und Verlauf, egal an welchen Kameras er hängt, und kann einer Kamera zugewiesen sein, mehreren oder gar keiner.

## Sensor-Typen

- **Erkennung.** Bewegung, Objekt, Audio, Gesicht, Kennzeichen und semantisch (CLIP). Diese behandeln wir unter [Erkennung & KI](/de/detection/).
- **Umgebung & Zustand.** Kontakt, Temperatur, Feuchtigkeit, Belegung, Rauchmelder, Wassersensor, Batterie, Gasmelder, Kohlenmonoxid, CO₂, Hitze, Kälte, Vibration, Sabotage, Problem, Strom und Helligkeit. Diese sind read-only. Die binären (etwa Gasmelder oder Sabotage) können die Erkennung einer Kamera auslösen, genauso wie ein Kontaktsensor.
- **Zubehör.** Licht, Schalter, Schloss, Sirene, Garage, Alarmanlage und Türklingel. Diese lassen sich steuern.
- **PTZ.** Schwenken, Neigen und Zoomen. Siehe [PTZ & Autotrack](/de/sensors/ptz).

## Kamera-Hardware und eigenständige Sensoren

- **Kamera-Hardware.** Das Plugin der Kamera registriert sie auf genau dieser Kamera: ihre Klingeltaste, ihr Spotlight, ihre Sirene oder ihre Batterie. Die Zuweisung ist fest; auf eine andere Kamera verschieben geht nicht.
- **Eigenständig.** Alles andere, vom Smart-Plug einer Integration bis zum selbst erstellten virtuellen Sensor. Welchen Kameras er gehört, entscheidest du auf der **Sensoren**-Seite. Ein zugewiesener Sensor erscheint bei diesen Kameras und kann deren Erkennung auslösen.

Löschst du eine Kamera, gehen ihre Kamera-Hardware-Sensoren mit. Ein eigenständiger Sensor, der ihr zugewiesen war, bleibt und verliert nur die Zuweisung.

## Sensoren einrichten und nutzen

Plugin-Sensoren werden pro Kamera aktiviert, und jeder Sensor wird auf der **Sensoren**-Seite verwaltet, wo Integrationen unter **Entdeckt** anbieten, was sie finden. Siehe **[Sensoren einrichten](/de/sensors/setup)** und **[Steuerung & Status](/de/sensors/controls)**, um Status zu lesen und Zubehör zu bedienen.

Virtuelle Sensoren brauchen kein Plugin, siehe **[Virtuelle Sensoren](/de/sensors/virtual)**.

## Freigabe ins Smart Home

Jeder Sensor hat einen Schalter **Sensor freigeben**. Freigegebene Sensoren erscheinen in HomeKit, Home Assistant und MQTT; schalte ihn aus, um einen Sensor nur in camera.ui zu behalten. Kamerafeste Typen wie PTZ und Batterie laufen immer über ihre Kamera und haben keinen Schalter.

## In Automationen

Sensoren können [Automationen](/de/automations/) auslösen, etwa ein öffnender Kontakt, und Automationen können Zubehör wie ein Licht bedienen.
