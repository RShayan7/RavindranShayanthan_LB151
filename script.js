// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCIFTGTaVFt45FoyMbTYmGDlkbzE-yqKAU",
    authDomain: "signup-form-b852a.firebaseapp.com",
    projectId: "signup-form-b852a",
    storageBucket: "signup-form-b852a.appspot.com",
    messagingSenderId: "624575145056",
    appId: "1:624575145056:web:88a771e81a5d307cc48f05"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth =  getAuth()

  //getting All the Objects of html
  var firstname = document.getElementById("firstname")
  var lastname = document.getElementById("lastname")
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  //making an function for staring data
  window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value
    };
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        window.replace('login.html')
        alert("Signup Successfully")
    })
    .catch(function(err){
        alert("error in" + err)
    });
    console.log(obj);
  };