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

Endet die Anmeldung mit **Server-Limit deines Tarifs erreicht**, hält noch ein anderer Server die Lizenz, zum Beispiel eine frühere Testinstallation. Entferne diesen Server im [Cloud-Dashboard](/de/remote/cloud#das-cloud-dashboard) und melde dich erneut an.

Eine Lizenz läuft immer nur auf einer Installation eines Servers. Meldet sich eine andere Installation an, stoppt die erste die Aufnahme und zeigt einen Hinweis. Meldest du dich dort wieder an, wandert die Lizenz zurück. Ein Server, den du im Cloud-Dashboard entfernst, stoppt die Aufnahme.

Mit aktiver Lizenz nehmen neue Kameras von selbst auf, solange ein Kamera-Slot frei ist: durchgehend, in allen Stream-Qualitäten. Eine Akku-Kamera, die ihr Plugin als solche meldet, startet stattdessen in **Ad-hoc**. Modus, Qualitäten und An/Aus stehen in den Aufnahme-Einstellungen der Kamera.

Aufnehmen geht mit H.264, H.265 und MJPEG. Eine MJPEG-Kamera nimmt ihre Bilder so auf, wie sie sie sendet. Das braucht ein [Mehrfaches an Speicher](/de/recording/storage#grobe-dimensionierung) gegenüber H.264, und ein Bild, das breiter oder höher als 2040 Pixel ist, wird mittig auf 2040 beschnitten. Eine Kamera mit einem anderen Codec nimmt nichts auf, und ihre Timeline zeigt dazu einen Aufnahmefehler. Wie du eine solche Kamera auf dem Server transkodierst, steht unter [Live-Ansicht](/de/cameras/live-view#streaming-modi).

### Kamera-Slots

Die Karte **Lizenz & Cloud** unter **Einstellungen → Aufnahmen** zeigt, wie viele Aufnahme-Slots dein Tarif enthält, wie viele Kameras aktiv sind und wie viele gerade einen Slot belegen.

Eine Kamera ohne freien Slot erkennt weiter, behält Ereignisse und Live-Ansicht, nimmt aber nicht auf. Fehlt bei einer Kamera Material, schau also auf diese Karte. Schaltest du die Aufnahme an einer Kamera aus, wird ihr Slot frei.

Endet dein Abo oder deine Testphase, stoppt die Aufnahme, und Wiedergabe, Export, Gesichtserkennung und Suche verlangen eine gültige Lizenz. Die Aufnahmen bleiben auf der Platte und sind wieder da, sobald die Lizenz wieder gültig ist. [Aufbewahrung und Speichergrenzen](/de/recording/storage) laufen weiter, ältere Aufnahmen werden also trotzdem gelöscht, Favoriten ausgenommen. Exportiere, was du behalten möchtest, vor dem Enddatum. Drei Tage vor dem Ende einer Testphase bekommst du eine Erinnerung per Mail.

Kündigen kannst du jederzeit in deinem Konto oder ohne Anmeldung unter [billing.cameraui.com/cancel](https://billing.cameraui.com/cancel). Der Tarif läuft bis zum Ende der Abrechnungsperiode. Nach dem ersten Jahr endet ein Jahresabo einen Monat nach der Kündigung, und was du für die Zeit danach gezahlt hast, bekommst du zurück.

Ohne Internet läuft die Lizenz eine Weile weiter. Bevor etwas stoppt, zeigt **Einstellungen → Aufnahmen** das Datum, und Admins bekommen eine Benachrichtigung. Eine Verbindung zu cameraui.com bringt alles zurück, ein meist offline laufender Server sollte also ab und zu online gehen.

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
