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

Bewegungs-, Objekt- und Alarmzonen decken anfangs das ganze Bild ab, du ziehst die Ecken also nach innen, statt neu zu zeichnen. Die Privatzone ist die Ausnahme: Ihre Punkte setzt du selbst.

## Bewegungszonen

Bewegungszonen sagen, **wo Bewegung zählt**. Eine Bewegungszone ist nur ein Name, eine Fläche und eine Farbe.

Nur Bewegung innerhalb der Zone zählt, alles außerhalb wird ignoriert. Zeichnest du mehrere, zählt Bewegung in jeder davon. Bewegung wird immer per Berührung bewertet: Sobald etwas die Zone erreicht, zählt es. Ohne Bewegungszone zählt das ganze Bild.

## Objektzonen

Objektzonen sagen, **welche Objekttypen zählen und wo**. Eine Zone bedeutet: Nur was hier drin ist, zählt, und zwar für die Typen, die auf ihr stehen.

Die Liste **Labels** hat zwei Gruppen. Unter **Basis** stehen die Objekttypen: `person`, `vehicle`, `animal`. Unter **Identifizierung** stehen **Gesichter erkennen** und **Kennzeichen lesen**, die entscheiden, ob das, was hier zählt, auch einen Namen bekommt.

Eine neue Objektzone startet ohne Auswahl, es zählt also jeder Typ darin, und Gesichter und Kennzeichen werden wie gewohnt erkannt.

<Shot src="/img/cameras/zone-editor-objects.png" alt="Zonen-Editor im Tab Objekte" />

### Zonen kombinieren

Eine Zone regelt nur die Typen, die auf ihr stehen. Zeichne zwei Zonen, `person` auf der einen und `vehicle` auf der anderen, dann zählt eine Person im ersten Bereich und ein Fahrzeug im zweiten.

Gib einem Typ mehrere Zonen, dann zählt er in jeder davon. Eine Zone ohne ausgewählte Typen regelt jeden Typ, sobald es also eine gibt, muss alles in irgendeiner Zone liegen.

