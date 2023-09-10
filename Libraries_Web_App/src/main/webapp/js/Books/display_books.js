function showBooks() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
            $("#ajaxContent").html(xhr.responseText);
            $("#userWelcome").html("");
        } else if (xhr.status !== 200) {
            $("#ajaxContent").html("There are no users on our database.");
            console.log("Error: " + xhr.status);
        } else if (xhr.status === 500) {
            $("#ajaxContent").html("Error 500");
            console.log("Error 500");
        } else {
            console.log("General error...");
        }
    };

    xhr.open('GET', 'GetBooks');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();

}