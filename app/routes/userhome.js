import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model() {
        this.controllerFor('userhome').set('showregistration', false);
        var usertype = sessionStorage.getItem('usertype');
        console.log('usertpe :' + usertype);
        this.controllerFor('userhome').set('usertype', usertype);

        if (usertype === 'Manufacturer' || usertype === 'Distributor' || usertype === 'retailer') {
            this.controllerFor('userhome').set('shownewrequestbutton', true);
        } else {
            this.controllerFor('userhome').set('showdashboardButtonOnly', true);

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

        var data = [{
                "requestid": "d0B3UMPZI2oUo+hnkOSgwhp/F/QuQRHnJlFJFGvvxjs=",
                "date": "2017-09-18T04:28:15.575918609Z",
                "status": "MaterialRequested"
            },
            {
                "requestid": "d0B3UMPZI2oUo+hnkOSgwhp/F/QuQRHnJlFJFGvvxjs=",
                "date": "2017-09-18T05:24:17.131768168Z",
                "status": "POraised"
            }
        ];

        var mycontroller = this;
        Ember.$.ajax({
            url: CONFIG.GOURL + '/readIndex',
            type: 'GET',
            contentType: 'application/json',
            success: function(data) {
                // var message = response.message;
                console.log(JSON.stringify(data));
                var message = data.message;
                sessionStorage.setItem('message', message);
                var myarray = message.reverse();
                console.log(JSON.stringify(myarray));
                mycontroller.controllerFor('userhome').set("myarray", myarray);
                mycontroller.controllerFor('userhome').set("data", message);
                console.log("length " + message.length);
            },
            error: function(response) {
                console.log('DEBUG: GET Enquiries Failed');
                console.log("Error Message: ", data.message);

            }

        });
        // to fetch Weather API
        var mycontroller = this;
        $.ajax({
            url: CONFIG.GOURL + '/api/forecast/daily',
            type: 'GET',
            contentType: 'application/json',
            success: function(data) {
                // var message = response.message;
                console.log("data--->>>", JSON.stringify(data));
                var weatherData = data.weatherData;
                console.log("weatherData--->", JSON.stringify(weatherData));
                mycontroller.controllerFor('userhome').set("weatherData", weatherData);
                var myweather = [];

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