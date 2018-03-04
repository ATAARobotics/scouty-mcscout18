$(document).ready(function () {
    $('#sync').on('click', function (e) {
        document.getElementById("page").style.display = "none";
        document.getElementById("header").style.display = "none";
        document.getElementById("spinner").style.display = "block";
        var databaseName = localStorage.getItem('databaseName');
        var serverIp = localStorage.getItem('serverIp');
        var serverUsername = localStorage.getItem('serverUsername');
        var serverPassword = localStorage.getItem('serverPassword');
        if (localStorage.getItem('settingsCheck') == 1) {
            var syncdb;
            if (window.cordova) {
                var syncdb = new PouchDB(databaseName, {auto_compaction: true, adapter: 'cordova-sqlite'});
            } else {
                var syncdb = databaseName;
            }    
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
                        PouchDB.sync(syncdb, 'http://' + serverUsername + ':' + serverPassword + '@' + serverIp + ':5984/' + databaseName, {
                            live: false,
                            retry: true,
                            batches_limit: 1,
                            batch_size: 1
                        }).on('denied', function (err) {
                            document.getElementById("spinner").style.display = "none";
                            document.getElementById("header").style.display = "block";
                            document.getElementById("page").style.display = "block";                    
                            window.alert("Access Denied? This shouldn't happen.");
                            window.location.reload();
                        }).on('complete', function (info) {
                            console.log('done');
                            document.getElementById("spinner").style.display = "none";
                            document.getElementById("header").style.display = "block";
                            document.getElementById("page").style.display = "block";                  
                            window.alert("Synced successfully!");
                            window.location.reload();  
                        }).on('error', function (err) {
                            document.getElementById("spinner").style.display = "none";
                            document.getElementById("header").style.display = "block";
                            document.getElementById("page").style.display = "block";                    
                            window.alert("Sync Error! Try Again!");
                            window.location.reload();
                        });
                    },
                    404: function (response) {
                        window.alert("Server ip or database name is incorrect! Check server ip and database name!");
                        document.getElementById("spinner").style.display = "none";
                        document.getElementById("header").style.display = "block";
                        document.getElementById("page").style.display = "block";
                        window.location.reload();                    
                    },
                    401: function (response) {
                        window.alert("Incorrect username or password!");
                        document.getElementById("spinner").style.display = "none";
                        document.getElementById("header").style.display = "block";
                        document.getElementById("page").style.display = "block";
                        window.location.reload();                    
                    },
                    0: function (response) {
                        window.alert("Couldn't reach server. Are you connected to the internet?");
                        document.getElementById("spinner").style.display = "none";
                        document.getElementById("header").style.display = "block";
                        document.getElementById("page").style.display = "block";
                        window.location.reload();                    
                    }
                }
            });
        } else {
            window.alert("Check settings!");
            document.getElementById("spinner").style.display = "none";
            document.getElementById("header").style.display = "block";
            document.getElementById("page").style.display = "block";
            window.location.reload();                    
        }
    });
});