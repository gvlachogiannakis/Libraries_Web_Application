function showAdminPage() {
    let username = document.getElementById("admin_username").value;
    let password = document.getElementById("admin_password").value;

    if (username === "admin" && password === "admin12*") {
        alert("Login Successful!");
        window.location.replace('admin.html');
    } else {
        $("#ajaxContent").html("Wrong Credentials!");
    }
}

function loginPOST() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Login Successful!");
            window.location.replace('admin.html');
        } else if (xhr.status !== 200) {
            $("#ajaxContent").html("Wrong Credentials!")
        }
    };

    var data = $("#loginForm").serialize();
    xhr.open('POST', 'adminLogin');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}