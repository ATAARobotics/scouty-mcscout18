$(document).ready(function(){
    $('#Submit').on('click', function(e) {
    var databaseName = localStorage.getItem('databaseName');
    var scoutName = localStorage.getItem('scoutName');
    var teamNumber = $('#teamNumber').val(); 
    var commentSection = $('#commentSection').val();
    var id = "pit_"+teamNumber
   
    var doc = {
     "_id": id,
     _attachments: {
        'robot.jpg': {
          content_type: 'image/jpeg',
          data: 'aGVsbG8gd29ybGQ='
        }
      },
     "Scout Name": scoutName,
     "Notes and Comments": commentSection,
   };
       if (localStorage.getItem('settingsCheck') == 1) {
            var db = new PouchDB(databaseName);
           db.put(doc).then(function() {
               // success
               window.alert("Submitted!");
               window.location.href = '/pit.html';
           }).catch(function(err) {
               if (err.name === 'conflict') {
                   // conflict!
                   window.alert("Pit data already submitted!");
               } else {
                   // some other error
                   window.alert("Error!");
               }
           });
       } else {
           window.alert("Database name incorrect! Check settings!");
       }
       });
       });