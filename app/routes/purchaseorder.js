import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('purchaseorder').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('purchaseorder').set('usertype', usertype);

        this.controllerFor('purchaseorder').set('ShowingModalrequest', false);
        this.controllerFor('purchaseorder').set('companyname', null);
        this.controllerFor('purchaseorder').set('address', null);
        this.controllerFor('purchaseorder').set('formdate', null);
        this.controllerFor('purchaseorder').set('item', null);

    }
});
