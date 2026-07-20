---
title: Home-Assistant-Add-on
---

# Home-Assistant-Add-on

Du kannst den vollen camera.ui-Server als Add-on direkt in Home Assistant OS laufen lassen, ohne eine zweite Maschine zu pflegen. Im Repository stecken zwei Add-ons: **camera.ui**, der volle Server mit eigenem Panel in der Home-Assistant-Seitenleiste, und **camera.ui Worker**, ein Helfer, der die Rechenleistung dieser Maschine einem camera.ui-Server woanders leiht. Beide laufen auf `amd64`- und `aarch64`-Hosts.

## Installation

1. Öffne in Home Assistant **Einstellungen → Add-ons → Add-on-Store**.
2. Wähle im Menü des Stores (oben rechts) **Repositories** und füge die Repository-URL des camera.ui-Add-ons hinzu.
3. Such **camera.ui** im Store und klick auf **Installieren**.

<Shot src="/img/home-assistant/add-on-store.png" alt="Das camera.ui-Add-on im Home-Assistant-Add-on-Store" />

## Das camera.ui-Add-on

Das **camera.ui**-Add-on startet den kompletten Server: die UI, die Streaming-Engine, den NVR und alle Plugins, die du installierst. Es läuft im Host-Netzwerk, das es für WebRTC-Livebild, HomeKit-Pairing und Kamera-Erkennung braucht.

Nach dem Start legt das Add-on einen Eintrag **camera.ui** in der Home-Assistant-Seitenleiste an. Dieses Panel und der Button **Web-UI öffnen** des Add-ons öffnen die Oberfläche beide über den Ingress-Proxy von Home Assistant, also ohne zweiten Login und ohne Zertifikatswarnung.[^direct]

Beim **ersten Start** lädt das Add-on den camera.ui-Server und das Standard-Plugin herunter, was eine Internetverbindung braucht und ein paar Minuten dauert. Spätere Starts sind schnell.[^firstboot] Den ersten Boot kannst du im Tab **Log** des Add-ons mitverfolgen.

[^direct]: Das Add-on hört auch direkt unter `https://<host>:3443` im Host-Netzwerk. Dieser Weg zeigt einmalig eine Warnung wegen des selbstsignierten Zertifikats, das Seitenleisten-Panel und der Button "Web-UI öffnen" nicht.

[^firstboot]: Wenn der erste Boot den Server nicht laden kann, prüf, ob der Host das Internet erreicht und DNS auflöst.

## Optionen

Das camera.ui-Add-on hat drei Optionen.

- **default_plugins.** Komma-getrennte Plugins, die beim ersten Boot installiert werden. Standard ist `@camera.ui/camera-ui-nvr`, das NVR-Plugin.
- **recordings_path.** Wohin das NVR-Plugin Aufnahmen schreibt. Standard ist `/media/camera.ui`. Pfade unter `/media` tauchen im Medien-Browser von Home Assistant auf.
- **internal_avahi.** Startet den eigenen mDNS-Stack des Add-ons für HomeKit-Pairing und Kamera-Erkennung. Standardmäßig an. Schalt es aus, um stattdessen das mDNS des Hosts zu nutzen.

## Hardwarebeschleunigung

Das Add-on reicht GPU-, KI-Beschleuniger- und Codec-Geräte in den Container durch. Was nutzbar ist, hängt von Architektur und Hardware ab.

- **Intel / AMD (VA-API).** VA-API-Treiber sind nur bei `amd64` dabei und decken Intel Quick Sync und AMD Mesa VA-API ab. `aarch64`-Hosts bekommen kein VA-API.
- **Coral Edge TPU.** Die Coral-Runtime ist für beide Architekturen enthalten. USB-Coral läuft über den USB-Zugriff des Add-ons, PCIe-Coral über die durchgereichten `/dev/apex_*`-Geräte.
- **Hailo.** Das Hailo-Gerät (`/dev/hailo0`) wird durchgereicht, die Hailo-Runtime ist aber nicht Teil des Images. Sie kommt mit dem Hailo-Plugin.[^hailo]
- **NVIDIA.** Im Home-Assistant-Add-on nicht verfügbar. Für ein NVIDIA-Setup nimm [Docker](/de/install/docker) auf einem normalen Linux-Host.

