$(document).ready(function () {
	$('#Submit').on('click', function (e) {
		var databaseName = localStorage.getItem('databaseName');
		var scoutName = localStorage.getItem('scoutName');
		var teamNumber = $('#teamNumber').val();
		var matchNumber = $('#matchNumber').val();
		var matchType = $('#matchType').val();
		var allianceColor = $('input[name=allianceColor]:checked').val();
		var startingPosition = $('input[name=startingPosition]:checked').val();
		var teleopScaleCubes = $('#teleopScaleCubes').val();
		var teleopSwitchCubes = $('#teleopSwitchCubes').val();
		var teleopExchangeCubes = $('#teleopExchangeCubes').val();
		var teleopOppSwitchCubes = $('#teleopOppSwitchCubes').val();
		var climbingType = $('#climbingType').val();
		var speedRating = $('input[name=speedRating]:checked').val();
		var cubeCycleTime = cubeCycleSeconds.innerHTML + '.' + cubeCycleTenths.innerHTML
		var stabilityRating = $('input[name=stabilityRating]:checked').val();
		var skillRating = $('input[name=skillRating]:checked').val();
		var defenceRating = $('input[name=defenceRating]:checked').val();
		var autoCrossedBaseline = $('input[name=autoCrossedBaseline]:checked').val();
		var autoSwitch = $('input[name=autoSwitch]:checked').val();
		var autoScale = $('input[name=autoScale]:checked').val();
		var anythingBreak = $('input[name=anythingBreak]:checked').val();
		var commentSection = $('#commentSection').val();

		var id = matchType + matchNumber + "_" + teamNumber
		var doc = {
			"_id": id,
			"scoutName": scoutName,
			"allianceColor": allianceColor,
			"startingPosition": startingPosition,
			"autoCrossedBaseline": autoCrossedBaseline,
			"autoSwitchCube": autoSwitch,
			"autoScaleCube": autoScale,
			"teleopScaleCubes": teleopScaleCubes,
			"teleopSwitchCubes": teleopSwitchCubes,
			"teleopOpponentSwitchCubes": teleopOppSwitchCubes,
			"teleopExchangeCubes": teleopExchangeCubes,
			"climbingType": climbingType,
			"speedRating": speedRating,
			"cubeCycleTime": cubeCycleTime,
			"stabilityRating": stabilityRating,
			"skillRating": skillRating,
			"defenceRating": defenceRating,
			"anythingBreak": anythingBreak,
			"notesAndComments": commentSection,
		};
		if (localStorage.getItem('settingsCheck') == 1) {
			if (matchType == 'Choose...' | matchNumber == '' | teamNumber == '') {
				window.alert("Fill in the general section!");
			} else {
				var db = new PouchDB(databaseName);
				db.put(doc).then(function () {
					// success
					window.alert("Submitted!");
					window.location.href = './index.html';
				}).catch(function (err) {
					if (err.name === 'conflict') {
						// conflict!
						window.alert("Match already submitted! Check Round Type and Number.");
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



window.onload = function () {

	var seconds = 00;
	var tenths = 00;
	var cubeCycleTenths = document.getElementById("cubeCycleTenths");
	var cubeCycleSeconds = document.getElementById("cubeCycleSeconds");
	var cubeTimerStart = document.getElementById('cubeTimerStart');
	var cubeTimerStop = document.getElementById('cubeTimerStop');
	var cubeTimerReset = document.getElementById('cubeTimerReset');
	var Interval;

	cubeTimerStart.onclick = function () {

		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	}

	cubeTimerStop.onclick = function () {
		clearInterval(Interval);
	}


	cubeTimerReset.onclick = function () {
		clearInterval(Interval);
		tenths = "00";
		seconds = "00";
		cubeCycleTenths.innerHTML = tenths;
		cubeCycleSeconds.innerHTML = seconds;
	}



	function startTimer() {
		tenths++;

		if (tenths < 9) {
			cubeCycleTenths.innerHTML = "0" + tenths;
		}

		if (tenths > 9) {
			cubeCycleTenths.innerHTML = tenths;

		}

		if (tenths > 99) {
			seconds++;
			cubeCycleSeconds.innerHTML = "0" + seconds;
			tenths = 0;
			cubeCycleTenths.innerHTML = "0" + 0;
		}

		if (seconds > 9) {
			cubeCycleSeconds.innerHTML = seconds;
		}

	}


}
