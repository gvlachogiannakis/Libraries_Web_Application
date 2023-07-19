package servlets;

import com.google.gson.JsonArray;
import database.DB_Connection;
import database.tables.GeneralQueries;

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

@WebServlet(name = "GetBooksPerGenre", value = "/GetBooksPerGenre")
public class GetBooksPerGenre extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("getbookspergenre doget called");
        response.setContentType("text/html;charset=UTF-8");

        try (PrintWriter out = response.getWriter()) {
            GeneralQueries gq = new GeneralQueries();
            JsonArray array = new JsonArray();
            JsonArray sub_arr = new JsonArray();

            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT genre FROM books");

            sub_arr.add("genre");
            sub_arr.add("books");

            array.add(sub_arr);

            while (rs.next()) {
                JsonArray arr = new JsonArray();
                arr.add(rs.getString(2));
                arr.add(gq.numOfAllBooksOfALibrary(rs.getInt(1)));

                array.add(arr);
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
