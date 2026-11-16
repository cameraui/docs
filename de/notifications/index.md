---
title: Benachrichtigungen
---

# Benachrichtigungen

## Wo Alarme ankommen

- **In der App.** Jeder Alarm landet in der Glocke und in der [Benachrichtigungsliste](#die-benachrichtigungsliste), auf jedem Gerät.
- **Desktop-App.** Während sie läuft, auch im Tray, zeigt sie native System-Benachrichtigungen für den Server, mit dem sie verbunden ist, außer solange ihr Fenster im Vordergrund ist. Keine Cloud und kein Konto nötig.
- **Handy (Push).** Die [Mobile-App](/de/install/mobile) erhält Push auch bei geschlossener App, Ende-zu-Ende-verschlüsselt zugestellt über camera.ui Cloud.[^license]

## Die Benachrichtigungsliste

Die Glocke zeigt die neuesten Alarme, **Alle anzeigen** öffnet die ganze Liste. Was die Glocke auflistet und zählt, legst du unter **Glocke** in deinen [Benachrichtigungseinstellungen](#deine-benachrichtigungs-einstellungen) fest. Wenn du einen Alarm öffnest, gilt er als gelesen, und ein Push ohne eigenes Ziel öffnet den Alarm in der Liste.

Die Liste behält die letzten 100 Alarme pro Kamera, pro Plugin, pro Automation und für camera.ui selbst. Alarme derselben Kamera, die wenige Minuten auseinanderliegen, werden zu einer Zeile zusammengefasst. Die Suche umfasst die Texte, Kamera- und Quellnamen, der Filter schränkt die Liste auf **Ungelesen**, **Warnungen und Fehler**, **Kameras**, **Plugins**, **System** oder **Automationen** ein. Bei **Kameras** oder **Plugins** schränkt ein zweiter Knopf neben dem Filter die Liste auf eine Kamera oder ein Plugin ein. Eine System-Benachrichtigung oder ein Plugin, das du in deinen [Benachrichtigungseinstellungen](#deine-benachrichtigungs-einstellungen) ausschaltest, bleibt auch der Liste fern.

- **Warnungen und Fehler von Plugins.** Schreibt ein Plugin Warnungen oder Fehler ins Log, bekommen Admins pro Plugin oder Kamera einen Eintrag, der sie sammelt, mit Anzahl und Zeitpunkt jeder Meldung. War das Plugin eine Weile ruhig oder wurde es neu gestartet, beginnt die nächste Warnung einen neuen Eintrag. **Log öffnen** öffnet das Log dieses Plugins oder dieser Kamera bei der letzten Meldung und hebt die Warnungen und Fehler dieser Sekunde hervor. Reicht das Log nicht mehr so weit zurück, sagt ein Hinweis, wo es beginnt.
- **Alarme in einer Schleife.** Ein Plugin oder eine Automation, die weit mehr Alarme als üblich sendet, wird kurz zurückgehalten, und ein Eintrag sagt, wie viele zurückgehalten wurden.

Beide Arten von Einträgen bleiben in der Liste und lösen nie einen Push aus.

## Push aufs Handy bekommen

Push aufs Handy braucht alles davon. Fehlt eines, landen Alarme nur in der In-App-Glocke:

1. **Die native App.** Push erreicht nur die [Mobile-App](/de/install/mobile) aus dem App Store oder Play Store. Ein Browser oder die Web-App (PWA) zeigt die In-App-Glocke, aber nie Push.
2. **camera.ui Cloud.** Push wird über [camera.ui Cloud](/de/remote/cloud) zugestellt, der Server braucht sie also aktiviert und mit deinem Konto [gekoppelt](/de/remote/pairing). Die App öffnet den Server über dieses Konto, ein mit [Direkt verbinden](/de/install/mobile#direkt) hinzugefügter Server bekommt keinen Push. Außerdem ist ein aktives Abo nötig.
3. **Eingeschaltet.** Öffne in der App **Einstellungen → Benachrichtigungen** und schalte den Hauptschalter ein. Sobald die App Benachrichtigungen senden darf, meldet sich das Handy von selbst beim Server für Push an. Hast du das Handy aus der Geräteliste entfernt, tippe auf **Dieses Gerät synchronisieren**, um wieder Push zu bekommen.

**Push repariert sich nach einer Neuinstallation selbst.** Neu installieren, App-Daten löschen oder ein neues Handy setzt den Push-Token zurück, und die App registriert sich im Hintergrund neu beim Server. Klappt das nicht (etwa weil die Benachrichtigungs-Berechtigung aus ist), erscheint auf jedem Bildschirm ein Hinweis **Push-Nachrichten kommen nicht mehr an** mit einem **Beheben**-Button. **Erneut synchronisieren** unter **Einstellungen → Benachrichtigungen** tut dasselbe. Die Zeile **Dieses Gerät** verlangt nur dann eine Synchronisierung, wenn der Server dieses Handy wirklich nicht kennt.

**Stummschalten aus dem Push.** Halte einen Kamera-Push gedrückt und wähle **Diese Kamera 1 Stunde stummschalten** oder **Alle Kameras 1 Stunde stummschalten**. Beides gilt nur für dieses Handy, Alarme über camera.ui selbst kommen weiter an.

## Push bleibt privat

Alarme werden Ende-zu-Ende-verschlüsselt, bevor sie deinen Server verlassen. camera.ui Cloud, Google und Apple leiten sie nur weiter und können sie nicht lesen. Bilder und Clips, auch mit **Video in Push**, lädt dein Handy direkt von deinem Server, die Cloud sieht also nie ein Bild.

## Deine Benachrichtigungs-Einstellungen

<Shot src="/img/notifications/notification-settings.png" alt="Benachrichtigungs-Einstellungen" />

**Einstellungen → Benachrichtigungen** gehört zu deinem Konto und gilt auf jedem Gerät, auf dem du dich anmeldest.[^device]

- **Hauptschalter.** Alle Benachrichtigungen an oder aus. Bei einem neuen Konto aus, die übrigen Bereiche erscheinen erst, wenn er an ist.
- **Dieses Gerät.** Zeigt auf dem Handy, ob es Push bekommt. **Dieses Gerät synchronisieren** richtet es wieder ein, nachdem du es aus der Geräteliste entfernt hast. In der Desktop-App schaltest du hier die nativen Benachrichtigungen für diesen einen Computer an oder aus.
- **Live-Bild bei Ereignissen.** Nur in der Desktop-App, eine eigene Karte. Siehe [Live-Bild am Computer](#live-bild-am-computer).
- **Ruhezeiten.** Nicht-kritische Alarme in einem täglichen Zeitfenster stummschalten. Kritische Alarme kommen trotzdem durch, und die In-App-Liste bleibt aktuell.
- **Glocke.** Was die Glocke auflistet und zählt: **Warnungen und Fehler**, **Kameras**, **Plugins**, **System** und **Automationen**, jeweils mit eigenem Schalter. Warnungen und Fehler richten sich nur nach ihrem eigenen Schalter, egal woher sie kommen. Was du ausschaltest, kommt weiter auf deinen Geräten an und bleibt in der ganzen Liste.
- **System-Benachrichtigungen.** Hinweise zu camera.ui selbst: Server- und App-Updates, Plugin-Updates, ein gescheitertes Update, ein Plugin, das abstürzt oder sich wieder fängt, ein Worker mit Kameras oder Plugins, der zwei Minuten offline ist und wiederkommt, ein Fernzugriff, der zehn Minuten ausfällt und wiederkommt,[^remote] und ein gescheitertes [geplantes Backup](/de/admin/backup#geplante-backups). Jeder Eintrag hat einen eigenen Schalter.[^admin]
- **Plugin-Benachrichtigungen.** Hinweise, die Plugins senden, etwa wenn eine Kamera offline geht oder der Speicher volläuft. Jedes Plugin hat einen eigenen Schalter. Tippst du auf einen Kamera-offline- oder -online-Alarm, öffnet sich das Log dieser Kamera, wo der Grund für den Ausfall meist zu sehen ist. Speicher-, Lizenz- und Cloud-Anmelde-Hinweise des NVR öffnen **Einstellungen → Aufnahmen**.
- **Geräte.** Die Handys und anderen Ziele, an die deine Alarme gehen. Benenne eines um, schalte **Aktiv** aus, um es zu pausieren, oder entferne es ganz. Admins sehen auch die Geräte der anderen Konten und die Ziele der ganzen Installation, etwa die Notify-Ziele von Home Assistant. Diese richten sich nach den Einstellungen der Admins.

Alarme kommen in der [Instanzsprache](/de/admin/system#instanzsprache), für alle Konten gleich.

## Live-Bild am Computer

In der Desktop-App öffnet die Karte **Live-Bild bei Ereignissen** unter **Einstellungen → Benachrichtigungen** eine Kamera live in einem kleinen Fenster in einer Bildschirmecke, wenn ein Alarm für sie kommt. Das Fenster liegt über anderen Apps, auch über Apps im Vollbild, und nimmt nicht den Fokus. Es öffnet sich nicht, solange das Fenster der App im Vordergrund ist, und schließt sich, sobald die Kamera ein paar Sekunden nichts mehr erkannt hat.[^popup]

- **Position**, **Größe** und **Bildschirm.** Die Ecke, die Fenstergröße und ob die Fenster auf dem Hauptbildschirm erscheinen oder auf dem, auf dem das App-Fenster liegt.
- **Fenster.** Wie viele Kameras nebeneinander erscheinen. Weitere Kameras stapeln sich im letzten Fenster, ihre Bilder liegen in seiner unteren Ecke, ein Klick auf eines wechselt zu dieser Kamera. Schließt du ein Fenster, kommt die nächste Kamera aus dem Stapel.
- **Ton.** Standardmäßig aus. **Nur Türklingel** oder **Bei jedem Ereignis** startet das Fenster mit Ton, der Lautsprecher-Button im Fenster schaltet ihn um.
- **Kameras.** Welche Kameras ein Fenster öffnen dürfen. Leer heißt alle.
- **Vorschau zeigen** öffnet die Fenster mit deinen Kameras, damit du siehst, wo sie erscheinen.

Solange die Maus über einem Fenster ist, bleibt es offen, die Stecknadel hält es dauerhaft offen, ein Doppelklick öffnet die Kamera in der App. Bei mehreren Fenstern oder einem Stapel schließt **Alle schließen** alles auf einmal. Der Kameraname blendet nach ein paar Sekunden aus und kommt beim Überfahren zurück. Über das Tray-Symbol pausierst du die Fenster für eine oder acht Stunden. Solange die App läuft, steht der Computer auch in der Liste **Auf anderem Bildschirm abspielen** im Player deiner anderen Geräte, und eine dorthin gesendete Kamera öffnet sich in so einem Fenster, bis du es schließt. Senden braucht ein Admin-Konto.

## Worüber jede Kamera dich alarmiert

Jede Kamera hat eigene Benachrichtigungs-Einstellungen, in den [Einstellungen](/de/cameras/settings) der Kamera unter **Benachrichtigungen**:[^nvr]

- **Benachrichtigungen senden.** Der eigene Schalter der Kamera. Aus heißt, diese Kamera sendet nie einen Push, ihre Ereignisse landen aber weiter auf der Timeline und in der App. Standardmäßig an.
- **Worüber du alarmiert wirst.** Legen die [Alarmzonen](/de/cameras/zones-and-masks#alarmzonen) der Kamera fest, nicht diese Einstellungen. Ohne Alarmzone alarmiert die Kamera bei allem, was sie erkennt. Zeichne eine, um es nach Typ und Bereich einzugrenzen.
- **Kameras ohne Objekterkennung.** Sie senden stattdessen **Motion Detected** mit Bild, einmal pro Ereignis. Ihre [Bewegungszonen](/de/cameras/zones-and-masks#bewegungszonen) legen fest, wo Bewegung zählt, und die Sperrzeit gilt.
- **Welche Gesichter und Kennzeichen dich alarmieren.** Legen ebenfalls die [Alarmzonen](/de/cameras/zones-and-masks#wer-genau-und-welches-kennzeichen) fest. Eine Zone kann benennen, für wen sie meldet, mit Einträgen für unbekannte Gesichter und für alle Hinterlegten, und dasselbe für Kennzeichen. Nichts ausgewählt meldet für alle.
- **Bei Geräuschen melden.** Welche Geräusche, etwa Alarme oder Glasbruch.
- **Bei Sensoren melden.** Welche Sensor-Trigger eine Benachrichtigung schicken, etwa eine Türklingel, ein Kontakt, ein Schloss oder ein Rauchmelder. Schalter, Lichter und Strom melden, wenn sie eingeschaltet werden.
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
[^device]: Die Zeile **Dieses Gerät** und die Karte **Live-Bild bei Ereignissen** sind die Ausnahme. Sie betreffen nur das Handy oder den Computer, an dem du gerade bist.
[^popup]: Nur solange die App läuft. Unter Windows und Linux beendet Schließen des Fensters die App, außer [In den Tray schließen](/de/install/desktop#das-tray-symbol) ist an.
[^admin]: Den Bereich mit den System-Benachrichtigungen sehen nur Admins.
[^remote]: camera.ui prüft die Verbindung zur camera.ui Cloud und den eigenen Cloudflare-Tunnel. Eine eigene Domain hinter deinem Proxy prüft camera.ui nicht.
[^nvr]: Das Senden übernimmt das NVR-Plugin, eine Kamera ohne Plugin speichert die Einstellungen also und nutzt sie, sobald eins installiert ist.
[^ai]: KI-Beschreibungen stammen vom NVR-Plugin. Schalte sie in dessen Einstellungen ein.
[^androidframes]: Android-Benachrichtigungen können kein Video abspielen, deshalb zieht die aktuelle App Einzelbilder aus dem Clip und blättert sie durch. Antippen öffnet weiterhin die Aufnahme.
