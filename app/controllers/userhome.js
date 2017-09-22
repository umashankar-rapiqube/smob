import Ember from 'ember';


export default Ember.Controller.extend({
    isshowbutton:false,
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
              
            }else if(usertype === 'Supplier')
            {
              
            
                if(status === "MaterialRequested"){
                    this.transitionToRoute('quotation');
                }
               
                else if(status === "POraised"){
                    this.transitionToRoute('invoice'); 
                 }
                 else if(status === 'InvoiceRaised')
                 {
                    this.set('isshowbutton',false);
                    this.set('isShowdeliveryorder',true);
                     this.transitionToRoute('deliveryorder');
                   
                }
            }
            else if(usertype === 'logistics')
            {
                console.log("logistics");
                if(status === 'DOraised')
                    {
                        console.log("in status");
                        this.set('isShowdeliveryorder',true);
                        this.set('isshowbutton',true);
                      this.transitionToRoute('deliveryorder');
                    }

            }else if(usertype === 'Banker')
            {
                 
                if(status === 'DOdelivered')
                    {
                       // this.transitionToRoute('invoice'); 
                    }

            }
            else if(usertype === 'Distributor')
                {
    
                }
           
             
                    
        },
        newrequest:function(){
              this.transitionToRoute('materialrequest');
                  
        },

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