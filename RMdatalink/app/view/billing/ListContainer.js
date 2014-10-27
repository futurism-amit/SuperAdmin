/*
 * File: app/view/billing/ListContainer.js
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

Ext.define('RMdatalink.view.billing.ListContainer', {
    extend: 'Ext.Panel',
    alias: 'widget.billingListContainer',

    requires: [
        'RMdatalink.view.common.searchView',
        'Ext.Panel',
        'Ext.XTemplate',
        'Ext.dataview.List',
        'Ext.dataview.DataView'
    ],

    config: {
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'panel',
                height: '32px',
                style: 'margin-top:5px;',
                layout: 'fit',
                scrollable: false,
                items: [
                    {
                        xtype: 'searchView',
                        itemId: 'billingSeachViewItemID'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 15,
                layout: 'hbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'panel',
                        flex: 9,
                        layout: 'vbox',
                        scrollable: false,
                        items: [
                            {
                                xtype: 'dataview',
                                actionSorting: 'sortingStore',
                                flex: 1,
                                cls: 'x-rm-list-header',
                                itemId: 'billingListHeader',
                                width: '98.5%',
                                scrollable: false,
                                itemTpl: [
                                    '<div>Data View Item {string}</div>'
                                ]
                            },
                            {
                                xtype: 'list',
                                action: 'setScrollBarVisible',
                                flex: 15,
                                cls: 'x-rm-list',
                                itemId: 'billingList',
                                mode: 'MULTI',
                                itemTpl: [
                                    '<div>List Item {string}</div>'
                                ],
                                itemHeight: 28
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 0
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'fit',
                items: [
                    {
                        xtype: 'dataview',
                        cls: 'x-rm-list-totals',
                        itemId: 'billingTotalsList',
                        width: '90%',
                        scrollable: false
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onBillingListRefresh',
                event: 'refresh',
                delegate: '#billingList'
            },
            {
                fn: 'onBillingListItemTap',
                event: 'itemtap',
                delegate: '#billingList'
            }
        ]
    },

    onBillingListRefresh: function(dataview, eOpts) {
        //console.error("list refreshed");
        // var totalsList = dataview.parent.parent.parent.down('#retailerTotalsList');
        // totalsList.refresh();

    },

    onBillingListItemTap: function(dataview, index, target, record, e, eOpts) {
        /*MOVE THIS HANDLER TO CONTROLLER*/

        RMdatalink.app.getController('InvoiceController').config.isFromBilling = true ;
            RMdatalink.app.getController('RetailerDeatilsDataSet').onRetailerTap(dataview, index, target, record, e, eOpts);

        return ;
        var attrToSearch = RMdatalink.util.globalConfig.getListAttrForDelHandling();
        var targetEl = e.target;

        var  retailersMasterStore = Ext.getStore("retailersMaster");
        // ********  FIND RECORD FROM MASTER STORE USING 'store_name'  ********
        var indexRetailersMaster = retailersMasterStore.find("store_name",record.data.store_name);

        if( false ){//RMdatalink.util.globalConfig.isAttributePresentInTarget( attrToSearch,targetEl )  ){

            var attrVak = targetEl.getAttribute(attrToSearch);
            var nameAttr = RMdatalink.util.globalConfig.getManager_LastNameDelegateClassForTap();
            var storeAttr = RMdatalink.util.globalConfig.getStore_nameDelegateClassForTap();

            var varibleToSet = setVariable();
            var retailersMaincontentpanel = Ext.ComponentQuery.query('#retailersMaincontentpanel')[0];

            switch (attrVak){

                case nameAttr:
        //             RMdatalink.util.globalConfig.setDataToShowInSettingWindow(varibleToSet);
        //             Ext.ComponentQuery.query('#retailerDetailsMainTabPanel')[0].setActiveItem('#RDManagerTab');
        //             RMdatalink.app.getController('UINav').onPanelAddretailertapped(retailersMaincontentpanel);

        //             break;
                case storeAttr:
                    setMask() ;
                    showRtDtl() ;
        //             RMdatalink.util.globalConfig.setDataToShowInSettingWindow(varibleToSet);
        //             Ext.ComponentQuery.query('#retailerDetailsMainTabPanel')[0].setActiveItem('#RDStoresTab');
        //             RMdatalink.app.getController('UINav').onPanelAddretailertapped(retailersMaincontentpanel);

                    break;
                default:
                    RMdatalink.app.getController('UINav').redirectTo();
                    console.log('DONT FIRE ANY THING');
            }
        }else{

              setMask() ;

              Ext.Function.defer( showBillingDtl , 100, this);

        }

        function setVariable(){

            return {

                placeClicked:  attrVak,
                record:retailersMasterStore.getAt(indexRetailersMaster),
                index:index
            };
        }


        function setMask(){
            Ext.Viewport.setMasked({
                            xtype: 'loadmask'
                        });
        }

        function showRtDtl(){

            Ext.Function.defer( gotoRtDtl, 100, this);
        }

        function gotoRtDtl(){
                     RMdatalink.util.globalConfig.setDataToShowInSettingWindow(varibleToSet);
                    Ext.ComponentQuery.query('#retailerDetailsMainTabPanel')[0].setActiveItem('#RDStoresTab');
                    RMdatalink.app.getController('UINav').onPanelAddretailertapped(retailersMaincontentpanel);


        }

        function showBillingDtl(){
            console.log(record) ;
             RMdatalink.app.getController('BillingDetailsController').setBillingRecord(record);



             RMdatalink.app.getController('UINav').redirectTo('card16');

              RMdatalink.app.getController('InvoiceController').initInvoice(record) ;

        }
    }

});