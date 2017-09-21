import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.controllerFor('deliveryorder').set('ShowingModalrequest', false);
      
        this.controllerFor('deliveryorder').set('delivertocompany', null);
        this.controllerFor('deliveryorder').set('deliveryaddress', null);
        this.controllerFor('deliveryorder').set('item', null);
        this.controllerFor('deliveryorder').set('Quantity', null);
        this.controllerFor('deliveryorder').set('deliveryDate', null);
    
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from do:' +requestid);
        this.controllerFor('deliveryorder').set('requestid', requestid);

      var  isShowdeliveryorder=this.controllerFor('userhome').get('isShowdeliveryorder' );
      console.log('isShowdeliveryorder' +isShowdeliveryorder);
      this.controllerFor('deliveryorder').set('isShowdeliveryorder', isShowdeliveryorder);

    }
});
