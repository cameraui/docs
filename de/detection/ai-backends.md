---
title: Objekterkennung & KI-Backends
---

# Objekterkennung & KI-Backends

Objekterkennung findet **Personen, Fahrzeuge und Tiere** im Bild und ist die Basis für Gesichter, Kennzeichen und semantische Suche. Sie läuft auf einem **KI-Backend**, das du passend zu deiner Hardware wählst.

## Ein Backend wählen

camera.ui liefert sechs KI-Backends als Plugins. Wähle das für deine Hardware und aktiviere es pro Kamera unter [Einstellungen → Plugins](/de/cameras/settings) (siehe [Sensoren einrichten](/de/sensors/setup)):

- **CoreML.** Für Apple-Silicon-Macs; nutzt GPU und Neural Engine.
- **OpenVINO.** Für Intel-CPUs und -GPUs.
- **ONNX.** Plattformübergreifend, auf CPU oder einer unterstützten GPU.
- **NCNN.** Ein leichtgewichtiges Backend für unterstützte Hardware. (Keine semantische Suche.)
- **Coral.** Für eine Coral Edge TPU, mit CPU-Fallback. Nur Linux.
- **Hailo.** Für einen Hailo-8- / Hailo-8L-Beschleuniger. Nur Linux.

CoreML, OpenVINO, ONNX und NCNN liefern Objekt-, Gesichts- und Kennzeichen-Erkennung. CoreML, OpenVINO und ONNX liefern zusätzlich CLIP für die [semantische Suche](/de/detection/semantic-search). Coral und Hailo sind Edge-AI-Beschleuniger-Backends, die nur Objekterkennung liefern (keine Gesichts- oder Kennzeichen-Erkennung, kein CLIP).


## Modelle und Confidence

In den Plugin-Settings eines Backends wählst du ein **Modell** pro Aufgabe (Objekt, Gesicht, Kennzeichen, CLIP). Größere Modelle sind genauer, aber schwerer. camera.ui lädt die benötigten Modelle automatisch herunter.

Die Konfidenz wird nicht hier gesetzt, sondern pro Kamera unter [Einstellungen → Erkennung](/de/cameras/settings), für Objekt-, Gesichts- und Kennzeichen-Erkennung gleichermaßen, und eine Änderung greift sofort. Objekte haben einen Wert pro Typ, je zwischen 0,3 und 1: **Personen-Konfidenz**, **Fahrzeug-Konfidenz** und **Tier-Konfidenz**.

