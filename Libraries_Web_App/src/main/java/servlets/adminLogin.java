package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "adminLogin", value = "/adminLogin")
public class adminLogin extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        HttpSession session = request.getSession(true);
        System.out.println("before if");
        if (username.equals("admin") && password.equals("admin12*")) {
            session.setAttribute("loggedIn", username);
            response.setStatus(200);
        } else {
            response.setStatus(403);
        }
    }
}
