---
title: Assistent
---

# Assistent

Der **Assistent** beantwortet Fragen an deine Instanz in normaler Sprache: was heute zu Hause passiert ist, ob alle Kameras online sind, welche Sensoren aktiv sind, was eine Kamera gerade sieht. Die Antworten kommen von einem Sprachmodell, das du mitbringst, und das Modell erreicht deine Instanz nur über einen festen Satz Werkzeuge. Alles, was etwas ändert, wird dir vorher gezeigt und läuft erst nach deiner Bestätigung.

<Shot src="/img/assistant/chat.png" alt="Die Assistent-Ansicht mit Gespräch, Werkzeug-Karte und Antwort" />

Sobald ein Admin ihn [eingerichtet](/de/admin/assistant-setup) hat, sehen ihn alle Nutzer in der Navigation, und der Funken-Button in der Kopfzeile öffnet ihn auf jeder Seite: als Seitenleiste oder als kleines Fenster in der Ecke, in dem du chattest, während die Seite bedienbar bleibt.

<Shot src="/img/assistant/drawer.png" alt="Der Assistent als kleines Fenster in der Ecke, über der Kameraübersicht" />

## Fragen

Tippe eine Frage oder nimm einen der Vorschläge. Der Assistent antwortet in deiner Oberflächensprache, solange **Antwortsprache** nicht auf eine feste Sprache steht. Jedes Werkzeug, das er benutzt hat, erscheint als kleine Karte unter der Antwort; öffne eine, um Argumente und Ergebnis zu sehen.

Er bedient die App auch für dich: „zeig mir die Gartenkamera", „öffne die Aufnahme vom Tor um 7:12" oder „geh zu den Automationen" öffnet die passende Seite, und auf einer Kameraseite bewegt und zoomt er die Zeitleiste. Das tut er nur, wenn du etwas sehen oder machen willst, eine reine Frage wird im Chat beantwortet. Die Aufnahmen-Seite hat ein eigenes Feld für den Assistenten, siehe [Aufnahmen durchsuchen](/de/recording/browsing#assistent-fragen).

Ist eine Anfrage mehrdeutig, fragt der Assistent mit einem kleinen Formular zurück: Kamera wählen, Zeitraum wählen, oder eine Antwort eintippen. Überspringst du die Frage, macht er mit einer Annahme weiter und nennt sie. Ein Tagesrückblick oder ein Systemcheck kommt als Karte mit einer Zeile pro Kamera oder Komponente, und die Zeilen öffnen den Moment, den sie beschreiben.

Neben dem Textfeld sitzt ein Mikrofon: Der Browser macht aus dem Gesprochenen Text, camera.ui bekommt nie Audio. Es erscheint in Browsern mit Spracherkennung, auf einer sicheren Verbindung, und in den iOS- und Android-Apps, die beim ersten Mal nach Zugriff auf Mikrofon und Spracherkennung fragen.

Die Büroklammer hängt eigene Dateien an, Einfügen eines Bildes geht auch: Bilder bis 12 MB, Audio bis 25 MB, Video bis 60 MB, acht Dateien pro Nachricht. Der Assistent gibt sie an die Erkennungs-Plugins weiter, für „was findet die Objekterkennung auf diesem Bild" oder „welche Geräusche sind in dieser Aufnahme". Audio und Video gehen nie an das Sprachmodell, nur an die Plugins. Angehängte Bilder bleiben beim Gespräch, Audio und Video werden einmal analysiert und nicht aufbewahrt.

Eine Aufnahme-Karte und das Menü einer Kamera bieten beide **Assistenten fragen**, was den Chat mit diesem Ereignis oder dieser Kamera öffnet. Während der Wiedergabe fragt das Kamera-Menü nach dem Moment auf dem Bildschirm statt nach dem, was die Kamera gerade sieht.

## Mit einem Gespräch arbeiten

