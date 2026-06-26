---
title: Objekterkennung & KI-Backends
---

# Objekterkennung & KI-Backends

Objekterkennung findet **Personen, Fahrzeuge, Tiere und Pakete** im Bild und ist die Basis für Gesichter, Kennzeichen und semantische Suche. Sie läuft auf einem **KI-Backend**, das du passend zu deiner Hardware wählst.

## Ein Backend wählen

camera.ui liefert vier KI-Backends als Plugins. Wähle das für deine Hardware und aktiviere es pro Kamera unter [Einstellungen → Plugins](/de/cameras/settings) (siehe [Sensoren einrichten](/de/sensors/setup)):

- **CoreML.** Für Apple-Silicon-Macs; nutzt GPU und Neural Engine.
- **OpenVINO.** Für Intel-CPUs und -GPUs.
- **ONNX.** Plattformübergreifend, auf CPU oder einer unterstützten GPU.
- **NCNN.** Ein leichtgewichtiges Backend für unterstützte Hardware. (Keine semantische Suche.)

Jedes Backend liefert Objekt-, Gesichts- und Kennzeichen-Erkennung. CoreML, OpenVINO und ONNX liefern zusätzlich CLIP für die [semantische Suche](/de/detection/semantic-search).

## Modelle und Confidence

In den Plugin-Settings eines Backends wählst du ein **Modell** pro Aufgabe (Objekt, Gesicht, Kennzeichen, CLIP) und einen **Confidence-Schwellwert**, also wie sicher die KI sein muss, bevor sie eine Erkennung meldet. Größere Modelle sind genauer, aber schwerer; höhere Confidence bedeutet weniger Fehlalarme, aber mehr verpasste Erkennungen. camera.ui lädt die benötigten Modelle automatisch herunter.

Es gibt zusätzlich eine **Objekt-Konfidenz** pro Kamera unter [Einstellungen → Detection](/de/cameras/settings); auf 0 gesetzt überspringt sie die Objekterkennung für diese Kamera.

## Was du bekommst

Erkannte Objekte erscheinen in der Live-Ansicht als Boxen, treiben [Benachrichtigungen](/de/notifications/) an und werden zu Ereignissen, die du [durchsuchen](/de/recording/browsing) und nach Typ filtern kannst. Sie speisen außerdem [Gesichtserkennung](/de/detection/faces), [Kennzeichen](/de/detection/license-plates) und [semantische Suche](/de/detection/semantic-search). Eine **Heatmap**-Überlagerung im Player zeigt, wo über einen Zeitraum am häufigsten Objekte erkannt wurden.
