<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Librarian Page</title>

    <link rel="stylesheet" href="css/admin_style.css">
    <link rel="stylesheet" href="css/profilePage.css">

    <script src="https://code.jquery.com/jquery-3.7.0.js"></script>

    <script src="js/users/logout_in.js"></script>
    <script src="js/Books/display_books.js"></script>
    <script src="js/users/logout_in.js"></script>
    <script src="js/users/librarians/addBook.js"></script>
    <script src="js/users/showPersonalInfo.js" defer></script>

    <script>
        const username = "<%=session.getAttribute("username")%>";
        const type = "<%=session.getAttribute("type")%>";
        let library_id = "<%=session.getAttribute("library_id")%>";
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
                <li><a href="librariansHome.jsp">Home</a></li>
                <li><a href="javascript:editProfile()">Edit Profile</a></li>
                <li><a href="javascript:showBooks()">See Books</a></li>
                <li><a href="javascript:addBook()">Add Books</a></li>

                <div class="navigation_l">
                    <a class="button_l" id="button_l" href="javascript:userLogout()">
                        <img id="img_l" src="resources/icons8-logout-96.png">

                        <div class="logout">LOGOUT</div>
                    </a>
                </div>
            </ul>
        </nav>
    </div>

    <div id="userWelcome"></div>

    <div id="ajaxContent"></div>
</main>

</body>
</html>