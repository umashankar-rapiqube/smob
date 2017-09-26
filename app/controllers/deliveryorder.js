import Ember from 'ember';

export default Ember.Controller.extend({
  //  isShowdeliveryorder:true,
    ShowingModal:false,
    isshowbutton:false,
    isShow:true,
    actions:{
        toraisedelivery:function(){
            this.set('isShow',false);
            this.set('isShowdeliveryorder',true);
            this.set('isshowbutton',false);
            this.set('isshowNotdelivered',false);
        },
        toDeliverDelivery:function(){
            this.set('isShow',false);
            this.set('isShowdeliveryorder',false);
            this.set('isshowbutton',true);
            this.set('isshowNotdelivered',false);
        },
        notdeliverdelivery:function(){
            this.set('isShow',false);
            this.set('isShowdeliveryorder',false);
            this.set('isshowbutton',false);
            this.set('isshowNotdelivered',true);
        },
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from dOcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            let{companyname,
                address,
                item,
                Quantity,
                formdate
            }=this.getProperties('companyname','address','item','Quantity','pono','formdate');
    
             var dataString = {  
                 "requestid":requestid,
                    "status":"DOraised",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "address": address,
                        "item": item,
                        "Quantity": Quantity,    
                        "formdate":formdate,
                        "totalamount":"NA",
                        "status":"DOraised",
                    }
                };
                console.log(JSON.stringify(dataString));
                var mycontroller = this;
    
                    return $.ajax({
                    url:'http://192.168.1.22:3000/updateRequest',
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(dataString),
                    success: function(response) {
                        var message = response.message;
                        console.log("message" + message);
                              mycontroller.toggleProperty('ShowingModalrequest');
                                // mycontroller.transitionToRoute('userhome')
                                // mycontroller.transitionToRoute('home');
    
                    },      
                        error: function(response) {
                       console.log('DEBUG: GET Enquiries Failed');
                       console.log("Error Message: ", response.message);
                       
                }
                    
                    });
                this.toggleProperty('ShowingModalrequest');
                },

                okbutton: function(){
                    this.transitionToRoute("userhome");
                },

                doDelivered:function(){
                    var requestid =this.get('requestid');
                    console.log("requestid from dOcntr ",requestid);
                    var usertype =this.get('usertype');
                    console.log('usertype',usertype);
                    
                     var dataString = {  
                         "requestid":requestid,
                            "status":"DoDelivered",
                            "InvolvedParties":"supplier,logistics",
                            "transactionString":{
                                "updatedBy":usertype,
                                "status":"DoDelivered",
                            }
                        };
                        console.log(JSON.stringify(dataString));
                        var mycontroller = this;
            
                            return $.ajax({
                            url:'http://192.168.1.22:3000/updateRequest',
                            type: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify(dataString),
                            success: function(response) {
                                var message = response.message;
                                console.log("message" + message);
                                      mycontroller.toggleProperty('ShowingModal');
                                        // mycontroller.transitionToRoute('userhome')
                                        // mycontroller.transitionToRoute('home');
            
                            },      
                                error: function(response) {
                               console.log('DEBUG: GET Enquiries Failed');
                               console.log("Error Message: ", response.message);
                               
                        }
                            
                            });

                },
                notDelivered:function(){
                    var requestid =this.get('requestid');
                    console.log("requestid from dOcntr ",requestid);
                    var usertype =this.get('usertype');
                    console.log('usertype',usertype);
                    var remark =this.get('remark');
                    console.log('remark',remark);
                    

                     var dataString = {  
                         "requestid":requestid,
                            "status":"NotDelivered",
                            "InvolvedParties":"supplier,logistics",
                            "transactionString":{
                                "updatedBy":usertype,
                                "remark":remark,
                                "status":"NotDelivered",
                                "companyname": "NA",
                                "address":"NA",
                                "item": "NA",
                                "Quantity": "NA",    
                                "formdate":"NA",
                                "totalamount":"NA"
                            }
                        };
                        console.log(JSON.stringify(dataString));
                        var mycontroller = this;
            
                            return $.ajax({
                            url:'http://192.168.1.22:3000/updateRequest',
                            type: 'POST',
                            contentType: 'application/json',
                            data: JSON.stringify(dataString),
                            success: function(response) {
                                var message = response.message;
                                console.log("message" + message);
                                      mycontroller.toggleProperty('myShowingModal');
                                        // mycontroller.transitionToRoute('userhome')
                                        // mycontroller.transitionToRoute('home');
            
                            },      
                                error: function(response) {
                               console.log('DEBUG: GET Enquiries Failed');
                               console.log("Error Message: ", response.message);
                               
                        }
                            
                            });

                }
    
        }
        
            
        
    });
    

