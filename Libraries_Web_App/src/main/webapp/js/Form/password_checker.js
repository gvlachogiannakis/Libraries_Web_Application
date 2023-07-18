function checkPassword() {
    let password1 = document.querySelector("#f_password").value;
    let password2 = document.querySelector("#f_password_repeat").value;

    // If you confirm password not entered
    if (password2 === '') {
        document.getElementById("password_message_repeat").innerHTML = "Empty Repeated Password ";
    }

    // If Not same return False.
    else if (password1 !== password2) {
        document.getElementById("password_message_repeat").innerHTML = "Different Passwords";
    }

    // If same return True.
    else {
        document.getElementById("password_message_repeat").innerHTML = "Password Matches";
    }

}


function password_strength() {
    let password1 = document.querySelector("#f_password").value;

    //Check the strength of the password
    if (password1.includes("helmepa") || password1.includes("uoc") || password1.includes("tuc")) {
        document.getElementById("password_message").innerHTML = "Illegal Input Password<br>You can't use the Words:<br>helmepa, uoc , tuc.";
    } else {
        if (parseFloat(password1.replace(/[^0-9]/g, '').length / password1.length) >= 0.5) {
            document.getElementById("password_message").innerHTML = "Weak Password";
        } else {
            if (parseInt((password1.length - password1.replace(/[-().&@?'#,*/;+]/g, '').length)) >= 2 &&
                parseInt((password1.length - password1.replace(/[A-Z]/g, '').length)) >= 1 &&
                parseInt((password1.length - password1.replace(/[a-z]/g, '').length)) >= 1) {
                document.getElementById("password_message").innerHTML = "Strong Password";
            } else {
                document.getElementById("password_message").innerHTML = "Medium Password";
            }
        }
    }
}