/*
 * File: app/view/retailer/ManagePayment.js
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

Ext.define('RMdatalink.view.retailer.ManagePayment', {
    extend: 'Ext.Panel',
    alias: 'widget.retailermanagepayment',

    requires: [
        'Ext.tab.Panel',
        'Ext.tab.Bar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.Label'
    ],

    config: {
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'panel',
                flex: 15,
                hidden: false,
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 1,
                        cls: [
                            'x-rm-tabpanel',
                            'x-rm-tabpanelBilling'
                        ],
                        ui: 'light',
                        tabBar: {
                            docked: 'top',
                            itemId: 'mytabbar'
                        },
                        items: [
                            {
                                xtype: 'formpanel',
                                actionInit: 'containerInit',
                                title: '<div style="line-height: 25px;">Manage Payment</div>',
                                cls: 'x-rm-rdformpanel',
                                itemId: 'managePaymentTab',
                                layout: 'vbox',
                                scrollable: false,
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        cls: 'borderedDiv',
                                        margin: '10 10 10 10',
                                        padding: '2 0 2 0',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'fieldset',
                                                padding: '5 5 5 5',
                                                title: '<div style= "font-size:12px;">Billing Address</div>',
                                                items: [
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'rtUserMngPaymntFullNameFld',
                                                        width: '350px',
                                                        label: 'Full Name',
                                                        labelWidth: '150px'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'rtUserMngPaymntAddrLn1Fld',
                                                        width: '350px',
                                                        label: 'Address Line 1',
                                                        labelWidth: '150px'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'rtUserMngPaymntAddrLn2Fld',
                                                        width: '350px',
                                                        label: 'Address Line 2',
                                                        labelWidth: '150px'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'rtUserMngPaymntCityFld',
                                                        width: '350px',
                                                        label: 'City',
                                                        labelWidth: '150px'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'rtUserMngPaymntStateFld',
                                                        width: '350px',
                                                        label: 'State',
                                                        labelWidth: '150px'
                                                    },
                                                    {
                                                        xtype: 'textfield',
                                                        itemId: 'rtUserMngPaymntZipFld',
                                                        width: '350px',
                                                        label: 'Zip',
                                                        labelWidth: '150px'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        cls: 'x-rm-blueBtn',
                                                        margin: '0 0 0 150px',
                                                        width: '150px',
                                                        text: 'Process Credit Card		'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'fieldset',
                                                margin: '10 0 0 20',
                                                padding: '2 0 2 0',
                                                layout: 'vbox',
                                                items: [
                                                    {
                                                        xtype: 'label',
                                                        itemId: 'rtMngPaymentAddrFullNameLbl',
                                                        style: 'font-size: 0.8em;'
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        itemId: 'rtMngPaymentAddrLbl',
                                                        style: 'font-size: 0.8em;'
                                                    },
                                                    {
                                                        xtype: 'fieldset',
                                                        layout: 'hbox',
                                                        items: [
                                                            {
                                                                xtype: 'label',
                                                                itemId: 'rtMngPaymentAddrCityLbl',
                                                                style: 'font-size: 0.8em;'
                                                            },
                                                            {
                                                                xtype: 'label',
                                                                html: ' ,',
                                                                style: 'font-size: 0.8em;'
                                                            },
                                                            {
                                                                xtype: 'label',
                                                                itemId: 'rtMngPaymentAddrStateLbl',
                                                                style: 'font-size: 0.8em;'
                                                            },
                                                            {
                                                                xtype: 'label',
                                                                html: ' ,',
                                                                style: 'font-size: 0.8em;'
                                                            },
                                                            {
                                                                xtype: 'label',
                                                                itemId: 'rtMngPaymentAddrZipLbl',
                                                                style: 'font-size: 0.8em;'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        handler: function(button, e) {

                                                            Ext.ComponentQuery.query('#rtUserMngPaymntFullNameFld')[0].setValue( Ext.ComponentQuery.query('#rtMngPaymentAddrFullNameLbl')[0].getHtml() ) ;

                                                            Ext.ComponentQuery.query('#rtUserMngPaymntAddrLn1Fld')[0].setValue( Ext.ComponentQuery.query('#rtMngPaymentAddrLbl')[0].getHtml() ) ;

                                                            Ext.ComponentQuery.query('#rtUserMngPaymntCityFld')[0].setValue( Ext.ComponentQuery.query('#rtMngPaymentAddrCityLbl')[0].getHtml() ) ;

                                                            Ext.ComponentQuery.query('#rtUserMngPaymntStateFld')[0].setValue( Ext.ComponentQuery.query('#rtMngPaymentAddrStateLbl')[0].getHtml() ) ;

                                                            Ext.ComponentQuery.query('#rtUserMngPaymntZipFld')[0].setValue( Ext.ComponentQuery.query('#rtMngPaymentAddrZipLbl')[0].getHtml() ) ;

                                                        },
                                                        cls: 'x-rm-blueBtn',
                                                        itemId: 'rtUserMngPaymntUseThisAddrBtn',
                                                        margin: '10 0 0 0',
                                                        width: '150px',
                                                        text: 'Use this Address		'
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

});