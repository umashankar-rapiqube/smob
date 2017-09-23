import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.set('myrecord',null);
        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('materialrequest').set('usertype', usertype);

        this.controllerFor('materialrequest').set('ShowingModalrequest', false);
        this.controllerFor('materialrequest').set('companyname', null);
        this.controllerFor('materialrequest').set('address', null);
        this.controllerFor('materialrequest').set('formdate', null);
        this.controllerFor('materialrequest').set('item', null);
        this.controllerFor('materialrequest').set('Quantity', null);
    }
});
