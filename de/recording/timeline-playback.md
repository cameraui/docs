---
title: Timeline & Wiedergabe
---

# Timeline & Wiedergabe

Mit der **Zeitleiste** einer Kamera scrubbst du durch ihr aufgenommenes Material, Markierungen zeigen, wo Ereignisse waren.

<Shot src="/img/recording/timeline.png" alt="Aufnahme-Timeline und Scrubber" />

## Material durchsehen

- **Scrubbe** entlang der Timeline. Zum Scrubben dient der niedrig aufgelöste Stream.
- **Wiedergabe und Pause**, 30 Sekunden zurück oder vor springen und die **Geschwindigkeit** zwischen 0.25x und 8x ändern.
- **Ereignis-Markierungen** zeigen ein Vorschaubild. Ein Klick springt zu diesem Moment.
- **Klingeln und Alarme.** Ein Türklingel-Druck, eine Sirene, eine Alarmanlage oder ein Kontakt-Ereignis erscheint als volle Ereignis-Leiste mit eigenem Icon und Vorschaubild, auch wenn die Kamera nichts gesehen hat. Ein Klingeln während eines laufenden Bewegungs-Ereignisses erscheint sofort, nicht erst wenn die Bewegung endet.
- **Nach Ereignistyp filtern.** Der Filter-Button wählt, welche Ereignistypen auf der Timeline und in der Erkennungsliste erscheinen. Die Wahl bleibt erhalten.
- **Nach Zone filtern.** Aktiviere im Filter **Nach Zone filtern** und markiere Bereiche im Kamerabild, um nur dort erkannte Ereignisse zu behalten.
- **Zoome** vom Überblick bis auf Sekunden. In der tiefsten Stufe ist das Scrubben bildgenau und die Timeline zeigt ein **Feinsteuerung**-Badge.
- **Springe zu einem Tag** über den Kalender. Tage mit Material sind hervorgehoben.

## Wiedergabequalität

Jede Kamera hat in ihren [Einstellungen](/de/cameras/settings) unter **Interface** eine **Wiedergabe Quelle**: **Auto**, **High**, **Mid** oder **Low**. Auto ist der Standard und die Einstellung, bei der du bleiben solltest.

Eine Aufnahme kann in einer Qualität ein Loch haben und in einer anderen nicht, etwa wenn der High-Stream wegbrach, während der Low-Stream weiterlief. Bei Auto nimmt die Wiedergabe die beste Qualität, für die an dieser Stelle Material da ist, ein Badge nennt sie, solange es nicht die oberste ist, und sobald die High-Aufnahme wieder da ist, wechselt sie zurück. Eine fest gewählte Qualität bleibt, Loch inklusive.

## Wenn eine Kamera nicht aufgenommen hat

Bänder unter der Zeitleiste sagen, was die Kamera gemacht hat, wenn Material fehlt:

- **offline** heißt, die Kamera hat gar nichts aufgenommen.
- **recording without high** (oder eine andere Qualität) heißt, nur dieser Stream ist ausgefallen. Es gibt also Material, nur nicht in jeder Qualität, und Auto spielt es ab.

Ein Band reicht genau von dort, wo die Aufnahme aufgehört hat, bis dort, wo sie weiterging. Aussetzer unter 15 Sekunden erzeugen kein Band.

Hat ein Ausfall Phasen (erst geht der High-Stream, dann der Rest, dann kommt einer vor dem anderen zurück), liegen sie nebeneinander in einem Band, jede in ihrer eigenen Farbe, beschriftet mit der Gesamtdauer. Zeig darauf, um die Phasen zu lesen.

## Zeitleiste oder Erkennungen

Das Panel auf der Kameraseite wechselt zwischen **Zeitleiste** und **Erkennungen**, einer Liste dessen, was erkannt wurde: Tag, Uhrzeit, Dauer, ein Vorschaubild und Icons für die erkannten Typen. Ein Klick auf einen Eintrag springt dorthin.

## Mehrere Kameras gleichzeitig

In [Camview](/de/cameras/camview) folgt die Timeline der Kamera, die du öffnest, und zeigt ihre Aufnahmen und Ereignisse. Nur diese Kamera dekodiert, das Scrubben bleibt also auch in einem vollen Layout schnell. Der Ereignisfilter kann auch die Ereignisse der anderen Kameras einblenden, ein Klick auf eines springt dorthin.

## Zuschneiden

**Export** auf der Timeline schaltet das Zuschneiden ein: Zieh die Griffe auf Start und Ende und exportiere die Auswahl. Siehe [Export & Download](/de/recording/export).

## Bereich löschen

Admins können Material aus der Timeline löschen: **Aufnahmen löschen**, die Griffe über den Zeitraum ziehen, dann **Auswahl löschen**. Das Material und alle Ereignisse darin werden endgültig entfernt, minutenweise, auf jedem offenen Gerät. Die letzten Minuten werden gerade noch geschrieben und lassen sich noch nicht löschen.

