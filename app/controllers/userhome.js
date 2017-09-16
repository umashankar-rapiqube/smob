import Ember from 'ember';


export default Ember.Controller.extend({
    columns: [
            {
                "propertyName": "transactionid",
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

        godetails:function(){
            console.log("in godetails");
             this.transitionToRoute('history');
        },
        updatedetails:function(){
            var usertype =this.get('usertype');
            console.log("usertype :",usertype);
            if (usertype === 'Manufacturer'){
                this.transitionToRoute('purchaseorder');
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
                  
        }
              
      }      

    
});