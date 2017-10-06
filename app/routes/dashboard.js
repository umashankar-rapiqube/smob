import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    model() {
        var abc = 10;
        this.controllerFor('dashboard').set('abc', abc);


        var mycontroller = this;
        Ember.$.ajax({
            url: CONFIG.GOURL + '/readCycle',
            type: 'GET',
            contentType: 'application/json',
            success: function(data) {
                // var message = response.message;
                console.log(JSON.stringify(data));
                var message = data.message;
                var openStatus = data.openStatus;
                console.log("openStatus--->", openStatus);
                mycontroller.controllerFor('dashboard').set('openStatus', openStatus);
                var myopenStatus = openStatus * 10;
                console.log("myopenStatus---------------------->", myopenStatus);
                mycontroller.controllerFor('dashboard').set('myopenStatus', myopenStatus);
                var closedStatus = data.closedStatus;
                console.log("closedStatus--->", closedStatus);
                mycontroller.controllerFor('dashboard').set('closedStatus', closedStatus);
                var myclosedStatus = closedStatus * 10;
                console.log("myclosedStatus---------------------->", myclosedStatus);
                mycontroller.controllerFor('dashboard').set('myclosedStatus', myclosedStatus);

                $.ajax({
                    url: CONFIG.GOURL + '/readStatus',
                    type: 'GET',
                    contentType: 'application/json',
                    success: function(data) {
                        console.log("data------------------------------->>>>>>>>", JSON.stringify(data));
                        var statuscount = data.statuscount;
                        console.log("statuscount", statuscount);
                        mycontroller.controllerFor('dashboard').set('statuscount', statuscount);

                        for (var i = 0; i < statuscount.length; i++) {

                            if (statuscount[i].statusname === "claimRaised") {
                                var isclaimRaisedCount = JSON.stringify(statuscount[i].statuscount);
                             //   var claimRaisedCount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('claimRaisedCount', isclaimRaisedCount * 10);
                                mycontroller.controllerFor('dashboard').set('isclaimRaisedCount', isclaimRaisedCount);
                            }
                                // } else {
                            //     mycontroller.controllerFor('dashboard').set('claimRaisedCount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isclaimRaisedCount', 0);
                            // }
                            if (statuscount[i].statusname === "MaterialRequested") {
                                var IsMaterialRequestedCount = statuscount[i].statuscount;
                                console.log("IsMaterialRequestedCount ---", typeof(IsMaterialRequestedCount));
                                var MaterialRequestedcount = 10 * IsMaterialRequestedCount;
                                console.log("MaterialRequestedcount-------->", MaterialRequestedcount);
                                mycontroller.controllerFor('dashboard').set('MaterialRequestedcount', IsMaterialRequestedCount * 10);
                                mycontroller.controllerFor('dashboard').set('IsMaterialRequestedCount', IsMaterialRequestedCount);
                            }
                                // } else {
                            //     mycontroller.controllerFor('dashboard').set('MaterialRequestedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('IsMaterialRequestedCount', 0);
                            // }
                            if (statuscount[i].statusname === "QuotationRejected") {
                                var isQuotationRejectedCount = statuscount[i].statuscount;
                                //var QuotationRejectedcount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('QuotationRejectedcount', isQuotationRejectedCount * 10);
                                mycontroller.controllerFor('dashboard').set('isQuotationRejectedCount', isQuotationRejectedCount);
                            }
                                //  else {
                            //     mycontroller.controllerFor('dashboard').set('QuotationRejectedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isQuotationRejectedCount', 0);
                            // }
                            if (statuscount[i].statusname === "PaymentInitiated") {
                                var isPaymentInitiatedCount = statuscount[i].statuscount;
                               // var PaymentInitiatedcount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('PaymentInitiatedcount', isPaymentInitiatedCount * 10);
                                mycontroller.controllerFor('dashboard').set('isPaymentInitiatedCount', isPaymentInitiatedCount);
                            } 
                            // else {
                            //     mycontroller.controllerFor('dashboard').set('PaymentInitiatedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isPaymentInitiatedCount', 0);
                            // }

                            if (statuscount[i].statusname === "POraised") {
                                var ISPOCount = statuscount[i].statuscount;
                            //    var POraisedcount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('POraisedcount', ISPOCount * 10);
                                mycontroller.controllerFor('dashboard').set('ISPOCount', ISPOCount);
                            }
                            //  else {
                            //     mycontroller.controllerFor('dashboard').set('POraisedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('IsPOCount', 0);
                            // }
                            if (statuscount[i].statusname === "PaymentReceived") {
                                var IsPaymentReceivedCount = statuscount[i].statuscount;
                             //   var PaymentReceivedcount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('PaymentReceivedcount', IsPaymentReceivedCount * 10);
                                mycontroller.controllerFor('dashboard').set('IsPaymentReceivedCount', IsPaymentReceivedCount);
                            } 
                            // else {
                            //     mycontroller.controllerFor('dashboard').set('PaymentReceivedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('IsPaymentReceivedCount', 0);
                            // }
                            if (statuscount[i].statusname === "InvoiceRaised") {
                                var isInvoiceRaisedCount = statuscount[i].statuscount;
                             //   var InvoiceRaisedcount = Count * 10;
                                console.log("InvoiceRaisedcount-----",isInvoiceRaisedCount *10);
                                mycontroller.controllerFor('dashboard').set('InvoiceRaisedcount', isInvoiceRaisedCount * 10);
                                mycontroller.controllerFor('dashboard').set('isInvoiceRaisedCount', isInvoiceRaisedCount);
                            } 
                            // else {
                            //     mycontroller.controllerFor('dashboard').set('InvoiceRaisedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isInvoiceRaisedCount', 0);
                            // }
                            if (statuscount[i].statusname === "InvoiceApproved") {
                                var isInvoiceApprovedCount = statuscount[i].statuscount;
                             //   var InvoiceApprovedcount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('InvoiceApprovedcount', isInvoiceApprovedCount * 10);
                                mycontroller.controllerFor('dashboard').set('isInvoiceApprovedCount', isInvoiceApprovedCount);
                            } 
                            // else {
                            //     mycontroller.controllerFor('dashboard').set('InvoiceApprovedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isInvoiceApprovedCount', 0);
                            // }
                            if (statuscount[i].statusname === "DoDelivered") {
                                var isDoDeliveredCount = statuscount[i].statuscount;
                           //     var DoDeliveredcount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('DoDeliveredcount', isDoDeliveredCount * 10);
                                mycontroller.controllerFor('dashboard').set('isDoDeliveredCount', isDoDeliveredCount);
                            }
                            //  else {
                            //     mycontroller.controllerFor('dashboard').set('DoDeliveredcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isDoDeliveredCount', 0);
                            // }
                            if (statuscount[i].statusname === "NotDelivered") {
                                var isNotDeliveredCount = statuscount[i].statuscount;
                            //    var NotDeliveredcount = Count * 10
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('NotDeliveredcount', isNotDeliveredCount * 10);
                                mycontroller.controllerFor('dashboard').set('isNotDeliveredCount', isNotDeliveredCount);
                            } 
                            // else {
                            //     mycontroller.controllerFor('dashboard').set('NotDeliveredcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isNotDeliveredCount', 0);
                            // }
                            if (statuscount[i].statusname === "claimRequested") {
                                var isclaimRequestedCount = statuscount[i].statuscount;
                             //   var claimRequestedcount = Count * 10;
                                console.log(JSON.stringify(statuscount[i].statuscount));
                                mycontroller.controllerFor('dashboard').set('claimRequestedcount', isclaimRequestedCount * 10);
                                mycontroller.controllerFor('dashboard').set('isclaimRequestedCount', isclaimRequestedCount);
                            }
                            //  else {
                            //     mycontroller.controllerFor('dashboard').set('claimRequestedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('isclaimRequestedCount', 0);
                            // }
                            if (statuscount[i].statusname === "QuotationRaised") {
                                var IsQuotationRaisedCount = statuscount[i].statuscount;
                                console.log("IsQuotationRaisedCount ---", typeof(IsQuotationRaisedCount));
                                var QuotationRaisedcount = IsQuotationRaisedCount *10 ;
                                console.log("QuotationRaisedcount-------->", QuotationRaisedcount);
                                mycontroller.controllerFor('dashboard').set('QuotationRaisedcount', IsQuotationRaisedCount * 10 );
                                mycontroller.controllerFor('dashboard').set('IsQuotationRaisedCount', IsQuotationRaisedCount);
                            } 
                            // else {
                            //     mycontroller.controllerFor('dashboard').set('QuotationRaisedcount', 0);
                            //     mycontroller.controllerFor('dashboard').set('IsQuotationRaisedCount', 0);
                            // }
                            if (statuscount[i].statusname === "DOraised") {
                                var isDOraisedCount = statuscount[i].statuscount;
                                var DOraisedcount = isDOraisedCount * 10;
                                console.log( "DOraisedcount --->",isDOraisedCount * 10);
                                mycontroller.controllerFor('dashboard').set('DOraisedcount', isDOraisedCount * 10);
                                mycontroller.controllerFor('dashboard').set('isDOraisedCount', isDOraisedCount);
                                
                            } 
                            // else {
                            //     mycontroller.controllerFor('dashboard').set('DOraisedcount',0);
                            //     mycontroller.controllerFor('dashboard').set('isDOraisedCount', 0);
                            // }

                        }

                    },
                    error: function(response) {
                        console.log('DEBUG: GET Enquiries Failed');
                        console.log("Error Message: ", data.message);

                    }

                });

            },
            error: function(response) {
                console.log('DEBUG: GET Enquiries Failed');
                console.log("Error Message: ", data.message);

            }

        });



    }
});