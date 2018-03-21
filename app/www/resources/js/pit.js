$(document).ready(function () {
    if (localStorage.getItem('settingsCheck') == 1) {
        var databaseName = localStorage.getItem('databaseName');
        var scoutName = localStorage.getItem('scoutName');
        var db;
        if (window.cordova) {
            document.addEventListener('deviceready', function () {
                console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
                db = new PouchDB(databaseName, { auto_compaction: true, adapter: 'cordova-sqlite' });
                console.log(db.adapter);
                console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
            });
        } else {
            db = new PouchDB(databaseName, { auto_compaction: true });
        }
    } else {
        window.alert("Check Settings!")
    }

    function getPlaceCubes() {
        var chkArray = [];
        $("#placeCubes input:checked").each(function () {
            chkArray.push($(this).val());
        });
        var selected = chkArray.join(',');
        return selected
    }

    var robotPhotoFront = '';

    $('#robotPhotoFront').on('change', function (e) {
        robotPhotoFront = this.files[0];
    });

    var robotPhotoBack = '';

    $('#robotPhotoBack').on('change', function (e) {
        robotPhotoBack = this.files[0];
    });

    var robotPhotoLeft = '';

    $('#robotPhotoLeft').on('change', function (e) {
        robotPhotoLeft = this.files[0];
    });

    var robotPhotoRight = '';

    $('#robotPhotoRight').on('change', function (e) {
        robotPhotoRight = this.files[0];
    });

    var robotPhotoTop = '';

    $('#robotPhotoTop').on('change', function (e) {
        robotPhotoTop = this.files[0];
    });

    $('#teamNumber').on('paste keyup', function (e) {
        var teamNumber = $('#teamNumber').val();
        var id = "pit_" + teamNumber;
        db.get(id, { attachments: true, binary: true }).then(function (doc) {
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
            $('input[type=checkbox]').attr('checked', false);
            $('input[type=radio]').attr('checked', false);
            document.getElementById("robotPhotoFrontPreview").style.display = "none";
            document.getElementById("robotPhotoBackPreview").style.display = "none";
            document.getElementById("robotPhotoLeftPreview").style.display = "none";
            document.getElementById("robotPhotoRightPreview").style.display = "none";
            document.getElementById("robotPhotoTopPreview").style.display = "none";
            var robotPhotoFrontPreview = document.getElementById("robotPhotoFrontPreview");
            robotPhotoFrontPreview.src = "#";
            var robotPhotoBackPreview = document.getElementById("robotPhotoBackPreview");
            robotPhotoBackPreview.src = "#";
            var robotPhotoLeftPreview = document.getElementById("robotPhotoLeftPreview");
            robotPhotoLeftPreview.src = "#";
            var robotPhotoRightPreview = document.getElementById("robotPhotoRightPreview");
            robotPhotoRightPreview.src = "#";
            var robotPhotoTopPreview = document.getElementById("robotPhotoTopPreview");
            robotPhotoTopPreview.src = "#";
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
            var robotPhotoFrontUrl = URL.createObjectURL(doc._attachments['robotFront.jpg'].data);
            var robotPhotoBackUrl = URL.createObjectURL(doc._attachments['robotBack.jpg'].data);
            var robotPhotoLeftUrl = URL.createObjectURL(doc._attachments['robotLeft.jpg'].data);
            var robotPhotoRightUrl = URL.createObjectURL(doc._attachments['robotRight.jpg'].data);
            var robotPhotoTopUrl = URL.createObjectURL(doc._attachments['robotTop.jpg'].data);
            var robotPhotoFrontPreview = document.getElementById("robotPhotoFrontPreview");
            robotPhotoFrontPreview.src = robotPhotoFrontUrl;
            var robotPhotoBackPreview = document.getElementById("robotPhotoBackPreview");
            robotPhotoBackPreview.src = robotPhotoBackUrl;
            var robotPhotoLeftPreview = document.getElementById("robotPhotoLeftPreview");
            robotPhotoLeftPreview.src = robotPhotoLeftUrl;
            var robotPhotoRightPreview = document.getElementById("robotPhotoRightPreview");
            robotPhotoRightPreview.src = robotPhotoRightUrl;
            var robotPhotoTopPreview = document.getElementById("robotPhotoTopPreview");
            robotPhotoTopPreview.src = robotPhotoTopUrl;
            document.getElementById("robotPhotoFrontPreview").style.display = "block";
            document.getElementById("robotPhotoBackPreview").style.display = "block";
            document.getElementById("robotPhotoLeftPreview").style.display = "block";
            document.getElementById("robotPhotoRightPreview").style.display = "block";
            document.getElementById("robotPhotoTopPreview").style.display = "block";
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
                $('input[type=checkbox]').attr('checked', false);
                $('input[type=radio]').attr('checked', false);
                document.getElementById("robotPhotoFrontPreview").style.display = "none";
                document.getElementById("robotPhotoBackPreview").style.display = "none";
                document.getElementById("robotPhotoLeftPreview").style.display = "none";
                document.getElementById("robotPhotoRightPreview").style.display = "none";
                document.getElementById("robotPhotoTopPreview").style.display = "none";
                var robotPhotoFrontPreview = document.getElementById("robotPhotoFrontPreview");
                robotPhotoFrontPreview.src = "#";
                var robotPhotoBackPreview = document.getElementById("robotPhotoBackPreview");
                robotPhotoBackPreview.src = "#";
                var robotPhotoLeftPreview = document.getElementById("robotPhotoLeftPreview");
                robotPhotoLeftPreview.src = "#";
                var robotPhotoRightPreview = document.getElementById("robotPhotoRightPreview");
                robotPhotoRightPreview.src = "#";
                var robotPhotoTopPreview = document.getElementById("robotPhotoTopPreview");
                robotPhotoTopPreview.src = "#";
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
                    content_type: robotPhotoFront.type,
                    data: robotPhotoFront,
                },
                'robotBack.jpg': {
                    content_type: robotPhotoBack.type,
                    data: robotPhotoBack,
                },
                'robotLeft.jpg': {
                    content_type: robotPhotoLeft.type,
                    data: robotPhotoLeft,
                },
                'robotRight.jpg': {
                    content_type: robotPhotoRight.type,
                    data: robotPhotoRight,
                },
                'robotTop.jpg': {
                    content_type: robotPhotoTop.type,
                    data: robotPhotoTop,
                }
            },
            "scoutName": scoutName,
            "manipulatorType": manipulatorType,
            "placeCubes": placeCubes,
            "robotSize": robotSize,
            "robotAppearance": robotAppearance || "0",
            "pitSkill": pitSkill || "0",
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
                        db.get(id, { attachments: true, binary: true }).then(function (doc) {
                            if (robotPhotoFront == '') {
                                robotPhotoFront = doc._attachments['robotFront.jpg'].data;
                            }
                            if (robotPhotoBack == '') {
                                robotPhotoBack = doc._attachments['robotBack.jpg'].data;
                            }
                            if (robotPhotoLeft == '') {
                                robotPhotoLeft = doc._attachments['robotLeft.jpg'].data;
                            }
                            if (robotPhotoRight == '') {
                                robotPhotoRight = doc._attachments['robotRight.jpg'].data;
                            }
                            if (robotPhotoTop == '') {
                                robotPhotoTop = doc._attachments['robotTop.jpg'].data;
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
                                "robotAppearance": robotAppearance || "0",
                                "pitSkill": pitSkill || "0",
                                "climberType": robotClimber,
                                "robotDone": robotDone,
                                "robotBroken": robotBroken,
                                "notesAndComments": commentSection,
                            });
                        }).then(function () {
                            window.alert("Edited!");
                            window.location.href = '../pit/index.html';
                        }).catch(function (err) {
                            if (err.name == 'not_found') {
                                window.alert("Pit data not submitted yet, nothing to edit. Use the submit button.");
                            } else {
                                console.log(err);
                                window.alert("Error!");
                            }
                        });
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
});