---
title: Startseite
---

# Startseite

Die Startseite zeigt jede Kamera, auf die du Zugriff hast, als Karte mit einem Standbild.

<Shot src="/img/cameras/home-grid.png" alt="Startseite mit Kamerakarten" />

Über den Karten ist **Letzte Ereignisse** eine seitlich scrollbare Reihe der neuesten Momente. Ein Besuch mit mehreren Phasen zeigt eine Karte pro Moment, wie die Timeline, und ein Klick auf eine Karte öffnet sie an diesem Moment. Karten mit einem erkannten Gesicht oder einem gelesenen Kennzeichen bekommen Pfeile, um durch die Bilder zu blättern, und wenn du den Finger auf einer Karte ruhen lässt (oder am Computer darüberfährst), läuft eine kurze Vorschau. [Episoden](/de/detection/episodes) erscheinen hier ebenfalls, als Mosaik-Karte, die zeigt, wie viele Kameras beteiligt waren. Siehe [Events & Erkennungen](/de/detection/events-and-detections).

Der Filter-Button in der Ecke legt fest, welche Kameras dort welche Erkennungen zeigen: Person, Fahrzeug, Tier, Gesicht und Kennzeichen, jede Art mit eigener Kameraliste. Ein Ereignis verschwindet erst, wenn alles darin Erkannte ausgeblendet ist, wer also vorbeigeht, während ein Auto durchfährt, erscheint trotzdem. Ausgeblendete Ereignisse werden weiter erkannt, aufgezeichnet und unter [Aufnahmen](/de/recording/browsing) gefunden. Die Auswahl gehört zu deinem Konto.

Ohne Kameras bringt **Jetzt starten** Admins dazu, [eine hinzuzufügen](/de/cameras/add-camera).

## Kamerakarten

- **Das Bild.** Ein Snapshot, kein Livestream.
- **Statussymbole.** Ein rotes Kamerasymbol neben dem Namen heißt, die Kamera ist deaktiviert. Ein bernsteinfarbener Mond heißt, die Erkennung ist für sie pausiert.
- **Deaktivierte Kameras.** Statt des Bildes erscheint eine dunkle Kachel mit durchgestrichenem Kamerasymbol.

Wählst du eine Karte, öffnet sich die Kameraseite mit [Live-Ansicht](/de/cameras/live-view), Aufnahmen und Timeline.

Unten rechts auf einer Karte sitzen drei Buttons:

- **Snapshot aktualisieren.** Holt sofort ein neues Bild von der Kamera.
- **Protokoll.** Öffnet das Protokoll dieser Kamera in einem Dialog, für Admins. Von dort kannst du es herunterladen.
- **Einstellungen.** Öffnet die [Kamera-Einstellungen](/de/cameras/settings), für Admins.

Eine deaktivierte Kamera bietet nur Einstellungen.

## Die Karten anordnen

Ein schwebendes Bedienelement in der Ecke erscheint, sobald du mehr als eine Kamera hast:

- **Nach Raum gruppieren** wechselt vom flachen Raster zu Abschnitten pro Raum, anhand des **Raum**, den du in den Kamera-Einstellungen gesetzt hast. Kameras ohne Raum landen unter **Standard**, das zuerst kommt, die übrigen Räume sind nach Namen sortiert. **Alle Kameras anzeigen** wechselt zurück.
- **Ziehen aktivieren** / **Ziehen deaktivieren** schaltet das Verschieben der Karten. Die Reihenfolge bleibt erhalten; in der gruppierten Ansicht sortierst du innerhalb eines Raums.

Karten, die du nie verschoben hast, sind nach Namen sortiert.

## Snapshots und wie sie sich aktualisieren

Das Kartenbild ist ein gespeichertes Standbild, das die ganze App wiederverwendet. Wann eine Kamera ein neues macht, legst du unter **Neues Bild** im Abschnitt **Snapshot** der [Kamera-Einstellungen](/de/cameras/settings) fest:

- **Regelmäßig.** Ein Timer macht alle 10 Sekunden bis 1 Stunde ein Bild (Standard 60 Sekunden). Das Ansehen der Kamera weckt sie nie.
- **Beim Ansehen.** Ein neues Bild nur, wenn jemand die Kamera ansieht und das gespeicherte älter ist als das eingestellte Alter.
- **Nur auf Anfrage.** Die Kamera bleibt in Ruhe, bis eine Automation, **Snapshot aktualisieren** oder die API fragt. Gemacht für Akkukameras.

Ein Bild, das eine Automation oder der Aktualisieren-Button geholt hat, erscheint in jedem Modus sofort auf den Karten. Deaktivierte Kameras werden nie nach einem neuen Bild gefragt.

Ist eine Kamera offline oder antwortet langsam, behält die Karte das letzte Bild, statt leer zu werden.

## Das Snapshot-Alter

Das Abzeichen oben rechts auf einer Karte zeigt, wie alt ihr Bild ist, und zählt sekündlich hoch.

Es steht `now` in der ersten Sekunde, danach Sekunden (`14s`), Minuten (`3min`), Stunden (`2h`), Tage (`5d`), Monate (`2m`) und Jahre (`1y`).

Der Wert springt bei jedem neuen Bild zurück. Bei **Regelmäßig** bleibt er etwa im Bereich des Intervalls, klettert er deutlich darüber, liefert die Kamera nicht, meist weil sie nicht erreichbar ist. Bei **Beim Ansehen** und **Nur auf Anfrage** ist ein hoher Wert bis zum nächsten Bild normal.[^badge]

## Auswahlmodus

Admins können mehrere Kameras auf einmal bearbeiten. Wähle den Pfeil-Button im schwebenden Bedienelement, um in den Auswahlmodus zu gehen.

<Shot src="/img/cameras/home-selection-mode.png" alt="Startseite im Auswahlmodus mit ausgewählten Kameras" />

Im Auswahlmodus setzt eine Karte ein Häkchen, statt die Kamera zu öffnen, und Ziehen und die Buttons auf den Karten sind aus.

Das schwebende Bedienelement enthält jetzt die Sammelaktionen:

- **Ausgewählte Kameras deaktivieren** / **Ausgewählte Kameras aktivieren.** Deaktivieren stoppt den Livestream und die Erkennung einer Kamera, ihre Karte wird dunkel. Die Kamera bleibt konfiguriert.
- **Erkennung für ausgewählte Kameras pausieren** / **Erkennung für ausgewählte Kameras fortsetzen.** Beim Pausieren streamt die Kamera weiter, ihre Erkennung ruht aber.
- **Aufnahme für ausgewählte Kameras aktivieren** / **Aufnahme für ausgewählte Kameras deaktivieren.** Erscheint nur, wenn mindestens eine Kamera auf der Seite für Aufnahmen eingerichtet ist, und wirkt auch nur auf diese Kameras. Siehe [Aufnahmen](/de/recording/).
- **Ausgewählte Kameras entfernen.** Löscht die Kameras.

Sammelaktionen gehen die Kameras nacheinander durch, bei vielen ausgewählten Kameras dauert das also einen Moment.

## Nächste Schritte

- **[Live-Ansicht](/de/cameras/live-view)** — eine Kamera ansehen, mit den Player-Bedienelementen.
- **[Camview](/de/cameras/camview)** — mehrere Kameras gleichzeitig in einem Raster.
- **[Kamera-Einstellungen](/de/cameras/settings)** — Quellen, Raum, Erkennung und alles pro Kamera.

[^badge]: Das Abzeichen gibt es nur auf den Karten der Startseite, nicht im Player und nicht in Camview.
