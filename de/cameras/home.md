---
title: Startseite
---

# Startseite

Die Startseite ist der erste Bildschirm nach der Anmeldung. Sie zeigt jede Kamera, auf die du Zugriff hast, als Karte, mit einem Standbild von dem, was die Kamera gerade sieht.

<Shot src="/img/cameras/home-grid.png" alt="Startseite mit Kamerakarten" />

Über den Karten zeigt **Letzte Ereignisse** die neuesten Erkennungen in einer Reihe, die du seitlich scrollen kannst. Wähle ein Ereignis, um dorthin zu springen. Siehe [Events & Erkennungen](/de/detection/events-and-detections).

Wenn du noch keine Kameras hast, steht dort "Keine Kameras verfügbar" und **Jetzt starten**, was Admins zur Kameras-Seite bringt, um [eine hinzuzufügen](/de/cameras/add-camera).

## Kamerakarten

Jede Karte ist eine Kamera. Die Karten füllen die Fensterbreite, auf dem Handy stapeln sie sich in einer Spalte.

- **Das Bild.** Ein Snapshot der Kamera, kein Livestream. Zum Live-Schauen wähle die Karte.
- **Der Name.** Unten links, über dem Bild.
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
- **Ziehen aktivieren** / **Ziehen deaktivieren** steuert, ob die Karten verschoben werden können. Solange Ziehen aktiv ist, kannst du eine Karte an eine neue Stelle ziehen, und die Reihenfolge bleibt erhalten. In der gruppierten Ansicht sortierst du innerhalb eines Raums.

Karten, die du nie verschoben hast, sind nach Namen sortiert.

## Snapshots und wie sie sich aktualisieren

Das Bild auf einer Karte ist ein Standbild, von der Kamera geholt und in der ganzen App wiederverwendet. Öffnest du die Startseite erneut, siehst du also sofort das vorhandene Bild, statt auf ein neues zu warten. camera.ui aktualisiert es von selbst, standardmäßig alle 60 Sekunden. Im Abschnitt **Snapshot** der [Kamera-Einstellungen](/de/cameras/settings) schaltest du den Auto-Refresh ab oder setzt das Intervall, zwischen 10 und 60 Sekunden. Deaktivierte Kameras werden nie nach einem neuen Bild gefragt.

Nutze **Snapshot aktualisieren** auf einer Karte, wenn du sofort ein aktuelles Bild willst, zum Beispiel nachdem du eine PTZ-Kamera bewegt hast.

Ist eine Kamera offline oder antwortet langsam, behält die Karte das letzte Bild, statt leer zu werden.

## Das Snapshot-Alter

Das kleine Abzeichen oben rechts auf einer Karte sagt dir, wie alt das Bild auf dieser Karte ist. Es zählt sekündlich hoch, du weißt also immer, ob du etwas Aktuelles siehst oder ein Bild von vor einer Weile.

Es steht `now` in der ersten Sekunde, danach Sekunden (`14s`), Minuten (`3min`), Stunden (`2h`), Tage (`5d`), Monate (`2m`) und Jahre (`1y`).

Mit aktivem Auto-Refresh springt der Wert bei jedem neuen Bild zurück, er bleibt also etwa im Bereich des Aktualisierungsintervalls. Klettert er deutlich darüber, kam kein neues Bild an, meist ist die Kamera dann nicht erreichbar. Ohne Auto-Refresh zählt er weiter hoch, bis du die Karte selbst aktualisierst.[^badge]

## Auswahlmodus

Admins können mehrere Kameras auf einmal bearbeiten. Wähle den Pfeil-Button im schwebenden Bedienelement, um in den Auswahlmodus zu gehen.

<Shot src="/img/cameras/home-selection-mode.png" alt="Startseite im Auswahlmodus mit ausgewählten Kameras" />

Im Auswahlmodus öffnet eine Karte nicht mehr die Kamera. Stattdessen setzt sie das Häkchen im Kreis oben links auf der Karte. Ziehen und die Buttons auf den Karten sind währenddessen aus.

Das schwebende Bedienelement enthält jetzt die Sammelaktionen:

- **Auswahl abbrechen.** Verlässt den Auswahlmodus und hebt die Auswahl auf.
- **Alle Kameras auswählen** / **Alle Kameras abwählen.** Setzt oder entfernt das Häkchen auf allen Karten.
- **Ausgewählte Kameras deaktivieren** / **Ausgewählte Kameras aktivieren.** Deaktivieren stoppt den Livestream und die Erkennung einer Kamera, ihre Karte wird dunkel. Die Kamera bleibt konfiguriert, du kannst sie jederzeit wieder aktivieren. Der Button wechselt auf Aktivieren, wenn alles Ausgewählte schon deaktiviert ist.
- **Erkennung für ausgewählte Kameras pausieren** / **Erkennung für ausgewählte Kameras fortsetzen.** Beim Pausieren streamt die Kamera weiter, ihre Erkennung ruht aber, es wird also nichts Neues für sie erkannt. Praktisch, solange du vor einer Kamera arbeitest. Der Mond auf der Karte zeigt, welche Kameras pausiert sind.
- **Aufnahme für ausgewählte Kameras aktivieren** / **Aufnahme für ausgewählte Kameras deaktivieren.** Schaltet die Aufnahme für die ausgewählten Kameras ein oder aus. Der Button erscheint nur, wenn mindestens eine Kamera auf der Seite für Aufnahmen eingerichtet ist, und wirkt auch nur auf diese Kameras. Siehe [Aufnahmen](/de/recording/).
- **Ausgewählte Kameras entfernen.** Löscht die Kameras. camera.ui fragt nach und nennt, wie viele Kameras entfernt werden, und schließt danach den Auswahlmodus.

Sammelaktionen gehen die Kameras nacheinander durch, bei vielen ausgewählten Kameras dauert das also einen Moment. Eine Meldung sagt dir, wann es fertig ist oder was schiefging.

## Nächste Schritte

- **[Live-Ansicht](/de/cameras/live-view)** — eine Kamera ansehen, mit den Player-Bedienelementen.
- **[Camview](/de/cameras/camview)** — mehrere Kameras gleichzeitig in einem Raster.
- **[Kamera-Einstellungen](/de/cameras/settings)** — Quellen, Raum, Erkennung und alles pro Kamera.

[^badge]: Das Abzeichen gibt es nur auf den Karten der Startseite, nicht im Player und nicht in Camview.
