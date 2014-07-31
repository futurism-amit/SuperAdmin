/*
 * File: app/view/listWithHeaderForRtProductBullig.js
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

Ext.define('RMdatalink.view.listWithHeaderForRtProductBullig', {
    extend: 'Ext.Container',
    alias: 'widget.listwithheaderforrtproductbullig',

    requires: [
        'Ext.XTemplate',
        'Ext.Panel',
        'Ext.Label',
        'Ext.dataview.List'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'dataview',
                actionSorting: 'sortingStore',
                cls: 'x-rm-list-header',
                height: '25px',
                itemId: 'headerList',
                scrollable: false
            },
            {
                xtype: 'panel',
                margin: '5px 0 5px 0',
                items: [
                    {
                        xtype: 'label',
                        docked: 'left',
                        itemId: 'productPackageNameLabel',
                        style: 'color: #555;'
                    },
                    {
                        xtype: 'label',
                        docked: 'right',
                        itemId: 'productPackageBundlePriceLbl',
                        style: 'color: #555;'
                    }
                ]
            },
            {
                xtype: 'list',
                action: 'setScrollBarVisible',
                flex: 1,
                cls: 'x-rm-list',
                itemId: 'mainList',
                allowDeselect: true
            }
        ]
    }

});