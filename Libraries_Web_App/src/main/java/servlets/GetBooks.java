package servlets;

import database.DB_Connection;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(name = "GetBooks", value = "/GetBooks")
public class GetBooks extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            out.print("<table id=\"books_table\"><tr><th>Title</th><th>Genre</th><th>ISBN</th></tr>");
            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT title,genre,isbn FROM books");

            while (rs.next()) {
                out.print("<tr><td>");
                out.print(rs.getString(1));
                out.print("</td><td>");
                out.print(rs.getString(2));
                out.print("</td><td>");
                out.print(rs.getString(3));
                out.print("</td>");
            }
            out.print("</table>");

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("exception caught");
            Logger.getLogger(GetStudents.class.getName()).log(Level.SEVERE, null, e);
        }

    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {

    }
}