Die Seite [Hardwarebeschleunigung](/de/install/hardware-acceleration) erklärt, wie die Streaming-Engine ein Gerät wählt und wie du prüfst, dass es funktioniert.


[^hailo]: Installier das Hailo-Plugin, um die Runtime zu ergänzen. Das Add-on-Image selbst reicht nur das Gerät durch.

## Aufnahmen und der Medien-Browser

Das Verzeichnis `/media` ist mit Schreibrechten ins Add-on eingebunden. Mit dem Standard-`recordings_path` `/media/camera.ui` erscheinen die Aufnahmen des NVR im **Medien**-Browser von Home Assistant neben deinen anderen Medien.

## Backups und Updates

Home Assistant sichert das Verzeichnis `/data` des Add-ons, in dem Konfiguration, Datenbank und TLS-Zertifikate liegen. Drei Unterbäume sind vom Backup **ausgeschlossen**: der heruntergeladene Server, die Python-Umgebung und die installierten Plugins. Die werden beim Wiederherstellen neu geladen, also braucht ein Restore eine Internetverbindung, genau wie ein erster Start.

Der Server aktualisiert sich aus der App heraus, alltägliche Updates brauchen also kein neues Add-on-Image. Aktualisier das Add-on selbst, wenn eine neue Version veröffentlicht wird, um das Basis-Image (OS, Treiber und Launcher) zu erneuern.

Lass den **Watchdog** des Supervisors für das Add-on an, damit Home Assistant es neu startet, falls es unerwartet stoppt.[^watchdog]

[^watchdog]: Watchdog ist eine Home-Assistant-Einstellung auf der Info-Seite des Add-ons, keine Option von camera.ui.

## Worker-Add-on

Das **camera.ui Worker**-Add-on macht diese Home-Assistant-Maschine zu einem [Worker](/de/admin/workers) für einen camera.ui-Server (den Master), der woanders läuft. Es leiht dem Master CPU, GPU und Coral dieser Maschine für Decoding, Erkennung und Plugins. Es hat keine eigene UI und kein Seitenleisten-Panel, es wählt sich zum Master und wartet auf Arbeit. Es reicht dieselbe Hardware durch wie das volle Add-on.

Richte es zuerst am Master ein, dann hier:

1. Aktivier am **Master** die Worker und setz die Master-Adresse, dann erzeug einen einmaligen Pairing-Code. Das Erzeugen eines Codes und das Pairing schlagen fehl, solange die Worker dort nicht aktiviert sind. Siehe [Workers](/de/admin/workers).
2. Installier das **camera.ui Worker**-Add-on auf dieser Maschine.
3. Setz **master_address** auf die IP oder den Hostnamen des Masters und **pairing_code** auf den eben erzeugten Code.
4. Start das Add-on. Es tauscht den Code beim ersten Verbinden gegen eigene Zugangsdaten und verbindet sich danach von selbst wieder, der Code wird also nur einmal eingegeben.

<Shot src="/img/home-assistant/worker-options.png" alt="Die Optionen des camera.ui Worker-Add-ons" />

Das Worker-Add-on hat vier Optionen.

- **master_address.** IP oder Hostname des camera.ui-Masters. Erforderlich.
- **pairing_code.** Der einmalige Code, der am Master erzeugt wird. Für die erste Verbindung erforderlich. Ein Code ist 15 Minuten gültig und lässt sich einmal verwenden.
- **worker_name.** Name, unter dem dieser Worker am Master angezeigt wird. Optional. Standard ist `worker`.
- **master_api_port.** Der HTTPS-API-Port des Masters. Optional. Nur nötig, wenn die API des Masters auf einem anderen als dem Standard-Port läuft, der Standard ist `3443`.

## Nächste Schritte

- **[Hardwarebeschleunigung](/de/install/hardware-acceleration)** — wie die Streaming-Engine GPU und Beschleuniger nutzt und wie du es prüfst.
- **[Workers](/de/admin/workers)** — das ganze Bild aus Master, Workern und Kamera-Zuweisungen.
- **[Docker](/de/install/docker)** — den Server außerhalb von Home Assistant betreiben, inklusive NVIDIA-Setups.
