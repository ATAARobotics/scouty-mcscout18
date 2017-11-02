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
	
$(document).ready(function(){
 $('#Sync').on('click', function(e) {
  	var dbname = localStorage.getItem('dbname');
 	var serverip = localStorage.getItem('serverip');
	if (localStorage.getItem('settingscheck') == 1){
	$.ajax({url: "http://"+serverip+":5984/"+dbname,
        type: "HEAD",
        timeout:1000,
        statusCode: {
            200: function (response) {
                PouchDB.sync(dbname, 'http://'+serverip+':5984/'+dbname);
				window.alert("Synced successfully!");
            },
            404: function (response) {
                window.alert("Server ip or database name is incorrect! Check server ip and database name! ");
            },
            0: function (response) {
                window.alert("Connect to the internet!");
            }              
        }
 });	
	} else {
	window.alert("Sync failed! Check settings!");
	}
 }); 
});