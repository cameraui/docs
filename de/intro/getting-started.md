# Erste Schritte

Diese Anleitung bringt dich von einer frischen Installation bis zu deiner ersten Kamera. Sie setzt voraus, dass der camera.ui-Server bereits läuft. Falls nicht, beginne mit der [Installation](/de/install/).

## 1. camera.ui öffnen

camera.ui läuft über **HTTPS**. Wie du es öffnest, hängt von der Installationsart ab:

- **Desktop-App.** Sie öffnet sich beim Start automatisch (im Server-Modus startet sie den Server für dich).
- **Server** (Docker, Proxmox, Bare-Metal). Öffne `https://<server-ip>:3443` im Browser, oder `https://localhost:3443` auf derselben Maschine.

::: warning Zertifikatswarnung beim ersten Besuch
camera.ui sichert die Verbindung mit einem **selbstsignierten Zertifikat**, daher zeigt dein Browser beim ersten Mal eine Warnung („Diese Verbindung ist nicht sicher"). In deinem lokalen Netzwerk ist das erwartet. Wähle **Erweitert → Fortfahren**, um weiterzumachen. Die Warnung kannst du später entfernen, indem du das Zertifikat unter **Einstellungen → System → Zertifikat** installierst.
:::

<Shot src="/img/getting-started/cert-warning.png" alt="Browser-Zertifikatswarnung" />

## 2. Anmelden

Melde dich beim ersten Mal mit dem Standard-Konto an:

- **Benutzername:** `admin`
- **Passwort:** `admin`

Diese ersetzt du im nächsten Schritt.

<Shot src="/img/getting-started/login.png" alt="camera.ui Login-Screen" />

## 3. Ersteinrichtung

Bei der ersten Anmeldung führt dich camera.ui durch einen kurzen Einrichtungs-Assistenten:

**Willkommen → Erscheinungsbild → Konto → Fertig**

### Willkommen

Wähle, wie du starten möchtest:

- **Neue Installation.** Einen frischen Server einrichten. Das wählen die meisten.
- **Aus Backup wiederherstellen.** Wechsel von einer anderen camera.ui-Installation? Lade dein Backup-Archiv hoch, und camera.ui stellt deine Einstellungen wieder her und startet neu.

<Shot src="/img/getting-started/onboarding-welcome.png" alt="Onboarding-Welcome-Schritt" />

### Erscheinungsbild

Wähle dein **Theme** (hell, dunkel oder dem System folgen) und deine **Sprache**. Beides kannst du jederzeit später ändern.

### Konto

Richte dein eigenes Konto ein. Es ersetzt das Standard-`admin` / `admin`:

- Einen **Benutzernamen**
- Ein **Passwort** (zweimal eingeben)
- Optional einen Avatar

::: tip Wähle ein starkes Passwort
Das ist ein Administrator-Konto. Verwende ein starkes, einzigartiges Passwort, besonders wenn du camera.ui jemals von außerhalb deines lokalen Netzwerks erreichen willst.
:::

<Shot src="/img/getting-started/onboarding-account.png" alt="Onboarding-Account-Schritt" />

### Fertig

Wähle **Viel Spaß!**, um zu speichern. camera.ui meldet dich ab, damit das neue Konto wirksam wird. Melde dich dann erneut mit dem **gerade festgelegten Benutzernamen und Passwort** an.

## 4. Deine erste Kamera hinzufügen

Nach der Anmeldung landest du auf der **Startseite**. Wähle **Jetzt starten**, oder öffne **Kameras**.

Die **Kameras**-Seite durchsucht dein Netzwerk und listet gefundene Kameras unter **Entdeckt**. Wähle eine aus, gib Benutzername und Passwort ein, und sie ist hinzugefügt. Falls deine Kamera nicht gefunden wird, gib ihre Stream-Daten über **Kamera hinzufügen** manuell ein.

<Shot src="/img/getting-started/cameras-page.png" alt="Kameras-Seite mit entdeckten Kameras" />

Die vollständige Anleitung findest du unter **[Kamera hinzufügen](/de/cameras/add-camera)**.

## Zurechtfinden

Die Seitenleiste links ist nach Zweck gruppiert. Deine täglichen Seiten liegen oben. Eine Gruppe **Verwalten** hält Kameras, Sensoren, Gesichter, Automationen, Plugins und Instanzen. Eine Gruppe **System** fasst die Diagnose-Seiten und startet eingeklappt. Auf dem Handy erscheinen dieselben Gruppen im Menü.

Die Reihenfolge kannst du ändern. Wähle den **Stift** oben in der Seitenleiste, um zu bearbeiten: zieh eine Seite an eine andere Stelle oder in eine andere Gruppe, blende mit dem **Auge** eine Settings-Seite aus, die du nicht brauchst, und wähle dann den **Haken**, wenn du fertig bist. **Auf Standard zurücksetzen** stellt die ursprüngliche Anordnung wieder her. Deine Anordnung wird mit deinem Konto gespeichert, folgt dir also in jeden Browser und auf jedes Gerät.

<Shot src="/img/getting-started/sidebar-edit.png" alt="Die Seitenleiste im Bearbeiten-Modus, mit Gruppen und Ziehpunkten" />

Unter **Einstellungen → Erscheinungsbild** kannst du außerdem die Settings-Seiten als eigene Gruppe in die Seitenleiste aufnehmen und wählen, welche Gruppen sich einklappen lassen.

## Nächste Schritte

Sobald deine Kamera verbunden ist:

- **[Live-Ansicht](/de/cameras/live-view)** — Kameras live ansehen
- **[Aufnahmen (NVR)](/de/recording/)** — 24/7- oder Ereignis-Aufnahme aktivieren
- **[Erkennung & KI](/de/detection/)** — Bewegungs- und Objekterkennung hinzufügen
- **[Remote-Zugriff](/de/remote/)** und die **[Mobile-Apps](/de/install/mobile)** — deine Kameras von überall erreichen
