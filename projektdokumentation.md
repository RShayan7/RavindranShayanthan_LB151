# Projekt-Dokumentation

Ravindran

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 09.02.2023      | 0.0.1   | Heute habe ich die Navbar implementiert. |
| 12.02.2023      | 0.0.2   | Heute habe ich versucht das Login mit der Firebase zu verknüpfen.      |
| 16.02.2023     | 0.0.3   |  Heute habe ich nach den Spielfunktionen recherchiert.                         |
| 23.02.2023      | 0.0.4   | Heute habe ich die allgemeine Spielfunktion implementiert.                    |
| 24.02.2023     | 0.0.5   | Heute habe ich versucht die Seite für die Highscore-List zu implementieren.    |
| 28.02.2023      | 0.0.6   | Heute habe ich die nötigen Verbesserungen im Code gemacht.                                                             |


# 0 Ihr Projekt

Das Projekt ist die Entwicklung einer Webbapplikation, die eine abgewandelte Version des Glücksrad-Spiels darstellt, bei dem der Spieler Wörter oder Redewendungen in einem Gitter erraten muss, wobei Satzzeichen und Ziffern bereits vorgegeben sind. 

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Benutzerinterfaces
* Tier 2 (Webserver): Sendungen der verschiedenen Aktionen vom Benutzer
* Tier 3 (Application Server): Herstellung der Verbindung mit der Datenbank, Datenbankanfragen Durchführung 
* Tier 4 (Dataserver): Speichern/Herabrufen der Daten bzw. auch der eigegebenen Daten

# 2 Technologie

Ich verwende für das Spiel die Technologien HTML, CSS und JavaScript und verwende dazu eine Firebase für die Authentifizierung und Datenbankverwaltung.

# 3 Datenbank

Wie steuern Sie Ihre Datenbank an?

Für die Datenbankverwaltung werde ich Firebase verwenden, den Sie bietet eine Echtzeit-Datenbank, die in Echtzeit mit anderen Benutzern synchronisiert werden kann und somit für Mehrspieler-Online-Spiele geeignet ist. Sie bietet auch eine einfache Möglichkeit, eine Datenbankverbindung zu erstellen und Daten zu speichern und abzurufen und eine JavaScript-Bibliothek, die in das Spiel eingebunden werden kann und die Verbindung mit der Firebase-Datenbank ermöglicht. Im Spiel können die Benutzerdaten, wie Benutzername und Passwort, in der Firebase-Datenbank gespeichert werden. Die bereits eingegebenen Buchstaben können ebenfalls in der Datenbank gespeichert werden, um sicherzustellen, dass der gleiche Buchstabe nicht erneut eingegeben wird. Wenn der Benutzer das richtige Wort erraten hat, kann auch eine Bestenliste in der Firebase-Datenbank gespeichert werden, um die besten Spieler und ihre Punktzahl zu verfolgen.

Wie ist das Interface aufgebaut? 

1.) Login-Seite: 
Diese Seite würde dem Administrator ermöglichen, sich durch die Eingabe von Benutzername und Passwort zu authentifizieren.

2.) Administration-Seite: 
Diese Seite würde dem Administrator ermöglichen, Phrasen und Rätselwörter zu erstellen, zu bearbeiten und zu löschen, Kategorien zu erstellen und Rätsel einer Kategorie zuzuordnen.

3.) Spiel-Seite: 
Diese Seite würde dem Benutzer ermöglichen: das Spiel zu starten und Buchstaben in den Lücken zu raten, den Kontostand und die Lebenspunkte anzuzeigen, seinen Namen einzugeben und das Rätsel zu lösen.

