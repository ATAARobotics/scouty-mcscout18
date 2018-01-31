$(document).ready(function(){
 $('#Submit').on('click', function(e) {
 var dbname = localStorage.getItem('dbname');
 var teamNumber = $('#teamNumber').val(); 
 var last = $('#lname').val();
 var roundNumber = $('#roundNumber').val();
 var roundType = $('#roundType').val();
 var numberThings = $('input[name=numberThings]:checked').val();
 var id = roundType+roundNumber+"_"+teamNumber
 var doc = {
  "_id": id,
  "Last": last,
  "Number": numberThings,
};
	if (localStorage.getItem('settingscheck') == 1) {
		 var db = new PouchDB(dbname);
	    db.put(doc).then(function() {
	        // success
	        window.alert("Submitted!");
	        window.location.href = 'index.html';
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
		var qty = document.getElementById('scaleCubes').value;
		var new_qty = parseInt(qty,10) + parseInt(val,10);
		
		if (new_qty < 0) {
			new_qty = 0;
		}
		
		document.getElementById('scaleCubes').value = new_qty;
		return new_qty;
	}
	function modifySwitch_qty(val) {
		var qty = document.getElementById('switchCubes').value;
		var new_qty = parseInt(qty,10) + parseInt(val,10);
		
		if (new_qty < 0) {
			new_qty = 0;
		}
		
		document.getElementById('switchCubes').value = new_qty;
		return new_qty;
	}
	function modifyExchange_qty(val) {
		var qty = document.getElementById('exchangeCubes').value;
		var new_qty = parseInt(qty,10) + parseInt(val,10);
		
		if (new_qty < 0) {
			new_qty = 0;
		}
		
		document.getElementById('exchangeCubes').value = new_qty;
		return new_qty;
	}
