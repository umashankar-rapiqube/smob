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
                if(status === 'MaterialRequested'  )
                {
                    if(lastusertype === "Distributor"){ 
                    this.transitionToRoute('quotation'); 
                    }
                    else
                        {
                              alert("This request not intended for You...1");
                        }    
                }
               
              
        if(status === 'QuotationRaised' )
                 {
                     if( lastusertype === "Supplier"){
                    this.transitionToRoute('purchaseorder');
                     }
                     else
                        {
                              alert("This request not intended for You...1");
                        }    
                 } 
               
       if(status === 'POraised')

                {
                    if( lastusertype === "Distributor"){
                    this.set('isShowinvoice',true);
                    this.set('isShowbuttoninvoice',false);
                    this.transitionToRoute('invoice');
                 } 
                 else
                    {
                          alert("This request not intended for You ..3");
                    }   
                }
       if(status === 'InvoiceRaised'  )
                    {
                        if(lastusertype === "Manufacturer"){
                        this.transitionToRoute('deliveryorder');
                        }
                     
                     else
                        {
                              alert("This request not intended for You...4");
                        } 
                    }  
      if(status === 'DoDelivered')
                    {
                        if(lastusertype === "logistics")   {
                        this.set('isShowinvoice',false);
                            this.set('isShowbuttoninvoice',true);
                            this.transitionToRoute('invoice');
                        }
                    
                    else
                    {
                          alert("This request not intended for You");
                    }    
                }
            }
            
            if (usertype === 'Supplier')
            {
                if(status === 'MaterialRequested')
                    {
                        console.log("....1.....")
                        if(lastusertype === 'Manufacturer'){
                         this.transitionToRoute('quotation'); 
                        }
                        else
                            {
                                alert("This request not intended for You ....5");
                            }
                    }
                    
                if(status === 'POraised' )
                    {
                        console.log("in poraised supplirr");
                        if(lastusertype === 'Manufacturer'){ 
                            this.set('isShowinvoice',true);
                            this.set('isShowbuttoninvoice',false)
                        this.transitionToRoute('invoice'); 
                        }
                        else
                            {
                                alert("This request not intended for You ....5");
                            }
                    }
                      
                    if(status === 'InvoiceRaised' )
                        {
                            if(lastusertype === "Supplier"){
                            
                            this.set('isshowbutton',false);
                            this.set('isShowdeliveryorder',true);
                            this.transitionToRoute('deliveryorder'); 
                            } else
                            {
                                alert("This request not intended for You ....5");
                            }
                        }
                        if(status === 'PaymentInitiated' )
                            {
                            if(lastusertype === "banker"){
                            
                            this.set('isShowpaymentorder',false);
                            this.set('isshowpaymentbutton',true);
                            this.transitionToRoute('paymentorder'); 
                            } else
                            {
                                alert("This request not intended for You ....5");
                            }
                            }
                         
            }
            if (usertype === 'Distributor')
            {
               console.log("in if distributor..............")
                if(status === 'QuotationRaised')
                {
                    if(lastusertype === "Manufacturer")
                        {
                            this.transitionToRoute('purchaseorder'); 
                        }
                        else
                        {
                                alert("This request not intended for You ...6");
                            }    
                    }
                else
                    {
                         alert("This request not intended for You ...6");
                     }
                     /*if(status === 'Doraised')
                        {
                            if(lastusertype === "Manufacturer")
                                {
                                    this.transitionToRoute('purchaseorder'); 
                                }
                        }*/

            }
            if (usertype === 'logistics')
            {
                if(status === 'DOraised')
                    {
                        if(lastusertype === "Supplier")
                            {
                                this.set('isShowdeliveryorder',false);
                                this.set('isshowbutton',true);
                                this.transitionToRoute('deliveryorder'); 
                            }
                    }
            }
            if (usertype === 'banker')
                {
                    if(status === 'InvoiceRaised')
                        {
                            if(lastusertype === "Manufacturer")
                                {
                                    this.set('isShowpaymentorder',true);
                                    this.set('isshowpaymentbutton',false);
                                    this.transitionToRoute('paymentorder'); 
                                }
                        }
        
                }
          
      
            
        
        }
    }

});

