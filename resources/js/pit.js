$(document).ready(function(){
    $('#Submit').on('click', function(e) {
        function getPlaceCubes(){
            var chkArray = [];
            $("#placeCubes input:checked").each(function() {
            chkArray.push($(this).val());
            });
            var selected = chkArray.join(',') ;
            return selected
        }
    var databaseName = localStorage.getItem('databaseName');
    var scoutName = localStorage.getItem('scoutName');
    var teamNumber = $('#teamNumber').val(); 
    var commentSection = $('#commentSection').val();
    var manipulatorType = $('input[name=manipulatorType]:checked').val();
    var robotSize = $('input[name=robotSize]:checked').val();
    var robotAppearance = $('input[name=robotAppearance]:checked').val();
    var pitSkill = $('input[name=pitSkill]:checked').val();
    var robotClimber = $('input[name=robotClimber]:checked').val();
    var placeCubes = getPlaceCubes();
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
     "Cube Manipulator Type": manipulatorType,
     "Can Place Cubes In": placeCubes,
     "Robot Size": robotSize,
     "Robot Appearance": robotAppearance,
     "Pit Crew Skill": pitSkill,
     "Climber Type": robotClimber,
     "Notes and Comments": commentSection,
   };
       if (localStorage.getItem('settingsCheck') == 1) {
            var db = new PouchDB(databaseName);
           db.put(doc).then(function() {
               // success
               window.alert("Submitted!");
               window.location.href = '/pit';
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