Welche Objekttypen eine Kamera meldet, legst du in ihren [Objektzonen](/de/cameras/zones-and-masks#objektzonen) fest. Bewegung und Audio sind davon nicht betroffen.

Neben den Konfidenz-Werten liegt **Objekt Timeout** in Sekunden (mindestens 10, Standard 15). Es betrifft nur Kameras, die Objekte selbst melden, etwa viele Reolink-Modelle: Es begrenzt, wie lange so eine Erkennung aktiv bleibt, wenn die Kamera kein Ende-Signal sendet. Frame-basierte Backends ignorieren es.

Darunter liegt **Statische Objekte ignorieren**, standardmäßig an, siehe [Unbewegte Objekte](/de/detection/events-and-detections#unbewegte-objekte).

## Wohin die Erkennung schaut

Ein Erkennungsmodell arbeitet auf einem kleinen Quadrat, oft 640 Pixel. In dieses Quadrat gequetscht, bleiben von einer Person am Ende der Einfahrt in einem 4K-Frame nur ein paar Pixel übrig. camera.ui schneidet deshalb die Bereiche mit Bewegung aus dem Frame in voller Auflösung heraus, bei verteilter Bewegung auch mehrere pro Frame, lässt das Modell darauf laufen und legt die Boxen zurück aufs Bild. So werden auch kleine und entfernte Objekte gefunden. Nichts einzurichten.

Bewegt sich nichts, geht der ganze Frame durch. Die Spalte **Zoom** in den Metriken unten zeigt, wie oft eine Kamera so gearbeitet hat.

## Was Erkennung kostet

**Metrics → Kameras** zeigt zwei Tabellen. Die erste ist die Prozess-Tabelle, eine Zeile pro Kamera, mit CPU und Speicher. Die zweite, **Erkennung**, zeigt, wohin die Zeit geht:

- **Decode**, die Zeit für ein Bild: erst der Analyse-Stream, dann der hochauflösende.
- **Verarbeitung**, das Skalieren auf die Modelleingabe und das Zurückrechnen in Boxen. Bei einer Kamera ohne Objekterkennung steht dort das Skalieren für die Bewegungserkennung.
- **Transport**, die Zeit, die Bild und Ergebnis zum Plugin und zurück brauchen.
- **Analysiert**, analysierte Bilder pro Sekunde, wieder Analyse-Stream und hochauflösender Stream.
- **Aktiv**, der Anteil der Zeit, in dem die Kamera überhaupt analysiert hat. Eine Kamera mit Bildschleife liegt bei 100%, eine Kamera, die Bewegung selbst meldet, zählt nur während Ereignissen.
- **Erkennungen**, gefundene Objekte pro analysiertem Bild.
- **Zoom**, der Anteil der Objekterkennungen, die auf gezoomte Bewegungsfenster statt aufs ganze Bild geschaut haben, dahinter die Anzahl Fenster pro gezoomtem Bild.

<Shot src="/img/admin/metrics-detection.png" alt="Die Erkennungs-Tabelle unter Metrics, Kameras" />

**Inferenz anzeigen** schaltet dieselbe Tabelle auf die Zeit innerhalb jedes Detektors um: **Bewegung**, **Objekt**, **Gesicht**, **Kennzeichen**, **Klassifizierer** und **CLIP**. Zeig auf eine Zelle, um Plugin, Modell und Gerät zu sehen; eine Kamera auf einem [Worker](/de/admin/workers) nennt diesen Worker. Die Werte sind Durchschnitte seit dem Start der Kamera; nach einem Modellwechsel **Zurücksetzen**. **Kopieren** legt beide Ansichten für jede Kamera als Text in die Zwischenablage.

### Benchmark

**Benchmark** belastet den Objekt-Detektor der gewählten Kameras mit Testbildern und meldet, wie viele Erkennungen pro Sekunde die Maschine schafft, insgesamt und je Kamera, mit Plugin, Modell und Gerät jeder Kamera. **Kopieren** legt das Ergebnis in die Zwischenablage.

Während des Laufs pausiert die Erkennung an jeder Kamera, auch an denen, die du nicht gewählt hast, und läuft danach weiter. Nur Admins können ihn starten.

## Objekt-Assistenz

Manche Kameras erkennen Objekte selbst, melden aber nur, dass sie etwas gesehen haben, nicht wo im Bild. Viele Reolink-Modelle arbeiten so. Damit hat die Gesichts- und Kennzeichenerkennung nichts zum Heranzoomen und findet selten etwas.

Wähle unter dem **Plugins**-Tab der Kamera unter **Objekt** ein **Objekt-Assistenz**-Plugin. Es ist ein zweiter Detektor, der die Person oder das Fahrzeug im Bild lokalisiert, damit Gesichts- und Kennzeichenerkennung einen passenden Ausschnitt bekommen. Siehe [Sensoren einrichten](/de/sensors/setup).

## Kamera-Erkennung als zweite Meinung

Die Erkennung braucht mehr als eine Sichtung, eine Person, die nur einen Augenblick zu sehen ist (hinter einem Zaun oder einer Wäscheleine), wird also als Flackern verworfen. Erkennt die Kamera zusätzlich selbst Objekte (ein Kamera-Plugin, das Personen oder Fahrzeuge meldet, etwa das Reolink-Plugin oder ONVIF-Analytics), während ein Backend von hier die Erkennung macht, bestätigt eine Kamera-Meldung derselben Objektart im selben Moment diesen Blick, und die Karte zeigt sein Bild. Die Meldung der Kamera erzeugt nie selbst eine Erkennung. Nichts einzurichten.

## Was du bekommst

Erkannte Objekte erscheinen in der Live-Ansicht als Boxen, treiben [Benachrichtigungen](/de/notifications/) an und werden zu Ereignissen, die du [durchsuchen](/de/recording/browsing) und nach Typ filtern kannst. Sie speisen außerdem [Gesichtserkennung](/de/detection/faces), [Kennzeichen](/de/detection/license-plates) und [semantische Suche](/de/detection/semantic-search). Eine **Heatmap**-Überlagerung im Player zeigt, wo über einen Zeitraum am häufigsten Objekte erkannt wurden.
