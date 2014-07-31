/*
 * File: app/controller/BillingReportController.js
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

Ext.define('RMdatalink.controller.BillingReportController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button[itemId=billingGenerateReportBtn]": {
                tap: 'onbillingGenerateReportBtnTap'
            },
            "button[itemId=billingGenerateYearlyReportBtn]": {
                tap: 'onBillingGenerateYearlyReportBtnTap'
            },
            "textfield[itemId=billingReportTargetAmtFild]": {
                change: 'onbillingReportTargetAmtFildChange'
            }
        }
    },

    onbillingGenerateReportBtnTap: function(button, e, eOpts) {


        this.generateMonthlyReport() ;
    },

    onBillingGenerateYearlyReportBtnTap: function(button, e, eOpts) {


        this.generateYearlyReport() ;
    },

    onbillingReportTargetAmtFildChange: function(textfield, newValue, oldValue, eOpts) {


        var reportStore = Ext.getStore('billing.MonthlyReportStore') ;

        var reportForm = Ext.ComponentQuery.query('#billingMonthlyReportForm')[0] ;

        var avg = reportForm.down('#billingReportAvgAmtFild').getValue() ;

        var accountsReq = newValue/avg ;

        accountsReq =Math.round(accountsReq) ;

        reportForm.down('#billingReportNewAccToBeAddedFild').setValue(accountsReq) ;
    },

    initBillingReport: function() {


        var reportStore = Ext.getStore('billing.MonthlyReportStore') ;

        if(reportStore.getData().all.length == 0){


        this.loadRetailers("",1,50);

        }

    },

    loadRetailers: function(searchText, page_no, pageSize) {
        var store_status= "ACTIVE" ;
         var reportScreen = Ext.ComponentQuery.query('#billingReportScreen')[0] ;


        reportScreen.setMasked( {
                        xtype: 'loadmask',message:'Loading Retailers'
                    });


        var that = this ;

            if(store_status && store_status !== "")
             {

                 var tStatus = store_status ;
                 if(store_status=="PROSPECTS"){
                     tStatus = "PROSPECT" ;
                 }else if(store_status == "HOT_PROSPECTS"){
                       tStatus = "HOT_PROSPECT" ;
                 }

                 var pStatus = null ;
                 if(store_status == "INACTIVE"){
                     pStatus =  {'$and':
                      [
                         {"store_products.datalink_status" : tStatus},
                         {"store_products.ecatalog_status" : tStatus},
                         {"store_products.ecommerce_status" :tStatus},
                         {"store_products.irugs_status" : tStatus},
                         {"store_products.rmpro_status" : tStatus}
                      ]} ;
                 }else
                 {
                     pStatus =  {'$or':
                        [
                         {"store_products.datalink_status" : tStatus},
                         {"store_products.ecatalog_status" : tStatus},
                         {"store_products.ecommerce_status" :tStatus},
                         {"store_products.irugs_status" : tStatus},
                         {"store_products.rmpro_status" : tStatus}
                         ]} ;
                 }

                 var searchQuery =

                      {'$or':[
                                                    { "store_name": { $regex: searchText  , $options: 'i' } },
                                                    { "store_state": { $regex: searchText  , $options: 'i' } },
                                                    { "store_city": { $regex: searchText  , $options: 'i' } },
                                                    { "store_zip": { $regex: searchText  , $options: 'i' } }
                             ]} ;

                 var tquery = {'$and':[
                    searchQuery,
                     pStatus

                ]} ;


                 RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:page_no ,pageSize: 50 ,sortBy:{"store_name":1},
                 query:tquery,
                fields:{"store_name":1}},success,error);
             }else{

                var searchQuery =  that.getSearchQuery(store_status) ;
                 var tquery = {
                     '$and':
                     [

                    searchQuery

                ]} ;


                 RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:page_no ,pageSize: 50 ,sortBy:{"store_name":1},
                 query:tquery,
                fields:{}},success,error);

             }





            function success(){



                   reportScreen.setMasked(false);

                if(page_no > 1 && arguments[0].items.length ==0 ){


                  //  rollBackStorePageNo() ;

                    Ext.Msg.alert("Alert","Next page is not available.",Ext.emptyFn);
                    return;
                }
                   setRetailersList(arguments[0].items) ;
                  //  setTotalList(arguments[0].count);



            }

            function error(){

                  reportScreen.setMasked(false);
            }

            function rollBackStorePageNo(){

                var activeListStore =   Ext.getStore('billing.MonthlyReportStore');


                if(activeListStore)
                {
                    activeListStore.setPageNo( parseInt(page_no) - 1 ) ;
                }

            }


            function setTotalList(count){


            }

            function setRetailersList(data){

                var rtsStore = getStoreByRemovePreviousRetailers();
                rtsStore.setData(data);
                rtsStore.sync();


                var reportStore = Ext.getStore('billing.YearlyReportStore') ;
                reportStore.setData(data);
                reportStore.sync();
            // RMdatalink.app.getController('PaginationController').loadDependentStoresonMaster('retailersMaster');
            }






        function getStoreByRemovePreviousRetailers(){

             var rtStore =  Ext.getStore('billing.MonthlyReportStore');


            rtStore.removeAll();
            rtStore.sync();

             var reportStore = Ext.getStore('billing.YearlyReportStore') ;
                reportStore.removeAll();
                reportStore.sync();

            return rtStore;
        }

    },

    generateMonthlyReport: function() {
         var reportScreen = Ext.ComponentQuery.query('#billingReportScreen')[0] ;
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ;



        var reportStore = Ext.getStore('billing.MonthlyReportStore') ;

        var reportForm = Ext.ComponentQuery.query('#billingMonthlyReportForm')[0] ;

        var product_name = reportForm.down('#billingReportSelectProductFld').getValue();
        var from = reportForm.down('#billingReportFromDateFld').getValue();
        var to = reportForm.down('#billingReportToDateFld').getValue();


        getMonthlyReport();

        return ;


        var today = new Date();
        var month = today.getMonth() +1 ;
        var year = today.getFullYear() ;
        if(! from && ! to){

         var appendZeroM = month.toString() ;
            if(month < 10){

                appendZeroM = "0"+month ;
            }


            from = (appendZeroM + "/01/" + year) ;
            to = (appendZeroM + "/30/" + year) ;
        }else
        if( from && ! to)
        {
        //      from = new Date(from) ;
             month = from.getMonth() +1 ;
             year = from.getYear() ;

             to = (month + "/30/" + year) ;
        }else
        if( !from && to)
        {
        //       to = new Date(to) ;
             month = to.getMonth() +1 ;
             year = to.getYear() ;

             from = (month + "/01/" + year) ;
        }else{


            var period = RMdatalink.util.globalMethods.getDateDifferenceInDays(from,to);

            if(period > 240){

                Ext.Msg.alert("Alert","Please Enter Period less than 8 Month");
                return ;
            }
        //       from = new Date(from) ;
        //       to = new Date(to) ;

        }

        reportScreen.setMasked( {
                        xtype: 'loadmask',message:'Generating Report'
                    });
        var searchQuery1 = {} ;
        var searchQuery2 = {} ;

        searchQuery1.due_date = { $gte : from }  ;
        searchQuery2.due_date = { $lte : to }  ;

        var index = 0 ;
        var maxIndex = reportStore.getData().all.length ;
        var rtRec = null ;

        var tFrom = new Date(from);
        var dataToLoad = {


        } ;

        var startMonth = tFrom.getMonth() ;

        for(var i =0 ; i < 1 ;i++){

            var tempMonth =  0;
            tempMonth =  (startMonth + i) % 12 ;

            dataToLoad["month" + i] = monthNames[tempMonth] ;
        }


        var headerStore = Ext.getStore('billing.ListHeaderStore') ;
        headerStore.removeAll();
        headerStore.sync();

        headerStore.setData([dataToLoad]) ;
        headerStore.sync() ;


        //loadSearch() ;

        function loadSearch(){

            if(index < maxIndex){

                rtRec = reportStore.getAt(index) ;

                var tquery = {'$and':
                      [
                         { "retailer_id" : rtRec.get('_id') },
                         { "invoice_product":product_name } ,
                          searchQuery1,
                          searchQuery2
                       ]
                    };
                console.log(tquery);
                doSearch(tquery) ;
            }else{

                 reportScreen.setMasked(false);
            }


        }

        function doSearch(query){


            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_invoice_history",pageNo:1 ,pageSize: 50 ,sortBy:{'due_date':1},
                 query:query,
                 fields:{}},success,error);
        }

        function success(){
            // reportScreen.setMasked(false);
            console.log(arguments);

            if(arguments[0].items.length > 0){
                var temp = 1 ;
                for(var i =0 ; i < arguments[0].items.length ; i++) {
                    temp = i ;
                    rtRec.set("month"+temp,arguments[0].items[i].total_payble);

                }
            }

            index ++;
            loadSearch() ;
        }


        function error(){
                index ++;
                loadSearch() ;
             //reportScreen.setMasked(false);
        }




        function getMonthlyReport(){

            function successCallback(){
                console.log(arguments);

                var total = 0 ;

                for(var i=0 ; i < reportStore.getData().all.length; i++){


                    var idx = i % 5 ;

                    var record = reportStore.getAt(i);

                    total += parseInt(arguments[0].items[idx].total_payble, 0) ;
                    record.set('month0',arguments[0].items[idx].total_payble);
                }


                // reportForm.down('#billingReportTotalAmtFild')[0].setValue(arguments[0].sum_of_total_payble);
                 reportForm.down('#billingReportTotalAmtFild').setValue(total);

                var avg =  total/reportStore.getData().all.length ;

                avg = Math.round((avg * 100 )) / 100 ;
                 reportForm.down('#billingReportAvgAmtFild').setValue(avg);


            }



            function failuerCallback(){

            }
            var today = new Date();
            var month = today.getMonth() +1 ;

            RMdatalink.util.ServerAPI.getReportForMonth(product_name,month,50,successCallback,failuerCallback) ;




            var dataToLoad = {
                month0:monthNames[today.getMonth()]
            };



            var headerStore = Ext.getStore('billing.ListHeaderStore') ;
            headerStore.removeAll();
            headerStore.sync();

            headerStore.setData([dataToLoad]) ;
            headerStore.sync() ;


        }
    },

    generateYearlyReport: function() {
         var reportScreen = Ext.ComponentQuery.query('#billingReportScreen')[0] ;
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ;



        var reportStore = Ext.getStore('billing.YearlyReportStore') ;

        var reportForm = Ext.ComponentQuery.query('#billingYearlyReportForm')[0] ;

        var product_name = reportForm.down('#billingReportSelectProductFld').getValue();
        var from = reportForm.down('#billingReportFromDateFld').getValue();
        var to = reportForm.down('#billingReportToDateFld').getValue();


        getYearlyReport();

        function getYearlyReport(){

            function successCallback(){
                console.log(arguments);

                var total = {} ; //new Array(12);
                var growth = {} ; //new Array(12);
                var growthInPercent = {} ; //new Array(12);

                    total.title =  "Total Existing Contracts" ;

                    growth.title= "Monthly Dollar Growth" ;

                    growthInPercent.title = "Monthly Percent Growth" ;



                for(var j= 0 ; j < 12 ; j++){
                    total["month"+j] = 0 ;

                    growth["month"+j] = 0 ;

                    growthInPercent["month"+j] = 0 ;
                }

                for(var i=0 ; i < reportStore.getData().all.length; i++){


                    var idx = i % 5 ;

                    var record = reportStore.getAt(i);

                    var dataToset = {} ;

                    for(var k=0 ; k < arguments[0].items[idx].total_paybles.length ; k++){

                        dataToset["month"+k] = arguments[0].items[idx].total_paybles[k].total_payble ;

                         total["month"+k] += parseInt(arguments[0].items[idx].total_paybles[k].total_payble, 0) ;;

                         if(k > 0)
                         {
                             growth["month"+k] = total["month"+k] - total["month"+ (k-1)]   ;

                             growthInPercent["month"+k] = ( 100*growth["month"+k] ) / total["month"+ (k-1)] ;

                              growthInPercent["month"+k] =  (Math.round(  growthInPercent["month"+k] * 100) / 100 )+ "%";

                         }else{
                             growth["month"+k] = 0 ;

                             growthInPercent["month"+k] = 0  + "%" ;
                         }
                    }




                    record.set(dataToset);
                }


          console.log(total);


          RMdatalink.util.globalMethods.fillListDataByListObject(reportForm.down('#totalList'),[total,growth,growthInPercent]);
            }



            function failuerCallback(){

            }
            var today = new Date();
            var year = today.getFullYear() ;

            RMdatalink.util.ServerAPI.getReportForYear(product_name,year,50,successCallback,failuerCallback) ;




        }
    }

});