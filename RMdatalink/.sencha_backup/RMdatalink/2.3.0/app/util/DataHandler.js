

Ext.define('RMdatalink.util.DataHandler', {
    singleton: true,
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    config: {
    },
    //loads only Retailer master store
    loadRetailerMasterStore: function(scope, successCallBack, failuerCallBack) {
        var store = Ext.getStore('retailersMaster');
        function successCall() {
            RMdatalink.util.globalMethods.fillDataFromMasterStore();
        }
        function errorCall() {

        }



        this.fillStore(store, 'app/data/MasterRetailerRecords.json', false, {}, 'masterRetailerRecords', successCall, errorCall);

//		Expected JSON Structure - Structure is big it is pasted at the end of this file.

    },
    loadTechSupportLogsStore: function(scope, successCallBack, failuerCallBack) {
        var store = Ext.getStore('TechSupportLogsStore');
        function successCall() {
            successCallBack();
        }
        function errorCall() {
            failuerCallBack();
        }



        this.fillStore(store, 'app/data/TechSupportLogs.json', false, {}, 'tech_support_logs', successCall, errorCall);

//		Expected JSON Structure - Structure is big it is pasted at the end of this file.

    },
    //common method to fill store using AJAX request.        
    fillStore: function(store, url, useMask, params, rootProperty, successCall, errorCall) {
        if (useMask) {
            Ext.Viewport.setMasked(true);
        }
        var that = this;
        function successCallBack(response) {
            // alert("FILL SUCCESS");
            console.log(successCall);
            that.fillStoreWithNewData(store, JSON.parse(response.responseText)[rootProperty], successCall);
            if (useMask) {
                Ext.Viewport.unmask();
            }
            if (successCall)
            {
                successCall();
            }
        }
        function errorCallBack() {
            console.error(arguments);
            alert("Error In Loading Store");
            if (useMask) {
                Ext.Viewport.unmask();
            }
            if (errorCall)
            {
                errorCall();
            }
        }

        RMdatalink.util.NetworkManager.requestToserver(url, params, successCallBack, errorCallBack);


    },
    //loads only Notification store
    loadNotificationStore: function(scope, successCall, errorCall) {

        var store = Ext.getStore('notificationsNew');



        this.fillStore(store, 'app/data/New_Notifications.json', false, {}, 'New_Notifications', successCall, errorCall);


        /*
         
         Expected JSON Structure
         
         {
         "New_Notifications":[
         { 
         "notification":"Upgrades in repricing"
         }]
         }
         
         */


    },
    //loads only Billing store
    loadBillingMasterStore: function(scope, successCall, errorCall) {

        var store = Ext.getStore('billingMasterStore');


        this.fillStore(store, 'app/data/BillingDetailsRecords.json', false, {}, 'billingDetailRecords', successCall, errorCall);

        /*
         
         Expected JSON Structure
         
         { 
         "id":1,
         "status":"Paid",
         "overDue":"90",
         "owed":"305.55"          
         }
         
         //id : This id value refer to the retailers data.
         
         
         
         
         */

    },
    loadVendorMasterStore: function(scope, successCall, errorCall) {

        var store = Ext.getStore('vendors.Master');

        this.fillStore(store, 'app/data/masterVendorRecords.json', false, {}, 'masterVendorRecords', successCall, errorCall);

    },
    //loads only Product detailed store
    loadProductDetailStore: function(scope, successCall, errorCall) {

        var store = Ext.getStore('pricing.MainStore');

        this.fillStore(store, 'app/data/ProductDetailRecords.json', false, {}, 'productDetailRecords', successCall, errorCall);

        /*
         
         Expected JSON Structure
         
         {
         "id": 1,
         "product_name": "Datalink",
         "pricing_policy_sku_range": [
         {"id": 1, "from_sku": "0", "to_sku": "2500", "standard": "29", "promotional": "29"},
         {"id": 2, "from_sku": "2501", "to_sku": "5000", "standard": "49", "promotional": "49"},
         {"id": 3, "from_sku": "5001", "to_sku": "7500", "standard": "79", "promotional": "69"},
         {"id": 4, "from_sku": "7501", "to_sku": "10000", "standard": "99", "promotional": "99"},
         {"id": 5, "from_sku": "10001", "to_sku": "15000", "standard": "129", "promotional": "129"},
         {"id": 6, "from_sku": "15001", "to_sku": "20000", "standard": "149", "promotional": "29"},
         {"id": 7, "from_sku": "20001", "to_sku": "25000", "standard": "179", "promotional": "199"},
         {"id": 8, "from_sku": "25001", "to_sku": "100000", "standard": "199", "promotional": "29"}
         ],
         "pricing_policy_discounts_levels": [
         {"id": 1, "of_vendors": "5", "discount_level": "5"},
         {"id": 2, "of_vendors": "10", "discount_level": "10"},
         {"id": 3, "of_vendors": "15", "discount_level": "15"},
         {"id": 4, "of_vendors": "20", "discount_level": "20"},
         {"id": 5, "of_vendors": "25", "discount_level": "25"},
         {"id": 6, "of_vendors": "30", "discount_level": "30"},
         {"id": 7, "of_vendors": "35", "discount_level": "35"},
         {"id": 8, "of_vendors": "40", "discount_level": "40"}
         ],
         "functionality": [
         {"id": 1, "pricing_function": "MetaData", "standard_price": "9.00", "promotional_price": "9.00"},
         {"id": 2, "pricing_function": "Room Setting", "standard_price": "10.00", "promotional_price": "10.00"},
         {"id": 3, "pricing_function": "Corner Image", "standard_price": "5.00", "promotional_price": "5.00"},
         {"id": 4, "pricing_function": "Room Designer", "standard_price": "15.00", "promotional_price": "15.00"},
         {"id": 5, "pricing_function": "Rebranding", "standard_price": "10.00", "promotional_price": "9.00"},
         {"id": 6, "pricing_function": "Repricing", "standard_price": "10.00", "promotional_price": "9.00"}
         ]
         }
         
         // pricing_policy_sku_range.id : This should be unique id, since we are editing and updating record to server.
         // pricing_policy_discounts_levels.id : This should be unique id, since we are editing and updating record to server.
         // functionality.id : This should be unique id, since we are editing and updating record to server.
         
         
         
         
         
         */

    },
    //loads only Inhouse master store
    loadInhouseMasterStore: function(scope, successCall, errorCall) {

        var store = Ext.getStore('inhouseMasterStore');

        this.fillStore(store, 'app/data/InhouseRecords.json', false, {}, 'inhouseRecords', successCall, errorCall);

        /*
         
         Expected JSON Structure
         
         It is pasted at the end of the file.Under In House heading.
         
         
         */

    },
    //loads only Discount Master store
    loadDiscountMasterStore: function(scope, successCall, errorCall) {

        var store = Ext.getStore('discountsMasterStore');

        this.fillStore(store, 'app/data/DiscountsRecords.json', false, {}, 'discounts', successCall, errorCall);

        /*
         
         Expected JSON Structure
         
         Please see the expected structure at the end of the file under - Discounts
         
         */

    },
    loadVendorDetailStore: function(scope, successCall, errorCall) {

        var store = Ext.getStore('vendorDetailsRecodsStore');

        this.fillStore(store, 'app/data/VendorDetailRecords.json', false, {}, 'vendorDetailRecords', successCall, errorCall);

        /*
         
         Expected JSON Structure
         
         {
         "id": 1,
         "name": "Vendor One",
         "design":"37",
         "sku":"10000",
         "collection":"37",
         "products":[
         {"id":1,"standard_price":"75.00","promotional_price":"65.00"},
         {"id":5,"standard_price":"55.00","promotional_price":"35.00"}
         ]
         }
         
         // 		product.id - field inside the product array refer to products from the product collection.
         */
    },
    //common method to update store using AJAX request.           
    synckAndUpdateStore: function(store, url, record, params, successCall, errorCall) {
        if (useMask) {
            Ext.Viewport.setMasked(true);
        }
        var that = this;
        function successCallBack(response) {
            // process server response here
            console.log(response);
            console.log("Update Store when success callback");
            if (useMask) {
                Ext.Viewport.unmask();
            }
            successCall(response);
        }
        function errorCallBack() {
            alert("Error Occured");
            if (useMask) {
                Ext.Viewport.unmask();
            }

            errorCall();
        }
        //params = record ;  
        RMdatalink.util.NetworkManager.requestToserver(url, params, successCallBack, errorCallBack);
    },
    deleteRecordFromStore: function(store, url, record, params, successCall, errorCall) {
        if (useMask) {
            Ext.Viewport.setMasked(true);
        }
        var that = this;
        function successCallBack(response) {
            // process server response here
            console.log(response);
            store.remove(record);
            store.sync();
            console.log("Update Store when success callback");
            if (useMask) {
                Ext.Viewport.unmask();
            }
            successCall(response);
        }
        function errorCallBack() {
            alert("Error Occured");
            if (useMask) {
                Ext.Viewport.unmask();
            }
            errorCall();
        }
        //params = record ;  
        RMdatalink.util.NetworkManager.requestToserver(url, params, successCallBack, errorCallBack);   },
    addNewRecordToStore: function(store, url, record, params, successCall, errorCall) {
        if (useMask) {
            Ext.Viewport.setMasked(true);
        }
        var that = this;
        function successCallBack(response) {
            // process server response here
            console.log(response);
            store.add(record);
            store.sync();
            console.log("Update Store when success callback");
            if (useMask) {
                Ext.Viewport.unmask();
            }
            successCall(response);
        }
        function errorCallBack() {
            alert("Error Occured");
            if (useMask) {
                Ext.Viewport.unmask();
            }
            errorCall();
        }

        params.record = record;
        RMdatalink.util.NetworkManager.requestToserver(url, params, successCallBack, errorCallBack);



    },
    //to fill store with newly recieved data.
    //it removes all previous data from store and add new data.        
    fillStoreWithNewData: function(store, data, successCall) {
        store.removeAll();
        store.sync();
        store.setData(data);
        store.sync();

    },
    /****  
     //  This are the common methods which where called when CRUD operations or event is occurred on store.
     //  i.e. on  Any of above store updated OnStoreRecordUpdated method get called
     // Note: we have commented these implementation and added separate Callback for each store.
     
     
     //get called when new record is added in store
     onStoreNewRecordAdded:function(store,records,eOpts){
     
     console.log("New Record Added To Store");
     },
     
     //get called when record get updated in store
     OnStoreRecordUpdated:function(store,record,newIndex,oldIndex,modifiedFieldNames,modifiedValues,eOpts){
     
     console.log("Store Updated");
     },
     
     //get called when record get removed from store
     onStoreRecordRemoved:function(store,records,indices,eOpts){
     
     console.log("Record Removed From Store");
     },     
     ****/
    /*
     In Callback methods we have to sync it with server
     */
    // CRUD Operations for Retailers Master Store ---------------------------------------

    //get called when new record is added in Retailer Master store
    onRetailerMasterStoreNewRecordAdded: function(store, records, eOpts) {

        console.log("New Record Added To Retailer Store");
    },
    //get called when record get updated in Retailer store
    onRetailerMasterStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        console.log("Retailer Store Updated");
    },
    //get called when record get removed from Retailer Master store
    onRetailerMasterStoreRecordRemoved: function(store, records, indices, eOpts) {

        console.log("Record Removed From Retailer Store");
    },
    // CRUD Operations for In House Master Store ---------------------------------------      

    //get called when new record is added in Inhose Master store
    onInhouseMasterStoreNewRecordAdded: function(store, records, eOpts) {

        console.log("New Record Added To Inhouse Store");
    },
    //get called when record get updated in Inhouse Master store
    onInhouseMasterStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        console.log("Inhouse Store Updated");
    },
    //get called when record get removed from Inhouse Master store
    onInhouseMasterStoreRecordRemoved: function(store, records, indices, eOpts) {

        console.log("Record Removed From Inhouse Store");
    },
    // CRUD Operations for Discount Master Store ---------------------------------------

    //get called when new record is added in Discount Master store
    onDiscountsMasterStoreNewRecordAdded: function(store, records, eOpts) {

        console.log("New Record Added To Discounts Store");
    },
    //get called when record get updated in Discount Master store
    onDiscountsMasterStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        console.log("Discounts Store Updated");
    },
    //get called when record get removed from Discount Master store
    onDiscountsMasterStoreRecordRemoved: function(store, records, indices, eOpts) {

        console.log("Record Removed From Discounts Store");
    },
    // CRUD Operations for Pricing Master Store ---------------------------------------     

    //get called when new record is added in Product Detail store
    onProductDetailStoreNewRecordAdded: function(store, records, eOpts) {

        console.log("New Record Added To Product Detail Store");
    },
    //get called when record get updated in Product details store
    onProductDetailStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        console.log("Product Detail Store Updated");
    },
    //get called when record get removed from Product Details store
    onProductDetailStoreRecordRemoved: function(store, records, indices, eOpts) {

        console.log("Record Removed From Product Detail Store");
    },
    // CRUD Operations for Discount Master Store ---------------------------------------

    //get called when new record is added in Billing Master store
    onBillingMasterStoreNewRecordAdded: function(store, records, eOpts) {

        console.log("New Record Added To Billing Store");
    },
    //get called when record get updated in Billing Master store
    onBillingMasterStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        console.log("Billing Store Updated");
    },
    //get called when record get removed from Billing Master store
    onBillingMasterStoreRecordRemoved: function(store, records, indices, eOpts) {

        console.log("Record Removed From Billing Store");
    },
    // CRUD Operations for Vendors Master Store ---------------------------------------     

    //get called when new record is added in Vendor Detail store
    onVendorDetailStoreNewRecordAdded: function(store, records, eOpts) {

        console.log("New Record Added To Vendor Store");
    },
    //get called when record get updated in Vendor Detail store
    onVendorDetailStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        console.log("Vendor Store Updated");
    },
    //get called when record get removed from Vendor detail store
    onVendorDetailStoreRecordRemoved: function(store, records, indices, eOpts) {

        console.log("Record Removed From Vendor Store");
    },
    // CRUD Operations for Discount Master Store ---------------------------------------

    //get called when new record is added in Notification Master store
    onNotificationStoreNewRecordAdded: function(store, records, eOpts) {

        console.log("New Record Added To Notification Store");
    },
    //get called when record get updated in Notification store
    onNotificationMasterStoreUpdate: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts) {

        console.log("Notification Store Updated");
    },
    //get called when record get removed from Notification Master store
    onNotificationMasterStoreRecordRemoved: function(store, records, indices, eOpts) {

        console.log("Record Removed From Notification Store");
    }


});


/*
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
    