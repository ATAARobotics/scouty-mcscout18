$(document).ready(function(){
    $('#sync').on('click', function(e) {
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