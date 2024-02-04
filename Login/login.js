<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login</title>
  <link rel="stylesheet" href="login.css" />
</head>
<body>
  <div class="login-box">
    <h1>Login</h1>
    <form id="login-form">
      <label>Email</label>
      <input type="email" placeholder="Enter email" id="email" />
      <label>Password</label>
      <input type="password" placeholder="Enter password" id="password" />
      <div class="button">
        <input type="button" value="Login" id="login-button" />
      </div>
    </form>
    <p class="para-2">
      Don't have an account?
      <a href="../Signup/signup.html" id="signup">Sign up here</a>
    </p>

    <p id="error-message"></p>
  </div>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyD-SUlsGq4SLpVFqu3m1NdUhzMEyZKmb8E",
      authDomain: "recepie-book-a6435.firebaseapp.com",
      projectId: "recepie-book-a6435",
      storageBucket: "recepie-book-a6435.appspot.com",
      messagingSenderId: "290281355439",
      appId: "1:290281355439:web:8b59a2abf10160d5eabc5a",
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    loginButton.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User logged in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessageText = error.message;
          errorMessage.textContent = errorMessageText;
        });
    });
  </script>
</body>
</html>
