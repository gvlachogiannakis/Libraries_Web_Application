window.onload = function() {
    console.log("username: " + username);
    console.log("type: " + type)

    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
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

}