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
                "x-rm-navigation-panel"
            ],
            "container|align": "center",
            "designer|userAlias": "RMNavigationPanel",
            "designer|userClassName": "RMNavigationPanel",
            "height": "100%",
            "layout": "vbox",
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
                    "cls": [
                        "x-overviewnavpanel"
                    ],
                    "designer|displayName": "overviewNavPanel",
                    "height": null,
                    "layout": "vbox",
                    "layout|flex": null,
                    "minHeight": "30%",
                    "padding": "1%",
                    "scrollable": false,
                    "width": "100%"
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
                            "designer|displayName": "overViewHeadLabel",
                            "html": "Overview"
                        }
                    },
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "action": "changecard",
                            "cls": [
                                "x-button-selected"
                            ],
                            "designer|displayName": "overviewDashBoardBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/dashboard.png",
                            "index": 0,
                            "itemId": "overviewDashBoardBtn",
                            "text": "Dashboard",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "overviewRetailersBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Retailers.png",
                            "index": 1,
                            "itemId": "overviewRetailersBtn",
                            "text": "Retailers",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "overviewBillingBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Billing.png",
                            "index": 2,
                            "itemId": "overviewBillingBtn",
                            "text": "Billing",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "overviewVendorsBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Venders.png",
                            "index": 3,
                            "itemId": "overviewVendorsBtn",
                            "text": "Vendors",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "overviewInHouseBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/In_House.png",
                            "index": 4,
                            "itemId": "overviewInHouseBtn",
                            "text": "In House",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "cls": [
                        "x-rm-separator"
                    ],
                    "designer|displayName": "separator",
                    "width": "80%"
                }
            },
            {
                "type": "Ext.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "cls": [
                        "x-productsnavpanel"
                    ],
                    "designer|displayName": "productsNavPanel",
                    "height": null,
                    "layout": "vbox",
                    "layout|flex": null,
                    "minHeight": "30%",
                    "padding": "1%",
                    "scrollable": false,
                    "width": "100%"
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
                            "designer|displayName": "productsHeadLabel",
                            "html": "Products"
                        }
                    },
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "action": "changecard",
                            "designer|displayName": "productsDatalinkBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Datalink.png",
                            "index": 5,
                            "itemId": "productsDatalinkBtn",
                            "text": "Datalink",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "productsECatalogBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/ECatalog.png",
                            "index": 6,
                            "itemId": "productsECatalogBtn",
                            "text": "ECatalog",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "productsSmartCartBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/SMART_cart.png",
                            "index": 7,
                            "itemId": "productsSmartCartBtn",
                            "text": "SMART Cart",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "productsRMPLCBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/RM_PLC.png",
                            "index": 8,
                            "itemId": "productsRMPLCBtn",
                            "text": "RM PLC",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "productsIRugzBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/RM_PLC.png",
                            "index": 9,
                            "itemId": "productsIRugzBtn",
                            "text": "iRugz",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "cls": [
                        "x-rm-separator"
                    ],
                    "designer|displayName": "separator",
                    "width": "80%"
                }
            },
            {
                "type": "Ext.Panel",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "cls": [
                        "x-extrasnavpanel"
                    ],
                    "designer|displayName": "extrasNavPanel",
                    "height": null,
                    "layout": "vbox",
                    "layout|flex": null,
                    "minHeight": "25%",
                    "padding": "1%",
                    "scrollable": false,
                    "width": "100%"
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
                            "designer|displayName": "extrasHeadLabel",
                            "html": "Extras"
                        }
                    },
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "action": "changecard",
                            "designer|displayName": "extrasPricingBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Pricing.png",
                            "index": 10,
                            "itemId": "extrasPricingBtn",
                            "text": "Pricing",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "extrasDiscountsBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Discounts.png",
                            "index": 11,
                            "itemId": "extrasDiscountsBtn",
                            "text": "Discounts",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "extrasNotificationsBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Notification.png",
                            "index": 12,
                            "itemId": "extrasNotificationsBtn",
                            "text": "Notifications",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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
                            "action": "changecard",
                            "designer|displayName": "extrasNotepadBtn",
                            "designer|uiInterfaceName": "plain",
                            "icon": "resources/images/RMNavigationPanel/Notepad.png",
                            "index": 13,
                            "itemId": "extrasNotepadBtn",
                            "text": "Notepad",
                            "ui": "plain"
                        },
                        "configAlternates": {
                            "index": "number"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "action",
                                "type": "string"
                            },
                            {
                                "group": "(Custom Properties)",
                                "name": "index",
                                "type": "string"
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