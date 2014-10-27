Ext.define('RMdatalink.util.messagingVariable', {
    singleton: true,
	alias : 'widget.messagingVariable',
	constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },

	config:{
		retailerCardShowState:{}
	}
});