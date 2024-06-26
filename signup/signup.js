// function signup() {
//   var firstName = document.querySelector('input[name="first-name"]').value;
//   var lastName = document.querySelector('input[name="last-name"]').value;
//   var email = document.querySelector('input[type="email"]').value;
//   var password = document.querySelector('input[type="password"]').value;
//   var confirmPassword = document.querySelector(
//     'input[name="confirm-password"]'
//   ).value;

//   if (password !== confirmPassword) {
//     console.error("Passwords do not match");
//     return;
//   }
 
//   console.log("First Name:", firstName);
//   console.log("Last Name:", lastName);
//   console.log("Email:", email);
//   console.log("Password:", password);
// }

// var themeMode = localStorage.getItem("theme");

// body.classList.add(themeMode);

// document
//   .querySelector('input[type="button"]')
//   .addEventListener("click", signup);


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const database = getDatabase(app);
const auth = getAuth(app);

const signupButton = document.getElementById("signup-button");
const errorMessage = document.getElementById("error-message");

signupButton.addEventListener("click", () => {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("ConfirmPassword").value.trim();

  // Validation for letters only in first name and last name
  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Only accepts emails ending in @gmail.com

  if (!namePattern.test(firstName)) {
    alert("First name can only contain letters and spaces.");
    return;
  }

  if (!namePattern.test(lastName)) {
    alert("Last name can only contain letters and spaces.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid Gmail address (e.g., user123@gmail.com).");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please enter the same password in both fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully!");
      // Optionally, redirect the user to a different page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessageText = error.message;
      errorMessage.textContent = errorMessageText;
    });
});

