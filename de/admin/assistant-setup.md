---
title: Assistent einrichten
---

# Assistent einrichten

Alles, was der [Assistent](/de/assistant/) braucht, liegt unter **Einstellungen → Assistent**, nur für Admins: die Modelle, die er nutzen darf, welche Plugins sie ebenfalls nutzen dürfen, was einen Lauf begrenzt, und die Endpunkte, mit denen andere KI-Werkzeuge sprechen.

## Modell wählen

Der Assistent arbeitet mit Modellen, die du mitbringst. An camera.ui wird nichts gesendet. Füge sie mit **Modell hinzufügen** hinzu, beliebig viele, lokale und Cloud-Modelle nebeneinander.

- **Ollama.** Läuft auf eigener Hardware, nichts verlässt dein Netzwerk. [Ollama](https://ollama.com) installieren, ein Modell mit Tool-Calling laden und die **Server-URL** eintragen, falls Ollama nicht auf der camera.ui-Maschine läuft.
- **OpenAI-kompatibler Server.** Jeder Server mit OpenAI-Chat-Completions-API: LM Studio, vLLM, LiteLLM, llama.cpp. **Server-URL** eintragen und, falls nötig, einen **API-Schlüssel**.
- **OpenAI, Anthropic, Google Gemini, OpenRouter.** Cloud-Anbieter. Den **API-Schlüssel** deines Kontos einfügen oder den Schlüssel eines schon hinzugefügten Modells desselben Anbieters übernehmen. Der Schlüssel liegt verschlüsselt auf dem Server und erreicht weder den Browser noch ein Plugin. Der Anbieter rechnet pro Token ab.

<Shot src="/img/admin/assistant-models.png" alt="Die Modell-Liste mit Standard-Stern und den Badges für Werkzeuge und Bilder" />

Das **Modell** aus der Liste des Anbieters wählen (der Pfeil lädt sie) oder den Namen eintippen. Beim Speichern testet camera.ui das Modell mit zwei kurzen Anfragen: ob es ein Werkzeug aufruft und ob es ein Bild annimmt. Das Ergebnis steht als Badges in der Liste (**Werkzeuge**, **Keine Werkzeuge**, **Bilder**, **Keine Bilder**, **Test fehlgeschlagen**), erneutes Speichern wiederholt den Test.

Das Standardmodell antwortet überall, wo nichts anderes gewählt ist: in Gesprächen ohne Profil, bei geplanten Prompts, bei der Suche in den Aufnahmen und für das, was sich der Assistent merkt. Der Stern neben einem Modell macht es zum Standard; ist keiner gesetzt, antwortet das erste der Liste. Wird ein Modell gelöscht, wechseln Profile und Plugins, die es nutzen, auf das Standardmodell.

Ein Modell lässt sich Admins vorbehalten: **Für Nutzer verfügbar** in seinem Dialog ausschalten, die Liste zeigt es dann als **Nur Admins**. Was Nutzer ausführen, läuft dann auf dem Standardmodell oder auf dem ersten Modell, das ihnen offensteht. Gibt es keins, gilt der Assistent für sie als nicht eingerichtet.

**Bilder an das Modell senden** ist ein Schalter pro Modell. Eingeschaltet geht ein Schnappschuss, den der Assistent macht, oder ein Ereignisbild aus den Aufnahmen an das Modell, damit es beschreiben kann, was es sieht, bei einem Cloud-Anbieter verlässt das Bild damit deine Maschine. Im Chat werden die Bilder immer gezeigt, egal ob das Modell sie bekommt.

### Modelle ohne Werkzeuge oder Bilder

Für den Nutzer wird nichts abgeschaltet: Jedes Modell lässt sich wählen, der Assistent passt sich an und sagt, was fehlt.

- **Keine Werkzeuge.** Das Modell kann nur plaudern. Es kann in der Instanz nichts nachschlagen, Fragen zu Kameras, Aufnahmen oder Einstellungen bleiben unbeantwortet.
- **Keine Bilder.** Schnappschüsse und Ereignisbilder erscheinen weiter im Chat, das Modell bekommt stattdessen den Text der Werkzeugergebnisse.

Manche Modelle bestehen beide Tests und rufen Werkzeuge trotzdem unzuverlässig auf, etwa mit erfundenen Ids. Kommen Antworten leer oder falsch zurück, probiere ein größeres Modell.

## Plugin-Zugriff

Plugins können deine Modelle ebenfalls nutzen, das NVR-Plugin für [Ereignisbeschreibungen](/de/detection/genai-descriptions) und zum Gegenprüfen von Textalarmen. Unter **Plugin-Zugriff** wählst du pro Plugin ein Modell oder **Kein Zugriff**. Das Plugin schickt seine Anfrage an camera.ui, das sie auf diesem Modell ausführt. Der Schlüssel bleibt so auf dem Server, und ein Plugin auf einem Worker braucht keinen eigenen Internetzugang. Seine Tokens stehen unter **Verbrauch** mit dem Namen des Plugins. Die Liste ist eine Entscheidung, kein Schutz: Plugins laufen mit den Rechten von camera.ui.

## Nachdenken, Kosten und Grenzen

**Nachdenken** legt fest, wie lange das Modell überlegt, bevor es antwortet. *Modellstandard* schickt nichts mit und überlässt es dem Anbieter, *Aus* bittet um eine direkte Antwort, *Kurz* und *Gründlich* fordern kurzes oder langes Überlegen. Die Einstellung wird auf das abgebildet, was der jeweilige Anbieter anbietet, und ein Modell ohne Reasoning ignoriert sie. Teilt das Modell sein Überlegen mit, zeigt die Antwort einen ausklappbaren Block **Denkt nach**.

Unter jeder Antwort steht eine kleine Zeile mit den gesendeten und empfangenen Tokens, der Dauer, der Ausgabegeschwindigkeit und, bei Cloud-Anbietern mit bekanntem Listenpreis, geschätzten Kosten. **Verbrauch** summiert das pro Nutzer oder Plugin, Modell und Monat, Chats und geplante Prompts zusammen. Die Schätzung nutzt öffentliche Listenpreise und die Tokens, die der Anbieter gemeldet hat; es zählt die Rechnung deines Anbieters.

Die Karte **Verhalten** begrenzt einen Lauf:

- **Modellrunden pro Frage.** Wie oft das Modell Werkzeuge aufrufen und erneut überlegen darf, bevor es antworten muss. Standard 8.
- **Werkzeugaufrufe pro Frage.** Harter Stopp gegen ein Modell, das in einer Schleife hängt. Standard 25.
- **Kontextbudget.** Wie viel von einem langen Gespräch das Modell sieht. Für kleine lokale Modelle niedriger setzen.
- **Gespräche pro Nutzer** und **Bilder pro Gespräch.** Was der Verlauf auf der Platte belegt. Die ältesten fallen zuerst weg. Standard 50 und 24.
- **Zusätzliche Anweisungen.** Ergänzen die eingebauten Anweisungen, für Hausregeln und Kamera-Hinweise, etwa welche Kamera auf die Straße zeigt.
- **Fakten über Nutzer merken.** Lässt den Assistenten Fakten wie Namen über Gespräche hinweg behalten. Standardmäßig an, und jeder Nutzer sieht und löscht seine eigene Liste im Chat.

**Auf Standard zurücksetzen** stellt diese Werte wieder her, die zusätzlichen Anweisungen bleiben. Vor dem Speichern ändert sich nichts.

## Shell-Befehle

Standardmäßig aus. **Shell-Befehle** lässt Admins den Assistenten um Host-Diagnosen bitten, die die anderen Werkzeuge nicht beantworten: Plattenbelegung, ob eine Kamera im Netz antwortet, Prozesse, Container-Logs. Der Assistent führt einen Befehl nach dem anderen auf dem Server aus, auf dem camera.ui läuft, und jeder Befehl wird dir mit der genauen Befehlszeile gezeigt, bevor er läuft. Du erlaubst ihn, bearbeitest ihn oder lehnst ihn ab. Die Ausgabe ist gedeckelt, ein Befehl wird nach standardmäßig 30 Sekunden abgebrochen, und das Werkzeug taucht weder im MCP-Server noch in geplanten Prompts oder Automationen auf. Was du erlaubst, läuft mit den Rechten des camera.ui-Prozesses, lies den Befehl also, bevor du klickst. Ist der Schalter aus und eine Frage bräuchte ihn, trägt die Antwort den Schalter selbst, sodass ein Admin ihn direkt im Chat einschalten kann.

## MCP: die Instanz aus anderen KI-Werkzeugen nutzen

Die Werkzeuge des Assistenten gibt es auch über das Model Context Protocol, sodass Claude Code, Claude Desktop, Cursor und ähnliche Werkzeuge deine Instanz direkt fragen können, mit ihrem eigenen Modell. Schalte **MCP-Endpunkt aktivieren** ein, lege unter Konto ein API-Token an und übernimm den Einrichtungs-Schnipsel, den die Seite für deinen Client zeigt. Der Endpunkt ist `/api/assistant/mcp`, die Anmeldung läuft mit dem Token als Bearer.

<Shot src="/img/admin/assistant-mcp.png" alt="Die MCP-Karte mit Endpunkt und fertigem Einrichtungsbefehl für den gewählten Client" />

Standardmäßig werden nur lesende Werkzeuge angeboten: Kameras, Schnappschüsse, Systemstatus, Aufnahmen, die Leseseite der API. **Änderungen erlauben** nimmt die Werkzeuge dazu, die etwas ändern. camera.ui kann über MCP nicht nachfragen, dafür ist der Client zuständig; Claude Code und Claude Desktop fragen vor jedem Werkzeugaufruf. Die Werkzeuge folgen der Rolle des Token-Besitzers, ein Nutzerkonto sieht nie Admin-Werkzeuge. Der Endpunkt ist unabhängig vom Chat-Modell und funktioniert auch, wenn kein Modell eingerichtet ist.

## Externe MCP-Server

Andere Systeme mit MCP-Server können dem Assistenten ihre Werkzeuge leihen. Füge einen unter **Externe MCP-Server** mit Namen, URL und Zugangstoken hinzu; das Token liegt verschlüsselt. Der Zustand neben dem Namen zeigt, ob der Server geantwortet hat und wie viele Werkzeuge er anbietet. **Selbstsigniertes Zertifikat akzeptieren** ist für Server im eigenen Netzwerk da. Werkzeuge, die dort etwas ändern, werden dem Nutzer vor der Ausführung zur Bestätigung gezeigt, lesende laufen direkt. Im Chat erscheinen diese Werkzeuge als eigene Gruppe und lassen sich pro Gespräch abschalten.

Für Home Assistant die Integration **Model Context Protocol Server** aktivieren, im Home-Assistant-Profil ein langlebiges Zugangstoken anlegen und `http://<home-assistant>:8123/api/mcp` als URL eintragen. Der Assistent kann dann Zustände lesen und Lichter, Szenen und Klima über die Werkzeuge von Home Assistant schalten, und er kann sie in Automationen einbauen („wenn nachts jemand an der Tür ist, mach das Flurlicht an").

## Nächste Schritte

**[Assistent](/de/assistant/)** — was er kann und wie er im Alltag genutzt wird.
