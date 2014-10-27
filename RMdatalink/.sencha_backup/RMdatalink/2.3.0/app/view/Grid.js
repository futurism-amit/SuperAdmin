Ext.define('RMdatalink.view.Grid', {
    extend : 'Ext.ux.touch.grid.List',
    alias: 'widget.Rgrid',
	//xtype: 'Rgrid',

    requires : [
        'Ext.ux.touch.grid.feature.Feature',
        'Ext.ux.touch.grid.feature.Editable',
        'Ext.ux.touch.grid.feature.Sorter',
        'Ext.field.Number',
        'RMdatalink.store.Grid'
    ],

    config : {
        title    : 'Grid',
        store    : true,
        columns  : [
            {
                header    : 'Products',
                dataIndex : 'module_name',
                width     : '20%'
            },
			{
                header    : '',
                dataIndex : '',
                width     : '30%'
            },
			{
                header    : 'Qty',
                dataIndex : 'quantity',
                width     : '5%'
            },
			{
                header    : 'Rate',
                dataIndex : 'module_standard_price',
                width     : '15%'
            },
            {
                header    : 'Per Month',
                dataIndex : 'per_month',
                width     : '15%'
            }
        ],
        features : [
            {
                ftype    : 'Ext.ux.touch.grid.feature.Sorter',
                launchFn : 'initialize'
            }
        ]
    },

    applyStore : function() {
        return Ext.getStore('printInvoice.subscribedModulesStore');//new RMdatalink.store.Grid();
    }
});