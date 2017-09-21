import Ember from 'ember';

export default Ember.Controller.extend({
    isShowdeliveryorder:true,
    ShowingModal:false,

    actions:{
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from dOcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            let{companyname,
                address,
                item,
                Quantity,
                formdate
            }=this.getProperties('companyname','address','item','Quantity','pono','formdate')
    
             var dataString = {  
                 "requestid":requestid,
                    "status":"DOraised",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "address": address,
                        "item": item,
                        "Quantity": Quantity,    
                        "formdate":formdate
                    }
                };
                console.log(JSON.stringify(dataString));
                var mycontroller = this;
    
                    return $.ajax({
                    url:'http://192.168.0.29:3000/updateRequest',
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
                    
                     var dataString = {  
                         "requestid":requestid,
                            "status":"DODelivered",
                            "InvolvedParties":"supplier,logistics",
                            "transactionString":{
                               
                            }
                        };
                        console.log(JSON.stringify(dataString));
                        var mycontroller = this;
            
                            return $.ajax({
                            url:'http://192.168.0.29:3000/updateRequest',
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

                }
    
        }
        
            
        
    });
    

