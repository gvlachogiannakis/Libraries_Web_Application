function addBook() {
    const form = document.createElement("form");

    const caption = document.createElement("caption");
    caption.innerText = "Add a new book in my Library";
    form.appendChild(caption);

    const isbn = document.createElement("input");
    isbn.type = "text";
    isbn.name = "isbn";
    isbn.id = "isbn";
    isbn.required = true;
    isbn.placeholder = "ISBN";

    const title = document.createElement("input");
    title.type = "text";
    title.name = "title";
    title.id = "title";
    title.required = true;
    title.placeholder = "Title of the book";

    const authors = document.createElement("input");
    authors.type = "text";
    authors.name = "authors";
    authors.id = "authors";
    authors.required = true;
    authors.placeholder = "Authors of the book";

    const genre = document.createElement("input");
    genre.type = "text";
    genre.name = "genre";
    genre.id = "genre";
    genre.required = true;
    genre.placeholder = "Genre";

    const pages = document.createElement("input");
    pages.type = "number";
    pages.name = "pages";
    pages.id = "pages";
    pages.required = true;
    pages.placeholder = "Number of pages";

    const publication = document.createElement("input");
    publication.type = "number";
    publication.name = "publication";
    publication.id = "publication";
    publication.required = true;
    publication.placeholder = "Publication Year";

    const url = document.createElement("input");
    url.type = "text";
    url.name = "url";
    url.id = "url";
    url.required = true;
    url.placeholder = "URL";

    const photo = document.createElement("input");
    photo.type = "text";
    photo.name = "photo";
    photo.id = "photo";
    photo.required = true;
    photo.placeholder = "Photo";

    form.appendChild(isbn);
    form.appendChild(title);
    form.appendChild(authors);
    form.appendChild(genre);
    form.appendChild(pages);
    form.appendChild(publication);
    form.appendChild(url);
    form.appendChild(photo);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.id = "submitBtn";
    submitBtn.textContent = "Add Book";

    form.appendChild(submitBtn);

    form.addEventListener('submit', function (event) {
       event.preventDefault();

       if (validateBookData()) {
           const formData = {};

           const formElements = form.elements;
           formData["library_id"] = library_id;
           for (let i = 0; i < formElements.length; i++) {
               const element = formElements[i];
               if (element.name) {
                   formData[element.name] = element.value;
               }
           }
           formData["available"] = true;

           sendFormDataToServer(formData);
       }
    });

    const ajax_content = document.getElementById("ajaxContent");
    ajax_content.innerHTML = "";
    ajax_content.appendChild(form);

    document.getElementById("userWelcome").innerText = "";
}

function validateBookData() {
    let isbn = document.getElementById("isbn").value;
    let pages = document.getElementById("pages").value;
    let pYear = document.getElementById("publication").value;
    let url = document.getElementById("url").value;
    let photo = document.getElementById("photo").value;
    let button = document.getElementById("submitBtn");

    if (isbn.length === 10 || isbn.length === 13) {
        button.active = true;
    } else {
        alert ("ISBN number must be 10 or 13 digits.");
        button.active = false;
        return false;
    }

    if (pages > 0) {
        button.active = true;
    } else {
        alert ("Number of pages cannot be less or equal to 0.");
        button.active = false;
        return false;
    }

    if (pYear >= 1200) {
        button.active = true;
    } else {
        alert("Publication year must be newer than 1200.");
        button.active = false;
        return false;
    }

    if ((url.trim().startsWith("http://") || url.trim().startsWith("https://")) &&
        photo.trim().startsWith("http://") || photo.trim().startsWith("https://")) {
        button.active = true;
    } else {
        alert ("URL and photo must begin with \"http://\" or \"https://\"");
        button.active = false;
        return false;
    }

    return true;
}

function sendFormDataToServer(formData) {
    const json = JSON.stringify(formData);

    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("Book added successfully!");
            window.location.reload();
        } else if (xhr.status === 500) {
            console.log("ERROR 500");
        } else if (xhr.status !== 200) {
            console.log("Error: " + xhr.status);
        }
    };

    xhr.open('POST', 'AddBookToDatabase');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(json);
}