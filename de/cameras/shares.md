---
title: Freigaben
---

# Freigaben

Eine Freigabe lässt jemanden den Live-Stream einer einzelnen Kamera ohne camera.ui-Konto ansehen, über einen Link und einen Zugangscode. Freigaben zu erstellen und zu verwalten ist Admins vorbehalten.

## Eine Freigabe erstellen

Wähle an einer Kamera **Kamera teilen** in der Player-Werkzeugleiste und lege fest:

- **Quelle.** Welche Stream-Qualität geteilt wird (hohe, mittlere oder niedrige Auflösung).
- **Gültig für.** Wie lange der Link gültig bleibt.
- **Max. Zuschauer.** Wie viele Personen gleichzeitig zusehen können, oder unbegrenzt.
- **Bezeichnung.** Ein optionaler Name, um die Freigabe später wiederzuerkennen.

Wähle **Erstellen**. camera.ui gibt dir einen **Share-Link** und einen **Zugangscode**. Schicke beide an die Person, mit der du teilen willst. Der Zugangscode wird nur einmal angezeigt, kopiere ihn also vor dem Schließen.

Die Person öffnet den Link, gibt den Code ein und sieht den Live-Stream. Ein camera.ui-Konto ist nicht nötig.

Die Zuschauer-Seite startet ohne Ton. Die Person kann ihn einschalten und bei Kameras mit Zwei-Wege-Audio über den Mikrofon-Button zurücksprechen. Picture-in-Picture und Vollbild gibt es ebenfalls.

::: tip Erfordert camera.ui Cloud
Teilen setzt voraus, dass dein Server mit **camera.ui Cloud** verbunden ([Einstellungen → Remote](/de/remote/cloud)) und online ist. Die Cloud hostet den Link und hilft dem Zuschauer, deinen Server zu finden, aber das Video läuft über eine **direkte, Ende-zu-Ende-verschlüsselte Verbindung** zwischen Zuschauer und deinem Server. Es passiert nie camera.uis Server, und der Zugangscode wird nur auf deinem eigenen Server geprüft.
:::

<Shot src="/img/cameras/share-dialog.png" alt="Freigabe-Dialog mit Link und Zugangscode" />

## Freigaben verwalten

Der **Freigaben**-Tab einer Kamera listet ihre aktiven Share-Links: Bezeichnung, geteilte Quelle, Erstellzeitpunkt, Ablauf und wie viele Zuschauer gerade zusehen, gemessen am Limit. Der Kopier-Button kopiert den Share-Link erneut, falls du ihn nochmal verschicken musst. Der Zugangscode lässt sich nicht mehr abrufen. Wähle **Widerrufen**, um eine Freigabe sofort zu beenden.
