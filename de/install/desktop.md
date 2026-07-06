# Desktop-App

Die Desktop-App ist die empfohlene Art, camera.ui auf **macOS und Windows** zu betreiben. Ein Download installiert Server und Viewer zusammen, sodass du mit wenigen Klicks ein laufendes Setup hast. Sie läuft auch auf Linux, dort ist allerdings ein [Docker](/de/install/docker)- oder [Proxmox](/de/install/proxmox)-Server die bessere Wahl (siehe [Welche Installation?](/de/install/)).

## Download

Lade den Installer für deine Plattform herunter — direkt hier, oder von der [Download-Seite](https://cameraui.com/#download). Die Links zeigen immer auf das neueste Release.

| Plattform | Download |
|---|---|
| macOS (Apple Silicon) | [`camera.ui-arm64.dmg`](https://downloads.cameraui.com/latest/camera.ui-arm64.dmg) |
| macOS (Intel) | [`camera.ui-x64.dmg`](https://downloads.cameraui.com/latest/camera.ui-x64.dmg) |
| Windows 10 / 11 | [`camera.ui-x64.exe`](https://downloads.cameraui.com/latest/camera.ui-x64.exe) |
| Linux (AppImage) | [`x64`](https://downloads.cameraui.com/latest/camera.ui-x86_64.AppImage) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.AppImage) |
| Linux (.deb) | [`amd64`](https://downloads.cameraui.com/latest/camera.ui-amd64.deb) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.deb) |

Apple-Silicon- und Intel-Macs nutzen getrennte Downloads. Wähle den, der zu deinem Mac passt.

<Shot src="/img/install/desktop-download.png" alt="camera.ui Download-Seite" />

## Installieren

### macOS

Öffne die heruntergeladene `.dmg` und ziehe **camera.ui** in deinen Programme-Ordner, dann starte es von dort. Die App ist von Apple signiert und notarisiert, sie öffnet sich also ohne zusätzliche Warnungen.

### Windows

Führe die heruntergeladene `.exe` aus. Der Installer lässt dich den Installationsort wählen und richtet die App für den aktuellen Benutzer ein, sodass keine Administratorrechte nötig sind.

Windows zeigt möglicherweise eine **SmartScreen**-Warnung, weil die App noch nicht code-signiert ist. Wähle **Weitere Informationen → Trotzdem ausführen**, um fortzufahren.

### Linux

Installiere die `.deb` mit deinem Paketmanager:

```bash
sudo apt install ./camera.ui-*.deb
```

Oder mache die `.AppImage` ausführbar und starte sie:

```bash
chmod +x camera.ui-*.AppImage
./camera.ui-*.AppImage
```

::: tip Nimm die `.AppImage`, wenn du automatische Updates willst
Nur die `.AppImage` aktualisiert sich selbst. Eine `.deb`-Installation bleibt auf ihrer Version — aktualisiere sie, indem du die neue `.deb` herunterlädst und installierst.
:::

## Erster Start: wählen, wie es läuft

Beim ersten Öffnen fragt die App **„Wie soll camera.ui laufen?"** und bietet drei Modi:

- **Server.** Betreibt den camera.ui-Server auf diesem Gerät. Das ist die All-in-One-Option und das, was die meisten auf macOS und Windows wählen.
- **Viewer · Direkt.** Verbindet sich per Adresse mit einem vorhandenen Server, zum Beispiel einer anderen Maschine in deinem Netzwerk.
- **Viewer · Cloud.** Meldet sich über cloud.cameraui.com an, um einen Server über [camera.ui Cloud](/de/remote/cloud) zu erreichen.

<Shot src="/img/install/desktop-mode-picker.png" alt="Erststart-Modus-Auswahl der Desktop-App" />

Im **Server**-Modus startet die App den Server, öffnet die Oberfläche und führt dich durch die [Ersteinrichtung](/de/intro/getting-started). In einem **Viewer**-Modus verbindet sie sich mit einem Server, den du bereits hast.

Du kannst das jederzeit über das Tray-Symbol ändern (**Modus wechseln…**), ohne neu zu installieren.

<Shot src="/img/install/desktop-tray-menu.png" alt="Tray-Menü der Desktop-App" />


## macOS-Berechtigungen

Auf macOS 15 und neuer fragt das System beim ersten Start nach Zugriff auf das **lokale Netzwerk**. Erlaube ihn, sonst kann die App deine Kameras im Netzwerk nicht erreichen. Beim ersten Gegensprechen fragt macOS zusätzlich nach **Mikrofon**-Zugriff, und beim ersten Tippen auf **„Mein Standort"** beim Geofence-Trigger in den [Automatisierungen](/de/automations/) fragt es nach **Standort**-Zugriff.

## Updates

Die Desktop-App hält sich selbst aktuell. Sie prüft beim Start und regelmäßig im Betrieb auf Updates und lädt sie dann für dich herunter und installiert sie. Im Server-Modus aktualisiert sie außerdem den gebündelten Server, bevor sie ihn startet, sodass App und Server synchron bleiben.

## Wo deine Daten liegen

Im Server-Modus werden deine Einstellungen und Aufnahmen in einem `camera.ui/volume`-Ordner innerhalb des benutzerbezogenen Datenordners der App gespeichert:

- **macOS:** `~/Library/Application Support/camera.ui/camera.ui/volume`
- **Windows:** `%APPDATA%\camera.ui\camera.ui\volume`
- **Linux:** `~/.config/camera.ui/camera.ui/volume`

Siehe [Backup & Wiederherstellung](/de/admin/backup), um eine Kopie zu behalten.
