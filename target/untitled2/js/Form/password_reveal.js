function password_reveal() {
    const type = document.querySelector("#f_password").getAttribute('type') === "password" ? "text" : "password";
    document.querySelector("#f_password").setAttribute("type", type);
}

function password_reveal_repeat() {
    const type = document.querySelector("#f_password_repeat").getAttribute('type') === "password" ? "text" : "password";
    document.querySelector("#f_password_repeat").setAttribute("type", type);
}