/*
 * File: app/store/retailers/Master.js
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

Ext.define('RMdatalink.store.retailers.Master', {
    extend: 'Ext.data.Store',
    alias: 'store.retailersMaster',

    requires: [
        'RMdatalink.model.retailers.Master'
    ],

    config: {
        pageNo: 1,
        cachedData: {
            
        },
        totalNoOfPages: '1',
        model: 'RMdatalink.model.retailers.Master',
        storeId: 'retailersMaster',
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
        ]
    },

    onStoreAddrecords: function(store, records, eOpts) {
        //RMdatalink.util.DataLoader.onRetailerMasterStoreNewRecordAdded(store,records,eOpts);

        //RMdatalink.util.DataHandler.onRetailerMasterStoreNewRecordAdded(store,records,eOpts);

        RMdatalink.app.getController('PaginationController').loadDependentStoresonMaster(store.getStoreId());
    },

    onStoreUpdaterecord: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
        //RMdatalink.util.DataLoader.onRetailerMasterStoreUpdate(store,record,newIndex,oldIndex,modifiedFieldNames,modifiedValues,eOpts);


        //RMdatalink.util.DataHandler.onRetailerMasterStoreUpdate(store,record,newIndex,oldIndex,modifiedFieldNames,modifiedValues,eOpts);


    },

    onStoreRemoverecords: function(store, records, indices, eOpts) {
        //RMdatalink.util.DataLoader.onRetailerMasterStoreRecordRemoved(store,records,indices,eOpts);

        //RMdatalink.util.DataHandler.onRetailerMasterStoreRecordRemoved(store,records,indices,eOpts);


    }

});