import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        uploadDoc:function (file) {
            // var mycontroller = this;
            console.log("entering upload FIR 3");
    var mycontroller = this;
             console.log(file)
       
          file.upload('http://192.168.1.22:3000/UploadDocs').then(function (response) {
            console.log(JSON.stringify(response));
            var url =response.body.url;
            console.log("url ::",JSON.stringify(url));
            mycontroller.controllerFor('quotation').set('url',url);
            alert("Document uploaded sucessfully!!!!");
             // this.toggleProperty('isShowingModalphoto');
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
        this.controllerFor('quotation').set('ShowingModalrequest', false);

        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid from po:' +requestid);
        this.controllerFor('quotation').set('requestid', requestid);

        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('quotation').set('usertype', usertype);

        
        this.controllerFor('quotation').set('companyname', null);
        this.controllerFor('quotation').set('address', null);
        this.controllerFor('quotation').set('formdate', null);
        this.controllerFor('quotation').set('item', null);
        this.controllerFor('quotation').set('totalamount', null);
        
    }
});