Fahr über eine Nachricht für ihre Aktionen. Eine Frage lässt sich bearbeiten und neu senden, was alles danach verwirft. Eine Antwort lässt sich neu erzeugen, kopieren oder zusammen mit ihrer Frage löschen. **Ab hier abzweigen** kopiert das Gespräch bis zu dieser Stelle in ein neues, damit du eine andere Richtung probieren kannst, ohne das Original zu verlieren. Eine gestoppte Antwort bietet **Weiter**. Du kannst die nächste Nachricht tippen, während eine Antwort noch läuft; sie wartet unter dem Textfeld und geht raus, sobald die Antwort fertig ist.

Der Schieberegler-Button im Textfeld öffnet die Einstellungen dieses Gesprächs. **Anweisungen** gelten für jede Antwort darin, etwa „antworte in einem Satz", und wirken auch in langen Gesprächen weiter, in denen frühe Nachrichten aus dem Blickfeld des Modells fallen. **Werkzeuge** listet die Gruppen: camera.ui, die Dokumentation und eine Gruppe pro Plugin. Nimm eine Gruppe raus und das Modell sieht diese Werkzeuge hier nicht. Bei mehr als einem Modell wählt das Panel auch das **Modell** für dieses Gespräch, und das Gespräch behält es: später wieder geöffnet, antwortet es mit diesem Modell statt mit dem Standard. Speichere eine Kombination aus Modell, Werkzeuggruppen und Anweisungen als **Profil** und nimm es beim nächsten Mal aus der Liste; Profile gehören deinem Konto.

Gespräche liegen pro Nutzer auf dem Server, zusammen mit den Bildern und den Öffnen-Buttons der letzten Werkzeugaufrufe, damit ein altes Gespräch wieder so aussieht wie vorher. Lösche eines aus der Liste oder alle auf einmal. Eine Antwort, die noch läuft, übersteht eine schlechte Verbindung, einen Reload oder einen zweiten Tab: Der Browser nimmt den Stream dort wieder auf, wo er abgerissen ist, statt das Modell erneut zu fragen, und eine wartende Bestätigung wird nach einem Neustart wieder gezeigt. **Stopp** beendet den Lauf auch auf dem Server, das Schließen des Tabs allein nicht.

## Was sich der Assistent merkt

Fakten, die du erwähnst oder die er sich merken soll („merk dir, dass unser Hund Bruno heißt", „die Kamera Tor zeigt auf die Straße"), bleiben über Gespräche hinweg erhalten und werden dem Modell jedes Mal mitgegeben, damit es nicht wieder fragt. Nach jedem Austausch sucht ein kurzer Modellaufruf solche Fakten selbst heraus; Ereignisse und alles Kurzlebige werden nie gespeichert. Ein Modell mit einem Kontextfenster unter 16.000 Tokens lässt diesen Schritt aus und behält nur, was es sich ausdrücklich merken soll. Der Gehirn-Button im Textfeld zeigt die Liste unter **Was der Assistent über dich weiß**, und jeder Eintrag lässt sich vergessen. Admins können die Funktion abschalten.

## Was der Assistent kann

Die Werkzeuge entscheiden, was der Assistent sehen und tun kann. Die Karte **Werkzeuge** unten unter [Einstellungen → Assistent](/de/admin/assistant-setup) listet sie, ein Reiter pro Anbieter: camera.ui selbst und jedes Plugin, das Werkzeuge beisteuert.

<Shot src="/img/assistant/tools.png" alt="Die Werkzeuge-Karte, ein Reiter pro Anbieter, mit dem Badge &quot;fragt nach&quot; an einem Werkzeug, das etwas ändert" />

