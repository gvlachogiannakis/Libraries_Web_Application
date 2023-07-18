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

@WebServlet(name = "GetLibrarians", value = "/GetLibrarians")
public class GetLibrarians extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            out.print("<h1>Libraries</h1>");
            out.print("<div class='data_table'><table><tr><th>Username</th><th>First Name</th><th>Last Name</th></tr>");
            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT library_id, username, firstname, lastname FROM librarians");

            while (rs.next()) {
                out.print("<tr><td>");
                out.print(rs.getString(2));
                out.print("</td><td>");
                out.print(rs.getString(3));
                out.print("</td><td>");
                out.print(rs.getString(4));
                out.print("</td><td><button type='button' onclick='delete_librarian(");
                out.print(rs.getInt(1));
                out.print(")'>Delete Librarian</button></td>");
            }
            out.print("</table></div>");

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(GetLibrarians.class.getName()).log(Level.SEVERE, null, e);
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
