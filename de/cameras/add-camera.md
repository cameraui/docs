# Kamera hinzufügen

Es gibt zwei Wege, eine Kamera hinzuzufügen: camera.ui sie **entdecken** lassen, oder sie **manuell** mit ihrer Stream-URL hinzufügen. Beides startet auf der **Kameras**-Seite (öffne sie über das Menü, oder wähle **Jetzt starten** auf der Startseite, wenn du noch keine Kamera hast).

## Bevor du startest

- Schalte die Kamera ein und verbinde sie mit demselben Netzwerk wie deinen Server.
- Aktiviere für die Netzwerk-Suche **ONVIF** in den Einstellungen der Kamera.
- Halte **Benutzername und Passwort** der Kamera bereit. Für das manuelle Hinzufügen außerdem ihre **RTSP-URL** (aus dem Handbuch oder der App der Kamera).

## Eine Kamera entdecken

Die Kameras-Seite listet Geräte, die **entdeckt** wurden und bereit zum Hinzufügen sind. Eine Kamera erscheint hier, wenn camera.uis eingebaute Suche sie in deinem Netzwerk findet (ONVIF und weitere Protokolle), oder wenn ein [Plugin](/de/plugins/), das Kameras verwaltet, eine meldet. In beiden Fällen fügst du sie gleich hinzu. Bereits hinzugefügte Kameras erscheinen unter **Verbundene Kameras**.

1. Öffne **Kameras**. Die Suche läuft automatisch. Falls eine Kamera in deinem Netzwerk nicht erscheint, wähle **Neu scannen** und prüfe, ob sie eingeschaltet und im selben Netzwerk ist.
2. Wähle eine Kamera unter **Entdeckt**. Ein **Verbinden**-Dialog öffnet sich. Wenn die Adresse bekannt ist, zeigt die Spalte **Adresse** sie an, und der Dialog wiederholt sie über den Zugangsdaten.
3. Manche Kameras brauchen Zugangsdaten. Gib bei Bedarf **Benutzername** und **Passwort** ein (einige nutzen stattdessen eine PIN) und wähle **Verbinden**. Andere brauchen keine Angaben und verbinden sich sofort.
4. Der Status wechselt zu **Verbinde…**. camera.ui liest die Kamera aus und öffnet **Kamera bestätigen** mit **Name**, **Raum** und den gefundenen **Quellen**. Passe sie an oder lass sie so.
5. Wähle **Kamera hinzufügen**. Die Kamera wandert zu **Verbundene Kameras** und erscheint in deiner Live-Ansicht.

Geräte, die du nicht sehen willst, kannst du mit dem Augen-Symbol ausblenden und später über **Ausgeblendete Geräte anzeigen** wieder einblenden.

<Shot src="/img/cameras/discovered-devices.png" alt="Kameras-Seite mit entdeckten Geräten" />
<Shot src="/img/cameras/connect-dialog.png" alt="Verbinden-Dialog mit Benutzername und Passwort" />

## Eine Kamera manuell hinzufügen

Nutze das für Kameras, die nicht entdeckt werden, oder um Streams selbst einzurichten. Wähle **Kamera hinzufügen** auf der Kameras-Seite.

1. Gib der Kamera einen **Namen** und weise sie optional einem **Raum** zu.
2. Richte unter **Quellen** mindestens einen Stream ein:
   - Gib einen **Quellenname** ein.
   - Wähle eine **Quellenrolle**: **Hohe Auflösung**, **Mittlere Auflösung** oder **Niedrige Auflösung** fürs Streaming, oder **Snapshot** für Standbilder. Mindestens eine Streaming-Rolle ist erforderlich.
   - Füge die vollständige Stream-**URL** samt Protokoll ein, zum Beispiel `rtsp://user:pass@192.168.1.50:554/stream`. RTSP funktioniert mit den meisten IP-Kameras. camera.ui erkennt das Protokoll aus der URL und zeigt unter dem Feld **Erkanntes Protokoll** an. Über die **(i)**-Schaltfläche neben dem Feld bekommst du protokollspezifische Hilfe, mit **Kameraquelle testen** ein Vorschaubild.
3. Wähle **Quelle hinzufügen**, um derselben Quelle eine weitere URL zu geben. Für eine zweite Quelle mit anderer Rolle, zum Beispiel ein niedrig aufgelöster Stream fürs schnelle Scrubben, nutze die Plus-Schaltfläche unter der Quellen-Karte.
4. Speichere. Die Kamera erscheint in deiner Kameras-Liste und in der Live-Ansicht.

::: tip
Das **NVR**-Plugin wird, sofern installiert und aktiviert, für jede neue Kamera automatisch aktiviert, egal ob du sie manuell hinzugefügt oder aus **Entdeckt** übernommen hast. Die Aufnahme startet dann von selbst, solange dein Abo noch einen freien Kamera-Platz hat. Modus und Aufnahme kannst du pro Kamera ändern oder abschalten, siehe [Aufnahme](/de/recording/).
:::

<Shot src="/img/cameras/add-camera-dialog.png" alt="Kamera-hinzufügen-Dialog mit Quellen und Rollen" />

### Quellen und Rollen

Eine Kamera kann mehrere **Quellen** haben, jede mit einer **Rolle**:

- **Hohe / Mittlere / Niedrige Auflösung** sind Streaming-Stufen. camera.ui nutzt die passende für die jeweilige Situation, etwa einen niedrig aufgelösten Stream im Multi-Kamera-Raster und einen hoch aufgelösten im Vollbild.
- **Snapshot** liefert Standbilder.

Eine Quelle genügt für den Anfang. Einen niedriger aufgelösten Stream später hinzuzufügen verbessert die Leistung bei Rastern und Wiedergabe.

### Quellen-Optionen

Jede Streaming-Quelle hat ein paar Optionen:

- **Hot Modus.** Hält die Verbindung zur Kamera dauerhaft aktiv, sodass es beim Öffnen eines Streams keine Reconnect-Verzögerung gibt.
- **Vorladen.** Lädt den Stream vor, sodass die Kamera-Ansicht mit minimaler Verzögerung öffnet.
- **Audio stummschalten.** Entfernt die Audiospur dieser Quelle. Standardmäßig aus.

Mit aktivem Hot Modus und Vorladen öffnet ein Stream nahezu sofort, egal ob die Kamera H.264 oder H.265 nutzt.

## Verbindungs-Protokolle

camera.ui unterstützt viele Verbindungsarten. **RTSP** funktioniert mit nahezu jeder IP-Kamera und ist die übliche Wahl, während **ONVIF** die Suche antreibt. Die Protokoll-Liste deckt außerdem bestimmte Marken und Systeme ab, von denen sich einige direkt verbinden und andere über ein [Plugin](/de/plugins/). Die **(i)**-Schaltfläche neben dem URL-Feld zeigt eine Anleitung zum erkannten Protokoll, sofern es eine gibt. Die vollständige Liste findest du unter [Verbindungs-Protokolle](/de/cameras/protocols).[^cloud]

[^cloud]: Kameras, die von einer Hersteller-Cloud abhängen (etwa Ring oder Nest), lassen sich verbinden, entweder direkt oder über ein Plugin, sind aber **nicht empfehlenswert** und **nicht durch den Support abgedeckt**. Nutze lokale RTSP-/ONVIF-Kameras für ein zuverlässiges Erlebnis.
