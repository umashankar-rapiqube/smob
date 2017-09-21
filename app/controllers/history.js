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
           // this.transitionToRoute('invoice'); 
            if(status === "MaterialRequested"){
                this.transitionToRoute('quotation');
            }
           
            else if(status === "POraised"){
                 this.transitionToRoute('deliveryorder');
             }
             else if(status === 'DOraised')
             {
                this.transitionToRoute('invoice'); 
            }
        }
        else if(usertype === 'logistics')
        {
            console.log("logistics");
            if(status === 'InvoiceRaised')
                {
                    console.log("in status");
                    this.set('isShowdeliveryorder',false);
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
       
         
                
    }
}


});

