/*
 * File: app/view/container_dashboard.js
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

Ext.define('RMdatalink.view.container_dashboard', {
    extend: 'Ext.Container',
    alias: 'widget.container_dashboard1',

    alternateClassName: [
        'container_dashboard'
    ],
    requires: [
        'RMdatalink.view.listWithHeader',
        'Ext.Panel',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'container_dashboard',
        style: '',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                itemId: 'vipDashBoard',
                style: 'border:2px solid black; padding:2px;margin:2px;',
                width: '400px',
                items: [
                    {
                        xtype: 'label',
                        cls: [
                            'pointerCursor',
                            'fieldLbl'
                        ],
                        html: 'VIP<img src="resources/images/labelHeader/downArrow.png" style="float: right;"/>',
                        itemId: 'mylabel388',
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    component.element.on('tap',function(){

                                        var cmp = component.getParent();
                                        var containerSibling = cmp.down("#shrinker");
                                        console.log("COPONENT CLICKED");
                                        console.log(cmp.getHeight());
                                        if(  containerSibling.getHidden() ){


                                            component.getEl().query('img')[0].src = "resources/images/labelHeader/downArrow.png";
                                            containerSibling.setHidden(false);

                                        }else{


                                            containerSibling.setHidden(true);
                                            component.getEl().query('img')[0].src = "resources/images/labelHeader/rightArrow.png";
                                        }

                                    });
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        cls: 'vipShrinker',
                        hidden: false,
                        itemId: 'shrinker',
                        style: 'border-top:2px solid black; padding:2px 0px;margin:2px 0px;',
                        items: [
                            {
                                xtype: 'listwithheader',
                                height: '200px',
                                itemId: 'vipListWithHeader'
                            },
                            {
                                xtype: 'list',
                                cls: [
                                    'x-rm-list',
                                    'x-rm-list-header'
                                ],
                                data: [
                                    {
                                        active_total: 0,
                                        prospect_total: 0
                                    }
                                ],
                                height: '30px',
                                itemId: 'vipTotalsList',
                                itemTpl: [
                                    '<div class="x-rm-listtpl-main boldText" style="width: 100%;">',
                                    '    <div style="width: 50%;">Total</div>',
                                    '    <div class="" style="width: 25%; text-align:center; ">{active_total}</div>',
                                    '    <div class="" style="width: 25%; text-align:center; ">{prospect_total}</div>',
                                    '',
                                    '</div>'
                                ],
                                itemHeight: 30
                            }
                        ],
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    var headers = component.down("#headerList");
                                    headers.setData([{is_selected:false}]);



                                    headers.setItemTpl(
                                    Ext.create('Ext.XTemplate',
                                    '<div class="x-rm-listtpl-main" style="border-bottom: 1px solid #9b9b9b; background-color: gainsboro;font-weight: bold;color: #555;font-size: 1.0em;padding:0 0px 0 0px !important;height:64px;">',

                                    '    <div class="" style="width: 50%;text-align: left;" data-name="vendor_name" >',
                                    '        Vendor&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                    '    </div>',
                                    '    <div class="" style="width: 25%;text-align: center;" data-name="totalVIPActiveVendor">',
                                    '        Active&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                    '    </div>',
                                    '    <div class="" style="width: 25%;text-align: center;" data-name="totalVIPProspectRetailer">',
                                    '        Hot Prospect&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                    '    </div>',
                                    '</div>',
                                    {
                                        getCartImage:function(values){
                                            if(values.is_selected){
                                                return "background-image: url('resources/images/retailerDetail/cart_selected.png') !important;";
                                            }

                                            return "background-image: url('resources/images/retailerDetail/cart_unselected.png') !important;" ;
                                        },
                                        setCartValue:function(value){
                                            if(values.is_selected){
                                                values.is_selected = false;
                                            }else{
                                                values.is_selected = true;
                                            }
                                            headers.refresh();
                                            // return this.getCartImage(value);

                                        }
                                    }
                                    ));

                                    headers.setHeight(22);
                                    headers.setMode('MULTI');
                                    headers.addCls('x-rm-rdvendorslist');
                                    headers.setItemCls('vipdashboardCls');
                                    headers.refresh();

                                    var list = component.down('#mainList');



                                    list.setItemTpl(
                                    Ext.create('Ext.XTemplate',
                                    '<div class="x-rm-listtpl-main" style="width: 100%;padding:0 0px 0 0px !important;">',
                                    '    <div class=" boldText " style="width: 50%;padding-left:10px; text-align:left; {[this.getColorForVendor(values)]} " >{vendor_name}</div>',
                                    '    <div class=" boldText " style="width: 25%;padding-left:10px; text-align:center; " >{[this.getActiveRetailer(values)]}</div>',
                                    '    <div class=" boldText " style="width: 25%;padding-left:10px; text-align:center; " >{[this.getProspectRetailer(values)]}</div>',

                                    '</div>',
                                    {
                                        getColorForVendor:function(  values){
                                            return getColorStringForVendor(values);

                                        },
                                        getActiveRetailer:function(  values){
                                            try{

                                                if(values.totalVIPActiveVendor){
                                                    return values.totalVIPActiveVendor;

                                                }else{

                                                    return " ";
                                                }

                                            }catch(e){
                                                return " ";
                                            }

                                        },
                                        getProspectRetailer:function(  values){
                                            try{

                                                if(values.totalVIPProspectRetailer){
                                                    return values.totalVIPProspectRetailer;

                                                }else{

                                                    return "";
                                                }

                                            }catch(e){
                                                return "";
                                            }


                                        }




                                    }

                                    )
                                    );

                                    list.setItemHeight(22);
                                    list.setMode('MULTI');
                                    list.addCls('x-rm-rdvendorslist');


                                    // list.addListener('itemtap',function(){


                                    //     console.log("LIST CLICKED");
                                    // },this);

                                    // headers.addListener('itemtap',function(){


                                    //     console.log("HEADERS CLICKED");
                                    // },this);






                                    var totalsList = component.down('#vipTotalsList');
                                    totalsList.addCls('x-rm-rdvendorslist');





                                },
                                event: 'initialize'
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onListItemTap',
                event: 'itemtap',
                delegate: '#vipListWithHeader #mainList'
            }
        ]
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        console.log(record);
    }

});