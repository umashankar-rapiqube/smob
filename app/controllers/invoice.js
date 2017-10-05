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
            regex: /^[a-zA-Z]{4,20}$/,
            message: 'This field must be a valid Company name'
        })
    ],
    address: {
        description: 'Password',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-zA-Z0-9]{6,18}$/,
                message: 'This field must be a Valid Password '
            })
        ],
    },
    item :{
        description: 'address',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-zA-Z]{6,18}$/,
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
                message: 'This field must be a Valid item '
            })
        ],
    },


});

export default Ember.Controller.extend(Validations,{
    ShowingModalrequest:false,
    ShowingModal:false,
    actions:{
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from dOcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            var url =this.get('url');
            console.log('url------->',url);
            var mydate = JSON.stringify(this.get('formdate'));
            console.log("mydate :--->",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            let{companyname,
                address,
                formno,
                item,
                Quantity,
                totalamount
            }=this.getProperties('companyname','address','formno','item','Quantity','totalamount');
    
             var dataString = {  
                 "requestid":requestid,
                    "status":"InvoiceRaised",
                    "InvolvedParties":usertype,
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "address": address,
                        "formno":formno,
                        "formdate":formdate1,
                        "item": item,
                        "Quantity": Quantity,    
                        "totalamount": totalamount,
                        "url":url,
                        "status":"InvoiceRaised",
                    }
                };
                console.log(JSON.stringify(dataString));
                var mycontroller = this;
    
                    return $.ajax({
                    url:CONFIG.GOURL+'/updateRequest',
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

            approvetoinvoice:function(){
                var requestid =this.get('requestid');
                console.log("requestid from dOcntr ",requestid);
                var usertype =this.get('usertype');
                console.log('usertype',usertype);
                var mydate = JSON.stringify(this.get('formdate'));
                console.log("mydate :--->",mydate);
                var formdate1 =  mydate.substr(1, 10);
                console.log("formdate ======>>",formdate1);
                 var dataString = {  
                     "requestid":requestid,
                        "status":"InvoiceApproved",
                        "InvolvedParties":usertype,
                        "transactionString":{
                            "updatedBy":usertype,
                            "status":"InvoiceApproved",
                            "formdate":formdate1,
                            "formno":"NA",
                            "item": "NA",
                            "Quantity": "NA",    
                            "totalamount":"NA",
                            "url":"NA"
                            
                        }
                    };
                    console.log(JSON.stringify(dataString));
                    var mycontroller = this;
        
                        return $.ajax({
                        url:CONFIG.GOURL+'/updateRequest',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(dataString),
                        success: function(response) {
                            var message = response.message;
                            console.log("message" + message);
                                  mycontroller.toggleProperty('ShowingModal');
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
                    this.set('isShowingModal',false);
                },
    
        }
        
            
        
    });
    

