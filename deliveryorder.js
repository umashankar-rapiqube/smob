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
            mycontroller.controllerFor('deliveryorder').set('url',url);
          //  alert("Document uploaded sucessfully!!!!");
             // this.toggleProperty('isShowingModalphoto');
             mycontroller.controllerFor('deliveryorder').set("isShowingModal",true);
            console.log("saviing file...");
            console.log("file upload sucessfully. 1..");
            //return image.save();
            
          }, function () {
            //image.rollback();
            console.log("file upload sucessfully...");
          });
          
        },
      
        },
    model(){
        this.controllerFor('deliveryorder').set('ShowingModalrequest', false);
        this.controllerFor('deliveryorder').set('ShowingModal', false);
      
        this.controllerFor('deliveryorder').set('myShowingModal', false);  
      
        this.controllerFor('deliveryorder').set('delivertocompany', null);
        this.controllerFor('deliveryorder').set('address', null);
        this.controllerFor('deliveryorder').set('item', null);
        this.controllerFor('deliveryorder').set('Quantity', null);
        this.controllerFor('deliveryorder').set('formdate', null);
    
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from do:' +requestid);
        this.controllerFor('deliveryorder').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('deliveryorder').set('usertype', usertype);

      var  isShowdeliveryorder=this.controllerFor('history').get('isShowdeliveryorder' );
      console.log('isShowdeliveryorder' +isShowdeliveryorder);
      this.controllerFor('deliveryorder').set('isShowdeliveryorder', isShowdeliveryorder);

      var  isshowbutton=this.controllerFor('history').get('isshowbutton' );
      console.log('isshowbutton' +isshowbutton);
      this.controllerFor('deliveryorder').set('isshowbutton', isshowbutton);

      var  isShow=this.controllerFor('history').get('isShow' );
      console.log('isShow' +isShow);
      this.controllerFor('deliveryorder').set('isShow', isShow);

      
    }
});
