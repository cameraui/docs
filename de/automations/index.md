---
title: Automationen erstellen
---

# Automationen erstellen

Automationen verbinden, was an deinen Kameras passiert, mit Aktionen, die camera.ui ausführen kann. Du baust sie visuell: Ziehe **Nodes** auf eine Arbeitsfläche und verbinde sie zu einem Ablauf. Automationen sind eine Admin-Funktion.

<Shot src="/img/automations/editor-canvas.png" alt="Automations-Editor-Canvas" />

## Wie ein Ablauf funktioniert

Ein Ablauf läuft von links nach rechts: Ein **Trigger** startet ihn, optionale **Bedingungen** entscheiden, ob es weitergeht, und **Aktionen** tun etwas. **Utilities** helfen, Daten zwischen den Schritten weiterzugeben.

Öffne **Automations** aus dem Menü und erstelle mit der **+**-Schaltfläche eine neue. Ein neuer Ablauf startet leer und deaktiviert, sodass du ihn bauen kannst, bevor er läuft.

## Trigger

Ein Trigger ist das, was einen Ablauf startet. Du kannst mehrere verwenden.

- **Erkennungsereignis.** Etwas an einer Kamera erkannt: Bewegung, eine Person, ein Fahrzeug, Tier oder Paket, ein Audio-Ereignis wie eine Türklingel oder Glasbruch, ein erkanntes Gesicht oder ein Kennzeichen. Filtere nach Objekt, Confidence und Ereignis-Phase (Start, Update, Ende).
- **Sensoränderung.** Der Zustand eines Sensors ändert sich, etwa ein sich öffnender Kontaktsensor.
- **Zeitplan.** Eine wiederkehrende Zeit, per Cron-Ausdruck.
- **Systemereignis.** Etwas in camera.ui selbst, etwa eine Kamera, die sich verbindet oder trennt, oder ein Plugin, das startet oder stoppt.
- **Webhook.** Ein externer Dienst ruft eine URL auf, um den Ablauf zu starten.
- **Geofence.** Ein Benutzer betritt oder verlässt einen von dir definierten Ort.
- **Manuell.** Du startest den Ablauf selbst mit der **Ausführen**-Schaltfläche, nützlich beim Bauen und Testen.

## Bedingungen

Bedingungen entscheiden, ob ein Ablauf weiterläuft:

- **Wenn / Sonst.** Verzweigen anhand eines Vergleichs.
- **Verzweigung.** Verzweigen anhand mehrerer möglicher Werte.
- **Sensorstatus.** Einen oder mehrere Sensoren prüfen, mit UND oder ODER kombiniert.
- **Zeitbereich.** Nur innerhalb einer Tageszeit-Spanne und an gewählten Tagen weiterlaufen.

## Aktionen

Aktionen sind das, was der Ablauf tut:

- **Benachrichtigung senden.** Einen Alarm mit Titel, Nachricht und Schweregrad senden.
- **Schnappschuss.** Ein frisches Bild einer Kamera aufnehmen.
- **Sensor steuern.** Ein Zubehör setzen, etwa ein Licht einschalten oder eine Tür verriegeln.
- **Kamera-Steuerung.** Eine Kamera-Einstellung ändern, etwa die Erkennung pausieren.
- **HTTP-Anfrage.** Einen externen Dienst aufrufen.
- **Plugin-Aufruf.** Ein Erkennungs- oder Analyse-Plugin auf ein Bild anwenden.
- **Variable setzen** und **Verzögerung.** Einen Wert halten oder vor dem nächsten Schritt warten.

## Utilities

- **Bild-Eingabe.** Ein Bild laden (aus einer URL, einer Variable oder einem Upload), das eine Aktion nutzen kann.
- **Ausgabe.** Ergebnisse sammeln, um sie nach dem Lauf anzusehen.

## Optionen und Ausführen

In der Toolbar kannst du den Ablauf benennen, **Aktiviert** an- oder ausschalten und zwei Verhalten setzen:

- **Wiederholte Ereignisse ignorieren**, sodass ein Schwung Trigger den Ablauf einmal ausführt.
- **Auf Abschluss warten**, sodass ein neuer Trigger wartet, bis der aktuelle Lauf fertig ist.

Speichere mit der **Speichern**-Schaltfläche. Hat dein Ablauf einen **Manuell**-Trigger, kannst du ihn mit **Ausführen** testen. In der Liste zeigt jede Automation, wann sie zuletzt lief, und camera.ui deaktiviert eine automatisch, wenn sie auf eine entfernte Kamera oder einen entfernten Sensor zeigt, mit einem Hinweis zum Korrigieren.

Zum Teilen von Automationen siehe [Blueprints & Store](/de/automations/blueprints).
