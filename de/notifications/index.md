---
title: Benachrichtigungen
---

# Benachrichtigungen

## Wo Alarme ankommen

- **In der App.** Jeder Alarm landet in der In-App-Liste (der Glocke), auf jedem Gerät.
- **Desktop-App.** Während sie läuft, auch im Tray, zeigt sie native System-Benachrichtigungen für den Server, mit dem sie verbunden ist, außer solange ihr Fenster im Vordergrund ist. Keine Cloud und kein Konto nötig.
- **Handy (Push).** Die [Mobile-App](/de/install/mobile) erhält Push auch bei geschlossener App, Ende-zu-Ende-verschlüsselt zugestellt über camera.ui Cloud.[^license]

## Push aufs Handy bekommen

Push aufs Handy braucht alles davon. Fehlt eines, landen Alarme nur in der In-App-Glocke:

1. **Die native App.** Push erreicht nur die [Mobile-App](/de/install/mobile) aus dem App Store oder Play Store. Ein Browser oder die Web-App (PWA) zeigt die In-App-Glocke, aber nie Push.
2. **camera.ui Cloud.** Push wird über [camera.ui Cloud](/de/remote/cloud) zugestellt, der Server braucht sie also aktiviert und mit deinem Konto [gekoppelt](/de/remote/pairing). Außerdem ist ein aktives Abo nötig.
3. **An und synchronisiert.** Öffne in der App **Einstellungen → Benachrichtigungen**, schalte den Hauptschalter ein und tippe einmal auf **Dieses Gerät synchronisieren**. Wiederhole das auf jedem Handy, für jeden Server, mit dem du dich verbindest.

**Push repariert sich nach einer Neuinstallation selbst.** Neu installieren, App-Daten löschen oder ein neues Handy setzt den Push-Token zurück, und die App registriert sich im Hintergrund neu beim Server. Klappt das nicht (etwa weil die Benachrichtigungs-Berechtigung aus ist), erscheint auf jedem Bildschirm ein Hinweis **Push-Nachrichten kommen nicht mehr an** mit einem **Beheben**-Button. **Erneut synchronisieren** unter **Einstellungen → Benachrichtigungen** tut dasselbe. Die Zeile **Dieses Gerät** verlangt nur dann eine Synchronisierung, wenn der Server dieses Handy wirklich nicht kennt.

## Push bleibt privat

Dein Server versiegelt jeden Alarm, bevor er dein Netzwerk verlässt. camera.ui Cloud, Google und Apple reichen nur den versiegelten Umschlag weiter; Kameraname, Alarmtext und der Link darin sind für alle drei unlesbar. Das Vorschaubild macht gar keinen Umweg: dein Handy lädt es direkt von deinem Server. Ist **Video in Push** an, wird der Clip genauso zugestellt: Er bleibt im versiegelten Push und streamt von deinem eigenen Server, die Cloud sieht also nie ein Bild.

## Deine Benachrichtigungs-Einstellungen

<Shot src="/img/notifications/notification-settings.png" alt="Benachrichtigungs-Einstellungen" />

**Einstellungen → Benachrichtigungen** gehört zu deinem Konto und gilt auf jedem Gerät, auf dem du dich anmeldest.[^device]

- **Hauptschalter.** Alle Benachrichtigungen an oder aus. Bei einem neuen Konto aus, die übrigen Bereiche erscheinen erst, wenn er an ist.
- **Dieses Gerät.** Tippe auf dem Handy einmal auf **Dieses Gerät synchronisieren**, um Push zu erhalten. In der Desktop-App schaltest du hier die nativen Benachrichtigungen für diesen einen Computer an oder aus.
- **Ruhezeiten.** Nicht-kritische Alarme in einem täglichen Zeitfenster stummschalten. Kritische Alarme kommen trotzdem durch, und die In-App-Liste bleibt aktuell.
- **System-Benachrichtigungen.** Hinweise zu camera.ui selbst: Server- und App-Updates, Plugin-Updates und ein Plugin, das abstürzt oder sich wieder fängt. Jeder Eintrag hat einen eigenen Schalter.[^admin]
- **Plugin-Benachrichtigungen.** Hinweise, die Plugins senden, etwa wenn eine Kamera offline geht oder der Speicher volläuft. Jedes Plugin hat einen eigenen Schalter. Tippst du auf einen Kamera-offline- oder -online-Alarm, öffnet sich das Log dieser Kamera, wo der Grund für den Ausfall meist zu sehen ist.
- **Geräte.** Die Handys und anderen Ziele, an die deine Alarme gehen. Benenne eines um, schalte **Aktiv** aus, um es zu pausieren, oder entferne es ganz.

