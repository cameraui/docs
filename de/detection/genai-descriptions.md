---
title: KI-Beschreibungen
---

# KI-Beschreibungen

Ein generatives KI-Modell schreibt eine kurze Zusammenfassung jedes Moments in einem Ereignis: einen Titel, was passiert ist, eine benachrichtigungstaugliche Zeile und eine Bedrohungsstufe. Es benennt Personen, Kennzeichen und erkannte Bewegung.

Namen und Kennzeichen kommen aus dem, was [Gesichtserkennung](/de/detection/faces) und [Kennzeichenlesung](/de/detection/license-plates) tatsächlich bestätigt haben, nicht aus dem, was das Modell im Bild zu lesen glaubt.

<Shot src="/img/detection/genai-description.png" alt="Eine KI-generierte Ereignisbeschreibung" />

## Einen Anbieter wählen

Das Modell kommt aus **Einstellungen → [Assistent](/de/admin/assistant-setup)**: Gib dort unter **Plugin-Zugriff** das NVR-Plugin frei und wähle eines deiner Modelle. Das Plugin schickt seine Anfragen an camera.ui, der Schlüssel bleibt also auf dem Server. Jeder Anbieter, den der Assistent kennt, funktioniert, solange das Modell Bilder liest; das zeigt der Bildtest in der Modell-Liste.

Beschreibungen entstehen in der **Antwortsprache** der Assistenten-Einstellungen, auf Englisch, wenn sie der Oberfläche folgt, und schauen sich bis zu vier Bilder pro Ereignis an. Aktiviere sie pro Kamera mit dem **KI-Beschreibungen**-Schalter der Kamera.

## Moments und Episoden

Das Modell speist zwei Funktionen, jede mit eigenem Tab in den Aufnahme-Einstellungen:

- **Moments.** **Enabled** schaltet KI-Beschreibungen von Ereignissen ein. **Custom Instructions** ergänzt den eingebauten Prompt um Freitext-Vorgaben. **Model Timeout** ist die Zeit, die eine Beschreibung dauern darf, bevor der Push ohne sie rausgeht: 60 Sekunden als Standard, für ein langsames lokales Modell höher setzen. Wie die Beschreibungen aufs Handy kommen, stellst du pro Kamera ein, siehe [Benachrichtigungen](/de/notifications/#pushes-mit-ki-beschreibung).
- **Episoden.** Bündelt zusammenhängende Ereignisse über mehrere Kameras zu einer Story, mit eigenen **Custom Instructions**. Siehe [Episoden](/de/detection/episodes).

## Datenschutz

Mit einem lokalen Modell (Ollama, ein lokaler OpenAI-kompatibler Server, ein Plugin-Modell) bleibt alles auf deiner eigenen Hardware. Mit einem Cloud-Anbieter werden Ereignis-Snapshots an diesen Anbieter gesendet, um die Beschreibung zu erzeugen.[^license]

Ein gezeichneter Grundriss ergänzt die Prompts um Text-Kontext: wie die Räume zusammenhängen, Gehzeiten zwischen den Kameras und was Sensoren in der Nähe gerade melden.

[^license]: KI-Beschreibungen bauen auf Aufnahmen auf, die ein aktives camera.ui-Abo erfordern.

