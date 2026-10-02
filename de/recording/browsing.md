---
title: Durchsuchen & Filter
---

# Durchsuchen & Filter

Die **Aufnahmen**-Ansicht listet vergangene Ereignisse über deine Kameras hinweg, sortiert danach, wann darin zuletzt etwas passiert ist. Ein Ereignis, das stundenlang läuft, erscheint schon während es läuft, mit seinem neuesten Abschnitt auf der Karte. Zusammenhängende Ereignisse über mehrere Kameras können als **Episode**-Karte erscheinen, und eine Aufnahme, die zu einer gehört, zeigt **Episode öffnen**. Siehe [Episoden](/de/detection/episodes).

Sagt die Liste, dass Aufnahmen nicht verfügbar sind, läuft das NVR-Plugin nicht. Die Liste füllt sich wieder, sobald das Plugin antwortet.

## Filtern

**Anzeigen** oben in der Seitenleiste bestimmt, was die Liste hält: **Alle**, nur **Ereignisse** oder nur **Episoden**. Episoden haben keine eigenen Erkennungen, in dieser Ansicht grenzen sie also nur Kamera, Zeitraum, **Nur mit Aufnahme** und **Nur Favoriten** ein.

<Shot src="/img/recording/recordings-filters.png" alt="Die Filter-Seitenleiste mit dem Anzeigen-Schalter, der Suche und den Filtern für Raum und Kamera" />

Die weiteren Filter:

