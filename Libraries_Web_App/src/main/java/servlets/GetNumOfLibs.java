package servlets;

import database.DB_Connection;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(name = "numOfLibs", value = "/numOfLibs")
public class GetNumOfLibs extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            int count = 0;
            String query = "SELECT library_id FROM librarians";
            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                count++;
            }

            System.out.println(count + "----------");

            if (count != 0) {
                response.setStatus(200);
                out.write(count);
            } else {
                System.out.println("There are no libraries subscribed to server, server responding with 403 error");
                response.setStatus(403);
            }

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(GetNumOfLibs.class.getName()).log(Level.SEVERE, null, e);
        }
    }

}
