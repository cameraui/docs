# Mobile Apps

Die Apps für iOS und Android sind Viewer für Live-Ansicht, Aufnahmen und Benachrichtigungen. Sie verbinden sich mit einem Server, der woanders läuft (der [Desktop-App](/de/install/desktop) oder einer [Server-Installation](/de/install/)).

<Shot src="/img/install/mobile-app.png" alt="Die camera.ui Mobile-App" />

## Download

- **iOS / iPadOS.** Derzeit in der **Beta**. Tritt über [TestFlight](https://testflight.apple.com/join/wbzK69Wu) bei: Apples TestFlight-App installieren, dann den Einladungslink auf dem Gerät öffnen.[^appstore]
- **Android.** Derzeit in der **offenen Beta**. Installiere die App über [Google Play](https://play.google.com/store/apps/details?id=com.cameraui.app), eine Einladung ist nicht nötig.[^androidbeta]

<!-- TODO: on release, swap the TestFlight link for the App Store listing and drop the beta wording for Android -->

| Plattform | Voraussetzung |
|---|---|
| iOS / iPadOS | 17.4 oder neuer |
| Android | 8.0 oder neuer (API 26), Android System WebView 111 oder neuer |

## Mit deinem Server verbinden

Melde dich mit deinem camera.ui-Konto an (Google, Apple oder E-Mail), und deine gekoppelten Server erscheinen. Den Weg wählt die App selbst:

- **Zu Hause.** Im Netzwerk des Servers verbindet sie sich direkt, Live-Ansicht startet also schneller. Dem Zertifikat des Servers für lokale Adressen vertraut sie automatisch.
- **Unterwegs.** Außerhalb des Netzwerks geht es über **camera.ui Cloud**.

Serverseitig braucht das:

- [Remote-Zugriff über camera.ui Cloud](/de/remote/cloud) aktiviert.
- Der Server mit deinem Konto [gekoppelt](/de/remote/pairing).

## Benachrichtigungen

Eine angemeldete App erhält Push-Benachrichtigungen für Ereignisse. Worüber du alarmiert wirst, stellst du unter [Benachrichtigungen](/de/notifications/) ein.[^license]

## Biometrische Anmeldung

**Einstellungen → Konto → Biometrische Anmeldung** meldet dich mit Face ID oder Touch ID statt mit Passwort an. Die Zugangsdaten liegen im sicheren Speicher des Geräts; melde dich nach dem Aktivieren einmal ab und wieder an, damit sie gespeichert werden. Ausschalten entfernt sie.

## App-Sperre

Die **App-Sperre mit Face ID / Fingerabdruck** in den Einstellungen der App verlangt bei jedem Start eine biometrische Prüfung (ersatzweise den Geräte-Passcode), und erneut nach ein paar Minuten im Hintergrund. Kurzes Wegwechseln fragt nicht neu. Sie ist unabhängig von der biometrischen Anmeldung.

## Updates

Die Apps aktualisieren sich über den App Store und Google Play (auf iOS während der Beta: TestFlight), dazu kommen Over-the-Air-Updates der Oberfläche. Siehe [Aktualisieren](/de/install/updating).

Ist der Server oder sein NVR-Plugin älter, als die App braucht, zeigt sie **Update empfohlen** mit der nötigen und der installierten Version. Server und Plugin aktualisierst du auf der [Updates-Seite](/de/install/updating#die-updates-seite). **Verstanden** blendet den Hinweis für diese Versionen aus.

[^license]: Ein aktives camera.ui-Abo deckt Aufnahmen (NVR) und die darauf aufbauenden Funktionen ab, etwa Wiedergabe, Export, Gesichtserkennung, semantische Suche und KI-Beschreibungen, dazu Push-Benachrichtigungen. Live-Ansicht und Echtzeit-Erkennung sind kostenlos.
[^appstore]: Mit dem öffentlichen Release wechselt die App in den App Store.
[^androidbeta]: Für Beta-Builds aktivierst du in der App unter **Einstellungen → System** die Option **Beta-Updates**.
