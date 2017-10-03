import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model(){
        var abc =10;
        this.controllerFor('dashboard').set('abc',abc);


        var mycontroller =this;
        Ember.$.ajax({
         url:CONFIG.GOURL+'/readCycle',
         type: 'GET',
         contentType: 'application/json',
         success: function(data) {
             // var message = response.message;
         console.log(JSON.stringify(data));
        var message =data.message;
        var openStatus =data.openStatus;
        console.log("openStatus--->",openStatus);
        mycontroller.controllerFor('dashboard').set('openStatus',openStatus);
        var myopenStatus =openStatus *10;
        console.log("myopenStatus---------------------->",myopenStatus);
        mycontroller.controllerFor('dashboard').set('myopenStatus',myopenStatus);
       var  closedStatus =data.closedStatus;
       console.log("closedStatus--->",closedStatus);
       mycontroller.controllerFor('dashboard').set('closedStatus',closedStatus);
       var myclosedStatus =closedStatus *10;
       console.log("myclosedStatus---------------------->",myclosedStatus);
       mycontroller.controllerFor('dashboard').set('myclosedStatus',myclosedStatus);
       
       $.ajax({
        url:CONFIG.GOURL+'/readStatus',
        type: 'GET',
        contentType: 'application/json',
        success: function(data) {
            console.log("data------------------------------->>>>>>>>",JSON.stringify(data));
            var statuscount =data.statuscount;
            console.log("statuscount",statuscount);
            mycontroller.controllerFor('dashboard').set('statuscount',statuscount);

            for(var i=0;i < statuscount.length ;i++){
                
                                  if(statuscount[i].statusname === "claimRaised"){
                                      var claimRaisedCount =JSON.stringify(statuscount[i].statuscount);
                                      console.log(JSON.stringify(statuscount[i].statuscount));
                                       mycontroller.controllerFor('dashboard').set('claimRaisedCount', claimRaisedCount);
                                      
                                  }
                                   else if(statuscount[i].statusname === "MaterialRequested"){
                                      var MaterialRequestedcount =JSON.stringify(statuscount[i].statuscount);
                                      console.log(JSON.stringify(statuscount[i].statuscount));
                                       mycontroller.controllerFor('dashboard').set('MaterialRequestedcount', MaterialRequestedcount);
                                      
                                  }
                                  else if(statuscount[i].statusname === "QuotationRejected"){
                                      var QuotationRejectedcount =JSON.stringify(statuscount[i].statuscount);
                                      console.log(JSON.stringify(statuscount[i].statuscount));
                                       mycontroller.controllerFor('dashboard').set('QuotationRejectedcount', QuotationRejectedcount);
                                  }
                                  else if(statuscount[i].statusname === "Submitted"){
                                      var Submittedstatuscount =JSON.stringify(statuscount[i].statuscount);
                                      console.log(JSON.stringify(statuscount[i].statuscount));
                                       mycontroller.controllerFor('dashboard').set('Submittedstatuscount', Submittedstatuscount);
                                  }
                                 
                                else if(statuscount[i].statusname === "Validated"){
                                      var Validatedstatuscount =JSON.stringify(statuscount[i].statuscount);
                                      console.log(JSON.stringify(statuscount[i].statuscount));
                                       mycontroller.controllerFor('dashboard').set('Validatedstatuscount', Validatedstatuscount);
                                  }
                                   
                                   else if(statuscount[i].statusname === "Settled"){
                                      var Settledstatuscount =JSON.stringify(statuscount[i].statuscount);
                                      console.log(JSON.stringify(statuscount[i].statuscount));
                                       mycontroller.controllerFor('dashboard').set('Settledstatuscount', Settledstatuscount);
                                  }
                                   else if(statuscount[i].statusname === "Rejected"){
                                      var Rejectedstatuscount =JSON.stringify(statuscount[i].statuscount);
                                      console.log(JSON.stringify(statuscount[i].statuscount));
                                       mycontroller.controllerFor('dashboard').set('Rejectedstatuscount', Rejectedstatuscount);
                }
            }
        
        },      
            error: function(response) {
           console.log('DEBUG: GET Enquiries Failed');
           console.log("Error Message: ", data.message);
           
    }
        
        });
         
         },      
             error: function(response) {
            console.log('DEBUG: GET Enquiries Failed');
            console.log("Error Message: ", data.message);
            
     }
         
         });

          
        
    }
});