## Worüber jede Kamera dich alarmiert

Jede Kamera hat eigene Benachrichtigungs-Einstellungen, in den [Einstellungen](/de/cameras/settings) der Kamera unter **Benachrichtigungen**:[^nvr]

- **Benachrichtigungen senden.** Der eigene Schalter der Kamera. Aus heißt, diese Kamera sendet nie einen Push, ihre Ereignisse landen aber weiter auf der Timeline und in der App. Standardmäßig an.
- **Worüber du alarmiert wirst.** Legen die [Alarmzonen](/de/cameras/zones-and-masks#alarmzonen) der Kamera fest, nicht diese Einstellungen. Ohne Alarmzone alarmiert die Kamera bei allem, was sie erkennt. Zeichne eine, um es nach Typ und Bereich einzugrenzen.
- **Welche Gesichter und Kennzeichen dich alarmieren.** Legen ebenfalls die [Alarmzonen](/de/cameras/zones-and-masks#wer-genau-und-welches-kennzeichen) fest. Eine Zone kann benennen, für wen sie meldet, mit Einträgen für unbekannte Gesichter und für alle Hinterlegten, und dasselbe für Kennzeichen. Nichts ausgewählt meldet für alle.
- **Bei Geräuschen melden.** Welche Geräusche, etwa Alarme oder Glasbruch.
- **Bei Sensoren melden.** Eine Türklingel, ein Kontaktsensor, eine Sirene oder eine Alarmanlage.
- **Geschwindigkeit.** Wie lange auf ein gutes Bild gewartet wird. **Immediate** sendet sofort, mit Bild nur, wenn schon eines da ist. **Balanced** (Standard) wartet bis zu 2 Sekunden, **Best** bis zu 4. Ein erkanntes Gesicht sendet immer sofort, das Bild wird danach leise nachgereicht.
- **Sperrzeit (Sekunden).** Eine Ruhephase nach einem Alarm. Standardmäßig 30 Sekunden, bis zu 600. Türklingel und Alarme umgehen sie.
- **Video in der Benachrichtigung.** Hängt einen kurzen Clip des Moments an den Push. Auf dem iPhone spielt er direkt in der Benachrichtigung, auf Android animiert die aufgeklappte Benachrichtigung den Clip Bild für Bild,[^androidframes] und der In-App-Alarm öffnet mit einem Player. Nutzt die niedrigste aufgezeichnete Qualität. Standardmäßig aus.

## Pushes mit KI-Beschreibung

Mit aktivierten [KI-Beschreibungen](/de/detection/genai-descriptions) trägt der Alarm das, was die KI gesehen hat, statt eines nackten „Person erkannt".[^ai] Das ist **Moment Pushes** in den Einstellungen der Kamera, und der Alarm wartet auf die Beschreibung. Klingeln und Alarme kommen weiterhin sofort, und antwortet das Modell nicht rechtzeitig, geht stattdessen der normale Erkennungs-Push raus.

**Push Timing** entscheidet, wie oft ein lebhaftes Ereignis bei dir ankommt:

- **Per Moment.** Jeder Moment pusht, sobald seine Beschreibung fertig ist. Das ist der Standard.
- **Per Event.** Die Beschreibungen sammeln sich und ein Push geht raus, nachdem die Szene eine Weile ruhig war. Tippen öffnet den Beginn des Ereignisses.

Ein Alarm, der schon auf dem Sperrbildschirm liegt, wird leise aktualisiert, wenn etwas Besseres kommt, ein erkannter Name oder ein schärferes Bild, ohne erneut zu summen.

## Kritische Alarme

**Kritische Alarme**, etwa ein Türklingel-Läuten oder ein Alarm, werden sofort zugestellt und ignorieren sowohl die Sperrzeit als auch die Ruhezeiten.

[^license]: Push-Benachrichtigungen an die Mobile-Apps erfordern ein aktives camera.ui-Abo.
[^device]: Die Zeile **Dieses Gerät** ist die Ausnahme. Sie betrifft nur das Handy oder den Computer, an dem du gerade bist.
[^admin]: Den Bereich mit den System-Benachrichtigungen sehen nur Admins.
[^nvr]: Das Senden übernimmt das NVR-Plugin, eine Kamera ohne Plugin speichert die Einstellungen also und nutzt sie, sobald eins installiert ist.
[^ai]: KI-Beschreibungen stammen vom NVR-Plugin. Schalte sie in dessen Einstellungen ein.
[^androidframes]: Android-Benachrichtigungen können kein Video abspielen, deshalb zieht die aktuelle App Einzelbilder aus dem Clip und blättert sie durch. Antippen öffnet weiterhin die Aufnahme.
