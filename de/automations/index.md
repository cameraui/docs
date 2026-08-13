---
title: Automationen erstellen
---

# Automationen erstellen

Automationen verbinden, was an deinen Kameras passiert, mit Aktionen, die camera.ui ausführen kann. Du baust sie visuell: Ziehe **Nodes** auf eine Arbeitsfläche und verbinde sie zu einem Ablauf. Automationen sind eine Admin-Funktion.

<Shot src="/img/automations/editor-canvas.png" alt="Automations-Editor-Canvas" />

## Wie ein Ablauf funktioniert

Ein Ablauf läuft von links nach rechts: Ein **Trigger** startet ihn, optionale **Bedingungen** entscheiden, ob es weitergeht, und **Aktionen** tun etwas. **Hilfsmittel** helfen, Daten zwischen den Schritten weiterzugeben.

Öffne **Automatisierungen** aus dem Menü und erstelle mit der **+**-Schaltfläche eine neue. Ein neuer Ablauf startet leer und deaktiviert, sodass du ihn bauen kannst, bevor er läuft.

## Trigger

Ein Trigger ist das, was einen Ablauf startet. Du kannst mehrere verwenden.

- **Erkennungsereignis.** Etwas an einer Kamera erkannt: Bewegung, eine Person, ein Fahrzeug oder Tier, ein Audio-Ereignis wie eine Türklingel oder Glasbruch, ein erkanntes Gesicht oder ein Kennzeichen. Filtere nach Objekt, Confidence und Ereignis-Phase (Start, Update, Ende).
- **Sensoränderung.** Der Zustand eines Sensors ändert sich, etwa ein sich öffnender Kontaktsensor. Das umfasst auch die Erkennungssensoren deiner Kameras: Bewegung, Objekte, Gesichter, Kennzeichen und Klassifizierer. Gesichts-, Kennzeichen- und Klassifizierer-Sensoren tragen das Erkannte, ein Ablauf kann also auf eine bestimmte Person, ein bestimmtes Auto, ein Kennzeichen oder ein Ergebnis reagieren, etwa einen Vogel-Klassifizierer, der die Art meldet.[^detvssensor]
- **Zeitplan.** Eine wiederkehrende Zeit, per Cron-Ausdruck.
- **Systemereignis.** Etwas in camera.ui selbst, etwa eine Kamera, die sich verbindet oder trennt, oder ein Plugin, das startet oder stoppt.
- **Webhook.** Ein externer Dienst ruft eine URL auf, um den Ablauf zu starten.
- **MQTT-Nachricht.** Eine Nachricht geht auf einem MQTT-Topic ein. Setze das Topic (die Wildcards `+` und `#` funktionieren) und wähle den Abgleich: jede Nachricht, ein exakter Payload oder ein Wert an einem JSON-Pfad wie `params.switch:0.output`. Benötigt die MQTT-Verbindung in den Einstellungen.
- **Geofence.** Ein Benutzer betritt oder verlässt einen von dir definierten Ort.
- **Manuell.** Du startest den Ablauf selbst mit der **Ausführen**-Schaltfläche, nützlich beim Bauen und Testen.

[Virtuelle Sensoren](/de/sensors/virtual) funktionieren hier ebenfalls. Du erstellst sie auf der Sensoren-Seite, setzt sie dann mit einer **Sensor steuern**-Aktion und reagierst mit einem **Sensoränderung**-Trigger darauf.

## Bedingungen

Bedingungen entscheiden, ob ein Ablauf weiterläuft:

- **Wenn / Sonst.** Verzweigen anhand eines Vergleichs.
- **Verzweigung.** Verzweigen anhand mehrerer möglicher Werte.
- **Sensorstatus.** Einen oder mehrere Sensoren prüfen, mit UND oder ODER kombiniert. Jeder Wert kann ein fester Wert sein oder eine Variable aus einem früheren Schritt. Bei einem Erkennungssensor kannst du einen bestimmten Wert prüfen, etwa einen erkannten Namen, ein Kennzeichen oder ein Klassifizierer-Label. Hält ein Sensor mehrere Werte gleichzeitig, passt die Prüfung, wenn einer davon passt, und der Abgleich ignoriert Groß- und Kleinschreibung.
- **Zeitbereich.** Nur innerhalb einer Tageszeit-Spanne und an gewählten Tagen weiterlaufen.

