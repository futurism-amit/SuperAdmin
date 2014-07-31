/*
 * File: app/view/detailsHeader.js
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

Ext.define('RMdatalink.view.detailsHeader', {
    extend: 'Ext.Container',
    alias: 'widget.detailsHeader',

    requires: [
        'Ext.Label',
        'Ext.Button'
    ],

    config: {
        cls: 'x-rm-detailsHeader',
        height: '100%',
        width: '100%',
        scrollable: false,
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'end'
        },
        items: [
            {
                xtype: 'label',
                cls: [
                    'x-rm-detailsHeaderTitle',
                    'pointerCursor'
                ],
                html: 'BACK/',
                itemId: 'detailsHeaderTitle',
                style: 'font-size: large;',
                width: '75%',
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            component.element.on("tap",function(){

                                RMdatalink.app.getController('UINav').onBackTextTap();
                            });
                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'button',
                index: 1,
                cls: [
                    'x-rm-detailsCancelBtn',
                    'x-rm-detailsInnerBtns'
                ],
                itemId: 'detailsCancelBtn',
                margin: '0 1% 0 2%',
                minWidth: '70px',
                ui: 'plain',
                width: '8%',
                pressedCls: 'x-rm-detailsInnerBtns-pressing',
                text: 'CANCEL'
            },
            {
                xtype: 'button',
                cls: [
                    'x-rm-detailsSaveBtn',
                    'x-rm-detailsInnerBtns'
                ],
                itemId: 'detailsSaveBtn',
                margin: '0 2% 0 1%',
                minWidth: '70px',
                ui: 'plain',
                width: '8%',
                pressedCls: 'x-rm-detailsInnerBtns-pressing',
                text: 'SAVE'
            }
        ],
        listeners: [
            {
                fn: 'onDetailsCancelBtnTap',
                event: 'tap',
                delegate: '#detailsCancelBtn'
            }
        ]
    },

    onDetailsCancelBtnTap: function(button, e, eOpts) {
        //TRANSFER THIS CODE TO A CONTROLLER
        //REMOVE LINKING IN OREDER TO DETECT THE INSTANCE
        //OR CREATE FILTER FOR DIFFERENTIATING INSTANCE WITHOUT THE USING ITEMID OR INDEX
        //REASON FOR ITEMID :WILL BE SAME FOR ALL LINKED ELEMENT
        //INDEX WILL BE HARDCODING

        //FILTERING IS NOT APPLIED HERE AT THIS MOMENT.


           RMdatalink.app.getController('UINav').onBackTextTap() ;
    }

});