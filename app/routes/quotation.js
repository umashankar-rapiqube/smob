import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.set('myrecord',null);
        this.controllerFor('quotation').set('ShowingModalrequest', false);

        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('quotation').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('quotation').set('usertype', usertype);
    }
});
