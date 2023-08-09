function show_users() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $("#ajaxContent").html(xhr.responseText);
        } else if (xhr.status === 500) {
            $("#ajaxContent").html("Error 500");
            console.log("Error 500");
        } else if (xhr.status !== 200) {
            $("#ajaxContent").html("There are no users on our database.");
            console.log("Error: " + xhr.status);
        }
    };

    xhr.open('GET', 'GetStudents');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}

function show_librarians() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $("#ajaxContent").html(xhr.responseText);
        } else if (xhr.status === 500) {
            $("#ajaxContent").html("Error 500");
            console.log("Error 500");
        } else if (xhr.status !== 200) {
            $("#ajaxContent").html("There are no librarians on our database.");
            console.log("Error: " + xhr.status);
        }
    };

    xhr.open('GET', 'GetLibrarians');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
}


function show_statistics(category) {
    let xhr = new XMLHttpRequest();

    if (category === 1) {
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                google.charts.load("current", {packages: ["corechart"]});
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                    var fromServlet = JSON.parse(xhr.responseText);
                    console.log(fromServlet);
                    var data = google.visualization.arrayToDataTable(fromServlet);
                    console.log(data);
                    var options = {
                        backgroundColor: '#CEA99A',
                        title: 'Books per Library',
                        height: 700,
                        width: 1000,
                        is3D: true,
                        legend: {
                            position: 'labeled'
                        },
                        chartArea: {
                            left: '15%',
                            top: '20%',
                            width: '80%',
                            height: '80%'
                        }
                    };

                    var chart = new google.visualization.PieChart(document.getElementById('ajaxContent'));
                    chart.draw(data, options);
                }
            } else if (xhr.status === 500) {
                $("#ajaxContent").html("Error 500");
                console.log("Error 500");
            } else if (xhr.status !== 200) {
                $("#ajaxContent").html("There are no books on any library.");
                console.log("Error: " + xhr.status);
            }
        }

        xhr.open('GET', 'GetBooksPerLibrary');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send();
    } else if (category === 2) {
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                google.charts.load("current", {packages: ["corechart"]});
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                    var fromServlet = JSON.parse(xhr.responseText);
                    console.log(fromServlet);
                    var data = google.visualization.arrayToDataTable(fromServlet);
                    console.log(data);

                    var options = {
                        backgroundColor: '#CEA99A',
                        title: 'Books per Genre',
                        height: 700,
                        width: 1000,
                        is3D: true,
                        legend: {
                            position: 'labeled'
                        },
                        chartArea: {
                            left: '15%',
                            top: '20%',
                            width: '80%',
                            height: '80%'
                        }
                    };

                    var chart = new google.visualization.PieChart(document.getElementById('ajaxContent'));
                    chart.draw(data, options);
                }
            } else if (xhr.status === 500) {
                $("#ajaxContent").html("Error 500");
                console.log("Error 500");
            } else if (xhr.status !== 200) {
                $("#ajaxContent").html("There are no books on any library.");
                console.log("Error: " + xhr.status);
            }
        }

        xhr.open('GET', 'GetBooksPerGenre');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send();

    } else if (category === 3) {
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                google.charts.load("current", {packages: ["corechart"]});
                google.charts.setOnLoadCallback(drawChart);

                function drawChart() {
                    var fromServlet = JSON.parse(xhr.responseText);
                    console.log(fromServlet);
                    var data = google.visualization.arrayToDataTable(fromServlet);
                    console.log(data);

                    var options = {
                        backgroundColor: '#CEA99A',
                        title: 'Students per Student type',
                        height: 700,
                        width: 1000,
                        is3D: true,
                        legend: {
                            position: 'labeled'
                        },
                        chartArea: {
                            left: '15%',
                            top: '20%',
                            width: '80%',
                            height: '80%'
                        }
                    };

                    var chart = new google.visualization.PieChart(document.getElementById('ajaxContent'));
                    chart.draw(data, options);
                }
            } else if (xhr.status === 500) {
                $("#ajaxContent").html("Error 500");
                console.log("Error 500");
            } else if (xhr.status !== 200) {
                $("#ajaxContent").html("There are no students signed up.");
                console.log("Error: " + xhr.status);
            }
        }

        xhr.open('GET', 'GetStudentsPerType');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send();
    }

}

function delete_user(userId) {
    if (confirm("Do you want to delete user?") === true) {
        let xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("User Deleted!");
                $("#ajaxContent").html(show_users());
            } else if (xhr.status === 500) {
                $("#ajaxContent").html("Error 500");
            } else if (xhr.status !== 200) {
                $("#ajaxContent").html("Error on deleting user.");
                console.log("Error code: " + xhr.status);
            }
        };

        xhr.open('POST', 'DeleteUser?user_id=' + userId);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(userId);
    } else {
        //Do nothing..
    }
}

function delete_librarian(libraryId) {
    if (confirm("Do you want to delete librarian?") === true) {
        let xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Librarian Deleted!");
                $("#ajaxContent").html(show_librarians());
            } else if (xhr.status === 500) {
                $("#ajaxContent").html("Error 500");
            } else if (xhr.status !== 200) {
                $("#ajaxContent").html("Error on deleting librarian.");
                console.log("Error code: " + xhr.status);
            }
        };

        xhr.open('POST', 'DeleteLibrarian?library_id=' + libraryId);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(libraryId);
    } else {
        //Do nothing..
    }
}