CSD3922 Γιάννης Βλαχογιαννάκης
==
CSD4302 Γιάννης Σωμαράκης
==



(Servlets 8)
==

[GetBooksPerLibrary.java](..%2Fjava%2Fservlets%2FGetBooksPerLibrary.java)

- Παιρνει το βιβλια απο την καθε βιβλιοθηκη επιστρεθει πληρογορια JSON για το GoogleChart

[DeleteLibrarian.java](..%2Fjava%2Fservlets%2FDeleteLibrarian.java)

- Διαγραφει τον βιβλιοθηκαριο που θα επιλαγει απο τον Admin

[DeleteUser.java](..%2Fjava%2Fservlets%2FDeleteUser.java)

- Διαγραφει τον μαθητη που θα επιλαγει απο τον Admin

[GetBooks.java](..%2Fjava%2Fservlets%2FGetBooks.java)

- Επιστρεφει ολα τα βιβλια και τις κατηγοριες τους στους Guest χρηστες

[GetLibrarians.java](..%2Fjava%2Fservlets%2FGetLibrarians.java)

- Επιστρεφει ολους τους βιβλιοθηκαριους που θα επιλαγουν απο τον Admin και δημιουργει HTML Tables

[GetStudents.java](..%2Fjava%2Fservlets%2FGetStudents.java)

- Επιστρεφει ολους τους βιβλιοθηκαριους που θα επιλαγουν απο τον Admin και δημιουργει HTML Tables

[LoginServlet.java](..%2Fjava%2Fservlets%2FLoginServlet.java)

- Ελεγχει αν υπαρχει στην βαση ο χρηστης και τον συνδεει

[Logout.java](..%2Fjava%2Fservlets%2FLogout.java)

- Αποσυνδεει τον χρηστη

(JavaScripts 9 )
==

[loginScript.js](js%2FLogin%2FloginScript.js)

- Στελνει Request στο Servlet για να συνδεσει τον χρηστη

[display_data.js](js%2Fadmin%2Fdisplay_data.js)

- Request για εμφανηση μαθητων

- Request για εμφανηση βιβλιοθηκαριων

- Εμφανιση στατιστικων

[users_data_on_admin.js](js%2Fadmin%2Fusers_data_on_admin.js)

- Ελεγχει password και username του admin

[Display_books.js](js%2FBooks%2FDisplay_books.js)

- Request για εμφανηση Βιβλιων στον Guest

[password_checker.js](js%2FForm%2Fpassword_checker.js)

- Ελεγχος για φορμα Sign-In

[password_reveal.js](js%2FForm%2Fpassword_reveal.js)

- Εμφανιση/αποκρυψη για φορμα Sign-In

[show_elements_by_type.js](js%2FForm%2Fshow_elements_by_type.js)

- Εμφανιση καταλληλων field για φορμα Sign-In

[submit_form.js](js%2FForm%2Fsubmit_form.js)

- Ελεγχοι φορμας

[users_checker.js](js%2FForm%2Fusers_checker.js)

- Ελεγχοι φορμας

(HTML JSP 6)
==

[librariansHome.jsp](librariansHome.jsp)

- Για βιβλιοθηκαριους που εχουν συνδεθει μονο

[studentsHome.jsp](studentsHome.jsp)

- Για μαθητες που εχουν συνδεθει μονο

[index.html](index.html)

- Αρχικη σελιδα

[admin.html](admin.html)

- Αρχικη για Admin

[loggedout.jsp](loggedout.jsp)

- Σελιδα αποσυνδεσης

[adminLogIn.html](adminLogIn.html)

- Εισοδος Admin

(CSS 9)
==
Αρχεια για καλυτερη απεικονηση
Pop-Up Παραθυρα
Χρωματα

- [admin_login_style.css](css%2Fadmin_login_style.css)
- [admin_style.css](css%2Fadmin_style.css)
- [BottomFooter.css](css%2FBottomFooter.css)
- [HeaderTop.css](css%2FHeaderTop.css)
- [index.css](css%2Findex.css)
- [LoginButton.css](css%2FLoginButton.css)
- [SignInButton.css](css%2FSignInButton.css)
- [TableLibrary.css](css%2FTableLibrary.css)
- [TopNavigatorBar.css](css%2FTopNavigatorBar.css)

(Rest Request)
==

Εγινε χρηση για να εχουμε αλληλεπιδραση μεταξυ Servlets και JS ωστε να κανουμε την αντιστιχη λειτουργεια που χρειαζεται

(Ajax)
==

Εχει γινει χρηστη ωστε να εντοπιζουμε αντικειμενα της HTML και να διαβαζουμε ορισματα - να τα επεξεργαζομαστε

(APIs)
==

Του Google Charts

