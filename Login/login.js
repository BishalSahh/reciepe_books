import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-SUlsGq4SLpVFqu3m1NdUhzMEyZKmb8E",
  authDomain: "recepie-book-a6435.firebaseapp.com",
  databaseURL: "https://recepie-book-a6435-default-rtdb.firebaseio.com",
  projectId: "recepie-book-a6435",
  storageBucket: "recepie-book-a6435.appspot.com",
  messagingSenderId: "290281355439",
  appId: "1:290281355439:web:8b59a2abf10160d5eabc5a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login-button").addEventListener("click", function () {
  login();
});

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      localStorage.setItem("uid", user.uid)
      alert("User logged in");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Login error:", errorCode, errorMessage);
    });
}
