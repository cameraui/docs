# Welche Installation?

camera.ui hat einen **Server**, der die Arbeit erledigt, und **Apps** (Desktop, Mobile, Browser), die sich mit ihm verbinden. Welche Installationsart passt, hängt von der Plattform ab, auf der der Server läuft.

## Die schnelle Antwort

- **macOS oder Windows** → die **[Desktop-App](/de/install/desktop)** (empfohlen). Betreibt Server und Viewer zusammen, geeignet für 24/7-Betrieb.
- **Linux** → **[Docker](/de/install/docker)** (oder **[Proxmox](/de/install/proxmox)**), mit GPU-Beschleunigung.
- **Nur Handy** → die **[Mobile-Apps](/de/install/mobile)**. Sie brauchen trotzdem einen Server, der irgendwo läuft.

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

- **Ein Server genügt.** Desktop-App, Mobile-Apps und Browser zeigen alle denselben Server. Von außerhalb deines Netzes geht es über [Remote-Zugriff](/de/remote/).
- **Die Desktop-App kann auch nur Viewer sein.** Im Viewer-Modus zeigt sie einen Server, der woanders läuft. Siehe [Desktop-App](/de/install/desktop).
