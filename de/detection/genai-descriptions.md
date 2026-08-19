---
title: KI-Beschreibungen
---

# KI-Beschreibungen

camera.ui kann ein generatives KI-Modell nutzen, um zu beschreiben, was vor der Kamera passiert. Es schreibt eine kurze Zusammenfassung jedes Moments in einem Ereignis: einen Titel, was passiert ist, eine benachrichtigungstaugliche Zeile und eine Bedrohungsstufe. Es benennt Personen, Kennzeichen und erkannte Bewegung.

Namen und Kennzeichen kommen aus dem, was [Gesichtserkennung](/de/detection/faces) und [Kennzeichenlesung](/de/detection/license-plates) tatsächlich bestätigt haben, nicht aus dem, was das Modell im Bild zu lesen glaubt. Eine Beschreibung hängt einem Auto also kein Kennzeichen an, das nie gelesen wurde.[^genai-reads]

<Shot src="/img/detection/genai-description.png" alt="Eine KI-generierte Ereignisbeschreibung" />

## Einen Anbieter wählen

Öffne unter **Einstellungen → [Aufnahmen](/de/recording/)** den Tab **GenAI** und wähle einen Anbieter:

- **Ollama.** Führt ein Modell lokal auf deiner eigenen Hardware aus. Setze die **API Base URL** (zum Beispiel `http://localhost:11434`).
- **OpenAI** oder **Gemini.** Nutzt ein Cloud-Modell. Setze deinen **API Key**.

Dann legst du das **Modell** fest (etwa `llava`, `gpt-4o` oder `gemini-2.5-flash`), eine optionale **Description Language** und wie viele Bilder pro Ereignis gesendet werden. **Request Timeout** legt fest, wie lange camera.ui auf den Anbieter wartet, standardmäßig 60 Sekunden; lokale Ollama-Modelle brauchen oft mehr. **Test Connection** prüft, ob es funktioniert. Aktiviere es pro Kamera mit dem **KI-Beschreibungen**-Schalter der Kamera.

## Moments und Episoden

Der Anbieter, den du unter **GenAI** wählst, speist zwei Funktionen, jede mit eigenem Tab:

- **Moments.** Aktiviere hier **Enabled**, um KI-Beschreibungen dessen zu bekommen, was in einem Ereignis passiert. **Custom Instructions** nimmt Freitext-Vorgaben, die dem eingebauten Prompt hinzugefügt werden, etwa worauf zu achten ist oder wie formuliert werden soll. Die Beschreibungen eines Ereignisses gehen als eine einzige Zusammenfassungs-Benachrichtigung raus, kurz nachdem die Aktivität endet.
- **Episoden.** Bündelt zusammenhängende Ereignisse über mehrere Kameras zu einer Story, mit eigenen **Custom Instructions**. Siehe [Episoden](/de/detection/episodes).

## Datenschutz

Mit Ollama bleibt alles auf deiner eigenen Hardware. Mit OpenAI oder Gemini werden Ereignis-Snapshots an diesen Anbieter gesendet, um die Beschreibung zu erzeugen.[^license]

[^license]: KI-Beschreibungen bauen auf Aufnahmen auf, die ein aktives camera.ui-Abo erfordern.

[^genai-reads]: Braucht camera-ui-nvr 1.3.16 oder neuer.
