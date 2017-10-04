import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Controller.extend({

    actions: {
        gotoupdate: function() {
            var usertype = this.get('usertype');
            console.log("usertype", usertype);
            var status = this.get('status');
            console.log("status frim histry cntyr:", status);
            var lastusertype = this.get('lastusertype');
            console.log("lastusertype from histery cntr :", lastusertype);
            var secondlastusertype =this.get('secondlastusertype');
            console.log("secondlastusertype from histery cntr :", secondlastusertype);

            if (usertype === 'Manufacturer') {

                if (status === 'MaterialRequested') {
                    if (lastusertype === "Distributor") {
                        this.transitionToRoute('quotation');
                    } else {
                        alert("This request not intended for You...1");
                    }
                }


                if (status === 'QuotationRaised') {
                    if (lastusertype === "Supplier") {
                        this.transitionToRoute('purchaseorder');
                    } else {
                        alert("This request not intended for You...1");
                    }
                }

                if (status === 'POraised')
                {
                    if (lastusertype === "Distributor") {
                        this.set('isShowinvoice', true);
                        this.set('isShowbuttoninvoice', false);
                        this.transitionToRoute('invoice');
                    } else {
                        alert("This request not intended for You ..3");
                    }
                }
                if (status === 'InvoiceRaised') {
                    if (lastusertype === "Manufacturer") {
                        this.set('isShow', false);
                        this.set('isShowdeliveryorder', true);
                        this.transitionToRoute('deliveryorder');
                    } else {
                        alert("This request not intended for You...4");
                    }
                }
                if (status === 'DoDelivered') {
                    if (lastusertype === "logistics") {
                        if(secondlastusertype === 'Supplier'){
                        this.set('isShowinvoice', false);
                        this.set('isShowbuttoninvoice', true);
                        this.transitionToRoute('invoice');
                        }
                        else {
                            alert("This request not intended for You");
                        }
                    } 
                }
                if (status === 'NotDelivered') {
                    if (lastusertype === "logistics") {
                        this.set('isShowclaimdetails', false);
                        this.set("isshowbutton", true);
                        this.transitionToRoute('claimpage');
                    }

                }
                if (status === 'PaymentInitiated') {
                    if (lastusertype === "banker") {

                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

            }

            if (usertype === 'Supplier') {
                if (status === 'MaterialRequested') {
                    console.log("....1.....")
                    if (lastusertype === 'Manufacturer') {
                        this.transitionToRoute('quotation');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

                if (status === 'POraised') {
                    console.log("in poraised supplirr");
                    if (lastusertype === 'Manufacturer') {
                        this.set('isShowinvoice', true);
                        this.set('isShowbuttoninvoice', false)
                        this.transitionToRoute('invoice');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

                if (status === 'InvoiceRaised') {
                    if (lastusertype === "Supplier") {

                        this.set('isShow', false);;
                        this.set('isShowdeliveryorder', true);
                        this.transitionToRoute('deliveryorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }
                if (status === 'PaymentInitiated') {
                    if (lastusertype === "banker") {

                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }

            }
            if (usertype === 'Distributor') {
                console.log("in if distributor..............");
                if (status === 'MaterialRequested') {
                    if (lastusertype === "retailer") {
                        this.transitionToRoute('quotation');
                    } else {
                        alert("This request not intended for You...1");
                    }
                }
                if (status === 'QuotationRaised') {
                    if (lastusertype === "Manufacturer") {
                        this.transitionToRoute('purchaseorder');
                    } else {
                        alert("This request not intended for You ...6");
                    }
                } 

                if (status === 'NotDelivered') {
                    if (lastusertype === "logistics") {
                        this.set('isShowclaimdetails', false);
                        this.set("isshowbutton", true);
                        this.transitionToRoute('claimpage');
                    }
                }
                if (status === 'PaymentInitiated') {
                    if (lastusertype === "banker") {

                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    } else {
                        alert("This request not intended for You ....5");
                    }
                }
                if (status === 'DoDelivered') {
                    if (lastusertype === "logistics") {
                        if (secondlastusertype === 'Manufacturer'){
                        this.set('isShowinvoice', false);
                        this.set('isShowbuttoninvoice', true);
                        this.transitionToRoute('invoice');
                        }else {
                            alert("This request not intended for You");
                        }
                    } 
                }
                if(status === 'POraised'){
                    if (lastusertype === "retailer") {
                        this.set('isShowinvoice', true);
                        this.set('isShowbuttoninvoice', false);
                        this.transitionToRoute('invoice');

                    } else {
                        alert("This request not intended for You");
                    }
                }
                if(status === 'InvoiceRaised'){
                    if (lastusertype === "Distributor") {
                        this.set('isShow', false);
                        this.set('isShowdeliveryorder', true);
                        this.transitionToRoute('deliveryorder');

                    } else {
                        alert("This request not intended for You");
                    }
                }
                if(status === 'PaymentInitiated'){
                    if(secondlastusertype === 'retailer'){
                        this.set('isShowpaymentorder', false);
                        this.set('isshowpaymentbutton', true);
                        this.transitionToRoute('paymentorder');
                    }else{
                        alert("This request not intended for You");
                    }
                }

            }

            if (usertype === 'logistics') {

                if (status === 'DOraised') {

                      this.set('isShow', true);
                    this.transitionToRoute('deliveryorder');


                }
            }
            if (usertype === 'banker') {
                if (status === 'InvoiceApproved') {
                    
                        this.set('isShowpaymentorder', true);
                        this.set('isshowpaymentbutton', false);
                        this.transitionToRoute('paymentorder');
                    
                }
                if (status === 'claimRaised') {
                    this.set('isShowpaymentorder', true);
                    this.set('isshowpaymentbutton', false);
                    this.transitionToRoute('paymentorder');

                }

            }
            if (usertype === 'insurance') {
                if (status === 'claimRequested') {
                    this.set('isShowclaimdetails', true);
                    this.set("isshowbutton", false);
                    this.transitionToRoute('claimpage');
                }
            }
            if (usertype === 'retailer') {
                if (status === 'QuotationRaised') {
                    if (lastusertype === "Distributor") {
                        this.transitionToRoute('purchaseorder');
                    } else {
                        alert("This request not intended for You ...6");
                    }
                } 
                if (status === 'DoDelivered') {
                    if (lastusertype === "logistics") {
                        if(secondlastusertype === 'Distributor'){
                        this.set('isShowinvoice', false);
                        this.set('isShowbuttoninvoice', true);
                        this.transitionToRoute('invoice');
                        }
                    } else {
                        alert("This request not intended for You");
                    }
                }
                


            }

            

        }
    }

});