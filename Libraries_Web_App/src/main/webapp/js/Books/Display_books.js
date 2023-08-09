function showBooks() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        console.log("showBooks Call");
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("books_table").innerHTML = xhr.responseText;
        } else if (xhr.status !== 200) {
            document.getElementById("books_table").innerHTML = "There are no users on our database.";
            console.log("Error: " + xhr.status);
        } else if (xhr.status === 500) {
            document.getElementById("books_table").innerHTML = "Error 500";
            console.log("Error 500");
        } else {
            console.log("General error...");
        }
    };

    xhr.open('GET', 'GetBooks');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();

}