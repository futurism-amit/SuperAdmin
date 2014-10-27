/*
 * File: app/view/LicenseScreen.js
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

Ext.define('RMdatalink.view.LicenseScreen', {
    extend: 'Ext.Sheet',
    alias: 'widget.LicenseScreen',

    requires: [
        'RMdatalink.view.listWithHeader',
        'Ext.form.FieldSet',
        'Ext.Label',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.Select',
        'Ext.field.TextArea'
    ],

    config: {
        cls: 'x-rm-filterdd',
        height: '100%',
        hideAnimation: false,
        itemId: 'LicenseScreen',
        maxWidth: '1024px',
        minWidth: '1024px',
        padding: '4 0 0 0',
        showAnimation: false,
        style: 'padding-top:0px;',
        width: '98%',
        layout: 'vbox',
        items: [
            {
                xtype: 'fieldset',
                border: '0 0 0 0',
                cls: 'x-rm-rdformpanel',
                hidden: true,
                padding: '0 0 0 0',
                width: '94%',
                layout: {
                    type: 'hbox',
                    pack: 'end'
                },
                items: [
                    {
                        xtype: 'label'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {

                            var LicenseScreen =  Ext.ComponentQuery.query("#LicenseScreen")[0];

                            LicenseScreen.hide() ;
                        },
                        cls: 'x-rm-card-actionbtn',
                        margin: '0 0 0 0',
                        width: '110px',
                        pressedCls: 'x-rm-card-actionbtn-pressing',
                        text: 'Close'
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 1,
                layout: 'hbox',
                items: [
                    {
                        xtype: 'formpanel',
                        flex: 1,
                        cls: 'x-rm-rdformpanel',
                        itemId: 'liscenseScreenForm1',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                padding: '0 16 0 0',
                                width: '100%',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-card-actionbtn',
                                        itemId: 'licNewSubBtn',
                                        width: '120px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'New Subscr. Period				'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-card-actionbtn',
                                        itemId: 'licEditSubBtn',
                                        width: '120px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'Edit Subscription				'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-card-actionbtn',
                                        hidden: true,
                                        itemId: 'licSaveBtn',
                                        width: '120px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'Save'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-card-actionbtn',
                                        hidden: true,
                                        itemId: 'licCancelBtn',
                                        width: '120px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'Cancel'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                itemId: 'liscenseScreenStoreTitleFldSet',
                                margin: '4 0 0 0',
                                padding: '0 16 0 0',
                                width: '100%',
                                title: '18th Street Orientals',
                                items: [
                                    {
                                        xtype: 'fieldset',
                                        padding: '0 0 0 0',
                                        width: '100%',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                flex: 1,
                                                itemId: 'licenseScreenAcctNoFld',
                                                clearIcon: false,
                                                inputCls: 'borderedDiv',
                                                label: 'Acct #:',
                                                labelWidth: '60px'
                                            },
                                            {
                                                xtype: 'selectfield',
                                                flex: 1,
                                                itemId: 'licenseScreenPayPrdFld',
                                                inputCls: 'borderedDiv',
                                                label: 'For:',
                                                labelWidth: '60px',
                                                options: [
                                                    {
                                                        text: '1 Month',
                                                        value: 1
                                                    },
                                                    {
                                                        text: '3 Month',
                                                        value: 3
                                                    },
                                                    {
                                                        text: '6 Month',
                                                        value: 6
                                                    },
                                                    {
                                                        text: '9 Month',
                                                        value: 9
                                                    },
                                                    {
                                                        text: '1 Year',
                                                        value: 12
                                                    },
                                                    {
                                                        text: '2 Year',
                                                        value: 24
                                                    },
                                                    {
                                                        text: '3 Year',
                                                        value: 36
                                                    },
                                                    {
                                                        text: '5 Year',
                                                        value: 60
                                                    },
                                                    {
                                                        text: 'Other',
                                                        value: 0
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldset',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                action: 'inputByDatePicker',
                                                flex: 1,
                                                itemId: 'licenseScreenFromFld',
                                                clearIcon: false,
                                                inputCls: 'borderedDiv',
                                                label: 'From:',
                                                labelWidth: '60px'
                                            },
                                            {
                                                xtype: 'textfield',
                                                action: 'inputByDatePicker',
                                                flex: 1,
                                                itemId: 'licenseScreenToFld',
                                                clearIcon: false,
                                                inputCls: 'borderedDiv',
                                                label: 'To:',
                                                labelWidth: '60px'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'fieldset',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                hidden: true,
                                                itemId: 'licenseScreenPrdDaysFld',
                                                width: '50%',
                                                clearIcon: false,
                                                inputCls: 'borderedDiv',
                                                label: 'Days:',
                                                labelWidth: '60px'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                itemId: 'licenseScreenModuleList',
                                margin: '2 0 2 0',
                                padding: '0 16 0 0',
                                width: '100%',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'listwithheader',
                                        cls: 'borderedDiv',
                                        margin: '0 0 2 0',
                                        width: '100%',
                                        flex: 1
                                    }
                                ],
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {

                                            var headers = component.down("#headerList");
                                            headers.setData([{}]);
                                            headers.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div style="font-size: 1.0em;font-weight: bold;  background-color: gainsboro;" class="x-rm-listtpl-main onlyBottomBorderDiv">',
                                            '    <div class="rightBorderDiv" style="width: 6%;"></div>',
                                            '    <div class="rightBorderDiv" style=" width: 50%;text-align: center;" data-name="pay_date">',
                                            '        Product/ Add ons&nbsp;',
                                            '    </div>',
                                            '    <div class="rightBorderDiv" style="width: 16%;text-align: center;" data-name="paid_by">',
                                            '        Qty&nbsp;',
                                            '    </div>',
                                            '    <div style="width: 24%;text-align: center;" data-name="payment_method_detail">',
                                            '        Length&nbsp;',
                                            '    </div>',


                                            '</div>'
                                            )
                                            );

                                            headers.refresh();

                                            var list = component.down('#mainList');
                                            list.setStore(Ext.getStore('License.ProductsStore'));
                                            list.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div style = "height: 20px;padding-top: 0px;" class="x-rm-listtpl-main pointerCursor">',
                                            '    <div class="rightBorderDiv" style="width: 6%;">',
                                            '        <div style="width: 19px; height:19px;"    {[RMdatalink.util.globalConfig.getListAttrForDelHandling()]} ="onCartTap" ></div>',
                                            '    </div>',
                                            '    <div class="rightBorderDiv" style="width: 50%;"> {module_name}</div>',

                                            '<div class="rightBorderDiv" style="width: 16%;text-align: center;">',
                                            '    <input type="text" style="width: 68% !important;margin-left: 15%;height: 16px;text-align: center;" class="licEdtFld x-rm-rdinlinecmt" data-id="{_id}" value="{quantity}" maxlength="24"',
                                            '        />',
                                            '</div>',



                                            '    <div style="width: 24%;text-align: center;">{[this.getLength(values)]}</div>',

                                            '</div>',
                                            {
                                                getLength:function(values){
                                                    //remark_val

                                                    if(values.remark_val && values.remark_val !="" ){

                                                        var rVal = parseInt(values.remark_val) ;
                                                        var msg= "" ;

                                                        if(rVal > 2){

                                                            switch(rVal){

                                                                case 3:
                                                                msg = "1M Free Trial" ;
                                                                break ;
                                                                case 4:
                                                                msg = "2M Free Trial" ;
                                                                break ;
                                                                case 5:
                                                                msg = "3M Free Trial" ;
                                                                break ;
                                                                case 6:
                                                                msg = "6M Free Trial" ;
                                                                break ;
                                                                case 7:
                                                                msg = "9M Free Trial" ;
                                                                break ;
                                                                case 8:
                                                                msg = "1Yr Free Trial" ;
                                                                break ;
                                                            }

                                                            msg = '<span style="color: green;">' + msg + '</span>'  ;
                                                            return  msg ;
                                                        }
                                                    }

                                                    return values.subscription_length  ;

                                                }
                                            }
                                            )
                                            );



                                            list.setItemHeight(22);
                                            list.setMode('MULTI');

                                            list.addCls('x-rm-rdvendorslist');

                                            // '    <div class="rightBorderDiv" style="width: 16%;text-align: center;">{quantity}</div>',
                                        },
                                        event: 'initialize'
                                    },
                                    {
                                        fn: function(element, eOpts) {
                                            RMdatalink.app.getController('LicenseController').selectModulesOnLicense() ;
                                        },
                                        event: 'painted'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                padding: '0 16 0 0',
                                width: '100%',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        flex: 1,
                                        itemId: 'licenseScreenInvoiceNoFld',
                                        clearIcon: false,
                                        inputCls: 'borderedDiv',
                                        label: 'Invoice #:',
                                        labelWidth: '80px'
                                    },
                                    {
                                        xtype: 'textfield',
                                        flex: 1,
                                        itemId: 'licenseScreenPaidAmtFld',
                                        width: '220px',
                                        clearIcon: false,
                                        inputCls: 'borderedDiv',
                                        label: 'Paid Amt.:',
                                        labelWidth: '80px'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                padding: '0 16 0 0',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'textareafield',
                                        itemId: 'licenseScreenNoteFld',
                                        width: '100%',
                                        clearIcon: false,
                                        inputCls: 'borderedDiv',
                                        label: 'Note:',
                                        labelWidth: '80px'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'formpanel',
                        flex: 1,
                        cls: 'x-rm-rdformpanel',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'fieldset',
                                width: '100%',
                                layout: {
                                    type: 'hbox',
                                    pack: 'end'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-card-actionbtn',
                                        width: '110px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'Save As			'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-card-actionbtn',
                                        width: '110px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'Email			'
                                    },
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-card-actionbtn',
                                        width: '110px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'Post			'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                flex: 1,
                                itemId: 'licenseHistoryListPanel',
                                margin: '24 0 24 0',
                                width: '100%',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'listwithheader',
                                        cls: 'borderedDiv',
                                        margin: '0 0 2 0',
                                        flex: 1
                                    }
                                ],
                                listeners: [
                                    {
                                        fn: function(component, eOpts) {

                                            var headers = component.down("#headerList");
                                            headers.setData([{}]);
                                            headers.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div style="font-size: 1.0em;font-weight: bold;  background-color: gainsboro;" class="x-rm-listtpl-main onlyBottomBorderDiv">',
                                            '    <div class="rightBorderDiv" style=" width: 20%;text-align: center;" data-name="pay_date">',
                                            '        &nbsp;',
                                            '    </div>',
                                            '    <div class="rightBorderDiv" style=" width: 20%;text-align: center;" data-name="pay_date">',
                                            '        From&nbsp;',
                                            '    </div>',
                                            '    <div class="rightBorderDiv" style="width: 20%;text-align: center;" data-name="paid_by">',
                                            '        To&nbsp;',
                                            '    </div>',
                                            '    <div class="rightBorderDiv" style="width: 20%;text-align: center;" data-name="payment_method_detail">',
                                            '        Length&nbsp;',
                                            '    </div>',
                                            '    <div class="rightBorderDiv" style="width: 20%;text-align: center;" data-name="payment_method_detail">',
                                            '        Price&nbsp;',
                                            '    </div>',

                                            '</div>'
                                            )
                                            );

                                            headers.refresh();

                                            var list = component.down('#mainList');
                                            list.setStore(Ext.getStore('InvoiceHistoryStore'));
                                            list.setItemTpl(
                                            Ext.create('Ext.XTemplate',
                                            '<div style = "height: 20px;padding-top: 0px;" class="x-rm-listtpl-main pointerCursor">',
                                            '    <div class="rightBorderDiv" style="width: 20%;text-align: center;"><span style="font-weight:bold;font-size:1.2em;">{[this.getPaymentDtSrc(values)]}<span></div>',
                                            '    <div class="rightBorderDiv" style="width: 20%;text-align: center;margin-right: 2px;">{due_date}</div>',
                                            '    <div class="rightBorderDiv" style="width: 20%;text-align: center;">{payment_period_end}</div>',
                                            '    <div class="rightBorderDiv" style="width: 20%;text-align: center;">{payment_period} Month(s)</div>',
                                            '    <div style="width: 20%;padding-right:2%;text-align: right;">$ {[formatNum(values.total_payble)]}</div>',

                                            '</div>',
                                            {

                                                getLength:function(record){


                                                },
                                                getPaymentStatus:function(record){
                                                    if(! record.payment_status){
                                                        return "Paid" ;
                                                    }

                                                    if( record.payment_status == "paid"){
                                                        return "Paid" ;
                                                    }else{
                                                        return '<span style="color: rgb(157, 8, 8);">Unpaid </span>' ;
                                                    }

                                                },
                                                getPaymentDtSrc:function(record){
                                                    if(! record.payment_status){
                                                        return "$" ;
                                                    }

                                                    if( record.payment_status == "paid"){
                                                        return "$" ;
                                                    }else{
                                                        return '' ;
                                                    }

                                                }


                                            }
                                            )
                                            );

                                            // '    <div class="rightBorderDiv" style="width: 16%;">{[this.getProductType(values)]}</div>',

                                            list.setMode("SINGLE");

                                            list.setItemHeight(20);
                                            list.setAllowDeselect(false);

                                            list.on("select",function(licList, record, eOpts){
                                                RMdatalink.app.getController('LicenseController').onHistoryLicSelect(licList, record, eOpts);
                                            });
                                        },
                                        event: 'initialize'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                cls: 'x-rm-rdformpanel',
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'nbluehtml',
                                        html: 'Auto Created on 7/15/2014 12:01 AM',
                                        itemId: 'licenseTimeStampLbl'
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'nbluehtml',
                                        hidden: true,
                                        html: 'Auto Posted on 7/15/2014 12:01 AM'
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'nbluehtml',
                                        hidden: true,
                                        html: 'Manually Created By Fawad on 7/20/2014 01:14 PM'
                                    },
                                    {
                                        xtype: 'label',
                                        cls: 'nbluehtml',
                                        hidden: true,
                                        html: 'Manually Posted By Fawad on 8/1/2014 04:14 PM'
                                    }
                                ]
                            },
                            {
                                xtype: 'fieldset',
                                layout: {
                                    type: 'hbox',
                                    pack: 'end'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        handler: function(button, e) {

                                            var LicenseScreen =  Ext.ComponentQuery.query("#LicenseScreen")[0];

                                            LicenseScreen.hide() ;
                                        },
                                        cls: [
                                            'x-rm-card-actionbtn',
                                            'borderedDiv'
                                        ],
                                        width: '110px',
                                        pressedCls: 'x-rm-card-actionbtn-pressing',
                                        text: 'Close'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

});