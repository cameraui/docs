---
title: Objekterkennung & KI-Backends
---

# Objekterkennung & KI-Backends

Objekterkennung findet **Personen, Fahrzeuge, Tiere und Pakete** im Bild und ist die Basis für Gesichter, Kennzeichen und semantische Suche. Sie läuft auf einem **KI-Backend**, das du passend zu deiner Hardware wählst.

## Ein Backend wählen

camera.ui liefert sechs KI-Backends als Plugins. Wähle das für deine Hardware und aktiviere es pro Kamera unter [Einstellungen → Plugins](/de/cameras/settings) (siehe [Sensoren einrichten](/de/sensors/setup)):

- **CoreML.** Für Apple-Silicon-Macs; nutzt GPU und Neural Engine.
- **OpenVINO.** Für Intel-CPUs und -GPUs.
- **ONNX.** Plattformübergreifend, auf CPU oder einer unterstützten GPU.
- **NCNN.** Ein leichtgewichtiges Backend für unterstützte Hardware. (Keine semantische Suche.)
- **Coral.** Für eine Coral Edge TPU, mit CPU-Fallback. Nur Linux.
- **Hailo.** Für einen Hailo-8- / Hailo-8L-Beschleuniger. Nur Linux.

CoreML, OpenVINO, ONNX und NCNN liefern Objekt-, Gesichts- und Kennzeichen-Erkennung. CoreML, OpenVINO und ONNX liefern zusätzlich CLIP für die [semantische Suche](/de/detection/semantic-search). Coral und Hailo sind Edge-AI-Beschleuniger-Backends, die nur Objekterkennung liefern, und das nur für **Personen, Fahrzeuge und Tiere**[^edge] (keine Gesichts- oder Kennzeichen-Erkennung, kein CLIP).

[^edge]: Coral und Hailo nutzen ein festes Objektmodell, das drei Klassen meldet. Die übrigen Backends erkennen die volle oben beschriebene Bandbreite an Objekttypen.

## Modelle und Confidence

In den Plugin-Settings eines Backends wählst du ein **Modell** pro Aufgabe (Objekt, Gesicht, Kennzeichen, CLIP) und einen **Confidence-Schwellwert**, also wie sicher die KI sein muss, bevor sie eine Erkennung meldet. Größere Modelle sind genauer, aber schwerer; höhere Confidence bedeutet weniger Fehlalarme, aber mehr verpasste Erkennungen. camera.ui lädt die benötigten Modelle automatisch herunter.

Welche Objekttypen eine Kamera meldet, legst du in ihren [Zonen](/de/cameras/zones-and-masks) fest, im Tab **Objekte**. Eine Zone listet die Typen, die darin zählen, und ein Typ, den keine Objektzone führt, wird an dieser Kamera verworfen. Ohne Objektzone zählt jeder Typ überall. Bewegung und Audio sind davon nicht betroffen.

Es gibt zusätzlich eine **Objekt-Konfidenz** pro Kamera unter [Einstellungen → Erkennung](/de/cameras/settings), zwischen 0,3 und 1. Erhöhe sie, wenn eine Kamera Objekte meldet, die es nicht gibt; senke sie, wenn sie echte übersieht.

Daneben liegt **Objekt Timeout** in Sekunden (mindestens 10, Standard 15). Es betrifft nur Kameras, die Objekte selbst melden, etwa viele Reolink-Modelle: Es begrenzt, wie lange so eine Erkennung aktiv bleibt, wenn die Kamera kein Ende-Signal sendet. Frame-basierte Backends ignorieren es.

Darunter liegt **Statische Objekte ignorieren**, standardmäßig an. Objekte, die über Ereignisse hinweg unbewegt bleiben, etwa ein geparktes Auto in der Einfahrt, lösen keine neuen Objekt-Ereignisse mehr aus, bis sie sich wieder bewegen. Schalte es aus, wenn jedes Ereignis alle gesehenen Objekte melden soll, auch die unbewegten.

## Objekt-Assistenz

Manche Kameras erkennen Objekte selbst, melden aber nur, dass sie etwas gesehen haben, nicht wo im Bild. Viele Reolink-Modelle arbeiten so. Damit hat die Gesichts- und Kennzeichenerkennung nichts zum Heranzoomen und findet selten etwas.

Wähle unter dem **Plugins**-Tab der Kamera unter **Objekt** ein **Objekt-Assistenz**-Plugin. Es ist ein zweiter Detektor, der die Person oder das Fahrzeug im Bild lokalisiert, damit Gesichts- und Kennzeichenerkennung einen passenden Ausschnitt bekommen. Siehe [Sensoren einrichten](/de/sensors/setup).

## Was du bekommst

Erkannte Objekte erscheinen in der Live-Ansicht als Boxen, treiben [Benachrichtigungen](/de/notifications/) an und werden zu Ereignissen, die du [durchsuchen](/de/recording/browsing) und nach Typ filtern kannst. Sie speisen außerdem [Gesichtserkennung](/de/detection/faces), [Kennzeichen](/de/detection/license-plates) und [semantische Suche](/de/detection/semantic-search). Eine **Heatmap**-Überlagerung im Player zeigt, wo über einen Zeitraum am häufigsten Objekte erkannt wurden.
