/*
 * File: app/store/vendors/Master.js
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

Ext.define('RMdatalink.store.vendors.Master', {
    extend: 'Ext.data.Store',
    alias: 'store.vendorsMaster',

    requires: [
        'RMdatalink.model.vendors.Master',
        'Ext.util.Sorter'
    ],

    config: {
        pageNo: 1,
        cachedData: {
            
        },
        totalNoOfPages: 1,
        model: 'RMdatalink.model.vendors.Master',
        storeId: 'vendors.Master',
        listeners: [
            {
                fn: 'onStoreAddrecords',
                event: 'addrecords'
            },
            {
                fn: 'onStoreUpdaterecord',
                event: 'updaterecord'
            },
            {
                fn: 'onStoreRemoverecords',
                event: 'removerecords'
            }
        ],
        sorters: {
            property: 'vendor_name'
        }
    },

    onStoreAddrecords: function(store, records, eOpts) {
        //RMdatalink.util.DataLoader.onRetailerMasterStoreNewRecordAdded(store,records,eOpts);

        //RMdatalink.util.DataHandler.onRetailerMasterStoreNewRecordAdded(store,records,eOpts);

    },

    onStoreUpdaterecord: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        if(RMdatalink.app.getController('RetailerDeatilsDataSet').config.isVendorUpdated){


            RMdatalink.app.getController('RetailerDeatilsDataSet').config.isVendorUpdated = false ;
           // RMdatalink.util.DataLoader.onRetailerMasterStoreUpdate(store,record,newIndex,oldIndex,modifiedFieldNames,modifiedValues,eOpts);


        }


    },

    onStoreRemoverecords: function(store, records, indices, eOpts) {

        console.log("records ",records , "  indices  " , indices);
          RMdatalink.util.DataLoader.onRetailerMasterStoreRecordRemoved(store,records,indices,eOpts);

        //RMdatalink.util.DataHandler.onRetailerMasterStoreRecordRemoved(store,records,indices,eOpts);
    }

});