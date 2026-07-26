---
title: Reverse-Proxy
---

# Reverse-Proxy

Wenn du camera.ui hinter Apache, nginx, Traefik oder einen anderen Reverse-Proxy stellst, muss der Proxy mehr als reines HTTP durchreichen. Live-Video, Events und die Kameraliste laufen alle über WebSocket-Verbindungen. Ein Proxy, der nur normale Anfragen weiterleitet, liefert dir eine Oberfläche, die zwar lädt, dann aber leer bleibt.

## Was der Server erwartet

**Der Hauptport liefert HTTPS aus.** camera.ui lauscht standardmäßig auf Port `3443`, mit einem selbst erzeugten Zertifikat. Ein Proxy, der auf diesen Port zeigt, muss sich mit `https://` verbinden und die Zertifikatsprüfung abschalten, denn ein selbst erzeugtes Zertifikat hat keinen öffentlichen Aussteller, gegen den geprüft werden könnte. Es gibt auch einen [reinen HTTP-Port](#stattdessen-reines-http), den du einschalten kannst, wenn du dir das sparen möchtest.

**WebSocket-Upgrades müssen den Server erreichen.** Sie laufen über denselben Host und Port wie der Rest der App. Am einfachsten leitest du alles unter `/` weiter und lässt Upgrades durch.

**Verbindungen bleiben lange offen.** Ein Live-Stream hält eine Verbindung so lange, wie du zusiehst. Proxy-Timeouts im Sekundenbereich zerschneiden das Bild in regelmäßigen Abständen.

## Apache

Aktiviere `proxy`, `proxy_http`, `proxy_wstunnel`, `ssl` und `headers` und nutze dann diesen Virtual Host. Ersetze Hostname und Backend-Adresse durch deine eigenen.

```apache
<VirtualHost *:443>
  ServerName nvr.example.com

  ProxyPreserveHost On
  ProxyRequests Off

  SSLProxyEngine On
  SSLProxyVerify none
  SSLProxyCheckPeerCN off
  SSLProxyCheckPeerName off
  SSLProxyCheckPeerExpire off

  ProxyTimeout 300

  ProxyPass        "/" "https://10.0.0.27:3443/" upgrade=websocket timeout=300
  ProxyPassReverse "/" "https://10.0.0.27:3443/"

  RequestHeader set X-Forwarded-Proto "https"
  RequestHeader set X-Forwarded-Port "443"
</VirtualHost>
```

Die Option `upgrade=websocket` braucht Apache 2.4.47 oder neuer. Prüfen kannst du das mit `apachectl -v`. Auf älteren Versionen lässt du die Option weg und leitest die Upgrades stattdessen über `mod_rewrite`:

```apache
  ProxyPass        "/" "https://10.0.0.27:3443/"
  ProxyPassReverse "/" "https://10.0.0.27:3443/"

  RewriteEngine On
  RewriteCond %{HTTP:Upgrade} =websocket [NC]
  RewriteCond %{HTTP:Connection} upgrade [NC]
  RewriteRule /(.*) wss://10.0.0.27:3443/$1 [P,L]
```

Achte auf das `wss://` im Rewrite-Ziel. `ws://` ist hier der übliche Fehler: es schickt einen unverschlüsselten Handshake an einen TLS-Port, Apache protokolliert `error reading status line from remote server`, und jeder WebSocket scheitert mit einem 502, während normale Seiten weiter problemlos laden.

## nginx

```nginx
map $http_upgrade $connection_upgrade {
  default upgrade;
  ''      close;
}

server {
  listen 443 ssl;
  server_name nvr.example.com;

  client_max_body_size 100m;

  location / {
    proxy_pass https://10.0.0.27:3443;
    proxy_ssl_verify off;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;

    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    proxy_buffering off;
    proxy_read_timeout 300s;
  }
}
```

`client_max_body_size` ist wichtig, wenn du ein Backup über den Proxy einspielst, denn nginx lehnt Uploads über 1 MB standardmäßig ab.

## Stattdessen reines HTTP

Wenn dir die TLS-Einstellungen oben zu umständlich sind: camera.ui kann einen zweiten Listener öffnen, der reines HTTP spricht und alles inklusive WebSockets an den Hauptport weiterreicht. Trage dazu einen Port in der `camera.ui.yaml` in deinem Speicherverzeichnis ein:

```yaml
insecurePort: 8081
```

In Docker kannst du stattdessen `CAMERA_UI_INSECURE_PORT=8081` setzen. Starte den Server neu, richte den Proxy dann auf `http://10.0.0.27:8081` und lass die `SSLProxy*`-Zeilen beziehungsweise `proxy_ssl_verify` weg. Alles andere bleibt gleich.

Dieser Listener bindet sich an dieselbe Adresse wie der Hauptport, ist also in deinem gesamten Netzwerk unverschlüsselt erreichbar. Nutze ihn nur dort, wo dieser Verkehr vertrauenswürdig bleibt, etwa bei einem Proxy auf derselben Maschine oder in einem Netzsegment, das du kontrollierst.

## Wenn die Oberfläche lädt, aber leer bleibt

Kameras zeigen einen Platzhalter, die Event-Zeile füllt sich nie, nichts aktualisiert sich. Das ist ein WebSocket-Problem, kein Anmeldeproblem. Öffne die Entwicklertools deines Browsers, lade neu und filtere den Netzwerk-Tab nach WS. Ein fehlgeschlagener Eintrag mit Status 502 oder 400 bestätigt es, und das Fehlerprotokoll deines Proxys nennt dir den Grund.

## camera.ui die Adresse mitteilen

Sobald der Proxy läuft, trägst du die öffentliche Adresse unter **Einstellungen → Remote** ein, wie unter [Eigene Domain](/de/remote/custom-domain) beschrieben.

Der Server prüft diese Adresse, indem er sie selbst von innen aufruft. Wenn dein Router kein Hairpin-NAT beherrscht, verlässt diese Anfrage das Netzwerk und kommt nie zurück. Die Prüfung schlägt dann fehl, obwohl die Adresse von außen einwandfrei funktioniert. Ein interner DNS-Eintrag, der auf den Proxy zeigt, löst das.

## Nächste Schritte

**[Eigene Domain](/de/remote/custom-domain)** — die öffentliche Adresse in camera.ui eintragen.
**[camera.ui Cloud](/de/remote/cloud)** — Fernzugriff, ohne am Netzwerk etwas zu ändern.
