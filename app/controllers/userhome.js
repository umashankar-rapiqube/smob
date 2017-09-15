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

export default Ember.Controller.extend(Validations,{
    columns: [
            {
                "propertyName": "transactionid",
                "title": "Transaction Id",
                "className": "text-left",
                // "routeName": "sample"
            },
            {
                "propertyName": "date",
                "title": "Date",
                "className": "text-left"
            },
            {
                "propertyName": "status",
                "title": "Status",
                "className": "text-left"
            },
             {  
               "title": "Actions",
            "template": "custom/update"
            },
            {
                 
               "title": "Details",
                 "template": "custom/go"
            },
              
            ],
      actions:{

        godetails:function(){
            console.log("in godetails");
             this.transitionToRoute('history');
        },
        updatedetails:function(){
            var usertype =this.get('usertype');
            console.log("usertype :",usertype);
            if (usertype === 'Manufacturer'){
                this.transitionToRoute('purchaseorder');
            }else if(usertype === 'Supplier')
            {
                this.transitionToRoute('quotation');
            }else if(usertype === 'Distributor')
            {

            }
            else if(usertype === 'Distributor')
                {
    
                }
             console.log("in updatedetails");
             
                    
        },
        newrequest:function(){
              this.transitionToRoute('materialrequest');
                  
        }
              
      }      

    
});