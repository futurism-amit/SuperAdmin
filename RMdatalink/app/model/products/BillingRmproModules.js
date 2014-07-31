/*
 * File: app/model/products/BillingRmproModules.js
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

Ext.define('RMdatalink.model.products.BillingRmproModules', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'module_name'
            },
            {
                name: 'module_description'
            },
            {
                name: 'activation_date'
            },
            {
                name: 'trial'
            },
            {
                name: 'quantity'
            },
            {
                name: 'module_standard_price'
            },
            {
                name: 'per_month'
            },
            {
                name: '_id'
            },
            {
                name: 'module_promotional_price'
            },
            {
                name: 'module_listed_order',
                sortType: 'asInt'
            },
            {
                name: 'standard_total'
            },
            {
                name: 'promotional_total'
            }
        ]
    }
});