---
title: Objekt suchen
---

# Objekt suchen

Öffne **Suche** in der Zeitleiste, tippe im Bild auf eine Person oder ein Fahrzeug, und camera.ui listet die Momente, in denen es zu sehen ist.[^license]

## Ein Objekt wählen

Solange die Ansicht **Suche** der [Zeitleiste](/de/recording/timeline-playback#zeitleiste-erkennungen-und-suche) offen ist, lässt sich in jedem Bild wählen. Ein Tipp oder Klick hält das Bild genau bei diesem Frame fest, pausiert den Player und wählt das Objekt an dieser Stelle mit der Erkennung, die der Kamera zugewiesen ist. Danach markieren Umrisse jede Person und jedes Fahrzeug im festgehaltenen Bild, und jeder weitere Tipp fügt eine Auswahl hinzu.

- **Objekt suchen** in der Steuerleiste des Players (bei einem kleinen Player im Punkte-Menü) oder <kbd>F</kbd> öffnet und schließt die Ansicht. In [Camview](/de/cameras/camview#objekte-im-raster-suchen) öffnet <kbd>F</kbd> auch die Zeitleiste des Rasters.
- **Halte ein Bild gedrückt**, mit dem Finger oder der Maus, um es aus jeder Ansicht heraus festzuhalten und zu wählen, danach öffnet sich die Suche.

Ein festgehaltenes Bild läuft weiter bei **Weiter** oben im Bild, bei Abspielen, Live, einem geöffneten Treffer, <kbd>Esc</kbd> oder **Suche beenden**. Die Auswahlen bleiben, bis du die Suche beendest. Scrubben in der Zeitleiste holt ein festgehaltenes Bild an den neuen Moment, so lässt sich ein besseres Bild von jemandem wählen, der weggeschaut hat.

Wählen können nur Admins, und nur mit dem NVR-Plugin und einer der Kamera zugewiesenen Objekterkennung. Eine Kamera ohne Objekterkennung hat keine **Suche**, in Camview zeigt ihre Kachel bei offener Suche **Keine Objekterkennung**. Das Bild wird mit den Modellen und Schwellen gelesen, die für die Kamera eingestellt sind. Kann die Erkennung der Kamera selbst kein Bild prüfen, liest es das KI-Backend, das als **Objekt-Assistenz** eingetragen ist; ohne sie sagt die Suche das.

Mit einem KI-Backend als **Segmentierung** im **Plugins**-Tab der Kamera bekommt das Objekt seinen Umriss statt eines Rahmens, und wo sich Personen oder Fahrzeuge überlagern, wählt ein Klick das unter dem Zeiger.

## Wonach gesucht wird

Eine Suche geht gleichzeitig nach allem, was das Bild hergibt, und listet jeden Moment einmal.

- **Eine Person.** Über den Namen, wenn das Gesicht erkannt wurde, sonst über das Gesicht im Vergleich mit den Gesichtern anderer Momente. Dazu über Kleidung und Statur, das findet ähnlich aussehende Personen: Dafür braucht die Kamera im **Plugins**-Tab ein KI-Backend als **Personen-Wiedererkennung**, gefunden werden die Momente der Kameras, die eines haben. Wer andere Kleidung trägt, sieht für sie aus wie jemand anderes, und Momente aus der Zeit, bevor die Kamera die Personen-Wiedererkennung hatte, haben keine Kleidung zum Vergleichen. Kameras, die ihre Objekte selbst melden (mit oder ohne **Objekt-Assistenz**), speichern ebenfalls keine Kleidung.
- **Ein Fahrzeug.** Über das Kennzeichen, wenn eines gelesen wurde, auch mit einem falsch gelesenen Zeichen, und über das Aussehen: Fahrzeuge, die ähnlich aussehen. Das Aussehen braucht ein CLIP-Backend, siehe [Semantische Suche](/de/detection/semantic-search#was-du-brauchst).

Wie gut Personen über ihren Namen gefunden werden, hängt an der [Gesichtserkennung](/de/detection/faces).

## Die Treffer

Die Ansicht Suche zeigt jede Auswahl mit ihrem Ausschnitt und die Treffer aller Auswahlen in einer Liste, eine Karte pro Moment, die sichersten zuerst: Name oder Kennzeichen, dann das Gesicht, dann die ähnlich Aussehenden nach Kleidung oder Aussehen, der beste Treffer zuerst. Bei mehreren Auswahlen zeigt jede Karte, aus welcher sie stammt. Ist ein Treffer ein Vergleich, legt ein Regler von **Präziser** bis **Breiter** fest, wie nah er sein muss. Entfernst du eine Auswahl, fallen ihre Treffer weg, **Suche beenden** entfernt alle.

Solange eine Suche läuft, zeigt die Zeitleiste nur die passenden Ereignisse. Ohne **Nur Treffer** im Filtermenü der Zeitleiste sind wieder alle Ereignisse zu sehen.

- **Eine Karte einer Kamera auf dem Bildschirm** spielt den Moment dort ab.
- **Eine Karte einer anderen Kamera** öffnet diese Kamera zu dem Moment, mit ihrer Auswahl in der Suche.
- **Im Episoden-Player** ist die Suche eine Spalte neben dem Player (auf dem Handy darunter). Ein Treffer in der Episode spielt dort, einer außerhalb öffnet sich als Aufnahme.

**Alle in den Aufnahmen zeigen** listet die Treffer aller Auswahlen in den [Aufnahmen](/de/recording/browsing), dort grenzen die Filter für Kamera, Raum und Zeitraum sie ein, und **Suche beenden** führt zur normalen Liste zurück.

## Suche per Bild

In den [Aufnahmen](/de/recording/browsing#suche) nimmt **Suche per Bild** (nur Admins) ein Bild einer Person oder eines Fahrzeugs: auf das Feld oder irgendwo auf die Liste ziehen oder auswählen. Klick die Person oder das Fahrzeug darin an, die Liste zeigt die Treffer wie oben. Gelesen wird das Bild mit den Plugins und Modellen der Kamera, der die meisten davon zugewiesen sind.

## Die Modelle ausprobieren

Die Plugin-Seite des KI-Backends hat einen **Personen-Wiedererkennung**-Tab und einen **Segmentierung**-Tab. Die Personen-Wiedererkennung nimmt ein Bild einer Person und sucht in den Aufnahmen nach ähnlich aussehenden Personen, die Segmentierung umreißt jede Person, jedes Fahrzeug und jedes Tier in einem Bild.

## Farbe und Typ von Fahrzeugen

**Fahrzeuge** in den Filtern der Aufnahmen grenzt die Liste auf Farben und Typen ein: Auto, Transporter, Lkw, Bus, Motorrad, Fahrrad. camera.ui liest beides aus dem Bild jedes aufgenommenen Fahrzeugs, auch bei älteren Aufnahmen, und braucht dafür CLIP. Eine Angabe kann falsch sein, ein graues Auto im Schatten zählt vielleicht als schwarz.

[^license]: Die Objektsuche und der Fahrzeugfilter basieren auf Aufnahmen, die ein aktives camera.ui-Abo erfordern.
