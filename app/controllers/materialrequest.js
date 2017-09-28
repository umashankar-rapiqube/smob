import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';


  var myrecord =[];
export default Ember.Controller.extend({
myaddrow:false,
ShowingModalrequest: false,

actions:{
    
    submitdetails:function(){

        var usertype =this.get('usertype');
        console.log('usertype',usertype);
        sessionStorage.setItem('updatedby',usertype);
        console.log("in func");
        var url =this.get('url');
        console.log("url frm cntrl :",url);
        var mydate = JSON.stringify(this.get('formdate'));
        console.log("mydate :--->",mydate);
        var formdate1 =  mydate.substr(1, 10);
        console.log("formdate ======>>",formdate1);
       // var companyname1 =this.get('companyname');
      //  console.log(" companyname-------->",companyname1);
      //  this.set("companyname",companyname1)
        let{companyname,
            address,
         
            item,
            Quantity}=this.getProperties('companyname','address','item','Quantity')

         var dataString = {  
                "status":"MaterialRequested",
                "InvolvedParties":"manufacturer",
                "transactionString":{
                    "updatedBy":usertype,
                    "companyname": companyname,
                    "address": address,
                    "formdate": formdate1,
                    "item": item,
                    "Quantity": Quantity,
                    "totalamount":"NA",
                    "url":url,
                    "remark":"NA",
                    "status":"MaterialRequested",
                }
            };
            console.log(JSON.stringify(dataString));
            var mycontroller = this;

                return $.ajax({
                url:CONFIG.GOURL+'/newRequest',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {
                var message = response.message;
                console.log("message" + message);
                
                 mycontroller.toggleProperty('ShowingModalrequest');
                // mycontroller.transitionToRoute('userhome')
                 //mycontroller.transitionToRoute('home');

                },      
                    error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
            }
                
                });
            this.toggleProperty('ShowingModalrequest');
       //    this.set("ShowingModalrequest",true);
    },
okbutton: function(){
    this.transitionToRoute("userhome");
},

addrow:function(){
    this.set('myaddrow',true);
             $('button#add').attr('disabled', 'disabled');
            $('button#save').removeAttr('disabled');
        },

saveRow:function () {
  $('button#save').attr('disabled', 'disabled');
  var myvalue =this.get('second');
  console.log('myvalue'+myvalue);
  //var myrecord =[];
  var id = this.get('id');
 console.log('id',id);
 var items= this.get('items');
 console.log('items',items);
 var quantity = this.get('quantity');
 console.log('quantity',quantity);
 //this.set("mysaverow",true);

     myrecord.push({"id":id,"items":items,"quantity":quantity})

    this.set('myaddrow',false);
    console.log(myrecord)
    this.set('myrecord',myrecord);
    this.set("mysaverow",true);
   $('button#add').removeAttr('disabled');
}
}
});