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
        mycontroller.controllerFor('materialrequest').set('url',url);
        alert("Document uploaded sucessfully!!!!");
        mycontroller.toggleProperty('ShowingModal');
         // this.set("isShowingModalphoto",true);
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
        this.set('myrecord',null);
        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('materialrequest').set('usertype', usertype);

        this.controllerFor('materialrequest').set('ShowingModalrequest', false);
        this.controllerFor('materialrequest').set('companyname', null);
        this.controllerFor('materialrequest').set('address', null);
        this.controllerFor('materialrequest').set('formdate', null);
        this.controllerFor('materialrequest').set('item', null);
        this.controllerFor('materialrequest').set('Quantity', null);
    }
});
