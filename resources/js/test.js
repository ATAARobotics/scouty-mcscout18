$(document).ready(function() {
  $('#test').on('click', function(e) {
  var db = new PouchDB('http://localhost:5984/kittens');
  db.info().then(function (info) {
  console.log(info);
})
  });
});
