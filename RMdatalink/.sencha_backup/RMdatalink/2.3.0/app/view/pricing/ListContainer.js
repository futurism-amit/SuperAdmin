/*
 * File: app/view/pricing/ListContainer.js
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

Ext.define('RMdatalink.view.pricing.ListContainer', {
    extend: 'Ext.Panel',
    alias: 'widget.pricinglistcontainer',

    requires: [
        'Ext.Panel',
        'Ext.Label',
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
                height: '0px',
                hidden: true,
                style: 'margin-top:5px;',
                layout: 'fit',
                scrollable: false,
                items: [
                    {
                        xtype: 'label',
                        cls: 'vendorLabelCSS',
                        html: 'Vendor Pricing',
                        itemId: 'pricingListHeaderLabel'
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
                        cls: 'borderedDiv',
                        padding: '0 2 0 0',
                        layout: 'vbox',
                        scrollable: false,
                        items: [
                            {
                                xtype: 'dataview',
                                actionSorting: 'sortingStore',
                                cls: 'x-rm-list-header',
                                height: '24px',
                                itemId: 'pricingListHeader',
                                margin: '0 0 0 0',
                                width: '100%',
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
                                itemId: 'pricingList',
                                allowDeselect: true,
                                mode: 'MULTI',
                                itemTpl: [
                                    '<div>List Item {string}</div>'
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'borderedDiv',
                height: '30px',
                margin: '2 0 2 0',
                layout: 'fit',
                items: [
                    {
                        xtype: 'dataview',
                        cls: 'x-rm-list-totals',
                        itemId: 'pricingTotalsList',
                        width: '100%',
                        scrollable: false
                    }
                ]
            }
        ]
    }

});