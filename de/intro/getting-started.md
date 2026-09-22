# Erste Schritte

Vom laufenden Server bis zur ersten Kamera. Ist der Server noch nicht installiert, beginne mit der [Installation](/de/install/).

## 1. camera.ui öffnen

camera.ui läuft über **HTTPS**. Wie du es öffnest, hängt von der Installationsart ab:

- **Desktop-App.** Sie öffnet sich beim Start automatisch (im Server-Modus startet sie den Server für dich).
- **Server** (Docker, Proxmox, Bare-Metal). Öffne `https://<server-ip>:3443` im Browser, oder `https://localhost:3443` auf derselben Maschine.

::: warning Zertifikatswarnung beim ersten Besuch
camera.ui nutzt ein **selbstsigniertes Zertifikat**, daher warnt der Browser beim ersten Besuch. Weiter geht es mit **Erweitert → Fortfahren**. Die Warnung verschwindet, wenn du das Zertifikat unter **Einstellungen → System → Zertifikat** installierst.
:::

<Shot src="/img/getting-started/cert-warning.png" alt="Browser-Zertifikatswarnung" />

## 2. Anmelden

Melde dich beim ersten Mal mit dem Standard-Konto an:

- **Benutzername:** `admin`
- **Passwort:** `admin`

Diese ersetzt du im nächsten Schritt.

## 3. Ersteinrichtung

Die erste Anmeldung öffnet einen Einrichtungs-Assistenten:

**Willkommen → Erscheinungsbild → Konto → Fertig**

### Willkommen

- **Neue Installation.** Einen frischen Server einrichten.
- **Aus Backup wiederherstellen.** Ein Backup-Archiv einer anderen camera.ui-Installation hochladen. camera.ui stellt deine Einstellungen wieder her und startet neu.

### Erscheinungsbild

**Theme** (hell, dunkel oder dem System folgen) und **Sprache**.

### Konto

Dein eigener Benutzername, Passwort und optional ein Avatar. Dieses Konto ersetzt das Standard-`admin` / `admin`.

::: tip Wähle ein starkes Passwort
Das ist ein Administrator-Konto. Verwende ein starkes, einzigartiges Passwort, besonders wenn du camera.ui von außerhalb deines Netzwerks erreichen willst.
:::

### Fertig

**Viel Spaß!** speichert und meldet dich ab. Melde dich dann mit dem **gerade festgelegten Benutzernamen und Passwort** wieder an.

## 4. Deine erste Kamera hinzufügen

Nach der Anmeldung landest du auf der **Startseite**. Wähle **Jetzt starten**, oder öffne **Kameras**.

Die **Kameras**-Seite durchsucht dein Netzwerk und listet gefundene Kameras unter **Entdeckt**. Wähle eine aus, gib Benutzername und Passwort ein, und sie ist hinzugefügt. Falls deine Kamera nicht gefunden wird, gib ihre Stream-Daten über **Kamera hinzufügen** manuell ein.

<Shot src="/img/getting-started/cameras-page.png" alt="Kameras-Seite mit entdeckten Kameras" />

Die vollständige Anleitung findest du unter **[Kamera hinzufügen](/de/cameras/add-camera)**.

## Zurechtfinden

Die Seitenleiste links ist nach Zweck gruppiert. Deine täglichen Seiten liegen oben. Eine Gruppe **Verwalten** hält Kameras, Sensoren, Gesichter, Automationen, Plugins und Instanzen. Eine Gruppe **System** fasst die Diagnose-Seiten und startet eingeklappt. Auf dem Handy erscheinen dieselben Gruppen im Menü.

Der **Stift** oben in der Seitenleiste startet den Bearbeiten-Modus: zieh Seiten an eine andere Stelle oder in eine andere Gruppe, blende Settings-Seiten mit dem **Auge** aus und bestätige mit dem **Haken**. **Auf Standard zurücksetzen** stellt die ursprüngliche Anordnung wieder her. Die Anordnung wird mit deinem Konto gespeichert und folgt dir in jeden Browser und auf jedes Gerät.

<Shot src="/img/getting-started/sidebar-edit.png" alt="Die Seitenleiste im Bearbeiten-Modus, mit Gruppen und Ziehpunkten" />

Unter **Einstellungen → Erscheinungsbild** kannst du außerdem die Settings-Seiten als eigene Gruppe in die Seitenleiste aufnehmen und wählen, welche Gruppen sich einklappen lassen.

## Nächste Schritte

- **[Live-Ansicht](/de/cameras/live-view)** — Kameras live ansehen
- **[Aufnahmen (NVR)](/de/recording/)** — 24/7- oder Ereignis-Aufnahme aktivieren
- **[Erkennung & KI](/de/detection/)** — Bewegungs- und Objekterkennung hinzufügen
- **[Remote-Zugriff](/de/remote/)** und die **[Mobile-Apps](/de/install/mobile)** — deine Kameras von überall erreichen
