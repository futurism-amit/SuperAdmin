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
                "x-rm-searchview"
            ],
            "container|align": "center",
            "designer|userAlias": "searchView",
            "designer|userClassName": "common.searchView",
            "height": null,
            "layout": "hbox",
            "minHeight": null,
            "scrollable": null
        },
        "cn": [
            {
                "type": "Ext.field.Search",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "cls": [
                        "x-rm-searchfield"
                    ],
                    "designer|displayName": "RMSearchField",
                    "height": "100%",
                    "itemId": "RMSearchField",
                    "label": "<div></div>",
                    "labelWidth": "10%",
                    "layout|flex": 9,
                    "placeHolder": "SEARCH",
                    "width": null
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
                    "cls": [
                        "x-rm-filterbtn",
                        "x-rm-blueBtn"
                    ],
                    "designer|displayName": "filterBtn",
                    "designer|uiInterfaceName": "plain",
                    "height": "100%",
                    "itemId": "filterBtn",
                    "layout|flex": 1,
                    "pressedCls": "x-rm-blueBtn-pressing",
                    "text": "FILTER",
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
                            "fn": "onFilterBtnTap",
                            "implHandler": [
                                "Ext.Msg.alert('Alert', 'Development in Progress.', Ext.emptyFn);"
                            ],
                            "name": "tap"
                        }
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}