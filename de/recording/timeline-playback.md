---
title: Timeline & Wiedergabe
---

# Timeline & Wiedergabe

Öffne eine Kamera und nutze ihre **Zeitleiste**, um durch aufgenommenes Material zu scrubben. Zieh entlang der Timeline, um durch die Zeit zu navigieren; Markierungen zeigen, wo Ereignisse waren.

<Shot src="/img/recording/timeline.png" alt="Aufnahme-Timeline und Scrubber" />

## Material durchsehen

- **Scrubbe** flüssig entlang der Timeline. camera.ui nutzt zum Scrubben den niedrig aufgelösten Stream, sodass es schnell bleibt.
- **Wiedergabe und Pause**, 30 Sekunden zurück oder vor springen und die **Geschwindigkeit** zwischen 0.25x und 8x ändern.
- **Sieh auf einen Blick**, was passiert ist. Ereignis-Markierungen auf der Timeline zeigen ein Vorschaubild. Klick eines an, um zu diesem Moment zu springen.
- **Klingeln und Alarme erkennen.** Ein Türklingel-Druck, eine Sirene, eine Alarmanlage oder ein Kontakt-Ereignis erscheint als volle Ereignis-Leiste mit eigenem Icon und Vorschaubild, auch wenn die Kamera nichts gesehen hat. Es fällt auf, statt zwischen Bewegungs-Markierungen unterzugehen. Ein Klingeln während eines laufenden Bewegungs-Ereignisses erscheint sofort, nicht erst wenn die Bewegung endet.[^conf]
- **Nach Ereignistyp filtern.** Der Filter-Button wählt, welche Ereignistypen erscheinen, auf der Timeline und in der Erkennungsliste. Die Wahl bleibt erhalten.
- **Nach Zone filtern.** Aktiviere im Filter **Nach Zone filtern** und markiere Bereiche im Kamerabild, um nur dort erkannte Ereignisse zu behalten.
- **Zoome** die Timeline rein und raus, vom groben Überblick bis auf Sekunden genau. In der tiefsten Zoomstufe wird das Scrubben bildgenau und die Timeline zeigt ein **Feinsteuerung**-Badge.
- **Springe zu einem Tag** über den Kalender, der die Tage mit Material hervorhebt.

## Wiedergabequalität

Jede Kamera hat in ihren [Einstellungen](/de/cameras/settings) unter **Interface** eine **Wiedergabe Quelle**: **Auto**, **High**, **Mid** oder **Low**. Auto ist der Standard und die Einstellung, bei der du bleiben solltest.

Eine Aufnahme kann in einer Qualität ein Loch haben und in einer anderen nicht, etwa wenn der High-Stream für ein paar Minuten weggebrochen ist, während der Low-Stream weiterlief. Bei Auto nimmt die Wiedergabe die beste Qualität, für die an dieser Stelle wirklich Material da ist, und ein Badge nennt die Qualität, solange es nicht die oberste ist. Sobald die High-Aufnahme wieder da ist, wechselt sie von selbst zurück. Legst du statt Auto eine Qualität fest, bleibt die Wiedergabe darauf, Loch inklusive.

## Wenn eine Kamera nicht aufgenommen hat

Bänder unter der Zeitleiste sagen, was die Kamera gemacht hat, wenn Material fehlt:

- **offline** heißt, die Kamera hat gar nichts aufgenommen.
- **recording without high** (oder eine andere Qualität) heißt, nur dieser Stream ist ausgefallen, es gibt also Material, nur nicht in jeder Qualität. Genau hier zahlt sich Auto von oben aus.

Ein Band beginnt dort, wo die Aufnahme wirklich aufgehört hat, und endet dort, wo sie weiterging, es passt also zu den Aufnahmebalken und nicht zu dem Moment, in dem camera.ui es gemerkt hat. Aussetzer unter 15 Sekunden erzeugen kein Band, ein Reconnect müllt die Zeitleiste also nicht zu.

Ein Ausfall läuft oft in Phasen ab: erst geht der High-Stream, dann der Rest, dann kommt einer vor dem anderen zurück. Diese Phasen liegen nebeneinander in einem Band, jede in ihrer eigenen Farbe, beschriftet mit der Gesamtdauer. Zeig darauf, um die Phasen einzeln zu lesen.

## Zeitleiste oder Erkennungen

Auf der Kameraseite hat das Panel zwei Ansichten, zwischen denen du wechseln kannst. **Zeitleiste** ist die Skala, auf der du scrubbst. **Erkennungen** ersetzt sie durch eine Liste dessen, was erkannt wurde: Tag, Uhrzeit, Dauer, ein Vorschaubild und Icons für die erkannten Typen. Klick einen Eintrag an, um direkt dorthin zu springen.

## Mehrere Kameras gleichzeitig

In [Camview](/de/cameras/camview) folgt die Timeline der Kamera, die du öffnest. Nur diese Kamera dekodiert, sodass das Scrubben auch in einem vollen Layout schnell bleibt, und die Timeline zeigt ihre Aufnahmen und Ereignisse. Der Ereignisfilter kann die Ereignisse der anderen Kameras wieder einblenden; sind alle eingeblendet, klick das Ereignis einer anderen Kamera an, um dorthin zu springen.

## Zuschneiden

Wähle den **Export**-Button auf der Timeline, um das Zuschneiden einzuschalten. Zieh die Griffe, um Start und Ende zu setzen, und exportiere die Auswahl. Siehe [Export & Download](/de/recording/export).

## Bereich löschen

Admins können aufgenommenes Material direkt aus der Timeline löschen. Wähle **Aufnahmen löschen**, zieh die Griffe über den Zeitraum, der weg soll, und dann **Auswahl löschen**. Das Material und alle Ereignisse darin werden endgültig entfernt, minutenweise, und die Änderung erscheint auf jedem offenen Gerät. Die letzten Minuten werden gerade noch geschrieben und lassen sich noch nicht löschen, warte also kurz und versuch es erneut.

[^conf]: Damit diese Ereignisse auch den Filter **Nur mit Aufnahme** und den Konfidenzfilter unter Aufnahmen passieren, braucht es ein aktuelles camera-ui-nvr.
