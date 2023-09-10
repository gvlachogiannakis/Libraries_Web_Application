package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import database.tables.EditStudentsTable;
import database.tables.EditLibrarianTable;

@WebServlet(name = "GetPersonalInfo", value = "/GetPersonalInfo")
public class GetPersonalInfo extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String username = request.getParameter("username");
        String type = request.getParameter("type");
        String data;

        try (PrintWriter out = response.getWriter()) {
            if (type.equals("librarians")) {
                EditLibrarianTable info = new EditLibrarianTable();
                data = info.databaseLibrarianToJSON(username);
            } else {
                EditStudentsTable info = new EditStudentsTable();
                data = info.databaseStudentToJSON(username);
            }

            out.print(data);

            response.setStatus(200);

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(GetPersonalInfo.class.getName()).log(Level.SEVERE, null, e);
        }

    }

}
