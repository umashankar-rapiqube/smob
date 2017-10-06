import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';

export default Ember.Controller.extend({
    isshowbutton:false,
    isShowingWeatherData:false,
    columns: [
            {
                "propertyName": "requestid",
                "title": "Transaction Id",
                "className": "text-left",
                // "routeName": "sample"
            },
            {
                "propertyName": "date",
                "title": "Date",
                "className": "text-left"
            },
            {
                "propertyName": "status",
                "title": "Status",
                "className": "text-left"
            },
             {  
               "title": "Actions",
            "template": "custom/update"
            },
            {
                 
               "title": "Details",
                 "template": "custom/go"
            },
              
            ],
      actions:{
        isShowdeliveryorder:true,
        godetails:function(requestid,status){
            var requestid = requestid;
            console.log('requestid : fron go',requestid);
            this.set('requestid',requestid);
            var status = status;
            console.log('status : fron go',status);
            this.set('status',status);
            console.log("in godetails");
            var usertype =this.get('usertype');
          //  sessionStorage.setItem("updatedby",usertype);
             this.transitionToRoute('history');
        },
        updatedetails:function(requestid,status){
            var requestid = requestid;
            console.log('requestid : from go',requestid);
            this.set('requestid',requestid);
     
            var usertype =this.get('usertype');

            console.log("usertype :",usertype);
            var status =status;
            console.log('status from userhom cntr :',status);
            sessionStorage.setItem('status', status);
            if (usertype === 'Manufacturer'){
                if(status === "QuotationRaised"){
                    this.transitionToRoute('purchaseorder');
                }
                else if(status === "POraised"){
                   // this.transitionToRoute('deliveryorder');
                }
              else if(status === "DoDelivered")
                {
                    this.set('isShowinvoice',false);
                    this.set('isShowbuttoninvoice',true);
                    this.transitionToRoute('invoice'); 
                }else if(status === "MaterialRequested"){
                    
                    this.transitionToRoute('quotation'); 
                }
            }else if(usertype === 'Supplier')
            {
                if(status === "MaterialRequested"){
                    this.transitionToRoute('quotation');
                }
               
                else if(status === "POraised"){
                    this.set('isShowinvoice',true);
                    this.set('isShowbuttoninvoice',false);
                    this.transitionToRoute('invoice'); 
                 }
                 else if(status === 'InvoiceRaised')
                 {
                    this.set('isshowbutton',false);
                    this.set('isShowdeliveryorder',true);
                     this.transitionToRoute('deliveryorder');
                   
                }
                else if(status === 'PaymentInitiated'){
                    this.set('isshowpaymentbutton',true);
                    this.set('isShowpaymentorder',false);
                    this.transitionToRoute('paymentorder'); 
                }
            }
            else if(usertype === 'logistics')
            {
                console.log("logistics");
                if(status === 'DOraised')
                    {
                        console.log("in status");
                        this.set('isshowbutton',true);
                        this.set('isShowdeliveryorder',false);
                      
                      this.transitionToRoute('deliveryorder');
                    }

            }else if(usertype === 'banker')
            {   
                if(status === 'InvoiceApproved')
                    {
                        this.set('isshowpaymentbutton',false);
                        this.set('isShowpaymentorder',true);
                        this.transitionToRoute('paymentorder'); 
                    }

            }
            else if(usertype === 'Distributor')
                {
    
                }
           
             
                    
        },
        newrequest:function(){
              this.transitionToRoute('materialrequest');
                  
        },
        readlegend:function(requestid){
            var requestid=requestid;
            console.log("lolwa:-----------"+requestid);
            var mycontroller = this;
            $.ajax({
           url:CONFIG.GOURL+'/readRequest',
           type: 'GET',
           contentType: 'application/json',
           headers:{
               'authorization':requestid
           },
           success: function(response) {
               // var message = response.message;
           console.log("response>>>>>>>>>>",JSON.stringify(response));
           var transactiondetails =response.message.transactionlist[0].transactiondetails;
               console.log(JSON.stringify(transactiondetails));
               mycontroller.set('transactiondetails', transactiondetails);
           var  transactionlist =  response.message.transactionlist;
               mycontroller.set('transactionlist', transactionlist);
            var involedparties=response.message.involvedparties;
            console.log("involedparties>>>>",involedparties)
            mycontroller.set('involedparties', involedparties);
              },      
          error: function(response) {
              console.log('DEBUG: GET Enquiries Failed');
              console.log("Error Message: ", response.message);
              
          }
          
           });


        },
        gotohistorypage:function(){
            this.transitionToRoute('history');
        },
        gotodashboard:function(){
            this.transitionToRoute('dashboard');
           
        },
        gotoweather:function(){
            console.log("in weather");
           // this.toggleProperty('isShowingWeatherData');
           this.set('isShowingWeatherData',true);
        },
        
        gotoclose:function(){
            this.set('isShowingWeatherData',false);  
        }
        /*callajax:function(){
            var mycontroller = this;
            var message = this.get('data')
            var data = [{"requestid":"d0B3UMPZI2oUo+hnkOSgwhp/F/QuQRHnJlFJFGvvxjs=","date":"2017-09-18T04:28:15.575918609Z","status":"MaterialRequested"},
            {"requestid":"d0B3UMPZI2oUo+hnkOSgwhp/F/QuQRHnJlFJFGvvxjs=","date":"2017-09-18T05:24:17.131768168Z","status":"POraised"}];
                        
            message.push.apply(message,data);
            console.log(message.length)
            this.set('data',message);

        }*/
              
      }      

    
});