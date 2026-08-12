---
title: Zonen & Linien
---

# Zonen & Linien

Mit Zonen steuerst du, wo Erkennung stattfindet, ignorierst Teile des Bildes, alarmierst nur an der Stelle, die zählt, und erkennst, wenn etwas eine Linie überquert. Du bearbeitest sie pro Kamera, und sie wirken auf die [Erkennung](/de/detection/) der Kamera, die also eingerichtet sein muss.

## Den Editor öffnen

Öffne die [Einstellungen](/de/cameras/settings) einer Kamera und gehe zum **Einstellungen**-Tab. Unter **Zonen** siehst du die Zonen und Linien, die es an der Kamera schon gibt, jeweils mit Farbe, Name und Typ (Zone, Ignorierte Zone, Alarmzone oder Linienüberquerung). Der Stift an einem Eintrag öffnet den Editor direkt darauf, der Papierkorb löscht ihn. Ist noch nichts angelegt, steht dort nur "Noch keine Zonen oder Linien an dieser Kamera."

Unter der Liste öffnet **Zonen bearbeiten** den Editor über dem Kamerabild mit drei Tabs: **Zonen**, **Alarmzonen** und **Linien**.

<Shot src="/img/cameras/zone-editor.png" alt="Zonen-Editor im Zonen-Tab" />

## Erkennungszonen

Im Tab **Zonen** zeichnest du ein Polygon, indem du Punkte auf dem Bild setzt. Jede Zone ist entweder einschließend oder ausschließend:

- **Einschließen.** Nur Erkennungen innerhalb der Zone zählen. Alles andere im Bild wird ignoriert. Gut geeignet, um eine einzelne Stelle zu beobachten, etwa eine Einfahrt oder einen Hauseingang.
- **Ausschließen.** Erkennungen innerhalb der Zone werden ignoriert, alles außerhalb zählt weiterhin. Gut geeignet, um eine störende Ecke auszunehmen, etwa einen schwankenden Baum, während der Rest des Bildes normal weiterarbeitet.

Für "alles beobachten außer hier" reicht eine einzelne ausschließende Zone. Du musst nicht zusätzlich eine einschließende Zone um den Rest legen.

### Zonen kombinieren

Zeichnest du mehrere einschließende Zonen, zählt eine Erkennung, sobald sie in einer davon liegt. Zeichnest du mehrere ausschließende Zonen, nimmt jede ihren Bereich heraus.

Mischst du beides, **gewinnt Ausschließen**: Eine Erkennung in einer ausschließenden Zone wird verworfen, auch wenn sie gleichzeitig in einer einschließenden liegt. Genau damit schneidest du ein Loch aus einer größeren einschließenden Zone, etwa den ganzen Vorgarten beobachten, aber nicht den Gehweg, der hindurchführt.

Beachte, was sich ändert, sobald es eine einschließende Zone gibt: Außerhalb aller ausschließenden Zonen zu liegen genügt dann nicht mehr, die Erkennung muss zusätzlich in einer einschließenden Zone liegen. Das gilt pro Objekttyp, und nur für die Typen, auf die die einschließende Zone gestellt ist (siehe unten). Gibt es an der Kamera nur ausschließende Zonen, zählt alles außerhalb.

### Modus

Jede Zone hat einen Modus, der festlegt, was als drinnen zählt:

- **Objekt berührt die Zone.** Eine Erkennung zählt, sobald ihre Box die Zone überlappt. Das ist die Voreinstellung.
- **Objekt komplett in der Zone.** Eine Erkennung zählt nur, wenn ihre ganze Box in der Zone liegt. Ein Auto, das nur den Rand der Zone streift, löst sie nicht mehr aus.

Der Modus gilt für einschließende und ausschließende Zonen gleichermaßen. Bei einer ausschließenden Zone auf „Objekt komplett in der Zone" wird jemand, der nur halb im ausgenommenen Bereich steht, weiterhin erkannt. Stell sie auf „Objekt berührt die Zone", wenn sie schon bei Berührung greifen soll.

### Objekttypen

Du kannst eine Zone auf bestimmte **Objekttypen** begrenzen, sodass sie nur auf Personen oder nur auf Fahrzeuge reagiert.

Die Auswahl gilt nur lokal für diese Zone. Eine Zone wirkt nur auf die Labels, die auf ihr ausgewählt sind, und ein Label, das du weglässt, passiert sie ungefiltert. Begrenzt du eine Zone auf `vehicle`, verhalten sich Personen-Erkennungen, als gäbe es die Zone nicht: Sie werden von ihr weder eingegrenzt, wenn sie einschließt, noch herausgeschnitten, wenn sie ausschließt. Eine Zone ohne Auswahl gilt für jedes Label.

Das wirkt pro Objekttyp über die ganze Kamera. Ist die einzige einschließende Zone einer Kamera auf `vehicle` gestellt, müssen Fahrzeuge darin liegen, während Personen weiterhin überall im Bild zählen. Nimm `person` in die Zone auf oder zeichne eine zweite einschließende Zone dafür, wenn auch Personen eingegrenzt sein sollen.

Jede neue Zone startet mit **motion, person, vehicle und animal** ausgewählt.[^labelnames] `package` gehört nicht zu dieser Voreinstellung, ein Paket zählt also überall im Bild, auch außerhalb deiner einschließenden Zonen. Nimm **package** in die Zone auf, wenn es an denselben Bereich gebunden sein soll.

