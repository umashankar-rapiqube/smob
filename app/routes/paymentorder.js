import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('paymentorder').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('paymentorder').set('usertype', usertype);

        var isShowpaymentorder = this.controllerFor('userhome').get('isShowpaymentorder' );        
        console.log('isShowpaymentorder from po:' +isShowpaymentorder);
        this.controllerFor('paymentorder').set('isShowpaymentorder', isShowpaymentorder);

        var  isshowpaymentbutton=this.controllerFor('userhome').get('isshowpaymentbutton' );
        console.log('isshowpaymentbutton' +isshowpaymentbutton);
        this.controllerFor('paymentorder').set('isshowpaymentbutton', isshowpaymentbutton);
  
    }
});
