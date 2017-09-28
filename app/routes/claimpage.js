import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model(){
    var requestid =  this.controllerFor('userhome').get('requestid' );        
    console.log('requestid from do:' +requestid);
    this.controllerFor('claimpage').set('requestid', requestid);

    var usertype = sessionStorage.getItem('usertype') ;
    console.log('usertpe :' +usertype);
    this.controllerFor('claimpage').set('usertype', usertype);

    
    var isshowbutton =  this.controllerFor('history').get('isshowbutton' );        
    console.log('isshowbutton-- from do:' +isshowbutton);
    this.controllerFor('claimpage').set('isshowbutton', isshowbutton);
     
    var isShowclaimdetails  =this.controllerFor('history').get('isShowclaimdetails' );        
     console.log('isShowclaimdetails-- from do:' +isShowclaimdetails);
     this.controllerFor('claimpage').set('isShowclaimdetails', isShowclaimdetails);
    }
});
