
function userLogout() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        console.log("logout pressed");
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("User successfully logged out.");
            window.location.replace('index.html');
        } else if (xhr.status !== 200) {
            alert("Request failed! Returned status of " + xhr.status);
        } else {
            alert("fail, status returned " + xhr.status)
        }
    };

    xhr.open('POST', 'userLogout');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}