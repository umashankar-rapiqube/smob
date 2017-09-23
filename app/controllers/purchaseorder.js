import Ember from 'ember';

export default Ember.Controller.extend({
    ShowingModalrequest:false,
    showdeliveryorder:false,
    isShow:true,
    actions:{
        quotationreject:function(){
            var requestid =this.get('requestid');
            console.log("requestid from POcntr ",requestid);
            var dataString = {  
                "requestid":requestid,
                    "status":"QuotationRejected",
                    "InvolvedParties":"manufacturer,Supplier",
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
            console.log("item :",this.get('item'));
            let{companyname,
                address,
                item,
                Quantity,
                pono,
                formdate
             }=this.getProperties('companyname','address','item','Quantity','pono','formdate')

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
                        "pono": pono,
                        "formdate":formdate,
                        "totalamount":"NA"
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
                }

    }
    
        
    
});
