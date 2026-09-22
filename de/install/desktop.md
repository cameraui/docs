# Desktop-App

Die Desktop-App ist die empfohlene Art, camera.ui auf **macOS und Windows** zu betreiben. Ein Download installiert Server und Viewer zusammen. Sie läuft auch auf Linux, dort ist allerdings ein [Docker](/de/install/docker)- oder [Proxmox](/de/install/proxmox)-Server die bessere Wahl (siehe [Welche Installation?](/de/install/)).

## Download

Die Installer liegen hier und auf der [Download-Seite](https://cameraui.com/#download). Die Links zeigen immer auf das neueste Release.

| Plattform | Download |
|---|---|
| macOS (Apple Silicon) | [`camera.ui-arm64.dmg`](https://downloads.cameraui.com/latest/camera.ui-arm64.dmg) |
| macOS (Intel) | [`camera.ui-x64.dmg`](https://downloads.cameraui.com/latest/camera.ui-x64.dmg) |
| Windows 10 / 11 | [`camera.ui-x64.exe`](https://downloads.cameraui.com/latest/camera.ui-x64.exe) |
| Linux (AppImage) | [`x64`](https://downloads.cameraui.com/latest/camera.ui-x86_64.AppImage) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.AppImage) |
| Linux (.deb) | [`amd64`](https://downloads.cameraui.com/latest/camera.ui-amd64.deb) · [`arm64`](https://downloads.cameraui.com/latest/camera.ui-arm64.deb) |

<Shot src="/img/install/desktop-download.png" alt="camera.ui Download-Seite" />

## Installieren

### macOS

Zieh **camera.ui** aus der `.dmg` in den Programme-Ordner. Die App ist signiert und notarisiert, sie öffnet sich also ohne Warnungen.

### Windows

Die `.exe` installiert für den aktuellen Benutzer, Administratorrechte sind nicht nötig.

Die App ist noch nicht code-signiert, **SmartScreen** warnt deshalb eventuell. Wähle **Weitere Informationen → Trotzdem ausführen**.

### Linux

Die `.deb` installieren:

```bash
sudo apt install ./camera.ui-*.deb
```

Oder mache die `.AppImage` ausführbar und starte sie:

```bash
chmod +x camera.ui-*.AppImage
./camera.ui-*.AppImage
```

::: tip Nimm die `.AppImage`, wenn du automatische Updates willst
Nur die `.AppImage` aktualisiert sich selbst. Eine `.deb`-Installation bleibt auf ihrer Version, bis du eine neuere `.deb` installierst.
:::

## Erster Start: wählen, wie es läuft

Beim ersten Start fragt die App **„Wie soll camera.ui laufen?"**:

- **Server.** Betreibt den camera.ui-Server auf diesem Gerät. Die All-in-One-Option.
- **Worker.** Übernimmt einen Teil der Arbeit für einen anderen camera.ui-Server in deinem Netzwerk. Braucht die Adresse des Hauptservers und einen Pairing-Code aus dessen **Workers**-Einstellungen. Siehe [Worker](/de/admin/workers#worker-mit-der-desktop-app).
- **Viewer · Direkt.** Verbindet sich per Adresse mit einem vorhandenen Server.
- **Viewer · Cloud.** Meldet sich über cloud.cameraui.com an, um einen Server über [camera.ui Cloud](/de/remote/cloud) zu erreichen.

<Shot src="/img/install/desktop-mode-picker.png" alt="Erststart-Modus-Auswahl der Desktop-App" />

Der **Server**-Modus geht weiter mit der [Ersteinrichtung](/de/intro/getting-started). Im **Worker**-Modus gibt es kein Fenster, nur das Tray-Symbol und eine Statusanzeige.

## Das Tray-Symbol

Im Tray-Symbol stecken die Einstellungen der App selbst:

- **Beim Anmelden öffnen.** Startet camera.ui beim Anmelden, direkt in den Tray ohne Fenster.[^autostart]
- **In den Tray schließen.** Standardmäßig aus. Eingeschaltet versteckt Schließen das Fenster nur, ein Server auf diesem Gerät läuft weiter.[^closetotray]
- **Modus wechseln….** Ändert, wie die App läuft, ohne Neuinstallation.
- **Beenden.** Stoppt die App, im Server-Modus auch den Server.

Unter Windows öffnet ein Linksklick auf das Tray-Symbol das Fenster, ein Rechtsklick das Menü.

GNOME zeigt ein Tray-Symbol nur mit der AppIndicator-Erweiterung. **Modus wechseln…** steckt auch im App-Menü unter **Datei**, und ein Start der App mit `--switch-mode` öffnet die Modus-Auswahl: in der laufenden Instanz, wenn eine läuft, sonst bei diesem Start. Beides funktioniert auch für einen Worker, der kein eigenes Fenster hat.

<Shot src="/img/install/desktop-tray-menu.png" alt="Tray-Menü der Desktop-App" />

[^autostart]: Nur macOS und Windows.
[^closetotray]: Nur Windows und Linux. Unter macOS bleibt die App beim Schließen des Fensters ohnehin im Tray, daher gibt es die Option dort nicht.

## macOS-Berechtigungen

Auf macOS 15 und neuer erlaubst du beim ersten Start den Zugriff auf das **lokale Netzwerk**, sonst erreicht die App deine Kameras nicht. Gegensprechen fragt nach **Mikrofon**-Zugriff, **„Mein Standort"** beim Geofence-Trigger in den [Automatisierungen](/de/automations/) nach **Standort**-Zugriff.

## Updates

Die App prüft beim Start und regelmäßig im Betrieb auf Updates und installiert sie selbst. Im Server-Modus aktualisiert sie den gebündelten Server, bevor sie ihn startet. Die [Updates-Seite](/de/install/updating#die-updates-seite) stößt ein Update von jedem Gerät aus an.

Unter Linux aktualisiert sich nur die `.AppImage` selbst; eine `.deb` aktualisierst du über die [Download-Seite](https://cameraui.com).

## Wo deine Daten liegen

Im Server-Modus liegen Einstellungen und Aufnahmen im benutzerbezogenen Datenordner der App:

- **macOS:** `~/Library/Application Support/camera.ui/camera.ui/volume`
- **Windows:** `%APPDATA%\camera.ui\camera.ui\volume`
- **Linux:** `~/.config/camera.ui/camera.ui/volume`

Über die Aufnahme-Einstellungen ziehen die Aufnahmen auf eine andere Disk um, etwa eine externe Platte. Meide eine Netzwerkfreigabe, siehe [Speicher & Aufbewahrung](/de/recording/storage#wo-aufnahmen-liegen).

Siehe [Backup & Wiederherstellung](/de/admin/backup), um eine Kopie zu behalten.
