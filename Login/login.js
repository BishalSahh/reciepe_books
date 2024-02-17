import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBrxLEp7uHB4LpYlradeW1P-jAtHJu3usk",
  authDomain: "projectsamosa-a7511.firebaseapp.com",
  projectId: "projectsamosa-a7511",
  storageBucket: "projectsamosa-a7511.appspot.com",
  messagingSenderId: "142486016333",
  appId: "1:142486016333:web:ae101ac20bfaeacc766704",
  measurementId: "G-SV6Y54B4ZK"
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
