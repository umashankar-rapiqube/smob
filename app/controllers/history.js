import Ember from 'ember';
export default Ember.Controller.extend({

actions:{
    gotoupdate:function(){
        var usertype =this.get('usertype');
        console.log("usertype",usertype);
        var status ;
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
                 this.transitionToRoute('deliveryorder');
             }
        }
        else if(usertype === "Distributors"){
            this.transitionToRoute("materialrequest");
        }
        else if(usertype === "retailer"){
            this.transitionToRoute("quotation");
         }
         else if(usertype === "Banker"){
            this.transitionToRoute("quotation");            
         }else if(usertype === "Logistic"){
            this.transitionToRoute("quotation");                        
         }
         else if(usertype === "Insurer"){
            this.transitionToRoute("quotation");
        }


    }
}


});

