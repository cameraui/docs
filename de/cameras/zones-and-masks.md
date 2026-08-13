---
title: Zonen & Privatsphäre
---

# Zonen & Privatsphäre

Zonen markieren Teile des Kamerabilds und geben diesem Bereich eine Aufgabe. Es gibt fünf Arten, jede mit einer Aufgabe und einem eigenen Tab im Editor: **Bewegung**, **Objekte**, **Alarme**, **Privat** und **Linien**.

Eine Regel zieht sich durch alle: **Eine Art schränkt erst ein, wenn es sie gibt.** Ohne Bewegungszone zählt Bewegung überall, ohne Objektzone zählt jeder Objekttyp überall, ohne Alarmzone darf alles Erkannte dich alarmieren. Du zeichnest also nur die Art, die du wirklich begrenzen willst.

::: warning Kameras, die selbst erkennen
Reolink AI, Eufy, ONVIF-Events und Plugins, die Erkennungen melden, sagen camera.ui **was** sie gesehen haben, meist ohne zu sagen **wo**. Ohne Box gibt es nichts zu verorten, keine Zone kann so eine Meldung bewerten, und es gelten nur noch die Typenlisten:

- **Bewegungszonen** begrenzen sie nicht. Ihre Bewegung zählt überall auf dieser Kamera.
- **Objektzonen** verwerfen weiterhin die Typen, die du weggelassen hast, die Fläche wirkt aber nicht.
- **Alarmzonen** schrumpfen zu einer Typenauswahl. "Fahrzeuge in der Einfahrt" geht bei so einer Kamera nicht, "Fahrzeuge" schon.
- **Linien** greifen nie, eine Überquerung braucht Tracking und es gibt nichts zu verfolgen.

