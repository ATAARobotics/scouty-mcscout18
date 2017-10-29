$(document).ready(function(){
 $('#Submit').on('click', function(e) {

 var first = $('#fname').val(); 
 var last = $('#lname').val();
 var round = $('#round').val();
 var db = new PouchDB('kittens');
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
PouchDB.sync('kittens', 'http://localhost:5984/kittens');
 }); 
});