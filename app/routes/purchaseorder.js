import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('purchaseorder').set('requestid', requestid);
    }
});
