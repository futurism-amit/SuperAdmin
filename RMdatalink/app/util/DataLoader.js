Ext.define('RMdatalink.util.DataLoader', {
    singleton: true,
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);

       RMdatalink.iwa = Ext.create('RMdatalink.util.iwa');
      // RMdatalink.iwa = RMdatalink.util.iwa.create() ;
        RMdatalink.iwa.ws(function(sct)
        {
            sct.on('connect', function()
            {
                console.log('socket connected.');

                RMdatalink.iwa.fireEvent('socket.connected', sct);
                
            });
        });
     
    },
    //UPDATING BUILD
     requires:["RMdatalink.util.iwa"],
    config: {
        /*
         Default Pagination Values.
        
         thease parameters are also available for stores :afte getting maximum no of pages available please set store.setTotalPages(totalPagesAvailble);
         */

        pageSize: 50,
        pageNo: 0,
        totalPages: 0,
        /*
         if caching is enable stores save there previous page data, else not. 
         */
        enableCachig: false
    },
    /** createProxy  -  function
     *  @param - proxyObject  		
     *  eg: {
     *			type: 'sql',
     *			batchActions: false,
     *			table: 'xyz'
     *   	}
     */

    /*  save data available in store (i.e. cache data in store for current page no */
    cacheCurrentDataForStore: function(storeId) {
        
        var store = Ext.getStore(storeId);
        var data = this.getArryFormDataFromStore(store);
        
        if(data.length > 0)
        {
            var key = store.getPageNo();
            var value = data;

            store.config.cachedData[key] = value ;

            console.log("cached store is %S",store);
        }
    },
            
     checkAndReturnPagePresentInCache:function(storeId,pageNo){
        var store = Ext.getStore(storeId);
        var cacheData = store.getCachedData();
        
        if(cacheData[pageNo]){
            return cacheData[pageNo];
        }
        
        return null;
     },       
            
    getArryFormDataFromStore: function(store) {

        var data = store.getData().all;

        var dataToReturn = [];

        for (var i = 0; i < data.length; i++) {

            dataToReturn.push(data[i].data);
        }

        return dataToReturn;

   },
     
     loadStoreFromGivenData:function(storeId,data){
        var store = Ext.getStore(storeId);    
        store.removeAll();
        store.sync();
        
        store.setData(data);
        store.sync();
     },

    loadStoreFromDBPaged: function(scope, pageNo, pageSize, storeName, rootProperty, coll, successCallBack, failuerCallBack)
    {

        RMdatalink.iwa.rdl.loadStorePaged(scope, pageNo, pageSize, storeName, rootProperty, coll, function()
        {
            console.log(arguments , storeName);
            successCallBack.apply(window , arguments);
        });
       
    },
        
    loadStoreFromDB: function(scope, storeName, rootProperty, coll)
    {

        RMdatalink.iwa.rdl.loadStore(scope, storeName, rootProperty, coll, function()
        {
            //console.log('*** store is loaded: %s', storeName);
        });

    },

    //This Method loads all the store at a time.
    doLoadStoresForRMDataLink: function() {
        var _this = this;
        var scope = _this.loadScope;

        this.loadProductDetailStore(scope, 1, _this.getpageSize(), _this.getEnableCaching());
        this.loadVendorDetailStore(scope, 1, _this.getpageSize(), _this.getEnableCaching());
        this.loadRetailerMasterStore(scope, 1, _this.getpageSize(), _this.getEnableCaching());
        this.loadInhouseMasterStore(scope, 1, _this.getpageSize(), _this.getEnableCaching());
        this.loadDiscountMasterStore(scope, 1, _this.getpageSize(), _this.getEnableCaching());
        this.loadNotificationStore(scope, 1, _this.getpageSize(), _this.getEnableCaching());
        this.loadBillingMasterStore(scope, 1, _this.getpageSize(), _this.getEnableCaching());
    },
    /*
     Set/Alter Default Pagination Values.
     */
    setPagingVariables: function(pageNo, pageSize, enableCachig) {
        var _this = this;
        if (pageNo) {
            _this.setPageNo(pageNo);
        }
        if (pageSize) {
            _this.setPageSize(pageSize);
        }
        if (enableCachig) {
            _this.setEnableCaching(enableCachig);
        }
    },
    loadStoresForRMDataLink: function(scope) {

        var _this = this;

        _this.loadScope = scope;

        Ext.Function.defer(_this.doLoadStoresForRMDataLink, 1200, _this);
    },
            
         
      loadTestStore: function(scope, pageNo, pageSize, enableCachig, successCallBack, failuerCallBack) {
        if(enableCachig){
              this.cacheCurrentDataForStore('TestStore');
              var data = this.checkAndReturnPagePresentInCache('TestStore',pageNo);
              if(data){
                  
                  this.loadStoreFromGivenData('TestStore',data);
                  successCallBack();
                  return ;
              }
              
        }
        
         this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'TestStore', 'test', dbEnv +'rdl_test_collection', successCallBack, failuerCallBack);
    },  
    
    
     sendNewRecordToTestStore: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);

        RMdatalink.iwa.rdl.addToStore(record, store, succescall, errorcall, function()
        {
            console.log('*** add to store: %s', store.getStoreId());
        })
    },       
    loadTechLogStore: function(scope, pageNo, pageSize, enableCachig, successCallBack, failuerCallBack) {
        if(enableCachig){
              this.cacheCurrentDataForStore('TechSupportLogsStore');
              var data = this.checkAndReturnPagePresentInCache('TechSupportLogsStore',pageNo);
              if(data){
                  
                  this.loadStoreFromGivenData('TechSupportLogsStore',data);
                  successCallBack();
                  return ;
              }
              
        }
        
        // RMdatalink.util.DataHandler.loadTechSupportLogsStore(scope,successCallBack,failuerCallBack);
         this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'TechSupportLogsStore', 'tech_support_logs', dbEnv +'rdl_tech_support_logs', successCallBack, failuerCallBack);
    },  
            
    loadPermissionsStore: function(scope, pageNo, pageSize, enableCachig, successCallBack, failuerCallBack) {
        if(enableCachig){
              this.cacheCurrentDataForStore('PermisstionsStore');
              var data = this.checkAndReturnPagePresentInCache('PermisstionsStore',pageNo);
              if(data){
                  
                  this.loadStoreFromGivenData('PermisstionsStore',data);
                  successCallBack();
                  return ;
              }
              
        }
        
        // RMdatalink.util.DataHandler.loadTechSupportLogsStore(scope,successCallBack,failuerCallBack);
         this.loadStoreFromDBPaged(scope, pageNo, 100,  'PermisstionsStore', 'user_roles',dbEnv + 'rdl_vendordetailrecords', successCallBack, failuerCallBack);
    },  
    
    
        loadProductRMProStore: function(scope, pageNo, pageSize, enableCachig, successCallBack, failuerCallBack) {
        if(enableCachig){
              this.cacheCurrentDataForStore('products.RMProStore');
              var data = this.checkAndReturnPagePresentInCache('products.RMProStore',pageNo);
              if(data){
                  
                  this.loadStoreFromGivenData('products.RMProStore',data);
                  successCallBack();
                  return ;
              }
              
        }
        
        // RMdatalink.util.DataHandler.loadTechSupportLogsStore(scope,successCallBack,failuerCallBack);
         this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'products.RMProStore', 'modules', dbEnv +'rdl_product_rm_pro', successCallBack, failuerCallBack);
    },  
    
    
     loadProductDatalinkStore: function(scope, pageNo, pageSize, enableCachig, successCallBack, failuerCallBack) {
        if(enableCachig){
              this.cacheCurrentDataForStore('products.DatalinkMain');
              var data = this.checkAndReturnPagePresentInCache('products.DatalinkMain',pageNo);
              if(data){
                  
                  this.loadStoreFromGivenData('products.DatalinkMain',data);
                  successCallBack();
                  return ;
              }
              
        }
        
        // RMdatalink.util.DataHandler.loadTechSupportLogsStore(scope,successCallBack,failuerCallBack);
         this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'products.DatalinkMain', 'modules', dbEnv +'rdl_product_datalink', successCallBack, failuerCallBack);
    },  
            
     
	     loadProductecomStore: function(scope, pageNo, pageSize, enableCachig, successCallBack, failuerCallBack) {
        if(enableCachig){
              this.cacheCurrentDataForStore('products.ecomMain');
              var data = this.checkAndReturnPagePresentInCache('products.ecomMain',pageNo);
              if(data){
                  
                  this.loadStoreFromGivenData('products.ecomMain',data);
                  successCallBack();
                  return ;
              }
              
        }
        
        // RMdatalink.util.DataHandler.loadTechSupportLogsStore(scope,successCallBack,failuerCallBack);
         this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'products.ecomMain', 'modules', dbEnv +'rdl_product_ecom', successCallBack, failuerCallBack);
    },  
            
	 
    //loads only notification store
    loadNotificationStore: function(scope, pageNo, pageSize, enableCachig, successCallBack, failuerCallBack) {
        if(enableCachig){
              this.cacheCurrentDataForStore('notificationsNew');
              var data = this.checkAndReturnPagePresentInCache('notificationsNew',pageNo);
              if(data){
                  
                  this.loadStoreFromGivenData('notificationsNew',data);
                  successCallBack();
                  return ;
              }
              
        }
        
        // RMdatalink.util.DataHandler.loadNotificationStore(scope,successCallBack,failuerCallBack);
         this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'notificationsNew', 'New_Notifications', dbEnv +'rdl_new_notifications', successCallBack, failuerCallBack);
    },
    //loads only Billing store
    loadBillingMasterStore: function(scope, pageNo, pageSize,enableCachig,successCallBack,failuerCallBack) {

             if(enableCachig){
                    this.cacheCurrentDataForStore('billingMasterStore');
                    var data = this.checkAndReturnPagePresentInCache('billingMasterStore',pageNo);
                    if(data){

                        this.loadStoreFromGivenData('billingMasterStore',data);
                        successCallBack();
                        return ;
                    }
              
                }
          //  RMdatalink.util.DataHandler.loadBillingMasterStore(scope,successCallBack,failuerCallBack);  
             this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'billingMasterStore', 'billingDetailRecords',dbEnv + 'rdl_billingdetailrecords', successCallBack, failuerCallBack);
    },
    //loads only Product detailed store
    loadProductDetailStore: function(scope, pageNo, pageSize,enableCachig,successCallBack,failuerCallBack) {

                 if(enableCachig){
                    this.cacheCurrentDataForStore('productDetailsRecordsStore');
                    var data = this.checkAndReturnPagePresentInCache('productDetailsRecordsStore',pageNo);
                    if(data){

                        this.loadStoreFromGivenData('productDetailsRecordsStore',data);
                        successCallBack();
                        return ;
                    }
              
                }
                
             this.loadStoreFromDBPaged(scope, pageNo, pageSize, 'pricing.MainStore', 'productDetailRecords', dbEnv +'rdl_productdetailrecords', successCallBack, failuerCallBack);        
            //RMdatalink.util.DataHandler.loadProductDetailStore(scope,successCallBack,failuerCallBack);  

        //  this.loadStoreFromDBPaged(scope, pageNo, pageSize, 'productDetailsRecordsStore', 'productDetailRecords', dbEnv +'rdl_productdetailrecords', successCallBack, failuerCallBack);
    },
    //loads only Vendor detailed store
    loadVendorDetailStore: function(scope, pageNo, pageSize,enableCachig,successCallBack,failuerCallBack) {

                
                        if(enableCachig){
                    this.cacheCurrentDataForStore('vendorDetailsRecodsStore');
                    var data = this.checkAndReturnPagePresentInCache('vendorDetailsRecodsStore',pageNo);
                    if(data){

                        this.loadStoreFromGivenData('vendorDetailsRecodsStore',data);
                        successCallBack();
                        return ;
                    }
              
                }
         //  RMdatalink.util.DataHandler.loadVendorDetailStore(scope,successCallBack,failuerCallBack);  

           this.loadStoreFromDBPaged(scope, pageNo, 100,  'vendorDetailsRecodsStore', 'vendorDetailRecords', dbEnv +'rdl_vendordetailrecords', successCallBack, failuerCallBack);

    },
    //loads only Retailer master store
    loadRetailerMasterStore: function(scope, pageNo, pageSize, enableCachig,successCallBack,failuerCallBack){
        
//                var store = Ext.getStore('retailersMaster');    
//                store.removeAll();
//                store.sync();
//        
                if(enableCachig){
                    this.cacheCurrentDataForStore('retailersMaster');
                    var data = this.checkAndReturnPagePresentInCache('retailersMaster',pageNo);
                    if(data){

                        this.loadStoreFromGivenData('retailersMaster',data);
                        successCallBack();
                        return ;
                    }
              
                }
          //  RMdatalink.util.DataHandler.loadRetailerMasterStore(scope,successCallBack,failuerCallBack);     
            this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'retailersMaster', 'masterRetailerRecords', dbEnv +'rdl_masterretailerrecords', successCallBack, failuerCallBack);
    },
    //loads only Inhouse master store
    loadInhouseMasterStore: function(scope, pageNo, pageSize,enableCachig,successCallBack,failuerCallBack) {

        
                if(enableCachig){
                    this.cacheCurrentDataForStore('inhouseMasterStore');
                    var data = this.checkAndReturnPagePresentInCache('inhouseMasterStore',pageNo);
                    if(data){

                        this.loadStoreFromGivenData('inhouseMasterStore',data);
                        successCallBack();
                        return ;
                    }
              
                }
      //  RMdatalink.util.DataHandler.loadInhouseMasterStore(scope,successCallBack,failuerCallBack);  

        this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'inhouseMasterStore', 'inhouseRecords', dbEnv +'rdl_inhouserecords', successCallBack, failuerCallBack);
    },
    //loads only Discount Master store
    loadDiscountMasterStore: function(scope, pageNo, pageSize,enableCachig,successCallBack,failuerCallBack) {
        
                  if(enableCachig){
                    this.cacheCurrentDataForStore('discountsMasterStore');
                    var data = this.checkAndReturnPagePresentInCache('discountsMasterStore',pageNo);
                    if(data){

                        this.loadStoreFromGivenData('discountsMasterStore',data);
                        successCallBack();
                        return ;
                    }
              
                }
       //   RMdatalink.util.DataHandler.loadDiscountMasterStore(scope,successCallBack,failuerCallBack);  

         this.loadStoreFromDBPaged(scope, pageNo, pageSize,  'discountsMasterStore', 'discounts', dbEnv +'rdl_discounts', successCallBack, failuerCallBack);

    },
    
                //loads only Vendor master store
    loadVendorMasterStore: function(scope, pageNo, pageSize,enableCachig,successCallBack,failuerCallBack) {
        console.log("Method to load Vendors Master data. Used Store is :: vendorsMaster");
           //	 Expected JSON Structure - Structure is big it is pasted at the end of this file.


                  if(enableCachig){
                    this.cacheCurrentDataForStore('vendors.Master');
                    var data = this.checkAndReturnPagePresentInCache('vendors.Master',pageNo);
                    if(data){
			
                        this.loadStoreFromGivenData('vendors.Master',data);
                        successCallBack();
                        return ;
                    }
              
                }
   //  RMdatalink.util.DataHandler.loadVendorMasterStore(scope,successCallBack,failuerCallBack); 

      this.loadStoreFromDBPaged(scope, pageNo, 100,  'vendors.Master', 'masterVendorRecords', dbEnv +'rdl_vendor_masters',function(){
	  
	  successCallBack();
	  },failuerCallBack);
 },               
            
            
    sendNewRecordForRetailerToServer: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);

        RMdatalink.iwa.rdl.addToStore(record, store, succescall, errorcall, function()
        {
            console.log('*** add to store: %s', store.getStoreId());
        })
    },
    //get called when record get updated in Retailer store
    onRetailerMasterStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
        console.log("This is a retailersMaster Store update callback.Please update the record on the server: %O", arguments);

        RMdatalink.iwa.rdl.updateStore(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts, function()
        {
            console.log('*** store updated: %s', store.getStoreId());
        });
    },
    //get called when record get removed from Retailer Master store
    onRetailerMasterStoreRecordRemoved: function(store, records, indices, eOpts) {
        console.log("This is a retailersMaster Store update callback.Please update the record on the server: %O", arguments);

        RMdatalink.iwa.rdl.removeFromStore(store, records, indices, eOpts, function()
        {
            console.log('*** removed from store: %s', store.getStoreId());
        });
    },
    // CRUD Operations for In House Master Store ---------------------------------------      

    //get called when new record is added in In House Master store
    sendNewRecordForInHouseToServer: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);
        RMdatalink.iwa.rdl.addToStore(record, store, succescall, errorcall, function()
        {
            console.log('*** add to store: %s', store.getStoreId());
        });
    },
    //get called when record get updated in In House store
    onInHouseStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
           RMdatalink.iwa.rdl.updateStore(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts, function()
        {
            console.log('*** store updated: %s', store.getStoreId());
        });
        
        console.log("This is a inhouseMasterStore Store update callback.Please update the record on the server: %O", arguments);
    },
    //get called when record get removed from In House Master store
    onInHouseMasterStoreRecordRemoved: function(store, records, indices, eOpts) {
      
        
        console.log("This is a inhouseMasterStore Store update callback.Please update the record on the server: %O", arguments);
    },
    // CRUD Operations for Discount Master Store ---------------------------------------

    //get called when new record is added in Discounts Master store
    sendNewRecordForDiscountsToServer: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);
        console.log("Note :: Please use passed store i.e." + store.getStoreId() + " Give success or error callback");
    },
    //get called when record get updated in Discounts store
    onDiscountsStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
       
        RMdatalink.iwa.rdl.updateStore(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts, function()
        {
            console.log('*** store updated: %s', store.getStoreId());
        });
        
        console.log("This is a discountsMasterStore Store update callback.Please update the record on the server: %O", arguments);
    },
    //get called when record get removed from Discounts Master store
    onDiscountsMasterStoreRecordRemoved: function(store, records, indices, eOpts) {
        console.log("This is a discountsMasterStore Store update callback.Please update the record on the server: %O", arguments);
    },
    // CRUD Operations for Pricing Master Store ---------------------------------------     

    //get called when new record is added in Pricing Master store
    sendNewRecordForPricingToServer: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);
        console.log("Note :: Please use passed store i.e." + store.getStoreId() + " Give success or error callback");
    },
    //get called when record get updated in Pricing store
    onPricingStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
        console.log("This is a productDetailsRecordsStore Store update callback.Please update the record on the server: %O", arguments);
    },
    //get called when record get removed from Pricing Master store
    onPricingMasterStoreRecordRemoved: function(store, records, indices, eOpts) {
        console.log("This is a productDetailsRecordsStore Store update callback.Please update the record on the server: %O", arguments);
    },
    // CRUD Operations for Discount Master Store ---------------------------------------

    //get called when new record is added in Billing Master store
    sendNewRecordForBillingToServer: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);
        console.log("Note :: Please use passed store i.e." + store.getStoreId() + " Give success or error callback");
    },
    //get called when record get updated in Billing store
    onBillingStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
        console.log("This is a billingMasterStore Store update callback.Please update the record on the server: %O", arguments);
    },
    //get called when record get removed from Billing Master store
    onBillingMasterStoreRecordRemoved: function(store, records, indices, eOpts) {
        console.log("This is a billingMasterStore Store update callback.Please update the record on the server: %O", arguments);
    },
    // CRUD Operations for Vendors Master Store ---------------------------------------     

    //get called when new record is added in Vendor Master store
    sendNewRecordForVendorToServer: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);
        console.log("Note :: Please use passed store i.e." + store.getStoreId() + " Give success or error callback");
    },
    //get called when record get updated in Vendor store
    onVendorStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
        console.log("This is a vendorDetailsRecodsStore Store update callback.Please update the record on the server: %O", arguments);
    },
    //get called when record get removed from Vendor Master store
    onVendorMasterStoreRecordRemoved: function(store, records, indices, eOpts) {
        console.log("This is a vendorDetailsRecodsStore Store update callback.Please update the record on the server: %O", arguments);
    },
    // CRUD Operations for Discount Master Store ---------------------------------------

    //get called when new record is added in Notifications Master store
    sendNewRecordForNotificationsToServer: function(record, store, succescall, errorcall)
    {
        console.log("This method would send new record to server: %O", arguments);
        console.log("Note :: Please use passed store i.e." + store.getStoreId() + " Give success or error callback");
    },
    //get called when record get updated in Notifications store
    onNotificationsStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {
        console.log("This is a notificationsNew Store update callback.Please update the record on the server: %O", arguments);
    },
    //get called when record get removed from Notifications Master store
    onNotificationsMasterStoreRecordRemoved: function(store, records, indices, eOpts) {
        console.log("This is a notificationsNew Store update callback.Please update the record on the server: %O", arguments);
    }




});



