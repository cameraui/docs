---
title: Anmeldung über Proxy
---

# Anmeldung über Proxy

Hinter Authelia, Authentik, oauth2-proxy oder einem anderen Login-Proxy kann camera.ui den Benutzer übernehmen, den der Proxy angemeldet hat, und das eigene Anmeldeformular überspringen. Der Proxy nennt den Benutzer in einem Header, und camera.ui meldet das Konto mit genau diesem Benutzernamen an, Groß- und Kleinschreibung eingeschlossen. Konten legt camera.ui dabei nicht an: Jeder, den der Proxy durchlässt, braucht ein Konto unter **Einstellungen → [Benutzer](/de/admin/users)**.

## Einrichten

Füg in `camera.ui.yaml` in deinem Speicherverzeichnis einen Block `proxyAuth` hinzu und starte den Server neu:

```yaml
proxyAuth:
  port: 8082
  trust:
    - 10.0.0.5
```

camera.ui öffnet dann einen eigenen Port mit reinem HTTP für den Proxy, gebunden an dieselbe Adresse wie der Hauptport. Richte den Proxy auf `http://10.0.0.27:8082` statt auf den Hauptport, mit WebSockets und langen Timeouts wie unter [Reverse-Proxy](/de/remote/reverse-proxy). Nur dieser Port liest den Header. Am Hauptport, am HTTP-Port oder über camera.ui Cloud bewirkt er nichts.

| Feld | Umgebungsvariable | Bedeutung |
|---|---|---|
| `port` | `CAMERA_UI_PROXY_AUTH_PORT` | Port, mit dem sich der Proxy verbindet. |
| `header` | `CAMERA_UI_PROXY_AUTH_HEADER` | Header mit dem Benutzernamen, standardmäßig `Remote-User`. |
| `trust` | `CAMERA_UI_PROXY_AUTH_TRUST` | Adressen des Proxys, als IP-Adressen oder Bereiche wie `10.0.0.0/24`. In der Variable durch Kommas getrennt. |
| `secret` | `CAMERA_UI_PROXY_AUTH_SECRET` | Mindestens 16 Zeichen, die der Proxy bei jeder Anfrage als `X-Proxy-Secret` mitschickt. |
| `logoutUrl` | `CAMERA_UI_PROXY_AUTH_LOGOUT_URL` | Abmeldeseite des Proxys, siehe [Abmelden](#abmelden). |

Eine Variable hat Vorrang vor der Datei. Der Port braucht `trust`, `secret` oder beides, und mit beidem muss eine Anfrage beide Prüfungen bestehen. Eine Einstellung, mit der camera.ui nichts anfangen kann, lässt den Port geschlossen, und das Log nennt den Grund.

## Welcher Header

| Proxy | Header | Abmeldeseite |
|---|---|---|
| Authelia | `Remote-User` | `https://auth.example.com/logout` |
| Authentik | `X-authentik-username` | `https://nvr.example.com/outpost.goauthentik.io/sign_out` |
| oauth2-proxy | `X-Forwarded-Preferred-Username` | `https://nvr.example.com/oauth2/sign_out` |

Mit Forward-Auth muss der Webserver den Header aus der Antwort des Auth-Dienstes in die Anfrage übernehmen: `copy_headers` in Caddy, `authResponseHeaders` in Traefik, `auth_request_set` plus `proxy_set_header` in nginx.

## Wer sich anmelden darf

Wer sich von einer vertrauten Adresse oder mit dem Secret verbindet, kann sich als jeder Benutzer anmelden, auch als Master. Passwort und Zwei-Faktor-Authentifizierung von camera.ui gelten an diesem Port nicht, hier zählt die Anmeldung beim Proxy. Vertrau also nur dem Proxy:

- **Docker.** camera.ui sieht die Adresse des Proxys im gemeinsamen Docker-Netzwerk. Gib dem Proxy dort eine feste Adresse (`ipv4_address` in Compose) oder nutz das Secret statt `trust`. Das Log nennt jede Adresse, die es abgewiesen hat.
- **Dieselbe Maschine.** Ein Proxy neben einer Bare-Metal-Installation verbindet sich über `127.0.0.1`. Vertraust du dieser Adresse, kann sich jedes Programm auf der Maschine anmelden, Plugins eingeschlossen. Setz dann zusätzlich ein Secret.
- **Pfade ohne Login.** Der Proxy muss den Header bei jeder Anfrage ersetzen, die er weiterreicht. Lässt er einen Pfad ohne Login durch, darf er dort keinen gleichnamigen Header vom Browser weitergeben. Stell camera.ui komplett hinter den Login oder lass den Proxy den Header entfernen.

## In der App

Der Browser öffnet camera.ui angemeldet. Alle Browser eines Benutzers teilen sich eine Sitzung, die unter **Derzeit angemeldete Benutzer** als **Reverse proxy** erscheint. Eine Anfrage ohne den Header bekommt das normale Anmeldeformular.

Nennt der Proxy einen Benutzer, den camera.ui nicht kennt, zeigt der Browser statt der App einen Fehler, und das Log nennt den Benutzernamen. Weil camera.ui das Konto über den Benutzernamen findet, lässt er sich bei einer Anmeldung über den Proxy in den Konto-Einstellungen nicht ändern. Benennt ein Admin das Konto um, ändere den Namen auch beim Proxy.

## Abmelden

Ohne `logoutUrl` hat das Menü kein **Abmelden**, weil der Proxy dich sofort wieder anmelden würde. Mit `logoutUrl` beendet **Abmelden** die Sitzung in camera.ui und öffnet diese Seite, die die Sitzung beim Proxy beendet.

## Nächste Schritte

**[Reverse-Proxy](/de/remote/reverse-proxy)** — WebSockets, Timeouts und Zertifikate für den Proxy.
**[Benutzer & Rollen](/de/admin/users)** — die Konten anlegen, die der Proxy anmeldet.
