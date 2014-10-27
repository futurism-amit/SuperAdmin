/*
 * File: app/view/listHeaderForRMpro.js
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

Ext.define('RMdatalink.view.listHeaderForRMpro', {
    extend: 'Ext.Container',
    alias: 'widget.listheaderforrmpro',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'vbox',
        items: [
            {
                xtype: 'list',
                actionSorting: 'sortingStore',
                cls: 'x-rm-list-header',
                height: '22px',
                itemId: 'headerList',
                itemHeight: 22
            },
            {
                xtype: 'list',
                action: 'setScrollBarVisible',
                flex: 1,
                cls: 'x-rm-list',
                itemId: 'mainList',
                allowDeselect: true,
                itemHeight: 28
            }
        ]
    }

});