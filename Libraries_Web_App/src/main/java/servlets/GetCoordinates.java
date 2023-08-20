package servlets;

import database.DB_Connection;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.gson.Gson;

@WebServlet(name = "GetCoordinates", value = "/GetCoordinates")
public class GetCoordinates extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        List<Coordinate> coordinates = new ArrayList<>();

        try (PrintWriter out = response.getWriter()) {
            String query = "SELECT lat, lon, libraryname FROM librarians";
            Connection con = DB_Connection.getConnection();
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                double lat = rs.getDouble("lat");
                double lon = rs.getDouble("lon");
                String name = rs.getString("libraryname");
                coordinates.add(new Coordinate(lat, lon, name));
            }

            Gson gson = new Gson();
            String json = gson.toJson(coordinates);

            out.print(json);

        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(GetCoordinates.class.getName()).log(Level.SEVERE, null, e);
        }
    }
}

class Coordinate {
    private double lat;
    private double lon;
    private String name;

    public Coordinate(double lat, double lon, String name) {
        this.lat = lat;
        this.lon = lon;
        this.name = name;
    }

    public double getLat() {
        return lat;
    }

    public double getLon() {
        return lon;
    }

    public String getLibName() { return name; }
}