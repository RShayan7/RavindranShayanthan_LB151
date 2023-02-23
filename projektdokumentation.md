# Projekt-Dokumentation

Ravindran

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

Das Projekt ist die Entwicklung einer Webbapplikation, die eine abgewandelte Version des Glücksrad-Spiels darstellt, bei dem der Spieler Wörter oder Redewendungen in einem Gitter erraten muss, wobei Satzzeichen und Ziffern bereits vorgegeben sind. 

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Benutzerinterfaces
* Tier 2 (Webserver): Sendungen der verschiedenen Aktionen vom Benutzer
* Tier 3 (Application Server): Herstellung der Verbindung mit der Datenbank, Datenbankanfragen Durchführung 
* Tier 4 (Dataserver): Speichern/Herabrufen der Daten bzw. auch der eigegebenen Daten

# 2 Technologie

Ich verwende ich das Framework React.js.

# 3 Datenbank

Wie steuern Sie Ihre Datenbank an?

Die Datenbank wird mithilfe der Middleware wie Express.js gesteuert, um die Datenbankanfragen von der React-Anwendung aus auszuführen. Diese Middleware kann verwendet werden, um Anfragen von der React-Anwendung zu empfangen und sie an die Datenbank weiterzuleiten, die Ergebnisse zurückzugeben und sie an die React-Anwendung zurückzusenden.

Wie ist das Interface aufgebaut? 

1.) Login-Seite: 
Diese Seite würde dem Administrator ermöglichen, sich durch die Eingabe von Benutzername und Passwort zu authentifizieren.

2.) Administration-Seite: 
Diese Seite würde dem Administrator ermöglichen, Phrasen und Rätselwörter zu erstellen, zu bearbeiten und zu löschen, Kategorien zu erstellen und Rätsel einer Kategorie zuzuordnen.

3.) Spiel-Seite: 
Diese Seite würde dem Benutzer ermöglichen, das Glücksrad zu drehen, Buchstaben auf der Rate-Wand zu raten, den Kontostand und die Lebenspunkte anzuzeigen, seinen Namen einzugeben und das Rätsel zu lösen.

4.) Highscore-Seite: Diese Seite würde eine Liste der Highscores anzeigen, sortiert nach Rang, der durch die Höhe des Geldbetrags bestimmt wird, die Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl der Spielrunden enthalten. Es würde auch ermöglichen, einzelne Einträge der Highscore-Liste von Administratoren zu löschen.

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                                                                                                              |
| ---- | --------------- | ---- | ----------------------------------                                                                                        |
| 1    |     Muss            | Funktional  | Als ein Administrator möchte ich mich durch Benutzername und Passwort authentifizieren können, damit ich Zugriff auf                                          die Administrationstools habe.                                                                                     |
| 2    |     Muss            | Funktional     | Als ein Administrator möchte ich Rätselwörter und Phrasen anlegen, ändern und löschen können, damit ich das Spiel jederzeit                                   aktualisieren kann.                                                                                                      |
| 3    |        Kann         | Funktional     | Als ein Administrator möchte ich Kategorien anlegen und Rätselwörter einer Kategorie zuordnen können, damit ich die                                           Rätselwörter organisieren kann.                                                                              |
| 4    |     Muss            | Funktional      | Als ein Kandidat möchte ich meinen Namen eingeben können, damit ich auf der Highscore-Liste erscheine.                                                                                                |
| 5    |      Muss           | Funktional      | Als ein Kandidat möchte ich meinen Kontostand zu jeder Zeit sehen können, damit ich meinen Fortschritt im Spiel verfolgen kann.                                                                                                    |
| 6    |      Muss           | Funktional     | Als ein Kandidat möchte ich meine Lebenspunkte können, damit ich meinen Fortschritt im Spiel verfolgen kann.                                                                                                |
| A    |      Kann           | Qualität     | Als ein Kandidat möchte ich die Veränderungen meiner Lebenspunkte sehen können, damit ich meinen Fortschritt im Spiel verfolgen kann.                                                                                                |
| B    |      Kann           | Qualität     |  Als ein Kandidat möchte ich die Farbe im Spiel ändern können, damit die Übersichtlichkeit und Wohl-Gefühl angenehm ist.                                                              |
| 8    |    Muss             | Funktional     | Als ein Kandidat möchte ich eine aufsteigend sortierte Highscore-Liste sehen, die Rang, Name, Zeitpunkt, Geldbetrag und Anzahl der Spielrunden enthält, damit ich meine Leistung im Vergleich zu anderen Spielern einschätzen kann.                        |
| 9    |      Muss           | Funktional     | Als ein Kandidat möchte ich jederzeit die Möglichkeit haben, entweder weiterzuspielen oder das Spiel zu beenden und meinen Gewinn in die Highscore-Liste zu übernehmen, damit ich flexibel entscheiden kann, wann ich meinen Erfolg teilen möchte.                              |
| 10    |    Muss             | Rand     | Als ein Kandidat möchte ich die Anzahl meiner Spielrunden gezählt wissen, damit ich meine Leistung im Spiel einschätzen kann.  |





 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |  Applikation ist gestartet.|  1.) Startseite geöffnet <br> 2.) Eingabe in den Login-Feldern       |   Weiterleitung zur nächsten Seite                |
