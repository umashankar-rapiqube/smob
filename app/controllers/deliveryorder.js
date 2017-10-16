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
            regex: /^[a-z A-Z]{3,20}$/,
            message: 'This field must be a valid Company name'
        })
    ],
    address: {
        description: 'Password',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-z A-Z 0-9]{4,18}$/,
                message: 'This field must be a Valid address '
            })
        ],
    },
    item :{
        description: 'address',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-z A-Z]{4,18}$/,
                message: 'This field must be a Valid item '
            })
        ],
    },
    
    Quantity:{
        description: 'Quantity',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[0-9]{1,6}$/,
                message: 'Please field this details '
            })
        ],
    },


});

export default Ember.Controller.extend(Validations,{
  //  isShowdeliveryorder:true,
    ShowingModal:false,
    isshowbutton:false,
    isShow:true,
    actions:{
        toraisedelivery:function(){
            this.set('isShow',false);
            this.set('isShowdeliveryorder',true);
            this.set('isshowbutton',false);
            this.set('isshowNotdelivered',false);
        },
        toDeliverDelivery:function(){
            this.set('isShow',false);
            this.set('isShowdeliveryorder',false);
            this.set('isshowbutton',true);
            this.set('isshowNotdelivered',false);
        },
        notdeliverdelivery:function(){
            this.set('isShow',false);
            this.set('isShowdeliveryorder',false);
            this.set('isshowbutton',false);
            this.set('isshowNotdelivered',true);
        },
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from dOcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            var url =this.get('url');
            console.log('url------>',url);
            var mydate = JSON.stringify(this.get('formdate'));
            console.log("mydate :--->",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            let{companyname,
                address,
                item,
                Quantity
                
            }=this.getProperties('companyname','address','item','Quantity','pono');
    
             var dataString = {  
                 "requestid":requestid,
                    "status":"DOraised",
                    "InvolvedParties":usertype,
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "address": address,
                        "item": item,
                        "Quantity": Quantity,    
                        "formdate":formdate1,
                        "url":url,
                        "totalamount":"NA",
                        "status":"DOraised",
                        "remark":"NA"
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

                doDelivered:function(){
                    var requestid =this.get('requestid');
                    console.log("requestid from dOcntr ",requestid);
                    var usertype =this.get('usertype');
                    console.log('usertype',usertype);
                    var mydate = JSON.stringify(new Date());
                    console.log("mydate :",mydate);
                    var formdate1 =  mydate.substr(1, 10);
                    console.log("formdate ======>>",formdate1);
                    
                     var dataString = {  
                         "requestid":requestid,
                            "status":"DoDelivered",
                            "InvolvedParties":usertype,
                            "transactionString":{
                                "updatedBy":usertype,
                                "status":"DoDelivered",
                                "formdate":formdate1,
                                "remark":"NA",
                                "url":"NA",
                                "item":"NA",
                                "Quantity": "NA"
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

                },
        notDelivered:function(){
            var requestid =this.get('requestid');
            console.log("requestid from dOcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            var remark =this.get('remark');
            console.log('remark',remark);
            var mydate = JSON.stringify(this.get('formdate'));
            console.log("mydate :--->",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            
                var dataString = {  
                    "requestid":requestid,
                    "status":"NotDelivered",
                    "InvolvedParties":usertype,
                    "transactionString":{
                        "updatedBy":usertype,
                        "remark":remark,
                        "status":"NotDelivered",
                        "companyname": "NA",
                        "address":"NA",
                        "item": "NA",
                        "Quantity": "NA",    
                        "formdate":formdate1,
                        "totalamount":"NA",
                        "status":"NotDelivered"
                        
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
                                mycontroller.toggleProperty('myShowingModal');
                                // mycontroller.transitionToRoute('userhome')
                                // mycontroller.transitionToRoute('home');
    
                    },      
                        error: function(response) {
                        console.log('DEBUG: GET Enquiries Failed');
                        console.log("Error Message: ", response.message);
                        
                }
                    
                    });

        },
        Goto:function()
        {
            this.set('isShowingModal',false);
        },

}
        
            
        
    });
    

