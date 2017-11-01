$(document).ready(function(){
 $('#Delete').on('click', function(e) {
 	var dbname = localStorage.getItem('dbname');
 	var localdbname = "_pouch_"+dbname
	indexedDB.deleteDatabase(localdbname);
 }); 
});

$(document).ready(function(){
 $('#Save').on('click', function(e) { 
  var dbname = $('#dbname').val();
  var serverip = $('#serverip').val();

	localStorage.setItem('dbname', dbname);
	localStorage.setItem('serverip', serverip);
	
	 $.ajax({url: "http://"+serverip+":5984/"+dbname,
        type: "HEAD",
        timeout:1000,
        statusCode: {
            200: function (response) {
                window.alert("Settings Saved!");
                localStorage.setItem('settingscheck', '1');
            },
            404: function (response) {
                window.alert("Server ip or database name is incorrect! Check internet connection, server ip and database name! ");
          		localStorage.setItem('serverip', 'incorrect');
                localStorage.setItem('dbname', 'incorrect');
                localStorage.setItem('settingscheck', '0');
            },
            0: function (response) {
                window.alert("Server ip or database name is incorrect! Check internet connection, server ip and database name! ");
                localStorage.setItem('serverip', 'incorrect');
                localStorage.setItem('dbname', 'incorrect');
                localStorage.setItem('settingscheck', '0');
            }              
        }
 });

 }); 
});

$(document).ready(function(){
var dbnametbox = document.getElementById("dbname");
    dbnametbox.value = localStorage.getItem('dbname');
var serveriptbox = document.getElementById("serverip");
    serveriptbox.value = localStorage.getItem('serverip');
});
