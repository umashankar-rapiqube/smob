import Ember from 'ember';
export default Ember.Controller.extend({

actions:{
    gotoupdate:function(){
        var usertype =this.get('usertype');
        console.log("usertype",usertype);
        if(usertype === "Supplier"){
            this.transitionToRoute("quotation");
        }else if(usertype === "Manufacturer"){
            this.transitionToRoute("purchaseorder");
        }
        else if(usertpe === "Distributors"){
            this.transitionToRoute("materialrequest");
        }
        else if(usertpe === "retailer"){
            this.transitionToRoute("quotation");
         }
         else if(usertpe === "Banker"){
            this.transitionToRoute("quotation");            
         }else if(usertpe === "Logistic"){
            this.transitionToRoute("quotation");                        
         }
         else if(usertpe === "Insurer"){
            this.transitionToRoute("quotation");
        }


    }
}


});

