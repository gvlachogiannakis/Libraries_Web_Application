window.onload = function() {
    console.log("username: " + username);
    console.log("type: " + type)

    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $("#userWelcome").html("Welcome " + username + ", now you can see all of the information about your profile. "
                                    + "<br>Now you have access to you personal information and you are privileged to make modifications.");
            $("#ajaxContent").html(createTableFromJSON(xhr.responseText));
        } else if (xhr.status === 500) {
            console.log("ERROR 500");
        } else if (xhr.status !== 200) {
            $("#ajaxContent").html("There is no personal info of this user in database");
            console.log("Error: " + xhr.status);
        }
    };

    xhr.open('GET', 'GetPersonalInfo?username=' + username + '&type=' + type);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(username);
};

function createTableFromJSON(jsonString) {
    let json;

    try {
        json = JSON.parse(jsonString);
    } catch (error) {
        console.error("Error while parsing json.", error);
        return;
    }

    if (json.length === 0) {
        console.error("Json array is empty.");
        return;
    }

    let container = document.getElementById("ajaxContent");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    table.classList.add("data_table");

    let caption = document.createElement("caption");
    caption.innerText = "Personal Details";
    table.appendChild(caption);

    for (let key in json) {
        if (json.hasOwnProperty(key)) {
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            th.innerText = key;
            if (key === "library_id") {
                library_id = json[key];
                console.log("=== " + library_id);
            }
            tr.appendChild(th);

            let td = document.createElement("td");
            td.innerText = json[key];
            tr.appendChild(td);

            tbody.appendChild(tr);
        }
    }

    table.appendChild(tbody);

    container.appendChild(table);
}

function editProfile() {
    const form = document.createElement("form");

    const caption = document.createElement("caption");
    caption.innerText = "Update personal information";
    form.appendChild(caption);

    const password = document.createElement("input");
    password.type = "password";
    password.id = "password";
    password.name = "password";
    password.title = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 and less than 12 characters";
    //password.pattern = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-().&@?\'#,*/\"+]).{8,12}";
    password.required = true;
    password.placeholder = "New Password";

    const firstname = document.createElement("input");
    firstname.type = "text";
    firstname.id = "firstname";
    firstname.name = "firstname";
    firstname.required = true;
    firstname.placeholder = "First Name";

    const lastname = document.createElement("input");
    lastname.type = "text";
    lastname.id = "lastname";
    lastname.name = "lastname";
    lastname.required = true;
    lastname.placeholder = "Last Name";

    const phone = document.createElement("input");
    phone.type = "tel";
    phone.id = "phone";
    phone.name = "phone";
    phone.patern = ".{10,14}";
    phone.title = "Phone must be from 10 to 14 digits.";
    phone.required = true;
    phone.placeholder = "New phone number";

    const personalPage = document.createElement("input");
    personalPage.type = "url";
    personalPage.id = "personalPage";
    personalPage.name = "personalPage";
    personalPage.required = true;
    personalPage.placeholder = "New personal page";

    form.appendChild(password);
    form.appendChild(firstname);
    form.appendChild(lastname);
    form.appendChild(phone);
    form.appendChild(personalPage);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.id = "submitBtn";
    submitBtn.textContent = "Update profile";
    form.appendChild(submitBtn);

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateData()) {
            const formData = {};

            const formElements = form.elements;

            formData["type"] = type;
            formData["username"] = username;

            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                if (element.name) {
                    formData[element.name] = element.value;
                }
            }

            sendFormData(formData);
        }
    });

    const ajax_content = document.getElementById("ajaxContent");
    ajax_content.innerHTML = "";
    ajax_content.appendChild(form);

    document.getElementById("userWelcome").innerText = "";
}

function sendFormData(formData) {
    const json = JSON.stringify(formData);

    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          alert ("Profile updated successfully!");
          window.location.reload();
      } else if (xhr.status === 500) {
          console.log("500 Server Error.");
      } else {
          console.log(xhr.status + " Error");
      }
    };

    xhr.open('POST', 'UpdateProfileInfo');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(json);
}

function validateData() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let personalPage = document.getElementById("personalPage").value;

    if (firstname.length < 3 || firstname.length > 30 || lastname.length < 3 || lastname.length > 30) {
        alert ("Firstname and Lastname must be from 3 to 30 characters.");
        return false;
    }

    if (!(personalPage.trim().startsWith("http://") || personalPage.trim().startsWith("https://"))) {
        alert ("Personal page must be http:// or https:// form.");
        return false;
    }

    return true;
}