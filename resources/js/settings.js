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
	localStorage.setItem('test', '1');
	var test = localStorage.getItem('test');
	if (test == 1){
	window.alert("Settings Saved!");
	} else {
	window.alert("Error!");
	}
 }); 
});

$(document).ready(function(){
var dbnametbox = document.getElementById("dbname");
    dbnametbox.value = localStorage.getItem('dbname');
var serveriptbox = document.getElementById("serverip");
    serveriptbox.value = localStorage.getItem('serverip');
});
