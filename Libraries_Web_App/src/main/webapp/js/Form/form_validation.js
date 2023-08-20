function checkPassword() {
    let password1 = document.querySelector("#f_password").value;
    let password2 = document.querySelector("#f_password_repeat").value;

    if (password2 === '') {
        // If you confirm password not entered
        document.getElementById("password_message_repeat").innerHTML = "Empty Repeated Password ";
    } else if (password1 !== password2) {
        // If Not same return False.
        document.getElementById("password_message_repeat").innerHTML = "Different Passwords";
    } else {
        // If same return True.
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
            document.getElementById("password_message").innerHTML = "<style> #password_message {color: red;}</style>Weak Password";
        } else {
            if (parseInt((password1.length - password1.replace(/[-().&@?'#,*/;+]/g, '').length)) >= 2 &&
                parseInt((password1.length - password1.replace(/[A-Z]/g, '').length)) >= 1 &&
                parseInt((password1.length - password1.replace(/[a-z]/g, '').length)) >= 1) {
                document.getElementById("password_message").innerHTML = "<style> #password_message {color: green;}</style>Strong Password";
            } else {
                document.getElementById("password_message").innerHTML = "<style> #password_message {color: darkorange;}</style>Medium Password";
            }
        }
    }
}

function password_reveal() {
    const type = document.querySelector("#f_password").getAttribute('type') === "password" ? "text" : "password";
    document.querySelector("#f_password").setAttribute("type", type);
}

function password_reveal_repeat() {
    const type = document.querySelector("#f_password_repeat").getAttribute('type') === "password" ? "text" : "password";
    document.querySelector("#f_password_repeat").setAttribute("type", type);
}

function checkUsers() {
    let type = document.getElementsByName('f_type');
    let finalType;


    for (let i = 0; i < type.length; i++) {
        if (type[i].checked)
            finalType = type[i].value;
    }

    if (finalType === "student") {
        let type_education = document.getElementsByName('f_student_level');
        let finalEducation

        let email = document.querySelector("#f_email").value;

        for (let i = 0; i < type_education.length; i++) {
            if (type_education[i].checked)
                finalEducation = type_education[i].value;
        }

        if (finalEducation === "University_Of_Crete" && email.slice(email.length - 6) === "uoc.gr") {
            document.getElementById("student_message").innerHTML = "Correct Mail";
        } else if (finalEducation === "EL_ME_PA" && email.slice(email.length - 10) === "helmepa.gr") {
            document.getElementById("student_message").innerHTML = "Correct Mail";
        } else if (finalEducation === "TUC" && email.slice(email.length - 6) === "tuc.gr") {
            document.getElementById("student_message").innerHTML = "Correct Mail";
        } else {
            document.getElementById("student_message").innerHTML = "Wrong Mail";
        }

        if (document.querySelector("#f_Student_Identity_Expiration_date").value > document.querySelector("#f_Student_Identity_Start_Date").value) {
            let finalStudentType;
            let type_Student = document.getElementsByName('f_type_student');

            let expir = new Date(document.querySelector("#f_Student_Identity_Expiration_date").value);
            let start = new Date(document.querySelector("#f_Student_Identity_Start_Date").value);

            for (let i = 0; i < type_Student.length; i++) {
                if (type_Student[i].checked)
                    finalStudentType = type_Student[i].value;
            }
            console.log(finalStudentType);
            console.log((parseInt(expir.getFullYear()) - parseInt(start.getFullYear())));
            if (finalStudentType === "undergraduate" && (parseInt(expir.getFullYear()) - parseInt(start.getFullYear())) < 6) {
                document.getElementById("dates_message").innerHTML = "<style> #dates_message {color: green;}</style>Correct Dates";
            } else if (finalStudentType === "postgraduate" && (parseInt(expir.getFullYear()) - parseInt(start.getFullYear())) < 2) {
                document.getElementById("dates_message").innerHTML = "<style> #dates_message {color: green;}</style>Correct Dates";
            } else if (finalStudentType === "phd" && (parseInt(expir.getFullYear()) - parseInt(start.getFullYear())) < 5) {
                document.getElementById("dates_message").innerHTML = "<style> #dates_message {color: green;}</style>Correct Dates";
            } else {
                document.getElementById("dates_message").innerHTML = "<style> #dates_message {color: red;}</style>Wrong Dates";
            }
        } else {
            document.getElementById("dates_message").innerHTML = "<style> #dates_message {color: red;}</style>Wrong Dates";
            console.log("Wrong Dates")
        }
    }
}