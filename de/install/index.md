# Welche Installation?

camera.ui hat einen **Server**, der die Arbeit erledigt, und **Apps** (Desktop, Mobile, Browser), die ihn anzeigen. Den Server installierst du einmal, alles andere verbindet sich nur damit.

Die beste Installationsart hängt vor allem davon ab, **auf welcher Plattform** du ihn betreibst.

## Die schnelle Antwort

- **macOS oder Windows** → die **[Desktop-App](/de/install/desktop)** (empfohlen). Eine Ein-Klick-Installation, die Server und Viewer zusammen betreibt, geeignet für den durchgehenden 24/7-Betrieb.
- **Linux** → **[Docker](/de/install/docker)** (oder **[Proxmox](/de/install/proxmox)**, falls du es nutzt). Das ist die empfohlene Art, einen dedizierten Linux-Server zu betreiben, mit GPU-Beschleunigung.
- **Willst du nur vom Handy aus zusehen?** → die **[Mobile-Apps](/de/install/mobile)**. Du brauchst trotzdem einen Server, der irgendwo läuft.

Die Desktop-App ist zugleich der einfachste Einstieg und ein vollwertiger Always-on-Server.

## Eine Methode wählen

| Methode | Läuft auf | Empfohlen für |
|---|---|---|
| **[Desktop-App](/de/install/desktop)** | macOS, Windows, Linux | **macOS & Windows.** Der einfachste Weg; Server + Viewer in einem |
| **[Docker](/de/install/docker)** | Linux (x86-64 / arm64) | **Linux**-Server, Mini-PCs, NAS und Homelabs, mit GPU-Beschleunigung |
| **[Proxmox](/de/install/proxmox)** | Proxmox VE | Homelabs, die bereits Proxmox nutzen |
| **[Linux (Bare-Metal)](/de/install/linux)** | Linux | Eine Linux-Maschine ohne Docker |
| **[Mobile-Apps](/de/install/mobile)** | iOS, Android | Unterwegs ansehen (verbindet sich mit deinem Server) |

::: tip Bewährte Hardware
Für durchgehende Aufnahme eignen sich ein kleiner **Intel N100** Mini-PC (mit [Docker](/de/install/docker)) oder ein **Apple-Silicon-Mac** (mit der [Desktop-App](/de/install/desktop)) gut als stromsparende Server. Siehe [Systemanforderungen](/de/intro/requirements).
:::

## Ein paar Hinweise

- **Ein Server genügt.** Die Desktop-App, die Mobile-Apps und ein Browser sind alle Viewer desselben Servers. Installiere den Server einmal und verbinde dich dann über [Remote-Zugriff](/de/remote/) von überall.
- **Die Desktop-App kann auch nur Viewer sein.** Wenn du bereits einen Server woanders betreibst, installiere die Desktop-App im Viewer-Modus, um ihn anzusehen. Siehe [Desktop-App](/de/install/desktop).
