import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    companyname: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-z A-Z]{2,30}$/,
            message: 'This field must be a valid Company name'
        })
    ],
    address: {
        description: 'Password',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-z A-Z 0-9]{3,30}$/,
                message: 'This field must be a Valid Password '
            })
        ],
    },
    item :{
        description: 'address',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-zA-Z]{3,18}$/,
                message: 'This field must be a Valid item '
            })
        ],
    },
    
    Quantity:{
        description: 'Quantity',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[0-9]{2,6}$/,
                message: 'Please field this details'
            })
        ],
    },
    totalamount:{
        description: 'Quantity',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[0-9]{2,6}$/,
                message: 'Please field this details'
            })
        ],
    },


});

export default Ember.Controller.extend(Validations,{

    ShowingModalrequest:false,

actions:{
    submitdetails:function(){
        var requestid =this.get('requestid');
        console.log("requestid from qocntr ",requestid);
        var usertype =this.get('usertype');
        console.log('usertype',usertype);
        console.log("in func");
        var url =this.get('url');
        console.log("url------------>",url);
        var mydate = JSON.stringify(this.get('formdate'));
        console.log("mydate :--->",mydate);
        var formdate1 =  mydate.substr(1, 10);
        console.log("formdate ======>>",formdate1);
        let{companyname,
            address,
            item,
            Quantity,
            totalamount,
           
        }=this.getProperties('companyname','address','item','Quantity','totalamount')

         var dataString = { 
            "requestid":requestid, 
            "status":"QuotationRaised",
            "InvolvedParties":"manufacturer,Supplier",
            "transactionString":{
                "updatedBy":usertype,
                    "companyname": companyname,
                    "address": address,
                    "item": item,
                    "Quantity": Quantity,
                    "totalamount": totalamount,
                    "formdate":formdate1,
                    "url":url,
                    "remark":"NA",
                    "status":"QuotationRaised",
                }
            };
            console.log(JSON.stringify(dataString));
            var mycontroller = this;

                return $.ajax({
                url:CONFIG.GOURL +'/updateRequest',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {
                    var message = response.message;
                console.log("message" + message);
                          mycontroller.toggleProperty('ShowingModalrequest');
                            // mycontroller.transitionToRoute('userhome')
                            // mycontroller.transitionToRoute('home');

                },      
                    error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
            }
                
                });
            this.toggleProperty('ShowingModalrequest');


    },
    okbutton: function(){
        this.transitionToRoute("userhome");
    },
    Goto:function()
    {
        this.set('ShowingModal',false);
    },

}
});