Eine Zone begrenzt, wo ein Objekttyp zählt, sie schaltet ihn nie ab. Um einen Typ ganz zu verwerfen, nutze **Object labels** in den [Objekterkennungs-Einstellungen](/de/detection/ai-backends#modelle-und-confidence) der Kamera.

[^labelnames]: Die Label-Namen stehen auch in der deutschen Oberfläche englisch da (`motion`, `person`, `vehicle`, `animal`, `package`), deshalb sind sie hier so geschrieben.

## Ignorierte Zonen

Mach aus einer Zone eine **ignorierte Zone**, um einen Bereich komplett von der Erkennung auszunehmen, etwa ein Nachbarfenster oder einen öffentlichen Gehweg. Erkennungen, die vollständig darin liegen, werden verworfen und lösen kein Ereignis aus. Was nur teilweise überlappt, zählt weiterhin.

Eine ignorierte Zone hat keine eigenen Einstellungen, und das ist ihr Sinn. Sie nutzt immer die Regel "vollständig enthalten" und verwirft alles, was dort landet, unabhängig vom Objekttyp, auch Typen, die keine Zone auswählt. Wenn du einen Bereich einfach nur loswerden willst, ist sie damit die sicherere Wahl gegenüber einer ausschließenden Zone. Zu einer ausschließenden Zone greifst du, wenn sie mit deinen einschließenden Zonen zusammenspielen soll oder wenn du „Objekt berührt die Zone" statt „Objekt komplett in der Zone" brauchst.

Eine ignorierte Zone verändert das Video nicht.[^noblackout] Der Bereich bleibt in der Live-Ansicht und in Aufnahmen sichtbar und wird weiterhin aufgezeichnet.

[^noblackout]: camera.ui kann keinen Teil des Bildes schwärzen. Soll ein Nachbarfenster gar nicht gefilmt werden, richte die Kamera anders aus, oder nutze die Privatsphärenmaske der Kamera selbst, falls sie eine hat: die schwärzt den Bereich, bevor das Bild bei camera.ui ankommt.

## Alarmzonen

Eine Erkennungszone entscheidet, was erkannt wird. Eine **Alarmzone** entscheidet, worüber du benachrichtigt wirst, und ändert sonst nichts. Erkennung, Ereignisse und Aufnahmen laufen weiter wie bisher.

Im Tab **Alarmzonen** zeichnest du ein Polygon und wählst die Objekttypen, bei denen es alarmieren soll: `person`, `vehicle`, `animal` oder `package`. Eine neue Alarmzone startet mit **person** und **vehicle** ausgewählt.

<Shot src="/img/cameras/zone-editor-alerts.png" alt="Zonen-Editor im Tab Alarmzonen" />

Sobald eine Kamera eine Alarmzone mit einem Objekttyp hat, übernehmen die Zonen die Alarme dieser Kamera:

- Ein gewählter Typ alarmiert, solange er in einer Zone ist, die ihn führt.
- Derselbe Typ außerhalb dieser Zone bleibt still.
- Ein Typ, den keine Alarmzone führt, bleibt überall an dieser Kamera still.

Zeichne eine Alarmzone über die Einfahrt mit `person` und `vehicle`, und jemand auf der Straße landet weiterhin auf der Timeline und in der Aufnahme, während nur die Einfahrt dein Handy klingeln lässt. Achte auf den dritten Punkt: `animal` steht jetzt auf keiner Zone, Tiere alarmieren an dieser Kamera also gar nicht mehr. Gib einem Typ eine Zone über das ganze Bild, wenn er überall weiter alarmieren soll.

Eine Alarmzone ohne ausgewählte Objekttypen tut überhaupt nichts. Sie bedeutet nicht "alle Typen", wie es eine leere Auswahl bei einer Erkennungszone tut.

### Modus

**Gilt als drin, wenn** entscheidet, was für die Zone zählt:

- **Das Objekt in der Zone steht.** Nur die untere Mitte der Box muss in der Zone liegen. Gut für eine schräg gesehene Einfahrt, bei der eine große Person weit über den Rand ragt.
- **Das Objekt die Zone berührt.** Jede Überlappung genügt.
- **Das Objekt ganz drin ist.** Die ganze Box muss in der Zone liegen. Das ist die Voreinstellung.

War ein Typ während eines Aktivitäts-Abschnitts einmal drin, alarmiert dieser ganze Abschnitt. Wer über die Einfahrt geht und dann auf der Straße wartet, bringt dir den Alarm für diesen Besuch trotzdem.

### Was weiterhin gilt

Eine Alarmzone ersetzt **Notify for Objects** an dieser Kamera, die Objektliste in den [Benachrichtigungs-Einstellungen](/de/notifications/#woruber-jede-kamera-dich-alarmiert) hat dort also nichts mehr zu sagen. Hauptschalter, **Known Faces Only**, Cooldown und Ruhezeiten arbeiten weiter wie bisher.

Ein Türklingel-Druck, ein Kontaktsensor, eine Sirene oder ein Audio-Alarm ist keine Objekterkennung, eine Alarmzone hält sie also nie zurück.[^alertplugin]

[^alertplugin]: Alarmzonen brauchen das NVR-Plugin ab 1.3.14. Ohne das Update werden die Zonen gespeichert, aber nichts wirkt darauf.

## Linien (Linienüberquerung)

Im Tab **Linien** zeichnest du eine Linie über das Bild, um zu erkennen, wenn etwas sie überquert. Jede Linie hat eine **Richtung**:

- **A → B** oder **B → A** löst bei einer Überquerung in eine Richtung aus.
- **A ↔ B** löst in beide Richtungen aus.

Wie Zonen lässt sich auch eine Linie auf bestimmte Objekttypen begrenzen. Eine Überquerung löst nur dann ein Ereignis aus, wenn sich tatsächlich etwas in der gewählten Richtung über die Linie bewegt, sodass du bei jemandem alarmieren kannst, der durch ein Tor kommt, statt nur im Bild aufzutauchen.
