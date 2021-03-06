/*
 * File: app/view/LoginScreen.js
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

Ext.define('RMdatalink.view.LoginScreen', {
    extend: 'Ext.Container',
    alias: 'widget.LoginScreen',

    requires: [
        'Ext.form.Panel',
        'Ext.Img',
        'Ext.field.Password',
        'Ext.form.FieldSet',
        'Ext.Label',
        'Ext.field.Radio',
        'Ext.Button',
        'Ext.field.Email',
        'Ext.SegmentedButton'
    ],

    config: {
        itemId: 'loginScreenContainer',
        layout: {
            type: 'card',
            animation: false
        },
        items: [
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'formpanel',
                        centered: true,
                        cls: 'x-rm-rdformpanel',
                        height: '300px',
                        width: '400px',
                        scrollable: false,
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'logoBg',
                                docked: 'top',
                                height: '50px',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'image',
                                        centered: true,
                                        cls: 'backgroundImg',
                                        docked: 'left',
                                        height: 32,
                                        style: ' background-size: initial !important;',
                                        width: '220px',
                                        src: 'resources/images/RM-datalink.png'
                                    }
                                ]
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'loginUsernameTxtFld',
                                label: 'User Name'
                            },
                            {
                                xtype: 'passwordfield',
                                action: 'onActionDoLogin',
                                itemId: 'loginPasswordFld',
                                label: 'Password'
                            },
                            {
                                xtype: 'fieldset',
                                cls: [
                                    'x-rm-radiordformpanel',
                                    'x-rm-rdformpanel'
                                ],
                                height: 40,
                                hidden: true,
                                margin: 0,
                                width: '98%',
                                scrollable: false,
                                layout: {
                                    type: 'hbox',
                                    align: 'center',
                                    pack: 'center'
                                },
                                items: [
                                    {
                                        xtype: 'label',
                                        margin: '-10px 10px 0 0'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        cls: 'pointerCursor',
                                        itemId: 'loginAsRetailerRadioFld',
                                        width: '90px',
                                        inputCls: 'radiofieldInput',
                                        label: 'Retailer',
                                        labelCls: 'transparentBack',
                                        labelWidth: '75px',
                                        name: 'loginAs'
                                    },
                                    {
                                        xtype: 'radiofield',
                                        cls: 'pointerCursor',
                                        itemId: 'loginAsInhouseUserRadioFld',
                                        width: '90px',
                                        inputCls: 'radiofieldInput',
                                        label: 'Inhouse User',
                                        labelCls: 'transparentBack',
                                        labelWidth: '85px',
                                        name: 'loginAs',
                                        checked: true
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                baseCls: 'temp',
                                cls: 'loginFormLabel',
                                height: '22px',
                                html: 'Forgot Password',
                                itemId: 'loginForgotPwdLabel',
                                margin: '0 0 10 100',
                                style: 'background:transparent !important;',
                                width: '63%'
                            },
                            {
                                xtype: 'button',
                                cls: 'x-rm-blueBtn',
                                itemId: 'loginActionButton',
                                margin: '0 0 0 100',
                                width: '63%',
                                text: 'Login'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'formpanel',
                        centered: true,
                        cls: 'x-rm-rdformpanel',
                        height: '300px',
                        width: '400px',
                        scrollable: false,
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'logoBg',
                                docked: 'top',
                                height: '50px',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'image',
                                        centered: true,
                                        docked: 'left',
                                        height: 32,
                                        width: '220px',
                                        src: 'resources/images/RM-datalink.png'
                                    }
                                ]
                            },
                            {
                                xtype: 'emailfield',
                                itemId: 'forgotPasswardEmailFld',
                                margin: '-10 0 10 0',
                                label: 'Enter E-mail',
                                placeHolder: 'email@example.com'
                            },
                            {
                                xtype: 'segmentedbutton',
                                margin: '0 0 0 100',
                                width: '63%',
                                allowToggle: false,
                                items: [
                                    {
                                        xtype: 'button',
                                        handler: function(button, e) {
                                            Ext.ComponentQuery.query('#loginScreenContainer')[0].setActiveItem(0);
                                        },
                                        cls: 'x-rm-card-actionbtn',
                                        width: '50%',
                                        text: 'Cancel'
                                    },
                                    {
                                        xtype: 'button',
                                        action: 'doForgotPassword',
                                        cls: 'x-rm-blueBtn',
                                        width: '50%',
                                        text: 'Reset Password'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'formpanel',
                        centered: true,
                        cls: 'x-rm-rdformpanel',
                        height: '260px',
                        width: '620px',
                        scrollable: false,
                        layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                docked: 'top',
                                height: '50px',
                                width: '100%',
                                items: [
                                    {
                                        xtype: 'image',
                                        centered: true,
                                        docked: 'left',
                                        height: 32,
                                        width: '220px',
                                        src: 'resources/images/RM-datalink.png'
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                html: 'Reset Password'
                            },
                            {
                                xtype: 'passwordfield',
                                hidden: true,
                                margin: '40 0 0 0',
                                width: '80%',
                                label: 'Enter Reset Password Key',
                                labelWidth: '200px'
                            },
                            {
                                xtype: 'passwordfield',
                                itemId: 'regenratePwdFld',
                                width: '80%',
                                label: 'Enter New Password',
                                labelWidth: '200px'
                            },
                            {
                                xtype: 'passwordfield',
                                itemId: 'retypedRegenratePwdFld',
                                width: '80%',
                                label: 'Retype New Password',
                                labelWidth: '200px'
                            },
                            {
                                xtype: 'fieldset',
                                margin: '10 0 10 0',
                                width: '80%',
                                layout: {
                                    type: 'hbox',
                                    pack: 'end'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        cls: 'x-rm-blueBtn',
                                        itemId: 'confirmResetPwdFrmEmailBtn',
                                        text: 'Confirm new Password'
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