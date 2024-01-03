
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            
            var user = userCredential.user;
            console.log("User logged in:", user);
           
        })
        .catch((error) => {
           
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Login error:", errorCode, errorMessage);
        });
}
