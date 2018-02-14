$(document).ready(function () {
    var robotPhoto = '';

    $('#robotPhoto').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = (e) => (robotPhoto = e.target.result);
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
                'robot.jpg': {
                    content_type: 'image/jpeg',
                    data: robotPhoto.slice(23),
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
        } else {
            window.alert("Database name incorrect! Check settings!");
        }
    });
});