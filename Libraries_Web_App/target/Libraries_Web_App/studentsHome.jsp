<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Page</title>

    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/HeaderTop.css">
    <link rel="stylesheet" href="css/TopNavigatorBar.css">
</head>
<body>
<%
    if (session.getAttribute("username") == null)
        response.sendRedirect("index.html");
%>

<nav class="navbar">
    <a href="studentsHome.jsp">Home</a>

    <a onclick="logout()" class="coloredRight"
       style="width:auto;">Logout
    </a>
    <script>function logout() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var data = xhr.responseText;
                alert(data);
            }
        }
        xhr.open('GET', 'Logout');
        xhr.send();
        window.location.replace("loggedout.jsp");
    }

    </script>
</nav>


Welcome ${username}

</body>
</html>