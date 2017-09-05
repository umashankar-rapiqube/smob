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
            var username = this.get('username');
            console.log(username);
              var password = this.get('password');
            console.log(password);
            this.set('isShowingModal', false);
            this.set('showUser',true);
            this.transitionToRoute('userhome');

        },
        //goto to on registration
        signup:function(){
            this.set("showregistration",true);
            this.set("isShowlogin",false);

        }
    }

});