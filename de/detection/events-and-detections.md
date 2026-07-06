---
title: Events & Erkennungen
---

# Events & Erkennungen

Wenn Erkennung auslöst, gruppiert camera.ui das Gefundene zu einem **Ereignis**. Die Bausteine zu kennen hilft beim Durchsehen von Aufnahmen, beim Einrichten von Benachrichtigungen und bei der Suche.

<Shot src="/img/detection/event-detections.png" alt="Ein Ereignis mit seinen Erkennungen" />

## Die Bausteine

- **Ereignis.** Alles, was während eines zusammenhängenden Aktivitäts-Schubs an einer Kamera passiert. Ein Ereignis hat Anfang und Ende und kann sich währenddessen aktualisieren.
- **Segment.** Ein Clip innerhalb eines Ereignisses. Ein langes Ereignis wird in Segmente geteilt, jedes mit eigenem Thumbnail.
- **Erkennung.** Etwas, das die KI in einem Segment gefunden hat, etwa eine Person oder ein Fahrzeug, mit einem Confidence-Wert.
- **Attribut.** Zusatzdetail einer Erkennung, etwa ein erkanntes Gesicht, ein Kennzeichen oder ein semantisches (CLIP-)Embedding für die Suche.

## Trigger vs. Erkennungen

Zwei Dinge können ein Ereignis starten oder formen:

- Ein **Trigger** ist ein Signal, dass etwas passiert ist: Bewegung, eine Türklingel, ein Kontaktsensor, ein Alarmgeräusch. Ein Trigger kann ein Ereignis allein starten.
- Eine **Erkennung** ist das, was die KI tatsächlich im Video erkannt hat, etwa ein Objekt, ein Gesicht oder ein Kennzeichen.

Der Unterschied zählt fürs Filtern und Benachrichtigen: Du kannst auf einen Türklingel-Druck (Trigger) alarmieren oder nur, wenn eine Person gesehen wird (Erkennung).

## Wo Ereignisse erscheinen

Ereignisse treiben den Rest von camera.ui an:

- **[Aufnahmen](/de/recording/browsing)** — vergangene Ereignisse durchsuchen und filtern.
- **[Benachrichtigungen](/de/notifications/)** — über die wichtigen alarmiert werden.
- **[Semantische Suche](/de/detection/semantic-search)** — Ereignisse durch Beschreibung finden.
