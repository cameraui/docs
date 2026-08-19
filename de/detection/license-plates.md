---
title: Kennzeichen
---

# Kennzeichen

Die Kennzeichenerkennung liest Nummernschilder von Fahrzeugen. Sie baut auf der [Objekterkennung](/de/detection/ai-backends) auf: Ein Fahrzeug wird erkannt, dann sein Kennzeichen lokalisiert und per OCR gelesen. Aktiviere an der Kamera ein KI-Backend mit Kennzeichen-Unterstützung. Wenn die Kamera Objekte selbst erkennt, aber nicht meldet, wo sie sind (viele Reolink-Modelle), aktiviere [Objekt-Assistenz](/de/detection/ai-backends#objekt-assistenz), damit Kennzeichen einen passenden Ausschnitt bekommen.

## Einrichtung

In den Plugin-Settings des Backends nutzen Kennzeichen zwei Modelle, einen **Detektor**, der das Schild findet, und ein **OCR-Modell**, das die Zeichen liest. camera.ui lädt sie automatisch herunter. Beide Konfidenzen werden an der Kamera gesetzt.

Ein Kennzeichen zu finden und es zu lesen sind zwei Aufgaben, deshalb gibt es unter [Einstellungen → Erkennung](/de/cameras/settings) für jede eine eigene Konfidenz, dazu einen Längenfilter:

- **Kennzeichen-Erkennung.** Kennzeichen, die mit weniger Sicherheit gefunden werden, werden gar nicht erst gelesen (0 bis 1, Standard 0,3).
- **Kennzeichen-Lesung.** Lesungen, bei denen die OCR unsicherer ist als dieser Wert, werden ignoriert (0 bis 1, Standard 0,9).
- **Min. Kennzeichenlänge.** Kürzere Lesungen werden als Fragmente verworfen (Standard 4 Zeichen).

## Wo Kennzeichen erscheinen

Ein gelesenes Kennzeichen wird seinem Fahrzeug als **Attribut** angehängt. Du findest es:

- Am Ereignis, neben dem Fahrzeug.
- In den [Aufnahmen](/de/recording/browsing), wo du nach dem Attribut **License Plate** filtern oder ein bestimmtes Kennzeichen suchen kannst.
- In [Benachrichtigungen](/de/notifications/) und [KI-Beschreibungen](/de/detection/genai-descriptions), zum Beispiel „Plate ABC-123".
