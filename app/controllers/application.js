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
    


});

export default Ember.Controller.extend(Validations,{

    showregistration:false,
    showUser:false,
    isShowlogin:true,
      testlist: ['Manufacturer','Supplier','Distributor','Retailer','Banker','Insuerer','Transpoter'],

    actions:{
        //for pop-up modal
        toggleModal: function() {

            this.toggleProperty('isShowingModal');
        },
        //login function


        
        login:function(){
            var email = this.get('email');
            console.log(email);
              var password = this.get('password');
            console.log(password);
            if (email === null || email === undefined || email === "" || password === null || password === undefined || password === "") {
                    alert("please fill details for login");
                } else {
                    let {
                email,
                password
            } = this.getProperties('email', 'password');
               console.log(email);
               console.log(password);
               var dataString = {
                "email": email,
                "password": password,
            };
            console.log(JSON.stringify(dataString));
                 var mycontroller = this;
                console.log(email);
                return $.ajax({
                url:'http://localhost:3000/mock/Login',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {
                    var message = response.message;
                    var error   = response.error;
                    console.log(message);
                    console.log(error);
                    //if ( message === "login successful") {
                      //  console.log(JSON.stringify(message));
                   // }
                        
                     mycontroller.transitionToRoute('home');

                },      
                    error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
            }
                
                });





            this.set('isShowingModal', false);
            this.set('showUser',true);
             }   



        },
        //goto to on registration
        signup:function(){
            this.set("showregistration",true);
            this.set("isShowlogin",false);

        }
    }

});