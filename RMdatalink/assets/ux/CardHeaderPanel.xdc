{
    "xdsVersion": "3.0.0",
    "frameworkVersion": "touch23",
    "internals": {
        "type": "Ext.Panel",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "cls": [
                "x-rm-cardheaderpanel"
            ],
            "designer|userAlias": "CardHeaderPanel",
            "designer|userClassName": "CardHeaderPanel",
            "height": null,
            "layout": "hbox",
            "requires": [
                "Ext.MessageBox"
            ],
            "scrollable": false
        },
        "cn": [
            {
                "type": "Ext.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "container|align": "center",
                    "designer|displayName": "cardTitleNNavContainer",
                    "layout": "hbox",
                    "layout|flex": 3,
                    "scrollable": false
                },
                "cn": [
                    {
                        "type": "Ext.Label",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "cls": [
                                "x-rm-cardtitlelabel"
                            ],
                            "designer|displayName": "cardTitleLabel",
                            "html": null,
                            "itemId": "cardTitleLabel"
                        }
                    }
                ]
            },
            {
                "type": "Ext.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "container|align": "center",
                    "designer|displayName": "cardActionBtnContainer",
                    "layout": "hbox",
                    "layout|flex": 1,
                    "scrollable": false
                },
                "cn": [
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "cls": [
                                "x-rm-card-actionbtn"
                            ],
                            "designer|displayName": "cardActionBtn",
                            "designer|uiInterfaceName": "plain",
                            "docked": null,
                            "id": null,
                            "itemId": "cardActionBtn",
                            "layout|flex": 3,
                            "text": "ACTIONS",
                            "ui": "plain"
                        },
                        "cn": [
                            {
                                "type": "basiceventbinding",
                                "reference": {
                                    "name": "listeners",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "fn": "onCardActionBtnTap",
                                    "implHandler": [
                                        "console.log(\"card header action tapped\");\r",
                                        "this.fireEvent('actiontapped', this);"
                                    ],
                                    "name": "tap"
                                }
                            }
                        ]
                    },
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "cls": [
                                "x-rm-card-smallBtn"
                            ],
                            "designer|displayName": "cardExportBtn",
                            "docked": null,
                            "icon": "resources/images/CardHeaderPanel/export.png",
                            "iconAlign": "center",
                            "itemId": "cardExportBtn",
                            "layout|flex": 1,
                            "text": null
                        },
                        "cn": [
                            {
                                "type": "basiceventbinding",
                                "reference": {
                                    "name": "listeners",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "fn": "onCardExportBtnTap",
                                    "implHandler": [
                                        "Ext.Msg.alert('Alert', 'Development in Progress.', Ext.emptyFn);"
                                    ],
                                    "name": "tap"
                                }
                            }
                        ]
                    },
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "cls": [
                                "x-rm-card-smallBtn"
                            ],
                            "designer|displayName": "cardImportBtn",
                            "docked": null,
                            "hidden": null,
                            "icon": "resources/images/CardHeaderPanel/folders.png",
                            "itemId": "cardImportBtn",
                            "layout|flex": 1,
                            "text": null
                        },
                        "cn": [
                            {
                                "type": "basiceventbinding",
                                "reference": {
                                    "name": "listeners",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "fn": "onCardImportBtnTap",
                                    "implHandler": [
                                        "Ext.Msg.alert('Alert', 'Development in Progress.', Ext.emptyFn);"
                                    ],
                                    "name": "tap"
                                }
                            }
                        ]
                    },
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "cls": [
                                "x-rm-card-addRetailerBtn",
                                "x-rm-blueBtn"
                            ],
                            "designer|displayName": "cardAddRetailerBtn",
                            "docked": null,
                            "icon": "resources/images/CardHeaderPanel/addUser.png",
                            "iconAlign": "center",
                            "itemId": "cardAddRetailerBtn",
                            "layout|flex": 1,
                            "pressedCls": "x-rm-blueBtn-pressing",
                            "text": null
                        },
                        "cn": [
                            {
                                "type": "basiceventbinding",
                                "reference": {
                                    "name": "listeners",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "fn": "onCardAddRetailerBtnTap",
                                    "implHandler": [
                                        "Ext.Msg.alert('Alert', 'Development in Progress.', Ext.emptyFn);"
                                    ],
                                    "name": "tap"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}