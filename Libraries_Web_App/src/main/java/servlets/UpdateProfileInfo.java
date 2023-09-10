package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import database.tables.EditLibrarianTable;
import database.tables.EditStudentsTable;

@WebServlet(name = "UpdateProfileInfo", value = "/UpdateProfileInfo")
public class UpdateProfileInfo extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("update info servlet");
        StringBuilder json = new StringBuilder();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()))){
            String line;
            while ((line = reader.readLine()) != null) {
                json.append(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            if (json.toString().contains("students")) {
                EditStudentsTable updateStudent = new EditStudentsTable();
                updateStudent.updateStudentFromJson(json.toString());
            } else {
                EditLibrarianTable updateLibrarian = new EditLibrarianTable();
                updateLibrarian.updateLibrarianFromJson(json.toString());
            }
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(UpdateProfileInfo.class.getName()).log(Level.SEVERE, null, e);
        }

        System.out.println(json.toString().contains("students"));
        System.out.println(json.toString());
    }
}
