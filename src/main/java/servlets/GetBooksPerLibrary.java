package servlets;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
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

            JsonObject books_per_lib = new JsonObject();

            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT libraryname, library_id FROM librarians");

            while (rs.next()) {

                books_per_lib.addProperty("library_name", rs.getString(1));
                books_per_lib.addProperty("num_of_books", 0);
            }

            System.out.println("After while loop finishes object created is: " + books_per_lib);
            /*JsonArray array = new JsonArray();
            JsonArray sub_arr = new JsonArray();

            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT libraryname, library_id FROM librarians");

            sub_arr.add("library_name");
            sub_arr.add("isbn");

            array.add(sub_arr);
            // initialization of names of libraries
            while (rs.next()) {
                JsonArray arr = new JsonArray();

                arr.add(rs.getString(1));
                arr.add(0);

                array.add(arr);
            }

            //System.out.println(array);

            ResultSet rs1 = stmt.executeQuery("SELECT library_id FROM booksinlibraries");

            while (rs1.next()) {
                int lib_id = rs1.getInt(1);

                JsonArray tmp = array.get(lib_id).getAsJsonArray();
                //JsonElement tmp_elem = tmp.get(2);

                tmp.set(2, );
                System.out.println(tmp);
                //System.out.println(tmp_elem);

            }

            out.print(array);*/

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(GetBooksPerLibrary.class.getName()).log(Level.SEVERE, null, e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
