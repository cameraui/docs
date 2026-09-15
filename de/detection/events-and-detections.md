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

## Das Bild eines Ereignisses

Jede Karte, jeder Push und jede KI-Beschreibung zeigt ein Bild für den Moment, und camera.ui wählt Frame und Ausschnitt dafür. Es rahmt das Motiv, eine Person kommt also als ganze Person an und nicht als Nahaufnahme einer Schulter. Wird später im selben Ereignis ein Gesicht erkannt, fällt der „Unknown"-Ausschnitt weg, statt neben dem Namen stehen zu bleiben.

Eine Kamera, die Erkennungen meldet, ohne zu sagen, wo im Bild sie waren, also die meisten Reolink-AI- und ONVIF-Kameras, liefert nichts zum Rahmen. Stattdessen wird der bewegte Teil des Bildes gerahmt. Das ist ungenauer als eine echte Box, ein [Objekt-Assistenz](/de/detection/ai-backends#objekt-assistenz)-Plugin ist also die bessere Antwort, wenn du diese Kameras sauber verortet haben willst.

## Unbewegte Objekte

Ein Auto, das in der Einfahrt parkt, oder eine stehen gelassene Tonne würde sonst bei jeder Bewegung erneut erkannt. **Statische Objekte ignorieren** ist in den [Einstellungen → Detection](/de/cameras/settings) einer Kamera standardmäßig an: Bleibt ein Objekt eine Weile unbewegt, zählt camera.ui es nicht mehr als Erkennung, auch über spätere Ereignisse hinweg. Die Box siehst du in der Live-Ansicht weiterhin. Sobald sich das Objekt von der Stelle bewegt oder die Kamera schwenkt oder neigt, zählt es wieder.

## Der Erkennungsverlauf

Zu jedem Ereignis wird festgehalten, was der Detektor tatsächlich gesehen hat. Das Punkte-Menü auf einer Karte unter [Aufnahmen](/de/recording/browsing), und das Verlaufs-Symbol im Ereignis-Dialog, öffnet ihn. Von einer Karte aus beginnt er beim Moment, den die Karte zeigt, aus der Kameraansicht beim Moment auf dem Bildschirm. Bei einem Ereignis, das stundenlang lief, tippst du über dem Bilderstreifen eine Uhrzeit ein und springst dorthin; **Frühere Bilder** lädt, was davor kam.

Er geht das Ereignis Bild für Bild durch, mit den Bildern aus der Aufnahme, und zeigt zu jedem, was gefunden wurde, wobei nur einige Bilder rund um jede Aktivität bleiben, damit eine lange ruhige Strecke das Interessante nicht zudeckt: die Objekte und die Tracks, zu denen sie gehören, die Bewegungsboxen, die rohen Erkennungen vor jeder Filterung und die Zonen, wie sie damals standen. Wo etwas gesehen wurde, aber kein Ereignis daraus wurde, nennt der Verlauf den Grund: unter der Konfidenzschwelle, in einer Privatsphären-Zone, außerhalb der Objektzonen, ein Label, das die Zone nicht annimmt, oder ein Track, der noch zu jung für eine Bestätigung ist. Jeder Track trägt seinen Zustand, von vorläufig über aktiv, stehend und verloren bis abgegangen.

Mit Mausrad, Pinch oder Doppeltipp zoomst du in ein Bild hinein, genau wie in der Live-Ansicht, damit auch ein entferntes Tier lesbar bleibt. Die Bilder kommen aus der Aufnahme, ein Ereignis ohne Aufnahme zeigt seine Erkennungsdaten also trotzdem, nur ohne Bilder. Kann der Browser den Haupt-Stream nicht dekodieren, stammen die Bilder aus dem kleineren und werden über die Zeit zugeordnet statt exakt.

**Bundle herunterladen** packt den ganzen Verlauf in eine Datei für einen Fehlerbericht.

## Wo Ereignisse erscheinen

Ereignisse treiben den Rest von camera.ui an:

- **[Aufnahmen](/de/recording/browsing)** — vergangene Ereignisse durchsuchen und filtern.
- **[Benachrichtigungen](/de/notifications/)** — über die wichtigen alarmiert werden.
- **[Semantische Suche](/de/detection/semantic-search)** — Ereignisse durch Beschreibung finden.
