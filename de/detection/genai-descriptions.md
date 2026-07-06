---
title: KI-Beschreibungen
---

# KI-Beschreibungen

camera.ui kann ein generatives KI-Modell nutzen, um eine kurze, gut lesbare Zusammenfassung jedes Ereignisses zu schreiben: einen Titel, eine Beschreibung des Geschehens, eine benachrichtigungstaugliche Zusammenfassung und eine Bedrohungsstufe. Es benennt Personen, Kennzeichen und was sich bewegt hat.

<Shot src="/img/detection/genai-description.png" alt="Eine KI-generierte Ereignisbeschreibung" />

## Einen Anbieter wählen

Aktiviere in den [NVR-Einstellungen](/de/recording/) die **KI-Beschreibungen** und wähle einen Anbieter:

- **Ollama.** Führt ein Modell lokal auf deiner eigenen Hardware aus. Setze die **API Base URL** (zum Beispiel `http://localhost:11434`).
- **OpenAI** oder **Gemini.** Nutzt ein Cloud-Modell. Setze deinen **API Key**.

Dann legst du das **Modell** fest (etwa `llava`, `gpt-4o` oder `gemini-2.5-flash`), eine optionale **Description Language** und wie viele Bilder pro Ereignis gesendet werden. **Verbindung testen** prüft, ob es funktioniert. Aktiviere es pro Kamera mit dem **KI-Beschreibungen**-Schalter der Kamera.

## Datenschutz

Mit Ollama bleibt alles auf deiner eigenen Hardware. Mit OpenAI oder Gemini werden Ereignis-Snapshots an diesen Anbieter gesendet, um die Beschreibung zu erzeugen.[^license]

[^license]: KI-Beschreibungen bauen auf Aufnahmen auf, die ein aktives camera.ui-Abo erfordern.
