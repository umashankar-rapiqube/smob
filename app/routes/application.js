import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model(){
                 this.transitionTo('home');
            this.controllerFor('application').set('showregistration', false);
             //  this.controllerFor('application').set('isShowlogin', false);

    }
});
