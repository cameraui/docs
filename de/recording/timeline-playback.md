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
- **Zoome** die Timeline rein und raus, vom groben Überblick bis auf Sekunden genau. In der tiefsten Zoomstufe wird das Scrubben bildgenau und die Timeline zeigt ein **Feinsteuerung**-Badge.
- **Springe zu einem Tag** über den Kalender, der die Tage mit Material hervorhebt.

## Zeitleiste oder Erkennungen

Auf der Kameraseite hat das Panel zwei Ansichten, zwischen denen du wechseln kannst. **Zeitleiste** ist die Skala, auf der du scrubbst. **Erkennungen** ersetzt sie durch eine Liste dessen, was erkannt wurde: Tag, Uhrzeit, Dauer, ein Vorschaubild und Icons für die erkannten Typen. Klick einen Eintrag an, um direkt dorthin zu springen.

## Mehrere Kameras gleichzeitig

In [Camview](/de/cameras/camview) folgt die Timeline der Kamera, die du öffnest. Nur diese Kamera dekodiert, sodass das Scrubben auch in einem vollen Layout schnell bleibt, und die Timeline zeigt ihre Aufnahmen und Ereignisse. Der Ereignisfilter kann die Ereignisse der anderen Kameras wieder einblenden; sind alle eingeblendet, klick das Ereignis einer anderen Kamera an, um dorthin zu springen.

## Zuschneiden

Öffne das Player-Menü und wähle **Export**, um das Zuschneiden einzuschalten. Zieh die Griffe auf der Timeline, um Start und Ende zu setzen, und exportiere die Auswahl. Siehe [Export & Download](/de/recording/export).

[^conf]: Damit diese Ereignisse auch den Filter **Nur mit Aufnahme** und den Konfidenzfilter unter Aufnahmen passieren, aktualisiere das NVR-Plugin.
