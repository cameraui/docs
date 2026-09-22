---
title: Aufnahmen (NVR)
---

# Aufnahmen (NVR)

Aufnahmen und alles in diesem Abschnitt erfordern ein aktives camera.ui-Abo.[^license]

::: info Preview-Phase
Abos sind noch nicht offen. Solange camera.ui in der Preview ist, sind Aufnahmen für alle mit camera.ui-Konto kostenlos, ohne Karte: Konto auf [cloud.cameraui.com](https://cloud.cameraui.com/) anlegen und den Schritten unten folgen. Aktiviert sich die Lizenz nicht, frag auf unserem [Discord](https://discord.gg/bBGnGcbz8N).
:::


## Aufnahmen aktivieren

Aufnahmen kommen vom **camera.ui NVR**-Plugin (standardmäßig installiert) und laufen über ein Abo, das an dein camera.ui-Konto gebunden ist. So schaltest du sie frei:

1. Wähle in **Einstellungen → Remote Zugriff** den Button **Server registrieren** und melde dich mit deinem camera.ui-Konto an. Das verknüpft den Server mit deinem Konto; den Remote-Cloud-Zugriff musst du dafür nicht aktivieren.
2. Öffne **Einstellungen → Aufnahmen** und klicke in der Karte **Lizenz & Cloud** auf das **Cloud-Icon** und melde dich an.
3. Deine Lizenz aktiviert sich dann automatisch. Aktualisiert sich der Status nicht, nutze den **Refetch License**-Button.

Mit aktiver Lizenz nehmen neue Kameras von selbst auf, solange ein Kamera-Slot frei ist: durchgehend, in allen Stream-Qualitäten. Modus, Qualitäten und An/Aus stehen in den Aufnahme-Einstellungen der Kamera.

### Kamera-Slots

Die Karte **Lizenz & Cloud** unter **Einstellungen → Aufnahmen** zeigt, wie viele Aufnahme-Slots dein Tarif enthält, wie viele Kameras aktiv sind und wie viele gerade einen Slot belegen.

Die Slots gehen der Reihe nach an deine aktivierten Kameras. Eine Kamera über dem Limit erkennt weiter, behält Ereignisse und Live-Ansicht, nimmt aber nicht auf und warnt nicht. Fehlt bei einer Kamera Material, schau also auf diese Karte. Schaltest du die Aufnahme an einer Kamera aus, wird ihr Slot frei.

Läuft dein Abo aus, stoppt die Aufnahme, und Wiedergabe, Export, Gesichtserkennung und Suche verlangen eine gültige Lizenz. **Auf der Platte wird nichts gelöscht**, alles ist wieder da, sobald die Lizenz wieder gültig ist. Eine fehlgeschlagene Cloud-Prüfung ist etwas anderes: Die Aufnahme läuft weiter, während camera.ui es erneut versucht.

## Aufnahme-Modi

<Shot src="/img/recording/recording-modes.png" alt="Aufnahme-Modus-Einstellungen" />

Jede Kamera nimmt in einem von drei Modi auf, einstellbar in ihren Aufnahme-Einstellungen:

- **Continuous.** Nimmt rund um die Uhr auf. Braucht am meisten Speicher.
- **Event.** Nimmt nur auf, wenn etwas passiert (Bewegung, ein Objekt, ein Sensor). Ein **Pre-Buffer** behält ein paar Sekunden vor jedem Auslöser.
- **Ad-hoc.** Verbindet sich nur mit der Kamera, wenn ein Ereignis auslöst. Für Kameras, die keine Ereignisse mehr senden, während ein Stream offen ist, etwa manche Batterie-Kameras.

## Qualität

Nimm eine oder mehrere Stream-Qualitäten auf: **high**, **mid**, **low**. Den Low-Stream mit aufzunehmen macht das Scrubben der [Timeline](/de/recording/timeline-playback) schnell.

## Weiter

- **[Speicher & Aufbewahrung](/de/recording/storage)** — wo Aufnahmen liegen und wie lange sie behalten werden.
- **[Timeline & Wiedergabe](/de/recording/timeline-playback)** — Material durchsehen.
- **[Export & Download](/de/recording/export)** — einen Clip speichern.
- **[Durchsuchen & Filter](/de/recording/browsing)** — vergangene Ereignisse finden.

[^license]: Aufnahmen (NVR) erfordern ein aktives camera.ui-Abo.
