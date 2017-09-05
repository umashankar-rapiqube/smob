import Ember from 'ember';

export default Ember.Route.extend({
    model(){
                 this.transitionTo('home');
            this.controllerFor('application').set('showregistration', false);
             //  this.controllerFor('application').set('isShowlogin', false);

    }
});
