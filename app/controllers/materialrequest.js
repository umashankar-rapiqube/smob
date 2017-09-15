import Ember from 'ember';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
    email: [
        validator('presence', true),
        validator('format', {
            regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'This field must be a valid email address'
        })
    ],
    password: {
        description: 'Password',
        validators: [
            validator('presence', true),
            validator('format', {
                regex: /^[a-zA-Z0-9]{6,8}$/,
                message: 'This field must be a Valid Password (minimum 6 digits required)'
            })
        ],
    },
    policyno: [
        validator('presence', true),
        validator('format', {
            regex: /^[0-9]{5}$/,
            message: 'This field must be a valid policy Number'
        })
    ],


});
  var myrecord =[];
export default Ember.Controller.extend(Validations,{
     





myaddrow:false,
ShowingModalrequest: false,


actions:{
    
    submitdetails:function(){
        console.log("in func");
        let{Requesttocompany,
            shippingaddress,
            RequestedDate,
            Item,
            Quantity}=this.getProperties('Requesttocompany','shippingaddress','RequestedDate','Item','Quantity')

         var dataString = {  
                "status":"materialRequest Sent",
                "InvolvedParties":"manufacturer",
                "transactionString":{
                    "Requesttocompany": Requesttocompany,
                    "shippingaddress": shippingaddress,
                    "RequestedDate": RequestedDate,
                    "Item": Item,
                    "Quantity": Quantity
                }
            };
            console.log(JSON.stringify(dataString));
                 var mycontroller = this;

                return $.ajax({
                url:'http://localhost:3000/mock/Request',
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
       //    this.set("ShowingModalrequest",true);
    },
okbutton: function(){
    this.transitionToRoute("userhome");
},

addrow:function(){
    this.set('myaddrow',true);
             $('button#add').attr('disabled', 'disabled');
            $('button#save').removeAttr('disabled');
        },

saveRow:function () {
  $('button#save').attr('disabled', 'disabled');
  var myvalue =this.get('second');
  console.log('myvalue'+myvalue);
  //var myrecord =[];
  var id = this.get('id');
 console.log('id',id);
 var items= this.get('items');
 console.log('items',items);
 var quantity = this.get('quantity');
 console.log('quantity',quantity);
 //this.set("mysaverow",true);

     myrecord.push({"id":id,"items":items,"quantity":quantity})

    this.set('myaddrow',false);
    console.log(myrecord)
    this.set('myrecord',myrecord);
    this.set("mysaverow",true);
   $('button#add').removeAttr('disabled');
}
}
});