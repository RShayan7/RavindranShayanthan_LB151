# RavindranShayanthan_LB151

# Word-Guessing-Game
Dieses Projekt ist ein Wörterratespiel, das die Firebase-Authentifizierungs-API verwendet, um Benutzer zu authentifizieren und ihre Eingaben zu verfolgen. Die Anwendung ist in HTML, CSS und JavaScript geschrieben und läuft auf der Firebase-Webseite. 

# Einrichtung der Firebase Authentication-API

1.)   Erstellen Sie ein Firebase-Konto und eine neue Firebase-Projektseite, indem Sie auf der Firebase-Webseite ein neues Projekt erstellen.

2.)   Fügen Sie Ihre Anwendung hinzu, indem Sie auf die Schaltfläche "App hinzufügen" klicken und die erforderlichen Informationen bereitstellen.

3.)   Aktivieren Sie die Firebase Authentication-API, indem Sie auf der linken Seite des Firebase-Dashboards auf "Authentication" klicken und dann auf die Schaltfläche "Get started" klicken.

4.)   Wählen Sie die Art der Authentifizierung aus, die Sie verwenden möchten. Firebase bietet verschiedene Optionen, wie z.B. E-Mail/Passwort-Authentifizierung, Google-Authentifizierung, Facebook-Authentifizierung, Twitter-Authentifizierung und mehr.

5.)   Konfigurieren Sie Ihre Authentifizierungsoptionen und passen Sie sie an Ihre Anforderungen an.

6.)   Verbinden Sie Ihre Anwendung mit Firebase, indem Sie die bereitgestellten Konfigurationsinformationen in Ihrem JavaScript-Code verwenden. Sie finden diese Informationen, indem Sie auf der Firebase-Webseite auf die Schaltfläche "Project Settings" klicken und dann auf die Registerkarte "Firebase SDK Snippet".

7.)   Veröffentlichen Sie Ihre Anwendung auf der Firebase-Webseite. Klicken Sie dazu auf der Firebase-Webseite auf "Hosting" und folgen Sie den Anweisungen zur Veröffentlichung Ihrer Anwendung auf der Firebase-Webseite.


Nachdem Sie diese Schritte ausgeführt haben, sollte Ihre Anwendung mit der Firebase Authentication-API verknüpft und auf der Firebase-Webseite verfügbar sein. 

# Datenbank Wiederherstellung

Um ein Backup Ihrer Firebase-Datenbank zu erstellen, können Sie das Firebase Command Line Interface (CLI) verwenden. Führen Sie dazu die folgenden Schritte aus:

1.)   Installieren Sie das Firebase CLI mit dem Befehl npm install -g firebase-tools.
2.)   Authentifizieren Sie sich mit Ihrem Firebase-Konto, indem Sie den Befehl firebase login ausführen.
3.)   Navigieren Sie im Terminal zum Projektverzeichnis.
4.)   Führen Sie firebase init aus und wählen Sie die Firebase-Projekt-Option aus.
5.)   Wählen Sie die Firebase Realtime Database-Option aus.
6.)   Erstellen Sie eine neue Datenbank oder wählen Sie eine vorhandene aus.
7.)   Führen Sie firebase database:get / > backup.json aus, um Ihre Datenbank in eine JSON-Datei zu exportieren.

Um Ihre Datenbank wiederherzustellen, können Sie den Befehl firebase database:set / backup.json ausführen und die exportierte JSON-Datei als Eingabedatei verwenden. Stellen Sie sicher, dass Sie Ihre Datenbank vor dem Wiederherstellen sichern, um Datenverlust zu vermeiden.
