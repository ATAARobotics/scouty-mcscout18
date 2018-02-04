$(document).ready(function(){
 $('#Submit').on('click', function(e) {
 var databaseName = localStorage.getItem('databaseName');
 var scoutName = localStorage.getItem('scoutName');
 var teamNumber = $('#teamNumber').val(); 
 var matchNumber = $('#matchNumber').val();
 var matchType = $('#matchType').val();
 var teleopScaleCubes = $('#teleopScaleCubes').val();
 var teleopSwitchCubes = $('#teleopSwitchCubes').val();
 var teleopExchangeCubes = $('#teleopExchangeCubes').val();
 var climbingType = $('#climbingType').val();
 var speedRating = $('input[name=speedRating]:checked').val();
 var stabilityRating = $('input[name=stabilityRating]:checked').val();
 var skillRating = $('input[name=skillRating]:checked').val();
 var defenceRating = $('input[name=defenceRating]:checked').val();
 var autoCrossedBaseline = $('input[name=autoCrossedBaseline]:checked').val();
 var autoSwitch = $('input[name=autoSwitch]:checked').val();
 var autoScale = $('input[name=autoScale]:checked').val();
 var commentSection = $('#commentSection').val();

 var id = matchType+matchNumber+"_"+teamNumber
 var doc = {
  "_id": id,
  "Scout Name": scoutName,
  "Auto Crossed Baseline": autoCrossedBaseline,
  "Auto Cube On Switch": autoSwitch,
  "Auto Cube On Scale": autoScale,
  "Teleop Cubes In Scale": teleopScaleCubes,
  "Teleop Cubes In Switch": teleopExchangeCubes,
  "Teleop Cubes In Exchange": teleopExchangeCubes,
  "Climbing": climbingType,
  "Speed Rating": speedRating,
  "Stability Rating": stabilityRating,
  "Skill Rating": skillRating,
  "Defence Rating": defenceRating,
  "Notes and Comments": commentSection,
};
	if (localStorage.getItem('settingsCheck') == 1) {
		 var db = new PouchDB(databaseName);
	    db.put(doc).then(function() {
	        // success
	        window.alert("Submitted!");
	        window.location.href = './index.html';
	    }).catch(function(err) {
	        if (err.name === 'conflict') {
	            // conflict!
	            window.alert("Round already submitted!");
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

	function modifyScale_qty(val) {
		var qty = document.getElementById('teleopScaleCubes').value;
		var new_qty = parseInt(qty,10) + parseInt(val,10);
		
		if (new_qty < 0) {
			new_qty = 0;
		}
		
		document.getElementById('teleopScaleCubes').value = new_qty;
		return new_qty;
	}
	function modifySwitch_qty(val) {
		var qty = document.getElementById('teleopSwitchCubes').value;
		var new_qty = parseInt(qty,10) + parseInt(val,10);
		
		if (new_qty < 0) {
			new_qty = 0;
		}
		
		document.getElementById('teleopSwitchCubes').value = new_qty;
		return new_qty;
	}
	function modifyExchange_qty(val) {
		var qty = document.getElementById('teleopExchangeCubes').value;
		var new_qty = parseInt(qty,10) + parseInt(val,10);
		
		if (new_qty < 0) {
			new_qty = 0;
		}
		
		document.getElementById('teleopExchangeCubes').value = new_qty;
		return new_qty;
	}
