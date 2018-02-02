$(document).ready(function(){
 $('#Delete').on('click', function(e) {
 	var databaseName = localStorage.getItem('databaseName');
 	var localdbname = "_pouch_"+databaseName
	indexedDB.deleteDatabase(localdbname);
 }); 
});

$(document).ready(function(){
 $('#Save').on('click', function(e) { 
  var databaseName = $('#databaseName').val();
  var serverIp = $('#serverIp').val();
  var scoutName = $('#scoutName').val();
	
	 $.ajax({url: "http://"+serverIp+":5984/"+databaseName,
        type: "HEAD",
        timeout:1000,
        statusCode: {
            200: function (response) {
                localStorage.setItem('databaseName', databaseName);
                localStorage.setItem('serverIp', serverIp);
                localStorage.setItem('settingsCheck', '1');
                localStorage.setItem('scoutName', scoutName);
                window.alert("Settings Saved!");
                window.location.href = '/index.html';
            },
            404: function (response) {
                if (confirm("Server ip or database name is incorrect! Check server ip and database name! Are you sure these settings are correct?")) {
                    localStorage.setItem('databaseName', databaseName);
                    localStorage.setItem('serverIp', serverIp);
                    localStorage.setItem('settingsCheck', '1');
                    localStorage.setItem('scoutName', scoutName);
                    window.alert("Settings Saved!");
                    window.location.href = '/index.html';                
                } else {
                    localStorage.setItem('serverIp', 'incorrect');
                    localStorage.setItem('databaseName', 'incorrect');
                    localStorage.setItem('scoutName', scoutName);
                    localStorage.setItem('settingsCheck', '0');     
                }
            },
            0: function (response) {
                if (confirm("Server ip or database name is incorrect! Check internet connection, server ip and database name! Are you sure these settings are correct?")) {
                    localStorage.setItem('databaseName', databaseName);
                    localStorage.setItem('serverIp', serverIp);
                    localStorage.setItem('settingsCheck', '1');
                    localStorage.setItem('scoutName', scoutName);
                    window.alert("Settings Saved!");
                    window.location.href = '/index.html';                
                } else {
                    localStorage.setItem('serverIp', 'incorrect');
                    localStorage.setItem('databaseName', 'incorrect');
                    localStorage.setItem('scoutName', scoutName);
                    localStorage.setItem('settingsCheck', '0');     
                }
            }              
        }
 });

 }); 
});

$(document).ready(function(){
var databaseNameSet = document.getElementById("databaseName");
    databaseNameSet.value = localStorage.getItem('databaseName');
var serverIpSet = document.getElementById("serverIp");
    serverIpSet.value = localStorage.getItem('serverIp');
var scoutNameSet = document.getElementById("scoutName");
    scoutNameSet.value = localStorage.getItem('scoutName');
});
