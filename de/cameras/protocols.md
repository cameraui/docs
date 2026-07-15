# Verbindungs-Protokolle

Wenn du eine [Kamera manuell hinzufügst](/de/cameras/add-camera#eine-kamera-manuell-hinzufugen), beginnt jede Stream-URL mit einem **Protokoll**, das camera.ui sagt, wie es sich verbindet. RTSP ist die Vorgabe und funktioniert mit nahezu jeder IP-Kamera. Im Hinzufügen-Dialog fügst du die komplette Stream-URL ein. camera.ui liest das Protokoll aus der URL und zeigt es unter dem Feld als erkanntes Protokoll an. Die **(i)**-Schaltfläche neben dem URL-Feld öffnet die Hilfe zu diesem Protokoll, mit URL-Formaten und Beispielen.

Eine Stream-URL muss mit einem Protokoll beginnen, das camera.ui unterstützt. Sonst lässt sich die Quelle nicht speichern und das Feld meldet, dass das Protokoll nicht unterstützt wird. Die **(i)**-Hilfe steht erst zur Verfügung, wenn camera.ui das eingegebene Protokoll erkennt, damit lässt sich eine URL schnell prüfen.

## RTSP (empfohlen)

**RTSP** ist die universelle Wahl und das, was die meisten Kameras bieten. Eine URL sieht so aus:

```
rtsp://benutzer:passwort@192.168.1.123:554/pfad
```

Der Pfad nach der Adresse ist kameraspezifisch, schau also im Handbuch oder der App deiner Kamera nach der genauen RTSP-URL. Viele Kameras bieten einen Haupt-Stream (hohe Auflösung) und einen Sub-Stream (niedrige Auflösung); du kannst jeden als eigene [Quelle](/de/cameras/add-camera#quellen-und-rollen) hinzufügen.

## Weitere gängige Protokolle

| Protokoll | Wofür |
|---|---|
| **ONVIF** | Ein Standard, den die meisten Kameras unterstützen. Verbindet ohne Kenntnis des RTSP-Pfads und treibt die Suche an. |
| **HTTP / HTTPS** | Snapshot (JPEG), MJPEG, HTTP-FLV oder MPEG-TS-Streams. |
| **RTMP** | RTMP-Streams. |
| **FFmpeg** | Jede Quelle einbinden, die FFmpeg lesen kann. |

## NVR- und DVR-Systeme

| Protokoll | Wofür |
|---|---|
| **ISAPI** | Hikvision-Gegensprechen (zusätzlich zu einer RTSP-Quelle hinzufügen). |
| **DVRIP** | Dahua und kompatible Rekorder (auch NetSurveillance / Sofia / XMeye). |

## Marken- und Smart-Home-Integrationen

camera.ui erkennt außerdem marken- und app-spezifische URLs wie **Tapo**, **Kasa**, **Doorbird**, **GoPro**, **Home Assistant**, **HomeKit**, **Ring**, **Nest**, **Wyze** und **Tuya**. Viele davon hängen von einer Hersteller-Cloud ab.[^cloud] Füge die URL ein und nutze die **(i)**-Hilfe für die genaue Einrichtung jedes Protokolls.

## Tipps

- Du kannst einer Quelle **mehrere URLs** geben. camera.ui kombiniert sie, was hilft, wenn Streams unterschiedliche Codecs tragen (zum Beispiel Video im einen und Backchannel-Audio im anderen).
- Wenn du die URLs deiner Kamera nicht kennst, versuche zuerst **ONVIF** oder die [automatische Suche](/de/cameras/add-camera#eine-kamera-entdecken).

[^cloud]: Kameras, die von einer Hersteller-Cloud abhängen (etwa Ring oder Nest), lassen sich verbinden, entweder direkt oder über ein Plugin, sind aber **nicht empfehlenswert** und **nicht durch den Support abgedeckt**. Nutze lokale RTSP-/ONVIF-Kameras für ein zuverlässiges Erlebnis.
