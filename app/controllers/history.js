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
          else if(status === "DoDelivered")
            {
                this.set('isShowinvoice',false);
                this.set('isShowbuttoninvoice',true);
                this.transitionToRoute('invoice'); 
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
                    this.transitionToRoute('paymentorder'); 
                }

        }
        else if(usertype === 'Distributor')
            {

            }
                
    }
}


});

