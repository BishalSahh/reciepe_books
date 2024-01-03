
    function signup() {
        var firstName = document.querySelector('input[name="first-name"]').value;
        var lastName = document.querySelector('input[name="last-name"]').value;
        var email = document.querySelector('input[type="email"]').value;
        var password = document.querySelector('input[type="password"]').value;
        var confirmPassword = document.querySelector('input[name="confirm-password"]').value;

        


        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }

       
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);

        
    }

   
    document.querySelector('input[type="button"]').addEventListener('click', signup);
