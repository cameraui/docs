---
title: Events & Erkennungen
---

# Events & Erkennungen

Wenn Erkennung auslöst, gruppiert camera.ui das Gefundene zu einem **Ereignis**. Die Bausteine zu kennen hilft beim Durchsehen von Aufnahmen, beim Einrichten von Benachrichtigungen und bei der Suche.

<Shot src="/img/detection/event-detections.png" alt="Ein Ereignis mit seinen Erkennungen" />

## Die Bausteine

- **Ereignis.** Alles, was während eines zusammenhängenden Aktivitäts-Schubs an einer Kamera passiert. Ein Ereignis hat Anfang und Ende und kann sich währenddessen aktualisieren.
- **Segment.** Ein Abschnitt eines Ereignisses, in dem die KI durchgehend Objekte gesehen hat, mit eigenem Thumbnail. Verschwinden Objekte und kommen zurück, beginnt ein neues Segment. Ein Ereignis, in dem die KI nie ein Objekt sieht, etwa ein Klingeldruck ohne jemanden im Bild, hat keine Segmente.
- **Erkennung.** Etwas, das die KI in einem Segment gefunden hat, etwa eine Person oder ein Fahrzeug, mit einem Confidence-Wert.
- **Attribut.** Zusatzdetail einer Erkennung, etwa ein erkanntes Gesicht, ein Kennzeichen oder ein semantisches (CLIP-)Embedding für die Suche.

## Trigger vs. Erkennungen

Zwei Dinge können ein Ereignis starten oder formen:

- Ein **Trigger** ist ein Signal, dass etwas passiert ist: Bewegung, eine Türklingel, ein Kontaktsensor, ein Alarmgeräusch. Ein Trigger kann ein Ereignis allein starten.
- Eine **Erkennung** ist das, was die KI tatsächlich im Video erkannt hat, etwa ein Objekt, ein Gesicht oder ein Kennzeichen.

Der Unterschied zählt fürs Filtern und Benachrichtigen: Du kannst auf einen Türklingel-Druck (Trigger) alarmieren oder nur, wenn eine Person gesehen wird (Erkennung).

## Unbewegte Objekte

Ein Auto, das in der Einfahrt parkt, oder eine stehen gelassene Tonne würde sonst bei jeder Bewegung erneut erkannt. **Statische Objekte ignorieren** ist in den [Einstellungen → Detection](/de/cameras/settings) einer Kamera standardmäßig an: Bleibt ein Objekt eine Weile unbewegt, zählt camera.ui es nicht mehr als Erkennung, auch über spätere Ereignisse hinweg. Die Box siehst du in der Live-Ansicht weiterhin. Sobald sich das Objekt von der Stelle bewegt oder die Kamera schwenkt oder neigt, zählt es wieder.

## Wo Ereignisse erscheinen

Ereignisse treiben den Rest von camera.ui an:

- **[Aufnahmen](/de/recording/browsing)** — vergangene Ereignisse durchsuchen und filtern.
- **[Benachrichtigungen](/de/notifications/)** — über die wichtigen alarmiert werden.
- **[Semantische Suche](/de/detection/semantic-search)** — Ereignisse durch Beschreibung finden.