- **Kamera und Zeitraum.**
- **Räume.** Wählt die Kameras aus, die im [Grundriss](/de/cameras/floor-plan) in diesen Räumen stehen.
- **Labels.** Person, Fahrzeug, Tier oder Sonstige.
- **Auslöser.** Bewegung, eine Türklingel, ein Sensor oder ein Alarmgeräusch.
- **Attribute.** Ereignisse, die ein Gesicht oder ein Kennzeichen enthalten.
- **Fahrzeuge.** Farbe und Typ eines Fahrzeugs, aus dem Bild gelesen. Siehe [Objekt suchen](/de/detection/find-object#farbe-und-typ-von-fahrzeugen).
- **Konfidenz.** Erkennungen mit niedriger Konfidenz ausblenden.
- **Rastersuche.** Ist genau eine Kamera ausgewählt, kannst du einen Bereich auf ihrem Snapshot markieren, um nur Ereignisse anzuzeigen, die in diesem Teil des Bildes erkannt wurden.

## Ansichtsoptionen

Hinter dem Zahnrad oben rechts:

- **Aufteilen.** Eine Karte pro Moment statt einer pro Ereignis. Nur Ereignisse mit mehreren Momenten werden aufgeteilt, die meisten haben einen. Episoden bleiben, **Ereignisse** unter **Anzeigen** blendet sie aus. Standardmäßig aus. Deine Wahl wird in deinem Konto gespeichert und folgt dir auf andere Geräte.
- **Nur mit Aufnahme.** Standardmäßig an. Schalte es aus, um auch Ereignisse zu sehen, bei denen ein Trigger ausgelöst hat, aber nichts aufgenommen wurde, und Episoden aus Zeiten ohne Aufnahme. Diese lassen sich nicht herunterladen oder abspielen.
- **Nur Favoriten.** Nur für Admins, siehe unten.

## Eine Karte lesen

Jede Karte ist ein Moment.

- **Zeit und Kamera.** Die Karte öffnet die Wiedergabe an diesem Moment.
- **Gesichter und Kennzeichen.** Hat ein Moment auch ein erkanntes Gesicht oder ein gelesenes Kennzeichen, blättern Pfeile an Ort und Stelle durch seine Bilder, eines pro Gesicht oder Kennzeichen, mit Name oder Kennzeichen. Die kleinen Kacheln unten springen zu einem. Sind mehrere Personen im Moment, nennt das Hauptbild alle Namen und zählt die unbekannten Gesichter mit, etwa Azra +1.
- **Gruppierte Karten.** Eine gruppierte Karte zeigt die anderen Momente des Ereignisses als kleine Vorschauen unten. Jede öffnet ihren eigenen Moment.
- **Geteilte Karten.** Mit **Aufteilen** an zeigt jede Karte ihre Position im Ereignis, etwa 2/3. Zeigst du auf eine, werden die anderen Karten desselben Ereignisses hervorgehoben.
- **Das Punkte-Menü.** Enthält, was die Karte nicht selbst zeigt: den [Erkennungsverlauf](/de/detection/events-and-detections#der-erkennungsverlauf) (nur für Admins), **Assistenten fragen**, den Download und [**Person korrigieren**](/de/detection/faces#eine-erkennung-korrigieren) (nur für Admins), wenn gerade ein Gesichtsbild zu sehen ist.
- **Halten für Vorschau.** Auf Handy oder Tablet hältst du eine Karte gedrückt, um ihre kurze Vorschau abzuspielen (loslassen stoppt, Tippen öffnet). Am Computer läuft sie beim Darüberfahren. Die Vorschau ist auf das herangezoomt, worum es in dem Moment ging, mit einer Uhr für das gezeigte Bild. **Keine Vorschau** heißt, es gibt kein abspielbares Material oder es ließ sich nicht rechtzeitig laden. Eine Episoden-Karte zeigt ihren Schnitt: eine Kamera nach der anderen, mit Name und Uhrzeit.

## Favoriten

Der Stern auf einer Aufnahme- oder Episoden-Karte behält diesen Moment: Die automatische [Bereinigung](/de/recording/storage) spart ihn aus, sein Material bleibt also abspielbar, egal wie alt es ist und wie knapp die Platte wird. **Nur Favoriten** in den Ansichtsoptionen listet sie. Beides ist Admins vorbehalten.

## Auswählen und löschen

Admins können Ereignisse hier löschen: Der Punkte-Button in der Ecke startet den Auswahlmodus für einzelne Ereignisse, mehrere oder alle geladenen. Gelöschte Ereignisse verschwinden überall auf einmal: Home, Timeline, diese Liste und jeder offene Browser.[^delete-disk]

## Suche

Die Suche in der Filter-Seitenleiste hat ein Feld, die Knöpfe darüber schalten um, was es durchsucht. Eine laufende Suche bleibt beim Umschalten bestehen.

- **Suche.** Labels, Namen, Kennzeichen und der Text von KI-Beschreibungen, schon beim Tippen.
- **KI-Suche.** Momente per Beschreibung, etwa „eine Person, die ein Paket trägt". Siehe [Semantische Suche](/de/detection/semantic-search).
- **Assistent fragen.** Wenn der [Assistent](/de/assistant/) eingerichtet ist. Schreib die Suche in eigenen Worten („Autos in der Einfahrt gestern", „Favoriten mit Klingel", „Episoden vom Eingang der letzten Stunde") und die Filter darunter werden gesetzt: Kameras und Räume, Zeitraum, Ereignistypen, Farbe und Typ von Fahrzeugen, Sensoren, Favoriten und eine KI-Suche, wenn die Worte eine Szene beschreiben, die die Labels nicht abdecken. Ein Hinweis unter dem Feld sagt, was die Filter nicht ausdrücken können, etwa einen genauen Tag.
- **Suche per Bild.** Nur für Admins. Ein Bild einer Person oder eines Fahrzeugs, siehe [Objekt suchen](/de/detection/find-object#suche-per-bild).

## Heatmap

Eine **Heatmap** zeigt, wo sich Aktivität über einen Zeitraum konzentriert hat. Siehe [Objekterkennung](/de/detection/ai-backends).

[^delete-disk]: Ein Ereignis zu löschen entfernt es aus der Liste und seine Erkennungen. Die Videodatei bleibt liegen und wird später von der Speicher-Bereinigung nach ihrem normalen Zeitplan entfernt.
