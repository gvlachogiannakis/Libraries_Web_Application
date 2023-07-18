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
                document.getElementById("dates_message").innerHTML = "Correct Dates";
            } else if (finalStudentType === "postgraduate" && (parseInt(expir.getFullYear()) - parseInt(start.getFullYear())) < 2) {
                document.getElementById("dates_message").innerHTML = "Correct Dates";
            } else if (finalStudentType === "phd" && (parseInt(expir.getFullYear()) - parseInt(start.getFullYear())) < 5) {
                document.getElementById("dates_message").innerHTML = "Correct Dates";
            } else {
                document.getElementById("dates_message").innerHTML = "Wrong Dates";
            }
        } else {
            document.getElementById("dates_message").innerHTML = "Wrong Dates";
            console.log("Wrong Dates")
        }
    }
}
