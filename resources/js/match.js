﻿$(document).ready(function () {
	if (localStorage.getItem('settingsCheck') == 1){
		var databaseName = localStorage.getItem('databaseName');
		var scoutName = localStorage.getItem('scoutName');
		var db;
		if (window.cordova) {
			document.addEventListener('deviceready', function () {
				console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
				db = new PouchDB(databaseName, {adapter: 'cordova-sqlite'});
				console.log(db.adapter);
				console.log('SQLite plugin is installed?: ' + (!!window.sqlitePlugin));
			});
		} else {
			db = new PouchDB(databaseName);
		}
	} else {
        window.alert("Check Settings!")
    }
	function update(){
		var teamNumber = $('#teamNumber').val();
		var matchNumber = $('#matchNumber').val();
		var matchType = $('#matchType').val();
		var id = matchType + matchNumber + "_" + teamNumber
        db.get(id).then(function (doc) {
			console.log("found");
			$('#commentSection').val('');
			$('#climbingType').val('Choose...');
			$('#teleopSwitchCubes').val('0');
			$('#teleopScaleCubes').val('0');
			$('#teleopExchangeCubes').val('0');
			$('#teleopOppSwitchCubes').val('0');
			$('#teleopDroppedCubes').val('0');
			$('#' + $('input[name=startingPosition]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=autoCrossedBaseline]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=autoSwitch]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=autoScale]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=speedRating]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=stabilityRating]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=skillRating]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=defenceRating]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=anythingBreak]:checked').attr("id")).removeClass('active');
			$('#' + $('input[name=robotDead]:checked').attr("id")).removeClass('active');  
			$('input[type=checkbox]').attr('checked',false);
			$('input[type=radio]').attr('checked',false);
        	var startingPosition = doc.startingPosition;
        	var teleopScaleCubes = doc.teleopScaleCubes;
        	var teleopSwitchCubes = doc.teleopSwitchCubes;
        	var teleopExchangeCubes = doc.teleopExchangeCubes;
			var teleopOppSwitchCubes = doc.teleopOpponentSwitchCubes;
			var teleopDroppedCubes = doc.teleopDroppedCubes;
        	var climbingType = doc.climbingType;
        	var speedRating = doc.speedRating
        	var stabilityRating = doc.stabilityRating;
        	var skillRating = doc.skillRating;
        	var defenceRating = doc.defenceRating;
        	var autoCrossedBaseline = doc.autoCrossedBaseline;
        	var autoSwitch = doc.autoSwitchCube;
        	var autoScale = doc.autoScaleCube;
			var anythingBreak = doc.anythingBreak;
			var robotDead = doc.robotDead;
        	var commentSection = doc.notesAndComments + " \n---EDIT---\n ";
        	$('#commentSection').val(commentSection);
        	$('#climbingType').val(climbingType);
        	$('#teleopSwitchCubes').val(teleopSwitchCubes);
        	$('#teleopScaleCubes').val(teleopScaleCubes);
        	$('#teleopExchangeCubes').val(teleopExchangeCubes);
			$('#teleopOppSwitchCubes').val(teleopOppSwitchCubes);
			$('#teleopDroppedCubes').val(teleopDroppedCubes);
        	$("input[name=startingPosition][value=" + startingPosition + "]").prop('checked', true);
        	$('#' + $('input[name=startingPosition]:checked').attr("id")).addClass('active');
        	$("input[name=autoCrossedBaseline][value=" + autoCrossedBaseline + "]").prop('checked', true);
        	$('#' + $('input[name=autoCrossedBaseline]:checked').attr("id")).addClass('active');
        	$("input[name=autoSwitch][value=" + autoSwitch + "]").prop('checked', true);
        	$('#' + $('input[name=autoSwitch]:checked').attr("id")).addClass('active');
        	$("input[name=autoScale][value=" + autoScale + "]").prop('checked', true);
        	$('#' + $('input[name=autoScale]:checked').attr("id")).addClass('active');
        	$("input[name=speedRating][value=" + speedRating + "]").prop('checked', true);
        	$('#' + $('input[name=speedRating]:checked').attr("id")).addClass('active');
        	$("input[name=stabilityRating][value=" + stabilityRating + "]").prop('checked', true);
        	$('#' + $('input[name=stabilityRating]:checked').attr("id")).addClass('active');
        	$("input[name=skillRating][value=" + skillRating + "]").prop('checked', true);
        	$('#' + $('input[name=skillRating]:checked').attr("id")).addClass('active');
        	$("input[name=defenceRating][value=" + defenceRating + "]").prop('checked', true);
        	$('#' + $('input[name=defenceRating]:checked').attr("id")).addClass('active');
        	$("input[name=anythingBreak][value=" + anythingBreak + "]").prop('checked', true);
			$('#' + $('input[name=anythingBreak]:checked').attr("id")).addClass('active');
			$("input[name=robotDead][value=" + robotDead + "]").prop('checked', true);
        	$('#' + $('input[name=robotDead]:checked').attr("id")).addClass('active');
        }).catch(function (err) {
            if (err.name === 'not_found') {
                console.log("not found");
                $('#commentSection').val('');
                $('#climbingType').val('Choose...');
                $('#teleopSwitchCubes').val('0');
                $('#teleopScaleCubes').val('0');
                $('#teleopExchangeCubes').val('0');
                $('#teleopOppSwitchCubes').val('0');
				$('#teleopDroppedCubes').val('0');
                $('#' + $('input[name=startingPosition]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=autoCrossedBaseline]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=autoSwitch]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=autoScale]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=speedRating]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=stabilityRating]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=skillRating]:checked').attr("id")).removeClass('active');
                $('#' + $('input[name=defenceRating]:checked').attr("id")).removeClass('active');
				$('#' + $('input[name=anythingBreak]:checked').attr("id")).removeClass('active');
				$('#' + $('input[name=robotDead]:checked').attr("id")).removeClass('active');  
                $('input[type=checkbox]').attr('checked',false);
                $('input[type=radio]').attr('checked',false);           
            } else {
                console.log(err);
            }
        });
	}
	$('#teamNumber, #matchNumber').on('paste keyup', function (e) {
		update();
	});
	$('#matchType').on('change', function (e) {
		update();
    });
	$('#Submit').on('click', function (e) {
		var teamNumber = $('#teamNumber').val();
		var matchNumber = $('#matchNumber').val();
		var matchType = $('#matchType').val();
		var startingPosition = $('input[name=startingPosition]:checked').val() || "";
		var teleopScaleCubes = parseInt($('#teleopScaleCubes').val());
		var teleopSwitchCubes = parseInt($('#teleopSwitchCubes').val());
		var teleopExchangeCubes = parseInt($('#teleopExchangeCubes').val());
		var teleopOppSwitchCubes = parseInt($('#teleopOppSwitchCubes').val());
		var teleopDroppedCubes = parseInt($('#teleopDroppedCubes').val());
		var successPercent = (teleopScaleCubes + teleopSwitchCubes + teleopOppSwitchCubes + teleopExchangeCubes) / (teleopScaleCubes + teleopSwitchCubes + teleopOppSwitchCubes + teleopExchangeCubes + teleopDroppedCubes) * 100;
		var climbingType = $('#climbingType').val();
		var speedRating = parseInt($('input[name=speedRating]:checked').val() || "0");
		var stabilityRating = parseInt($('input[name=stabilityRating]:checked').val() || "0");
		var skillRating = parseInt($('input[name=skillRating]:checked').val() || "0");
		var defenceRating = parseInt($('input[name=defenceRating]:checked').val() || "0");
		var autoCrossedBaseline = parseInt($('input[name=autoCrossedBaseline]:checked').val() || null);
		var autoSwitch = parseInt($('input[name=autoSwitch]:checked').val() || null);
		var autoScale = parseInt($('input[name=autoScale]:checked').val() || null);
		var anythingBreak = parseInt($('input[name=anythingBreak]:checked').val() || null);
		var robotDead = parseInt($('input[name=robotDead]:checked').val() || null);
		var commentSection = $('#commentSection').val() || "";

		var id = matchType + matchNumber + "_" + teamNumber
		var doc = {
			"_id": id,
			"scoutName": scoutName,
			"startingPosition": startingPosition,
			"autoCrossedBaseline": autoCrossedBaseline,
			"autoSwitchCube": autoSwitch,
			"autoScaleCube": autoScale,
			"teleopScaleCubes": teleopScaleCubes,
			"teleopSwitchCubes": teleopSwitchCubes,
			"teleopOpponentSwitchCubes": teleopOppSwitchCubes,
			"teleopExchangeCubes": teleopExchangeCubes,
			"teleopDroppedCubes": teleopDroppedCubes,
			"successPercent": successPercent,
			"climbingType": climbingType,
			"speedRating": speedRating,
			"stabilityRating": stabilityRating,
			"skillRating": skillRating,
			"defenceRating": defenceRating,
			"anythingBreak": anythingBreak,
			"robotDead": robotDead,
			"notesAndComments": commentSection,
		};
		if (localStorage.getItem('settingsCheck') == 1) {
			if (matchType == 'Choose...' | matchNumber == '' | teamNumber == '') {
				window.alert("Fill in the general section!");
			} else {
				db.put(doc).then(function () {
					// success
					window.alert("Submitted!");
					window.location.href = './index.html';
				}).catch(function (err) {
					if (err.name === 'conflict') {
						// conflict!
						db.get(id).then(function(doc) {
							return db.put({
							  _id: id,
							  _rev: doc._rev,
							  "scoutName": scoutName,
							  "startingPosition": startingPosition,
							  "autoCrossedBaseline": autoCrossedBaseline,
							  "autoSwitchCube": autoSwitch,
							  "autoScaleCube": autoScale,
							  "teleopScaleCubes": teleopScaleCubes,
							  "teleopSwitchCubes": teleopSwitchCubes,
							  "teleopOpponentSwitchCubes": teleopOppSwitchCubes,
							  "teleopExchangeCubes": teleopExchangeCubes,
							  "teleopDroppedCubes": teleopDroppedCubes,
							  "successPercent": successPercent,
							  "climbingType": climbingType,
							  "speedRating": speedRating,
							  "stabilityRating": stabilityRating,
							  "skillRating": skillRating,
							  "defenceRating": defenceRating,
							  "anythingBreak": anythingBreak,
							  "robotDead": robotDead,
							  "notesAndComments": commentSection,
							  });
						  }).then(function() {
							  window.alert("Edited!");
							  window.location.href = './index.html';
						  }).catch(function (err) {
								console.log(err);
								window.alert("Error!");
						  });        
					} else {
						// some other error
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

function modifyScale_qty(val) {
	var qty = document.getElementById('teleopScaleCubes').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopScaleCubes').value = new_qty;
	return new_qty;
}
function modifySwitch_qty(val) {
	var qty = document.getElementById('teleopSwitchCubes').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopSwitchCubes').value = new_qty;
	return new_qty;
}
function modifyExchange_qty(val) {
	var qty = document.getElementById('teleopExchangeCubes').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopExchangeCubes').value = new_qty;
	return new_qty;
}
function modifyOppSwitch_qty(val) {
	var qty = document.getElementById('teleopOppSwitchCubes').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopOppSwitchCubes').value = new_qty;
	return new_qty;
}
function modifyDropped_qty(val) {
	var qty = document.getElementById('teleopDroppedCubes').value;
	var new_qty = parseInt(qty, 10) + parseInt(val, 10);

	if (new_qty < 0) {
		new_qty = 0;
	}

	document.getElementById('teleopDroppedCubes').value = new_qty;
	return new_qty;
}