import Ember from 'ember';


export default Ember.Controller.extend({
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

        godetails:function(requestid){
            var requestid = this.get('requestid');
            console.log('requestid',requestid);
            this.set('requestid',requestid);
            console.log("in godetails");
             this.transitionToRoute('history');
        },
        updatedetails:function(requestid,status){
            console.log('requestid',requestid);
            var usertype =this.get('usertype');
            console.log("usertype :",usertype);
            var status ;
            if (usertype === 'Manufacturer'){
                if(status === "MaterialRequested"){
                    this.transitionToRoute('purchaseorder');
                }
                else if(status === "POraised"){
                    this.transitionToRoute('deliveryorder');
                }
               // this.transitionToRoute('purchaseorder');
            }else if(usertype === 'Supplier')
            {
                this.transitionToRoute('quotation');
            }else if(usertype === 'Distributor')
            {

            }
            else if(usertype === 'Distributor')
                {
    
                }
             console.log("in updatedetails");
             
                    
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