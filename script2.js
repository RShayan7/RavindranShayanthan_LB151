<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Konfiguration von Firebase
  const firebaseConfig = {
  apiKey: "AIzaSyAEAY0iEmaJbR5dzv0FFTooJZdxCerL17g",
  authDomain: "login-form-622af.firebaseapp.com",
  projectId: "login-form-622af",
  storageBucket: "login-form-622af.appspot.com",
  messagingSenderId: "671687103061",
  appId: "1:671687103061:web:d961cee6aa88a15703fadc"
};

// Firebase initialisieren
firebase.initializeApp(firebaseConfig);

// Firebase Authentifizierung aktivieren
var auth = firebase.auth();

</script>

const auth = firebase.auth();

// Elemente abrufen
var loginButton = document.getElementById("login-button");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Anmelde-Event-Listener hinzufügen
loginButton.addEventListener("click", function() {
  var email = emailInput.value;
  var password = passwordInput.value;
  
  // Firebase Authentifizierung
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      // Erfolgreicher Login, weiterleiten
      window.location.href = "homescreen.html";
    })
    .catch(function(error) {
      // Fehler behandeln
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});


