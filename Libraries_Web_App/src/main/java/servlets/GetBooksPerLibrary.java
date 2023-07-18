package servlets;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
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


@WebServlet(name = "GetBooksPerLibrary", value = "/GetBooksPerLibrary")
public class GetBooksPerLibrary extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {

            JsonArray array = new JsonArray();
            JsonArray sub_arr = new JsonArray();

            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT library_id, isbn FROM booksinlibraries");

            sub_arr.add("isbn");
            sub_arr.add("library_id");

            array.add(sub_arr);

            while (rs.next()) {
                JsonArray arr = new JsonArray();
                arr.add(rs.getString(2));
                arr.add(rs.getInt(1));
                //JsonObject object = new JsonObject();
                //object.addProperty("library_id", rs.getInt(1));
                //object.addProperty("isbn", rs.getString(2));
                //array.add(object);
                array.add(arr);
                System.out.println(arr);
            }

            System.out.println(array);

            out.print(array);

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(GetBooksPerLibrary.class.getName()).log(Level.SEVERE, null, e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
