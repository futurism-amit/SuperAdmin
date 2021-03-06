/*
 * File: app/view/PermissionsSelector.js
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

Ext.define('RMdatalink.view.PermissionsSelector', {
    extend: 'Ext.Container',

    requires: [
        'Ext.Label',
        'Ext.form.Panel',
        'Ext.field.Select',
        'Ext.Button'
    ],

    config: {
        itemId: 'PermissionsSelectorPage',
        style: 'background-color:white;',
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items: [
            {
                xtype: 'label',
                cls: 'permissionsTitle',
                html: 'PERMISSIONS',
                margin: '10px 0 10px 0'
            },
            {
                xtype: 'formpanel',
                flex: 0.8,
                cls: 'x-rm-rdformpanel',
                itemId: 'editAdduserRoleFormPanel',
                width: '100%',
                scrollable: false,
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'selectfield',
                        itemId: 'selectUserRoleSelectFld',
                        width: '320px',
                        label: 'Select User Role',
                        labelWidth: '120px',
                        autoSelect: false,
                        displayField: 'user_role',
                        store: 'PermisstionsStore',
                        valueField: 'user_role'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'addEditUserRoleTextFld',
                        margin: '0 0 0 10',
                        width: '320px',
                        label: 'New User Role',
                        labelWidth: '120px'
                    },
                    {
                        xtype: 'button',
                        cls: 'x-rm-blueBtn',
                        itemId: 'addUpdateUserRoleButton',
                        margin: '-10 0 0 20',
                        text: 'Add New Role'
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 8,
                itemId: 'mycontainer160',
                width: '100%',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'formpanel',
                        action: 'setScrollBarVisible',
                        flex: 1,
                        cls: 'x-rm-rdformpanel',
                        itemId: 'permissionsForm1',
                        margin: '0 5 0 5',
                        scrollable: 'vertical',
                        layout: {
                            type: 'vbox',
                            align: 'center'
                        }
                    },
                    {
                        xtype: 'formpanel',
                        action: 'setScrollBarVisible',
                        flex: 1,
                        cls: 'x-rm-rdformpanel',
                        itemId: 'permissionsForm2',
                        margin: '0 10 0 5',
                        scrollable: 'vertical',
                        layout: {
                            type: 'vbox',
                            align: 'center'
                        }
                    }
                ],
                listeners: [
                    {
                        fn: function(component, eOpts) {
                            var permissions =  [
                            {

                                "name":"Dashboard",
                                "type":"Dashboard",
                                "options":  [
                                {
                                    "text":"None",
                                    "value":"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                }

                                ]
                            },
                            {

                                name:"Retailers",
                                type:"Retailers",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },


                            {

                                name:"Billing",
                                type:"Billing",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },



                            {

                                name:"Vendors",
                                type:"Vendors",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },

                            {

                                name:"In house",
                                type:"Inhouse",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                "name":"Notification",
                                "type":"Notification",
                                "options":  [
                                {
                                    "text":"None",
                                    "value":"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                }

                                ]
                            },

                            {

                                "name":"Notepad",
                                "type":"Notepad",
                                "options":  [
                                {
                                    "text":"None",
                                    "value":"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                }

                                ]
                            },
                            {

                                "name":"Products",
                                "type":"Products",
                                "options":  [
                                {
                                    "text":"None",
                                    "value":"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                }

                                ]
                            },


                            {

                                name:"Products-Datalink",
                                type:"Products_Datalink",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Products-Ecatalog",
                                type:"Products_Ecatalog",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Products-E-Commerce",
                                type:"Products_SMART_CART",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Products-RM PRO",
                                type:"Products_RM_PLC",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Products-IRUGZ",
                                type:"Products_IRUGZ",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },


                            {

                                "name":"Pricing",
                                "type":"Pricing",
                                "options":  [
                                {
                                    "text":"None",
                                    "value":"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                }

                                ]
                            },


                            {

                                name:"Pricing-Datalink",
                                type:"Pricing_Datalink",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Pricing-Ecatalog",
                                type:"Pricing_Ecatalog",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Pricing-E-Commerce",
                                type:"Pricing_SMART_CART",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Pricing-RM PRO",
                                type:"Pricing_RM_PLC",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Pricing-IRUGZ",
                                type:"Pricing_IRUGZ",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },



                            {

                                "name":"Discounts",
                                "type":"Discounts",
                                "options":  [
                                {
                                    "text":"None",
                                    "value":"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                }

                                ]
                            },


                            {

                                name:"Discounts-Datalink",
                                type:"Discounts_Datalink",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Discounts-Ecatalog",
                                type:"Discounts_Ecatalog",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Discounts-E-Commerce",
                                type:"Discounts_SMART_CART",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Discounts-RM PRO",
                                type:"Discounts_RM_PLC",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            },
                            {

                                name:"Discounts-IRUGZ",
                                type:"Discounts_IRUGZ",
                                options:  [
                                {
                                    text:"None",
                                    value:"none"
                                },
                                {
                                    text:"View",
                                    value:"view"
                                },
                                {
                                    text:"Create/Edit",
                                    value:"create_edit"
                                },
                                {
                                    text:"Full Control",
                                    value:"fullControl"
                                }


                                ]
                            }







                            ];

                            var form1 = component.down("#permissionsForm1");
                            var form2 = component.down("#permissionsForm2");
                            for(var i = 0 ; i< permissions.length; i++){


                                if(permissions[i].type == "Dashboard")
                                {
                                    var componant =    Ext.create('Ext.field.Select', {
                                        margin: '10px 0 10px 0',
                                        width: '90%',
                                        label: '<center>'+permissions[i].name+'</center>',
                                        labelWidth: '50%',
                                        options:permissions[i].options,
                                        placeHolder:'Choose One',
                                        autoSelect:false,
                                        itemId:"permistions"+permissions[i].type,
                                        action:'permissionSelectFld',
                                        hidden:true
                                        //value:null
                                    });




                                }else{

                                    var componant =    Ext.create('Ext.field.Select', {
                                        margin: '10px 0 10px 0',
                                        width: '90%',
                                        label: '<center>'+permissions[i].name+'</center>',
                                        labelWidth: '50%',
                                        options:permissions[i].options,
                                        placeHolder:'Choose One',
                                        autoSelect:false,
                                        itemId:"permistions"+permissions[i].type,
                                        action:'permissionSelectFld'
                                        //value:null
                                    });



                                }

                                if(i< (permissions.length/2)){
                                    form1.add(componant);

                                }else
                                {
                                    form2.add(componant);

                                }

                            }


                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                docked: 'bottom',
                margin: '5 0 5 0',
                width: '100%',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        cls: 'x-rm-detailsInnerBtns',
                        height: '30px',
                        itemId: 'permissionSelectorCancelBtn',
                        margin: '0 10px 0 10px',
                        width: '100px',
                        text: 'CANCEL'
                    },
                    {
                        xtype: 'button',
                        cls: 'x-rm-blueBtn',
                        height: '30px',
                        itemId: 'permissionSelectorSaveBtn',
                        margin: '0 10px 0 10px',
                        width: '100px',
                        text: 'UPDATE'
                    },
                    {
                        xtype: 'button',
                        cls: 'x-rm-detailsInnerBtns',
                        height: '30px',
                        itemId: 'permissionSelectorDeleteRoleBtn',
                        margin: '0 10px 0 10px',
                        width: '112px',
                        text: 'Delete User Role'
                    }
                ]
            }
        ]
    }

});