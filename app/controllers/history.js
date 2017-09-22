import Ember from 'ember';
export default Ember.Controller.extend({

actions:{
    gotoupdate:function(){
        var usertype =this.get('usertype');
        console.log("usertype",usertype);
        var status =this.get('status');
        console.log("status frim histry cntyr:",status);
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
       
         
       
         
                
    }
}


});

