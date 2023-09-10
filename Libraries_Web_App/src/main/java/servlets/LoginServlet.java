package servlets;

import database.DB_Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

import database.tables.EditStudentsTable;

@WebServlet(name = "LoginServlet", value = "/LoginServlet")
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            String username = request.getParameter("username_login");
            String password = request.getParameter("password_login");
            String type = request.getParameter("f_type_login");
            EditStudentsTable student = new EditStudentsTable();

            System.out.println(username + " " + password + " " + type);

            String info = student.databaseStudentToJSON(username, password);

            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();

            System.out.println("SELECT * FROM " + type + " WHERE username='" + username +
                    "' AND password='" + password + "'");
            ResultSet rs = stmt.executeQuery("SELECT * FROM " + type + " WHERE username='" + username +
                    "' AND password='" + password + "'");

            if (rs.next()) {
                HttpSession session = request.getSession();
                session.setAttribute("username", username);
                session.setAttribute("type", type);
                session.setAttribute("loggedIn", username);
                response.setStatus(200);
            } else {
                System.out.println("wrong input");
                response.setStatus(403);
            }

            con.close();
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("exception caught");
            Logger.getLogger(GetStudents.class.getName()).log(Level.SEVERE, null, e);
        }
    }
}
