$(document).ready(function() {
    isLoggedIn();
});

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

function isLoggedIn() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log("isloggedin just called...");
        if (xhr.readyState === 4 && xhr.status === 200) {
            $("ajaxContent").html("Welcome again " + xhr.responseText);
        }  else if (xhr.status !== 200) {
             window.location.replace('index.html');
        }
    };

    xhr.open('GET', 'adminLogin');
    xhr.send();
}

function logout() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          alert("Admin successfully logged out.");
          window.location.replace('index.html');
      } else if (xhr.status !== 200) {
          alert("Request failed! Returned status of" + xhr.status);
      }
    };

    xhr.open('POST', 'adminLogout');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}