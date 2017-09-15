import Ember from 'ember';

export default Ember.Route.extend({
    model(){
         this.controllerFor('userhome').set('showregistration', false);
         var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('userhome').set('usertype', usertype);
        if(usertype === 'Manufacturer'|| usertype === 'Distributor' || usertype === 'retailer'){
            this.controllerFor('userhome').set('shownewrequestbutton',true);
        }
var mydata = 155;
         var data = [{"transactionid":mydata, "date":"02/08/2017", "action":"rs cables","status":"PO raised", "action":"","action":""},
        {"transactionid":"595", "date":"16/08/2017", "action":"glasswall", "status":"payment pending", "action":"","action":""},
        {"transactionid":"166", "date":"01/08/2017", "action":"rpqb", "status":"Invoice raised","action":"","action":""},
         ];

         /* $.ajax({
            url:'http://localhost:3000/readIndex',
            type: 'GET',
            contentType: 'application/json',
            success: function(response) {
                // var message = response.message;
            console.log(JSON.stringify(response));
            data =response.message;
            console.log(JSON.stringify(data));
            return data;
            
            },      
                error: function(response) {
               console.log('DEBUG: GET Enquiries Failed');
               console.log("Error Message: ", response.message);
               
        }
            
            });*/


    return data;

    }
});
