$(document).ready(function () {
    $('#sync').on('click', function (e) {
        var databaseName = localStorage.getItem('databaseName');
        var serverIp = localStorage.getItem('serverIp');
        var serverUsername = localStorage.getItem('serverUsername');
        var serverPassword = localStorage.getItem('serverPassword');
        if (localStorage.getItem('settingsCheck') == 1) {
            $.ajax({
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Authorization': 'Basic ' + btoa(serverUsername + ":" + serverPassword)
                },
                url: "http://" + serverIp + ":5984/" + databaseName,
                type: "HEAD",
                timeout: 1000,
                statusCode: {
                    200: function (response) {
                        PouchDB.sync(databaseName, 'http://' + serverUsername + ':' + serverPassword + '@' + serverIp + ':5984/' + databaseName, {
                            live: false,
                            retry: true
                        }).on('denied', function (err) {
                            window.alert("Access Denied? This shouldn't happen.");
                        }).on('complete', function (info) {
                            window.alert("Synced successfully!");
                        }).on('error', function (err) {
                            window.alert("Sync Error! Try Again!");
                        });
                    },
                    404: function (response) {
                        window.alert("Server ip or database name is incorrect! Check server ip and database name!");
                    },
                    401: function (response) {
                        window.alert("Incorrect username or password!");
                    },
                    0: function (response) {
                        window.alert("Couldn't reach server. Are you connected to the internet?");
                    }
                }
            });
        } else {
            window.alert("Check settings!");
        }
    });
});