| 2.1  |   Applikation ist gestartet          |  1.) Startseite geöffnet. <br> 2.) Anmelden <br> 3.) Navigaton -> *Rätselwort* wählen <br> 3.) Bestehende Rätselwörter auswählen und löschen/erstellen.      |       Rätselwor wird gelöscht und es wurde ein neues Rätselwort erstellt.            |
| 3.1  |  Applikation ist gestartet|  1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Kategorien* wählen <br>  4.) bestehende Rätselwörter auswählen und auf Button "verschieben" klicken und Kateogrie auswählen.  |     Rätselwort wird der gewünschten Kategorie ausgewählt.   |
| 4.1  |  Applikation ist gestartet   | 1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) Spiel spielen <br> 5.) Benutzer wird gefragt, nach Name, damit dies in der Highscore-List eingetragen wird. <br> 6.) Benutzer gibt Name ein.        | Der Eingegebene Name schein inder Highscore-List.        |
| 5.1  |  Applikation ist gestartet|  1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) Spiel spielen <br> 5.) Während dem Spiel sieht der Benutzer oben rechts, sein Kontostand.       | Benutzer kann während dem Spiel oben rechts sein Kontostand sehen.               |
| 6.1  |   Applikation ist gestartet  |1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) Spiel spielen  | Benutzer kann während dem Spiel oben rechts seine Lebenspunkte sehen.      |
| A.1  |  Applikation ist gestartet|1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) Spiel spielen      | Benutzer kann während dem Spiel seine Lebenspunkte ändern sehen, welche sich bei Verlust oder Gewinn immer ändern.     |
| B.1  | Applikation ist gestartet|1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Einstellung* wählen <br> 4.) Farbe auswählen->für den Hintergrund|    Ausgewählte Farbe erscheint im Hintergrund         |
| 8.1  | Applikation ist gestartet   | 1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) Highscore-List rechts sichtbar <br> 5.) Unter Highscore-List Klick auf Button "aufsteigend sortieren"           |         Highscore-List wird aufsteigend sortiert.          |
| 9.1  |  Applikation ist gestartet| 1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) Spiel spielen <br> 5.) Wenn das Spiel kann unter rechts, bei Klick auf Button "Spiel neu starten" oder "Spiel beenden"        | Bei Klick auf neu starten wird das Spiel neu geladen. Bei Klick auf beenden wird man auf die auf die Home-Seite weitergeleitet.                  |
| 10.1  |   Applikation ist gestartet    |  1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) Spiel spielen       | Bei jeder Runde wird die Anzahl-Runden oben links angezeigt, auch während dem Spielen.                  |




# 5 Prototyp
Game-Screen: <br>
![image](https://user-images.githubusercontent.com/89385736/220881232-9d917b4f-5273-48fd-8f00-5e14c9fdafc3.png)
Admin-Screen: <br>
![image](https://user-images.githubusercontent.com/89385736/220882519-716eb70c-f0c6-4a1b-ae68-e9c50146a548.png)



# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
