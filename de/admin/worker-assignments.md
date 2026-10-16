---
title: Worker-Zuweisungen
---

# Worker-Zuweisungen

Kameras und Plugins laufen auf der Maschine, der du sie unter **Workers** zuweist. Der Statuspunkt am Anfang jeder Zeile zeigt, wo die Kamera oder das Plugin gerade läuft, etwa während der Installation auf einem Worker, beim Warten auf einen, der neu startet, oder auf dem Hauptserver während einer [Ausfallsicherung](#ausfallsicherung). Sein Tooltip nennt den Zustand und den Grund. Änderungen in beiden Tabellen gelten erst, wenn du unter der Tabelle auf **Speichern** klickst. Die Einstellungen der Kamera zeigen dasselbe unter **Frame Worker**, beim Plugin der Statuspunkt auf seiner Karte.

## Kameras

Unter **Kamera-Zuweisungen** wählst du, welcher Worker jede Kamera dekodiert; als **Lokal** belassene Kameras bleiben auf dem Hauptserver.

Dekodiert wird dort, wo die Kamera zugewiesen ist, erkannt dort, wo das Erkennungs-Plugin läuft. Laufen eine Kamera und ein Erkennungs-Plugin, das ihre Bilder auswertet, auf verschiedenen Maschinen, geht jedes ausgewertete Bild über das Netzwerk: pro aktiver Kamera etwa 2,3 Mbit/s für Bewegung und 12 bis 74 Mbit/s für Objekterkennung bei 320 px Modelleingabe, bei 640 px das Vierfache. Ein Warnsymbol neben dem Kameranamen zeigt, wenn ihre Bilder diesen Weg nehmen. Halte eine Kamera und ihre Erkennungs-Plugins auf derselben Maschine.

## Plugins

Unter **Plugin-Zuweisungen** kann ein ganzes Plugin auf einem Worker statt auf dem Hauptserver laufen. Aufgeführt werden nur Worker, deren Fähigkeiten die Aufgabe erlauben, und einen Worker, dessen Plattform nicht zum Plugin passt, kannst du nicht wählen. Beim Verschieben eines Plugins fragt camera.ui vorher: Dateien, die es auf seiner Maschine ablegt, bleiben dort, etwa geladene Modelle, und auf der neuen startet es ohne sie. Der Worker installiert und startet das Plugin; konfiguriert wird es weiterhin ganz normal in der Oberfläche. Eine Plugin-Version für eine Plugin-API, die der Worker nicht kennt, wird vor der Installation abgelehnt, und die Meldung sagt, ob du den Worker aktualisieren oder eine andere Plugin-Version wählen sollst.

Ein Plugin-Update installiert die neue Version auf dem Worker neben der laufenden und schaltet dann mit einem Neustart um. Scheitert diese Installation, behält der Worker die vorige Version. Beim Deinstallieren verschwindet das Plugin auch vom Worker, seine Daten mit, wenn du sie entfernen lässt.

Ein Plugin auf einem Worker nutzt die Netzwerkadressen des Workers, nicht die **Server-Adressen** des Hauptservers. Wähle sie über **Worker bearbeiten** in der Worker-Liste; leer lauscht das Plugin auf allen. Eine Änderung startet die Plugins auf diesem Worker neu.

Manche Plugins liefern das Kamerabild von ihrer eigenen Maschine, Reolink zum Beispiel. Auf einem Worker schickt der Worker dieses Video an den HTTPS-Port des Masters, freigegeben werden muss dafür nichts.

Das NVR-Plugin speichert seine Aufnahmen auf der Maschine, auf der es läuft, auf einem Worker also auf dessen Platte. Aufnahmen aus einer Zeit, in der es woanders lief, etwa während einer [Ausfallsicherung](#ausfallsicherung), bleiben auf jener Maschine; die Timeline markiert diese Zeit mit einem Band, das die Maschine nennt.

## Ausfallsicherung

Worker melden sich alle 5 Sekunden beim Master. Hört der Master 15 Sekunden nichts von einem Worker, zeigt er ihn als nicht erreichbar, seine Kameras und Plugins bleiben aber, wo sie sind. Nach 25 Sekunden ohne Antwort fallen sie auf den Hauptserver zurück. Ein Plugin, das die Plattform des Hauptservers nicht ausführen kann, etwa eines nur für macOS, wartet stattdessen auf den Worker, und sein Status sagt das. Ein Worker, der den Master verliert, stoppt seine Kameras und Plugins nach 20 Sekunden, damit nichts auf zwei Maschinen gleichzeitig läuft. Ein kürzerer Ausfall ändert nichts: Kameras und Plugins laufen weiter und gleichen die Sensorzustände, die sich in der Zeit geändert haben, ab, sobald die Verbindung wieder steht. Antwortet der Worker wieder eine Minute lang, wandern seine Kameras und Plugins nacheinander zu ihm zurück; ein Worker, der immer wieder wegfällt, wartet länger, bis zu 10 Minuten.

Schalte **Ausweichen** bei einer Zuweisung aus, um eine Kamera oder ein Plugin auf seinem Worker zu halten. Es wartet dann ebenfalls auf den Worker, auch nach einem Fehler dort, und startet auf ihm, sobald er zurück ist. Das passt zu einem Plugin, das Dateien auf dem Worker ablegt, oder zu einem Hauptserver, der die Last nicht tragen könnte. Solange eine Kamera wartet, wertet camera.ui ihr Bild nicht aus; Live-Bild und Aufnahme laufen weiter.

Ein Neustart oder Update des Hauptservers lässt die Worker weiterlaufen: Ihre Kameras und Plugins laufen ohne Neustart weiter, sobald der Hauptserver wieder da ist. Ältere Versionen von Go-Plugins wie Reolink starten stattdessen einmal neu. Ein Worker, der neu startet oder sich aktualisiert, sagt das dem Master vorher, und seine Kameras und Plugins warten auf ihn (bis zu 30 Sekunden bei einem Neustart, 2 Minuten bei einem Update), bevor sie zurückfallen.
