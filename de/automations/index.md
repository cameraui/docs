---
title: Automationen erstellen
---

# Automationen erstellen

Automationen verbinden, was an deinen Kameras passiert, mit Aktionen: Ziehe **Nodes** auf eine Arbeitsfläche und verbinde sie zu einem Ablauf. Automationen sind eine Admin-Funktion.

<Shot src="/img/automations/editor-canvas.png" alt="Automations-Editor-Canvas" />

## Wie ein Ablauf funktioniert

Ein Ablauf läuft von links nach rechts: Ein **Trigger** startet ihn, optionale **Bedingungen** entscheiden, ob es weitergeht, und **Aktionen** tun etwas. **Hilfsmittel** helfen, Daten zwischen den Schritten weiterzugeben.

Ein neuer Ablauf (**+** auf der Seite **Automatisierungen**) startet leer und deaktiviert.

## Trigger

Ein Ablauf kann mehrere Trigger haben.

- **Erkennungsereignis.** Etwas an einer Kamera erkannt: Bewegung, eine Person, ein Fahrzeug oder Tier, ein Audio-Ereignis wie eine Türklingel oder Glasbruch, ein erkanntes Gesicht oder ein Kennzeichen. Filtere nach Objekt, Confidence und Ereignis-Phase (Start, Update, Ende).
- **Sensoränderung.** Der Zustand eines Sensors ändert sich, etwa ein sich öffnender Kontaktsensor. Das umfasst auch die Erkennungssensoren deiner Kameras: Bewegung, Objekte, Gesichter, Kennzeichen und Klassifizierer. Gesichts-, Kennzeichen- und Klassifizierer-Sensoren tragen das Erkannte, ein Ablauf kann also auf eine bestimmte Person, ein bestimmtes Auto, ein Kennzeichen oder ein Ergebnis reagieren, etwa einen Vogel-Klassifizierer, der die Art meldet.[^detvssensor]
- **Zeitplan.** Eine wiederkehrende Zeit, per Cron-Ausdruck.
- **Systemereignis.** Etwas in camera.ui selbst, etwa eine Kamera, die sich verbindet oder trennt, ein Plugin, das startet oder stoppt, oder ein Plugin, das eine Benachrichtigung sendet. Letzteres macht jeden Plugin-Push zum Auslöser, zum Beispiel einen Textalarm des NVR-Plugins: Titel und Datenfelder der Benachrichtigung stehen als <span v-pre>`{{system.title}}`, `{{system.type}}`, `{{system.alertTitle}}`</span> und so weiter bereit, eine **Wenn/Sonst**-Bedingung wählt den gemeinten aus.
- **Webhook.** Ein externer Dienst ruft eine URL auf, um den Ablauf zu starten.
- **MQTT-Nachricht.** Eine Nachricht geht auf einem MQTT-Topic ein. Setze das Topic (die Wildcards `+` und `#` funktionieren) und wähle den Abgleich: jede Nachricht, ein exakter Payload oder ein Wert an einem JSON-Pfad wie `params.switch:0.output`. Benötigt die MQTT-Verbindung in den Einstellungen.
- **Geofence.** Ein Benutzer betritt oder verlässt einen von dir definierten Ort.
- **Manuell.** Startet über **Ausführen**, zum Testen.

[Virtuelle Sensoren](/de/sensors/virtual) setzt du mit einer **Sensor steuern**-Aktion, reagieren lässt sich auf sie mit **Sensoränderung**.

## Bedingungen

- **Wenn / Sonst.** Verzweigen anhand eines Vergleichs.
- **Verzweigung.** Verzweigen anhand mehrerer möglicher Werte.
- **Sensorstatus.** Einen oder mehrere Sensoren prüfen, mit UND oder ODER kombiniert. Jeder Wert kann ein fester Wert sein oder eine Variable aus einem früheren Schritt. Bei einem Erkennungssensor kannst du einen bestimmten Wert prüfen, etwa einen erkannten Namen, ein Kennzeichen oder ein Klassifizierer-Label. Hält ein Sensor mehrere Werte gleichzeitig, passt die Prüfung, wenn einer davon passt, und der Abgleich ignoriert Groß- und Kleinschreibung.
- **Zeitbereich.** Nur innerhalb einer Tageszeit-Spanne und an gewählten Tagen weiterlaufen.

## Aktionen

