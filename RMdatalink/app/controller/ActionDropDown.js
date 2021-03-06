/*
 * File: app/controller/ActionDropDown.js
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

Ext.define('RMdatalink.controller.ActionDropDown', {
    extend: 'Ext.app.Controller',
    alias: 'controller.ActionDropDown',

    config: {
        control: {
            "actionDropDown": {
                actionsave: 'onActionDropDownActionsave'
            }
        }
    },

    onActionDropDownActionsave: function(sheet, targetStoreName) {
        //console.log("in action controller");
        var activeCard = Ext.ComponentQuery.query('#RMContentPanel')[0].getActiveItem();
        var activeTab = activeCard.down('tabpanel').getActiveItem();

        var currentList = activeTab.down('list');
        var currentStore = currentList.getStore();
        var targetStore = Ext.getStore(targetStoreName);
        var masterStore = Ext.getStore('retailersMaster');
        var selectedListArray = currentList.getSelection();
        var selectedListArrayRemove = currentList.getSelection();

        var StoreStatus = null;

        switch(targetStoreName)
        {
            case 'retailerUsers' :
                StoreStatus = 'ACTIVE';
                break;
            case 'retailerProspects' :
                StoreStatus = 'PROSPECTS';
                break;
             case 'retailerHotProspects' :
                StoreStatus = 'HOT_PROSPECTS';
                break;

            case 'retailerInactive' :
                StoreStatus = 'INACTIVE';
                break;
            case 'retailerPending' :
                StoreStatus = 'PENDING';
                break;
        }

        //dont move records if same store
        if(currentStore.getStoreId() === targetStoreName)
            return;
        if(!Ext.isEmpty(currentList.getSelection())) {

            // update its status
            for( var i = 0 ; i < selectedListArray.length ; i++ )
            {
              selectedListArray[i].data.store_status = StoreStatus;


                updateStoreStatus(
                    {

                        store_status : StoreStatus
                    },selectedListArray[i].data._id

                                 ) ;
            }

            targetStore.add(selectedListArray);
            targetStore.sync();
            currentStore.remove(selectedListArrayRemove);
            currentStore.sync();

            masterStore.remove(selectedListArrayRemove);
            masterStore.sync();

            masterStore.add(selectedListArray);
            masterStore.sync();

        }




        function updateStoreStatus(dataToSend,_id){

                    RMdatalink.iwa.rdl.doUpdateCollection(masterStore, dataToSend ,_id, suc, err);

                    function suc(){


                    }
                    function err(){

                    }
        }
    }

});