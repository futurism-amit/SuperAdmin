/*
 * File: app/controller/VendorRetailerRelations.js
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

Ext.define('RMdatalink.controller.VendorRetailerRelations', {
    extend: 'Ext.app.Controller',

    config: {
        activeRelData: {
            query: {
                
            },
            collection: '',
            pageNo: 1,
            pageSize: 50,
            sortBy: {
                
            }
        },
        maxPageNo: 1,
        selectedRetailerProspect: {
            
        },

        control: {
            "button[itemId=retailersOfVendorsPageLeftBtn]": {
                tap: 'onRetailersOfVendorsPageLeftBtnTap'
            },
            "button[itemId=retailersOfVendorsPageRightBtn]": {
                tap: 'onRetailersOfVendorsPageRightBtnTap'
            },
            "button[itemId=prospectsretailersOfVendorsPageLeftBtn]": {
                tap: 'onprospectsretailersOfVendorsPageLeftBtnTap'
            },
            "button[itemId=prospectsretailersOfVendorsPageRightBtn]": {
                tap: 'onprospectsretailersOfVendorsPageRightBtnTap'
            }
        }
    },

    onRetailersOfVendorsPageLeftBtnTap: function(button, e, eOpts) {
        /*

             activeRelData: {
                    query: {

                    },
                    collection: '',
                    pageNo: 1,
                    pageSize: 50,
                    sortBy: {

                    }
                },


        */

         if( this.config.activeRelData.pageNo > 1)
         {

             this.config.activeRelData.pageNo -- ;
             this.loadRetailerPagedForVendor();

         }

    },

    onRetailersOfVendorsPageRightBtnTap: function(button, e, eOpts) {
        /*

             activeRelData: {
                    query: {

                    },
                    collection: '',
                    pageNo: 1,
                    pageSize: 50,
                    sortBy: {

                    }
                },


        */



         if( this.config.activeRelData.pageNo <  this.config.maxPageNo )
         {

             this.config.activeRelData.pageNo++ ;
             this.loadRetailerPagedForVendor();

         }

    },

    onprospectsretailersOfVendorsPageLeftBtnTap: function(button, e, eOpts) {

        var pageController = RMdatalink.app.getController('PaginationController');


        var presentStoreId = pageController.getCurrentActiveStoreId();


        pageController.setCurrentActiveStoreId("retailersMaster");


        var storeId = pageController.getCurrentActiveStoreId();

        var store = Ext.getStore(storeId);

        var currentPageNo = store.getPageNo();
        var totalNoOfPages = 10; store.getTotalNoOfPages();

        if(currentPageNo > 1)
        {
        /* Here request Data loader to load next page */
        currentPageNo = currentPageNo - 1 ;

          pageController.loadStore(currentPageNo,RMdatalink.util.DataLoader.getPageSize(),RMdatalink.util.DataLoader.getEnableCachig());
        }

        store.setPageNo(currentPageNo);


        pageController.setCurrentActiveStoreId(presentStoreId);
    },

    onprospectsretailersOfVendorsPageRightBtnTap: function(button, e, eOpts) {

        var pageController = RMdatalink.app.getController('PaginationController');


        var presentStoreId = pageController.getCurrentActiveStoreId();


        pageController.setCurrentActiveStoreId("retailersMaster");


        var storeId = pageController.getCurrentActiveStoreId();

        var store = Ext.getStore(storeId);

        var currentPageNo = store.getPageNo();
        var totalNoOfPages = 1000; store.getTotalNoOfPages();

        if(currentPageNo < totalNoOfPages)
        {
        /* Here request Data loader to load next page */
        currentPageNo = currentPageNo + 1 ;

          pageController.loadStore(currentPageNo,RMdatalink.util.DataLoader.getPageSize(),RMdatalink.util.DataLoader.getEnableCachig());
        }

        store.setPageNo(currentPageNo);


        pageController.setCurrentActiveStoreId(presentStoreId);
    },

    loadRetailerPagedForVendor: function() {
        /*

             activeRelData: {
                    query: {

                    },
                    collection: '',
                    pageNo: 1,
                    pageSize: 50,
                    sortBy: {

                    }
                },


        */

            this.config.activeRelData.collection =  dbEnv + "rdl_masterretailerrecords";
            var searchCriteria = this.config.activeRelData;
            var that = this ;

        console.log(searchCriteria);
            RMdatalink.iwa.rdl.queryDB(
                searchCriteria,
                success,error);

        // RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:1,pageSize: 2 ,sortBy:{},query:{store_phone:str_name },fields:{store_phone:1,vendors:1}},duplicationSuccess,duplicationError);






        function success(){

            //alert("I rEACHED HERE");
        //     debugger ;
        //         console.log(arguments) ;
        //     debugger ;
           if(arguments[0].count > 1)
           {

               setMaxPageSize(arguments[0]) ;


               setRetailersList(arguments[0].items) ;

                Ext.ComponentQuery.query('#retailerAtVendorPNoLbl')[0].setHtml(searchCriteria.pageNo) ;
           }

            Ext.ComponentQuery.query('#inStoreVendorsRetailersCLbl')[0].setHtml("Total Retailers : "+arguments[0].count) ;



        }

        function error(){


        }

        function setMaxPageSize(response){

            if( (response.count  % searchCriteria.pageSize) == 0){
                    that.config.maxPageNo =  parseInt(response.count  / searchCriteria.pageSize) ;
            }
            else{

                that.config.maxPageNo =  parseInt(response.count  / searchCriteria.pageSize) + 1;
            }


        }



        function setRetailersList(data){


            var prospectList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");


              var prospectStore = prospectList.getStore() ;
            prospectStore.removeAll();
            prospectStore.sync();

            prospectStore.setData(data) ;

            prospectStore.sync();

              prospectList.selectAll() ;



        }
    },

    searchRetailers: function(searchText) {
        /*

             activeRelData: {
                    query: {

                    },
                    collection: '',
                    pageNo: 1,
                    pageSize: 50,
                    sortBy: {

                    }
                },


                query:

                   {
                       store_phone:{
                           $in:
                           phones
                       }

                   }


        */



           var searchregx =  new RegExp(searchText ) ;

        this.config.activeRelData.query.store_name = { $regex: searchregx, $options: 'i' }  ;
        //this.config.activeRelData.query.store_city = { $regex: searchregx, $options: 'i' }  ;
        //this.config.activeRelData.query.store_state = { $regex: searchregx, $options: 'i' }  ;


        delete(this.config.activeRelData.query.store_phone) ;


        this.loadRetailerPagedForVendor() ;
    },

    onRetailerUnSelect: function(record) {
           var isRetailerDetailsView = RMdatalink.app.getController('UINav').isRetailerDetailsView;
            var selectedUserRecord = RMdatalink.util.globalConfig.getDataToShowInSettingWindow() ;



        console.log(record);

        if(!isRetailerDetailsView)
        {

            var strPhone = record.data.store_phone ;
            //


            var impCSV = RMdatalink.app.getController('ImportCSV') ;
            var recIndex = -1 ;

            for(var i =0 ; i < impCSV.config.retailerForVendor.length ; i++){

                if( impCSV.config.retailerForVendor[i].retailer_phone == strPhone ){

                    recIndex = i ;
                    break ;
                }

            }

             console.log(recIndex);

             impCSV.config.retailerForVendor.splice(recIndex , 1);

            var prospectList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");

            var prospectStore = prospectList.getStore() ;

            prospectStore.remove(record) ;


             this.setFilterForProspectRetailers();

             RMdatalink.app.getController('VendorRetailerRelations').updateVendorOnRetailerAddedOrRemoved() ;

        }else{

             this.setResetReatilersForVendors(true , selectedUserRecord.record.data._id , selectedUserRecord.record.data.store_phone ,record ) ;

            var activeList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");

            var activeStore = activeList.getStore() ;

            activeStore.remove(record) ;

            this.setFilterForProspectVendors()  ;


        }
    },

    onRetailerSelect: function(record, target) {
           var isRetailerDetailsView = RMdatalink.app.getController('UINav').isRetailerDetailsView;
           var selectedUserRecord = RMdatalink.util.globalConfig.getDataToShowInSettingWindow() ;


        console.log(record);

        if(!isRetailerDetailsView)
        {

            console.error(201);
            var strPhone = record.data.store_phone ;
            var strId = record.data._id ;

            var impCSV = RMdatalink.app.getController('ImportCSV') ;

            this.config.selectedRetailerProspect = record.data ;

            impCSV.assignRetailerForVendor(selectedUserRecord.record.data,strPhone , true,strId) ;


             var prospectList  = Ext.ComponentQuery.query('#RDOnlineVendorsTab')[0].down("#mainList");

            var prospectStore = prospectList.getStore() ;

            // prospectList.remove(record) ;


            this.setFilterForProspectRetailers();


             RMdatalink.app.getController('VendorRetailerRelations').updateVendorOnRetailerAddedOrRemoved() ;


        }else{
            console.error(202);

            //setResetReatilersForVendors: function(isRemove, store_id, store_phone, vendorRecord)

            console.error(selectedUserRecord);
            this.setResetReatilersForVendors(false , selectedUserRecord.record.data._id , selectedUserRecord.record.data.store_phone ,record ) ;

            var activeList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");

            var activeStore = activeList.getStore() ;

            var objectToAdd = {
                Account_No:'',
                'SKU':	record.data.SKU,
                'collections':	record.data.collections,
                'design':	record.data.design,
                'no_of_additional_images':	record.data.no_of_additional_images,
                'no_of_images':	record.data.no_of_images,
                'sku':	record.data.sku,
                'status':	record.data.status,
                'store_city':	record.data.store_city,
                'store_name':	record.data.store_name,
                'store_phone':	record.data.store_phone,
                'store_state':	record.data.store_state,
                'vendor_id':	record.data.vendor_id,
                'vendor_name':	record.data.vendor_name

            };

            activeStore.add(objectToAdd) ;
            activeList.selectAll() ;

        //     var objectToAddInRetailersArrayofRecord = {
        //         retailer_id:
        //     }

            this.setFilterForProspectVendors() ;
        }
    },

    addRtToRTVList: function() {
            var activeList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");

            var activeStore = activeList.getStore() ;
            var rt = this.config.selectedRetailerProspect ;
            var data = {

                    "store_name": rt.store_name,
                    "store_address_line1":rt.store_address_line1 ,
                    "store_city":rt.store_city,
                    "store_state":rt.store_state,
                    "store_zip": rt.store_zip,
                    "store_phone": rt.store_phone,
                    "store_website":rt.store_website
            };


            activeStore.add(data);
            activeList.selectAll();
    },

    setVendorForRetailer: function() {
            var isRetailerDetailsView = RMdatalink.app.getController('UINav').isRetailerDetailsView;
            var selectedUserRecord = RMdatalink.util.globalConfig.getDataToShowInSettingWindow() ;

           var rtd = Object() ;
           rtd = selectedUserRecord.record.data ;

            var retailer = {

                _id:rtd._id,
                type: "ACTIVE",
                retailer_phone:rtd.store_phone


            };



        var activeList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");

        var activeStore = activeList.getStore() ;


        var vendors = getArrayFromStore(activeStore);


        var vendorMaster = Ext.getStore('vendors.Master');


        var index = 0 ;


         var vendor_rec = null ;
        doUpdateVendor();


        function doUpdateVendor(){

            if(index < vendors.length )
            {

                    var vendor_id = vendors[index]._id ;
                    var vendor_name = vendors[index].vendor_name;
                    var recIndex = -1;
                    if(vendor_id)
                    {
                       recIndex = vendorMaster.findExact("_id",vendor_id);
                    }else{
                        recIndex = vendorMaster.findExact("vendor_name",vendor_name);

                    }

                    vendor_rec = vendorMaster.getAt(recIndex) ;

                    if(vendor_rec){


                        var rtds = vendor_rec.data.retailers ;
                        var isRecAlreadyPresent = false ;

                        if(rtds)
                        {

                        for(var i=0 ; i< rtds.length;i++){

                            console.log(rtds.retailer_phone) ;

                             console.log(rtd.store_phone) ;

                            if(rtds.retailer_phone == rtd.store_phone){
                                isRecAlreadyPresent =true ;
                                break ;
                            }
                        }
                        }else{

                            isRecAlreadyPresent = true ;
                        }

                        if(isRecAlreadyPresent){

                            console.log("Record Already Present");

                            index++ ;
                            doUpdateVendor() ;


                        }else{

                             console.log("New Record");

                            vendor_rec.data.retailers.push(retailer) ;

                            sendRecToServer(vendor_rec) ;



                        }


                    }else{
                          Ext.Viewport.setMasked(false) ;
                    }
            }else{

                Ext.Viewport.setMasked(false) ;
            }

        }



        function sendRecToServer(vendor_rec){

            var data = {

                retailers :vendor_rec.data.retailers
            };

             RMdatalink.iwa.rdl.doUpdateCollection(vendorMaster, data , vendor_rec.get('_id'), success, error );



        }

        function success(){

              index++ ;
              doUpdateVendor() ;
        }

        function error(){

              index++ ;
              doUpdateVendor() ;

        }



        function getArrayFromStore(store){

            var data = new Array();
            data = store.getData().items;

            var dataToReturn = new Array();

            for(var i=0; i < data.length ; i++){

                dataToReturn.push(data[i].data);
            }

            return dataToReturn ;

        }
    },

    setFilterForProspectVendors: function() {
        var activeList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");

        var activeStore = activeList.getStore();


        var vendors = getArrayFromStore(activeStore);

        var vendorMaster = Ext.getStore('vendors.Master') ;
                vendorMaster.clearFilter();

        vendorMaster.filter(function(record){

            var filterResult = true ;

            for(var i =0 ; i < vendors.length ; i++ ){

                 if(record.data.vendor_name == vendors[i].vendor_name){

                     filterResult = false ;
                     break ;
                 }

            }


                return filterResult ;

        });

          Ext.ComponentQuery.query('#onlineVendorsRetailersCLbl')[0].setHtml("Total Vendors : "+ vendorMaster.data.items.length ) ;
        var vLength = vendorMaster.data.all.length - vendorMaster.data.items.length ;
        Ext.ComponentQuery.query('#inStoreVendorsRetailersCLbl')[0].setHtml("Total Vendors : "+ vLength ) ;

         Ext.ComponentQuery.query('#RDOnlineVendorsTab')[0].down("#mainList").deselectAll();

        function getArrayFromStore(store){

            var data = new Array();
            data = store.getData().items;

            var dataToReturn = new Array();

            for(var i=0; i < data.length ; i++){

                dataToReturn.push(data[i].data);
            }

            return dataToReturn ;

        }


          RMdatalink.app.getController('RetailerDeatilsDataSet').loadVdrInfoTotals() ;
    },

    updateRetailerOnVendorUpdate: function(retailers, selectedRow) {

        console.log(selectedRow);

        var previousRetailers = selectedRow.record.data.retailers ;

        var removedRtds = [] ;
        var addedRtds = [] ;

        // for(var i=0 ; i < retailers.length ; i++){



        // }

         Ext.Viewport.setMasked(false) ;
    },

    setFilterForProspectRetailers: function() {

           var importFrmCsvController = RMdatalink.app.getController('ImportCSV') ;



            var phones = [] ;


            for(var i =0 ; i < importFrmCsvController.config.retailerForVendor.length ; i++){


                phones.push(importFrmCsvController.config.retailerForVendor[i].retailer_phone) ;
            }


        // var rtMaster =  Ext.getStore('retailersMaster') ;

         var rtMaster =  Ext.getStore('retailers.prospectRTForVendor') ;


                rtMaster.clearFilter();

            rtMaster.filter(function(record){

                var filterResult = true ;

                for(var i =0 ; i < phones.length ; i++ ){

                     if(record.data.store_phone == phones[i]){

                         filterResult = false ;
                         break ;
                     }

                }


                    return filterResult ;

            });


         Ext.ComponentQuery.query('#onlineVendorsRetailersCLbl')[0].setHtml("Total Retailers : "+ rtMaster.data.items.length ) ;

        Ext.ComponentQuery.query('#inStoreVendorsRetailersCLbl')[0].setHtml("Total Retailers : "+ importFrmCsvController.config.retailerForVendor.length ) ;


         Ext.ComponentQuery.query('#RDOnlineVendorsTab')[0].down("#mainList").deselectAll();

    },

    setResetReatilersForVendors: function(isRemove, store_id, store_phone, vendorRecord) {
        //  Ext.Viewport.setMasked({
        //                     xtype: 'loadmask'
        //                 });



        // debugger ;
        var vendor_name = vendorRecord.data.vendor_name ;
        var vendor_id = vendorRecord.data.vendor_id ;


        var vendorMaster = Ext.getStore('vendors.Master') ;

        console.log(vendor_id);
        console.log(vendor_name);

        if(vendor_id)
        {
         var record = findVendorBy_id(vendor_id) ;
        }
        else{
         var record = findVendorBy_name(vendor_name) ;
        }



        console.log(record);
        if(!record){

            return ;
        }

        var rtlrs = [] ;

        if(record.data.retailers )
        {
            rtlrs = record.data.retailers ;
        }


        if(isRemove){

            removeRetailerFromVendorDt() ;

        }
        else{

            addRetailerToVendorDt();
        }

        updateVendor() ;

        function removeRetailerFromVendorDt(){
            for(var i=0; i< rtlrs.length ; i++ ){

                if(rtlrs[i].retailer_id ){

                    if(store_id == rtlrs[i].retailer_id ){

                        rtlrs.splice(i, 1);
                        break ;
                    }
                }else{

                    if(store_phone == rtlrs[i].retailer_phone ){


                        rtlrs.splice(i, 1);
                         break ;
                    }


                }
            }


        }



        function addRetailerToVendorDt(){

            var isRecAlreadyPresent = false ;

            for(var i=0; i< rtlrs.length ; i++ ){

                if(rtlrs[i].retailer_id ){

                    if(store_id == rtlrs[i].retailer_id ){

                        isRecAlreadyPresent =true ;
                        break ;
                    }
                }else{

                    if(store_phone == rtlrs[i].retailer_phone ){


                           isRecAlreadyPresent =true ;
                         break ;
                    }


                }
            }


            if(! isRecAlreadyPresent){

                rtlrs.push(
                    {

                          retailer_phone : store_phone,
                          type: "ACTIVE",
                          retailer_id:store_id,
                          Account_No:''


                   }
                );
            }


        }



        function updateVendor(){


            var dataToupdate = {

                retailers:rtlrs
            };
            console.error(dataToupdate);
            RMdatalink.iwa.rdl.doUpdateCollection(vendorMaster, dataToupdate , record.get('_id'), updateSuccess, updateError );


        }



        function updateSuccess(){

            record.set("retailers", rtlrs);
             Ext.Viewport.setMasked(false);
            console.log("vendor updated successfully");
        }



        function updateError(){

             Ext.Viewport.setMasked(false);
            console.log("error in updating vendor");

        }

        function findVendorBy_id(v_id){

             var vendors = vendorMaster.data.all ;
            var venRec = null ;
            for(var j=0;j<vendors.length ; j++){

                if(v_id == vendors[j].data._id){

                    venRec = vendors[j] ;
                    break;
                }
            }

            return venRec;

        }

        function findVendorBy_name(v_name){

            var vendors = vendorMaster.data.all ;
            var venRec = null ;
            for(var j=0;j<vendors.length ; j++){

                if(v_name == vendors[j].data.vendor_name){

                    venRec = vendors[j] ;
                    break;
                }
            }

            return venRec;

        }
    },

    updateAccNoofRetailersVender: function(store_id, store_phone, vendor_id, vendor_name, acc_No) {

        var isRemove = false;




        var vendorMaster = Ext.getStore('vendors.Master') ;

        console.log(vendor_id);
        console.log(vendor_name);
        var record;
        if(vendor_id)
        {
            record = findVendorBy_id(vendor_id) ;
        }
        else if(vendor_name){

            record = findVendorBy_name(vendor_name) ;
        }else{
            return;
        }



        console.log(record);
        if(!record){

            return ;
        }

        var rtlrs = [] ;

        if(record.data.retailers )
        {
            rtlrs = record.data.retailers ;
        }



        if(isRemove && false){

            removeRetailerFromVendorDt() ;

        }
        else{

            addRetailerToVendorDt();
        }

        updateVendor() ;

        function removeRetailerFromVendorDt(){
            for(var i=0; i< rtlrs.length ; i++ ){

                if(rtlrs[i].retailer_id ){

                    if(store_id == rtlrs[i].retailer_id ){

                        rtlrs.splice(i, 1);
                        break ;
                    }
                }else{

                    if(store_phone == rtlrs[i].retailer_phone ){


                        rtlrs.splice(i, 1);
                         break ;
                    }


                }
            }


        }



        function addRetailerToVendorDt(){

            var isRecAlreadyPresent = false ;

            for(var i=0; i< rtlrs.length ; i++ ){

                if(rtlrs[i].retailer_id ){

                    if(store_id == rtlrs[i].retailer_id ){

                        console.log("ACCOUNT NO ADDED");

                        rtlrs[i].Account_No = acc_No;

                        isRecAlreadyPresent =true ;

                        break ;
                    }
                }else{

                    if(store_phone == rtlrs[i].retailer_phone ){


                         isRecAlreadyPresent =true ;
                         break ;
                    }


                }
            }


            if(! isRecAlreadyPresent){

                rtlrs.push(
                    {

                          retailer_phone : store_phone,
                          type: "ACTIVE",
                          retailer_id:store_id,
                          Account_No:''


                   }
                );
            }


        }



        function updateVendor(){


            var dataToupdate = {

                retailers:rtlrs
            };
            console.error(dataToupdate);
            RMdatalink.iwa.rdl.doUpdateCollection(vendorMaster, dataToupdate , record.get('_id'), updateSuccess, updateError );


        }



        function updateSuccess(){

            record.set("retailers", rtlrs);
             Ext.Viewport.setMasked(false);
            console.log("vendor updated successfully");
        }



        function updateError(){

             Ext.Viewport.setMasked(false);
            console.log("error in updating vendor");

        }

        function findVendorBy_id(v_id){

             var vendors = vendorMaster.data.all ;
            var venRec = null ;
            for(var j=0;j<vendors.length ; j++){

                if(v_id == vendors[j].data._id){

                    venRec = vendors[j] ;
                    break;
                }
            }

            return venRec;

        }

        function findVendorBy_name(v_name){

            var vendors = vendorMaster.data.all ;
            var venRec = null ;
            for(var j=0;j<vendors.length ; j++){

                if(v_name == vendors[j].data.vendor_name){

                    venRec = vendors[j] ;
                    break;
                }
            }

            return venRec;

        }
    },

    saveAccountNoOfRetailerData: function() {
        console.error("SHOULD SAVE INFORMATION");

         var isRetailerDetailsView = RMdatalink.app.getController('UINav').isRetailerDetailsView;
         var selectedUserRecord = RMdatalink.util.globalConfig.getDataToShowInSettingWindow() ;



        if(!isRetailerDetailsView && false)
        {


        //     var strPhone = record.data.store_phone ;
        //     var strId = record.data._id ;
        //     var impCSV = RMdatalink.app.getController('ImportCSV') ;
        //     this.config.selectedRetailerProspect = record.data ;
        //     impCSV.assignRetailerForVendor(selectedUserRecord.record.data,strPhone , true,strId) ;
        //      var prospectList  = Ext.ComponentQuery.query('#RDOnlineVendorsTab')[0].down("#mainList");
        //     var prospectStore = prospectList.getStore() ;
        //     // prospectList.remove(record) ;
        //     this.setFilterForProspectRetailers();
        //      RMdatalink.app.getController('VendorRetailerRelations').updateVendorOnRetailerAddedOrRemoved() ;


        }else{
            console.error(202);

        //        this.setResetReatilersForVendors(false , selectedUserRecord.record.data._id , selectedUserRecord.record.data.store_phone ,record ) ;

            var activeList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");
            var activeStore = activeList.getStore() ;
            var selectedUserRecord = RMdatalink.util.globalConfig.getDataToShowInSettingWindow() ;


            var arrayOfData = activeStore.data.items;
        //    this.setResetReatilersForVendors(false , selectedUserRecord.record.data._id , selectedUserRecord.record.data.store_phone ,record ) ;

            for(var i=0; i <arrayOfData.length ; i++){


                var vendorId = arrayOfData[i].data.vendor_id;
                var vendor_name = arrayOfData[i].data.vendor_name;
                var retailerId = selectedUserRecord.record.data._id;
                var retailerPhone = selectedUserRecord.record.data.store_phone;
                var itemsOflist = activeList.getItemAt(i);
                var a = Ext.get(itemsOflist.element.dom);
                var input = a.query("Input");
                var accountNo = vendorIdAccountValue[vendorId];



                this.updateAccNoofRetailersVender(retailerId  , retailerPhone , vendorId  , vendor_name  , accountNo);
            }



        //     var objectToAdd = {
        //         Account_No:'',
        //         'SKU':	record.data.SKU,
        //         'collections':	record.data.collections,
        //         'design':	record.data.design,
        //         'no_of_additional_images':	record.data.no_of_additional_images,
        //         'no_of_images':	record.data.no_of_images,
        //         'sku':	record.data.sku,
        //         'status':	record.data.status,
        //         'store_city':	record.data.store_city,
        //         'store_name':	record.data.store_name,
        //         'store_phone':	record.data.store_phone,
        //         'store_state':	record.data.store_state,
        //         'vendor_id':	record.data.vendor_id,
        //         'vendor_name':	record.data.vendor_name

        //     };

        //     activeStore.add(objectToAdd) ;
        //     activeList.selectAll() ;

        // //     var objectToAddInRetailersArrayofRecord = {
        // //         retailer_id:
        // //     }

        //     this.setFilterForProspectVendors() ;
        }
    },

    goToVendor_RetailerDetail: function(vendorRecord, recIndex) {
        var isRetailerDetailsView = RMdatalink.app.getController('UINav').isRetailerDetailsView;

        alert(isRetailerDetailsView);
        if(isRetailerDetailsView){

            // RMdatalink.app.getController('UINav').redirectTo('card3');


                                var vendorList = Ext.ComponentQuery.query('#allVendorTab')[0].down('#vendorList');



                                var varibleToSet = setVariable();
                                var vendorsMainContentPanel = Ext.ComponentQuery.query('#vendorsMainContentPanel')[0];
                                Ext.ComponentQuery.query('#retailerDetailsMainTabPanel')[0].setActiveItem('#RDStoresTab');
                                RMdatalink.util.globalConfig.setDataToShowInSettingWindow(varibleToSet);

                                RMdatalink.app.getController('UINav').onPanelAddretailertapped(vendorsMainContentPanel);






        }



        function setVariable(){

            return {

                placeClicked:  "",
                record:vendorRecord,
                index:recIndex
            };
        }

    },

    updateVendorOnRetailerAddedOrRemoved: function() {

                         var masterStore = Ext.getStore('vendors.Master');


                         var selectedUserRecord = RMdatalink.util.globalConfig.getDataInRetailerScreenForSaveOrCancel();


                        if( !( Object.keys(selectedUserRecord).length  )   ){
                            // USER CLICKED ON ADD NEW RETAILER BTN

                            return ;
                        }

                        var _id = selectedUserRecord.record.data._id ;
                        var importFrmCsvController = RMdatalink.app.getController('ImportCSV') ;

                        var recToUpdate =
                            {
                                retailers : importFrmCsvController.config.retailerForVendor
                            };



                         RMdatalink.iwa.rdl.doUpdateCollection(masterStore, recToUpdate , _id , suc, err);


                            function suc(){

                            }
                            function err(){

                            }
    }

});