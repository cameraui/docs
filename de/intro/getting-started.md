# Erste Schritte

Diese Anleitung bringt dich von einer frischen Installation bis zu deiner ersten Kamera. Sie setzt voraus, dass der camera.ui-Server bereits läuft. Falls nicht, beginne mit der [Installation](/de/install/).

## 1. camera.ui öffnen

camera.ui läuft über **HTTPS**. Wie du es öffnest, hängt von der Installationsart ab:

- **Desktop-App.** Sie öffnet sich beim Start automatisch (im Server-Modus startet sie den Server für dich).
- **Server** (Docker, Proxmox, Bare-Metal). Öffne `https://<server-ip>:3443` im Browser, oder `https://localhost:3443` auf derselben Maschine.

::: warning Zertifikatswarnung beim ersten Besuch
camera.ui sichert die Verbindung mit einem **selbstsignierten Zertifikat**, daher zeigt dein Browser beim ersten Mal eine Warnung („Diese Verbindung ist nicht sicher"). In deinem lokalen Netzwerk ist das erwartet. Wähle **Erweitert → Fortfahren**, um weiterzumachen. Die Warnung kannst du später entfernen, indem du das Zertifikat unter **Einstellungen → System → Zertifikat** installierst.
:::

![Browser-Zertifikatswarnung](/img/getting-started/cert-warning.png)

## 2. Anmelden

Melde dich beim ersten Mal mit dem Standard-Konto an:

- **Benutzername:** `admin`
- **Passwort:** `admin`

Diese ersetzt du im nächsten Schritt.

![camera.ui Login-Screen](/img/getting-started/login.png)

## 3. Ersteinrichtung

Bei der ersten Anmeldung führt dich camera.ui durch einen kurzen Einrichtungs-Assistenten:

**Willkommen → Erscheinungsbild → Konto → Fertig**

### Willkommen

Wähle, wie du starten möchtest:

- **Neue Installation.** Einen frischen Server einrichten. Das wählen die meisten.
- **Aus Backup wiederherstellen.** Wechsel von einer anderen camera.ui-Installation? Lade dein Backup-Archiv hoch, und camera.ui stellt deine Einstellungen wieder her und startet neu.

![Onboarding-Welcome-Schritt](/img/getting-started/onboarding-welcome.png)

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

![Onboarding-Account-Schritt](/img/getting-started/onboarding-account.png)

### Fertig

Wähle **Viel Spaß!**, um zu speichern. camera.ui meldet dich ab, damit das neue Konto wirksam wird. Melde dich dann erneut mit dem **gerade festgelegten Benutzernamen und Passwort** an.

## 4. Deine erste Kamera hinzufügen

Nach der Anmeldung landest du auf der **Startseite**. Wähle **Jetzt starten**, oder öffne **Kameras**.

Die **Kameras**-Seite durchsucht dein Netzwerk und listet gefundene Kameras unter **Entdeckt**. Wähle eine aus, gib Benutzername und Passwort ein, und sie ist hinzugefügt. Falls deine Kamera nicht gefunden wird, gib ihre Stream-Daten über **Kamera hinzufügen** manuell ein.

![Kameras-Seite mit entdeckten Kameras](/img/getting-started/cameras-page.png)

Die vollständige Anleitung findest du unter **[Kamera hinzufügen](/de/cameras/add-camera)**.

## Nächste Schritte

Sobald deine Kamera verbunden ist:

- **[Live-Ansicht](/de/cameras/live-view)** — Kameras live ansehen
- **[Aufnahmen (NVR)](/de/recording/)** — 24/7- oder Ereignis-Aufnahme aktivieren
- **[Erkennung & KI](/de/detection/)** — Bewegungs- und Objekterkennung hinzufügen
- **[Remote-Zugriff](/de/remote/)** und die **[Mobile-Apps](/de/install/mobile)** — deine Kameras von überall erreichen
