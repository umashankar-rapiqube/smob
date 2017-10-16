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
                message: 'This field must be a Valid address '
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
                message: 'Please fill valid details '
            })
        ],
    },


});

export default Ember.Controller.extend(Validations,{
    ShowingModalrequest:false,
    showdeliveryorder:false,
    isShow:true,
    actions:{
        quotationreject:function(){
            var requestid =this.get('requestid');
            console.log("requestid from POcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            var mydate = JSON.stringify(new Date());
            console.log("mydate :",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            var dataString = {  
                "requestid":requestid,
                    "status":"QuotationRejected",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                       "usertype":usertype ,
                      "companyname": "NA",
                       "address":"NA",
                       "item ": "NA",
                       "Quantity":"NA",
                       "formno":"NA",
                       "formdate":formdate1,
                       "totalamount":"NA",
                       "remark":"NA",
                       "status":"QuotationRejected",
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
                        //mycontroller.toggleProperty('ShowingModalrequest');
                            // mycontroller.transitionToRoute('userhome')
                            // mycontroller.transitionToRoute('home');

                },      
                error: function(response) {
                console.log('DEBUG: GET Enquiries Failed');
                console.log("Error Message: ", response.message);
                
                }
                
                });
        },
        gotopo:function(){
            this.set('isShow',false);
            this.set('showdeliveryorder',true);
        },
        submitrequest:function(){
            var requestid =this.get('requestid');
            console.log("requestid from POcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            var url = this.get('url');
            console.log('url ------>',url);
            var mydate = JSON.stringify(this.get('formdate'));
            console.log("mydate :--->",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            let{companyname,
                address,
                item,
                Quantity,
                formno,
                
             }=this.getProperties('companyname','address','item','Quantity','formno')

             var dataString = {  
                "requestid":requestid,
                    "status":"POraised",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "address": address,
                        "item ": item,
                        "Quantity": Quantity,
                        "formno": formno,
                        "formdate":formdate1,
                        "url":url,
                        "totalamount":"NA",
                        "status":"POraised",
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
        okbutton: function(){
            this.transitionToRoute("userhome");
                },
                Goto:function()
                {
                    this.set('ShowingModal',false);
                },

    }
    
        
    
});
