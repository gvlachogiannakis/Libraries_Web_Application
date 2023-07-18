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

            if (valueType === "students")
                window.location.replace("studentsHome.jsp?username_login=" + document.querySelector("#username_login").value);
            else if (valueType === "librarians")
                window.location.replace("librariansHome.jsp?username_login=" + document.querySelector("#username_login").value);
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

function createTableFromJSON(data) {
    var html = "<table><tr><th>Category</th><th>Value</th></tr>";
    for (const x in data) {
        var category = x;
        var value = data[x];
        html += "<tr><td>" + category + "</td><td>" + value + "</td></tr>";
    }
    html += "</table>";
    return html;

}

function loginUserScript() {
    console.log("hello world...");
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 500) {
            $("#ajaxContent").html("Error");
            console.log("Error");
        } else if (xhr.readyState === 4 && xhr.status === 200) {
            $("#ajaxContent").html(createTableFromJSON(JSON.parse(xhr.responseText)));
            console.log("Successful Login");
        } else if (xhr.status !== 200) {
            $("#ajaxContent").html("User not exists or incorrect password");
            console.log("Failed Login");
        }

    };
    const data = $('#loginForm').serialize();
    xhr.open('GET', 'GetStudent?' + data);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}
