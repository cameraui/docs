---
title: Benachrichtigungen
---

# Benachrichtigungen

camera.ui alarmiert dich, wenn an einer Kamera etwas passiert, mit einem Vorschaubild und einem Link zum Öffnen des Moments.

## Wo Alarme ankommen

- **In der App.** Jeder Alarm erscheint in der In-App-Liste (der Glocke), auf jedem Gerät, immer aktuell.
- **Desktop-App.** Während sie läuft, auch im Tray, zeigt sie native System-Benachrichtigungen für den Server, mit dem sie verbunden ist. Solange das Fenster im Vordergrund ist, bleibt sie still, denn die Glocke zeigt den Alarm bereits. Keine Cloud und kein Konto nötig.
- **Handy (Push).** Die [Mobile-App](/de/install/mobile) erhält Push auch bei geschlossener App, Ende-zu-Ende-verschlüsselt zugestellt über camera.ui Cloud.[^license]

## Push aufs Handy bekommen

Push aufs Handy braucht ein paar Dinge. Fehlt eines davon, landen Alarme weiterhin in der In-App-Glocke, aber das Handy bleibt still:

1. **Die native App.** Push erreicht nur die [Mobile-App](/de/install/mobile) aus dem App Store oder Play Store. Ein Browser oder die Web-App (PWA) zeigt die In-App-Glocke, aber nie Push.
2. **camera.ui Cloud.** Push wird über [camera.ui Cloud](/de/remote/cloud) zugestellt, der Server braucht sie also aktiviert und mit deinem Konto [gekoppelt](/de/remote/pairing). Außerdem ist ein aktives Abo nötig.
3. **An und synchronisiert.** Öffne in der App **Einstellungen → Benachrichtigungen**, schalte den Hauptschalter ein und tippe einmal auf **Dieses Gerät synchronisieren**. Wiederhole das auf jedem Handy, für jeden Server, mit dem du dich verbindest.

**Nach einer Neuinstallation neu synchronisieren.** Die App neu installieren, ihre Daten löschen oder aufs neue Handy wechseln setzt den Push-Token zurück, öffne also **Einstellungen → Benachrichtigungen** und tippe erneut auf **Dieses Gerät synchronisieren**. Nach einer Neuinstallation zeigt die Zeile **Dieses Gerät** das ohnehin als nicht synchronisiert an. Wenn Push ohne klaren Grund verstummt, probiere zuerst das.

## Push bleibt privat

Dein Server versiegelt jeden Alarm, bevor er dein Netzwerk verlässt. camera.ui Cloud, Google und Apple reichen nur den versiegelten Umschlag weiter; Kameraname, Alarmtext und der Link darin sind für alle drei unlesbar.[^e2ee] Das Vorschaubild macht gar keinen Umweg: dein Handy lädt es direkt von deinem Server. Ist **Video in Push** an, wird der Clip genauso zugestellt: Er bleibt im versiegelten Push und streamt von deinem eigenen Server, die Cloud sieht also nie ein Bild.

## Deine Benachrichtigungs-Einstellungen

<Shot src="/img/notifications/notification-settings.png" alt="Benachrichtigungs-Einstellungen" />

Öffne **Einstellungen → Benachrichtigungen**, um deine Alarme zu steuern. Diese Einstellungen gehören zu deinem Konto und gelten damit auf jedem Gerät, auf dem du dich anmeldest.[^device]

- **Hauptschalter.** Alle Benachrichtigungen an- oder ausschalten. Bei einem neuen Konto ist er aus, schalte ihn also zuerst ein. Die übrigen Bereiche erscheinen erst danach.
- **Dieses Gerät.** Tippe auf dem Handy einmal auf **Dieses Gerät synchronisieren**, um Push zu erhalten. In der Desktop-App schaltest du hier die nativen Benachrichtigungen für diesen einen Computer an oder aus.
- **Ruhezeiten.** Nicht-kritische Alarme in einem täglichen Zeitfenster stummschalten. Kritische Alarme kommen trotzdem durch, und die In-App-Liste bleibt aktuell.
- **System-Benachrichtigungen.** Hinweise zu camera.ui selbst: Server- und App-Updates, Plugin-Updates und ein Plugin, das abstürzt oder sich wieder fängt. Jeder Eintrag hat einen eigenen Schalter.[^admin]
- **Plugin-Benachrichtigungen.** Hinweise, die Plugins senden, etwa wenn eine Kamera offline geht oder der Speicher volläuft. Du kannst jedes Plugin einzeln an- oder ausschalten. Tippst du auf einen Kamera-offline- oder -online-Alarm, öffnet sich das Log dieser Kamera, wo der Grund für den Ausfall meist zu sehen ist.
- **Geräte.** Die Handys und anderen Ziele, an die deine Alarme gehen. Benenne eines um, schalte **Aktiv** aus, um es zu pausieren, oder entferne es ganz.