- **Benachrichtigung senden.** Einen Alarm mit Titel, Nachricht und Schweregrad senden.
- **Benachrichtigungen an/aus.** Push stummschalten oder wieder freigeben. Unter **Gilt für** wählst du **Alle**, **Eine Kamera** oder **Einen Nutzer**. Eine stummgeschaltete Kamera betrifft die anderen nicht. Stummgeschaltete Alarme landen weiterhin in der In-App-Glocke, und die Ereignisse erscheinen weiter auf der Timeline. Kritische Alarme kommen immer durch.
- **Schnappschuss.** Ein frisches Bild einer Kamera aufnehmen.
- **Sensor steuern.** Ein Zubehör setzen, etwa ein Licht einschalten oder eine Tür verriegeln. Werte können fest sein oder aus einer Variable kommen.
- **Kamera-Steuerung.** Eine oder mehrere Einstellungen einer Kamera in einem Schritt ändern: Erkennung pausieren, Kamera deaktivieren, Aufnahme (an/aus, Modus, Vorpuffer und welche Streams aufgezeichnet werden), Erkennungs-Schwellwerte und Timeouts, PTZ-Autotrack (an/aus, verfolgte Objekttypen, Rückkehr zur Ausgangsposition, Mindest-Konfidenz) und die Snapshot-Aktualisierung.
- **HTTP-Anfrage.** Einen externen Dienst aufrufen.
- **MQTT Publish.** Eine Nachricht auf ein MQTT-Topic senden. Setze Topic und Payload, und schalte **Retain** ein, wenn der Broker die Nachricht für später hinzukommende Abonnenten behalten soll. Wildcards sind im Topic nicht erlaubt. Benötigt die MQTT-Verbindung in den Einstellungen.
- **Plugin-Aufruf.** Ein Erkennungs- oder Analyse-Plugin auf ein Bild anwenden.
- **Assistenten fragen.** Die Lage an den [Assistenten](/de/assistant/) geben und seine Antwort nutzen: Nutzer wählen, für den er antwortet, die Frage mit den Variablen des Flows schreiben, optional ein Bild mitgeben und als Push, als Gespräch oder nur als Variable für die nächsten Schritte zustellen.
- **Variable setzen** und **Verzögerung.** Einen Wert halten oder vor dem nächsten Schritt warten.

## Hilfsmittel

- **Bild-Eingabe.** Ein Bild laden (aus einer URL, einer Variable oder einem Upload), das eine Aktion nutzen kann.
- **Ausgabe.** Ergebnisse sammeln, um sie nach dem Lauf anzusehen.

## Werte zwischen Schritten weitergeben

Schritte reichen Werte über **Variablen** weiter. Ein Knoten, der etwas produziert, bietet in seinen Einstellungen **Ausgabevariable hinzufügen** an: Gib ihr einen Namen, und jeder dahinter verdrahtete Schritt kann den Wert nutzen. **Variablen** an einem Schritt listet, was verfügbar ist; ist die Liste leer, ist der Quell-Knoten noch nicht verbunden.

Geschrieben wird eine Variable als <span v-pre>`{{name}}`</span>, in jedem Textfeld. Felder, die nur einen Wert annehmen, etwa ein Sensorwert oder eine Bedingung, lassen dich die Variable stattdessen aus einer Liste wählen.

**Variable setzen** hält einen Wert für spätere Schritte fest. **Alias** an einem Knoten stellt seinen Ausgabevariablen ein Präfix voran, aus `result` zweier Plugins wird so `cam1.result` und `cam2.result` statt eines Namenskonflikts.

Ein Tippfehler fällt beim Speichern auf, **Unbekannte Variable** nennt dann die, die nicht aufgelöst werden konnte.

## Optionen und Ausführen

Die Toolbar enthält den Namen, **Aktiviert** und zwei Verhalten:

- **Wiederholte Ereignisse ignorieren**, sodass ein Schwung Trigger den Ablauf einmal ausführt.
- **Auf Abschluss warten**, sodass ein neuer Trigger wartet, bis der aktuelle Lauf fertig ist.

camera.ui deaktiviert eine Automation automatisch, wenn sie auf eine entfernte Kamera oder einen entfernten Sensor zeigt, mit einem Hinweis zum Korrigieren. In der Liste siehst du, wann jede Automation zuletzt lief, und kannst mehrere auf einmal aktivieren, deaktivieren oder löschen.

Zum Teilen von Automationen siehe [Blueprints & Store](/de/automations/blueprints).

[^detvssensor]: Ein Erkennungsereignis feuert bei jedem Roh-Ereignis, während es passiert. Eine Sensoränderung reagiert auf den eigenen Zustand des Sensors, der die erkannten Namen, Kennzeichen oder Labels behält, solange das Subjekt im Bild bleibt.
