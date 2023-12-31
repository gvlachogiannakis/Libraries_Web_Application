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

@WebServlet(name = "DeleteUser", value = "/DeleteUser")
public class DeleteUser extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        int user_id = Integer.parseInt(request.getParameter("user_id"));

        try (Connection con = DB_Connection.getConnection()) {

            Statement stmt = con.createStatement();
            if (stmt.executeUpdate("DELETE FROM students WHERE user_id='" + user_id + "'") != 0) {
                System.out.println("Student deleted successfully!");
            } else {
                System.out.println("An error occurred on deleting librarian...");
            }

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(DeleteUser.class.getName()).log(Level.SEVERE, null, e);
        }

    }
}
