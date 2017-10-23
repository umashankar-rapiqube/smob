import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model(){
        var abc =10;
        this.controllerFor('dashboard').set('abc',abc);


        var mycontroller =this;
        Ember.$.ajax({
        url:'http://192.168.11.221:3001/mock/readCycle',
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
        url:'http://192.168.11.221:3001/mock/readStatus',
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
                        
                    }else{
                    mycontroller.controllerFor('dashboard').set('claimRaisedCount', 0);
                    }
                    if(statuscount[i].statusname === "MaterialRequested"){
                        var MaterialRequestedcount =JSON.stringify(statuscount[i].statuscount);
                        console.log("MaterialRequestedcount--->>>>>>>>>",JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('MaterialRequestedcount', MaterialRequestedcount);
                        
                    }else{
                    mycontroller.controllerFor('dashboard').set('MaterialRequestedcount', 0);
                    }
                    if(statuscount[i].statusname === "QuotationRejected"){
                        var QuotationRejectedcount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('QuotationRejectedcount', QuotationRejectedcount);
                    }else{
                    mycontroller.controllerFor('dashboard').set('QuotationRejectedcount', 0);
                    }
                    if(statuscount[i].statusname === "PaymentInitiated"){
                        var PaymentInitiatedcount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('PaymentInitiatedcount', PaymentInitiatedcount);
                    }else{
                    mycontroller.controllerFor('dashboard').set('PaymentInitiatedcount', 0);  
                    }
                    
                    if(statuscount[i].statusname === "POraised"){
                        var POraisedcount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('POraisedcount', POraisedcount*10);
                    }
                    else{
                    mycontroller.controllerFor('dashboard').set('POraisedcount', 0);
                    }
                    if(statuscount[i].statusname === "PaymentReceived"){
                        var PaymentReceivedcount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('PaymentReceivedcount', PaymentReceivedcount);
                    }else{
                    mycontroller.controllerFor('dashboard').set('PaymentReceivedcount', 0);
                    }
                    if(statuscount[i].statusname === "InvoiceRaised"){
                        var InvoiceRaisedcount =JSON.stringify(statuscount[i].statuscount);
                        console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('InvoiceRaisedcount', InvoiceRaisedcount);
                }else{
                    mycontroller.controllerFor('dashboard').set('InvoiceRaisedcount', 0);
                }
                    if(statuscount[i].statusname === "InvoiceApproved"){
                    var InvoiceApprovedcount =JSON.stringify(statuscount[i].statuscount);
                    console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('InvoiceApprovedcount', InvoiceApprovedcount);
                }
                    else{
                        mycontroller.controllerFor('dashboard').set('InvoiceApprovedcount', 0);
                    }
                    if(statuscount[i].statusname === "DoDelivered"){
                    var DoDeliveredcount =JSON.stringify(statuscount[i].statuscount);
                    console.log(JSON.stringify(statuscount[i].statuscount));
                        mycontroller.controllerFor('dashboard').set('DoDeliveredcount', DoDeliveredcount);
                }else{
                mycontroller.controllerFor('dashboard').set('DoDeliveredcount', 0);
                }
                if(statuscount[i].statusname === "NotDelivered"){
                var NotDeliveredcount =JSON.stringify(statuscount[i].statuscount);
                console.log(JSON.stringify(statuscount[i].statuscount));
                    mycontroller.controllerFor('dashboard').set('NotDeliveredcount', NotDeliveredcount);
            }else{
            mycontroller.controllerFor('dashboard').set('NotDeliveredcount', 0);
            }
            if(statuscount[i].statusname === "claimRequested"){
            var claimRequestedcount =JSON.stringify(statuscount[i].statuscount);
            console.log(JSON.stringify(statuscount[i].statuscount));
                mycontroller.controllerFor('dashboard').set('claimRequestedcount', claimRequestedcount);
        }else{
        mycontroller.controllerFor('dashboard').set('claimRequestedcount', 0);
        }
        if(statuscount[i].statusname === "QuotationRaised"){
        var QuotationRaisedcount =JSON.stringify(statuscount[i].statuscount);
        console.log(JSON.stringify(statuscount[i].statuscount));
            mycontroller.controllerFor('dashboard').set('QuotationRaisedcount', QuotationRaisedcount);
    }else{
    mycontroller.controllerFor('dashboard').set('QuotationRaisedcount', 0);
    }
    if(statuscount[i].statusname === "DOraised"){
        var DOraisedcount =JSON.stringify(statuscount[i].statuscount);
        console.log(JSON.stringify(statuscount[i].statuscount));
            mycontroller.controllerFor('dashboard').set('DOraisedcount', DOraisedcount);
    }else{
    mycontroller.controllerFor('dashboard').set('DOraisedcount', 0);
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
