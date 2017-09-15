import Ember from 'ember';

export default Ember.Route.extend({
    model(){
         this.controllerFor('userhome').set('showregistration', false);
         var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('userhome').set('usertype', usertype)
var mydata = 155;
         var data = [{"transactionid":mydata, "date":"02/08/2017", "action":"rs cables","status":"PO raised", "action":"","action":""},
        {"transactionid":"595", "date":"16/08/2017", "action":"glasswall", "status":"payment pending", "action":"","action":""},
        {"transactionid":"166", "date":"01/08/2017", "action":"rpqb", "status":"Invoice raised","action":"","action":""},
         ];


        return data;
    }
});
