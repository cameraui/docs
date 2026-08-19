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

Die Konfidenz wird hier nicht gesetzt. Objekt-, Gesichts- und Kennzeichen-Erkennung folgen den Werten in den [Erkennungs-Einstellungen](/de/cameras/settings) der Kamera, eine Kamera kann also strenger sein als die andere, und eine Änderung greift sofort.[^mlconf]

[^mlconf]: Braucht ein aktuelles KI-Backend-Plugin. Mit einem älteren nutzt das Plugin weiter seinen eigenen Schwellwert.

Welche Objekttypen eine Kamera meldet, legst du in ihren [Objektzonen](/de/cameras/zones-and-masks#objektzonen) fest. Bewegung und Audio sind davon nicht betroffen.

Die Objekt-Konfidenz wird pro Typ unter [Einstellungen → Erkennung](/de/cameras/settings) gesetzt: **Personen-Konfidenz**, **Fahrzeug-Konfidenz** und **Tier-Konfidenz** haben je einen eigenen Wert zwischen 0,3 und 1. Erhöhe einen Wert, wenn eine Kamera diesen Typ meldet, obwohl er nicht da ist; senke ihn, wenn echte übersehen werden.

Daneben liegt **Objekt Timeout** in Sekunden (mindestens 10, Standard 15). Es betrifft nur Kameras, die Objekte selbst melden, etwa viele Reolink-Modelle: Es begrenzt, wie lange so eine Erkennung aktiv bleibt, wenn die Kamera kein Ende-Signal sendet. Frame-basierte Backends ignorieren es.

Darunter liegt **Statische Objekte ignorieren**, standardmäßig an. Objekte, die über Ereignisse hinweg unbewegt bleiben, etwa ein geparktes Auto in der Einfahrt, lösen keine neuen Objekt-Ereignisse mehr aus, bis sie sich wieder bewegen. Schalte es aus, wenn jedes Ereignis alle gesehenen Objekte melden soll, auch die unbewegten.

## Wohin die Erkennung schaut

Ein Erkennungsmodell arbeitet auf einem kleinen Quadrat, oft 640 Pixel. Das ganze Kamerabild dorthin zu schicken heißt, einen 4K-Frame in dieses Quadrat zu quetschen, und eine Person am Ende der Einfahrt landet als ein paar Pixel, zu klein zum Erkennen.

camera.ui schickt deshalb nicht das ganze Bild. Es schneidet die Bereiche, in denen sich etwas bewegt, aus dem Frame in voller Auflösung heraus und lässt das Modell darauf laufen, bei verteilter Bewegung auch mehrere pro Frame, und legt die Boxen danach wieder auf das Originalbild. Ein entferntes Auto oder eine Katze bei Nacht kommt so in etwa in ihrer echten Größe an. Nichts einzurichten, und für dich ändert sich nur, dass kleinere und weiter entfernte Dinge gefunden werden.

Bewegt sich nichts, gibt es nichts herauszuschneiden, und der ganze Frame geht durch. Die Spalte **Zoom** in den Metriken unten zeigt, wie oft eine Kamera so arbeiten konnte.

## Was Erkennung kostet

**Metrics → Kameras** zeigt zwei Tabellen. Die erste ist die Prozess-Tabelle, eine Zeile pro Kamera, mit CPU und Speicher. Die zweite, **Erkennung**, zeigt, wohin die Zeit geht:

- **Decode**, die Zeit für ein Bild: erst der Analyse-Stream, dann der hochauflösende.
- **Verarbeitung**, das Skalieren auf die Modelleingabe und das Zurückrechnen in Boxen.
- **Transport**, die Zeit, die Bild und Ergebnis zum Plugin und zurück brauchen.
- **Analysiert**, analysierte Bilder pro Sekunde, wieder Analyse-Stream und hochauflösender Stream.
- **Aktiv**, der Anteil der Zeit, in dem die Kamera überhaupt analysiert hat. Eine Kamera mit Bildschleife liegt bei 100%, eine Kamera, die Bewegung selbst meldet, zählt nur während Ereignissen.
- **Erkennungen**, gefundene Objekte pro analysiertem Bild.
- **Zoom**, der Anteil der Objekterkennungen, die auf gezoomte Bewegungsfenster statt aufs ganze Bild geschaut haben, dahinter die Anzahl Fenster pro gezoomtem Bild.

<Shot src="/img/admin/metrics-detection.png" alt="Die Erkennungs-Tabelle unter Metrics, Kameras" />

**Inferenz anzeigen** schaltet dieselbe Tabelle auf die Zeit innerhalb jedes Detektors um: **Bewegung**, **Objekt**, **Gesicht**, **Kennzeichen**, **Klassifizierer** und **CLIP**. Zeig auf eine Zelle, um Plugin, Modell und Gerät zu sehen; eine Kamera auf einem [Worker](/de/admin/workers) nennt diesen Worker. Die Werte sind Durchschnitte seit dem Start der Kamera, nach einem Modellwechsel lohnt sich also **Zurücksetzen**. **Kopieren** legt beide Ansichten für jede Kamera als Text in die Zwischenablage, der schnelle Weg in einen Fehlerbericht.

### Benchmark

**Benchmark** belastet den Objekt-Detektor mit Testbildern und meldet, wie viele Erkennungen pro Sekunde er schafft. Wähle die Kameras aus, **Alle auswählen** nimmt alle, und starte. Das Ergebnis nennt die Maschine und die Erkennungen pro Sekunde, insgesamt und je Kamera, mit Plugin, Modell und Gerät jeder Kamera. **Kopieren** legt das Ergebnis in die Zwischenablage, genau richtig für einen Fehlerbericht oder den Vergleich zweier Backends.

Während des Laufs pausiert die Erkennung an jeder Kamera, auch an denen, die du nicht gewählt hast, und läuft danach weiter. Nur Admins können ihn starten.

## Objekt-Assistenz

Manche Kameras erkennen Objekte selbst, melden aber nur, dass sie etwas gesehen haben, nicht wo im Bild. Viele Reolink-Modelle arbeiten so. Damit hat die Gesichts- und Kennzeichenerkennung nichts zum Heranzoomen und findet selten etwas.

Wähle unter dem **Plugins**-Tab der Kamera unter **Objekt** ein **Objekt-Assistenz**-Plugin. Es ist ein zweiter Detektor, der die Person oder das Fahrzeug im Bild lokalisiert, damit Gesichts- und Kennzeichenerkennung einen passenden Ausschnitt bekommen. Siehe [Sensoren einrichten](/de/sensors/setup).

## Was du bekommst

Erkannte Objekte erscheinen in der Live-Ansicht als Boxen, treiben [Benachrichtigungen](/de/notifications/) an und werden zu Ereignissen, die du [durchsuchen](/de/recording/browsing) und nach Typ filtern kannst. Sie speisen außerdem [Gesichtserkennung](/de/detection/faces), [Kennzeichen](/de/detection/license-plates) und [semantische Suche](/de/detection/semantic-search). Eine **Heatmap**-Überlagerung im Player zeigt, wo über einen Zeitraum am häufigsten Objekte erkannt wurden.
