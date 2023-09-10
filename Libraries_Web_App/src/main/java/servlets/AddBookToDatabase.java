package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import database.tables.EditBooksTable;
import database.tables.EditBooksInLibraryTable;

@WebServlet(name = "AddBookToDatabase", value = "/AddBookToDatabase")
public class AddBookToDatabase extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        StringBuilder json = new StringBuilder();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()))){
            String line;
            while ((line = reader.readLine()) != null) {
                json.append(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        EditBooksTable bookData = new EditBooksTable();
        EditBooksInLibraryTable bookToLibrary = new EditBooksInLibraryTable();

        try {
            bookData.addBookFromJSON(json.toString());
            bookToLibrary.addBookInLibraryFromJSON(json.toString());
        } catch (ClassNotFoundException e) {
            System.out.println("Exception caught!");
            Logger.getLogger(AddBookToDatabase.class.getName()).log(Level.SEVERE, null, e);
        }
    }
}
