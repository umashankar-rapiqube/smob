import Ember from 'ember';

export default Ember.Controller.extend({
    ShowingModalrequest:false,
    actions:{
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from dOcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            let{companyname,
                address,
                invoiceNo,
                formdate,
                item,
                Quantity,
                totalamount
            }=this.getProperties('companyname','address','invoiceNo','formdate','item','Quantity','totalamount')
    
             var dataString = {  
                 "requestid":requestid,
                    "status":"InvoiceRaised",
                    "InvolvedParties":"manufacturer,Supplier,Banker",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "address": address,
                        "invoiceNo":invoiceNo,
                        "formdate":formdate,
                        "item": item,
                        "Quantity": Quantity,    
                        "totalamount": totalamount
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

            approvetoinvoice:function(){
                var requestid =this.get('requestid');
                console.log("requestid from dOcntr ",requestid);
                var usertype =this.get('usertype');
                console.log('usertype',usertype);
                
        
                 var dataString = {  
                     "requestid":requestid,
                        "status":"InvoiceApproved",
                        "InvolvedParties":"manufacturer,Supplier,Banker",
                        "transactionString":{
                            "updatedBy":usertype,
                            
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
                    this.toggleProperty('ShowingModalrequest');

                },        
            okbutton: function(){
                    this.transitionToRoute("userhome");
                }
    
        }
        
            
        
    });
    

