---
title: Gesichtserkennung
---

# Gesichtserkennung

Gesichtserkennung erkennt Gesichter an deinen Kameras, identifiziert Personen, die du angelegt hast, und gruppiert die noch unbekannten.[^license] Sie baut auf der [Objekterkennung](/de/detection/ai-backends) auf, und die Kamera braucht im Reiter **Plugins** an zwei Stellen ein KI-Backend: **Gesicht** findet die Gesichter, **Gesichtserkennung** macht aus jedem etwas, das camera.ui vergleichen kann. Ohne das zweite werden Gesichter gefunden, aber nie benannt. Wenn die Kamera Objekte selbst erkennt, aber nicht meldet, wo sie sind (viele Reolink-Modelle), aktiviere [Objekt-Assistenz](/de/detection/ai-backends#objekt-assistenz), damit Gesichter einen passenden Ausschnitt bekommen.

<Shot src="/img/detection/faces-view.png" alt="Gesichter-Ansicht mit bekannten und unbekannten Gesichtern" />

## Ein bekanntes Gesicht anlegen

In der **Gesichter**-Ansicht (Bereiche **Bekannte Gesichter** und **Unbekannte Gesichter**) nimmt **Gesicht hinzufügen** einen **Namen** und ein klares Foto der Person; **Registrieren** lehnt ein Foto ohne Gesicht ab. Ab dann wird die Person in neuen Ereignissen erkannt, ihr Name erscheint als Attribut an den Erkennungen.

<Shot src="/img/detection/faces-enroll.png" alt="Gesicht-anlegen-Dialog" />

## Gute Ergebnisse bekommen

- **Position der Kamera.** Häng eine Kamera für Gesichter etwa auf Kopfhöhe oder mit flachem Winkel auf. Schaut sie steil nach unten, sieht sie Stirn und Haare, verschiedene Personen sehen sich dann ähnlich, und die Erkennung verwechselt sie.
- **Bilder pro Person.** Mindestens 10 Bilder sind empfohlen, aus verschiedenen Situationen (Tageslicht, Nacht, mit Mütze). Mit weniger wird die Person oft nicht erkannt, ihr Dialog weist darauf hin.
- **Unklare Gesichter bekommen keinen Namen.** Ein Gesicht von der Seite, von oben oder verwischt wird weder benannt noch unter Unbekannte Gesichter gesammelt. Erkannt wird die Person im nächsten Bild, das sie klar zeigt.
- **Kleine Gesichter.** Ein Gesicht, das im Kamerabild kleiner als etwa 40 Pixel ist, ist zum Erkennen zu klein.

## Unbekannte Gesichter

Gesichter, die zu keiner angelegten Person passen, sammeln sich unter **Unbekannte Gesichter**, automatisch gruppiert, sodass Aufnahmen derselben Person zusammenliegen.

- **Weise eine Gruppe** einer Person zu, um alle darin auf einmal anzulegen, oder weise ein einzelnes Gesicht zu.
- **Verwirf** Gruppen oder Gesichter, die dich nicht interessieren, oder leere alle ungruppierten Gesichter.

## Eine Erkennung korrigieren

Nennt ein Ereignis die falsche Person, öffne dieses Gesichtsbild auf seiner Aufnahme-Karte, wähl im Punkte-Menü **Person korrigieren** und vergib den richtigen Namen, oder **Als unbekannt markieren**. Nur dieses Gesicht ändert sich: Andere Gesichter der Aufnahme behalten ihren Namen, auch wenn sie denselben tragen. Der Ausschnitt wandert zu dieser Person, damit die Erkennung es beim nächsten Mal richtig macht. Nur für Admins.

## Ein Gesicht ignorieren

Ignorierst du ein Gesicht, das du nie wieder sehen willst (ein vorbeigehender Fremder, der Postbote), sammelt camera.ui es nicht mehr.

- **Ein Gesicht oder eine ganze Gruppe ignorieren.** Unbekannte Gesichter und Gruppen haben je einen Ignorieren-Button; im Auswahlmodus ignorierst du mehrere auf einmal.
- **Neue Sichtungen werden verworfen.** Ist jemand ignoriert, tauchen spätere Aufnahmen nicht wieder als unbekannte Gesichter auf.
- **Ignorierte Gesichter liegen in einer eigenen Liste.** Sie sammeln sich unter **Ignorierte Gesichter** am Ende des Bereichs Unbekannte Gesichter.
- **Wiederherstellen zum Rückgängigmachen.** **Wiederherstellen** an einem ignorierten Gesicht lässt die Person wieder erscheinen.

## Einstellungen

Unter **Einstellungen → [Aufnahmen](/de/recording/)** hat die Gesichtserkennung:

- **Max Training Images.** Wie viele Fotos pro Person behalten werden (5 bis 40, Standard 20). Am Limit weicht das Bild, das einem anderen derselben Person am ähnlichsten ist.
- **Max Unknown People.** Wie viele unbekannte Gruppen behalten werden (10 bis 500). Ist das Limit erreicht, fällt die Gruppe raus, die am längsten nicht mehr gesehen wurde. Erhöhe den Wert bei stark frequentierten Außenkameras.

Pro Kamera gibt es unter [Einstellungen → Erkennung](/de/cameras/settings) zwei Gesichts-Einstellungen:

- **Gesichts-Konfidenz.** Gesichter, bei denen die KI unsicherer ist als dieser Wert, werden für Ereignisse und Automationen ignoriert (0 bis 1, Standard 0,5).
- **Gesichter erkennen.** Wie sicher der Abgleich mit deinen hinterlegten Personen sein muss, bevor jemand benannt wird: **Streng**, **Ausgewogen** (Standard) oder **Locker**. Streng heißt weniger falsche Namen, Locker erkennt Personen öfter.

## Das Erkennungsmodell wechseln

Das Modell ist eine Einstellung des KI-Backends (**Face Embedding Model**) und gilt für alle seine Kameras. Nach einem Wechsel bettet camera.ui die hinterlegten Bilder von selbst neu ein. **Gesichter neu einbetten**, unten links in der Faces-Ansicht und nur für Admins, startet das von Hand. Bis es durch ist, erkennt camera.ui nicht alles. Bilder, in denen das neue Modell kein klares Gesicht findet, werden entfernt, der Dialog nennt die betroffenen Personen.

Zum Ausprobieren eines Modells öffne die Seite des KI-Backends und dort den Reiter **Gesichts-Zuordnung**: Bild ablegen, und er zeigt, für wen camera.ui die Person hält und wie sicher es ist.

## Erneut scannen

Nachdem du jemanden neu angelegt hast, wähle **Bestehende Events erneut scannen**, um vergangene Aufnahmen erneut zu prüfen und mit dem neu bekannten Gesicht zu markieren.

[^license]: Gesichtserkennung (der Abgleich mit deinen angelegten Personen) baut auf Aufnahmen auf und erfordert ein aktives camera.ui-Abo. Die reine Gesichts-Detection (dass ein Gesicht da ist) gehört zur kostenlosen Erkennung.