Der camera.ui-Satz bleibt bewusst allgemein: Schnappschüsse, die Sensoren mit ihrem aktuellen Zustand und das Schalten eines Sensors, Push-Benachrichtigungen an die eigenen Geräte, die aktuelle Last der Instanz, der Grundriss, eine Gesundheitsübersicht und drei allgemeine API-Werkzeuge. Diese drei geben ihm die ganze camera.ui-REST-API: Er sucht den Endpunkt, der zur Frage passt, liest ihn mit deinen Rechten und ändert etwas erst nach deiner Bestätigung. So beantwortet er Fragen zu Plugins, Workern, Sitzungen, Automationen, Nutzern oder Zonen ohne eigenes Werkzeug für jedes davon. Zwei Instanz-Werkzeuge decken ab, was die API nicht kann: Kameras und Sensoren im Netzwerk finden und übernehmen, den Benachrichtigungsverlauf, Logs, Update-Prüfungen, MQTT und Prozesszustände. Zugangsdaten in den Antworten, etwa Stream-Passwörter, werden entfernt, bevor das Modell sie sieht, und Endpunkte für Login, Konfigurationsdateien, Backups und Downloads werden nie angeboten.

Die Erkennungs-Plugins sind ebenfalls erreichbar. Der Assistent weiß, welches Plugin Objekt-, Gesichts-, Kennzeichen- oder CLIP-Erkennung anbietet, und kann eines davon auf einen frischen Schnappschuss, eine kurze Folge von Schnappschüssen oder das Bild eines aufgezeichneten Ereignisses anwenden, für „was sieht die Objekterkennung gerade auf der Terrasse" oder „wie gut passt dieses Bild zu ‚ein Paket an der Tür'".

