Ext.define('RMdatalink.util.DataManager', {
    singleton: true,
	constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },

	config:{
	},
	
	/** createProxy  -  function
	 *  @param - proxyObject  		
	 *  eg: {
	 *			type: 'sql',
	 *			batchActions: false,
	 *			table: 'xyz'
     *   	}
	 */
	createProxy :function(proxyObject){
		var proxyBase = 'Ext.data.proxy.';
		var camelCasedProxyType = proxyObject.type.substr(0, 1).toUpperCase() + proxyObject.type.substr(1);
		var desiredProxy = proxyBase + camelCasedProxyType;
		var proxyToReturn = Ext.create(desiredProxy, proxyObject);
		return proxyToReturn;
	},

	/** setProxyToStore  -  function
	 *  @param - proxy that is to be set to store
	 *  @param - store  		
	 */
	setProxyToStore:function(proxy,store) {
		if(store){
			store.setProxy(proxy);
		}
		return store;
	},

	/** addListenerOnObject  -  function
	 *  @param - object: on which event is to be added
 	 *  @param - evt: event		
	 *  @param - callback - function to be called on execution
	 *  @param - scope
	 */
	addListenerOnObject:function(object, evt, callback, scope) {
		var objectToAdd = {};
		objectToAdd[evt] = callback;
		objectToAdd[scope] = scope;
		object.addListener(objectToAdd);
	},

	/** loadDataInStore  -  function
	 *  @param - paramObject
	 *	eg: {
	 *		    storeName:'retailerUsers',  			: storeAlias
	 *			proxy: {
	 *				type: 'ajax',						: proxytype
	 *				url: 'app/data/Retailer_Users.json',: proxy url
	 *				reader: {
	 *					type: 'json',					: reader type if reader is specified
	 *					rootProperty:'Retailers_Users'  : rootProperty 
	 *				}
	 *			},
	 *			successCallback:function() {			: func. to be executed on successful load
	 *			},
	 *			errorCallback: function() {				: func. to be executed on exception
	 *			},
	 * 			scope:this								: scope
	 *	    	}  
	 */
	loadDataInStore:function(paramObject) {
          
           
            var key = paramObject.proxy.reader.rootProperty ; 
            paramObject.proxy.data[key] = this.getActiveData(paramObject.proxy.data[key]) ;
            
		if(!(paramObject instanceof Object))
			return;
		if(!paramObject.storeName)	
			return;
		var store = Ext.getStore(paramObject.storeName);
                
                if(paramObject.proxy.data[paramObject.proxy.reader.rootProperty].length < 1){
                    
                      RMdatalink.app.getController('PaginationController').rollBackStoreVariable(paramObject.storeName);
                      return ;
                }
               // console.error(paramObject.proxy.data[paramObject.proxy.reader.rootProperty]);
                store.removeAll();
                store.sync();
                
		if(!store)
			return;
		if(!paramObject.proxy || !paramObject.proxy.type) 
			return;
		var proxy = this.createProxy(paramObject.proxy);
		if(paramObject.errorCallback && typeof paramObject.errorCallback === 'function') {
			var scope = paramObject.scope?paramObject.scope:null;
			this.addListenerOnObject(proxy,'exception',paramObject.errorCallback,scope);
		}
		store = this.setProxyToStore(proxy, store);
		if(paramObject.successCallback && typeof paramObject.successCallback === 'function') {
			var scope = paramObject.scope?paramObject.scope:null;
			this.addListenerOnObject(store,'load',paramObject.successCallback,scope);
		}
		store.load();
	},
        
        
        getActiveData:function(data){
            var dataToReturn = [] ;
            for(var i=0 ;i < data.length ; i++ ){
                
                if(data[i].delete_status){
                    
                }else{
                    
                    dataToReturn.push(data[i]);
                }
            }
            
            return dataToReturn ;
            
        },

	/** flushStore  -  function
	 *  @param - storeName    : alias of the store to be flushed
	 */
	flushStore:function(storeName) {
		var store = Ext.getStore(storeName);
		if(store)
			store.removeAll();
	},
	
	/** addFilteredDataInStore  -  function
	 *  @param - fromStoreName  -  Name of Store from which data is received
	 *  @param - toStoreName    -  Name of Store in which data is set
  	 *  @param - filter	 	    -  filter object used for filtering
	 *	eg: {
	 * 			key:'Store_Status',
     *          value:'ACTIVE'		 
	 *	    }  
	 */
	addFilteredDataInStore:function(fromStoreName, toStoreName, filter) {
		var fromStore = Ext.getStore(fromStoreName);
		var toStore = Ext.getStore(toStoreName);
                
                toStore.removeAll();
                toStore.sync();
		if(!(filter instanceof Object))
			return;
		if(fromStore && filter.key && filter.value)
			fromStore.filter(filter.key,filter.value);
		if(toStore)
			toStore.add(fromStore.getData().items);
		if(fromStore)
			fromStore.clearFilter();	
	}
});