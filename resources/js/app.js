$(document).ready(function(){
 $('#Submit').on('click', function(e) {
 var dbname = localStorage.getItem('dbname');
 var first = $('#fname').val(); 
 var last = $('#lname').val();
 var round = $('#round').val();
 var db = new PouchDB(dbname);
 var doc = {
  "_id": round,
  "First": first,
  "Last": last,
};
db.put(doc);
db.info().then(function (info) {
console.log(info);
})
 }); 
});

$(document).ready(function(){
 $('#Sync').on('click', function(e) {
  	var dbname = localStorage.getItem('dbname');
 	var serverip = localStorage.getItem('serverip');
	PouchDB.sync(dbname, 'http://'+serverip+':5984/'+dbname);
 }); 
});