Mit dem NVR-Plugin erreicht er deine Aufnahmen: Ereignisse und Episoden in einem Zeitraum, eine Zusammenfassung eines Tages oder einer ganzen Woche, Ereignisse nach Beschreibung gesucht, Ereignisbilder, bekannte Gesichter und wann jemand zuletzt gesehen wurde. Frag nach dem Clip eines Moments („schick mir das Video der Lieferung") und er baut einen, der Chat zeigt einen Download-Button, und auf Wunsch kommt er als Video-Benachrichtigung aufs Handy. Gesichter, die die Erkennung nicht benennen konnte, kommen auf Anfrage als Bilder, sodass du sie im Chat benennen, ignorieren oder korrigieren kannst. Er listet außerdem die Kennzeichen eines Zeitraums, sagt dir, wann eine Kamera am meisten zu tun hat und wo im Bild, und zeigt die Strecken, in denen eine Kamera nicht aufgezeichnet hat.[^license]

Der Assistent kennt auch die Nutzer-Dokumentation. Er schlägt nach, wie eine Funktion arbeitet und wo sie in der App liegt, bevor er antwortet, sodass „wie richte ich die Zwei-Faktor-Anmeldung ein" eine Antwort mit der richtigen Seite bekommt, und eine Frage nach etwas, das er aus dem Chat heraus nicht kann, mit dem Hinweis auf die Stelle in der App endet statt mit einer Vermutung. Nach Passwörtern fragt er im Chat nie.

Werkzeuge, die etwas ändern (einen Sensor schalten, eine Automation ausführen, eine Benachrichtigung senden, einen Favoriten setzen, ein Gerät übernehmen), sind mit **fragt nach** markiert. Der Chat zeigt, was der Assistent mit welchen Argumenten tun will, **Bearbeiten** korrigiert die Werte, und nach **Erlauben** läuft es. Werkzeuge mit **Admin** werden Nutzern mit der Rolle Nutzer nicht angeboten.

## Textalarme und eine Kamera beobachten

Mit dem NVR-Plugin kann der Assistent deine Kameras auf eine Beschreibung hin beobachten: „sag mir Bescheid, wenn ein Paketbote kommt", „melde dich, wenn ein Hund im Garten ist". Er legt einen Textalarm an, zeigt dir vergangene Ereignisse, die ausgelöst hätten, damit du die Formulierung beurteilen kannst, und ab dann schickt jedes neue Ereignis, dessen Bild zur Beschreibung passt, einen Push mit dem Bild. Der Bildabgleich kalibriert sich an deinen Aufnahmen, und wenn das NVR-Plugin ein Modell nutzen darf, schaut dieses Modell bei jedem Treffer auf die Bilder und lässt den Push nur durch, wenn es zustimmt, mit seiner Begründung als Push-Text. Alarme lassen sich auf Kameras begrenzen, können statt des automatischen einen festen Schwellwert bekommen (niedriger löst öfter aus) und haben eine Abklingzeit zwischen zwei Pushes. Bitte den Assistenten, sie aufzulisten, zu ändern, zu pausieren oder zu löschen. Ein Alarm kann auch eine Automation antreiben: „wenn der Paketalarm auslöst, schalte das Licht an der Haustür ein" wird ein Flow mit dem Trigger **Systemereignis** auf die Benachrichtigungen des Plugins.

„Behalte die Einfahrt die nächsten zwei Stunden im Auge und sag mir, wenn ein Kurier kommt" ist dasselbe mit Ende: Der Alarm löscht sich zu dieser Zeit selbst. Jeder Treffer erscheint im Gespräch mit Bild und einem Button zur Aufnahme, und als Push, und wenn die Beobachtung endet, schreibt der Assistent eine kurze Zusammenfassung. Dazwischen wird nichts zum Modell gestreamt, es schaut nur auf Bilder, wenn die Kameras etwas aufzeichnen.

Beides braucht ein CLIP-Plugin, dasselbe, das die [Beschreibungssuche](/de/detection/semantic-search) nutzt.

## Automationen und geplante Prompts

Automationen können den Assistenten fragen: Die Aktion **Assistenten fragen** nimmt eine Frage mit den Variablen des Flows („Schau dir das Bild von <span v-pre>`{{camera.name}}`</span> an: ist das eine Lieferung?"), optional das Bild eines Schnappschuss-Knotens, und stellt die Antwort einem Nutzer als Push, als Gespräch oder nur als Variable für die nächsten Knoten zu. Ein **Profil** dieses Nutzers setzt Modell, Werkzeuge und Anweisungen. Gibt es nichts zu melden, bleibt der Assistent still und es geht nichts raus.

Er baut Automationen auch aus einer Beschreibung: „wenn nach 22:00 jemand auf der Terrasse ist, schick mir einen Push mit Bild". Der Assistent setzt den Flow aus denselben Knotentypen zusammen, die auch der Editor nutzt, zeigt dir Knoten und Verbindungen und legt ihn an, sobald du zustimmst. Das Ergebnis öffnet sich im [Automations-Editor](/de/automations/) wie jeder andere Flow. Eine bestehende Automation ändern oder ausführen funktioniert genauso. Das braucht die Admin-Rolle.

Ein geplanter Prompt ist eine Frage, die der Assistent nach Zeitplan von selbst beantwortet, eine Zusammenfassung des Tages jeden Abend um 20:00 oder ein Kamera-Check jeden Morgen. Bitte im Chat darum („fasse meinen Tag jeden Abend um 8 zusammen und schick es als Push") oder leg einen unter **Geplante Prompts** an, mit Titel, Prompt, Uhrzeit und Zustellung: Push, gespeichertes Gespräch oder beides. Ein optionales **Profil** führt ihn mit dessen Modell, Werkzeugen und Anweisungen aus, **Jetzt ausführen** probiert einen Zeitplan sofort. Geplante Läufe überspringen jedes Werkzeug, das nachfragen würde, und die Antwort kommt in der Sprache, in der du den Zeitplan angelegt hast. Bis zu 20 Zeitpläne pro Nutzer.

Die Antworten kommen von einem Sprachmodell und können falsch sein. Wo es darauf ankommt, schau in die Aufnahme.

## Nächste Schritte

**[Assistent einrichten](/de/admin/assistant-setup)** — Modelle, welche Plugins sie nutzen dürfen, Grenzen und der MCP-Endpunkt.

[^license]: Die Aufnahme-Werkzeuge bauen auf der Aufnahme (NVR) auf, die ein aktives camera.ui-Abo braucht.
