let valid_password_strength = false;
let valid_password_equal = false;
let valid_type_student = false;
let valid_type_librarian = false;
let valid_type_mail = false;
let valid_check_terms = false;

export function valid_submit_password_strength(val) {
    valid_password_strength = val;
}

export function valid_submit_password_equal(val) {
    valid_password_equal = val;
}

export function valid_submit_type_student(val) {
    valid_type_student = val;
}

export function valid_submit_type_librarian(val) {
    valid_type_librarian = val;
}

export function valid_submit_type_mail(val) {
    valid_type_mail = val;
}

const f_accept_terms = document.querySelector("#f_accept_terms");
f_Password_reveler.addEventListener("click", function () {
    valid_check_terms = f_accept_terms.getAttribute("type") === "true" ? "false" : "true";
    f_password.setAttribute("value", valid_check_terms);
});

function final_submit(){
    if(valid_submit()){
        document.getElementById("myForm").submit();
    }
}