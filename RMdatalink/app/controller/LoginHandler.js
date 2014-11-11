/*
 * File: app/controller/LoginHandler.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('RMdatalink.controller.LoginHandler', {
    extend: 'Ext.app.Controller',

    config: {
        logedInUser: 'amitc',
        userDetails: {
            
        },
        logedInUserRecord: null,
        isRetailerLogin: false,
        resetPwdUser: {
            
        },

        control: {
            "button[itemId=loginActionButton]": {
                tap: 'onloginActionButtonTap'
            },
            "passwordfield[action=onActionDoLogin]": {
                action: 'onLoginPasswordfieldAction'
            },
            "label[itemId=loginForgotPwdLabel]": {
                initialize: 'onloginForgotPwdLabelInitialize'
            },
            "button[itemId=lUserIptnsLogoutBtn]": {
                tap: 'onRMLogoutBtnTap'
            },
            "button[itemId=RMMainAccSettings]": {
                tap: 'onRMMainAccSettingsButtonTap'
            },
            "button[itemId=lUserIptnsPermissionsBtn]": {
                tap: 'onlUserIptnsPermissionsBtnTap'
            },
            "button[action=doForgotPassword]": {
                tap: 'onForgotPwdButtonTap'
            },
            "button[itemId=confirmResetPwdFrmEmailBtn]": {
                tap: 'onResetFrmEmailButtonTap'
            }
        }
    },

    onloginActionButtonTap: function(button, e, eOpts) {
        var userNameFld = Ext.ComponentQuery.query('#loginUsernameTxtFld')[0] ;
        var userName = userNameFld.getValue() ;
        var isInhouseUser = null ;//Ext.ComponentQuery.query('#loginAsInhouseUserRadioFld')[0].getChecked() ;

        if(Ext.data.Validations.email(userNameFld, userName))
        {
           isInhouseUser = false;

           this.config.isRetailerLogin = true ;

        }else{

             this.config.isRetailerLogin = false ;

            isInhouseUser = true ;
        }





        if(isInhouseUser)
        {
            this.doLogin(Ext.ComponentQuery.query('#loginUsernameTxtFld')[0].getValue(),Ext.ComponentQuery.query('#loginPasswordFld')[0].getValue());
        }else{

            this.doRetailerLogin(Ext.ComponentQuery.query('#loginUsernameTxtFld')[0].getValue(),Ext.ComponentQuery.query('#loginPasswordFld')[0].getValue());
            //Ext.Viewport.setActiveItem(Ext.create('RMdatalink.view.retailer.MainPanel'));

        }
    },

    onLoginPasswordfieldAction: function(textfield, e, eOpts) {
        var userNameFld = Ext.ComponentQuery.query('#loginUsernameTxtFld')[0] ;
        var userName = userNameFld.getValue() ;
        var isInhouseUser = null ;//Ext.ComponentQuery.query('#loginAsInhouseUserRadioFld')[0].getChecked() ;

        if(Ext.data.Validations.email(userNameFld, userName))
        {

            this.config.isRetailerLogin = true ;
           isInhouseUser = false;

        }else{

             this.config.isRetailerLogin = false ;
            isInhouseUser = true ;
        }



        if(isInhouseUser)
        {
            this.doLogin(Ext.ComponentQuery.query('#loginUsernameTxtFld')[0].getValue(),Ext.ComponentQuery.query('#loginPasswordFld')[0].getValue());
        }else{

            this.doRetailerLogin(Ext.ComponentQuery.query('#loginUsernameTxtFld')[0].getValue(),Ext.ComponentQuery.query('#loginPasswordFld')[0].getValue());

         //   Ext.Viewport.setActiveItem(Ext.create('RMdatalink.view.retailer.MainPanel'));

        }
    },

    onloginForgotPwdLabelInitialize: function(component, eOpts) {

        component.element.on("tap",this.onForgotPasswordTap,this) ;
    },

    onRMLogoutBtnTap: function(button, e, eOpts) {
        RMdatalink.app.getController('UINav').redirectTo("main");


        Ext.getCmp("LoginUserOptions").hide() ;
        Ext.Viewport.setActiveItem("LoginScreen");
        Ext.ComponentQuery.query('#loginActionButton')[0].setDisabled(false);

    },

    onRMMainAccSettingsButtonTap: function(button, e, eOpts) {
                        if(Ext.getCmp("LoginUserOptions"))
                        {
                             var popup =  Ext.getCmp("LoginUserOptions") ;
                        }
                        else{

                             var popup =   Ext.widget('LoginUserOptions');
                        }
                        if( this.config.userDetails.userRole == "Super Admin"){

                            Ext.ComponentQuery.query('#lUserIptnsPermissionsBtn')[0].setHidden(false);

                        }else{

                                Ext.ComponentQuery.query('#lUserIptnsPermissionsBtn')[0].setHidden(true);
                        }

                        popup.showBy(button);

    },

    onlUserIptnsPermissionsBtnTap: function(button, e, eOpts) {

        RMdatalink.app.getController('PermissionsConroller').showPermissions() ;
    },

    onForgotPwdButtonTap: function(button, e, eOpts) {
        this.forgotPassword() ;
    },

    onResetFrmEmailButtonTap: function(button, e, eOpts) {


        var pwd = Ext.ComponentQuery.query('#regenratePwdFld')[0].getValue() ;

        var repwd = Ext.ComponentQuery.query('#retypedRegenratePwdFld')[0].getValue() ;

        var validation = true ;
        var msg = "" ;
        if(pwd.length < 6 ){
            validation = false ;
            msg += "Try one with at least 6 characters. </br>" ;
        }
        else if(pwd != repwd ){
            validation = false ;
            msg += "These passwords don't match. Try again?</br>" ;
        }

        if(! validation){
             Ext.Msg.alert('Alert.', msg, Ext.emptyFn);
            return ;
        }

        this.regeneratePassword(pwd) ;


    },

    doLogin: function(username, password) {
        var _this = this ;

        if(dbEnv === "dev_")
        {
            username = "dkhazai";
            password = "123456" ;
        }

        if(username == "" || password == ""){

            Ext.Msg.alert('Alert.', "Username and Password are mandatory", Ext.emptyFn);
            return ;
        }else // if( password === "123456")
        {
         Ext.Viewport.setMasked({
                            xtype: 'loadmask',message:"Authenticating..."
                        });
             requestLogin() ;

        }

        // }else{

        //     failuer();
        // }


        function requestLogin(){

           // RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_inhouserecords",pageNo:1,pageSize:50,sortBy:{},query:{"username":username},fields:{"username":1,"user_role":1 ,"permissions":1}},suc,err);


            var query = {

                "username":username,
                "password":password

            };

             RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_inhouserecords",pageNo:1,pageSize:50,sortBy:{},query:{"username":username,"password":password},fields:{}},suc,err);
           //RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:1,pageSize:50,sortBy:{},query:tQuery,fields:{}},suc,err);
            function suc(){

                if(arguments[0].count >= 1)
                {
                    try{

                     _this.config.logedInUserRecord = arguments[0].items[0] ;

                        console.log( _this.config.logedInUserRecord) ;


                     _this.config.userDetails.userName = arguments[0].items[0].username ;
                     _this.config.userDetails.userRole = arguments[0].items[0].user_role ;
                    // _this.config.userDetails.permissions = arguments[0].items[0].permissions ;
                     _this.config.userDetails._id = arguments[0].items[0]._id ;
                     _this.config.userDetails.custom_filter = arguments[0].items[0].custom_filter ;
                     _this.config.userDetails.lastUserSavedActivity =   RMdatalink.util.globalMethods.getlatestUserActivity(arguments[0].items[0]);
                     _this.config.userDetails.expand_button_state =  arguments[0].items[0].expand_button_state ;
                     _this.config.userDetails.rm_navigation_panel_state = arguments[0].items[0].rm_navigation_panel_state ;
                    // console.log(arguments[0].items[0])   ;



                      _this.config.userDetails.right_naviagtion_panel_state = arguments[0].items[0].right_naviagtion_panel_state;
                    }catch(ex){
                        console.error(ex) ;
                    }
                    success();
                }
                else{
                    failuer() ;
                }
                console.log(arguments);
            }

            function err(){
                failuer() ;
            }


        }


        function failuer(){
         Ext.Viewport.setMasked(false);
            Ext.Msg.alert('Alert.', "Login failed", Ext.emptyFn);
        }

        function success(){
        //     Ext.Viewport.setMasked({
        //                     xtype: 'loadmask'
        //                 });

            //Ext.ComponentQuery.query('#loginForgotPwdLabel')[0].setHidden(true);
            Ext.ComponentQuery.query('#loginActionButton')[0].setDisabled(true);

            Ext.ComponentQuery.query('#loginUsernameTxtFld')[0].setValue("") ;
            Ext.ComponentQuery.query('#loginPasswordFld')[0].setValue("") ;



            function showMainView(){

                    Ext.Viewport.setActiveItem("Main");

            }
             Ext.Viewport.setMasked({
                            xtype: 'loadmask',message:"Initializing app...please wait."
                        });

            Ext.Function.defer( showMainView, 100, this);


            function requestLogin(){


            }
        }
    },

    doRetailerLogin: function(username, password) {
        var _this = this ;

        if(username == "" || password == ""){

            Ext.Msg.alert('Alert.', "Username and Password are mandatory", Ext.emptyFn);
            return ;

        }else // if( password === "123456")
        {


         Ext.Viewport.setMasked({
                            xtype: 'loadmask'
                        });
             requestLogin() ;

        }
        // else{

        //     failuer();
        // }


        function requestLogin(){

            var tQuery = {
                '$and':[
                    {"store_email":username},
                    {"store_password":password}
                ]
            };

           // RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_inhouserecords",pageNo:1,pageSize:50,sortBy:{},query:{"username":username},fields:{"username":1,"user_role":1 ,"permissions":1}},suc,err);

            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:1,pageSize:50,sortBy:{},query:tQuery,fields:{}},suc,err);

            function suc(){

                if(arguments[0].count >= 1)
                {
                    try{

                     _this.config.logedInUserRecord = arguments[0].items[0] ;

                        console.log( _this.config.logedInUserRecord) ;


                     _this.config.userDetails._id = arguments[0].items[0]._id ;


                    }catch(ex){
                        console.error(ex) ;
                    }
                    success();
                }
                else{
                    failuer() ;
                }
                console.log(arguments);
            }

            function err(){
                failuer() ;
            }


        }


        function failuer(){
         Ext.Viewport.setMasked(false);
            Ext.Msg.alert('Alert.', "Login failed", Ext.emptyFn);
        }

        function success(){
        //     Ext.Viewport.setMasked({
        //                     xtype: 'loadmask'
        //                 });


            Ext.ComponentQuery.query('#loginActionButton')[0].setDisabled(true);

            Ext.ComponentQuery.query('#loginUsernameTxtFld')[0].setValue("") ;
            Ext.ComponentQuery.query('#loginPasswordFld')[0].setValue("") ;



            function showMainView(){

                    Ext.Viewport.setActiveItem("RetailerMain");
                    RMdatalink.app.getController('UINav').redirectTo("RTcard0");
                    Ext.Viewport.setMasked(false) ;
                    RMdatalink.app.getController('RetailerPaymentController').initialiseRetailer() ;
            }

            Ext.Function.defer( showMainView, 100, this);


            function requestLogin(){


            }
        }
    },

    onForgotPasswordTap: function() {
        Ext.ComponentQuery.query('#loginScreenContainer')[0].setActiveItem(1);
    },

    setResetUserRestrictions: function(permissions) {

            Ext.ComponentQuery.query('#RMMainAccSettings')[0].setText(this.config.userDetails.userName) ;




            if(!permissions || permissions.length == 0){
                return ;
            }


            for(var i=0 ; i<permissions.length ; i++){

                switch(permissions[i].type){




                     case "Retailers":

                        if(permissions[i].value == "none"){

                            Ext.ComponentQuery.query("#overviewRetailersBtn")[0].setHidden(true);
                        }else{
                            Ext.ComponentQuery.query("#overviewRetailersBtn")[0].setHidden(false);
                        }

                        break;

                     case "Billing":

                        if(permissions[i].value == "none"){

                            Ext.ComponentQuery.query("#overviewBillingBtn")[0].setHidden(true);
                        }else{
                            Ext.ComponentQuery.query("#overviewBillingBtn")[0].setHidden(false);
                        }

                        break;


                      case "Vendors":

                        if(permissions[i].value == "none"){

                            Ext.ComponentQuery.query("#overviewVendorsBtn")[0].setHidden(true);
                        }else{

                            Ext.ComponentQuery.query("#overviewVendorsBtn")[0].setHidden(false);
                        }

                        var vendorMainPanel = Ext.ComponentQuery.query('#vendorsMainContentPanel')[0] ;
                        if(permissions[i].value == "fullControl"){

                             vendorMainPanel.down('#cardAddRetailerBtn').setHidden(false) ;
                             vendorMainPanel.down('#cardDeleteBtn').setHidden(false) ;


                        }else{


                             vendorMainPanel.down('#cardAddRetailerBtn').setHidden(true) ;
                            vendorMainPanel.down('#cardDeleteBtn').setHidden(true) ;

                        }


                        break;


                       case "Inhouse":

                        if(permissions[i].value == "none"){

                            Ext.ComponentQuery.query("#overviewInHouseBtn")[0].setHidden(true);
                        }else{
                            Ext.ComponentQuery.query("#overviewInHouseBtn")[0].setHidden(false);
                        }
                         var inhouseMainPanel = Ext.ComponentQuery.query('#inhouseMainContentPanel')[0] ;
                         var inhouseDetailPage = Ext.ComponentQuery.query('#inhouseDetailPageScreenPanel')[0] ;

                         if(permissions[i].value == "fullControl"){

                           inhouseMainPanel.down('#cardAddRetailerBtn').setHidden(false) ;
                             inhouseMainPanel.down('#cardDeleteBtn').setHidden(false) ;

                             inhouseDetailPage.down('#detailsSaveBtn').setHidden(false) ;

                        }else{
                              inhouseMainPanel.down('#cardAddRetailerBtn').setHidden(true) ;
                            inhouseMainPanel.down('#cardDeleteBtn').setHidden(true) ;

                            inhouseDetailPage.down('#detailsSaveBtn').setHidden(true) ;

                        }




                        break;


                      case "Notification":

                        if(permissions[i].value == "none"){

                            Ext.ComponentQuery.query("#extrasNotificationsBtn")[0].setHidden(true);
                        }else{
                            Ext.ComponentQuery.query("#extrasNotificationsBtn")[0].setHidden(false);
                        }

                        break;


                        case "Notepad":

                        if(permissions[i].value == "none"){

                            Ext.ComponentQuery.query("#extrasNotepadBtn")[0].setHidden(true);
                        }else{
                            Ext.ComponentQuery.query("#extrasNotepadBtn")[0].setHidden(false);
                        }

                        break;


                        case "Products":

                        if(permissions[i].value == "none"){

                            Ext.ComponentQuery.query("#RMProductsNavigationPanel")[0].setHidden(true);
                        }else{
                            Ext.ComponentQuery.query("#RMProductsNavigationPanel")[0].setHidden(false);
                        }

                        break;

                        //

                }

            }

    },

    hideUserRightInfoForInhouse: function() {
        try{

         var userRightDivs = Ext.DomQuery.select('div[class=useRoleToHide]');
        if(RMdatalink.app.getController('LoginHandler').config.userDetails.userRole == "Super Admin"){

            for(var i=0  ; i <userRightDivs.length ; i++){

                userRightDivs[i].style.visibility="visible";
            }

        }
        else{

            for(var i=0  ; i <userRightDivs.length ; i++){

                 userRightDivs[i].style.visibility="hidden";
            }


        }
        }catch(ex){

            console.error(ex) ;
        }


    },

    onPermissionsLoaded: function() {
        var permissionsStore = Ext.getStore('PermisstionsStore') ;

        if(permissionsStore.getData() && permissionsStore.getData().all.length > 0){

            var permissions = new Array() ;
            var userRole =  this.config.userDetails.userRole ;


            var recIndex = permissionsStore.findExact("user_role",userRole) ;

            var record = permissionsStore.getAt(recIndex) ;

            permissions = record.data.permissions ;
        console.log(permissions) ;

            this.setResetUserRestrictions(permissions);

        //      Ext.Viewport.setMasked(false) ;

        }else{

            return ;
        }


    },

    forgotPassword: function() {
        var emailField = Ext.ComponentQuery.query('#forgotPasswardEmailFld')[0] ;

        var emailText = emailField.getValue();

        var that = this ;

        var newPwd = "" ;

        var username = "" ;

        if( emailText.length === 0 || ! Ext.data.Validations.email(emailField, emailText))
        {
            Ext.Msg.alert('Alert.', "Please enter valid e-mail address.", Ext.emptyFn);
            return ;
        }


         Ext.Viewport.setMasked({
                            xtype: 'loadmask'
                        });

        getInhouseUser() ;

        function generatePassword(length){

            if(!length){

                length = 6 ;

            }

            var str = "" ;

            for(var i =0 ; i < length ; i++ ){

                str +=  String.fromCharCode(getRandomInt(65,90)) ;
            }

            return str ;

        }

        //65 A 90 Z

        function getRandomInt(min, max) {

            return Math.floor(Math.random() * (max - min + 1)) + min;

        }


        //email

        function getInhouseUser(){

            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_inhouserecords",pageNo:1,pageSize:50,sortBy:{},query:{"email":emailText},fields:{username:1}},suc,err);


            function suc(){

                if(arguments[0].items.length ==0 ){
                    err() ;
                }else{
                    username = arguments[0].items[0].username ;
                    updatePassword(arguments[0].items[0]._id);

                }

            }

            function err(){
                 Ext.Viewport.setMasked(false);
                 Ext.Msg.alert('Alert.', "User Not Found.", Ext.emptyFn);

            }
        }

        function updatePassword(_id){
            var store = Ext.getStore('inhouseMasterStore') ;
            newPwd = generatePassword() ;
            var dataToUpdate = {

                temp_password : newPwd,
                is_password_reset : true
            };
             RMdatalink.iwa.rdl.doUpdateCollection(store, dataToUpdate , _id , suc, err);

            function suc(){
                sendEmail() ;
                Ext.Viewport.setMasked(false);
                 Ext.Msg.alert('', "Password update link sent, please check your email.", Ext.emptyFn);
            }

            function err(){

                Ext.Viewport.setMasked(false);
            }

        }

        function sendEmail(){

            that.sendEmail(newPwd,emailText,username) ;


            //sendEmail:function(to, from, subject, body,sucessCallBack , errorCallBack){
        }
    },

    sendEmail: function(password, to, username) {
            var url = window.location.origin + window.location.pathname +"?";

            if( dbEnv == "dev_"){

                url += "dev=true&" ;
            }


             url += "temppwd="+ password + "&" ;

             url += "user="+ username + "#regeneratepwd" ;

             var linck = '<a href='+url+'>'+url+'</a>' ;


            var msgBody = 'Dear '+username + ' Please click below link to change your password ' + linck;

            RMdatalink.iwa.rdl.sendEmail(to , "support@rmdatalink.com" ,"Password Change",
                                         msgBody ,sucessCallBack , errorCallBack) ;

            function sucessCallBack(){

            }

            function errorCallBack(){

            }
    },

    regeneratePassword: function(newPwd) {
          var that = this ;
         Ext.Viewport.setMasked({
                            xtype: 'loadmask'
                        });


        var tempPwd = that.config.resetPwdUser.tempPassword ;
        var username = that.config.resetPwdUser.username ;

        getInhouseUser();

        function getInhouseUser(){

            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_inhouserecords",pageNo:1,pageSize:50,
                                        sortBy:{},query:{"temp_password":tempPwd,"username":username,is_password_reset:true},
                                        fields:{username:1}},
                                        suc,err);


            function suc(){

                if(arguments[0].items.length ==0 ){

                    err() ;

                }else{

                    updatePassword(arguments[0].items[0]._id);

                }

            }

            function err(){

                 Ext.Viewport.setMasked(false);
                 Ext.Msg.alert('Error.', "You can no longer change the password using this link.", Ext.emptyFn);

            }
        }



        function updatePassword(_id){
            var store = Ext.getStore('inhouseMasterStore') ;

            var dataToUpdate = {
                password:newPwd ,
                temp_password : "NON" ,
                is_password_reset : false
            };

             RMdatalink.iwa.rdl.doUpdateCollection(store, dataToUpdate , _id , suc, err);

            function suc(){

               //  Ext.Viewport.setMasked(false);
                 Ext.Msg.alert('Alert.', "Password updated successfully.", Ext.emptyFn);

                doLogin() ;
            }

            function err(){

                Ext.Msg.alert('Error.', "Error occured during password update, please re-try.", Ext.emptyFn);

                Ext.Viewport.setMasked(false);
            }

        }


        function doLogin(){

               Ext.ComponentQuery.query('#loginScreenContainer')[0].setActiveItem(0) ;

            Ext.ComponentQuery.query('#regenratePwdFld')[0].setValue("") ;

            Ext.ComponentQuery.query('#retypedRegenratePwdFld')[0].setValue("") ;

            Ext.ComponentQuery.query('#loginUsernameTxtFld')[0].setValue(username) ;
            Ext.ComponentQuery.query('#loginPasswordFld')[0].setValue(newPwd) ;

            Ext.ComponentQuery.query('#loginActionButton')[0].fireEvent("tap");
        }
    }

});