import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('history').set('usertype', usertype);

        var mycontroller = this;
        var Transactionid;
        var Transactionlist=[];

                return $.ajax({
                url:'http://192.168.0.29:3000/readRequest',
                type: 'GET',
                contentType: 'application/json',
                success: function(response) {
                    // var message = response.message;
                console.log(JSON.stringify(response));
                 Transactionid=response.requestno;
                 console.log("Transactionid", Transactionid);
                 mycontroller.controllerFor('history').set('Transactionid', Transactionid);
                 Transactionlist=response.transactionList;
                 console.log("Transactionlist",Transactionlist);
                 mycontroller.controllerFor('history').set('Transactionlist',Transactionlist);
             
             
                },      
                    error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
            }
                
                });
    }
});
