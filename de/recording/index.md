---
title: Aufnahmen (NVR)
---

# Aufnahmen (NVR)

camera.ui nimmt deine Kameras auf, damit du zurückschauen kannst, was passiert ist. Aufnahmen und alles in diesem Abschnitt erfordern ein aktives camera.ui-Abo.[^license]

::: info Aufnahmen während der Beta testen
Abos sind noch nicht käuflich. Um Aufnahmen zu testen, erstelle dein camera.ui-Konto auf [cloud.cameraui.com](https://cloud.cameraui.com/) und frag auf unserem [Discord](https://discord.gg/bBGnGcbz8N) nach einem Trial.
:::

<!-- TODO: remove the trial note above once subscriptions can be purchased -->

## Aufnahmen aktivieren

Aufnahmen kommen vom **camera.ui NVR**-Plugin (standardmäßig installiert) und laufen über ein Abo, das an dein camera.ui-Konto gebunden ist. So schaltest du sie frei:

1. Wähle in **Einstellungen → Remote** den Button **Server registrieren** und melde dich mit deinem camera.ui-Konto an. Das verknüpft den Server mit deinem Konto; den Remote-Cloud-Zugriff musst du dafür nicht aktivieren.
2. Öffne **Einstellungen → Aufnahmen** und klicke in der Karte **Lizenz & Cloud** auf das **Cloud-Icon** und melde dich an. Grau heißt nicht verbunden, grün heißt verbunden.
3. Deine Lizenz aktiviert sich dann automatisch. Aktualisiert sich der Status nicht, nutze den **Refetch License**-Button.

## Aufnahme-Modi

<Shot src="/img/recording/recording-modes.png" alt="Aufnahme-Modus-Einstellungen" />

Jede Kamera nimmt in einem von drei Modi auf, einstellbar in ihren Aufnahme-Einstellungen:

- **Continuous.** Nimmt rund um die Uhr auf. Du hast immer Material, brauchst aber am meisten Speicher.
- **Event.** Nimmt nur auf, wenn etwas passiert (Bewegung, ein Objekt, ein Sensor). Ein **Pre-Buffer** behält ein paar Sekunden vor jedem Auslöser, sodass du den Anlauf nicht verpasst.
- **Ad-hoc.** Verbindet sich nur mit der Kamera, wenn ein Ereignis auslöst. Nützlich für Kameras, die keine Ereignisse mehr senden, während ein Stream offen ist, etwa manche Batterie-Kameras.

## Qualität

Du wählst, welche Stream-Qualitäten aufgenommen werden, **hoch**, **mittel** oder **niedrig**, und kannst mehrere behalten. Auch einen niedrig aufgelösten Stream aufzunehmen macht das Scrubben der [Timeline](/de/recording/timeline-playback) schnell und flüssig.

## Weiter

- **[Speicher & Aufbewahrung](/de/recording/storage)** — wo Aufnahmen liegen und wie lange sie behalten werden.
- **[Timeline & Wiedergabe](/de/recording/timeline-playback)** — Material durchsehen.
- **[Export & Download](/de/recording/export)** — einen Clip speichern.
- **[Durchsuchen & Filter](/de/recording/browsing)** — vergangene Ereignisse finden.

[^license]: Aufnahmen (NVR) erfordern ein aktives camera.ui-Abo.
