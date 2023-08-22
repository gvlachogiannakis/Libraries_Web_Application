package servlets;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import mainClasses.Student;
import mainClasses.Librarian;
import mainClasses.GetCoordinates;
import database.tables.EditStudentsTable;
import database.tables.EditLibrarianTable;

@WebServlet(name = "SignupServlet", value = "/SignupServlet")
public class SignupServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // If new user is student.
        if ( request.getParameter("f_type").equals("student")) {
            System.out.println("--- New user is student ---");

            Student new_user = new Student();
            new_user.setUsername(request.getParameter("f_username"));
            new_user.setEmail(request.getParameter("f_email"));
            new_user.setPassword(request.getParameter("f_password"));
            new_user.setFirstname(request.getParameter("f_firstname"));
            new_user.setLastname(request.getParameter("f_lastname"));
            new_user.setBirthdate(request.getParameter("f_birthdate"));
            new_user.setGender(request.getParameter("f_sex"));
            new_user.setStudent_type(request.getParameter("f_type_student"));
            new_user.setStudent_id(request.getParameter("f_Student_id_num"));
            new_user.setStudent_id_from_date(request.getParameter("f_Student_Identity_Start_Date"));
            new_user.setStudent_id_to_date(request.getParameter("f_Student_Identity_Expiration_date"));
            new_user.setUniversity(request.getParameter("f_student_level"));
            new_user.setDepartment(request.getParameter("f_department"));
            new_user.setPersonalpage(request.getParameter("f_social_url"));
            new_user.setCountry(request.getParameter("f_country"));
            new_user.setCity(request.getParameter("f_town_name"));
            new_user.setAddress(request.getParameter("f_address"));
            new_user.setTelephone(request.getParameter("f_phone_num"));

            String address = "\"" + new_user.getAddress() +  "\"";

            GetCoordinates latLon = new GetCoordinates();
            latLon.getResults(address);

            if (latLon.getLength() > 0) {
                double latitude = latLon.getLat();
                double longitude = latLon.getLon();

                new_user.setLat(latitude);
                new_user.setLon(longitude);

                System.out.println("Latitude: " + latitude);
                System.out.println("Longitude: " + longitude);
            } else {
                System.out.println("Address could not be bound. No coordinates returned.");

                new_user.setLat(0.0);
                new_user.setLon(0.0);
            }

            try {
                EditStudentsTable new_usr = new EditStudentsTable();
                new_usr.addNewStudent(new_user);
            } catch (ClassNotFoundException e) {
                System.out.println("Exception caught! (Sign up java servlet)");
                Logger.getLogger(GetStudents.class.getName()).log(Level.SEVERE, null, e);
            }

        } // Else if new user is librarian.
        else {
            System.out.println("--- New user is librarian ---");

            Librarian new_lib = new Librarian();
            new_lib.setUsername(request.getParameter("f_username"));
            new_lib.setEmail(request.getParameter("f_email"));
            new_lib.setPassword(request.getParameter("f_password"));
            new_lib.setFirstname(request.getParameter("f_firstname"));
            new_lib.setLastname(request.getParameter("f_lastname"));
            new_lib.setBirthdate(request.getParameter("f_birthdate"));
            new_lib.setGender(request.getParameter("f_sex"));
            new_lib.setLibraryname(request.getParameter("f_libraryname"));
            new_lib.setLibraryinfo(request.getParameter("f_libraryinfo"));
            new_lib.setPersonalpage(request.getParameter("f_social_url"));
            new_lib.setCountry(request.getParameter("f_country"));
            new_lib.setCity(request.getParameter("f_town_name"));
            new_lib.setTelephone(request.getParameter("f_phone_num"));
            new_lib.setAddress(request.getParameter("f_address"));

            String address = "\"" + new_lib.getAddress() +  "\"";

            GetCoordinates latLon = new GetCoordinates();
            latLon.getResults(address);

            if (latLon.getLength() > 0) {
                double latitude = latLon.getLat();
                double longitude = latLon.getLon();

                new_lib.setLat(latitude);
                new_lib.setLon(longitude);

                System.out.println("Latitude: " + latitude);
                System.out.println("Longitude: " + longitude);
            } else {
                 System.out.println("Address could not be bound. No coordinates returned.");

                 new_lib.setLat(0.0);
                 new_lib.setLon(0.0);
            }

            try {
                EditLibrarianTable lib = new EditLibrarianTable();
                lib.addNewLibrarian(new_lib);
            } catch (ClassNotFoundException e) {
                System.out.println("Exception caught! (Sign up java servlet)");
                Logger.getLogger(GetStudents.class.getName()).log(Level.SEVERE, null, e);
            }
        }

        PrintWriter out = response.getWriter();
        out.println("<script type=\"text/javascript\">");
        out.println("alert('User successfully signed up, login to view your page.');");
        out.println("window.location.replace(\"index.html\");");
        out.println("</script>");
    }
}
