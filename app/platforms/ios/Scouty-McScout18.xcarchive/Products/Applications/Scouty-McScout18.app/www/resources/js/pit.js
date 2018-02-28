$(document).ready(function () {
    if (localStorage.getItem('settingsCheck') == 1){
        var databaseName = localStorage.getItem('databaseName');
        var scoutName = localStorage.getItem('scoutName');
        var db = new PouchDB(databaseName);
    } else {
        window.alert("Check Settings!")
    }

    var robotPhotoFront = '';

    function getPlaceCubes() {
        var chkArray = [];
        $("#placeCubes input:checked").each(function () {
            chkArray.push($(this).val());
        });
        var selected = chkArray.join(',');
        return selected
    }


    $('#robotPhotoFront').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = (e) => (robotPhotoFront = e.target.result);
        reader.readAsDataURL(e.target.files[0]);
    });

    var robotPhotoBack = '';

    $('#robotPhotoBack').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = (e) => (robotPhotoBack = e.target.result);
        reader.readAsDataURL(e.target.files[0]);
    });

    var robotPhotoLeft = '';

    $('#robotPhotoLeft').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = (e) => (robotPhotoLeft = e.target.result);
        reader.readAsDataURL(e.target.files[0]);
    });

    var robotPhotoRight = '';

    $('#robotPhotoRight').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = (e) => (robotPhotoRight = e.target.result);
        reader.readAsDataURL(e.target.files[0]);
    });

    var robotPhotoTop = '';

    $('#robotPhotoTop').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = (e) => (robotPhotoTop = e.target.result);
        reader.readAsDataURL(e.target.files[0]);
    });

    $('#teamNumber').on('paste keyup', function (e) {
        var teamNumber = $('#teamNumber').val();
        var id = "pit_" + teamNumber;
        db.get(id).then(function (doc) {
          console.log("found");
          var commentSection = doc.notesAndComments + " \n---EDIT---\n ";
          var manipulatorType = doc.manipulatorType;
          var robotSize = doc.robotSize;
          var robotAppearance = doc.robotAppearance;
          var pitSkill = doc.pitSkill;
          var climberType = doc.climberType;
          var robotDone = doc.robotDone;
          var robotBroken = doc.robotBroken;
          var placeCubes = doc.placeCubes.split(',');
          $('#commentSection').val(commentSection);
          $("input[name=manipulatorType][value=" + manipulatorType + "]").prop('checked', true);
          $('#' + $('input[name=manipulatorType]:checked').attr("id")).addClass('active');
          $("input[name=robotSize][value=" + robotSize + "]").prop('checked', true);
          $('#' + $('input[name=robotSize]:checked').attr("id")).addClass('active');
          $("input[name=robotAppearance][value=" + robotAppearance + "]").prop('checked', true);
          $('#' + $('input[name=robotAppearance]:checked').attr("id")).addClass('active');
          $("input[name=pitSkill][value=" + pitSkill + "]").prop('checked', true);
          $('#' + $('input[name=pitSkill]:checked').attr("id")).addClass('active');
          $("input[name=robotClimber][value=" + climberType + "]").prop('checked', true);
          $('#' + $('input[name=robotClimber]:checked').attr("id")).addClass('active');
          $("input[name=robotDone][value=" + robotDone + "]").prop('checked', true);
          $('#' + $('input[name=robotDone]:checked').attr("id")).addClass('active');
          $("input[name=robotBroken][value=" + robotBroken + "]").prop('checked', true);
          $('#' + $('input[name=robotBroken]:checked').attr("id")).addClass('active');
          for (var i in placeCubes) {
            $("input[name=placeCubes][value=" + placeCubes[i] + "]").prop('checked', true);
            $("#placeCubes input:checked").each(function () {
                $('#' + $(this).attr("id")).addClass('active');
            });
          }
        }).catch(function (err) {
            if (err.name === 'not_found') {
                console.log("not found");
                $('#commentSection').val('');
                $('#' + $('input[name=manipulatorType]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=robotSize]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=robotAppearance]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=pitSkill]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=robotClimber]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=robotDone]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=robotBroken]:checked').attr("id")).removeClass('active');
                $("#placeCubes input:checked").each(function () {
                    $('#' + $(this).attr("id")).removeClass('active');
                });
                $('input[type=checkbox]').attr('checked',false);
                $('input[type=radio]').attr('checked',false);      
            } else {
                console.log(err);
            }
        });
    });
    
    $('#Submit').on('click', function (e) {
        var teamNumber = $('#teamNumber').val();
        var id = "pit_" + teamNumber    
        var commentSection = $('#commentSection').val();
        var manipulatorType = $('input[name=manipulatorType]:checked').val();
        var robotSize = $('input[name=robotSize]:checked').val();
        var robotAppearance = $('input[name=robotAppearance]:checked').val();
        var pitSkill = $('input[name=pitSkill]:checked').val();
        var robotClimber = $('input[name=robotClimber]:checked').val();
        var robotDone = $('input[name=robotDone]:checked').val();
        var robotBroken = $('input[name=robotBroken]:checked').val();
        var placeCubes = getPlaceCubes();

        var doc = {
            "_id": id,
            _attachments: {
                'robotFront.jpg': {
                    content_type: 'image/jpeg',
                    data: robotPhotoFront.slice(23),
                },
                'robotBack.jpg': {
                    content_type: 'image/jpeg',
                    data: robotPhotoBack.slice(23),
                },
                'robotLeft.jpg': {
                    content_type: 'image/jpeg',
                    data: robotPhotoLeft.slice(23),
                },
                'robotRight.jpg': {
                    content_type: 'image/jpeg',
                    data: robotPhotoRight.slice(23),
                },
                'robotTop.jpg': {
                    content_type: 'image/jpeg',
                    data: robotPhotoTop.slice(23),
                }
            },
            "scoutName": scoutName,
            "manipulatorType": manipulatorType,
            "placeCubes": placeCubes,
            "robotSize": robotSize,
            "robotAppearance": robotAppearance,
            "pitSkill": pitSkill,
            "climberType": robotClimber,
            "robotDone": robotDone,
            "robotBroken": robotBroken,
            "notesAndComments": commentSection,
        };
        if (localStorage.getItem('settingsCheck') == 1) {
            if (teamNumber == '') {
                window.alert("Input a team number!");
            } else {
                db.put(doc).then(function () {
                    // success
                    window.alert("Submitted!");
                    window.location.href = '../pit/index.html';
                }).catch(function (err) {
                    if (err.name === 'conflict') {
                        // conflict!
                        window.alert("Pit data already submitted! Use the edit button.");
                    } else {
                        // some other error
                        window.alert("Error!");
                    }
                });
            }
        } else {
            window.alert("Settings are incorrect!");
        }
    });
    $('#Edit').on('click', function (e) {
        var teamNumber = $('#teamNumber').val();
        var id = "pit_" + teamNumber    
        var commentSection = $('#commentSection').val();
        var manipulatorType = $('input[name=manipulatorType]:checked').val();
        var robotSize = $('input[name=robotSize]:checked').val();
        var robotAppearance = $('input[name=robotAppearance]:checked').val();
        var pitSkill = $('input[name=pitSkill]:checked').val();
        var robotClimber = $('input[name=robotClimber]:checked').val();
        var robotDone = $('input[name=robotDone]:checked').val();
        var robotBroken = $('input[name=robotBroken]:checked').val();
        var placeCubes = getPlaceCubes();

        if (localStorage.getItem('settingsCheck') == 1) {
            if (teamNumber == '') {
                window.alert("Input a team number!");
            } else {
                db.get(id, {attachments: true}).then(function(doc) {
                    if (robotPhotoFront == ''){
                        robotPhotoFront = doc._attachments['robotFront.jpg'].data;
                    } else {
                        robotPhotoFront = robotPhotoFront.slice(23);
                    }
                    if (robotPhotoBack = ''){
                        robotPhotoBack = doc._attachments['robotBack.jpg'].data;
                    } else {
                        robotPhotoBack = robotPhotoBack.slice(23);
                    }
                    if (robotPhotoLeft = ''){
                        robotPhotoLeft = doc._attachments['robotLeft.jpg'].data;
                    } else {
                        robotPhotoLeft = robotPhotoLeft.slice(23);
                    }
                    if (robotPhotoRight = ''){
                        robotPhotoRight = doc._attachments['robotRight.jpg'].data;
                    } else {
                        robotPhotoRight = robotPhotoRight.slice(23);
                    }
                    if (robotPhotoTop = ''){
                        robotPhotoTop = doc._attachments['robotTop.jpg'].data;
                    } else {
                        robotPhotoTop = robotPhotoTop.slice(23);
                    }
                  return db.put({
                    _id: id,
                    _rev: doc._rev,
                    _attachments: {
                        'robotFront.jpg': {
                            content_type: 'image/jpeg',
                            data: robotPhotoFront,
                        },
                        'robotBack.jpg': {
                            content_type: 'image/jpeg',
                            data: robotPhotoBack,
                        },
                        'robotLeft.jpg': {
                            content_type: 'image/jpeg',
                            data: robotPhotoLeft,
                        },
                        'robotRight.jpg': {
                            content_type: 'image/jpeg',
                            data: robotPhotoRight,
                        },
                        'robotTop.jpg': {
                            content_type: 'image/jpeg',
                            data: robotPhotoTop,
                        }
                    },
                    "scoutName": scoutName,
                    "manipulatorType": manipulatorType,
                    "placeCubes": placeCubes,
                    "robotSize": robotSize,
                    "robotAppearance": robotAppearance,
                    "pitSkill": pitSkill,
                    "climberType": robotClimber,
                    "robotDone": robotDone,
                    "robotBroken": robotBroken,
                    "notesAndComments": commentSection,
                  });
                }).then(function() {
                    window.alert("Edited!");
                    window.location.href = '../pit/index.html';
                }).catch(function (err) {
                    if (err.name == 'not_found'){
                        window.alert("Pit data not submitted yet, nothing to edit. Use the submit button.");
                    } else {
                        console.log(err);
                        window.alert("Error!");
                    }
                });        
            }
        } else {
            window.alert("Settings are incorrect!");
        }
    });
});