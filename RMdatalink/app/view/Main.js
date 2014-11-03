/*
 * File: app/view/Main.js
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

Ext.define('RMdatalink.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.Main',

    requires: [
        'RMdatalink.view.RMNavigationPanel',
        'RMdatalink.view.retailers.MainContentPanel',
        'RMdatalink.view.billing.MainContentPanel',
        'RMdatalink.view.vendors.MainContentPanel',
        'RMdatalink.view.inhouse.MainContentPanel',
        'RMdatalink.view.products.DatalinkMain',
        'RMdatalink.view.products.EcomMain',
        'RMdatalink.view.products.RM_PROMain',
        'RMdatalink.view.pricing.MainContentPanel',
        'RMdatalink.view.discounts.MainContentPanel',
        'RMdatalink.view.retailers.Details',
        'RMdatalink.view.inhouse.DetailsPage',
        'RMdatalink.view.browseLatestLogMainContainer',
        'RMdatalink.view.billing.ReportScreen',
        'Ext.TitleBar',
        'Ext.Img',
        'Ext.Button',
        'Ext.Panel'
    ],

    config: {
        cls: 'x-rm-maincard',
        itemId: 'Main',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                ui: 'light',
                layout: {
                    type: 'hbox',
                    align: 'center'
                },
                items: [
                    {
                        xtype: 'image',
                        cls: 'x-rm-mainlogo',
                        docked: 'left',
                        height: '27px',
                        margin: '0 0 0 10',
                        minHeight: '27px',
                        width: '160px',
                        src: 'resources/images/RM-datalink.png'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {

                            if(RMdatalink.util.globalConfig.getUpdaterRunningStatus()){

                                console.log("ALREADY RUNNING");
                            }else{
                                console.log("WIll RUN NOW");
                                RMdatalink.util.globalConfig.updateRemoteRetailerInformation();
                            }

                        },
                        align: 'right',
                        cls: 'x-rm-accountsettings',
                        itemId: 'button_retailerImport',
                        margin: 0,
                        text: 'Import Retailer'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        cls: 'x-rm-accountsettings',
                        itemId: 'RMTechSupportLog',
                        margin: 0,
                        text: 'Start Tech Support'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            if(Ext.getCmp("TechLogButtons"))
                            {

                                //                    Ext.getCmp("TechLogButtons").destroy();

                                var popup =  RMdatalink.app.getController('TechSupportLog').config.browseTechSupportBtnWindow  ;
                            }
                            else{

                                var popup =   RMdatalink.app.getController('TechSupportLog').config.browseTechSupportBtnWindow =  Ext.widget('TechLogButtons');
                            }

                            popup.showBy(button);

                        },
                        align: 'right',
                        cls: [
                            'x-rm-accountsettings',
                            'downWindowButtonIcon'
                        ],
                        margin: 0,
                        width: '20px',
                        iconAlign: 'center'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        cls: 'x-rm-accountsettings',
                        itemId: 'RMMainAccSettings',
                        iconCls: 'user',
                        text: 'User Name'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'RMNavigationPanel',
                        width: '128px'
                    },
                    {
                        xtype: 'panel',
                        flex: 7,
                        itemId: 'RMContentPanel',
                        scrollable: false,
                        layout: {
                            type: 'card',
                            animation: false
                        },
                        items: [
                            {
                                xtype: 'container',
                                html: 'dashboard',
                                itemId: 'card-dashboard'
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-retailers',
                                layout: 'vbox',
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'retailersmaincontentpanel',
                                        hidden: false,
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-billing',
                                layout: 'vbox',
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'billingmaincontentpanel',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-vendors',
                                layout: 'vbox',
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'vendorsMaincontentpanel',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-inhouse',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'inhousemaincontentpanel',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-datalink',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'productsdatalinkmain',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                html: 'ecatalog',
                                itemId: 'card-ecatalog'
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-smartcart',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'productsecommain',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-rmplc',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'productsrm_promain',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                html: 'iRugz',
                                itemId: 'card-irugz'
                            },
                            {
                                xtype: 'container',
                                html: 'pricing',
                                itemId: 'card-pricing',
                                items: [
                                    {
                                        xtype: 'pricingmaincontentpanel'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-discounts',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'discountsmaincontentpanel',
                                        flex: 1
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                html: 'notifications',
                                itemId: 'card-notifications'
                            },
                            {
                                xtype: 'container',
                                html: 'notepad',
                                itemId: 'card-notepad'
                            },
                            {
                                xtype: 'container',
                                html: 'retailer details',
                                itemId: 'card-retailer-details',
                                items: [
                                    {
                                        xtype: 'retailerDetails'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-inhouse-details',
                                items: [
                                    {
                                        xtype: 'inhousedetailspage'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-billing-detail'
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-browse-latest-log',
                                items: [
                                    {
                                        xtype: 'browseLatestLogMainContainer'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                itemId: 'card-view-reports',
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'billingreportscreen1'
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
                fn: 'onMainInitialize',
                event: 'initialize'
            },
            {
                fn: 'onMainPainted',
                event: 'painted'
            }
        ]
    },

    onMainInitialize: function(component, eOpts) {
        RMdatalink.app.redirectTo('main');
         //RMdatalink.app.getController('Main').initialiseApp() ;
    },

    onMainPainted: function(element, eOpts) {
        //Ext.Viewport.setMasked(false);

        console.log("***********USer Restrictions********") ;
        RMdatalink.app.getController('LoginHandler').onPermissionsLoaded() ;

        RMdatalink.app.getController('Main').initialiseApp() ;
    }

});