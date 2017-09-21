import Ember from 'ember';
export default Ember.Controller.extend({

    ShowingModalrequest:false,

actions:{
    submitdetails:function(){
        var requestid =this.get('requestid');
        console.log("requestid from qocntr ",requestid);
        var usertype =this.get('usertype');
        console.log('usertype',usertype);
        console.log("in func");
        let{companyname,
            address,
            item,
            Quantity,
            totalamount,
            formdate
        }=this.getProperties('companyname','address','item','Quantity','totalamount','formdate')

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
    }

}
});