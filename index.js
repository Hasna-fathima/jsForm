function validateForm() {
    var firstname = document.forms["myForm"]["Firstname"].value;
    var lastname = document.forms["myForm"]["lastname"].value;
    var username = document.forms["myForm"]["username"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
    var emailError = document.getElementById("emailError");
    var isValid = true;

    // Email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstname == "") {
        document.getElementById("firstnameError").innerText = "Name must be filled out";
        isValid = false;
    } else {
        document.getElementById("firstnameError").innerText = " ";
    }
    if (lastname == "") {
        document.getElementById("lastnameError").innerText = "Name must be filled out";
        isValid = false;
    } else {
        document.getElementById("lastnameError").innerText = " ";
    }
    if (username == "") {
        document.getElementById("usernameError").innerText = "Name must be filled out";
        isValid = false;
    } else {
        document.getElementById("usernameError").innerText = " ";
    }
    if (email == "") {
        emailError.innerText = "Email must be filled out";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Invalid email address";
        isValid = false;
    } else {
        emailError.innerText = " ";
    }
    if (password == "") {
        document.getElementById("passwordError").innerText = "Password must be filled out";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long";
        isValid = false;
    } else {
        document.getElementById("passwordError").innerText = " ";
    }
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").innerText = " ";
    }

    return isValid;
}
function clearError(errorId){
    document.getElementById(errorId).innerText=""
}