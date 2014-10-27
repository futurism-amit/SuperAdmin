/*
 * File: app/view/filterDropDown.js
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

Ext.define('RMdatalink.view.filterDropDown', {
    extend: 'Ext.Sheet',
    alias: 'widget.filterDropDown',

    requires: [
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Button'
    ],

    config: {
        cls: 'x-rm-filterdd',
        hideAnimation: false,
        id: 'filterDropDown',
        showAnimation: false,
        width: 250,
        hideOnMaskTap: true,
        scrollable: false,
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                xtype: 'dataview',
                flex: 9,
                data: [
                    {
                        a: 2
                    }
                ],
                docked: 'top',
                itemId: 'filterDDList',
                scrollable: false,
                items: [
                    {
                        xtype: 'button',
                        cls: [
                            'x-rm-blueBtn',
                            'x-rm-filter-applybtn'
                        ],
                        docked: 'bottom',
                        itemId: 'filterApplyBtn',
                        style: 'margin-left: 83px;',
                        ui: 'plain',
                        width: 60,
                        pressedCls: 'x-rm-blueBtn-pressing',
                        text: 'APPLY'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onFilterApplyBtnTap',
                event: 'tap',
                delegate: '#filterApplyBtn'
            }
        ]
    },

    onFilterApplyBtnTap: function(button, e, eOpts) {
        var filterList = Ext.ComponentQuery.query("#filterDDList")[0];
        var filterListItems = filterList.getInnerItems();

        var checkBox = filterListItems[0].element.dom.querySelectorAll('input[type="checkbox"]');
        var textFields = filterListItems[0].element.dom.querySelectorAll('input[type="text"]');

        var filterData = {};
        var checkedItems = [];
        var monthlyRange = [];
        var owedRange = [];

        for(var i=0 ; i < checkBox.length ; i++) {
            if(checkBox[i].hasAttribute('data-name'))
                checkedItems.push(
                    {
                        filterKey:checkBox[i].getAttribute('data-name'),
                        filterValue:checkBox[i].checked
                    }
                );
        }

        filterData.productSubscriptions = checkedItems;

        for(var i=0 ; i < textFields.length ; i++) {
            if(textFields[i].hasAttribute('data-name'))
                switch(textFields[i].getAttribute('data-name')){
                    case 'monthly_range':
                        if(textFields[i].hasAttribute('data-subname')) {
                            monthlyRange.push(
                                {
                                    filterKey:textFields[i].getAttribute('data-subname'),
                                    filterValue:parseInt(textFields[i].value)?parseInt(textFields[i].value):0
                                }
                            );
                        }
                        break;
                    case 'owed_range':
                        if(textFields[i].hasAttribute('data-subname')) {
                            owedRange.push(
                                {
                                    filterKey:textFields[i].getAttribute('data-subname'),
                                    filterValue:parseInt(textFields[i].value)?parseInt(textFields[i].value):0
                                }
                            );
                        }
                        break;
                    case 'modified_in_past':
                        filterData.modifiedInPastDays = textFields[i].value;
                        break;

                    case 'created_in_past':
                        filterData.createdInPastDays = textFields[i].value;
                        break;
                    case 'past_due_for':
                        filterData.pastDueFor = textFields[i].value;
                        break;
                         case 'due_in':
                        filterData.due_in = textFields[i].value;
                        break;


                }
        }

        filterData.monthlyRange = monthlyRange;
        filterData.owedRange = owedRange;

        this.fireEvent("filterwithdata",this,filterData);
        this.destroy();
    }

});