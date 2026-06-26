---
title: Instanzen & Worker
---

# Instanzen & Worker

Zwei Admin-Funktionen helfen, wenn du mehr als eine Maschine betreibst: **Instanzen** zum Verwalten mehrerer Server und **Worker** zum Teilen der Last eines Servers.

## Instanzen

![Die Instanzen-Liste](/img/admin/instances.png)

Eine **Instanz** ist ein weiterer hier gespeicherter camera.ui-Server, sodass du zu ihm wechseln kannst, ohne dich neu anzumelden. Verwalte sie unter **Instances** (im Menü).

- **Eine Instanz hinzufügen** mit Namen, ihrer URL und einem Benutzernamen und Passwort dafür.
- Jede Instanz-Karte zeigt ihren Status: Version, Uptime, Kameras, ob sie online ist und aufnimmt, sowie Ressourcennutzung.

Sobald du mehr als eine hast, erscheint ein **Instanz-Umschalter** in der oberen Leiste. Wähle einen Server, um zu ihm zu springen, oder kehre zu „This server" zurück.

::: warning
Zu einer Instanz über einfaches HTTP zu wechseln überträgt deine Sitzung in der Adresse, daher warnt camera.ui dich zuerst. Nutze HTTPS, wo du kannst.
:::

## Worker

Ein **Worker** ist eine zweite Maschine, die einen Teil der Verarbeitung eines Servers übernimmt, etwa Dekodierung und Erkennung für ausgelastete Kameras. Verwalte sie unter **Workers** (im Menü).

Um einen zu verbinden, kopiere den **Auth-Token** des Servers in den Agenten der Worker-Maschine. Sobald er sich verbindet, erscheint er in der **Workers**-Liste mit seiner Live-CPU und -Speicher. Unter **Kamera-Zuweisungen** wählst du dann, welche Kamera jeder Worker übernimmt; als **Lokal** belassene Kameras bleiben auf dem Hauptserver.

Den Auth-Token neu zu erzeugen trennt bestehende Worker, bis sie neu konfiguriert sind.
