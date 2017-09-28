import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model(){
        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('history').set('usertype', usertype);

        var requestid =  this.controllerFor('userhome').get('requestid');        
        console.log('requestid :' +requestid);
        this.controllerFor('history').set('requestid', requestid);

        var status =  this.controllerFor('userhome').get('status'); 
        console.log('status from histry :' +status);
        this.controllerFor('history').set('status', status);

        var updatedby =sessionStorage.getItem('updatedby') ;
        console.log("updatedby from history : ",updatedby);

        var mycontroller = this;
                return $.ajax({
                url:CONFIG.GOURL+'/readRequest',
                type: 'GET',
                contentType: 'application/json', 
                headers:{
                    'authorization':requestid
                },
                success: function(response) {
                    // var message = response.message;
                console.log(JSON.stringify(response));
                var transactiondetails =response.message.transactionlist[0].transactiondetails;
                    console.log(JSON.stringify(transactiondetails));
                    mycontroller.controllerFor('history').set('transactiondetails', transactiondetails);
                var  transactionlist =  response.message.transactionlist; 
                    mycontroller.controllerFor('history').set('transactionlist', transactionlist);
                    /*var mylength =transactionlist.length;
                    console.log("mylength :",mylength);*/
                    var lastindex =transactionlist.slice(-1);
                    console.log("lastindex :",JSON.stringify(lastindex));

                    var secondlastindex =transactionlist.slice(-2);
                    console.log("secondlastindex------------> :",JSON.stringify(secondlastindex));

                    var secondlastusertype =  secondlastindex[0].transactiondetails.updatedBy;
                    console.log("secondlastusertype----->>>>>>>--> :",secondlastusertype);
                    mycontroller.controllerFor('history').set('secondlastusertype', secondlastusertype);

                    var lastusertype = lastindex[0].transactiondetails.updatedBy;
                    console.log("lastusertype :",lastusertype);
                    mycontroller.controllerFor('history').set('lastusertype', lastusertype);
                },      
                error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
                }
                
                });
    }
});
