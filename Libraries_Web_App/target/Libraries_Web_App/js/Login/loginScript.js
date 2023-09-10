function loginStudentScript() {
    const xhr = new XMLHttpRequest();
    console.log("login Call");
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let valueType, checkedType = document.getElementsByName("f_type_login");
            for (let i = 0; i < checkedType.length; i++) {
                if (checkedType[i].checked)
                    valueType = checkedType[i].value;
            }
            document.getElementById("error").style.color = "Green";
            document.getElementById("error").innerHTML = "Succeed";

            if (valueType === "students") {
                window.location.replace("studentsHome.jsp?username=" + document.querySelector("#username_login").value + "&type=" + valueType);
            }
            else if (valueType === "librarians")
                window.location.replace("librariansHome.jsp?username=" + document.querySelector("#username_login").value + "&type=" + valueType);
        } else if (xhr.status !== 200) {
            document.getElementById("error").style.color = "Red";
            document.getElementById("error").innerHTML = "Wrong Username, Password Or Type Or the user does not Exist";
            console.log("Error: " + xhr.status);
        } else if (xhr.readyState === 4 && xhr.status === 500) {
            document.getElementById("error").style.color = "Red";
            document.getElementById("error").innerHTML = "Error 500";
            console.log("Error 500");
        }
    };

    let valueType, checkedType = document.getElementsByName("f_type_login");
    for (let i = 0; i < checkedType.length; i++) {
        if (checkedType[i].checked)
            valueType = checkedType[i].value;
    }

    xhr.open('GET', "LoginServlet?username_login=" + document.querySelector("#username_login").value +
        "&password_login=" + document.querySelector("#password_login").value + "&f_type_login=" + valueType);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(document.querySelector("#username_login").value,
        document.querySelector("#password_login").value, valueType);

}
