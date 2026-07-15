# Mobile Apps

Die Mobile-Apps sind Companion-Viewer für iOS und Android. Mit ihnen siehst du deine Kameras live, durchsuchst Aufnahmen und erhältst unterwegs Benachrichtigungen. Der Server läuft woanders (auf deinem [Desktop](/de/install/desktop) oder einer [Server-Installation](/de/install/)); die Mobile-App verbindet sich mit ihm.

<Shot src="/img/install/mobile-app.png" alt="Die camera.ui Mobile-App" />

## Download

- **iOS / iPadOS.** Derzeit in der **Beta**. Tritt über [TestFlight](https://testflight.apple.com/join/wbzK69Wu) bei: Apples TestFlight-App installieren, dann den Einladungslink auf dem Gerät öffnen.[^appstore]
- **Android.** Erscheint in Kürze.

<!-- TODO: swap the TestFlight invite for the App Store link once released; add the Google Play link when the Android app ships -->

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

## Biometrische Anmeldung

Aktiviere unter **Einstellungen → Konto** die **Biometrische Anmeldung**, um dich statt mit Passwort mit Face ID oder Touch ID anzumelden. camera.ui speichert deine Zugangsdaten dafür im sicheren Speicher des Geräts; melde dich nach dem Aktivieren einmal ab und wieder an, damit sie gespeichert werden. Schaltest du die Option wieder aus, werden die gespeicherten Zugangsdaten entfernt.

## App-Sperre

Für eine zusätzliche Ebene auf dem Gerät selbst aktivierst du in den Einstellungen der App die **App-Sperre mit Face ID / Fingerabdruck**. Ist sie aktiv, verlangt die App bei jedem Start eine biometrische Authentifizierung (oder ersatzweise den Geräte-Passcode), und erneut, wenn du nach ein paar Minuten im Hintergrund zurückkommst. Kurz wegwechseln und zurück fragt nicht neu. Das ist getrennt von der biometrischen Anmeldung: Die Anmeldung spart dir das Passwort-Tippen, die App-Sperre prüft zusätzlich am Gerät selbst.

## Updates

Die Apps aktualisieren sich über den App Store und Google Play (während der Beta über TestFlight) wie jede andere App und erhalten zusätzlich Over-the-Air-Updates der Oberfläche. Siehe [Aktualisieren](/de/install/updating).

[^license]: Ein aktives camera.ui-Abo deckt Aufnahmen (NVR) und die darauf aufbauenden Funktionen ab, etwa Wiedergabe, Export, Gesichtserkennung, semantische Suche und KI-Beschreibungen, dazu Push-Benachrichtigungen. Live-Ansicht und Echtzeit-Erkennung sind kostenlos.
[^appstore]: Mit dem öffentlichen Release wechselt die App in den App Store.