Zwei Auswege. Lass camera.ui für die Kamera erkennen: Wähle ein [KI-Backend](/de/detection/ai-backends) als ihren Objekt-Sensor statt der kameraeigenen Erkennung, sofern deine Hardware den zusätzlichen Stream trägt. Oder behalte die Kamera als Sensor und nimm ein [Objekt-Assistenz](/de/detection/ai-backends#objekt-assistenz)-Plugin dazu, das die gemeldeten Objekte im Bild findet. So oder so hat die Erkennung ab dann eine Box und jede Zone wirkt wie hier beschrieben. Kameras, die Koordinaten mitschicken, sind nicht betroffen.
:::

## Den Editor öffnen

Öffne die [Einstellungen](/de/cameras/settings) einer Kamera und gehe zum **Einstellungen**-Tab. Unter **Zonen** siehst du, was die Kamera schon hat, jeweils mit Farbe, Name und Typ (Bewegungszone, Objektzone, Alarmzone, Privatzone oder Linienüberquerung). Der Stift an einem Eintrag öffnet den Editor auf diesem Tab, der Papierkorb löscht ihn.

Unter der Liste öffnet **Zonen bearbeiten** den Editor über dem Kamerabild.

<Shot src="/img/cameras/zone-editor.png" alt="Zonen-Editor mit seinen fünf Tabs, offen auf Bewegung" />

Bewegungs-, Objekt- und Alarmzonen decken anfangs das ganze Bild ab, du ziehst die Ecken also nach innen, statt neu zu zeichnen. Die Privatzone ist die Ausnahme: Ihre Punkte setzt du selbst, denn eine Privatzone über das ganze Bild würde alles schwärzen.

## Bewegungszonen

Bewegungszonen sagen, **wo Bewegung zählt**. Sie haben keine Objekttypen, denn Bewegung ist kein Objekt.

- **Nur was darin ist, zählt.** Bewegung wird in der Zone erfasst und sonst nirgends.
- **Alles darin wird verworfen.** Bewegung in der Zone wird ignoriert, der Rest des Bildes zählt weiter.

Bewegung wird immer per Berührung bewertet: Sobald etwas die Zone erreicht, zählt es. Ohne Bewegungszone zählt das ganze Bild.

## Objektzonen

Objektzonen sagen, **welche Objekttypen zählen und wo**. Jede Zone trägt eine Liste von Typen (`person`, `vehicle`, `animal`, `package`) plus dieselben zwei Modi wie Bewegungszonen.

Eine neue Objektzone startet ohne ausgewählte Typen, gilt also für jeden Typ.

<Shot src="/img/cameras/zone-editor-objects.png" alt="Zonen-Editor im Tab Objekte" />

### Zonen kombinieren

Zeichnest du mehrere einschließende Zonen, zählt eine Erkennung, sobald sie in einer davon liegt. Zeichnest du mehrere ausschließende Zonen, nimmt jede ihren Bereich heraus.

Mischst du beides, **gewinnt Ausschließen**: Eine Erkennung in einer ausschließenden Zone wird verworfen, auch wenn sie gleichzeitig in einer einschließenden liegt. Genau damit schneidest du ein Loch aus einer größeren einschließenden Zone, etwa den ganzen Vorgarten beobachten, aber nicht den Gehweg, der hindurchführt.

Sobald es eine einschließende Zone gibt, genügt es nicht mehr, außerhalb aller ausschließenden Zonen zu liegen, die Erkennung muss zusätzlich in einer einschließenden liegen.

### Welche Typen übrig bleiben

Die Typen, die du aufführst, ergeben zusammen, was die Kamera meldet. Sobald jede einschließende Zone eine Typenliste trägt, ist die Summe dieser Listen das, was die Kamera erkennt: Ein Typ, der auf keiner davon steht, wird an dieser Kamera überall verworfen. Lässt du eine einschließende Zone ohne Typen, entfällt das wieder, denn diese Zone deckt bereits jeden Typ ab.

Es gibt also zwei Arten, Objektzonen zu nutzen. Typen darauf listen, um zu sagen, was die Kamera erkennt und wo. Oder die Typen leer lassen, um nur den Bereich zu begrenzen und jeden Typ zu behalten.

### Modus

**Gilt als drin, wenn** entscheidet, was für die Zone zählt:

- **Das Objekt die Zone berührt.** Jede Überlappung genügt. Das ist die Voreinstellung.
- **Das Objekt ganz drin ist.** Die ganze Box muss in der Zone liegen. Ein Auto, das nur den Rand streift, löst sie nicht mehr aus.

## Alarmzonen

Eine Erkennungszone entscheidet, was erkannt wird. Eine **Alarmzone** entscheidet, worüber du benachrichtigt wirst, und ändert sonst nichts. Erkennung, Ereignisse und Aufnahmen laufen weiter wie bisher.

Ohne Alarmzone alarmiert die Kamera bei allem, was sie erkennt. Zeichne eine, um das einzugrenzen.

<Shot src="/img/cameras/zone-editor-alerts.png" alt="Zonen-Editor im Tab Alarme" />

Sobald eine Kamera eine Alarmzone hat, entscheiden die Zonen über ihre Alarme:

- Ein Typ, der auf einer Zone steht, alarmiert, solange er darin ist.
- Derselbe Typ außerhalb dieser Zone bleibt still.
- Ein Typ, den keine Alarmzone führt, bleibt überall an dieser Kamera still.

Zeichne eine Alarmzone über die Einfahrt mit `person` und `vehicle`, und jemand auf der Straße landet weiterhin auf der Timeline und in der Aufnahme, während nur die Einfahrt dein Handy klingeln lässt. Achte auf den dritten Punkt: `animal` steht dann auf keiner Zone, Tiere alarmieren an dieser Kamera also nicht mehr. Gib einem Typ eine Zone über das ganze Bild, wenn er überall weiter alarmieren soll.

Eine Alarmzone ohne ausgewählte Typen alarmiert bei jedem Typ, der darin ist.

Setzt du einen Typ auf eine Alarmzone, den deine Objektzonen herausfiltern, weist der Editor darauf hin. Die Kamera würde diesen Typ nie erkennen, die Alarmzone könnte also nie auslösen.

### Modus

Alarmzonen bieten zusätzlich zu den beiden oben eine dritte Option:

- **Das Objekt in der Zone steht.** Nur die untere Mitte der Box muss in der Zone liegen. Gut für eine schräg gesehene Einfahrt, bei der eine große Person weit über den Rand ragt.
- **Das Objekt die Zone berührt.** Jede Überlappung genügt.
- **Das Objekt ganz drin ist.** Die ganze Box muss in der Zone liegen. Das ist die Voreinstellung.

War ein Typ während eines Aktivitäts-Abschnitts einmal drin, alarmiert dieser ganze Abschnitt. Wer über die Einfahrt geht und dann auf der Straße wartet, bringt dir den Alarm für diesen Besuch trotzdem.

Manche Kameras melden nur, dass sie eine Person gesehen haben, ohne zu sagen wo. Es gibt keine Box zum Verorten, keine Zone kann das bewerten, und der Alarm geht raus. Nimm ein [Objekt-Assistenz](/de/detection/ai-backends#objekt-assistenz)-Plugin dazu, wenn du solche Erkennungen in einer Zone verorten willst.

### Was weiterhin gilt

Alarmzonen sind der einzige Ort, an dem du wählst, welche Objekte dich benachrichtigen. Hauptschalter, **Known Faces Only**, Cooldown und Ruhezeiten arbeiten weiter wie bisher.

Ein Türklingel-Druck, ein Kontaktsensor, eine Sirene oder ein Audio-Alarm ist keine Objekterkennung, eine Alarmzone hält sie also nie zurück.[^alertplugin]

[^alertplugin]: Alarmzonen brauchen das NVR-Plugin ab 1.3.15. Mit einem älteren Plugin werden die Zonen gespeichert, aber die Kamera nutzt weiter ihre alte Objektliste.

## Privatzonen

Eine Privatzone verdeckt einen Bereich schwarz, etwa ein Nachbarfenster oder einen öffentlichen Gehweg. Sie ist immer schwarz und hat keine eigene Farbe.

**Erkennungen darin** entscheidet, was dort mit Erkennungen passiert:

- **Werden verworfen.** In dem Bereich wird nichts erkannt. Das ist die Voreinstellung.
- **Zählen weiter.** Der Bereich ist verdeckt, wird aber weiter beobachtet, eine Person dahinter wird also erkannt, ohne gezeigt zu werden.

<Shot src="/img/cameras/zone-editor-privacy.png" alt="Zonen-Editor im Tab Privat" />

### Was verdeckt wird und was nicht

Der schwarze Bereich ist nicht ins Video eingebrannt. camera.ui legt ihn über die Bilder, die es erzeugt, und über den eigenen Player. Was verdeckt ist, hängt also davon ab, wo du hinschaust.

Verdeckt:

- Vorschaubilder von Ereignissen und Aufnahmen, Moment-Karten, Gesichts- und Kennzeichen-Ausschnitte und Episoden-Mosaike.
- Bilder in Push-Benachrichtigungen.
- Snapshots: Kamera-Kacheln, Kameraliste, Übersicht, Snapshot-API, MQTT, HomeKit-Standbilder und das Home-Assistant-Kamerabild.
- Live-Ansicht und Wiedergabe im camera.ui-Web-Player, wo der Browser den Bereich über das Video schwarz zeichnet.

Nicht verdeckt:

- Die Aufnahme auf der Disk und alles, was du daraus exportierst oder herunterlädst.
- Video-Clips in Push-Benachrichtigungen.
- RTSP und alles, was darauf zugreift: HomeKit live und HomeKit-Aufnahmen, der Home-Assistant-Stream und andere Apps.
- Die Apple-TV-App, die kein Overlay zeichnet.
- Die Mobile-Apps, bis ein App-Update die neue Oberfläche mitbringt. Ihre Snapshots sind verdeckt, das Live-Bild nicht.
- Die Vorschau, die beim Überfahren eines Ereignisses oder einer Aufnahme in der Web-Oberfläche läuft.
- Ein Bild, das du mit dem Kamera-Button im Live-Player aufnimmst.

Eine Privatzone verdeckt den Bereich also vor jemandem, der auf den Bildschirm schaut, und in den Bildern, die camera.ui verschickt. Sie verdeckt ihn nicht vor jemandem, der den Stream hat. Soll ein Bereich gar nicht gefilmt werden, richte die Kamera anders aus, oder nutze die Privatsphärenmaske der Kamera selbst, falls sie eine hat: die schwärzt den Bereich, bevor das Bild bei camera.ui ankommt.

### Wenn ein Bild nicht verdeckt werden kann

Manchmal kann camera.ui die Maske nicht zeichnen, etwa bei einem Hardware-Frame, den es nicht zurücklesen konnte, oder einem unbekannten Pixelformat. Die kameraweite Einstellung entscheidet dann:

- **Trotzdem senden.** Das Bild geht unverdeckt raus. Das ist die Voreinstellung.
- **Kein Bild senden.** Es wird gar kein Bild erzeugt.

10-Bit-Video unterstützt die Maske nicht, bei einem 10-Bit-Stream geht also jedes Bild diesen Weg. Stell es auf **Kein Bild senden**, wenn ein unverdecktes Bild schlimmer wäre als gar keins.

## Linien (Linienüberquerung)

Im Tab **Linien** zeichnest du eine Linie über das Bild, um zu erkennen, wenn etwas sie überquert. **Überquerungsrichtung** legt fest, wann sie auslöst:

- **A ↔ B beide Richtungen** löst in beide Richtungen aus.
- **A → B** oder **B → A** löst bei einer Überquerung in eine Richtung aus.

<Shot src="/img/cameras/zone-editor-lines.png" alt="Zonen-Editor im Tab Linien, mit einer Linie über einer Toreinfahrt" />

Wie Objektzonen lässt sich auch eine Linie auf bestimmte Typen begrenzen; eine neue Linie startet mit allen vier. Eine Überquerung löst nur dann ein Ereignis aus, wenn sich tatsächlich etwas in der gewählten Richtung über die Linie bewegt, sodass du bei jemandem alarmieren kannst, der durch ein Tor kommt, statt nur im Bild aufzutauchen. Eine Linie filtert die Erkennung nie, sie meldet nur Überquerungen.

## Deine bisherigen Zonen nach dem Update

Zonen, die du vor diesem Update gezeichnet hast, werden automatisch aufgeteilt, denn eine Zone erledigte früher mehrere dieser Aufgaben gleichzeitig:

- Eine Privatsphärenmaske wird zur **Privatzone**, Erkennungen darin werden weiterhin verworfen.
- Eine Zone, die Bewegung beobachtet hat, wird zur **Bewegungszone**.
- Eine Zone, die Objekttypen gelistet hat, wird zur **Objektzone** mit diesen Typen.
- Eine Zone, die beides tat, erscheint zweimal, einmal unter Bewegung und einmal unter Objekte, mit demselben Namen. Das ist so gewollt, und du kannst die Hälfte löschen, die du nicht brauchst.

Alarmzonen und Linien werden unverändert übernommen. Die kameraweite Objekttyp-Liste aus den Kamera-Einstellungen gibt es nicht mehr, das erledigen jetzt die Objektzonen.