## Aktionen

Aktionen sind das, was der Ablauf tut:

- **Benachrichtigung senden.** Einen Alarm mit Titel, Nachricht und Schweregrad senden.
- **Benachrichtigungen an/aus.** Push stummschalten oder wieder freigeben. Unter **Gilt für** wählst du **Alle**, **Eine Kamera** oder **Einen Nutzer**. Schaltest du eine Kamera stumm, hört ihr Push auf, während alle anderen Kameras weiter melden, du kannst also tagsüber die Straßenkamera ruhigstellen und nachts wieder anschalten. Stummgeschaltete Alarme landen weiterhin in der In-App-Glocke, und die Ereignisse erscheinen weiter auf der Timeline. Kritische Alarme kommen immer durch.
- **Schnappschuss.** Ein frisches Bild einer Kamera aufnehmen.
- **Sensor steuern.** Ein Zubehör setzen, etwa ein Licht einschalten oder eine Tür verriegeln. Werte können fest sein oder aus einer Variable kommen.
- **Kamera-Steuerung.** Eine oder mehrere Einstellungen einer Kamera in einem Schritt ändern: Erkennung pausieren, Kamera deaktivieren, Aufnahme (an/aus, Modus, Vorpuffer und welche Streams aufgezeichnet werden), Erkennungs-Schwellwerte und Timeouts, PTZ-Autotrack (an/aus, verfolgte Objekttypen, Rückkehr zur Ausgangsposition, Mindest-Konfidenz) und die Snapshot-Aktualisierung. "Nur den Hauptstream aufnehmen, solange die Disk voll ist" ist damit eine Automation.
- **HTTP-Anfrage.** Einen externen Dienst aufrufen.
- **MQTT Publish.** Eine Nachricht auf ein MQTT-Topic senden. Setze Topic und Payload, und schalte **Retain** ein, wenn der Broker die Nachricht für später hinzukommende Abonnenten behalten soll. Wildcards sind im Topic nicht erlaubt. Benötigt die MQTT-Verbindung in den Einstellungen.
- **Plugin-Aufruf.** Ein Erkennungs- oder Analyse-Plugin auf ein Bild anwenden.
- **Variable setzen** und **Verzögerung.** Einen Wert halten oder vor dem nächsten Schritt warten.

## Hilfsmittel

- **Bild-Eingabe.** Ein Bild laden (aus einer URL, einer Variable oder einem Upload), das eine Aktion nutzen kann.
- **Ausgabe.** Ergebnisse sammeln, um sie nach dem Lauf anzusehen.

## Optionen und Ausführen

In der Toolbar kannst du den Ablauf benennen, **Aktiviert** an- oder ausschalten und zwei Verhalten setzen:

- **Wiederholte Ereignisse ignorieren**, sodass ein Schwung Trigger den Ablauf einmal ausführt.
- **Auf Abschluss warten**, sodass ein neuer Trigger wartet, bis der aktuelle Lauf fertig ist.

Speichere mit der **Speichern**-Schaltfläche. Hat dein Ablauf einen **Manuell**-Trigger, kannst du ihn mit **Ausführen** testen. In der Liste zeigt jede Automation, wann sie zuletzt lief, und camera.ui deaktiviert eine automatisch, wenn sie auf eine entfernte Kamera oder einen entfernten Sensor zeigt, mit einem Hinweis zum Korrigieren. In der Liste kannst du mehrere Automationen auf einmal auswählen, um sie zusammen zu aktivieren, zu deaktivieren oder zu löschen.

Zum Teilen von Automationen siehe [Blueprints & Store](/de/automations/blueprints).

[^detvssensor]: Ein Erkennungsereignis feuert bei jedem Roh-Ereignis, während es passiert. Eine Sensoränderung reagiert auf den eigenen Zustand des Sensors, der die erkannten Namen, Kennzeichen oder Labels behält, solange das Subjekt im Bild bleibt.
