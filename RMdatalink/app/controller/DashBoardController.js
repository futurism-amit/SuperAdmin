/*
 * File: app/controller/DashBoardController.js
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

Ext.define('RMdatalink.controller.DashBoardController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.DashBoardController',

    config: {
    },

    loadVIPStoreInDashBoard: function() {

        var store = Ext.getStore("vendors.Master");
        var vipDashBoard= Ext.ComponentQuery.query("#vipDashBoard")[0];
        var component = vipDashBoard;
        var list = component.down('#mainList');
        var keyOfRetailer  = 'promo_code_info';
        var flagofRetailer = 'is_promo_code_active';
        var storemaster = Ext.getStore('vendors.Master');
        var data = storemaster.getData();

        var optionArray = [];

        data.all.forEach(function(obj){

            var values = obj.data;
            if( values.is_promo_code_active   && values[keyOfRetailer] ){

                optionArray.push(obj.raw);

            }
        });
        var storeOfList = list.getStore();
        if(optionArray.length){
            if(storeOfList){
                storeOfList.setData(optionArray);
            }else{
                list.setData(optionArray);
            }

        }


        this.getCountForVIPDashBoard();
        this.getCountForProductsSummary();
    },

    refreshDashBoard: function() {


        this.getCountForVIPDashBoard();
        this.getCountForProductsSummary();
    },

    getCountForVIPDashBoard: function() {


        var fnToExecute = function(){
            var vipDashBoard= Ext.ComponentQuery.query("#vipDashBoard")[0];
            var component = vipDashBoard;
            var list = component.down('#mainList');
            var storeOfList = list.getStore();

            if( storeOfList){

            }else{
                return;
            }
            var data = storeOfList.getData();

            var optionArray = [];


            for(  var i =0 ;i <data.all.length ; i++){

                var record = storeOfList.getAt(i);

                this[fnToCall](record);
                //this.getCountProspectRetailer(record);

            }

        };
        var me = this;


        var fnToCall  = 'getCountActiveRetailer';


        // SOCKET CANNOT TAKE MANY MULTIPLE REQUEST SIMULTANEOUSLY.

        // SEND REQUEST SEPERATELY


            fnToCall  = 'getCountActiveRetailer';
            fnToExecute.call(me);


        setTimeout( function(){
            fnToCall  = 'getCountProspectRetailer';
            fnToExecute.call(me);
        } ,2000 );

    },

    getCountActiveRetailer: function(record) {


        var vendor_name = record.data.vendor_name;
        var queryToExecute = getSearchQuery({

            VendorPartner:vendor_name
        });


        startSearch(queryToExecute) ;


        function getSearchQuery(values){

            var query = {} ;
            query.$and = [] ;
            var temp = { $or:[] };
            var q = {} ;



            if(  values.VendorPartner){



                query.$and.push(
                    {
                        'e_commerce_info.vip_vendor': values.VendorPartner
                    }

                );
                query.$and.push(
                    {
                        'store_products.vip_status': "ACTIVE"
                    }

                );
            }



            return query ;
        }





        function startSearch(qry){
            var searchQuery =  qry ;
            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:1,pageSize: 50 ,sortBy:{"store_name":1},
                                        query:searchQuery,fields:{ '_id':1}},success,error);



        }




        var me = this;
        function success(){

            console.log("1" , arguments);

            record.set('totalVIPActiveVendor' , arguments[0].count );
            me.setTotalListOfVIPDashBoard();

        }

        function error(){

            console.log("2" , arguments);

        }















    },

    getCountProspectRetailer: function(record) {

        var vendor_name = record.data.vendor_name;
        var queryToExecute = getSearchQuery({

            VendorPartner:vendor_name
        });




        startSearch(queryToExecute) ;

        function getSearchQuery(values){

            var query = {} ;
            query.$and = [] ;
            var temp = { $or:[] };
            var q = {} ;



            if(  values.VendorPartner){



                query.$and.push(
                    {
                        'e_commerce_info.vip_vendor': values.VendorPartner
                    }

                );
                query.$and.push(
                    {
                        'store_products.vip_status': 'HOT_PROSPECT'
                    }

                );
            }

        //HOT_PROSPECT

            return query ;
        }






        function startSearch(qry){
            var searchQuery =  qry ;
            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:1,pageSize: 50 ,sortBy:{"store_name":1},
                                        query:searchQuery,fields:{ '_id':1 }},success,error);



        }




        var me = this;
        function success(){

            console.warn("1" , arguments);
            record.set('totalVIPProspectRetailer' , arguments[0].count );
            me.setTotalListOfVIPDashBoard();
        }

        function error(){

            console.error("2" , arguments);

        }















    },

    setTotalListOfVIPDashBoard: function() {
        var vipDashBoard = Ext.ComponentQuery.query("#vipDashBoard")[0];

        var vipTotalsList = vipDashBoard.query("#vipTotalsList")[0];
        var vipTotalsListStore = vipTotalsList.getStore();
        var component = vipDashBoard;
        var list = component.down('#mainList');
        var storeOfList = list.getStore();


        var active_total = 0;
        var prospect_total = 0;


        try{
            var data = storeOfList.getData();
            data.all.forEach(function(obj){
                // TAKE PRECAUTION FOR NAN
                active_total += parseInt(obj.data.totalVIPActiveVendor)? parseInt(obj.data.totalVIPActiveVendor) : 0 ;
                prospect_total += parseInt(obj.data.totalVIPProspectRetailer) ? parseInt(obj.data.totalVIPProspectRetailer):0;
            });
            vipTotalsListStore.setData([{

                active_total:active_total,
                prospect_total:prospect_total
            }]);
        }catch(e){
            console.log(e);

        }


    },

    setTotalProductSummary: function() {
        var vipDashBoard = Ext.ComponentQuery.query("#productsummaryDashboard")[0];

        var vipTotalsList = vipDashBoard.query("#productSummaryList")[0];
        var vipTotalsListStore = vipTotalsList.getStore();
        var component = vipDashBoard;
        var list = component.down('#mainList');
        var storeOfList = list.getStore();


        var tcount_rmpro = 0;
        var tcount_dlink = 0;
        var tcount_ecom = 0;
        var tcount_vip = 0;
        var tcount_ecat = 0;
        var tcount_irguz = 0;



        try{
            var data = storeOfList.getData();
            data.all.forEach(function(obj){
                // TAKE PRECAUTION FOR NAN
                tcount_rmpro += parseInt(obj.data.count_rmpro)? parseInt(obj.data.count_rmpro) : 0 ;
                tcount_dlink += parseInt(obj.data.count_dlink) ? parseInt(obj.data.count_dlink):0;
                tcount_ecom += parseInt(obj.data.count_ecom) ? parseInt(obj.data.count_ecom):0;
                tcount_vip += parseInt(obj.data.count_vip) ? parseInt(obj.data.count_vip):0;
                tcount_ecat += parseInt(obj.data.count_ecat) ? parseInt(obj.data.count_ecat):0;
                tcount_irguz += parseInt(obj.data.count_irugz) ? parseInt(obj.data.count_irugz):0;
            });
            vipTotalsListStore.setData([{

                tcount_rmpro:tcount_rmpro,
                tcount_dlink:tcount_dlink,
                tcount_ecom:tcount_ecom,
                tcount_vip:tcount_vip,
                tcount_ecat:tcount_ecat,
                tcount_irguz:tcount_irguz
            }]);
        }catch(e){
            console.log(e);

        }


    },

    handleSearchInputResult: function(retailerStatus, vendorPartner) {
        console.log(1);
        // CHANGE SCREEN TO SEARCH INPUT SCREEN
        var UINav = RMdatalink.app.getController("UINav");
        var overviewRetailersBtn = Ext.ComponentQuery.query("#overviewRetailersBtn");
        overviewRetailersBtn = overviewRetailersBtn[0];

        UINav.onChangeCardTap(overviewRetailersBtn);




        var allRetailerTab = Ext.ComponentQuery.query("#allRetailerTab")[0];
        var retailerCustomFilterList  = allRetailerTab.down("#retailerCustomFilterList");

        var value = retailerCustomFilterList.getValues();

        value = value || {};
        value.createdByChk = false;
        value.createdAfterChk = false;
        value.contactNameChk = false;
        value.companyTypeChk = false;

        value.allProdChk = false;

        value.StoreWebsiteChk = false;
        value.StoreNameChk = false;
        value.StoreEmailChk = false;
        value.StateChk = false;
        value.PhoneChk = false;
        value.ExpiredChk = false;
        value.CityChk = false;
        value.AccNoChk = false;
        value.eCatStatus =  false;
        value.eComstatus = false;
        value.iRugzStatus = false;
        value.dlstatus = false;
        value.rmprostatus = false;
        value.vipStatus = false;
        value.VendorPartnerChk = false;

         value.vipStatus = true;
        value.vipStatus = true;
        if(retailerStatus){

            value.allProdChk = true;
            value.allProd  =  retailerStatus;


        }
        if(vendorPartner){


            value.VendorPartnerChk = true;
            value.VendorPartner = vendorPartner;
        }





        //

        var vipVendorsSearchSelectField = allRetailerTab.down("#vipVendorsSearchSelectField");
        if(vipVendorsSearchSelectField){


            var options = vipVendorsSearchSelectField.getOptions();
            if(!options || !options.length ){

                var component = vipVendorsSearchSelectField;
                var keyOfRetailer  = 'promo_code_info';
                var flagofRetailer = 'is_promo_code_active';
                var store = Ext.getStore('vendors.Master');
                var data = store.getData();

                var optionArray = [];

                    data.all.forEach(function(obj){

                        var values = obj.data;
                        if( values.is_promo_code_active   && values[keyOfRetailer] ){

                            optionArray.push(obj.raw);

                        }
                    });

                component.setOptions(optionArray);

            }


        }









        retailerCustomFilterList.setValues(value);

        var SearchController = RMdatalink.app.getController("SearchController");
        var customSearchApplyBtn = allRetailerTab.query("#customSearchApplyBtn")[0];
        SearchController .oncustomSearchApplyBtnTap(customSearchApplyBtn);
    },

    handleSearchInputFromProductSummary: function(product, retailerStatus) {
        console.log(1);
        console.log(arguments);



        // CHANGE SCREEN TO SEARCH INPUT SCREEN
        var UINav = RMdatalink.app.getController("UINav");
        var overviewRetailersBtn = Ext.ComponentQuery.query("#overviewRetailersBtn");
        overviewRetailersBtn = overviewRetailersBtn[0];

        UINav.onChangeCardTap(overviewRetailersBtn);




        var allRetailerTab = Ext.ComponentQuery.query("#allRetailerTab")[0];
        var retailerCustomFilterList  = allRetailerTab.down("#retailerCustomFilterList");

        var value = retailerCustomFilterList.getValues();

        value = value || {};
        value.createdByChk = false;
        value.createdAfterChk = false;
        value.contactNameChk = false;
        value.companyTypeChk = false;

        value.allProdChk = false;

        value.StoreWebsiteChk = false;
        value.StoreNameChk = false;
        value.StoreEmailChk = false;
        value.StateChk = false;
        value.PhoneChk = false;
        value.ExpiredChk = false;
        value.CityChk = false;
        value.AccNoChk = false;


        value.eCatStatus =  false;
        value.eComstatus = false;
        value.iRugzStatus = false;
        value.dlstatus = false;
        value.rmprostatus = false;
        value.vipStatus = false;

        value.VendorPartnerChk = false;

        if(product){


            switch(product){

                case "rmpro_summary":
                    value.rmprostatus = true;

                    break;
                case "dlink_summary":
                    value.dlstatus = true;
                    break;
                case "ecom_summary":
                    value.eComstatus = true;
                    break;
                case "vip_summary":
                    value.vipStatus = true;
                    break;
                case "ecat_summary":
                    value.eCatStatus =  true;
                    break;
                case "irugz_summary":
                    value.iRugzStatus = true;
                    break;

                default:break;

            }

        }
        if(retailerStatus){



            value.allProdChk = true;
            value.allProd  =  retailerStatus;



        }







        var vipVendorsSearchSelectField = allRetailerTab.down("#vipVendorsSearchSelectField");
        if(vipVendorsSearchSelectField){


            var options = vipVendorsSearchSelectField.getOptions();
            if(!options || !options.length ){

                var component = vipVendorsSearchSelectField;
                var keyOfRetailer  = 'promo_code_info';
                var flagofRetailer = 'is_promo_code_active';
                var store = Ext.getStore('vendors.Master');
                var data = store.getData();

                var optionArray = [];

                    data.all.forEach(function(obj){

                        var values = obj.data;
                        if( values.is_promo_code_active   && values[keyOfRetailer] ){

                            optionArray.push(obj.raw);

                        }
                    });

                component.setOptions(optionArray);

            }


        }









        retailerCustomFilterList.setValues(value);

        var SearchController = RMdatalink.app.getController("SearchController");
        var customSearchApplyBtn = allRetailerTab.query("#customSearchApplyBtn")[0];
        SearchController .oncustomSearchApplyBtnTap(customSearchApplyBtn);
    },

    getCountForProductsSummary: function() {
        var fnToExecute = function(){

            var vipDashBoard= Ext.ComponentQuery.query("#productsummaryDashboard")[0];
            var component = vipDashBoard;
            var list = component.down('#mainList');
            var storeOfList = list.getStore();

            if( storeOfList){

            }else{
                return;
            }
            var data = storeOfList.getData();

            var optionArray = [];




            this.getCountActiveSummary(storeOfList.getAt(0) , 'rmpro_status' ,'count_rmpro' , "ACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(0) , 'datalink_status', 'count_dlink' , "ACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(0) , 'ecommerce_status', 'count_ecom' , "ACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(0) , 'vip_status', 'count_vip' , "ACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(0) , 'ecatalog_status','count_ecat' , "ACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(0) , 'irugs_status'  , 'count_irugz' , "ACTIVE");


            this.getCountActiveSummary(storeOfList.getAt(1) , 'rmpro_status' ,'count_rmpro' , "INACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(1) , 'datalink_status', 'count_dlink' , "INACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(1) , 'ecommerce_status', 'count_ecom' , "INACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(1) , 'vip_status', 'count_vip' , "INACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(1) , 'ecatalog_status','count_ecat' , "INACTIVE");
            this.getCountActiveSummary(storeOfList.getAt(1) , 'irugs_status'  , 'count_irugz' , "INACTIVE");


            this.getCountActiveSummary(storeOfList.getAt(2) , 'rmpro_status' ,'count_rmpro' , "PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(2) , 'datalink_status', 'count_dlink' , "PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(2) , 'ecommerce_status', 'count_ecom' , "PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(2) , 'vip_status', 'count_vip' , "PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(2) , 'ecatalog_status','count_ecat' , "PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(2) , 'irugs_status'  , 'count_irugz' , "PROSPECT");


            this.getCountActiveSummary(storeOfList.getAt(3) , 'rmpro_status' ,'count_rmpro' , "HOT_PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(3) , 'datalink_status', 'count_dlink' , "HOT_PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(3) , 'ecommerce_status', 'count_ecom' , "HOT_PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(3) , 'vip_status', 'count_vip' , "HOT_PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(3) , 'ecatalog_status','count_ecat' , "HOT_PROSPECT");
            this.getCountActiveSummary(storeOfList.getAt(3) , 'irugs_status'  , 'count_irugz' , "HOT_PROSPECT");


            this.getCountActiveSummary(storeOfList.getAt(4) , 'rmpro_status' ,'count_rmpro' , "PENDING");
            this.getCountActiveSummary(storeOfList.getAt(4) , 'datalink_status', 'count_dlink' , "PENDING");
            this.getCountActiveSummary(storeOfList.getAt(4) , 'ecommerce_status', 'count_ecom' , "PENDING");
            this.getCountActiveSummary(storeOfList.getAt(4) , 'vip_status', 'count_vip' , "PENDING");
            this.getCountActiveSummary(storeOfList.getAt(4) , 'ecatalog_status','count_ecat' , "PENDING");
            this.getCountActiveSummary(storeOfList.getAt(4) , 'irugs_status'  , 'count_irugz' , "PENDING");


            this.getCountActiveSummary(storeOfList.getAt(5) , 'rmpro_status' ,'count_rmpro' , "Undefined");
            this.getCountActiveSummary(storeOfList.getAt(5) , 'datalink_status', 'count_dlink' , "Undefined");
            this.getCountActiveSummary(storeOfList.getAt(5) , 'ecommerce_status', 'count_ecom' , "Undefined");
            this.getCountActiveSummary(storeOfList.getAt(5) , 'vip_status', 'count_vip' , "Undefined");
            this.getCountActiveSummary(storeOfList.getAt(5) , 'ecatalog_status','count_ecat' , "Undefined");
            this.getCountActiveSummary(storeOfList.getAt(5) , 'irugs_status'  , 'count_irugz' , "Undefined");

        };
        var me = this;




        var fnToCall  = 'getCountActiveRetailer';




            fnToCall  = 'getCountActiveSummary';
            fnToExecute.call(me);


        // setTimeout( function(){
        //     fnToCall  = 'getCountProspectRetailer';
        //     fnToExecute.call(me);
        // } ,2000 );

    },

    getCountActiveSummary: function(record, productstring, recordKey, status) {


        var vendor_name = record.data.vendor_name;
        var queryToExecute = getSearchQuery( 'store_products.' + productstring  );


        startSearch(queryToExecute) ;


        function getSearchQuery(string ,values){

            var query = {} ;
            query.$and = [] ;
            var temp = { $or:[] };
            var q = {} ;


            var objectTOPush = {};




                if(status == 'Undefined'){

        /*
        {                '$and': [
                            {
                                '$or':[
        								{ delete_status: { $exists: false} },
        								{ "delete_status": false       }
        							  ]
                            },{
                                '$or':[
                                  {'store_products.rmpro_status':{
                                  '$exists':false
                                 }} ,
                                 {'store_products.rmpro_status':null}

                                ]

                                }
                        ]}
        */

        //  IF UNDDEFINED THE ORDONDITION SHOULD LOOK LIKE ABOVE STATEMENT .
        // EXECUTE ABOVE STATEMENT IN ROBOMONGO TO UNDESTAND

                    var orCondition = [];
                    objectTOPush[string] = {
                        '$exists':false
                    };
                    var nullObject = {};

                    nullObject[string] = null;
                    orCondition.push(objectTOPush);
                    orCondition.push(nullObject);

                    query.$and.push(  {'$or':orCondition}        );



                }else{
                      objectTOPush[string] = status;
                    query.$and.push(  objectTOPush        );
                }





            return query ;
        }





        function startSearch(qry){
            var searchQuery =  qry ;
            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:1,pageSize: 50 ,sortBy:{"store_name":1},
                                        query:searchQuery,fields:{ '_id':1}},success,error);



        }




        var me = this;
        function success(){

            console.log("1" , arguments);

            record.set(recordKey , arguments[0].count );
            me.setTotalProductSummary();

        }

        function error(){

            console.log("2" , arguments);

        }















    }

});