/*
 
 Retailers Master record - Structure
 
 {
 "masterRetailerRecords": [
 {
 "id": 1,
 "store_logo": "resources/images/logos/4.jpg",
 "store_name": "Abrash Rugs ",
 "store_owner_firstname": "Ishmael",
 "store_owner_lastname": "Abrash",
 "store_address_line1": "401 Milwaukee Road",
 "store_city": "Singalin",
 "store_state": "OH",
 "store_zip": "40555",
 "store_email": "ali@abrashrugs.com",
 "store_phone": "7073654287",
 "store_website": "www.abrashrugs.com",
 "store_type": "Brick & Mortar, Ecommerce site",
 "store_size_sq_ft": "2000",
 "store_location": "2",
 "store_employees": "12",
 "store_yr_business": "13",
 "store_inventory_tool": "SMART Rugs",
 "store_accounting_tool": "SMART Rugs",
 "store_alt_bussiness": "Owns restaurant called Shiraz",
 "store_percent_program": "60",
 "store_percent_oneof_kind": "35",
 "store_challenges": "Shrinkage, Employee Management, Not Computer Savvy",
 "store_advertising": "Radio, TV, Social media, newspaper",
 "store_monthly_budget": "12000",
 "store_monthly_subscription": "100.32",
 "store_status": "ACTIVE",
 "store_note": "Decided on another POS. Is interested in Datalink.",
 "store_inactive_reason": "Canceled",
 "store_pending_approval": "73%",
 "store_products_datalink": true,
 "store_products_ecatalog": false,
 "store_products_smart_cart": false,
 "store_products_rm_plc": true,
 "store_products_irugs": false,
 "store_created_in_past": "2014/1/8",
 "store_modified_in_past": "2014/1/30",
 "store_performance": "GOOD",
 "user_since": "2014/02/10",
 "last_login": "2014/03/12",
 "last_export": "2014/03/09",
 "order_no": "1002",
 "reseller": "Michael Dempsey",
 "dos_and_donts": [
 {
 "notification": "Don't call him Mr.Abrash"
 },
 {
 "notification": "Ask to speak to his daughter concerning technical issues"
 },
 {
 "notification": "Don't mention his ex wife"
 },
 {
 "notification": "Offer him unlimited technical support"
 }
 ],
 "follow_ups": [
 {
 "notification": "Call to show him repricing"
 },
 {
 "notification": "Met with Patrick at Vegas show"
 },
 {
 "notification": "Met with Patrick at Vegas show"
 }
 ],
 "blue_note": "temporary note",
 "store_in_store_vendors": [
 {
 "name": "Vendor One",
 "design": "37",
 "sku": "5000",
 "status": true
 },
 {
 "name": "Vendor Two",
 "design": "78",
 "sku": "2000",
 "status": false
 },
 {
 "name": "Vendor Three",
 "design": "37",
 "sku": "6000",
 "status": true
 },
 {
 "name": "Vendor Four",
 "design": "78",
 "sku": "2500",
 "status": false
 },
 {
 "name": "Vendor Five",
 "design": "34",
 "sku": "1300",
 "status": false
 },
 {
 "name": "Vendor Six",
 "design": "56",
 "sku": "4567",
 "status": true
 },
 {
 "name": "Vendor Seven",
 "design": "8",
 "sku": "8900",
 "status": false
 },
 {
 "name": "Vendor Eight",
 "design": "3",
 "sku": "9322",
 "status": false
 },
 {
 "name": "Vendor Nine",
 "design": "34",
 "sku": "1000",
 "status": true
 },
 {
 "name": "Vendor Ten",
 "design": "37",
 "sku": "2000",
 "status": true
 },
 {
 "name": "Vendor Eleven",
 "design": "78",
 "sku": "6000",
 "status": false
 },
 {
 "name": "Vendor Twelve",
 "design": "34",
 "sku": "2500",
 "status": false
 },
 {
 "name": "Vendor Thirteen",
 "design": "37",
 "sku": "1300",
 "status": true
 },
 {
 "name": "Vendor Fourteen",
 "design": "78",
 "sku": "4567",
 "status": true
 },
 {
 "name": "Vendor Fifteen",
 "design": "34",
 "sku": "8900",
 "status": true
 },
 {
 "name": "Vendor Sixteen",
 "design": "56",
 "sku": "9322",
 "status": false
 }
 ],
 "store_online_vendors": [
 {
 "name": "Vendor Eight",
 "design": "37",
 "sku": "400",
 "status": true
 },
 {
 "name": "Vendor Eleven",
 "design": "78",
 "sku": "300",
 "status": false
 },
 {
 "name": "Vendor Fifteen",
 "design": "37",
 "sku": "3400",
 "status": true
 },
 {
 "name": "Vendor Five",
 "design": "78",
 "sku": "234",
 "status": false
 },
 {
 "name": "Vendor Four",
 "design": "8",
 "sku": "6000",
 "status": false
 },
 {
 "name": "Vendor Fourteen",
 "design": "37",
 "sku": "1234",
 "status": true
 },
 {
 "name": "Vendor Nine",
 "design": "78",
 "sku": "1300",
 "status": false
 },
 {
 "name": "Vendor One",
 "design": "8",
 "sku": "4564",
 "status": false
 },
 {
 "name": "Vendor Seven",
 "design": "3",
 "sku": "2000",
 "status": true
 },
 {
 "name": "Vendor Six",
 "design": "37",
 "sku": "675",
 "status": true
 },
 {
 "name": "Vendor Sixteen",
 "design": "8",
 "sku": "8",
 "status": false
 },
 {
 "name": "Vendor Ten",
 "design": "3",
 "sku": "1300",
 "status": false
 },
 {
 "name": "Vendor Thirteen",
 "design": "34",
 "sku": "567",
 "status": true
 },
 {
 "name": "Vendor Three",
 "design": "37",
 "sku": "8900",
 "status": true
 },
 {
 "name": "Vendor Twelve",
 "design": "78",
 "sku": "9322",
 "status": true
 },
 {
 "name": "Vendor Two",
 "design": "34",
 "sku": "25",
 "status": false
 }
 ],
 "manager_photo_url": "resources/images/logos/1.jpg",
 "manager_firstname": "Ali ",
 "manager_lastname": "Abrash",
 "manager_email": "ali@abrashrugs.com",
 "manager_phone": "7073654287",
 "manager_linkedin": "linkedin.com/ali.abrash",
 "manager_facebook": "facebook.com/ali.abrash",
 "manager_twitter": "twitter.com/ali.abrash",
 "manager_rd_years_at_store": "6",
 "manager_rd_wife": "Preeti Abrash",
 "manager_rd_aniversary": "date",
 "manager_rd_relatives": "Uncle still in rug business?",
 "manager_rd_dob": "1982/12/12",
 "manager_rd_hobbies": "Basketball, Skiing, Jazz Music",
 "manager_rd_car_of_choice": "Volkswagon",
 "manager_rd_alt_phone": "7073654287",
 "manager_rd_alt_email": "ali.abrash@gmail.com",
 "manager_rd_website": "www.abrashrugs.com",
 "photos": [
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/5.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/6.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/7.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/8.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/9.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/10.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image": "resources/images/logos/5.jpg"
 }
 ],
 "attachments": [
 {
 "filename": "Ali Abrash Pricing.csv",
 "file": "tempFile",
 "date": "2014/1/7"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file": "tempFile",
 "date": "2014/1/4"
 },
 {
 "filename": "Ali Abrash Pricing.docx",
 "file": "tempFile",
 "date": "2014/1/2"
 },
 {
 "filename": "Ali Abrash Video.mp4",
 "file": "tempFile",
 "date": "2014/1/1"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file": "tempFile",
 "date": "2014/1/2"
 },
 {
 "filename": "Ali Abrash Temp.doc",
 "file": "tempFile",
 "date": "2014/1/25"
 },
 {
 "filename": "Ali Abrash Contract.doc",
 "file": "tempFile",
 "date": "2014/1/22"
 }
 ],
 "notes": [
 {
 "crmuser": "Sophia Motalib",
 "date": "2014/1/5",
 "subject": "Called about password reset",
 "adminonly": false
 },
 {
 "crmuser": "Ali Sanford",
 "date": "2014/1/1",
 "subject": "Called about password reset",
 "adminonly": true
 },
 {
 "crmuser": "Sophia Motalib",
 "date": "2014/1/8",
 "subject": "Called about database issue",
 "adminonly": false
 },
 {
 "crmuser": "Michael Getz",
 "date": "2014/1/2",
 "subject": "Called about password reset",
 "adminonly": true
 },
 {
 "crmuser": "Sophia Motalib",
 "date": "2014/1/10",
 "subject": "Called about database issue",
 "adminonly": false
 },
 {
 "crmuser": "Michael Getz",
 "date": "2014/1/3",
 "subject": "Called about Broncos score",
 "adminonly": true
 },
 {
 "crmuser": "Michael Getz",
 "date": "2014/1/1",
 "subject": "Called about password reset",
 "adminonly": false
 }
 ],
 "crms": [
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about xyz"
 },
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about xyzasdf"
 },
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about xyasdfz"
 },
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about xsdfgyz"
 },
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about asdfxyz"
 },
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about dsfxyz"
 },
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about sxyz"
 },
 {
 "photo_url": "resources/images/logos/1.jpg",
 "crm_user": "Michael Getz",
 "date": "2014/1/13",
 "length": "12",
 "caller": "Ali Abrash ",
 "comments": "Called about xyz"
 }
 ],
 "manager_recent_activity": [
 {
 "activity_description": "Activity One",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Two",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Three",
 "activity_date": "2014/1/13",
 "activity_state": true
 }
 ],
 "manager_rd_childs": [
 {
 "child_name": "OneChild",
 "child_age": "15"
 },
 {
 "child_name": "TwoChild",
 "child_age": "25"
 }
 ],
 "manager_rd_partner": [
 {
 "partner_name": "Partner One"
 },
 {
 "partner_name": "Partner Two"
 }
 ],
 "manager_teamusers": [
 {
 "tu_image_url": "resources/images/logos/1.jpg",
 "tu_username": "JonahHill",
 "tu_firstname": "Jonah",
 "tu_lastname": "Hill",
 "tu_email": "jonah.hill@gmail.com",
 "tu_phone": "6077451457",
 "tu_comments": "Comment Here.",
 "tu_access_rights": [
 {
 "right_name": "Access Data and Images",
 "right_status": true
 },
 {
 "right_name": "Rebranding",
 "right_status": true
 },
 {
 "right_name": "Repricing",
 "right_status": false
 },
 {
 "right_name": "Export",
 "right_status": true
 }
 ],
 "tu_recent_activity": [
 {
 "activity_description": "Activity One",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Two",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Three",
 "activity_date": "2014/1/13",
 "activity_state": true
 }
 ],
 "dos_and_donts": [
 {
 "notification": "Don't call him Mr.Abrash"
 },
 {
 "notification": "Ask to speak to his daughter concerning technical issues"
 },
 {
 "notification": "Don't mention his ex wife"
 },
 {
 "notification": "Offer him unlimited technical support"
 }
 ],
 "follow_ups": [
 {
 "notification": "Call to show him repricing"
 },
 {
 "notification": "Met with Patrick at Vegas show"
 },
 {
 "notification": "Met with Patrick at Vegas show"
 }
 ],
 "tu_relationsheep_details": {
 "linkedin": "linkedin.com/ali.abrash",
 "facebook": "facebook.com/ali.abrash",
 "twitter": "twitter.com/ali.abrash",
 "rd_years_at_store": "6",
 "rd_wife": "Preeti Abrash",
 "rd_aniversary": "date",
 "rd_relatives": "Uncle still in rug business?",
 "rd_dob": "date",
 "rd_hobbies": "Basketball, Skiing, Jazz Music",
 "rd_car_of_choice": "Volkswagon",
 "rd_alt_phone": "(707) 365-4287",
 "d_alt_email": "ali.abrash@gmail.com",
 "rd_website": "www.abrashrugs.com",
 "rd_childs": [
 {
 "child_name": "OneChild",
 "child_age": "15"
 },
 {
 "child_name": "TwoChild",
 "child_age": "25"
 }
 ],
 "rd_partner": [
 {
 "partner_name": "Partner One"
 },
 {
 "partner_name": "Partner Two"
 }
 ]
 }
 },
 {
 "tu_image_url": "resources/images/logos/1.jpg",
 "tu_username": "Marcadams",
 "tu_firstname": "Marc",
 "tu_lastname": "Adams",
 "tu_email": "marc.adams@hotmail.com",
 "tu_phone": "6077456565",
 "tu_comments": "Comments here for this user.",
 "tu_access_rights": [
 {
 "right_name": "Access Data and Images",
 "right_status": false
 },
 {
 "right_name": "Rebranding",
 "right_status": true
 },
 {
 "right_name": "Repricing",
 "right_status": false
 },
 {
 "right_name": "Export",
 "right_status": true
 }
 ],
 "tu_recent_activity": [
 {
 "activity_description": "Activity One",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Two",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Three",
 "activity_date": "2014/1/13",
 "activity_state": true
 }
 ],
 "dos_and_donts": [
 {
 "notification": "Don't call him Mr.Abrash"
 },
 {
 "notification": "Ask to speak to his daughter concerning technical issues"
 },
 {
 "notification": "Don't mention his ex wife"
 },
 {
 "notification": "Offer him unlimited technical support"
 }
 ],
 "follow_ups": [
 {
 "notification": "Call to show him repricing"
 },
 {
 "notification": "Met with Patrick at Vegas show"
 },
 {
 "notification": "Met with Patrick at Vegas show"
 }
 ],
 "tu_relationsheep_details": {
 "linkedin": "linkedin.com/ali.abrash",
 "facebook": "facebook.com/ali.abrash",
 "twitter": "twitter.com/ali.abrash",
 "rd_years_at_store": "6",
 "rd_wife": "Preeti Abrash",
 "rd_aniversary": "date",
 "rd_relatives": "Uncle still in rug business?",
 "rd_dob": "date",
 "rd_hobbies": "Basketball, Skiing, Jazz Music",
 "rd_car_of_choice": "Volkswagon",
 "rd_alt_phone": "(707) 365-4287",
 "d_alt_email": "ali.abrash@gmail.com",
 "rd_website": "www.abrashrugs.com",
 "rd_childs": [
 {
 "child_name": "OneChild",
 "child_age": "15"
 },
 {
 "child_name": "TwoChild",
 "child_age": "25"
 }
 ],
 "rd_partner": [
 {
 "partner_name": "Partner One"
 },
 {
 "partner_name": "Partner Two"
 }
 ]
 }
 }
 ]
 }
 ]
 }
 
 
 
 // JSON structure for In House
 
 {
 "inhouseRecords":
 {
 "users":[
 {
 "id":1,
 "image_url": "resources/images/logos/1.jpg",
 "username": "JonahHill",
 "firstname": "Jonah",
 "lastname": "Hill",
 "email": "jonah.hill@gmail.com",
 "phone": "6077451457",
 "city":"Louisville",
 "zip": "40202",
 "comments": "Comment Here.",
 "blue_note":"Important Note",
 "follow_ups":[
 {"notification":"Call to show him repricing"},
 {"notification":"Met with Patrick at Vegas show"},
 {"notification":"Met with Patrick at Vegas show"}
 ],
 "dos_and_donts":[
 {
 "notification":"Don't call him Mr.Abrash"
 },
 {
 "notification":"Ask to speak to his daughter concerning technical issues"
 },
 {
 "notification":"Don't mention his ex wife"
 },
 {
 "notification":"Offer him unlimited technical support"
 }
 ],
 
 "linkedin": "linkedin.com/ali.abrash",
 "facebook": "facebook.com/ali.abrash",
 "twitter": "twitter.com/ali.abrash",
 "years_at_store": "6",
 "relationalDetails":{
 "wife": "Preeti Abrash",
 "aniversary": "date",
 "relatives": "Uncle still in rug business?",
 "dob": "1982/12/12",
 "hobbies": "Basketball, Skiing, Jazz Music",
 "rd_car_of_choice": "Volkswagon",
 "alt_phone": "7073654287",
 "alt_email": "ali.abrash@gmail.com",
 "childs": [
 {
 "child_name": "OneChild",
 "child_age": "15"
 },
 {
 "child_name": "TwoChild",
 "child_age": "25"
 }
 ],
 "partners": [
 {
 "partner_name": "Partner One"
 },
 {
 "partner_name": "Partner Two"
 }
 ]
 },
 "website": "www.abrashrugs.com",
 "photos": [
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/5.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/6.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/7.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/8.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/9.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/10.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/5.jpg"
 }
 ],
 
 "attachments":
 [
 {
 "filename": "Ali Abrash Pricing.csv",
 "file":"tempFile",
 "date":"2014/1/7"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file":"tempFile",
 "date":"2014/1/4"
 },
 {
 "filename": "Ali Abrash Pricing.docx",
 "file":"tempFile",
 "date":"2014/1/2"
 },
 {
 "filename": "Ali Abrash Video.mp4",
 "file":"tempFile",
 "date":"2014/1/1"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file":"tempFile",
 "date":"2014/1/2"
 },
 {
 "filename": "Ali Abrash Temp.doc",
 "file":"tempFile",
 "date":"2014/1/25"
 },
 {
 "filename": "Ali Abrash Contract.doc",
 "file":"tempFile",
 "date":"2014/1/22"
 }
 ],
 "notes":
 [
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/5",
 "subject":"Called about password reset",
 "adminonly":false
 },
 {
 "crmuser":"Ali Sanford",
 "date":"2014/1/1",
 "subject":"Called about password reset",
 "adminonly":true
 },
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/8",
 "subject":"Called about database issue",
 "adminonly":false
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/2",
 "subject":"Called about password reset",
 "adminonly":true
 },
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/10",
 "subject":"Called about database issue",
 "adminonly":false
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/3",
 "subject":"Called about Broncos score",
 "adminonly":true
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/1",
 "subject":"Called about password reset",
 "adminonly":false
 }
 ],
 
 "recent_activity": [
 {
 "activity_description": "Activity One",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Two",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Three",
 "activity_date": "2014/1/13",
 "activity_state": true
 }
 ],
 "linkedin": "linkedin.com/ali.abrash",
 "facebook": "facebook.com/ali.abrash",
 "twitter": "twitter.com/ali.abrash",
 "years_at_store": "6",
 "relationalDetails":{
 "wife": "Preeti Abrash",
 "aniversary": "date",
 "relatives": "Uncle still in rug business?",
 "dob": "1982/12/12",
 "hobbies": "Basketball, Skiing, Jazz Music",
 "rd_car_of_choice": "Volkswagon",
 "alt_phone": "7073654287",
 "alt_email": "ali.abrash@gmail.com",
 "childs": [
 {
 "child_name": "OneChild",
 "child_age": "15"
 },
 {
 "child_name": "TwoChild",
 "child_age": "25"
 }
 ],
 "partners": [
 {
 "partner_name": "Partner One"
 },
 {
 "partner_name": "Partner Two"
 }
 ]
 },
 "website": "www.abrashrugs.com",
 "photos": [
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/5.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/6.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/7.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/8.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/9.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/10.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/5.jpg"
 }
 ],
 
 "attachments":
 [
 {
 "filename": "Ali Abrash Pricing.csv",
 "file":"tempFile",
 "date":"2014/1/7"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file":"tempFile",
 "date":"2014/1/4"
 },
 {
 "filename": "Ali Abrash Pricing.docx",
 "file":"tempFile",
 "date":"2014/1/2"
 },
 {
 "filename": "Ali Abrash Video.mp4",
 "file":"tempFile",
 "date":"2014/1/1"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file":"tempFile",
 "date":"2014/1/2"
 },
 {
 "filename": "Ali Abrash Temp.doc",
 "file":"tempFile",
 "date":"2014/1/25"
 },
 {
 "filename": "Ali Abrash Contract.doc",
 "file":"tempFile",
 "date":"2014/1/22"
 }
 ],
 "notes":
 [
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/5",
 "subject":"Called about password reset",
 "adminonly":false
 },
 {
 "crmuser":"Ali Sanford",
 "date":"2014/1/1",
 "subject":"Called about password reset",
 "adminonly":true
 },
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/8",
 "subject":"Called about database issue",
 "adminonly":false
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/2",
 "subject":"Called about password reset",
 "adminonly":true
 },
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/10",
 "subject":"Called about database issue",
 "adminonly":false
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/3",
 "subject":"Called about Broncos score",
 "adminonly":true
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/1",
 "subject":"Called about password reset",
 "adminonly":false
 }
 ],
 
 "recent_activity": [
 {
 "activity_description": "Activity One",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Two",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Three",
 "activity_date": "2014/1/13",
 "activity_state": true
 }
 ],
 "access":"Manager",
 "position":"Vice President"
 
 }
 ],
 "reps":[
 {
 "id":1,
 "image_url": "resources/images/logos/1.jpg",
 "username": "JonahHill",
 "firstname": "Jonah",
 "lastname": "Hill",
 "email": "jonah.hill@gmail.com",
 "phone": "6077451457",
 "city":"Louisville",
 "zip": "40202",
 "comments": "Comment Here.",
 "blue_note":"Important Note",
 "follow_ups":[
 {"notification":"Call to show him repricing"},
 {"notification":"Met with Patrick at Vegas show"},
 {"notification":"Met with Patrick at Vegas show"}
 ],
 "dos_and_donts":[
 {
 "notification":"Don't call him Mr.Abrash"
 },
 {
 "notification":"Ask to speak to his daughter concerning technical issues"
 },
 {
 "notification":"Don't mention his ex wife"
 },
 {
 "notification":"Offer him unlimited technical support"
 }
 ],
 "linkedin": "linkedin.com/ali.abrash",
 "facebook": "facebook.com/ali.abrash",
 "twitter": "twitter.com/ali.abrash",
 "years_at_store": "6",
 "relationalDetails":{
 "wife": "Preeti Abrash",
 "aniversary": "date",
 "relatives": "Uncle still in rug business?",
 "dob": "1982/12/12",
 "hobbies": "Basketball, Skiing, Jazz Music",
 "rd_car_of_choice": "Volkswagon",
 "alt_phone": "7073654287",
 "alt_email": "ali.abrash@gmail.com",
 "childs": [
 {
 "child_name": "OneChild",
 "child_age": "15"
 },
 {
 "child_name": "TwoChild",
 "child_age": "25"
 }
 ],
 "partners": [
 {
 "partner_name": "Partner One"
 },
 {
 "partner_name": "Partner Two"
 }
 ]
 },
 "website": "www.abrashrugs.com",
 "photos": [
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/5.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/6.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/7.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/8.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/9.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/10.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/1.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/2.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/3.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/4.jpg"
 },
 {
 "imagename": "demoImage",
 "image":"resources/images/logos/5.jpg"
 }
 ],
 
 "attachments":
 [
 {
 "filename": "Ali Abrash Pricing.csv",
 "file":"tempFile",
 "date":"2014/1/7"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file":"tempFile",
 "date":"2014/1/4"
 },
 {
 "filename": "Ali Abrash Pricing.docx",
 "file":"tempFile",
 "date":"2014/1/2"
 },
 {
 "filename": "Ali Abrash Video.mp4",
 "file":"tempFile",
 "date":"2014/1/1"
 },
 {
 "filename": "Ali Abrash Pricing.doc",
 "file":"tempFile",
 "date":"2014/1/2"
 },
 {
 "filename": "Ali Abrash Temp.doc",
 "file":"tempFile",
 "date":"2014/1/25"
 },
 {
 "filename": "Ali Abrash Contract.doc",
 "file":"tempFile",
 "date":"2014/1/22"
 }
 ],
 "notes":
 [
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/5",
 "subject":"Called about password reset",
 "adminonly":false
 },
 {
 "crmuser":"Ali Sanford",
 "date":"2014/1/1",
 "subject":"Called about password reset",
 "adminonly":true
 },
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/8",
 "subject":"Called about database issue",
 "adminonly":false
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/2",
 "subject":"Called about password reset",
 "adminonly":true
 },
 {
 "crmuser":"Sophia Motalib",
 "date":"2014/1/10",
 "subject":"Called about database issue",
 "adminonly":false
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/3",
 "subject":"Called about Broncos score",
 "adminonly":true
 },
 {
 "crmuser":"Michael Getz",
 "date":"2014/1/1",
 "subject":"Called about password reset",
 "adminonly":false
 }
 ],
 
 "recent_activity": [
 {
 "activity_description": "Activity One",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Two",
 "activity_date": "2014/1/13",
 "activity_state": true
 },
 {
 "activity_description": "Activity Three",
 "activity_date": "2014/1/13",
 "activity_state": true
 }
 ],
 "access":"Manager",
 "company":"Emergin Resellers",
 "position":"Vice President"
 }
 ]  
 }
 }
 
 
 
 // Discounts
 
 {
 "discounts":{
 "datalink":[
 {
 "code":"FIRSTTIME",
 "status":"Active",
 "used":9,
 "startDate":"4/11/2013",
 "endDate":"4/11/2014",
 "comment":"Add Comment Here",
 "subscriptionValidity":{
 "months":10,
 "days":20
 },
 "extraConditions":
 {
 "usdTakenOffPerMonth":20,
 "percentDiscountTakenOffPerMonth":15
 },
 "id":1
 }
 
 ],
 "ecatalog":[
 {
 "code":"FIRSTTIME",
 "status":"Active",
 "used":9,
 "startDate":"4/11/2013",
 "endDate":"4/11/2014",
 "comment":"Add Comment Here",
 "subscriptionValidity":{
 "months":10,
 "days":20
 },
 "extraConditions":
 {
 "usdTakenOffPerMonth":20,
 "percentDiscountTakenOffPerMonth":15
 },	   
 "id":10
 }
 
 ],
 "smartcart":[
 {
 "code":"FIRSTTIME",
 "status":"Active",
 "used":9,
 "startDate":"4/11/2013",
 "endDate":"4/11/2014",
 "comment":"Add Comment Here",
 "subscriptionValidity":{
 "months":10,
 "days":20
 },
 "extraConditions":
 {
 "usdTakenOffPerMonth":20,
 "percentDiscountTakenOffPerMonth":15
 },	   
 "id":19
 }
 
 ],
 "rmplc":[
 {
 "code":"FIRSTTIME",
 "status":"Active",
 "used":9,
 "startDate":"4/11/2013",
 "endDate":"4/11/2014",
 "comment":"Add Comment Here",
 "subscriptionValidity":{
 "months":10,
 "days":20
 },
 "extraConditions":
 {
 "usdTakenOffPerMonth":20,
 "percentDiscountTakenOffPerMonth":15
 },	   
 "id":28
 }
 
 ],
 "irugz":[
 {
 "code":"FIRSTTIME",
 "status":"Active",
 "used":9,
 "startDate":"4/11/2013",
 "endDate":"4/11/2014",
 "comment":"Add Comment Here",
 "subscriptionValidity":{
 "months":10,
 "days":20
 },
 "extraConditions":
 {
 "usdTakenOffPerMonth":20,
 "percentDiscountTakenOffPerMonth":15
 },	   
 "id":37
 }
 
 ],
 "previousDiscounts":[
 {
 "code":"FIRSTTIME",
 "status":"Active",
 "used":9,
 "startDate":"4/11/2012",
 "endDate":"4/11/2014",
 "comment":"Add Comment Here",
 "subscriptionValidity":{
 "months":10,
 "days":20
 },   
 "id":46,
 "extraConditions":
 {
 "usdTakenOffPerMonth":20,
 "percentDiscountTakenOffPerMonth":15
 }
 
 }
 
 ]
 }
 
 }
 
 */