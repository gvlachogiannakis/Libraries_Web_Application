function showStudentElements() {
    console.log("Student");

    if (document.getElementById("librarianDiv"))
        document.getElementById("librarianDiv").remove();

    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "studentDiv");

    newDiv.innerHTML = `
        <label><b>If a Student choose level:</b></label><br>
        <input type="radio" id="f_undergraduate" name="f_type_student" value="undergraduate" onchange="checkUsers()">
        <label for="f_undergraduate">Undergraduate</label><br>
        <input type="radio" id="f_postgraduate" name="f_type_student" value="postgraduate" onchange="checkUsers()">
        <label for="f_postgraduate">Postgraduate</label><br>
        <input type="radio" id="f_phd" name="f_type_student" value="phd" onchange="checkUsers()">
        <label for="f_phd">Ph.D</label><br><br>

        <label for="f_Student_id_num"><b>Student Identity Number:</b></label><br>
        <input type="number" id="f_Student_id_num" name="f_Student_id_num"
               pattern=".{12,12}" title="A 12 digits Number"><br><br>

        <label for="f_Student_Identity_Start_Date"><b>Student Identity Start Date:</b></label><br>
        <input type="date" id="f_Student_Identity_Start_Date" name="f_Student_Identity_Start_Date"
               value="2021-01-01"
               min="2016/01/01"><br><br>

        <label for="f_Student_Identity_Expiration_date"><b>Student Identity Expiration Date:</b></label><br>
        <input type="date" id="f_Student_Identity_Expiration_date" name="f_Student_Identity_Expiration_date"
               value="2021-01-01"
               max="2023/01/01" onchange="checkUsers()">
        <p id="dates_message"></p>

        <label><b>If a Student choose level:</b></label><br>
        <input type="radio" id="f_crete_uni" name="f_student_level" value="UOC" onchange="checkUsers()">
        <label for="f_crete_uni">UOC</label><br>
        <input type="radio" id="f_crete_elmepa" name="f_student_level" value="HELMEPA" onchange="checkUsers()">
        <label for="f_crete_elmepa">HELMEPA</label><br>
        <input type="radio" id="f_crete_tuc" name="f_student_level" value="TUC" onchange="checkUsers()">
        <label for="f_crete_tuc">TUC</label><br><br>

        <label for="f_department"><b>Department</b></label><br>
        <input type="text" id="f_department" name="f_department" value=""><br><br>
    
    `;
    document.getElementById("typeDiv").appendChild(newDiv);

}

function showLibrarianElements() {
    console.log("Librarian");

    //remove STUDENT Elements
    if (document.getElementById("studentDiv"))
        document.getElementById("studentDiv").remove();
    //add LIBRARIAN Elements
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "librarianDiv");

    newDiv.innerHTML = `
    
        <label for="libraryname"><b>Library Name</b></label><br>
        <input type="text" id="libraryname" name="f_libraryname" value=""><br><br>
        
        <label for="libraryinfo"><b>Library Infos</b></label><br>
        <textarea id="libraryinfo" name="f_libraryinfo"></textarea><br><br>
    
    `;
    document.getElementById("typeDiv").appendChild(newDiv);

}

function checkTypeElements() {
    let valueType, checkedType = document.getElementsByName("f_type");

    for (let i = 0; i < checkedType.length; i++) {
        if (checkedType[i].checked)
            valueType = checkedType[i].value;
    }
    if (valueType === "student")
        showStudentElements();
    else if (valueType === "librarian")
        showLibrarianElements();
}
