---
title: Episoden
---

# Episoden

Wenn mehrere Kameras dieselbe Aktivität etwa zur gleichen Zeit sehen, kann camera.ui diese Sichtungen zu einer **Episode** bündeln: ein einziger Titel und eine kurze Story, die dem Geschehen der Reihe nach über die Kameras folgt. Eine Person, die von der Einfahrt zur Haustür geht, wird zu einer Episode statt zu drei getrennten Ereignissen.

Episoden brauchen [KI-Beschreibungen](/de/detection/genai-descriptions). Die KI schreibt die Story, ein Anbieter muss also zuerst eingerichtet sein.

## Einschalten

Öffne in den NVR-Einstellungen den Tab **Episodes** und aktiviere **Enabled**. Richte dann **Camera Groups** ein: Eine Episode bildet sich nur unter Kameras derselben Gruppe, und eine Gruppe braucht mindestens zwei Kameras. Kameras, die du weglässt, sind nicht dabei.

- **Join Window.** Ein neues Ereignis schließt sich der offenen Episode an, wenn es so lange nach der letzten Aktivität startet. Standard 90 Sekunden.
- **Quiet Time.** Die Episode schließt und bekommt ihre Story, sobald es so lange ruhig war. Standard 60 Sekunden.
- **Wrap Up After.** Sobald eine Episode diese Länge erreicht, nimmt sie keine neue Aktivität mehr auf und schließt beim nächsten natürlichen Bruch: Was noch läuft, wird zuerst zu Ende geführt, spätere Aktivität startet die nächste Episode. Standard 10 Minuten.
- **Custom Instructions.** Freitext-Vorgaben, die dem eingebauten Prompt für die Story hinzugefügt werden, etwa worauf zu achten ist oder wie formuliert werden soll.

## Wo Episoden erscheinen

- **Home.** Episoden erscheinen in der **Recent Events**-Reihe als Mosaik-Karte, die zeigt, wie viele Kameras beteiligt waren.
- **Aufnahmen.** Dieselbe Mosaik-Karte erscheint in der Liste. Eine Aufnahme, die zu einer Episode gehört, zeigt einen **Open episode**-Button, der dorthin springt.
- **Apple TV.** Episoden gibt es auch in der Apple-TV-App.

<Shot src="/img/detection/episode-card.png" alt="Eine Episoden-Mosaik-Karte in der Aufnahmen-Ansicht" />

## Der Episoden-Player

Öffnest du eine Episode, spielt sie die ganze Sequenz ab. Sie wechselt von selbst zwischen den Kameras, während die Story voranschreitet, und zeigt Name und Zeit der aktuellen Kamera. Ein Streifen unter dem Video hält einen Block pro Kamera-Abschnitt, sodass du direkt zu jedem Punkt springen oder zwischen Kameras wechseln kannst.

<Shot src="/img/detection/episode-player.png" alt="Der Episoden-Player mit dem Kamera-Streifen unter dem Video" />
