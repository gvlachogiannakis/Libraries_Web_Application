package servlets;

import database.init.Resources;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "adminLogin", value = "/adminLogin")
public class adminLogin extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        HttpSession session = request.getSession(true);

        if (username == "admin" && password == "admin12*") {
            session.setAttribute("loggedIn", username);
            response.setStatus(200);
        } else {
            response.setStatus(403);
        }
        /*if (Resources.registeredUsers.containsKey(username)) {
            if (Resources.registeredUsers.get(username).getPassword().equals(password)) {
                session.setAttribute("loggedIn", username);
                response.setStatus(200);
            } else {
                response.setStatus(403);
            }
        } else {
            response.setStatus(403);
        }*/
    }
}
