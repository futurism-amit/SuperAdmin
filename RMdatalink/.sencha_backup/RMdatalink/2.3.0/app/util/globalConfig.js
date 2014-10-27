Ext.define('RMdatalink.util.globalConfig', {
    singleton: true,
	alias : 'widget.globalConfig',
	constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },

	config:{
		/******THIS VARIABLES ARE ADDED IN ORDER TO GET ITEMTAP PURPOSE.**********/
		Store_nameDelegateClassForTap:'Store_nameDelegateClassForTap',
		Manager_LastNameDelegateClassForTap:'Manager_LastNameDelegateClassForTap',
		listAttrForDelHandling:'click_Delegate_Attr',
		urlForRetailerCard:'card'+14,
		dataToShowInSettingWindow:{},
		dataInRetailerScreenForSaveOrCancel:{}
		
	},
	/*TRANSFER THIS FUNCTION TO GLOBAL METHODS*/
	isAttributePresentInTarget:function(attrName,target){
	   if(attrName && target){
		   var targetEl = target;
		   var attrToSearch = attrName;
		   //SEARCH IN PARENT IF POSSIBLE
		   if( targetEl.hasAttribute( attrToSearch ) || targetEl.parentNode.hasAttribute( attrToSearch ) ){
					return true;			 
			 }
			return false; 
		}	
		else{
			return false;
		}
	}
});