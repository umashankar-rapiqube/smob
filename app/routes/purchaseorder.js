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
            mycontroller.controllerFor('purchaseorder').set('url',url);
          //  alert("Document uploaded sucessfully!!!!");
             // this.toggleProperty('isShowingModalphoto');
             mycontroller.controllerFor('purchaseorder').set("ShowingModal",true);
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
        this.controllerFor('purchaseorder').set('ShowingModalrequest',false);
        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('purchaseorder').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('purchaseorder').set('usertype', usertype);

        var companyname =   this.controllerFor('materialrequest').get('companyname');
        this.controllerFor('purchaseorder').set('companyname', companyname);

        this.controllerFor('purchaseorder').set('ShowingModalrequest', false);
        this.controllerFor('purchaseorder').set('companyname', null);
        this.controllerFor('purchaseorder').set('address', null);
        this.controllerFor('purchaseorder').set('formdate', null);
        this.controllerFor('purchaseorder').set('item', null);

    }
});