4.) Highscore-Seite: Diese Seite würde eine Liste der Highscores anzeigen, sortiert nach Rang, der durch die Höhe des Geldbetrags bestimmt wird, die Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl der Spielrunden enthalten. Es würde auch ermöglichen, einzelne Einträge der Highscore-Liste von Administratoren zu löschen.

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                                                                                                              |
| ---- | --------------- | ---- | ----------------------------------                                                                                        |
| 1    |     Muss            | Funktional  | Als ein Administrator möchte ich mich durch Benutzername und Passwort authentifizieren können, damit ich Zugriff auf                                          die Administrationstools habe.                                                                                     |
| 2    |     Muss            | Funktional     | Als ein Administrator möchte ich Rätselwörter und Phrasen anlegen, ändern und löschen können, damit ich das Spiel jederzeit                                   aktualisieren kann.                                                                                                      |
| 3    |        Kann         | Funktional     | Als ein Administrator möchte ich Kategorien anlegen und Rätselwörter einer Kategorie zuordnen können, damit ich die                                           Rätselwörter organisieren kann.                                                                              |
| 4    |     Muss            | Funktional      | Als ein Kandidat möchte ich einen Buchstaben eingeben können, damit ich das richtige Wort erraten kann.                                                                                                |
| A    |      Muss           | Funktional      | Als ein Kandidat möchte ich bereits jeden erratenen Buchtsaben sehen können, damit ich meinen Fortschritt im Spiel verfolgen kann.                                                                                                    |
| 5    |      Muss           | Funktional     | Als ein Kandidat möchte ich benachrichtigt werden sollen bei richtigen erratenen Wort, damit ich keine Fehler mache.                                                                                             |
| B    |      Kann           | Qualität     | Als ein Kandidat möchte ich die Veränderungen meiner Lebenspunkte sehen können, damit ich meinen Fortschritt im Spiel verfolgen kann.                                                                           |
| 6   |    Muss             | Funktional     | Als ein Kandidat möchte ich eine aufsteigend sortierte Highscore-Liste sehen, die Rang, Name, Zeitpunkt, Geldbetrag und Anzahl der Spielrunden enthält, damit ich meine Leistung im Vergleich zu anderen Spielern einschätzen kann.                        |
| 7    |      Muss           | Funktional     | Als ein Kandidat möchte ich jederzeit die Möglichkeit haben, das Spiel neuzustarten, damit ich flexibel entscheiden kann.|






 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |  Applikation ist gestartet.|  1.) Startseite geöffnet <br> 2.) Eingabe in den Login-Feldern       |   Weiterleitung zur nächsten Seite                |
| 2.1  |   Applikation ist gestartet          |  1.) Startseite geöffnet. <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 3.) Spiel starten   | Spiel wird gestartet|
| 3.1  |  Applikation ist gestartet|  1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br>  4.) auf Button "Starten" klicken <br> 5.) einen richtigen Buchstaben raten bzw. im Eingabefeld eingeben   | In der Lücke wird der richtige Buchstabe angezeigt.|
| A.1  |  Applikation ist gestartet   | 1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) auf Button "Starten" klicken  <br> 5.) ein zufälliger Buchstabe wird eingegeben | Unter den Lücken erscheinen, die bereits eingegeben Buchstaben.       |
| 4.1  |  Applikation ist gestartet   | 1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) auf Button "Starten" klicken  <br> 5.) ein bereits eingegebener Buchstabe wird eingegeben | Es erscheint eine Meldung, dass der gleiche Buchstabe eingegeben wurde.      |
| 5.1  |    Applikation ist gestartet   | 1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) auf Button "Starten" klicken  <br> 5.) alle Buchstaben werden korrekt eingegeben | Es erscheint eine Meldung, wobei der Spieler gratuliert wird für das richtig erratene Wort.|
| 6.1  |  Applikation ist gestartet   | 1.) Startseite geöffnet <br> 2.) Anmelden <br> 3.) Navigaton -> *Spiel* wählen <br> 4.) auf Button "Starten" klicken  <br> 5.) mehr als 6 Versuche werden betätigt | Es erscheint eine Meldung, dass der Spieler, leider das Wort nicht erraten hat und das Spiel wird dann beendet.  |
| 7.1  |  Applikation ist gestartet   | 1.) Startseite geöffnet <br> 2.) Spieler meldet sich an  | Der Spieler wird auf eine andere Seite weitergleitet. |






# 5 Prototyp
Game-Screen: <br>
![image](https://user-images.githubusercontent.com/89385736/220881232-9d917b4f-5273-48fd-8f00-5e14c9fdafc3.png)
<br>
Admin-Screen: <br>
![image](https://user-images.githubusercontent.com/89385736/220882519-716eb70c-f0c6-4a1b-ae68-e9c50146a548.png)



# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| 1.1  |  13.02.2023     |          |        |
| 2.1 |    15.02.2023   |          |        |
| 3.1  |   15.02.2023    |          |        |
| 4.1 |  23.02.2023     |          |        |
| A.1  |  23.02.2023      |          |        |
| 5.1 |  23.02.2023      |          |        |
| B.1  | 24.02.2023       |          |        |
| 6.1 |    24.02.2023   |          |        |
| 7.1  |  28.02.2023     |          |        |



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
| 2.1 |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
