import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.set('myrecord',null);
        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('materialrequest').set('usertype', usertype);

        this.controllerFor('materialrequest').set('ShowingModalrequest', false);
        this.controllerFor('materialrequest').set('Requesttocompany', null);
        this.controllerFor('materialrequest').set('shippingaddress', null);
        this.controllerFor('materialrequest').set('RequestedDate', null);
        this.controllerFor('materialrequest').set('Item', null);
        this.controllerFor('materialrequest').set('Quantity', null);
    }
});
