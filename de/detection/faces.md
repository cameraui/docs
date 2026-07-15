---
title: Gesichtserkennung
---

# Gesichtserkennung

Gesichtserkennung erkennt Gesichter an deinen Kameras, identifiziert Personen, die du angelegt hast, und gruppiert die noch unbekannten.[^license] Sie baut auf der [Objekterkennung](/de/detection/ai-backends) auf und braucht daher ein KI-Backend mit Gesichts-Unterstützung, das an der Kamera aktiviert ist.

<Shot src="/img/detection/faces-view.png" alt="Gesichter-Ansicht mit bekannten und unbekannten Gesichtern" />

## Ein bekanntes Gesicht anlegen

Öffne die **Gesichter**-Ansicht. Sie hat zwei Bereiche: **Bekannte Gesichter** und **Unbekannte Gesichter**.

So fügst du jemanden hinzu:

1. Wähle **Gesicht hinzufügen**.
2. Gib einen **Namen** ein, wähle das **Gesichtserkennungs-Plugin** und zieh ein klares Foto der Person hinein.
3. Wähle **Registrieren**. camera.ui prüft das Foto auf ein Gesicht und sagt dir, wenn es keines findet.

Die Person wird nun in künftigen Ereignissen erkannt, ihr Name erscheint als Attribut an den Erkennungen.

<Shot src="/img/detection/faces-enroll.png" alt="Gesicht-anlegen-Dialog" />

## Unbekannte Gesichter

Gesichter, die zu keiner angelegten Person passen, sammeln sich unter **Unbekannte Gesichter**, automatisch gruppiert, sodass Aufnahmen derselben Person zusammenliegen.

- **Weise eine Gruppe** einer Person zu, um alle darin auf einmal anzulegen, oder weise ein einzelnes Gesicht zu.
- **Verwirf** Gruppen oder Gesichter, die dich nicht interessieren, oder leere alle ungruppierten Gesichter.

## Einstellungen

In den [NVR-Einstellungen](/de/recording/) hat die Gesichtserkennung:

- **Match Threshold.** Wie streng der Gesichtsabgleich ist (0,3 bis 0,8).
- **Max Training Images.** Wie viele Fotos pro Person behalten werden (5 bis 15); camera.ui behält die besten.
- **Max Unknown People.** Wie viele unbekannte Gruppen behalten werden (10 bis 500). Ist das Limit erreicht, fällt die Gruppe raus, die am längsten nicht mehr gesehen wurde. Erhöhe den Wert bei stark frequentierten Außenkameras.

## Erneut scannen

Nachdem du jemanden neu angelegt hast, wähle **Bestehende Events erneut scannen**, um vergangene Aufnahmen erneut zu prüfen und mit dem neu bekannten Gesicht zu markieren.

[^license]: Gesichtserkennung (der Abgleich mit deinen angelegten Personen) baut auf Aufnahmen auf und erfordert ein aktives camera.ui-Abo. Die reine Gesichts-Detection (dass ein Gesicht da ist) gehört zur kostenlosen Erkennung.
