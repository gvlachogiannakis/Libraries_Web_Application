package servlets;

import com.google.gson.JsonArray;
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

@WebServlet(name = "GetStudentsPerType", value = "/GetStudentsPerType")
public class GetStudentsPerType extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            String query = "SELECT student_type, COUNT(*) AS StudentsPerType\n" +
                            "FROM students\n" +
                            "GROUP BY student_type\n" +
                            "ORDER BY StudentsPerType DESC;\n";

            JsonArray array = new JsonArray();
            JsonArray sub_arr = new JsonArray();

            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            sub_arr.add("type");
            sub_arr.add("numOfStudents");

            array.add(sub_arr);

            while (rs.next()) {
                JsonArray arr = new JsonArray();
                arr.add(rs.getString(1));
                arr.add(rs.getInt(2));

                array.add(arr);
            }

            out.print(array);

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(GetStudentsPerType.class.getName()).log(Level.SEVERE, null, e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