## Worüber jede Kamera dich alarmiert

Jede Kamera hat eigene Benachrichtigungs-Einstellungen, sodass du nur bei dem gepingt wirst, was dort zählt:[^nvr]

- **Notify for Objects.** Worüber benachrichtigt wird (standardmäßig Personen und Fahrzeuge).
- **Known Faces Only.** Bei Personen nur bei einem erkannten [Gesicht](/de/detection/faces) alarmieren.
- **Notify for Audio.** Welche Geräusche, etwa Alarme oder Glasbruch.
- **Notify for Sensors.** Eine Türklingel, ein Kontaktsensor, eine Sirene oder eine Alarmanlage.
- **Cooldown (Seconds).** Eine Ruhephase nach einem Alarm, damit eine belebte Szene dich nicht überflutet.
- **Fast Notifications.** Den Alarm sofort senden, sobald etwas erkannt wird, noch bevor das Bild fertig ist.
- **Video in Push.** Hängt einen kurzen Clip des Moments an den Push. Auf dem iPhone spielt er direkt in der Benachrichtigung, auf Android animiert die aufgeklappte Benachrichtigung den Clip Bild für Bild,[^androidframes] und der In-App-Alarm öffnet mit einem Player. Nutzt die niedrigste aufgezeichnete Qualität. Standardmäßig aus.

## KI-Beschreibungen kommen als eine Zusammenfassung

Mit aktivierten KI-Beschreibungen sammeln sich die Texte eines Ereignisses und kommen als eine einzige Zusammenfassung, sobald die Szene kurz ruhig bleibt oder das Ereignis endet.[^ai] Du bekommst die Story des ganzen Besuchs statt eines Summens für jeden Moment.

- **Der erste Alarm bleibt schnell.** Eine Person pingt dich weiterhin sofort an, und der Name folgt, sobald ein bekanntes Gesicht erkannt wird.
- **Ein Alarm, leise aktualisiert.** Spätere Momente aktualisieren denselben Alarm, ohne erneut zu summen.
- **Tippen öffnet den Anfang.** Die Zusammenfassung bringt dich zum Beginn des Ereignisses, nicht zum letzten Moment.

## Kritische Alarme

Manche Ereignisse sind zu wichtig, um sie zurückzuhalten. **Kritische Alarme**, etwa ein Türklingel-Läuten oder ein Alarm, werden sofort zugestellt und ignorieren sowohl den Cooldown als auch die Ruhezeiten.

[^license]: Push-Benachrichtigungen an die Mobile-Apps erfordern ein aktives camera.ui-Abo.
[^e2ee]: Die Ende-zu-Ende-Verschlüsselung braucht eine aktuelle Mobile-App und ein aktuelles NVR-Plugin. Ältere Versionen erhalten Push weiterhin, aber ohne die Verschlüsselung.
[^device]: Die Zeile **Dieses Gerät** ist die Ausnahme. Sie betrifft nur das Handy oder den Computer, an dem du gerade bist.
[^admin]: Den Bereich mit den System-Benachrichtigungen sehen nur Admins.
[^nvr]: Diese Einstellungen pro Kamera stammen vom NVR-Plugin, das auch die Aufnahme übernimmt.
[^ai]: KI-Beschreibungen stammen vom NVR-Plugin. Schalte sie in dessen Einstellungen ein.
[^androidframes]: Android-Benachrichtigungen können kein Video abspielen, deshalb zieht die aktuelle App Einzelbilder aus dem Clip und blättert sie durch. Antippen öffnet weiterhin die Aufnahme.
