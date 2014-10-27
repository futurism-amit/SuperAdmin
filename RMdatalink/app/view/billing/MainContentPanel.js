/*
 * File: app/view/billing/MainContentPanel.js
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

Ext.define('RMdatalink.view.billing.MainContentPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.billingmaincontentpanel',

    requires: [
        'RMdatalink.view.CardHeaderPanel',
        'RMdatalink.view.billing.ListContainer',
        'Ext.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Bar'
    ],

    config: {
        itemId: 'billingMainContentPanel',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'CardHeaderPanel',
                hidden: false,
                itemId: 'billingCardHeader',
                flex: 1
            },
            {
                xtype: 'panel',
                flex: 15,
                hidden: false,
                itemId: 'billingContentPanel',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 1,
                        activeItem: 10,
                        cls: [
                            'x-rm-tabpanel',
                            'x-rm-tabpanelBilling'
                        ],
                        itemId: 'billingTabPanel',
                        ui: 'light',
                        tabBar: {
                            docked: 'top',
                            itemId: 'mytabbar'
                        },
                        items: [
                            {
                                xtype: 'container',
                                actionInit: 'containerInit',
                                title: '<div style="line-height: 25px;">ALL</div>',
                                itemId: 'allTab',
                                layout: 'fit',
                                scrollable: false,
                                listeners: [
                                    {
                                        fn: function(element, eOpts) {
                                            window.location.hash = 'billingCard'+0;
                                        },
                                        event: 'painted'
                                    },
                                    {
                                        fn: function(component, eOpts) {
                                            //billing.MasterModel

                                            var headers = component.down("#billingListHeader");
                                            headers.setData([{}]);
                                            headers.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main">',
                                            '    <div style="width: 6%;" data-name="account_no">',
                                            '        Account #&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 12%;" data-name="store_name">',
                                            '        Store&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style="width: 5%;" data-name="store_products_datalink">',
                                            '        Data&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style=" width: 5%;" data-name="store_products_ecatalog">',
                                            '        eCat&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style=" width: 5%;" data-name="store_products_smart_cart">',
                                            '        eCom&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style=" width: 6%;" data-name="store_products_rm_plc">',
                                            '        RMPro&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style=" width: 6%;" data-name="store_products_rm_plc">',
                                            '        iRugs&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style=" width: 6%;" data-name="store_products_rm_plc">',
                                            '        Status&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style=" width: 8%;" data-name="store_products_rm_plc">',
                                            '        Last Paid On&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style=" width: 10%;" data-name="">',
                                            '        Last Paid Amount&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style=" width: 10%;" data-name="store_products_rm_plc">',
                                            '        Next Due Date&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style=" width: 8%;" data-name="store_products_rm_plc">',
                                            '        Due Amount&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style=" width: 6%;" data-name="store_products_rm_plc">',
                                            '        Overdue&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style=" width: 6%;" data-name="store_products_rm_plc">',
                                            '        Balance&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '</div>'
                                            )
                                            );
                                            headers.refresh();
                                            /**/
                                            var list = component.down('#billingList');
                                            list.setStore('billingMasterStore');
                                            list.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main">',

                                            '    <div class="pointerCursor" style="width: 6%;" {[RMdatalink.util.globalConfig.getListAttrForDelHandling()]} = "{[RMdatalink.util.globalConfig.getStore_nameDelegateClassForTap()]}" >{account_no}</div>',

                                            '    <div class="pointerCursor boldText" style="width: 12%;" {[RMdatalink.util.globalConfig.getListAttrForDelHandling()]} = "{[RMdatalink.util.globalConfig.getStore_nameDelegateClassForTap()]}" >{store_name}</div>',

                                            '    <div style="width: 5%;" class="checkRound">',
                                            '        <div style="width: 9px; height:9px; background-color:{[this.getCheckBoxRound(values.store_products.datalink_status)]}"><span style="margin-left: 10px;font-size: 12px;font-weight: bold; color:red;">{[RMdatalink.app.getController("RetailerDeatilsDataSet").config.billingQuery.getProductAlertText(values,"product_datalink")]}</span></div>',
                                            '    </div>',
                                            '    <div style="width: 5%;" class="checkRound">',
                                            '        <div style="width: 9px; height:9px; background-color:{[this.getCheckBoxRound(values.store_products.ecatalog_status)]}"></div>',
                                            '    </div>',
                                            '    <div style="width: 5%;" class="checkRound">',
                                            '        <div style=" width: 9px; height:9px; background-color:{[this.getCheckBoxRound(values.store_products.ecommerce_status)]}"></div>',
                                            '    </div>',
                                            '    <div style="width: 6%;" class="checkRound">',
                                            '        <div style="width: 9px; height:9px; background-color:{[this.getCheckBoxRound(values.store_products.rmpro_status)]}"><span style="margin-left: 10px;font-size: 12px;font-weight: bold; color:red;">{[RMdatalink.app.getController("RetailerDeatilsDataSet").config.billingQuery.getProductAlertText(values,"product_rmpro")]}</span></div>',
                                            '    </div>',
                                            '    <div style="width: 6%;" class="checkRound">',
                                            '        <div style="width: 9px; height:9px; background-color:{[this.getCheckBoxRound(values.store_products.irugs_status)]}"></div>',
                                            '    </div>',

                                            '    <div style="width: 6%;" >{[this.getStatus(values)]}</div>',
                                            '    <div style="width: 8%;" >{[this.getLastPaidOn(values)]}</div>',

                                            '    <div style="width: 10%;" >{[this.getLastPaidAmmount(values)]}</div>',

                                            '    <div style="width: 10%;" >{[this.getDueDate(values)]}</div>',
                                            '    <div style="width: 8%;" >{[this.getDueAmmount(values)]}</div>',

                                            '    <div style="width: 6%;" ></div>',
                                            '    <div style="width: 6%;" ></div>',


                                            '</div>',
                                            {

                                                getLastPaidAmmount: function(value){

                                                    if(value.product_billng){

                                                        var d1 = null;
                                                        var d2 = null ;
                                                        var amm1 = 0 ;
                                                        var amm2 = 0 ;
                                                        if(value.product_billng.product_datalink){

                                                            d1 = value.product_billng.product_datalink.invoice_id;

                                                            amm1 = value.product_billng.product_datalink.total_payble;
                                                        }
                                                        if(value.product_billng.product_rmpro){

                                                            d2 = value.product_billng.product_rmpro.invoice_id;

                                                            amm2 = value.product_billng.product_rmpro.total_payble;
                                                        }

                                                        if( d1 && d2){
                                                            var d3 = new Date(d1);
                                                            var d4 = new Date(d2);
                                                            return (d3 > d4 ? amm1 : amm2 ) ;
                                                        }else{

                                                            return (amm1 ? amm1 : amm2 ? amm2 : "") ;
                                                        }

                                                    }

                                                    return "";

                                                },

                                                getLastPaidOn: function(value){

                                                    if(value.product_billng){

                                                        var d1 = null;
                                                        var d2 = null ;

                                                        if(value.product_billng.product_datalink){

                                                            d1 = value.product_billng.product_datalink.invoice_id;
                                                        }
                                                        if(value.product_billng.product_rmpro){

                                                            d2 = value.product_billng.product_rmpro.invoice_id;
                                                        }

                                                        if( d1 && d2){
                                                            var d3 = new Date(d1);
                                                            var d4 = new Date(d2);
                                                            return (d3 > d4 ? d1 : d2) ;
                                                        }else{

                                                            return (d1 ? d1 : d2 ? d2 : "") ;
                                                        }

                                                    }

                                                    return "";

                                                },


                                                getStatus: function(value){

                                                    var status = "" ;
                                                    var dd = null ;
                                                    if(value.product_billng){

                                                        var d1 = null;
                                                        var d2 = null ;

                                                        if(value.product_billng.product_datalink){

                                                            d1 = value.product_billng.product_datalink.due_date;
                                                        }
                                                        if(value.product_billng.product_rmpro){

                                                            d2 = value.product_billng.product_rmpro.due_date;
                                                        }

                                                        if( d1 && d2){
                                                            var d3 = new Date(d1);
                                                            var d4 = new Date(d2);
                                                            dd = (d3 < d4 ? d1 : d2) ;
                                                        }else{

                                                            dd = (d1 ? d1 : d2 ? d2 : "") ;
                                                        }

                                                    }

                                                    if(dd){
                                                        var today = new Date() ;

                                                        dd = new Date(dd) ;

                                                        return today < dd ? "PAID" : "UNPAID";
                                                    }

                                                    return "" ;

                                                },

                                                getCity: function(value){
                                                    if(value.locations){

                                                        if(value.locations[0]){

                                                            if(value.locations[0].city!== ""){
                                                                return value.locations[0].city;
                                                            }


                                                        }
                                                    }

                                                    return value.store_city ;
                                                },


                                                getDueDate: function(value){
                                                    if(value.product_billng){

                                                        var d1 = null;
                                                        var d2 = null ;

                                                        if(value.product_billng.product_datalink){

                                                            d1 = value.product_billng.product_datalink.due_date;
                                                        }
                                                        if(value.product_billng.product_rmpro){

                                                            d2 = value.product_billng.product_rmpro.due_date;
                                                        }

                                                        if( d1 && d2){
                                                            var d3 = new Date(d1);
                                                            var d4 = new Date(d2);
                                                            return (d3 < d4 ? d1 : d2) ;
                                                        }else{

                                                            return (d1 ? d1 : d2 ? d2 : "") ;
                                                        }

                                                    }

                                                    return "";

                                                },
                                                getDueAmmount: function(value){

                                                    var past_due = 0 ;
                                                    if(value.product_billng){



                                                        if(value.product_billng.product_datalink){

                                                            past_due = value.product_billng.product_datalink.past_due ? parseInt(value.product_billng.product_datalink.past_due,0) : 0;
                                                        }
                                                        if(value.product_billng.product_rmpro){

                                                            past_due += value.product_billng.product_rmpro.past_due ? parseInt(value.product_billng.product_rmpro.past_due,0) :0;
                                                        }



                                                    }

                                                    return past_due ;

                                                },
                                                getState: function(value){
                                                    if(value.locations){

                                                        if(value.locations[0]){

                                                            if(value.locations[0].state!== ""){
                                                                return value.locations[0].state;
                                                            }
                                                        }
                                                    }

                                                    return value.store_state ;
                                                },

                                                getZip: function(value){
                                                    if(value.locations){

                                                        if(value.locations[0]){

                                                            if(value.locations[0].zip !== ""){
                                                                return value.locations[0].zip;
                                                            }
                                                        }
                                                    }
                                                    return value.store_zip ;
                                                },

                                                getCheckBoxRound: function(value){
                                                    if(value)
                                                    {
                                                        switch(value){

                                                            case "ACTIVE":
                                                            return '#39b3d7';
                                                            case "INACTIVE":
                                                            return '#ebebeb';
                                                            case "PROSPECT":
                                                            return '#47a447';
                                                            case "HOT_PROSPECT":
                                                            return '#ed9c28';
                                                            case "PENDING":
                                                            return '#3276b1';
                                                        }


                                                        return '#2EC1DA';
                                                    }
                                                    else
                                                    return '#F3F3F4';

                                                }

                                            },

                                            {
                                                setOwedMonthlyField: function(rec){
                                                    var value = 0 ;
                                                    if(rec.store_products.rmpro_status && rec.store_products.rmpro_status == "ACTIVE"){

                                                        value += parseInt(rec.product_billng.product_rmpro.monthly_membership,0) ;
                                                    }

                                                    if(rec.store_products.datalink_status && rec.store_products.datalink_status == "ACTIVE"){

                                                        value += parseInt(rec.product_billng.product_datalink.monthly_membership,0) ;
                                                    }



                                                    if(value === 0)
                                                    return "0.00";
                                                    else
                                                    {
                                                        var sumStr = ""+ value;
                                                        var sumStrSplit0 = sumStr.split('.')[0];

                                                        var len = sumStrSplit0.length;
                                                        if(len > 3)
                                                        {
                                                            sumStr1 = sumStrSplit0.substr(0,(len-3));
                                                            sumStr2 = sumStrSplit0.substr((len-3),(len-1));
                                                            sumStrSplit0 =  sumStr1 + ',' + sumStr2 ;
                                                        }

                                                        if(sumStr.split('.')[1])
                                                        return sumStrSplit0 + '.' +sumStr.split('.')[1];
                                                        else
                                                        {
                                                            return  sumStrSplit0;
                                                        }
                                                    }


                                                }

                                            }
                                            )
                                            );
                                            list.onStoreClear();

                                        },
                                        event: 'initialize'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'billingListContainer',
                                        itemId: 'allListContainerItemID'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                actionInit: 'containerInit',
                                title: '<div style="line-height: 25px;">PAID</div>',
                                itemId: 'paidTab',
                                layout: 'fit',
                                scrollable: false,
                                listeners: [
                                    {
                                        fn: function(element, eOpts) {
                                            window.location.hash = 'billingCard'+1;
                                        },
                                        event: 'painted'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'billingListContainer',
                                        itemId: 'paidListContainerItemID'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                actionInit: 'containerInit',
                                title: ' <div style="line-height: 25px;">PAST DUE</div>',
                                itemId: 'pastDueTab',
                                layout: 'fit',
                                scrollable: false,
                                listeners: [
                                    {
                                        fn: function(element, eOpts) {
                                            window.location.hash = 'billingCard'+2;
                                        },
                                        event: 'painted'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'billingListContainer',
                                        itemId: 'pastDueListContainerItemID'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                actionInit: 'containerInit',
                                title: ' <div style="background-color:#2EC1DA;line-height: 25px;color: white;height: 28px;">REVIEW</div>',
                                itemId: 'reviewTab',
                                layout: 'fit',
                                scrollable: false,
                                listeners: [
                                    {
                                        fn: function(element, eOpts) {
                                            window.location.hash = 'billingCard'+3;
                                        },
                                        event: 'painted'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'billingListContainer',
                                        itemId: 'reviewListContainerItemID'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onPanelInitialize',
                event: 'initialize'
            }
        ]
    },

    onPanelInitialize: function(component, eOpts) {
        component.down('#cardExportBtn').element.on("tap",function(){

                    var store =list = Ext.ComponentQuery.query("#allListContainerItemID")[0].down('#billingList').getStore();

                     var data = RMdatalink.app.getController('inhouse.DetailScreenController').getArrayDataFromStore(store) ;


                    RMdatalink.app.getController('inhouse.DetailScreenController').exportToCSV(data);

        });
    }

});