Ein Loch aus einer Zone herauszuschneiden geht nicht. Willst du einen Bereich von der Erkennung fernhalten, zeichne die Zone drumherum, oder leg eine [Privatzone](#privatzonen) darüber, bei der **Erkennungen darin** auf **Werden verworfen** steht.

### Welche Typen übrig bleiben

Die Typen, die du aufführst, ergeben zusammen, was die Kamera meldet. Sobald jede Objektzone eine Typenliste trägt, ist die Summe dieser Listen das, was die Kamera erkennt: Ein Typ, der auf keiner davon steht, wird an dieser Kamera überall verworfen.

**Gesichter erkennen** und **Kennzeichen lesen** zählen hier als Typen. Trägt jede Objektzone eine Liste und keine davon **Gesichter erkennen**, erkennt die Kamera überhaupt keine Gesichter mehr, nicht nur in einer Ecke.

### Zählen ohne zu erkennen

Eine Zone kann Personen und Autos zählen, ohne sie zu identifizieren. Unter **Identifizierung** entscheiden **Gesichter erkennen** und **Kennzeichen lesen**, ob das, was in dieser Zone zählt, auch einen Namen bekommt. Nimm beide raus, und die Zone erkennt weiterhin die Person und das Auto, aber kein Gesicht landet in deiner Gesichterliste, und kein Name und kein Kennzeichen erreicht das Ereignis oder den Push.

Eine Gehweg-Zone, die auf Personen achtet, ohne die Gesichter aller Vorbeigehenden zu sammeln, ist der Fall dafür.

Eine Zone, auf der nur `person` steht, erkennt keine Gesichter mehr. Wähle **Person** und **Gesichter erkennen** zusammen, damit die Person gezählt und benannt wird; **Gesichter erkennen** allein findet nichts.

Es senkt die CPU-Last nicht, es hält nur das Ergebnis zurück.

### Modus

**Gilt als drin, wenn** entscheidet, was für die Zone zählt:

- **Das Objekt die Zone berührt.** Jede Überlappung genügt. Das ist die Voreinstellung.
- **Das Objekt ganz drin ist.** Die ganze Box muss in der Zone liegen. Ein Auto, das nur den Rand streift, löst sie nicht mehr aus.

## Alarmzonen

Eine Objektzone entscheidet, was erkannt wird. Eine **Alarmzone** entscheidet, worüber du benachrichtigt wirst, und ändert sonst nichts. Erkennung, Ereignisse und Aufnahmen bleiben davon unberührt.

Ohne Alarmzone alarmiert die Kamera bei allem, was sie erkennt. Zeichne eine, um das einzugrenzen.

Sobald eine Kamera eine Alarmzone hat, entscheiden die Zonen über ihre Alarme:

- Ein Typ, der auf einer Zone steht, alarmiert, solange er darin ist.
- Derselbe Typ außerhalb dieser Zone bleibt still.
- Ein Typ, den keine Alarmzone führt, bleibt überall an dieser Kamera still.

Zeichne eine Alarmzone über die Einfahrt mit `person` und `vehicle`, und jemand auf der Straße landet weiterhin auf der Timeline und in der Aufnahme, während nur die Einfahrt dein Handy klingeln lässt. Achte auf den dritten Punkt: `animal` steht dann auf keiner Zone, Tiere alarmieren an dieser Kamera also nicht mehr. Gib einem Typ eine Zone über das ganze Bild, wenn er überall weiter alarmieren soll.

Eine Alarmzone ohne ausgewählte Typen alarmiert bei jedem Typ, der darin ist.

Setzt du einen Typ auf eine Alarmzone, den deine Objektzonen herausfiltern, weist der Editor darauf hin.

### Wer genau, und welches Kennzeichen

Eine Zone kann auch benennen, für wen sie meldet. Die Liste **Labels** hat eine zweite Gruppe, **Wer oder was genau**, mit **Gesichter** und **Kennzeichen**. Wählst du eine davon, erscheint darunter ein Feld, und der passende Typ wandert in die Zone: **Gesichter** bringt `person` mit, **Kennzeichen** bringt `vehicle` mit.

<Shot src="/img/cameras/zone-editor-alerts.png" alt="Alarmzone mit angehaktem Gesichter und der Gesichter-Liste darunter" />

**Gesichter** ist die Liste, wer aus der Zone heraus melden darf. Sie bietet **Unbekannte Gesichter** für alle, die die Erkennung nicht benennen konnte, **Jedes bekannte Gesicht** für alle, die du hinterlegt hast, und dann jede hinterlegte Person namentlich. Wähle nichts, dann meldet jedes Gesicht.

**Kennzeichen** funktioniert genauso, nur tippst du die Kennzeichen selbst ein, statt sie zu wählen. Wähle nichts, dann meldet jedes Kennzeichen.

Beide Listen halten nur Personen und Fahrzeuge zurück. Ein Tier, eine Türklingel oder ein Audio-Alarm wird nie danach beurteilt.

Wen die Kamera nicht identifizieren konnte, zählt als unbekanntes Gesicht, egal ob die Erkennung scheiterte oder nie ein Gesicht zu sehen war. Eine Person auf der [Ignorierliste](/de/detection/faces) bleibt so oder so still. Und hat die Objektzone über diesem Bereich **Gesichter erkennen** aus, wird dort niemand identifiziert, also zählen alle als unbekannt.

### Wo es als drin gilt

Alarmzonen haben eine dritte Option, **Das Objekt in der Zone steht**: Nur die untere Mitte der Box muss drin liegen. Gut für eine schräg gesehene Einfahrt, bei der eine große Person weit über den Rand ragt. Die Voreinstellung ist hier **Das Objekt ganz drin ist**.

War ein Typ während eines Aktivitäts-Abschnitts einmal drin, alarmiert dieser ganze Abschnitt. Wer über die Einfahrt geht und dann auf der Straße wartet, bringt dir den Alarm für diesen Besuch trotzdem.

### Was weiterhin gilt

Hauptschalter, Cooldown und Ruhezeiten sind von den Zonen getrennt und greifen zusätzlich.

Ein Türklingel-Druck, ein Kontaktsensor, eine Sirene oder ein Audio-Alarm ist keine Objekterkennung, eine Alarmzone hält sie also nie zurück.[^alertplugin]

[^alertplugin]: Braucht camera-ui-nvr 1.3.15 oder neuer, die Listen **Gesichter** und **Kennzeichen** ab 1.3.16. Mit einem älteren Plugin werden die Zonen gespeichert, aber die Kamera nutzt weiter ihre alte Objektliste.

## Privatzonen

Eine Privatzone verdeckt einen Bereich schwarz, etwa ein Nachbarfenster oder einen öffentlichen Gehweg. Sie ist immer schwarz und hat keine eigene Farbe.

**Erkennungen darin** entscheidet, was dort mit Erkennungen passiert:

- **Werden verworfen.** Erkennungen, die vollständig in dem Bereich liegen, werden weggeworfen. Was über den Rand ragt, etwa eine Person halb drin und halb draußen, zählt weiterhin. Das ist die Voreinstellung.
- **Zählen weiter.** Der Bereich ist verdeckt, wird aber weiter beobachtet, eine Person dahinter wird also erkannt, ohne gezeigt zu werden.

<Shot src="/img/cameras/zone-editor-privacy.png" alt="Zonen-Editor im Tab Privat" />

### Was verdeckt wird und was nicht

Der schwarze Bereich ist nicht ins Video eingebrannt.

Verdeckt:

- Vorschaubilder von Ereignissen und Aufnahmen, Moment-Karten, Gesichts- und Kennzeichen-Ausschnitte und Episoden-Mosaike.
- Bilder in Push-Benachrichtigungen.
- Snapshots: Kamera-Kacheln, Kameraliste, Übersicht, Snapshot-API, MQTT, HomeKit-Standbilder und das Home-Assistant-Kamerabild.
- Live-Ansicht und Wiedergabe in der camera.ui-Weboberfläche und in den Mobile-Apps, die dieselbe Oberfläche ausführen. Der Bereich wird über das Video schwarz gezeichnet.
- Live-Ansicht, Wiedergabe und Episoden-Player in der Apple-TV-App sowie der Clip, der auf ihrem Home-Screen läuft, wo die App den Bereich über das Video schwarz zeichnet.
- Die Vorschau beim Überfahren eines Ereignisses oder einer Aufnahme, und ein Bild, das du mit dem Kamera-Button im Player aufnimmst.

Nicht verdeckt:

- Die Aufnahme auf der Disk und alles, was du daraus exportierst oder herunterlädst.
- Video-Clips in Push-Benachrichtigungen.
- RTSP und alles, was darauf zugreift: HomeKit live und HomeKit-Aufnahmen, der Home-Assistant-Stream und andere Apps.
- Bild-im-Bild, das das nackte Video aus der Seite heraushebt und den schwarzen Bereich zurücklässt.

Soll ein Bereich gar nicht gefilmt werden, richte die Kamera anders aus, oder nutze die Privatsphärenmaske der Kamera selbst, falls sie eine hat: die schwärzt den Bereich, bevor das Bild bei camera.ui ankommt.

### Wenn ein Bild nicht verdeckt werden kann

Manchmal kann camera.ui den schwarzen Bereich nicht zeichnen, etwa bei einem Hardware-Frame, den es nicht zurücklesen konnte, oder einem unbekannten Pixelformat. **Wenn ein Bild nicht verdeckt werden kann**, unten im **Privat**-Tab und für die ganze Kamera gültig, entscheidet dann:

- **Trotzdem senden.** Das Bild geht unverdeckt raus. Das ist die Voreinstellung.
- **Kein Bild senden.** Es wird gar kein Bild erzeugt.

Stell es auf **Kein Bild senden**, wenn ein unverdecktes Bild schlimmer wäre als gar keins.

## Linien (Linienüberquerung)

Im Tab **Linien** zeichnest du eine Linie über das Bild, um zu erkennen, wenn etwas sie überquert. **Überquerungsrichtung** legt fest, wann sie auslöst:

- **A ↔ B beide Richtungen** löst in beide Richtungen aus.
- **A → B** oder **B → A** löst bei einer Überquerung in eine Richtung aus.

<Shot src="/img/cameras/zone-editor-lines.png" alt="Zonen-Editor im Tab Linien, mit einer Linie über einer Toreinfahrt" />

Wie Objektzonen lässt sich auch eine Linie auf bestimmte Typen begrenzen: `person`, `vehicle` und `animal`. Eine neue Linie startet mit allen dreien. Eine Überquerung löst nur aus, wenn sich etwas in der gewählten Richtung über die Linie bewegt, sodass du bei jemandem alarmieren kannst, der durch ein Tor kommt, statt nur im Bild aufzutauchen. Eine Linie filtert die Erkennung nie.
