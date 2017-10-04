import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Route.extend({
    actions:{
        uploadDoc:function (file) {
            // var mycontroller = this;
            console.log("entering upload FIR 3");
    var mycontroller = this;
             console.log(file)
       
          file.upload(CONFIG.GOURL+'/UploadDocs').then(function (response) {
            console.log(JSON.stringify(response));
            var url =response.body.url;
            console.log("url ::",JSON.stringify(url));
            mycontroller.controllerFor('paymentorder').set('url',url);
           // alert("Document uploaded sucessfully!!!!");
             // this.toggleProperty('isShowingModalphoto');
             mycontroller.controllerFor('paymentorder').set("ShowingModal",true);
            
            console.log("file upload sucessfully. 1..");
            //return image.save();
            
          }, function () {
            //image.rollback();
            console.log("file upload sucessfully...");
          });
          
        },
      
        },
    model(){
        
        this.controllerFor('paymentorder').set('ShowingModalrequest', false);

        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('paymentorder').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('paymentorder').set('usertype', usertype);

        var isShowpaymentorder = this.controllerFor('history').get('isShowpaymentorder' );        
        console.log('isShowpaymentorder from po:' +isShowpaymentorder);
        this.controllerFor('paymentorder').set('isShowpaymentorder', isShowpaymentorder);

        var  isshowpaymentbutton=this.controllerFor('history').get('isshowpaymentbutton' );
        console.log('isshowpaymentbutton' +isshowpaymentbutton);
        this.controllerFor('paymentorder').set('isshowpaymentbutton', isshowpaymentbutton);
  
    }
});
