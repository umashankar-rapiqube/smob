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
            mycontroller.controllerFor('quotation').set('url',url);
            mycontroller.controllerFor('quotation').set("ShowingModal",true);
           // alert("Document uploaded sucessfully!!!!");
             // this.toggleProperty('isShowingModalphoto');
             // this.set("isShowingModalphoto",true);
            console.log("saviing file...");
          
            //return image.save();
            
          }, function () {
            //image.rollback();
            console.log("file upload sucessfully...");
          });
          
        },
      
        },
    model(){
        this.set('myrecord',null);
        this.controllerFor('quotation').set('ShowingModalrequest', false);

        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('quotation').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('quotation').set('usertype', usertype);

        var companyname =   this.controllerFor('materialrequest').get('companyname');
        console.log('companyname--',companyname);
        this.controllerFor('quotation').set('companyname', companyname);
        
       // this.controllerFor('quotation').set('companyname', null);
        this.controllerFor('quotation').set('address', null);
        this.controllerFor('quotation').set('formdate', null);
        //this.controllerFor('quotation').set('item', null);
        this.controllerFor('quotation').set('totalamount', null);
        
    }
});
