---
title: Objekt suchen
---

# Objekt suchen

Halte das Live-Bild oder eine Aufnahme an, klicke auf eine Person oder ein Fahrzeug, und camera.ui listet die Momente, in denen es zu sehen ist.[^license]

## Ein Objekt wählen

**Objekt suchen** liegt in der Steuerleiste des Kamera-Players, des Aufnahme-Players und des Episoden-Players (bei einem kleinen Player im Punkte-Menü). Es hält das Bild an. Klick auf eine Person oder ein Fahrzeug: camera.ui sieht sich diese Stelle mit der Erkennung an, die der Kamera zugewiesen ist, rahmt das Objekt dort ein, liest Gesicht, Kleidung, Kennzeichen oder Aussehen und listet die Treffer. Die Suche bleibt für den nächsten Klick an, bis du sie mit demselben Knopf oder <kbd>Esc</kbd> beendest, dann läuft das Bild weiter.

Ohne das NVR-Plugin oder ohne eine der Kamera zugewiesene Objekterkennung fehlt der Knopf. Das Bild wird mit den Modellen und Schwellen gelesen, die für die Kamera eingestellt sind. Kann die Erkennung der Kamera selbst kein Bild prüfen, liest es das KI-Backend, das als **Objekt-Assistenz** eingetragen ist; ohne sie sagt die Suche das.

Mit einem KI-Backend als **Segmentierung** im **Plugins**-Tab der Kamera bekommt das Objekt seinen Umriss statt eines Rahmens, und wo sich Personen oder Fahrzeuge überlagern, wählt ein Klick das unter dem Zeiger.

## Wonach gesucht wird

Eine Suche geht gleichzeitig nach allem, was das Bild hergibt, und listet jeden Moment einmal.

- **Eine Person.** Über den Namen, wenn das Gesicht erkannt wurde, sonst über das Gesicht im Vergleich mit den Gesichtern anderer Momente. Dazu über Kleidung und Statur, das findet ähnlich aussehende Personen: Dafür braucht die Kamera im **Plugins**-Tab ein KI-Backend als **Personen-Wiedererkennung**, gefunden werden die Momente der Kameras, die eines haben. Wer andere Kleidung trägt, sieht für sie aus wie jemand anderes, und Momente aus der Zeit, bevor die Kamera die Personen-Wiedererkennung hatte, haben keine Kleidung zum Vergleichen. Kameras, die ihre Objekte selbst melden (mit oder ohne **Objekt-Assistenz**), speichern ebenfalls keine Kleidung.
- **Ein Fahrzeug.** Über das Kennzeichen, wenn eines gelesen wurde, auch mit einem falsch gelesenen Zeichen, und über das Aussehen: Fahrzeuge, die ähnlich aussehen. Das Aussehen braucht ein CLIP-Backend, siehe [Semantische Suche](/de/detection/semantic-search#was-du-brauchst).

Wie gut Personen über ihren Namen gefunden werden, hängt an der [Gesichtserkennung](/de/detection/faces).

## Die Treffer

Eine Karte pro Moment, die sichersten zuerst: Name oder Kennzeichen, dann das Gesicht, dann die ähnlich Aussehenden nach Kleidung oder Aussehen, der beste Treffer zuerst. Ist ein Treffer ein Vergleich, legt ein Regler von **Präziser** bis **Breiter** fest, wie nah er sein muss.

- **Auf der Kameraseite** ersetzen die Treffer die Aufnahmen unter dem Player (auf dem Handy im Sheet), und die Zeitleiste zeigt nur die passenden Ereignisse. Ohne **Nur Treffer** im Filtermenü der Zeitleiste sind wieder alle Ereignisse zu sehen. Eine Karte dieser Kamera zeigt den Moment als Standbild für den nächsten Klick, eine Karte einer anderen Kamera öffnet diese Kamera zu dem Moment, die Treffer bleiben offen.
- **Im Aufnahme- und im Episoden-Player** öffnen sich die Treffer in einer Spalte neben dem Player (auf dem Handy statt der Zeitleiste). Eine Karte zeigt den Moment im selben Fenster, bei derselben Kamera als Standbild für den nächsten Klick. Ein Treffer außerhalb der Episode öffnet sich dort als Aufnahme.

**Alle in den Aufnahmen zeigen** listet die Treffer in den [Aufnahmen](/de/recording/browsing), dort grenzen die Filter für Kamera, Raum und Zeitraum sie ein, und **Suche beenden** führt zur normalen Liste zurück.

## Suche per Bild

In den [Aufnahmen](/de/recording/browsing#suche) nimmt **Suche per Bild** ein Bild einer Person oder eines Fahrzeugs: auf das Feld oder irgendwo auf die Liste ziehen oder auswählen. Klick die Person oder das Fahrzeug darin an, die Liste zeigt die Treffer wie oben. Gelesen wird das Bild mit den Plugins und Modellen der Kamera, der die meisten davon zugewiesen sind.

## Die Modelle ausprobieren

Die Plugin-Seite des KI-Backends hat einen **Personen-Wiedererkennung**-Tab und einen **Segmentierung**-Tab. Die Personen-Wiedererkennung nimmt ein Bild einer Person und sucht in den Aufnahmen nach ähnlich aussehenden Personen, die Segmentierung umreißt jede Person, jedes Fahrzeug und jedes Tier in einem Bild.

## Farbe und Typ von Fahrzeugen

**Fahrzeuge** in den Filtern der Aufnahmen grenzt die Liste auf Farben und Typen ein: Auto, Transporter, Lkw, Bus, Motorrad, Fahrrad. camera.ui liest beides aus dem Bild jedes aufgenommenen Fahrzeugs, auch bei älteren Aufnahmen, und braucht dafür CLIP. Eine Angabe kann falsch sein, ein graues Auto im Schatten zählt vielleicht als schwarz.

[^license]: Die Objektsuche und der Fahrzeugfilter basieren auf Aufnahmen, die ein aktives camera.ui-Abo erfordern.
