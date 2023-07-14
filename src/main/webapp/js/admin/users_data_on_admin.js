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