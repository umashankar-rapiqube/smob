import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('userhome');
  this.route('home');
  this.route('history');
  this.route('materialrequest');
});

export default Router;
