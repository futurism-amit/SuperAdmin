/*
 * File: app/view/browseLatestLogMainContainer.js
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

Ext.define('RMdatalink.view.browseLatestLogMainContainer', {
    extend: 'Ext.Container',
    alias: 'widget.browseLatestLogMainContainer',

    requires: [
        'RMdatalink.view.CardHeaderPanel',
        'RMdatalink.view.common.searchView',
        'RMdatalink.view.listWithHeader',
        'RMdatalink.view.ResizableNote',
        'Ext.tab.Panel',
        'Ext.tab.Bar',
        'Ext.form.FieldSet',
        'Ext.field.Search',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.Select',
        'Ext.field.TextArea',
        'Ext.Label'
    ],

    config: {
        height: '100%',
        hidden: false,
        itemId: 'browseLatestLogMainContainer',
        width: '100%',
        layout: 'vbox',
        items: [
            {
                xtype: 'CardHeaderPanel',
                itemId: 'latestLogCardHeader',
                flex: 1
            },
            {
                xtype: 'container',
                flex: 15,
                hidden: false,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 2,
                        cls: 'x-rm-tabpanel',
                        hidden: false,
                        itemId: 'browseLatestLogMainTabPanel',
                        margin: '0 10 0 0',
                        ui: 'light',
                        tabBar: {
                            docked: 'top'
                        },
                        items: [
                            {
                                xtype: 'container',
                                action: 'setScrollBarVisible',
                                title: 'TECH SUPPORT LOG',
                                itemId: 'browseLatestLogTab',
                                scrollable: true,
                                layout: {
                                    type: 'vbox',
                                    pack: 'center'
                                },
                                listeners: [
                                    {
                                        fn: function(element, eOpts) {
                                            window.location.hash = 'browseLatestLogCard'+0;


                                            var TechSupportLogsStore = Ext.getStore('TechSupportLogsStore');

                                            TechSupportLogsStore.clearFilter();
                                        },
                                        event: 'painted'
                                    },
                                    {
                                        fn: function(component, eOpts) {
                                            var headers = component.down("#headerList");
                                            headers.setData([{}]);
                                            headers.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main">',
                                            '    <div style="width: 4%;">',
                                            '        <div style="width: 25px;" data-name="all"></div>',
                                            '    </div>',
                                            '    <div style="width: 12%;" data-name="crm_user">',
                                            '        CRM User&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 18%;" data-name="time_start">',
                                            '        Date/Time&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 12%;" data-name="total_time">',
                                            '        Length&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 15%;" data-name="company">',
                                            '        company&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 12%;" data-name="product_name">',
                                            '        Product&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 15%;" data-name="problem">',
                                            '        Description&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 10%;" data-name="status">',
                                            '        Status&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '</div>'
                                            )
                                            );
                                            headers.refresh();
                                            var list = component.down('#mainList');
                                            list.setStore('TechSupportLogsStore');
                                            list.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main">',
                                            '    <div class="pointerCursor" style="width: 4%;overflow:visible;">',
                                            '        <div style="width: 25px; height:25px; background-image:url({company_logo})"></div>',
                                            '    </div>',
                                            '    <div class="pointerCursor" style="width: 12%;" >{crm_user}</div>',
                                            '    <div class="pointerCursor" style="width: 18%;"  >{time_start}</div>',
                                            '    <div class="pointerCursor" style="width: 12%;" >{total_time.hours}:{total_time.minutes}:{total_time.seconds}</div>',
                                            '    <div class="pointerCursor" style="width: 15%;" >{company}</div>',
                                            '    <div class="pointerCursor" style="width: 12%;" >{product_name}</div>',
                                            '    <div class="pointerCursor" style="width: 15%;" >{problem}</div>',
                                            '    <div class="pointerCursor" style="width: 10%;" >{status}</div>',
                                            '</div>'
                                            )
                                            );//
                                            list.onStoreClear();

                                            list.on("select",function(){

                                                RMdatalink.app.getController('TechSupportLog').latestLogListSelect(arguments);


                                            });
                                        },
                                        event: 'initialize'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        cls: [
                                            'x-rm-rdformpanel',
                                            'noBorderFldSet'
                                        ],
                                        height: '32px',
                                        itemId: 'techSupportLogSearchFldSet',
                                        margin: '5 0 5 0',
                                        style: 'border: none;',
                                        width: '98%',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'searchfield',
                                                action: 'searchTechSupportLog',
                                                flex: 1,
                                                cls: 'x-field-techLogsearch',
                                                itemId: 'brwsTechSupportLogSearchFld',
                                                style: 'border: none;'
                                            },
                                            {
                                                xtype: 'button',
                                                cls: 'x-rm-blueBtn',
                                                height: '25px',
                                                itemId: 'brwsTechSupportSerchBtn',
                                                width: '90px',
                                                text: 'Search'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'searchView',
                                        hidden: true,
                                        margin: '5 0 5 0'
                                    },
                                    {
                                        xtype: 'listwithheader',
                                        itemId: 'browseLatestLogList',
                                        minHeight: '150px',
                                        flex: 1
                                    },
                                    {
                                        xtype: 'formpanel',
                                        cls: 'x-rm-rdformpanel',
                                        height: '35px',
                                        margin: '0 30% 0 0',
                                        scrollable: false,
                                        layout: {
                                            type: 'hbox',
                                            pack: 'end'
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                docked: 'right',
                                                height: '25px',
                                                itemId: 'techSupportLatestLogsSaveBtn',
                                                margin: '0 0 0 10',
                                                style: 'background-image: url(resources/images/retailerDetail/save_button.png);background-repeat: no-repeat;background-position: center;',
                                                ui: 'plain',
                                                width: '29px',
                                                iconAlign: 'center'
                                            },
                                            {
                                                xtype: 'selectfield',
                                                disabled: true,
                                                height: '25px',
                                                itemId: 'borwseLatestLogStatusSelectFld',
                                                width: '320px',
                                                label: 'Status',
                                                placeHolder: 'Select Status',
                                                autoSelect: false,
                                                options: [
                                                    {
                                                        text: 'Pending',
                                                        value: '1'
                                                    },
                                                    {
                                                        text: 'In Progress',
                                                        value: '2'
                                                    },
                                                    {
                                                        text: 'Completed',
                                                        value: '3'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        cls: 'x-rm-rdnotes-sticky',
                                        height: '120px',
                                        hidden: true,
                                        itemId: 'latestLogsProblemPanel',
                                        margin: '20 0 0 0',
                                        width: '70%',
                                        layout: {
                                            type: 'vbox',
                                            align: 'center'
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                height: '25px',
                                                html: '<div style="margin:4px 0 0 5px;color: whitesmoke;">Problem</div>',
                                                style: 'background-color:#3D3E3D;font-size:90%;',
                                                width: '100%'
                                            },
                                            {
                                                xtype: 'formpanel',
                                                cls: 'x-rm-rdformpanel',
                                                height: '60px',
                                                margin: '15 0 0 0',
                                                width: '100%',
                                                scrollable: false,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'textareafield',
                                                        flex: 1,
                                                        disabled: true,
                                                        height: 60,
                                                        itemId: 'latestLogsProblem',
                                                        clearIcon: false
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                width: '95%',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        selected: false,
                                                        cls: 'x-rm-rdnotesadminbtn-unselected',
                                                        hidden: true,
                                                        itemId: 'RDNotepadAdminBtn',
                                                        ui: 'plain',
                                                        pressedCls: 'x-rm-rdnotesadminbtn-pressing',
                                                        text: '<div  style=" line-height: 8px; background-size: 8px 8px;background-image: url(\'resources/images/retailerDetail/dot2.png\');background-repeat: no-repeat;">&nbsp &nbsp <span>Admin Only</span> </div>'
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        cls: 'x-rm-rdnotesnamelabel',
                                                        docked: 'right',
                                                        itemId: 'RDNotesNameLabel'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        cls: 'x-rm-rdnotes-sticky',
                                        height: '120px',
                                        hidden: true,
                                        itemId: 'latestLogsSolutionPanel',
                                        margin: '20 0 0 0',
                                        width: '70%',
                                        layout: {
                                            type: 'vbox',
                                            align: 'center'
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                height: '25px',
                                                html: '<div style="margin:4px 0 0 5px;color: whitesmoke;">Solution</div>',
                                                style: 'background-color:#3D3E3D;font-size:90%;',
                                                width: '100%'
                                            },
                                            {
                                                xtype: 'formpanel',
                                                cls: 'x-rm-rdformpanel',
                                                height: '60px',
                                                margin: '15 0 0 0',
                                                width: '100%',
                                                scrollable: false,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'textareafield',
                                                        flex: 1,
                                                        disabled: true,
                                                        height: 60,
                                                        itemId: 'latestLogsSolution',
                                                        clearIcon: false
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'container',
                                                width: '95%',
                                                layout: 'hbox',
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        selected: false,
                                                        cls: 'x-rm-rdnotesadminbtn-unselected',
                                                        hidden: true,
                                                        itemId: 'RDNotepadAdminBtn',
                                                        ui: 'plain',
                                                        pressedCls: 'x-rm-rdnotesadminbtn-pressing',
                                                        text: '<div  style=" line-height: 8px; background-size: 8px 8px;background-image: url(\'resources/images/retailerDetail/dot2.png\');background-repeat: no-repeat;">&nbsp &nbsp <span>Admin Only</span> </div>'
                                                    },
                                                    {
                                                        xtype: 'label',
                                                        cls: 'x-rm-rdnotesnamelabel',
                                                        docked: 'right',
                                                        itemId: 'RDNotesNameLabel'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'container',
                                        height: '25px',
                                        html: '<div style="margin:4px 0 0 5px;color: whitesmoke;">Problem</div>',
                                        margin: '0 5 0 5',
                                        style: 'background-color:#3D3E3D;font-size:90%;',
                                        width: '95%'
                                    },
                                    {
                                        xtype: 'resizablenote',
                                        itemId: 'browseLatLogResizableProbFld',
                                        margin: '5 5 5 5',
                                        width: '95%'
                                    },
                                    {
                                        xtype: 'container',
                                        height: '25px',
                                        html: '<div style="margin:4px 0 0 5px;color: whitesmoke;">Solution</div>',
                                        margin: '0 5 0 5',
                                        style: 'background-color:#3D3E3D;font-size:90%;',
                                        width: '95%'
                                    },
                                    {
                                        xtype: 'resizablenote',
                                        itemId: 'browseLatLogResizableSolFld',
                                        margin: '5 5 5 5',
                                        width: '95%'
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
                fn: 'onRDNotepadAdminBtnTap1111',
                event: 'tap',
                delegate: '#RDNotepadAdminBtn'
            },
            {
                fn: 'onRDNotepadAdminBtnTap111',
                event: 'tap',
                delegate: '#RDNotepadAdminBtn'
            },
            {
                fn: 'onContainerInitialize',
                event: 'initialize'
            }
        ]
    },

    onRDNotepadAdminBtnTap1111: function(button, e, eOpts) {
        if(button.selected) {
            button.selected = false;
            button.setCls('');
            button.addCls('x-rm-rdnotesadminbtn-unselected'); // \'store_name\'
            button.setText('<div  style=" line-height: 8px;background-size: 8px 8px; background-image: url(\'resources/images/retailerDetail/dot2.png\');background-repeat: no-repeat;/">&nbsp &nbsp <span> Admin Only </span></div>');
        }
        else {
            button.selected = true;
            button.setCls('');
            button.addCls('x-rm-rdnotesadminbtn-selected');
            button.setText('<div  style=" line-height: 8px; background-size: 8px 8px;background-image: url(\'resources/images/retailerDetail/dot1.png\');background-repeat: no-repeat;">&nbsp &nbsp <span>Admin Only</span> </div>');
        }

        var notePadMain = button.up('#RDNotesTab');
        var notesList = notePadMain.down("#mainList");
        var selectedNote = notesList.getSelection();

        if(!Ext.isEmpty(selectedNote)) {
            selectedNote[0].set('adminonly',button.selected);
        }
    },

    onRDNotepadAdminBtnTap111: function(button, e, eOpts) {
        if(button.selected) {
            button.selected = false;
            button.setCls('');
            button.addCls('x-rm-rdnotesadminbtn-unselected'); // \'store_name\'
            button.setText('<div  style=" line-height: 8px;background-size: 8px 8px; background-image: url(\'resources/images/retailerDetail/dot2.png\');background-repeat: no-repeat;/">&nbsp &nbsp <span> Admin Only </span></div>');
        }
        else {
            button.selected = true;
            button.setCls('');
            button.addCls('x-rm-rdnotesadminbtn-selected');
            button.setText('<div  style=" line-height: 8px; background-size: 8px 8px;background-image: url(\'resources/images/retailerDetail/dot1.png\');background-repeat: no-repeat;">&nbsp &nbsp <span>Admin Only</span> </div>');
        }

        var notePadMain = button.up('#RDNotesTab');
        var notesList = notePadMain.down("#mainList");
        var selectedNote = notesList.getSelection();

        if(!Ext.isEmpty(selectedNote)) {
            selectedNote[0].set('adminonly',button.selected);
        }
    },

    onContainerInitialize: function(component, eOpts) {
        // component.down('#detailsCancelBtn').setHidden(true);
        // component.down('#detailsSaveBtn').setHidden(true);


        component.down('#cardTitleLabel').element.on("tap",function(){

          RMdatalink.app.getController('UINav').onBackTextTap();
        });


        component.down('#cardDeleteBtn').element.on("tap",function(){

          // RMdatalink.app.getController('Main').onDeleteButtonTap(component);

             RMdatalink.app.getController('DeleteRecords').deleteTechSupportLogs();
        });

    }

});