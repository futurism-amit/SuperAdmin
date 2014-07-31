/*
 * File: app/view/products/DatalinkMain.js
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

Ext.define('RMdatalink.view.products.DatalinkMain', {
    extend: 'Ext.Panel',
    alias: 'widget.productsdatalinkmain',

    requires: [
        'RMdatalink.view.CardHeaderPanel',
        'RMdatalink.view.listWithHeader',
        'Ext.tab.Panel',
        'Ext.tab.Bar',
        'Ext.form.FieldSet',
        'Ext.Button',
        'Ext.Label',
        'Ext.form.Panel',
        'Ext.field.TextArea'
    ],

    config: {
        itemId: 'productDatalinkMainPanel',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'CardHeaderPanel',
                flex: 1
            },
            {
                xtype: 'panel',
                flex: 15,
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 1,
                        cls: 'x-rm-tabpanel',
                        ui: 'light',
                        tabBar: {
                            docked: 'top'
                        },
                        items: [
                            {
                                xtype: 'container',
                                title: 'Module',
                                itemId: 'datalinkMainListContainer',
                                layout: 'vbox',
                                scrollable: false,
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {




                                            ////////////////////////////////////////////////////

                                            var headers = component.down("#headerList");
                                            headers.setData([{}]);
                                            headers.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main">',
                                            '    <div style="width: 6%;">',
                                            '        <div style="width: 20px;" data-name="all"></div>',
                                            '    </div>',
                                            '    <div style="width: 14%;" data-name="module_sku">',
                                            '        SKU&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 15%;" data-name="module_name">',
                                            '        Product Name&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 40%;" data-name="module_description">',
                                            '       Description&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 10%;" data-name="module_standard_price">',
                                            '        Standard Price&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 10%;" data-name="module_promotional_price">',
                                            '        Promotional Price&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '</div>'
                                            )
                                            );
                                            headers.refresh();
                                            var list = component.down('#mainList');


                                            list.setStore(Ext.getStore('products.DatalinkMain'));


                                            list.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main pointerCursor">',
                                            '    <div style="width: 6%;">',
                                            '        <div style="width: 19px; height:19px;"    {[RMdatalink.util.globalConfig.getListAttrForDelHandling()]} ="onCartTap" ></div>',
                                            '    </div>',
                                            '    <div style="width: 14%;">{module_sku}</div>',
                                            '    <div style="width: 15%;">{module_name}</div>',
                                            '    <div style="width: 40%;">{module_description}</div>',
                                            '    <div style="width: 10%;">{module_standard_price}</div>',
                                            '    <div style="width: 10%;">{module_promotional_price}</div>',
                                            '</div>'
                                            )
                                            );

                                            // list.setMode("SINGLE");
                                            //     list.on("select",function(rmProlist, record, eOpts){
                                            //         RMdatalink.app.getController('RMProController').onProductRMProListSelect(rmProlist, record, eOpts);
                                            // });

                                            list.setItemHeight(22);
                                            list.setMode('MULTI');
                                            list.addCls('x-rm-rdvendorslist');


                                        },
                                        event: 'initialize'
                                    },
                                    {
                                        fn: function(element, eOpts) {

                                            RMdatalink.app.getController('DatalinkController').setDlDataPrice() ;
                                            RMdatalink.app.getController('DatalinkController').onRmProSelectUnselect() ;
                                        },
                                        event: 'painted'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'listwithheader',
                                        itemId: 'listwithheader',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'panel',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                margin: 0,
                                                width: '74%',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        hidden: true,
                                                        itemId: 'satalinkBundlePriceTxtFld',
                                                        width: '280px',
                                                        inputCls: 'highlightedColor',
                                                        label: 'Bundle Price',
                                                        labelCls: 'highlightedColor',
                                                        labelWidth: '120px'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        cls: 'x-rm-blueBtn',
                                                        height: '28px',
                                                        hidden: true,
                                                        itemId: 'saveDatalinkBundleBtn',
                                                        margin: '0 5 0 5',
                                                        text: 'Save Bundle'
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        docked: 'right',
                                                        html: 'Total price for selected items::',
                                                        margin: '5 5 5 10'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'label',
                                                itemId: 'datalinkSumOfStdPriceLbl',
                                                margin: '5 5 5 5',
                                                minWidth: '10%'
                                            },
                                            {
                                                xtype: 'label',
                                                itemId: 'datalinkSumOfPromoPriceLbl',
                                                margin: '5 5 5 5',
                                                minWidth: '10%'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'button',
                                        handler: function(button, e) {
                                            var form = Ext.ComponentQuery.query('#productDatalinkaddUpdateFrmPanel')[0];

                                            form.setHidden(! form.getHidden() ) ;

                                            if(form.getHidden()){

                                                button.setIconCls("arrow_up");
                                            }else{

                                                button.setIconCls("arrow_down");
                                                //arrow_down
                                            }
                                        },
                                        border: '0 0 0 0',
                                        height: 25,
                                        margin: '0 0 0 45%',
                                        style: 'background:transparent;',
                                        width: 105,
                                        iconAlign: 'center',
                                        iconCls: 'arrow_down'
                                    },
                                    {
                                        xtype: 'formpanel',
                                        cls: 'x-rm-rdformpanel',
                                        height: '150px',
                                        itemId: 'productDatalinkaddUpdateFrmPanel',
                                        scrollable: false,
                                        layout: {
                                            type: 'hbox',
                                            align: 'center',
                                            pack: 'center'
                                        },
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                flex: 1,
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'center',
                                                    pack: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'datalinkSKUTxtFld',
                                                        width: '98%',
                                                        label: 'SKU',
                                                        labelWidth: '110px'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'datalinkModuleNameTxtFld',
                                                        width: '98%',
                                                        label: 'Product Name',
                                                        labelWidth: '110px'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'button',
                                                cls: [
                                                    'x-rm-blueBtn',
                                                    'x-rm-rdopenbtns',
                                                    'x-rm-smalliconbtns'
                                                ],
                                                docked: 'top',
                                                height: '25px',
                                                itemId: 'datalinkNewResetBtn',
                                                width: '50px',
                                                badgeText: '',
                                                icon: ' resources//images//retailerDetail//add_btn.png',
                                                iconAlign: 'center'
                                            },
                                            {
                                                xtype: 'fieldset',
                                                flex: 1,
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'center',
                                                    pack: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'textareafield',
                                                        itemId: 'datalinkModuleDescriptionTxtAreaFld',
                                                        width: '98%',
                                                        label: 'Description',
                                                        labelWidth: '110px'
                                                    },
                                                    {
                                                        xtype: 'textareafield',
                                                        itemId: 'datalinkDetailsTxtAreaFld',
                                                        margin: '10 0 2 0',
                                                        width: '98%',
                                                        label: 'Details',
                                                        labelWidth: '110px'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'fieldset',
                                                flex: 1,
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'center',
                                                    pack: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'datalinkStandardPriceTxtFld',
                                                        width: '98%',
                                                        label: 'Standard Price',
                                                        labelWidth: '120px'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'datalinkPromotionalPriceTxtFld',
                                                        width: '98%',
                                                        label: 'Promotional Price',
                                                        labelWidth: '120px'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        action: 'addNew',
                                                        cls: 'x-rm-blueBtn',
                                                        itemId: 'datalinkAddModuleBtn',
                                                        margin: '0 0 0 20px',
                                                        text: 'Add New Module'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'Vendor Pricing',
                                itemId: 'productsDatalinkPricingTab',
                                listeners: [
                                    {
                                        fn: function(element, eOpts) {
                                            RMdatalink.app.getController('DatalinkController').onDatalinkVendorPricingPainted() ;
                                        },
                                        event: 'painted'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'Advance Payment Benifits',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                border: '1 1 1 1',
                                                itemId: 'datalinkDiscountListPanel',
                                                layout: 'vbox',
                                                items: [
                                                    {
                                                        xtype: 'listwithheader',
                                                        itemId: 'datalinkAdvancePaymentDiscountList',
                                                        flex: 1
                                                    }
                                                ],
                                                listeners: [
                                                    {
                                                        fn: function(component, eOpts) {
                                                            var headers = component.down("#headerList");
                                                            headers.setData([{}]);
                                                            headers.setItemTpl(
                                                            Ext.create('Ext.XTemplate',
                                                            '<div class="x-rm-listtpl-main">',

                                                            '    <div style="width: 20%;" data-name="discount_name">',
                                                            '        Name&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                                            '    </div>',
                                                            '    <div style="width: 15%;" data-name="discount_value">',
                                                            '        Discount&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                                            '    </div>',

                                                            '</div>'
                                                            )
                                                            );
                                                            headers.refresh();
                                                            var list = component.down('#mainList');
                                                            list.setStore(Ext.getStore('products.DatalinkDiscountStore'));
                                                            list.setItemTpl(
                                                            Ext.create('Ext.XTemplate',
                                                            '<div class="x-rm-listtpl-main pointerCursor">',

                                                            '    <div style="width: 20%;">{discount_name}</div>',
                                                            '    <div style="width: 15%;">{discount_value}%</div>',

                                                            '</div>'
                                                            )
                                                            );

                                                            list.setMode("SINGLE");

                                                            list.on("select",function(discountList, record, eOpts){
                                                                RMdatalink.app.getController('DatalinkController').onDatalinkDiscountSelect(discountList, record);
                                                            });
                                                        },
                                                        event: 'initialize'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'formpanel',
                                                cls: 'x-rm-rdformpanel',
                                                height: '100px',
                                                width: '100%',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        cls: [
                                                            'x-rm-blueBtn',
                                                            'x-rm-rdopenbtns',
                                                            'x-rm-smalliconbtns'
                                                        ],
                                                        docked: 'top',
                                                        height: '25px',
                                                        itemId: 'datalinkDiscountResetBtn',
                                                        width: '50px',
                                                        badgeText: '',
                                                        icon: ' resources//images//retailerDetail//add_btn.png',
                                                        iconAlign: 'center'
                                                    },
                                                    {
                                                        xtype: 'fieldset',
                                                        layout: 'hbox',
                                                        items: [
                                                            {
                                                                xtype: 'textfield',
                                                                itemId: 'datalinkDiscountNameFld',
                                                                width: '260px',
                                                                label: 'Discount Name',
                                                                labelWidth: '100px'
                                                            },
                                                            {
                                                                xtype: 'textfield',
                                                                itemId: 'datalinkDiscountValueFld',
                                                                label: 'Discount',
                                                                labelWidth: '80px'
                                                            },
                                                            {
                                                                xtype: 'textfield',
                                                                itemId: 'datalinkDiscountDurationFld',
                                                                label: 'Discount Duration In Year',
                                                                labelWidth: '160px'
                                                            },
                                                            {
                                                                xtype: 'button',
                                                                cls: 'x-rm-blueBtn',
                                                                height: '25px',
                                                                itemId: 'datalinkDiscountSaveBtn',
                                                                margin: '0 5 0 5',
                                                                minWidth: '100px',
                                                                text: 'Add New Discount'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
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
                fn: 'onRmProListItemTap',
                event: 'itemtap',
                delegate: '#listwithheader #mainList'
            },
            {
                fn: 'onInhouseMainContentPanelInitialize',
                event: 'initialize'
            }
        ]
    },

    onRmProListItemTap: function(dataview, index, target, record, e, eOpts) {

        var attrToSearch = RMdatalink.util.globalConfig.getListAttrForDelHandling();
        var targetEl = e.target;


        // delegateAttr="onCartTap"

        if( RMdatalink.util.globalConfig.isAttributePresentInTarget( attrToSearch,targetEl )  ){

                 var attrVak = targetEl.getAttribute(attrToSearch);

                 if(attrVak == "onCartTap")
                 {

                           // var timeout = setTimeout(function(){

                                RMdatalink.app.getController('DatalinkController').onRmProSelectUnselect();

                           //      clearTimeout(timeout);
                            //},100);


                 }

        }else{

            if(dataview.isSelected(record))
            {

                dataview.deselect(record,true) ;
            }else{

                dataview.select(record,true) ;
            }

            RMdatalink.app.getController('DatalinkController').onProductRMProListSelect(dataview, record, eOpts);
        }
    },

    onInhouseMainContentPanelInitialize: function(component, eOpts) {
        component.down('#cardAddRetailerBtn').setHidden(true) ;

        component.down('#cardDeleteBtn').setHidden(false) ;

        component.down('#cardActionBtn').setHidden(true) ;
        component.down('#cardImportBtn').setHidden(true) ;

        component.down('#cardExportBtn').setHidden(true) ;

        component.down('#cardTitleLabel').setHtml("Datalink");




        component.down('#cardDeleteBtn').element.on("tap",function(){

            // RMdatalink.app.getController('DeleteRecords').deleteRMPRO();
        });



    }

});