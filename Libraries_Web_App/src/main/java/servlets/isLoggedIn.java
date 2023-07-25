package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "isLoggedIn", value = "/isLoggedIn")
public class isLoggedIn extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();

        if (session.getAttribute("loggedIn") != null) {
            response.setStatus(200);
            response.getWriter().write("admin");
        } else {
            response.setStatus(403);
        }
    }
}
