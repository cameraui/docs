---
title: Benachrichtigungen
---

# Benachrichtigungen

camera.ui alarmiert dich, wenn an einer Kamera etwas passiert, mit einem Vorschaubild und einem Link zum Öffnen des Moments.

## Wo Alarme ankommen

- **In der App.** Jeder Alarm erscheint in der In-App-Liste (der Glocke), auf jedem Gerät, immer aktuell.
- **Desktop-App.** Während sie läuft, auch im Tray, zeigt sie native System-Benachrichtigungen für den Server, mit dem sie verbunden ist. Solange das Fenster im Vordergrund ist, bleibt sie still, denn die Glocke zeigt den Alarm bereits. Keine Cloud und kein Konto nötig.
- **Handy (Push).** Die [Mobile-Apps](/de/install/mobile) erhalten Push-Benachrichtigungen über camera.ui Cloud und erreichen dich auch, wenn die App geschlossen ist. Schalte Benachrichtigungen auf dem Handy unter **Einstellungen → Benachrichtigungen** ein und tippe einmal auf **Dieses Gerät synchronisieren**. Das gilt für jedes Handy und für jeden Server, mit dem du dich verbindest.[^license]

## Deine Benachrichtigungs-Einstellungen

<Shot src="/img/notifications/notification-settings.png" alt="Benachrichtigungs-Einstellungen" />

Öffne **Einstellungen → Benachrichtigungen**, um deine Alarme zu steuern. Diese Einstellungen gehören zu deinem Konto und gelten damit auf jedem Gerät, auf dem du dich anmeldest.[^device]

- **Hauptschalter.** Alle Benachrichtigungen an- oder ausschalten. Bei einem neuen Konto ist er aus, schalte ihn also zuerst ein. Die übrigen Bereiche erscheinen erst danach.
- **Dieses Gerät.** Tippe auf dem Handy einmal auf **Dieses Gerät synchronisieren**, um Push zu erhalten. In der Desktop-App schaltest du hier die nativen Benachrichtigungen für diesen einen Computer an oder aus.
- **Ruhezeiten.** Nicht-kritische Alarme in einem täglichen Zeitfenster stummschalten. Kritische Alarme kommen trotzdem durch, und die In-App-Liste bleibt aktuell.
- **System-Benachrichtigungen.** Hinweise zu camera.ui selbst: Server- und App-Updates, Plugin-Updates und ein Plugin, das abstürzt oder sich wieder fängt. Jeder Eintrag hat einen eigenen Schalter.[^admin]
- **Plugin-Benachrichtigungen.** Hinweise, die Plugins senden, etwa wenn eine Kamera offline geht oder der Speicher volläuft. Du kannst jedes Plugin einzeln an- oder ausschalten.
- **Geräte.** Die Handys und anderen Ziele, an die deine Alarme gehen. Benenne eines um, schalte **Aktiv** aus, um es zu pausieren, oder entferne es ganz.

## Worüber jede Kamera dich alarmiert

Jede Kamera hat eigene Benachrichtigungs-Einstellungen, sodass du nur bei dem gepingt wirst, was dort zählt:[^nvr]

- **Notify for Objects.** Worüber benachrichtigt wird (standardmäßig Personen und Fahrzeuge).
- **Known Faces Only.** Bei Personen nur bei einem erkannten [Gesicht](/de/detection/faces) alarmieren.
- **Notify for Audio.** Welche Geräusche, etwa Alarme oder Glasbruch.
- **Notify for Sensors.** Eine Türklingel, ein Kontaktsensor, eine Sirene oder eine Alarmanlage.
- **Cooldown (Seconds).** Eine Ruhephase nach einem Alarm, damit eine belebte Szene dich nicht überflutet.
- **Fast Notifications.** Den Alarm sofort senden, sobald etwas erkannt wird, noch bevor das Bild fertig ist.

## Kritische Alarme

Manche Ereignisse sind zu wichtig, um sie zurückzuhalten. **Kritische Alarme**, etwa ein Türklingel-Läuten oder ein Alarm, werden sofort zugestellt und ignorieren sowohl den Cooldown als auch die Ruhezeiten.

[^license]: Push-Benachrichtigungen an die Mobile-Apps erfordern ein aktives camera.ui-Abo.
[^device]: Die Zeile **Dieses Gerät** ist die Ausnahme. Sie betrifft nur das Handy oder den Computer, an dem du gerade bist.
[^admin]: Den Bereich mit den System-Benachrichtigungen sehen nur Admins.
[^nvr]: Diese Einstellungen pro Kamera stammen vom NVR-Plugin, das auch die Aufnahme übernimmt.
