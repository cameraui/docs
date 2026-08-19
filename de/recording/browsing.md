---
title: Durchsuchen & Filter
---

# Durchsuchen & Filter

Die **Aufnahmen**-Ansicht ist der Ort, an dem du vergangene Ereignisse über deine Kameras hinweg findest. Jedes Ereignis zeigt ein Thumbnail und das Erkannte, neueste zuerst. Zusammenhängende Ereignisse über mehrere Kameras können auch als **Episode**-Karte erscheinen. Eine Aufnahme, die zu einer gehört, zeigt einen **Open episode**-Button. Siehe [Episoden](/de/detection/episodes).

<Shot src="/img/recording/recordings-view.png" alt="Recordings-Ansicht mit Ereignissen und Filtern" />

## Filtern

Grenze die Liste auf genau das ein, was du suchst:

- **Kamera und Zeitraum.**
- **Nur mit Aufnahme.** Standardmäßig an. Schalte es aus, um auch Ereignisse zu sehen, bei denen ein Trigger ausgelöst hat, aber nichts aufgenommen wurde. Diese Ereignisse lassen sich nicht herunterladen oder abspielen.
- **Labels.** Person, Fahrzeug, Tier, Paket oder Sonstige.
- **Auslöser.** Bewegung, eine Türklingel, ein Sensor oder ein Alarmgeräusch.
- **Attribute.** Ereignisse, die ein Gesicht oder ein Kennzeichen enthalten.
- **Konfidenz.** Erkennungen mit niedriger Konfidenz ausblenden.
- **Rastersuche.** Ist genau eine Kamera ausgewählt, kannst du einen Bereich auf ihrem Snapshot markieren, um nur Ereignisse anzuzeigen, die in diesem Teil des Bildes erkannt wurden.

Du kannst außerdem per Text über erkannte Labels, Gesichter und Kennzeichen suchen.

## Ansichtsoptionen

Das Zahnrad oben rechts öffnet die Ansichtsoptionen.

- **Ungroup.** Eine Karte pro Moment statt einer pro Ereignis. Standardmäßig aus. Deine Wahl wird in deinem Konto gespeichert und folgt dir auf andere Geräte.
- **Nur mit Aufnahme.** Derselbe Filter wie in der Seitenleiste, hier für den schnellen Zugriff.

## Eine Karte lesen

Jede Karte ist ein Moment, neueste zuerst.

- **Zeit und Kamera.** Oben links. Wähle die Karte, um die Wiedergabe an diesem Moment zu öffnen.
- **Gesichter und Kennzeichen.** Hat ein Moment mehr als sein Szenenbild, etwa ein erkanntes Gesicht oder ein gelesenes Kennzeichen, erscheinen Pfeile, um an Ort und Stelle durch die Bilder zu blättern, mit Name oder Kennzeichen. Die kleinen Kacheln unten markieren eines und springen dorthin.
- **Gruppierte Karten.** Eine gruppierte Karte zeigt die anderen Momente des Ereignisses als kleine Vorschauen unten. Jede öffnet ihren eigenen Moment.
- **Geteilte Karten.** Mit **Ungroup** an ist jeder Moment eine eigene Karte und zeigt seine Position im Ereignis, etwa 2/3. Zeigst du auf eine, werden die anderen Karten desselben Ereignisses hervorgehoben.
- **Halten für Vorschau.** Auf Handy oder Tablet lässt du den Finger auf einer Karte ruhen, um den kurzen Vorschau-Clip abzuspielen. Finger heben stoppt, Tippen öffnet. Am Computer läuft die Vorschau beim Darüberfahren. Sie geht den Clip durch, herangezoomt auf das, worum es in dem Moment ging, mit einer Uhr für das gerade gezeigte Bild. Eine Karte ohne abspielbares Material sagt **Keine Vorschau**.

## Auswählen und löschen

Admins können Ereignisse hier löschen. Wähl den Punkte-Button in der Ecke, um in den Auswahlmodus zu gehen, und wähle dann einzelne Ereignisse, mehrere oder alle geladenen und lösche sie. Sie verschwinden überall auf einmal: Home, Timeline, diese Liste und jeder offene Browser. Das aufgenommene Video bleibt auf der Festplatte, bis die normale Bereinigung es entfernt.[^delete-disk]

## KI-Suche

Um Momente durch Beschreibung zu finden, etwa „eine Person, die ein Paket trägt", nutze die **KI-Suche**. Siehe [Semantische Suche](/de/detection/semantic-search).

## Heatmap

Eine **Heatmap** zeigt, wo sich Aktivität über einen Zeitraum konzentriert hat. Siehe [Objekterkennung](/de/detection/ai-backends).

[^delete-disk]: Ein Ereignis zu löschen entfernt es aus der Liste und seine Erkennungen. Die Videodatei bleibt liegen und wird später von der Speicher-Bereinigung nach ihrem normalen Zeitplan entfernt.
