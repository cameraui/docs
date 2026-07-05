---
title: Benachrichtigungen
---

# Benachrichtigungen

camera.ui alarmiert dich, wenn an einer Kamera etwas passiert, mit einem Vorschaubild und einem Link zum Öffnen des Moments.

## Wo Alarme ankommen

- **In der App.** Jeder Alarm erscheint in der In-App-Liste (der Glocke), auf jedem Gerät, immer aktuell.
- **Desktop-App.** Während sie läuft, auch im Tray, zeigt sie native System-Benachrichtigungen für den Server, mit dem sie verbunden ist. Keine Cloud und kein Konto nötig.
- **Handy (Push).** Die [Mobile-Apps](/de/install/mobile) erhalten Push-Benachrichtigungen über camera.ui Cloud und erreichen dich auch, wenn die App geschlossen ist.[^license]

## Einstellungen pro Gerät

![Benachrichtigungs-Einstellungen](/img/notifications/notification-settings.png)

Öffne **Einstellungen → Benachrichtigungen** auf einem Gerät, um dessen Alarme zu steuern:

- **Hauptschalter.** Alle Benachrichtigungen an- oder ausschalten.
- **Ruhezeiten.** Nicht-kritische Alarme in einem täglichen Zeitfenster stummschalten. Kritische Alarme kommen trotzdem durch, und die In-App-Liste bleibt aktuell.
- **System-Benachrichtigungen.** Hinweise zu camera.ui selbst, etwa wenn eine Kamera offline geht oder der Speicher volläuft.
- **Plugin-Benachrichtigungen.** Hinweise, die Plugins senden.

## Worüber jede Kamera dich alarmiert

Jede Kamera hat eigene Benachrichtigungs-Einstellungen, sodass du nur bei dem gepingt wirst, was dort zählt:[^nvr]

- **Objekte.** Worüber benachrichtigt wird (standardmäßig Personen und Fahrzeuge).
- **Nur bekannte Gesichter.** Bei Personen nur bei einem erkannten [Gesicht](/de/detection/faces) alarmieren.
- **Audio.** Welche Geräusche, etwa Alarme oder Glasbruch.
- **Sensoren.** Eine Türklingel, ein Kontaktsensor, eine Sirene oder eine Alarmanlage.
- **Cooldown.** Eine Ruhephase nach einem Alarm, damit eine belebte Szene dich nicht überflutet.
- **Schnelle Benachrichtigungen.** Den Alarm sofort senden, sobald etwas erkannt wird, noch bevor das Bild fertig ist.

## Kritische Alarme

Manche Ereignisse sind zu wichtig, um sie zurückzuhalten. **Kritische Alarme**, etwa ein Türklingel-Läuten oder ein Alarm, werden sofort zugestellt und ignorieren sowohl den Cooldown als auch die Ruhezeiten.

[^license]: Push-Benachrichtigungen an die Mobile-Apps erfordern ein aktives camera.ui-Abo.
[^nvr]: Diese Einstellungen pro Kamera stammen vom NVR-Plugin, das auch die Aufnahme übernimmt.
