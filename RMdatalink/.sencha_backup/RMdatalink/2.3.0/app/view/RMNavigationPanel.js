/*
 * File: app/view/RMNavigationPanel.js
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

Ext.define('RMdatalink.view.RMNavigationPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.RMNavigationPanel',

    requires: [
        'Ext.Panel',
        'Ext.form.FieldSet',
        'Ext.Button',
        'Ext.Label'
    ],

    config: {
        cls: 'x-rm-navigation-panel',
        height: '100%',
        itemId: 'rmMainMenuNavigationPanel',
        margin: '0px 1px 0px 0px',
        style: 'border-right: 1px solid;',
        scrollable: false,
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                xtype: 'panel',
                cls: 'x-overviewnavpanel',
                minHeight: '34%',
                width: '100%',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'fieldset',
                        border: '0 0 0 0',
                        cls: 'x-form-menu',
                        margin: '0 0 0 0',
                        style: 'background-color: #eee !important;',
                        layout: {
                            type: 'hbox',
                            align: 'end',
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'button',
                                handler: function(button, e) {
                                    var form = Ext.ComponentQuery.query('#rmMainMenuNavigationPanel')[0];
                                    var state;


                                    if(form.getWidth() == 48){
                                        form.setWidth(156);
                                        //     button.setIconCls("arrow_left");
                                        button.setIcon(lAicon);
                                        state = 1;

                                    }else{

                                        form.setWidth(48);
                                        //     button.setIconCls("arrow_right");
                                        state = 0;
                                        button.setIcon(rAicon);
                                        //arrow_down
                                    }







                                    var stateToSave = state;
                                    var LoginHandler = RMdatalink.app.getController('LoginHandler') ;
                                    var _id = LoginHandler.config.userDetails._id ;

                                    var inhouseMasterStore = Ext.getStore('inhouseMasterStore');









                                    var dataToUpdate = {
                                        rm_navigation_panel_state:stateToSave
                                    };

                                    LoginHandler.config.userDetails.rm_navigation_panel_state = stateToSave;
                                    RMdatalink.iwa.rdl.doUpdateCollection(inhouseMasterStore, dataToUpdate , _id, success, error);

                                    function success(){

                                    }

                                    function error(){


                                    }












                                },
                                border: '0 0 0 0',
                                cls: 'borderedDiv',
                                itemId: 'RMnavigationPanelExpandButton',
                                style: 'background:transparent;border-radius: 20px;border-width: 1px !important;',
                                width: 40,
                                icon: 'resources/images/larr.png',
                                iconAlign: 'center'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: 'Overview'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 0,
                        cls: [
                            'x-button-selected',
                            'pointerCursor'
                        ],
                        itemId: 'overviewDashBoardBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/dashboard.png',
                        text: 'Dashboard'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 1,
                        itemId: 'overviewRetailersBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Retailers.png',
                        text: 'Retailers'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 2,
                        itemId: 'overviewBillingBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Billing.png',
                        text: 'Billing'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 3,
                        itemId: 'overviewVendorsBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Venders.png',
                        text: 'Vendors'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 4,
                        itemId: 'overviewInHouseBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/In_House.png',
                        text: 'In House'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'x-rm-separator',
                width: '80%'
            },
            {
                xtype: 'panel',
                cls: 'x-productsnavpanel',
                itemId: 'RMProductsNavigationPanel',
                minHeight: '30%',
                padding: '1%',
                width: '100%',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'label',
                        html: 'Products'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 5,
                        itemId: 'productsDatalinkBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Datalink.png',
                        text: 'Datalink'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 6,
                        itemId: 'productsECatalogBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/ECatalog.png',
                        text: 'ECatalog'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 7,
                        itemId: 'productsSmartCartBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/SMART_cart.png',
                        text: 'E-Commerce'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 8,
                        itemId: 'productsRMPLCBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/RM_PLC.png',
                        text: 'RMPro'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 9,
                        itemId: 'productsIRugzBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/iRugz.png',
                        text: 'iRugz'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'x-rm-separator',
                width: '80%'
            },
            {
                xtype: 'panel',
                cls: 'x-extrasnavpanel',
                minHeight: '25%',
                padding: '1%',
                width: '100%',
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'label',
                        html: 'Extras'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 10,
                        hidden: true,
                        itemId: 'extrasPricingBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Pricing.png',
                        text: 'Pricing'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 11,
                        itemId: 'extrasDiscountsBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Discounts.png',
                        text: 'Discounts'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 12,
                        itemId: 'extrasNotificationsBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Notification.png',
                        text: 'Notifications'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 13,
                        itemId: 'extrasNotepadBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Notepad.png',
                        text: 'Notepad'
                    },
                    {
                        xtype: 'button',
                        action: 'changecard',
                        index: 18,
                        itemId: 'extrasReportsBtn',
                        ui: 'plain',
                        icon: 'resources/images/RMNavigationPanel/Notepad.png',
                        text: 'Reports'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onRmMainMenuNavigationPanelInitialize',
                event: 'initialize'
            }
        ]
    },

    onRmMainMenuNavigationPanelInitialize: function(component, eOpts) {

        var functionToExecute = function(){

            var btns = component.query('button') ;

            for(var i=0 ; i< btns.length; i++)
            {
                if( btns[i].getText())
                {
                    btns[i].getEl().dom.title = btns[i].getText();
                }
            }


        };
        functionToExecute();

        component.addListener(

            'painted' , function(){


                var LoginHandler = RMdatalink.app.getController('LoginHandler');

                if(LoginHandler.config.userDetails.rm_navigation_panel_state  == 0){

                    var RMnavigationPanelExpandButton= component.query("#RMnavigationPanelExpandButton")[0];
                    var handler = RMnavigationPanelExpandButton.getHandler();
                    handler.call(RMnavigationPanelExpandButton , RMnavigationPanelExpandButton);

                }else{

                }


            },
            this,{

                single:true
            }
        );
    }

});