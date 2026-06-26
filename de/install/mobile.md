# Mobile Apps

Die Mobile-Apps sind Companion-Viewer für iOS und Android. Mit ihnen siehst du deine Kameras live, durchsuchst Aufnahmen und erhältst unterwegs Benachrichtigungen. Der Server läuft woanders (auf deinem [Desktop](/de/install/desktop) oder einer [Server-Installation](/de/install/)); die Mobile-App verbindet sich mit ihm.

![Die camera.ui Mobile-App](/img/install/mobile-app.png)

## Download

Hol dir camera.ui im [App Store](https://cameraui.com) (iOS) und bei [Google Play](https://cameraui.com) (Android).

<!-- TODO: confirm final App Store + Google Play links — apps may still be in beta (TestFlight / Play testing) at the time of writing -->

| Plattform | Voraussetzung |
|---|---|
| iOS / iPadOS | 17.4 oder neuer |
| Android | 8.0 oder neuer (API 26) |

## Mit deinem Server verbinden

Die Mobile-Apps verbinden sich über **camera.ui Cloud** mit deinem Server. Melde dich mit deinem camera.ui-Konto an (Google, Apple oder E-Mail), und deine gekoppelten Server erscheinen.

Dafür sind serverseitig zwei Dinge nötig:

- [Remote-Zugriff über camera.ui Cloud](/de/remote/cloud) aktiviert.
- Der Server mit deinem Konto [gekoppelt](/de/remote/pairing).

Anders als die [Desktop-App](/de/install/desktop) verbinden sich die Mobile-Apps nicht direkt über das lokale Netzwerk. Sie laufen immer über camera.ui Cloud.

## Benachrichtigungen

Mit installierter und angemeldeter App erhältst du Push-Benachrichtigungen für Ereignisse direkt auf dein Handy. Unter [Benachrichtigungen](/de/notifications/) wählst du, worüber du alarmiert wirst.[^license]

## Updates

Die Apps aktualisieren sich über den App Store und Google Play wie jede andere App und erhalten zusätzlich Over-the-Air-Updates der Oberfläche. Siehe [Aktualisieren](/de/install/updating).

[^license]: Aufnahmen (NVR) und Push-Benachrichtigungen erfordern ein aktives camera.ui-Abo.
