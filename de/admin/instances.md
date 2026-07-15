---
title: Instanzen
---

# Instanzen

<Shot src="/img/admin/instances.png" alt="Die Instanzen-Liste" />

Eine **Instanz** ist ein weiterer hier gespeicherter camera.ui-Server, sodass du zu ihm wechseln kannst, ohne dich neu anzumelden. Verwalte sie unter **Instanzen** (im Menü). Instanzen sind eigenständige, vollwertige Server; soll eine zweite Maschine stattdessen die Last *dieses* Servers mittragen, siehe [Worker](/de/admin/workers).

- **Eine Instanz hinzufügen** mit Namen, ihrer URL und einem Benutzernamen und Passwort dafür.
- **Konten mit Zwei-Faktor-Authentifizierung.** Ist das Konto auf diesem Server mit Zwei-Faktor-Authentifizierung geschützt, fragt camera.ui beim Hinzufügen oder beim Wechsel nach dem 6-stelligen Code aus deiner Authenticator-App.[^backupcodes] Bis du ihn eingibst, zeigt die Karte ein **2FA**-Tag und **Zwei-Faktor-Bestätigung ausstehend**. Über **Code eingeben** im Menü der Karte schließt du es ab.
- Jede Instanz-Karte zeigt ihren Status: Version, Uptime, Kameras, ob sie online ist und aufnimmt, sowie Ressourcennutzung.

[^backupcodes]: Die Abfrage nimmt nur den 6-stelligen Code aus der App an, keinen Backup-Code.

Sobald du mehr als eine hast, erscheint ein **Instanz-Umschalter** in der oberen Leiste. Wähle einen Server, um zu ihm zu springen, oder kehre zu „Dieser Server" zurück.

::: warning
Zu einer Instanz über einfaches HTTP zu wechseln überträgt deine Sitzung in der Adresse, daher warnt camera.ui dich zuerst. Nutze HTTPS, wo du kannst.
:::
