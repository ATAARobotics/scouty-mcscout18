$(document).ready(function(){
    $('#sync').on('click', function(e) {
        var databaseName = localStorage.getItem('databaseName');
        var serverIp = localStorage.getItem('serverIp');
       if (localStorage.getItem('settingsCheck') == 1){
       $.ajax({url: "http://"+serverIp+":5984/"+databaseName,
           type: "HEAD",
           timeout:1000,
           statusCode: {
               200: function (response) {
                   PouchDB.sync(databaseName, 'http://'+serverIp+':5984/'+databaseName);
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