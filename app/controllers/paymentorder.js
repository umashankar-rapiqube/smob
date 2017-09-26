import Ember from 'ember';
export default Ember.Controller.extend({
    actions:{
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from POcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
      
            let{companyname,
                formno,
                formdate,
                totalamount
             }=this.getProperties('companyname','formno','formdate','totalamount')

             var dataString = {  
                "requestid":requestid,
                    "status":"PaymentInitiated",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "formno": formno,
                        "formdate":formdate,
                        "totalamount":totalamount,
                        "address": "NA",
                        "item":"NA",
                        "Quantity": "NA",
                    }
                };
                console.log(JSON.stringify(dataString));
                    var mycontroller = this;

                    return $.ajax({
                    url:'http://192.168.1.22:3000/updateRequest',
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

        paymentrecieved:function(){
            var requestid =this.get('requestid');
            console.log("requestid from Paymentordercntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
      
            let{companyname,
                formno,
                formdate,
                totalamount
             }=this.getProperties('companyname','formno','formdate','totalamount')

             var dataString = {  
                "requestid":requestid,
                    "status":"PaymentReceived",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": "NA",
                        "formno": "NA",
                        "formdate":"NA",
                        "totalamount":"NA",
                        "address": "NA",
                        "item":"NA",
                        "Quantity": "NA",
                    }
                };
                console.log(JSON.stringify(dataString));
                    var mycontroller = this;

                    return $.ajax({
                    url:'http://192.168.1.22:3000/updateRequest',
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

        }
    
    }

});