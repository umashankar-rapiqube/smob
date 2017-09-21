import Ember from 'ember';



  var myrecord =[];
export default Ember.Controller.extend({
myaddrow:false,
ShowingModalrequest: false,

actions:{
    
    submitdetails:function(){

        var usertype =this.get('usertype');
        console.log('usertype',usertype);
        console.log("in func");
        let{companyname,
            address,
            formdate,
            item,
            Quantity}=this.getProperties('companyname','address','formdate','item','Quantity')

         var dataString = {  
                "status":"MaterialRequested",
                "InvolvedParties":"manufacturer",
                "transactionString":{
                    "updatedBy":usertype,
                    "companyname": companyname,
                    "address": address,
                    "formdate": formdate,
                    "item": item,
                    "Quantity": Quantity
                }
            };
            console.log(JSON.stringify(dataString));
                var mycontroller = this;

                return $.ajax({
                url:'http://192.168.0.29:3000/newRequest',
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