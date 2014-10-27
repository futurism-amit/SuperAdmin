/*
 * File: app/view/BlueBookListContainer.js
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

Ext.define('RMdatalink.view.BlueBookListContainer', {
    extend: 'Ext.Container',
    alias: 'widget.bluebooklistcontainer',

    requires: [
        'Ext.XTemplate',
        'Ext.dataview.List'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'dataview',
                actionSorting: 'sortingStore',
                cls: 'x-rm-list-header',
                height: '30px',
                itemId: 'headerList',
                scrollable: false
            },
            {
                xtype: 'list',
                action: 'setScrollBarVisible',
                flex: 1,
                cls: 'x-rm-list',
                itemId: 'mainList',
                allowDeselect: true,
                itemHeight: 36
            }
        ],
        listeners: [
            {
                fn: 'onMainListSelect',
                event: 'select',
                delegate: '#mainList'
            },
            {
                fn: 'onMainListDisclose',
                event: 'disclose',
                delegate: '#mainList'
            }
        ]
    },

    onMainListSelect: function(dataview, record, eOpts) {

        var rdTabPanel =  Ext.ComponentQuery.query('#retailerDetailsMainTabPanel')[0];

        if(rdTabPanel.getActiveItem().getItemId() == "CmpContactTab"){


            var store = dataview.getStore();
            for(var i=0; i < store.getData().all.length ; i++ ){

                var strRec = store.getAt(i);
                strRec.set("is_account_mgr",false);

            }

            record.set("is_account_mgr",true);

            //        Ext.ComponentQuery.query('#RDUsersTab')[0].setActiveItem(1);

                //  RMdatalink.app.getController('RetailerDeatilsDataSet').actionVisitCompanyProfile(index,record);

        }
        else{

            if(rdTabPanel.getTabBar().getAt(1).getHidden())
            {
                Ext.ComponentQuery.query('#RDBlueBookTab')[0].setActiveItem(1);
            }
            else
            {
                Ext.ComponentQuery.query('#RDUsersTab')[0].setActiveItem(1);

            }

            RMdatalink.app.getController('RetailerDeatilsDataSet').actionVisitProfile(index,record);

        }

    },

    onMainListDisclose: function(list, record, target, index, e, eOpts) {
        // if(RMdatalink.app.getController('RetailerDeatilsDataSet').config.isEditMode){

        //     return ;
        // }

        RMdatalink.app.getController('RetailerDeatilsDataSet').actionVisitCompanyProfile(index,record);

    }

});