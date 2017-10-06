import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Controller.extend({
    actions:{
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from Cm cntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype cm ntr',usertype);
            var mydate = JSON.stringify(new Date());
            console.log("mydate :",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            

            let{companyname,
                formdate,
                claimamount,
            }=this.getProperties('companyname','claimamount','formdate');
    
             var dataString = {  
                 "requestid":requestid,
                    "status":"claimRaised",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "claimamount":claimamount,
                        "address": "NA",
                        "item": "NA",
                        "Quantity": "NA",    
                        "formdate":formdate1,
                        "totalamount":"NA",
                        "status":"claimRaised",
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
            this.set('ShowingModal',false);
        },
        doclaimRequest:function(){
            var requestid =this.get('requestid');
            console.log("requestid from Cm cntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype cm ntr',usertype);
            var mydate = JSON.stringify(new Date());
            console.log("mydate :",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            

            let{
                damageamont,
                claimamount,      
            }=this.getProperties('claimamount','damageamont');
    
             var dataString = {  
                 "requestid":requestid,
                    "status":"claimRequested",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": "NA",
                        "claimamount":claimamount,
                        "address": "NA",
                        "item": "NA",
                        "Quantity": "NA",    
                        "formdate": formdate1,  
                        "totalamount":"NA",
                        "status":"claimRequested",
                        "damageamont":damageamont
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

        },
        getclaimamount:function(){
            var requestid =this.get('requestid');
            console.log("requestid from Cm cntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype cm ntr',usertype);

           
             var dataString = {  
                 "requestid":requestid,
                    "status":"claimamountRecieved",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": "NA",
                        "claimamount":"NA",
                        "address": "NA",
                        "item": "NA",
                        "Quantity": "NA",    
                        "formdate": "NA",  
                        "totalamount":"NA",
                        "status":"claimamountRecieved",
                        "damageamont":"NA",
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

        },
        okbutton: function(){
            this.transitionToRoute("userhome");
        },
    }
});