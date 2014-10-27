/*
 * File: app/view/inhouse/MainContentPanel.js
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

Ext.define('RMdatalink.view.inhouse.MainContentPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.inhousemaincontentpanel',

    requires: [
        'RMdatalink.view.CardHeaderPanel',
        'RMdatalink.view.inhouse.ListContainer',
        'Ext.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Bar'
    ],

    config: {
        itemId: 'inhouseMainContentPanel',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'CardHeaderPanel',
                itemId: 'inHouseCardHeader',
                flex: 1
            },
            {
                xtype: 'panel',
                flex: 15,
                layout: 'vbox',
                scrollable: false,
                items: [
                    {
                        xtype: 'tabpanel',
                        flex: 1,
                        cls: 'x-rm-tabpanel',
                        itemId: 'inhouseTabPanel',
                        ui: 'light',
                        tabBar: {
                            docked: 'top',
                            itemId: 'inHouseNavigationTabBar'
                        },
                        items: [
                            {
                                xtype: 'container',
                                title: 'TEAM',
                                itemId: 'inHouseUsersTab',
                                layout: 'fit',
                                scrollable: false,
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {




                                            ////////////////////////////////////////////////////

                                            var headers = component.down("#inhouseListHeader");
                                            headers.setData([{}]);
                                            headers.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main">',
                                            '    <div style="width: 8%;">',
                                            '        <div style="width: 25px;" data-name="all"></div>',
                                            '    </div>',
                                            '    <div style="width: 20%;" data-name="firstname">',
                                            '        Name&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style="width: 10%;" data-name="position">',
                                            '    Positon&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 10%;" data-name="phone_ext">',
                                            '    Office Ext&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 15%;" data-name="email">',
                                            '       Company Email&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 15%;" data-name="personal_email">',
                                            '        Personal Email&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 10%;" data-name="cell_phone">',
                                            '        Cell Phone&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 6%;" data-name="user_role" class="useRoleToHide">',
                                            '       User Rights&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '</div>'
                                            )
                                            );
                                            headers.refresh();
                                            var list = component.down('#inhouseList');

                                            list.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main pointerCursor">',
                                            '    <div style="width: 8%;overflow:visible;">',
                                            '        <div style="width: 25px; height:25px; background-image:url({image_url})"></div>',
                                            '    </div>',
                                            '    <div style="width: 20%;" class="boldText">{firstname}  {lastname}</div>',
                                            '    <div style="width: 10%;">{position}</div>',
                                            '    <div style="width: 10%;">{phone_ext}  {phone}</div>',
                                            '    <div style="width: 15%;"><a href="mailto:{email}">{email}</a></div>',
                                            '    <div style="width: 15%;"><a href="mailto:{personal_email}">{personal_email}</a></div>',
                                            '    <div style="width: 10%;">{cell_phone}</div>',
                                            '    <div style="width: 6%;"  class="useRoleToHide" >{user_role}</div>',
                                            '</div>'
                                            )
                                            );
                                            list.setMode("SINGLE");
                                            list.on("select",function(replist, record, eOpts){
                                                RMdatalink.app.getController('inhouse.DetailScreenController').onInhouseUsersListSelect(replist, record, eOpts);
                                            });



                                            //list.onStoreClear();
                                            //list.refresh();



                                            // var totalsList = component.down('#inhouseTotalsList');
                                            // var store = list.getStore();
                                            // totalsList.setData([{}]);
                                            // totalsList.setItemTpl(
                                            //     Ext.create('Ext.XTemplate',
                                            //                '<div class="x-rm-listtpl-main">',
                                            //                '    <div style="width: 6%;">TOTALS</div>',
                                            //                '    <div style="width: 12%;">{[this.getTotalFor(\'store_name\')]}&nbsp; Retailers</div>',
                                            //                '    <div style="width: 10%;">{[this.getTotalFor(\'Users\')]}&nbsp; Users</div>',
                                            //                '    <div style="width: 43%;">{[this.getTotalFor(\'store_city\')]}&nbsp; Cities</div>',
                                            //                '    <div style="width: 5%;">{[this.getTotalFor(\'store_products_datalink\')]}</div>',
                                            //                '    <div style="width: 5%;">{[this.getTotalFor(\'store_products_ecatalog\')]}</div>',
                                            //                '    <div style="width: 5%;">{[this.getTotalFor(\'store_products_smart_cart\')]}</div>',
                                            //                '    <div style="width: 5%;">{[this.getTotalFor(\'store_products_rm_plc\')]}</div>',
                                            //                '    <div style="width: 9%;">{[this.getTotalFor(\'store_monthly_subscription\')]}</div>',
                                            //                '</div>',
                                            //                {
                                            //                     getTotalFor: function(value){
                                            //                         var x = [];
                                            //                         var y;
                                            //                         var sum = 0;
                                            //                         store.each(function(record,id){
                                            //                             if(value=='Users') {
                                            //                                 y = record.get('manager_firstname')+" "+record.get('manager_lastname');
                                            //                             }
                                            //                             else
                                            //                                 y = record.get(value);
                                            //                             if(value=='store_products_datalink' || value=='store_products_ecatalog' ||
                                            //                                value=='store_products_smart_cart' || value=='store_products_rm_plc') {
                                            //                                 if(y === true)
                                            //                                     x.push(y);
                                            //                             }
                                            //                             else if(value == 'store_monthly_subscription') {
                                            //                                 y = parseFloat(y.replace("$",'').replace(",",""));
                                            //                                 sum+=y;
                                            //                             }
                                            //                             else
                                            //                                 Ext.Array.include(x,y);
                                            //                         });
                                            //                         if(value == 'store_monthly_subscription')
                                            //                             return '$'+Math.round(sum);
                                            //                         else
                                            //                             return x.length;
                                            //                     }
                                            //                }
                                            //               )
                                            // );

                                        },
                                        event: 'initialize'
                                    },
                                    {
                                        fn: function(element, eOpts) {
                                            //window.location.hash = 'retailerCard'+0;


                                            var inHouseStore = Ext.getStore('inhouseMasterStore');


                                            RMdatalink.app.getController('LoginHandler').hideUserRightInfoForInhouse() ;
                                        },
                                        event: 'painted'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'inhouselistcontainer'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                title: 'REPS',
                                itemId: 'inHouseRepsTab',
                                layout: 'fit',
                                scrollable: false,
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {
                                            var headers = component.down("#inhouseListHeader");
                                            headers.setData([{}]);
                                            headers.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main">',
                                            '    <div style="width: 8%;">',
                                            '        <div style="width: 25px;" data-name="all"></div>',
                                            '    </div>',
                                            '    <div style="width: 18%;" data-name="firstname">',
                                            '        Name&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',

                                            '    <div style="width: 10%;" data-name="position">',
                                            '    Positon&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 8%;" data-name="city">',
                                            '    City&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 6%;" data-name="state">',
                                            '    State&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 15%;" data-name="email">',
                                            '       Company Email&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 15%;" data-name="personal_email">',
                                            '        Personal Email&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 10%;" data-name="cell_phone">',
                                            '        Cell Phone&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '    <div style="width: 6%;" data-name="user_role" class="useRoleToHide">',
                                            '       User Rights&nbsp;<img src="resources/images/button_icons/downArrow.png"/>',
                                            '    </div>',
                                            '</div>'
                                            )
                                            );
                                            headers.refresh();
                                            var list = component.down('#inhouseList');

                                            list.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div class="x-rm-listtpl-main pointerCursor">',
                                            '    <div style="width: 8%;overflow:visible;">',
                                            '        <div style="width: 25px; height:25px; background-image:url({image_url})"></div>',
                                            '    </div>',
                                            '    <div style="width: 18%;" class="boldText">{firstname}  {lastname}</div>',
                                            '    <div style="width: 10%;">{position}</div>',
                                            '    <div style="width: 8%;">{city}  {phone}</div>',
                                            '    <div style="width: 6%;">{state}  {phone}</div>',
                                            '    <div style="width: 15%;"><a href="mailto:{email}">{email}</a></div>',
                                            '    <div style="width: 15%;"><a href="mailto:{personal_email}">{personal_email}</a></div>',
                                            '    <div style="width: 10%;">{cell_phone}</div>',
                                            '    <div style="width: 6%;" class="useRoleToHide">{user_role}</div>',
                                            '</div>'
                                            )
                                            );
                                            list.setMode("SINGLE");
                                            list.on("select",function(replist, record, eOpts){
                                                RMdatalink.app.getController('inhouse.DetailScreenController').onInhouseUsersListSelect(replist, record, eOpts);
                                            });


                                            //list.onStoreClear();
                                            //list.refresh();




                                            // var totalsList = component.down('#inhouseTotalsList');
                                            // var store = list.getStore();
                                            // totalsList.setData([{}]);
                                            // totalsList.setItemTpl(
                                            //     Ext.create('Ext.XTemplate',
                                            //                '<div class="x-rm-listtpl-main">',
                                            //                '    <div style="width: 6%;">TOTALS</div>',
                                            //                '    <div style="width: 12%;">{[this.getTotalFor(\'store_name\')]}&nbsp; Retailers</div>',
                                            //                '    <div style="width: 10%;">{[this.getTotalFor(\'Users\')]}&nbsp; Users</div>',
                                            //                '    <div style="width: 43%;">{[this.getTotalFor(\'store_city\')]}&nbsp; Cities</div>',
                                            //                '</div>',
                                            //                {
                                            //                     getTotalFor: function(value){
                                            //                         var x = [];
                                            //                         var y;
                                            //                         store.each(function(record,id){
                                            //                             if(value=='Users') {
                                            //                                 y = record.get('manager_firstname')+" "+record.get('manager_lastname');
                                            //                             }
                                            //                             else
                                            //                                 y = record.get(value);
                                            //                             Ext.Array.include(x,y);
                                            //                         });
                                            //                         return x.length;
                                            //                     }
                                            //                }
                                            //               )
                                            // );

                                        },
                                        event: 'initialize'
                                    },
                                    {
                                        fn: function(element, eOpts) {



                                            //window.location.hash = 'retailerCard'+1;

                                            var inHouseStore = Ext.getStore('inhouseMasterStore');

                                            RMdatalink.app.getController('LoginHandler').hideUserRightInfoForInhouse() ;
                                        },
                                        event: 'painted'
                                    }
                                ],
                                items: [
                                    {
                                        xtype: 'inhouselistcontainer'
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
                fn: 'onInhouseMainContentPanelInitialize',
                event: 'initialize'
            }
        ]
    },

    onInhouseMainContentPanelInitialize: function(component, eOpts) {
        component.down('#cardAddRetailerBtn').element.on("tap",function(){

                component.fireEvent('inhouseAddNewTap',component );
                Ext.DomQuery.select('input[name=division-checkbox]')[0].checked = true ;
                RMdatalink.app.getController('inhouse.DetailScreenController').isNewRecordBtnTapped = true ;
                RMdatalink.app.getController('inhouse.DetailScreenController').resetInhouseDetailedPage();

        });


        component.down('#cardDeleteBtn').element.on("tap",function(){

            RMdatalink.app.getController('DeleteRecords').deleteInhoue();

        });


        component.down('#cardActionBtn').setHidden(true) ;
        component.down('#cardImportBtn').setHidden(true) ;


        component.down('#cardExportBtn').element.on("tap",function(){

                    var ihouseTabs = Ext.ComponentQuery.query('#inhouseTabPanel')[0] ;

                    var userType =  ihouseTabs.getActiveItem().getItemId() ;

                        if(userType === 'inHouseUsersTab' ){

                            var store = Ext.ComponentQuery.query('#inHouseUsersTab')[0].down('#inhouseList').getStore();

                        }else{

                            var store = Ext.ComponentQuery.query('#inHouseRepsTab')[0].down('#inhouseList').getStore();

                        }


                     var data = RMdatalink.app.getController('inhouse.DetailScreenController').getArrayDataFromStore(store) ;


                    RMdatalink.app.getController('inhouse.DetailScreenController').exportToCSV(data);

        });








    }

});