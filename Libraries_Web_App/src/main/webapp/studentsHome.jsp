<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Page</title>

    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/HeaderTop.css">
    <link rel="stylesheet" href="css/TopNavigatorBar.css">

    <script src="js/users/students/logout.js"></script>
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
</nav>


Welcome ${username}

</body>
</html>