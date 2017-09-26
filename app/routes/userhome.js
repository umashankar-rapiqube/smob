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
       /*  var data = [
    {"requestid":"525", 
    "date":"02/08/2017",
    "status":"PO raised",  
    "action":"rs cables",
    "action":"",
    "action":""
    },
        {"requestid":"595", 
        "action":"glasswall",
        "date":"16/08/2017", 
        "status":"payment pending",
         "action":"",
         "action":""
        },
        {"requestid":"166",
        "action":"rpqb", 
        "date":"01/08/2017", 
        "status":"Invoice raised",
        "action":"",
        "action":""
    },
    {
    "requestid":"d0B3UMPZI2oUo+hnkOSgwhp/F/QuQRHnJlFJFGvvxjs=",
    "date":"2017-09-18T05:24:17.131768168Z",
    "status":"POraised"}
         ];*/

         var data = [{"requestid":"d0B3UMPZI2oUo+hnkOSgwhp/F/QuQRHnJlFJFGvvxjs=","date":"2017-09-18T04:28:15.575918609Z","status":"MaterialRequested"},
         {"requestid":"d0B3UMPZI2oUo+hnkOSgwhp/F/QuQRHnJlFJFGvvxjs=","date":"2017-09-18T05:24:17.131768168Z","status":"POraised"}];
         
         console.log(data.length)
        var mycontroller =this;
           return $.ajax({
            url:'http://192.168.1.22:3000/readIndex',
            type: 'GET',
            contentType: 'application/json',
            success: function(data) {
                // var message = response.message;
            console.log(JSON.stringify(data));
           var message =data.message;
           sessionStorage.setItem('message', message);
           mycontroller.controllerFor('userhome').set("data",message);
            console.log("length "+message.length);
            //alert("hello")
            return message;
            
            },      
                error: function(response) {
               console.log('DEBUG: GET Enquiries Failed');
               console.log("Error Message: ", data.message);
               
        }
            
            });


    //return data;

    }
});
