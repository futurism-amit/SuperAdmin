/*
 * File: app/controller/PermissionsConroller.js
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

Ext.define('RMdatalink.controller.PermissionsConroller', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "selectfield[itemId=selectUserRoleSelectFld]": {
                change: 'onselectUserRoleSelectFldChange'
            },
            "textfield[itemId=addEditUserRoleTextFld]": {
                change: 'onaddEditUserRoleTextFldChange'
            },
            "button[itemId=addUpdateUserRoleButton]": {
                tap: 'onaddUpdateUserRoleButtonTap'
            }
        }
    },

    onselectUserRoleSelectFldChange: function(selectfield, newValue, oldValue, eOpts) {

        //Ext.ComponentQuery.query('#addEditUserRoleTextFld')[0].setValue(newValue) ;

        console.log(newValue) ;
        console.log(arguments);

        var PermisstionsStore = Ext.getStore('PermisstionsStore') ;

        var rec = PermisstionsStore.findRecord("user_role",newValue) ;

        if(! rec){
            return ;
        }

              var permissions = rec.data.permissions ;


           permissionsPanel = Ext.ComponentQuery.query('#PermissionsSelectorPage')[0] ;
            if(permissions){

                        for(var i =0 ; i< permissions.length ; i++){
                            if(permissions[i].value == "-1"){
                                var val = null;
                            }else{
                                var val = permissions[i].value ;
                            }
                             permissionsPanel.down("#permistions"+permissions[i].type).setValue(val);

                        }
                    }


    },

    onaddEditUserRoleTextFldChange: function(textfield, newValue, oldValue, eOpts) {
        /*var permissinSelectFld = Ext.ComponentQuery.query('#selectUserRoleSelectFld')[0] ;
        var options = permissinSelectFld.getOptions();
        var addUpdateButton = Ext.ComponentQuery.query('#addUpdateUserRoleButton')[0] ;

        if(options)
        for(var i=0;i<options.length; i++){

            var opt = options[i].user_role ;

            if(opt == newValue){

                permissinSelectFld.setValue(opt);
                 addUpdateButton.setText("Update Role");
            }else{

                addUpdateButton.setText("Add New Role");

            }
        }
        */
    },

    onaddUpdateUserRoleButtonTap: function(button, e, eOpts) {



        var permissionsStore =  Ext.getStore('PermisstionsStore') ;

        var newUserRole  = Ext.ComponentQuery.query('#addEditUserRoleTextFld')[0].getValue() ;

            if(newUserRole){


                    var recIndex = permissionsStore.findExact("user_role",newUserRole);

                    if(recIndex == -1)
                    {
                        this.addNewPermission() ;
                    }
                    else{

                       Ext.Msg.alert("Alert","User Role already exists.",Ext.emptyFn);


                    }

            }
    },

    addNewPermission: function() {
        var permissions = [
            {

                "name":"Dashboard",
                "type":"Dashboard",
                value:"-1"
            },
           {

                name:"Retailers",
                type:"Retailers",
                value:"-1"
            },


           {

                name:"Billing",
                type:"Billing",
               value:"-1"
            },



           {

                name:"Vendors",
                type:"Vendors",
                value:"-1"
            },

           {

                name:"In house",
                type:"Inhouse",
               value:"-1"
            },
                      {

                "name":"Notification",
                "type":"Notification",
                value:"-1"
            },

              {

                "name":"Notepad",
                "type":"Notepad",
               value:"-1"
            },
                {

                "name":"Products",
                "type":"Products",
                value:"-1"
            },


               {

                name:"Products-Datalink",
                type:"Products_Datalink",
                value:"-1"
            },
        {

                name:"Products-Ecatalog",
                type:"Products_Ecatalog",
                value:"-1"
            },
        {

                name:"Products-SMART CART",
                type:"Products_SMART_CART",
               value:"-1"
            },
        {

                name:"Products-RM PLC",
                type:"Products_RM_PLC",
               value:"-1"
            },
        {

                name:"Products-IRUGZ",
                type:"Products_IRUGZ",
               value:"-1"
            },


            {

                "name":"Pricing",
                "type":"Pricing",
                value:"-1"
            },


               {

                name:"Pricing-Datalink",
                type:"Pricing_Datalink",
               value:"-1"
            },
        {

                name:"Pricing-Ecatalog",
                type:"Pricing_Ecatalog",
               value:"-1"
            },
        {

                name:"Pricing-SMART CART",
                type:"Pricing_SMART_CART",
               value:"-1"

            },
        {

                name:"Pricing-RM PLC",
                type:"Pricing_RM_PLC",
               value:"-1"
            },
        {

                name:"Pricing-IRUGZ",
                type:"Pricing_IRUGZ",
               value:"-1"
            },



            {

                "name":"Discounts",
                "type":"Discounts",
                 value:"-1"
            },


               {

                name:"Discounts-Datalink",
                type:"Discounts_Datalink",
                value:"-1"
            },
        {

                name:"Discounts-Ecatalog",
                type:"Discounts_Ecatalog",
                value:"-1"
            },
        {

                name:"Discounts-SMART CART",
                type:"Discounts_SMART_CART",
                value:"-1"
            },
        {

                name:"Discounts-RM PLC",
                type:"Discounts_RM_PLC",
                value:"-1"
            },
        {

                name:"Discounts-IRUGZ",
                type:"Discounts_IRUGZ",
                value:"-1"
            }







        ];




           var permissionsPanel = Ext.ComponentQuery.query('#PermissionsSelectorPage')[0] ;

             var slectFields = permissionsPanel.query('[xtype=selectfield]');

                       for(var i =0 ; i< permissions.length ; i++){

                             val = permissionsPanel.down("#permistions"+permissions[i].type).getValue();
                           if(val != null){
                               permissions[i].value = val ;
                           }

                        }


        var userRole = Ext.ComponentQuery.query('#addEditUserRoleTextFld')[0].getValue() ;

        var recordToinsert = {
            user_role:userRole,
            permissions :  permissions
        };

        var permissionsStore =  Ext.getStore('PermisstionsStore') ;

          RMdatalink.util.DataLoader.sendNewRecordForInHouseToServer(recordToinsert, permissionsStore, successCall, errorCall) ;

                  Ext.Viewport.setMasked( {
                        xtype: 'loadmask'
                    });


        function successCall(){

            permissionsStore.add(recordToinsert);
            permissionsStore.sync() ;
            Ext.Viewport.setMasked(false);
            try{
                Ext.ComponentQuery.query('#addEditUserRoleTextFld')[0].setValue("");
            }catch(ex){

            }


        }

        function errorCall(){
              Ext.Viewport.setMasked(false);
        }
    },

    updateUserRole: function(userRole, permissions) {
        if(!userRole){

            Ext.Msg.alert("Alert","Please select user role first",Ext.emptyFn);
            return ;
        }

        Ext.Msg.confirm("Confirm","Are you sure you want to change predefined user role",onMessageAns ,this);


        function onMessageAns(action,opt,confirmBox){


            if(action == "yes"){

                updatePermissions() ;


            }else{


            }


        }

        var record ;
        function updatePermissions(){

            var permissionStore = Ext.getStore('PermisstionsStore') ;

            var recIndex = permissionStore.findExact("user_role",userRole);
             record = permissionStore.getAt(recIndex);
            var dataToUpdate = new Object() ;

            dataToUpdate = record.data ;

            var search_id = record.raw._id ;



          console.error(search_id) ;
              console.error(dataToUpdate) ;

             Ext.Viewport.setMasked({
                            xtype: 'loadmask'
                        });


             RMdatalink.iwa.rdl.doUpdateCollection(permissionStore, dataToUpdate ,search_id , successcallback , errorcallback);

        }

        function successcallback(){
                 Ext.Viewport.setMasked(false);
            record.set("permissions",permissions);
            Ext.ComponentQuery.query('#PermissionsSelectorPage')[0].hide() ;
        }


        function errorcallback(){
             Ext.Viewport.setMasked(false);
              Ext.Msg.alert("Alert","Error occured, please try again",Ext.emptyFn);
        }
    },

    showPermissions: function() {
              var permissionsPanel ;
            permissionsPanel = Ext.ComponentQuery.query('#PermissionsSelectorPage')[0] ;
            if(permissionsPanel){
                 permissionsPanel.show();
            }
            else{
               permissionsPanel =  Ext.create('RMdatalink.view.PermissionsSelector', {
                                        height:'96%',
                                        width:'90%',
                                         modal: true,
                                        hideOnMaskTap: true,
                                        showAnimation: {
                                            type: 'popIn',
                                            duration: 250,
                                            easing: 'ease-out'
                                        },
                                        hideAnimation: {
                                            type: 'popOut',
                                            duration: 250,
                                            easing: 'ease-out'
                                        },
                                        centered:true
                                    });
                                    permissionsPanel.show();
            }



        /*
                if(!  that.isNewRecordBtnTapped){

                   Ext.ComponentQuery.query('#selectUserRoleSelectFld')[0].setValue(that.selectedInhouseUser.data.user_role);
                    setOptionsOfPermissions();
                }else{

                    var slectFields = permissionsPanel.query('[xtype=selectfield]');

                    for(var i=0 ;i < slectFields.length; i++){
                        slectFields[i].setValue(null);
                    }
                }

                function setOptionsOfPermissions(){
                    var permissions = that.selectedInhouseUser.data.permissions ;

                    console.log(that.selectedInhouseUser);

                    if(permissions){

                        for(var i =0 ; i< permissions.length ; i++){
                            if(permissions[i].value == "-1"){
                                var val = null;
                            }else{
                                var val = permissions[i].value ;
                            }
                             permissionsPanel.down("#permistions"+permissions[i].type).setValue(val);

                        }
                    }


                }
        */
    }

});