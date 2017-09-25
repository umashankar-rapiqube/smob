import Ember from 'ember';
export default Ember.Controller.extend({

actions:{
    gotoupdate:function(){
        var usertype =this.get('usertype');
        console.log("usertype",usertype);
        var status =this.get('status');
        console.log("status frim histry cntyr:",status);
         var lastusertype = this.get('lastusertype');
         console.log("lastusertype from histery cntr :",lastusertype);
        if (usertype === 'Manufacturer')
        {
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
            }else if(status === "MaterialRequested")
            {
                if(lastusertype === "Distributor")
                {
                this.transitionToRoute('quotation'); 
                }else{
                    alert("This request not intended for You");
                }
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
        }
    }

});

