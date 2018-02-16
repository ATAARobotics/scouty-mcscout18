$(document).ready(function () {
    var robotPhotoFront = '';

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

    $('#Submit').on('click', function (e) {
        function getPlaceCubes() {
            var chkArray = [];
            $("#placeCubes input:checked").each(function () {
                chkArray.push($(this).val());
            });
            var selected = chkArray.join(',');
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
        var robotDone = $('input[name=robotDone]:checked').val();
        var robotBroken = $('input[name=robotBroken]:checked').val();
        var placeCubes = getPlaceCubes();
        var id = "pit_" + teamNumber

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
            "Scout Name": scoutName,
            "Cube Manipulator Type": manipulatorType,
            "Can Place Cubes In": placeCubes,
            "Robot Size": robotSize,
            "Robot Appearance": robotAppearance,
            "Pit Crew Skill": pitSkill,
            "Climber Type": robotClimber,
            "Robot Done": robotDone,
            "Robot Broken": robotBroken,
            "Notes and Comments": commentSection,
        };
        if (localStorage.getItem('settingsCheck') == 1) {
            if (teamNumber == '') {
                window.alert("Input a team number!");
            } else {
                var db = new PouchDB(databaseName);
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
            window.alert("Database name incorrect! Check settings!");
        }
    });
});