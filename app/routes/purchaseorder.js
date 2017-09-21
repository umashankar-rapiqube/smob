import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('purchaseorder').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('purchaseorder').set('usertype', usertype);

    }
});
