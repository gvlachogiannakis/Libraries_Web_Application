<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Page</title>

    <link rel="stylesheet" href="css/admin_style.css">

    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>

    <script src="js/users/students/logout_in.js"></script>
    <script src="js/Books/display_books.js"></script>
    <script src="js/users/students/logout_in.js"></script>
    <script src="js/users/students/showPersonalInfo.js" defer></script>

    <script>
        const username = "<%=session.getAttribute("username")%>";
        const type = "<%=session.getAttribute("type")%>";
    </script>
</head>
<body>
    <header>
        <img src="resources/book.png" alt="logo-books">
    </header>
    <main>
        <%
            if (session.getAttribute("username") == null)
                response.sendRedirect("index.html");
        %>
        <div class="menu">
            <nav class="nav_bar">
                <ul>
                    <li><a href="studentsHome.jsp">Home</a></li>
                    <li><a href="javascript:editProfile()">Edit Profile</a></li>
                    <li><a href="javascript:showBooks()">See Books</a></li>

                    <div class="navigation_l">
                        <a class="button_l" id="button_l" href="javascript:userLogout()">
                            <img id="img_l" src="resources/icons8-logout-96.png">

                            <div class="logout">LOGOUT</div>
                        </a>
                    </div>
                </ul>
            </nav>
        </div>

        <div id="userWelcome">Welcome ${username}, now you can see all of the information about your profile
                              and also you can modify some of your personal information</div>

        <button>Search book</button>
        <button>Book Review</button>

        <div id="ajaxContent"></div>
    </main>

</body>
</html>