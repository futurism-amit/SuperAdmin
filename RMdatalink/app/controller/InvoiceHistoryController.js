/*
 * File: app/controller/InvoiceHistoryController.js
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

Ext.define('RMdatalink.controller.InvoiceHistoryController', {
    extend: 'Ext.app.Controller',

    config: {
        displayGeneratedInvoice: false,
        isSearchForInvoice: false,
        invoiceSearchTime: 0,
        inVoiceSearchTimeOut: 1000,

        control: {
            "button[itemId=billingDtlsViewCurrentSubBtn]": {
                tap: 'onbillingDtlsViewCurrentSubBtnTap'
            },
            "searchfield[itemId=biilingInvoiceSearchForRtTxtFld]": {
                keyup: 'onbiilingInvoiceSearchForRtTxtFldKeyup'
            },
            "button[itemId=biilingInvoiceSearchForRtBtn]": {
                tap: 'onbiilingInvoiceSearchForRtBtnTap'
            },
            "button[itemId=biilingInvoiceDeleteBtn]": {
                tap: 'onbiilingInvoiceDeleteBtnTap'
            }
        }
    },

    onbillingDtlsViewCurrentSubBtnTap: function(button, e, eOpts) {
         var invoiceController = RMdatalink.app.getController('InvoiceController') ;
            var rtRecord = invoiceController.config.selectedRetailer ;
         invoiceController.initInvoice(rtRecord);
    },

    onbiilingInvoiceSearchForRtTxtFldKeyup: function(textfield, e, eOpts) {
        this.initSearchForInvlice() ;
    },

    onbiilingInvoiceSearchForRtBtnTap: function(button, e, eOpts) {
        this.initSearchForInvlice(true) ;
    },

    onbiilingInvoiceDeleteBtnTap: function(button, e, eOpts) {
        RMdatalink.app.getController('DeleteRecords').deleteInvoiceFromHistory() ;
    },

    initInvoiceHistory: function() {


        var retailer = RMdatalink.app.getController('InvoiceController').config.selectedRetailer ;

        var retailer_id = retailer.get("_id");

        this.searchInvoicesForRt("",1,50,retailer_id);
    },

    searchInvoicesForRt: function(searchText, page_no, pageSize, retailer_id) {


            var searchQuery ={'$or':[
                                                    { "invoice_product": { $regex: searchText , $options: 'i' } },
                                                    { "due_date": { $regex: searchText  , $options: 'i' } },
                                                    { "invoice_number": { $regex: searchText  , $options: 'i' } }
                             ]};

                var tquery = {'$and':[

                      {"retailer_id" : retailer_id},
                       searchQuery

                ]};


                 RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_invoice_history",pageNo:page_no ,pageSize: 50 ,sortBy:{},
                 query:tquery,
                 fields:{}},success,error);



        function success(){

           console.log(arguments[0].items) ;

             if(page_no > 1 && arguments[0].items.length == 0 ){


                rollBackPageNo() ;
                Ext.Msg.alert("Alert","Next page is not available.",Ext.emptyFn);
                return;
            }

            setInvoiceHistoryStore(arguments[0].items) ;


             Ext.Viewport.setMasked(false) ;


        }

        function error(){
              Ext.Viewport.setMasked(false) ;

        }


        function setInvoiceHistoryStore(data){

            var InvoiceHistoryStore = Ext.getStore('InvoiceHistoryStore') ;
            InvoiceHistoryStore.removeAll();
            InvoiceHistoryStore.sync();

            InvoiceHistoryStore.setData(data);
            InvoiceHistoryStore.sync() ;

        }


        function rollBackPageNo(){
             var store = Ext.getStore('InvoiceHistoryStore');
            store.setPageNo( parseInt(page_no) - 1 ) ;
        }

    },

    generateInvoiceForRt: function(invoice) {
        var that = this ;

        Ext.Viewport.setMasked( {
                        xtype: 'loadmask',message:'Generating Invoice'
                    });


        var InvoiceHistoryStore = Ext.getStore('InvoiceHistoryStore') ;




        RMdatalink.util.DataLoader.sendNewRecordForRetailerToServer(invoice,InvoiceHistoryStore,success,error) ;


        function success(){

            console.log(arguments) ;
              Ext.Viewport.setMasked(false);
            goForPrinting() ;
            RMdatalink.app.getController('InvoiceHistoryController').initInvoiceHistory() ;

        }


        function error(){
             Ext.Viewport.setMasked(false);
        }



        function goForPrinting(){

            if(invoice.invoice_product == "product_datalink"){

                 if(Ext.ComponentQuery.query('#InvoicePage')[0]){

                        Ext.ComponentQuery.query('#InvoicePage')[0].destroy() ;
                    }






                    var printTimeout = setTimeout(function(){


                                                   Ext.widget('InvoicePage').show();


                       RMdatalink.app.getController('InvoiceController').setDatalinkInvoiceToPrint();

                                    that.setUpNextInvoice(invoice) ;

                                                    clearTimeout(printTimeout);


                    },100);

            }else if(invoice.invoice_product == "product_rmpro"){


                   if(Ext.ComponentQuery.query('#InvoicePage')[0]){

                        Ext.ComponentQuery.query('#InvoicePage')[0].destroy() ;
                    }






                    var printTimeout = setTimeout(function(){


                                                       Ext.widget('InvoicePage').show();
                                                       RMdatalink.app.getController('InvoiceController').setRMproInvoiceToPrint();
                                                       that.setUpNextInvoice(invoice) ;
                                                       clearTimeout(printTimeout);


                    },100);

            }
        }
    },

    updateInvoice: function() {
        var that = this ;
        Ext.Msg.confirm("Confirm","Are you sure you want to update invoice ?",onMessageAns ,this);


        function onMessageAns(action,opt,confirmBox){


            if(action == "yes"){

                 Ext.Viewport.setMasked({
                                            xtype: 'loadmask'
                                        });


                updateInvoiceConfirm() ;

            }else{
                return ;
            }


        }

         var dataToUpdateWId = new Object();

        var invoiceRec ;

        function updateInvoiceConfirm(){

             invoiceRec = Ext.ComponentQuery.query('#billingDtHistoryListPanel')[0].down('#mainList').getSelection()[0] ;
            var invoiceHistoryStore = Ext.getStore('InvoiceHistoryStore') ;


            var dataToupdate = new Object() ;

            if(invoiceRec.data.invoice_product == "product_datalink"){
                 dataToupdate = that.getDatalinkInvoice() ;
            }else if(invoiceRec.data.invoice_product == "product_rmpro"){
                dataToupdate = that.getRmPRoInvoice() ;
            }

            if(!dataToupdate){
                  Ext.Viewport.setMasked(false);
                  return ;
            }


            for(var t in dataToupdate){

                if( t != "_id" )
                {
                    dataToUpdateWId[t] = dataToupdate[t] ;
                }

                console.log(t);
            }



          //delete dataToupdate._id ;

           RMdatalink.iwa.rdl.doUpdateCollection(invoiceHistoryStore, dataToUpdateWId , invoiceRec.get('_id'), suc, err);





        }






                    function suc(){



                        invoiceRec.set(dataToUpdateWId);
                        invoiceRec.dirty= true;

                        Ext.Viewport.setMasked(false);



                    }
                    function err(){

                        console.error(arguments);
                            Ext.Viewport.setMasked(false);
                    }
    },

    validateInvoiceForGenerarion: function(product_name) {
            var that = this ;
            var retailer = RMdatalink.app.getController('InvoiceController').config.selectedRetailer ;

            var retailer_id = retailer.get("_id");

            var product_billng =  retailer.get("product_billng");

            var inititialActivationData = product_billng[product_name] ?  product_billng[product_name].initial_activation_date : "" ;

            var invoice_id= "";

            var invoice_product = product_name ;

            var retailer_details = {

            };

            var invoice_product = "";

            var invoice_number = that.getInvoiceNo();

            var due_date = "" ;

            var invoice =   product_billng[product_name] ;

            invoice.retailer_id = retailer_id ;

        if(!invoice.invoice_number)
        {
            invoice.invoice_number = invoice_number ;
        }

        if(!invoice.invoice_id)
        {
            invoice.invoice_id = invoice_id ;
        }
            invoice.invoice_product = product_name ;


            invoice.retailer_details = retailer_details ;



            var validationResult = true ;

            var msg = "invalid invoice due to <break/>" ;

            if(! invoice.initial_activation_date){
                validationResult =false ;
                msg += "Initial activation date is not set.<break/>";
            }

            if(! invoice.payment_period ){

                invoice.payment_period =1 ;
            }


            if(! invoice.payment_period_start && invoice.initial_activation_date ){

                 invoice.payment_period_start = invoice.initial_activation_date ;

                 invoice.payment_period_end = that.getAMDateByAddingMonths(invoice.initial_activation_date , invoice.payment_period) ;


            }


        if(validationResult){

            that.generateInvoiceForRt(invoice) ;

        }else{

            Ext.Msg.alert("Alert", msg);
        }
    },

    setUpNextInvoice: function(invoice) {



            var that = this ;
            var invoiceController = RMdatalink.app.getController('InvoiceController') ;
            var product_name = invoice.invoice_product ;

            var masterStore = Ext.getStore('retailersMaster');


         var invoiceBackup = new Object(invoice) ;


             invoice.payment_period_start = invoice.payment_period_end ;

        if(invoice.payment_frequency){

            invoice.payment_period_end  = that.getAMDateByAddingMonths( invoice.payment_period_end,invoice.payment_frequency );

            invoice.payment_period = invoice.payment_frequency;


        }else{

            invoice.payment_period_end  = that.getAMDateByAddingMonths( invoice.payment_period_end,invoice.payment_period);
        }

             invoice.advance_payment_period = null ;

             invoice.invoice_number = that.getInvoiceNo() ;
             invoice.invoice_id = RMdatalink.util.globalMethods.getAmToday() ;
             invoice.due_date = invoice.payment_period_start  ;
             invoice.ammount_paying = 0 ;

             invoice.payments = [] ;
            var rtRecord = invoiceController.config.selectedRetailer ;

            var dataToUpdate = {

                product_billng : rtRecord.data.product_billng
            };

            var productData = dataToUpdate.product_billng[product_name] ;


            dataToUpdate.product_billng[product_name] = invoice ;


            console.error(dataToUpdate) ;



            Ext.Viewport.setMasked( {
                            xtype: 'loadmask'
                        });

           RMdatalink.iwa.rdl.doUpdateCollection(masterStore, dataToUpdate , rtRecord.get('_id'), suc, err);


                    function suc(){

                        rtRecord.set('product_billng',dataToUpdate.product_billng);
                         Ext.Function.defer(resetView, 1000, that);
                        Ext.Viewport.setMasked(false);

                    }
                    function err(){
                            Ext.Viewport.setMasked(false);
                    }










        function resetView(){

            RMdatalink.app.getController('InvoiceController').initInvoice(rtRecord);

        }
    },

    getAMDateByAddingMonths: function(date, months) {
                        var today = new Date(date) ;

                        months = parseInt(months,0) ;

                        today.setMonth(today.getMonth() + months) ;


                        var dd = today.getDate();
                        var mm = today.getMonth()+1; //January is 0!

                        var yyyy = today.getFullYear();
                        if(dd<10)
                        {
                            dd='0'+dd ;
                        }
                        if(mm<10)
                        {
                            mm='0'+mm ;
                        }

                        return (mm+'/'+dd+'/'+yyyy);
    },

    getInvoiceNo: function() {

                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth()+1; //January is 0!

                        var yyyy = today.getFullYear();
                        if(dd<10)
                        {
                            dd='0'+dd ;
                        }
                        if(mm<10)
                        {
                            mm='0'+mm ;
                        }

                        var hr = today.getHours();

                        var min = today.getMinutes();

                        var sec = today.getSeconds();



                        var rt = ""+ mm+dd+yyyy+hr+min+sec+"";
                        rt = parseInt(rt,0);

                        return rt ;
    },

    onHistoryInvoiceSelect: function(list, record, eOpts) {
        console.log(record);


        this.config.displayGeneratedInvoice = true ;

         var invoiceController = RMdatalink.app.getController('InvoiceController') ;
        invoiceController.config.product_billing_rec = {} ;
            invoiceController.config.product_billing_rec[record.data.invoice_product] = record.raw ;

        invoiceController.config.isManualChange = false ;

        if(record.data.invoice_product  == "product_rmpro"){



                  Ext.ComponentQuery.query('#productRmproInvoicePanel')[0].setHidden(false);

                  Ext.ComponentQuery.query('#productDatalinkInvoicePanel')[0].setHidden(true);

                 initRMpro() ;


        }else if(record.data.invoice_product  == "product_datalink"){

                  Ext.ComponentQuery.query('#productRmproInvoicePanel')[0].setHidden(true);

                  Ext.ComponentQuery.query('#productDatalinkInvoicePanel')[0].setHidden(false);

                 initDataLink() ;
        }

         invoiceController.config.isManualChange = true ;

        function initRMpro()
        {


              invoiceController.resetRmproInvoice() ;

                invoiceController.setRMProBillInVoice() ;

                invoiceController.setRMProBillingModules() ;



        invoiceController.setInvoiceRmproDiscount(Ext.ComponentQuery.query('#invoiceRmProPaymentPrdSlFld')[0].getValue(),true);


        }

        ///////////////////////init datalink


        function initDataLink(){


               invoiceController.resetDatalinkInvoice() ;



                invoiceController.setDatalinkBillInVoice() ;

                invoiceController.setDatalinkBillingModules() ;

               invoiceController.setInvoiceDatalinkDiscount(Ext.ComponentQuery.query('#invoiceDatalinkPaymentPrdSlFld')[0].getValue(),true);


        }
    },

    initSearchForInvlice: function(startInstantSearch) {
        var that = this ;

        if(startInstantSearch){
          startSearch() ;
        }

        if(! that.config.isSearchForInvoice ){

            createTimeOut() ;

        }else{

             that.config.invoiceSearchTime = 100 ;
        }

        function createTimeOut(){

            that.config.isSearchForInvoice = true ;

            Ext.Function.defer( onInterval , 100, that);


        }

        function onInterval(){

            that.config.invoiceSearchTime += 100 ;

            if(that.config.invoiceSearchTime < that.config.inVoiceSearchTimeOut)  {
                createTimeOut() ;
            } else{

                that.config.invoiceSearchTime = 0 ;
                startSearch() ;
            }

        }



        function startSearch(){

                that.config.isSearchForInvoice = false ;




                var searchText =  Ext.ComponentQuery.query('#biilingInvoiceSearchForRtTxtFld')[0].getValue() ;

                var retailer = RMdatalink.app.getController('InvoiceController').config.selectedRetailer ;

                var retailer_id = retailer.get("_id");

                that.searchInvoicesForRt(searchText,1,50,retailer_id);
        }
    },

    getRmPRoInvoice: function() {

        var that = this ;

        var invoiceController = RMdatalink.app.getController('InvoiceController') ;


        var rmProInvoicePanel = Ext.ComponentQuery.query('#productRmproInvoicePanel')[0] ;
        var dataToUpdate = {

            product_billng : invoiceController.config.product_billing_rec   //rtRecord.data.product_billng
        };

        var product_rmpro = dataToUpdate.product_billng.product_rmpro ;


        product_rmpro.commission_percent = rmProInvoicePanel.down('#invoiceCommissionPercentFld').getValue() ;
        product_rmpro.commissionable_ammount = rmProInvoicePanel.down('#invoiceCommissionableAmtFld').getValue() ;

        product_rmpro.sales_persons = getSalesPersons() ;

        product_rmpro.total_payble = rmProInvoicePanel.down('#invoiceTotalPaybleFld').getValue() ;
        product_rmpro.payment_period = rmProInvoicePanel.down('#invoiceRmProPaymentPrdSlFld').getValue() ;


        product_rmpro.past_due = rmProInvoicePanel.down('#invoicePastDueFld').getValue() ;
        product_rmpro.balance_due = rmProInvoicePanel.down('#invoiceBalanceDueFld').getValue() ;

        product_rmpro.pay_date = rmProInvoicePanel.down('#invoicePayDateFld').getValue() ;
        product_rmpro.paid_by = rmProInvoicePanel.down('#invoicePaidByFld').getValue() ;
        product_rmpro.payment_method_detail = rmProInvoicePanel.down('#invoicePaymentDetailFld').getValue() ;
        product_rmpro.cc_approval = rmProInvoicePanel.down('#invoiceCCApprovalFld').getValue() ;

        product_rmpro.proccessed_by = rmProInvoicePanel.down('#invoiceProcessedByFld').getValue() ;
        product_rmpro.date = rmProInvoicePanel.down('#invoiceRMProDateFld').getValue() ;

        product_rmpro.ammount_paying = rmProInvoicePanel.down('#invoiceAmmountFld').getValue() ;


        product_rmpro.payment_period_start = rmProInvoicePanel.down('#rmProSubscrPaymentStartDateFld').getValue() ;

        product_rmpro.payment_period_end  =  rmProInvoicePanel.down('#rmProSubscrPaymentEndDateFld').getValue() ;

        product_rmpro.due_date  = rmProInvoicePanel.down('#rmProSubscrPaymentDueDateFld').getValue() ;

        product_rmpro.payment_note = rmProInvoicePanel.down('#rmProPaymentNoteFld').getValue() ;

        console.error(product_rmpro) ;


        return product_rmpro ;




            function getSalesPersons(){
                return getArrayDataFromStore(Ext.getStore('products.RtSalesPersonStore'));
            }



            function getArrayDataFromStore(store){

                var data = new Array();
                data = store.getData().items;

                var dataToReturn = new Array();

                for(var i=0; i < data.length ; i++){

                    dataToReturn.push(data[i].data);
                }

                return dataToReturn ;

            }
    },

    getDatalinkInvoice: function() {
        var that = this ;
        var invoiceController = RMdatalink.app.getController('InvoiceController') ;


        var rmProInvoicePanel = Ext.ComponentQuery.query('#productDatalinkInvoicePanel')[0] ;


        var dataToUpdate = {

            product_billng : invoiceController.config.product_billing_rec // rtRecord.data.product_billng
        };

        var product_datalink = dataToUpdate.product_billng.product_datalink ;


        product_datalink.commission_percent = rmProInvoicePanel.down('#invoiceDatalinkCommissionPercentFld').getValue() ;
        product_datalink.commissionable_ammount = rmProInvoicePanel.down('#invoiceDatalinkCommissionableAmtFld').getValue() ;

        product_datalink.sales_persons = getSalesPersons() ;

        product_datalink.total_payble = rmProInvoicePanel.down('#invoiceDatalinkTotalPaybleFld').getValue() ;
        product_datalink.payment_period = rmProInvoicePanel.down('#invoiceDatalinkPaymentPrdSlFld').getValue() ;


        product_datalink.past_due = rmProInvoicePanel.down('#invoiceDatalinkPastDueFld').getValue() ;
        product_datalink.balance_due = rmProInvoicePanel.down('#invoiceDatalinkBalanceDueFld').getValue() ;

        product_datalink.pay_date = rmProInvoicePanel.down('#invoiceDatalinkPayDateFld').getValue() ;
        product_datalink.paid_by = rmProInvoicePanel.down('#invoiceDatalinkPaidByFld').getValue() ;
        product_datalink.payment_method_detail = rmProInvoicePanel.down('#invoiceDatalinkPaymentDetailFld').getValue() ;
        product_datalink.cc_approval = rmProInvoicePanel.down('#invoiceDatalinkCCApprovalFld').getValue() ;

        product_datalink.proccessed_by = rmProInvoicePanel.down('#invoiceDatalinkProcessedByFld').getValue() ;
        product_datalink.date = rmProInvoicePanel.down('#invoiceDatalinkDateFld').getValue() ;

        product_datalink.ammount_paying = rmProInvoicePanel.down('#invoiceDatalinkAmmountFld').getValue() ;



        product_datalink.payment_period_start = rmProInvoicePanel.down('#datalinkSubscrPaymentStartDateFld').getValue() ;

        product_datalink.payment_period_end  =  rmProInvoicePanel.down('#datalinkSubscrPaymentEndDateFld').getValue() ;

        product_datalink.due_date  = rmProInvoicePanel.down('#datalinkSubscrPaymentDueDateFld').getValue() ;


        product_datalink.payment_note = rmProInvoicePanel.down('#datalinkPaymentNoteFld').getValue() ;



        console.error(product_datalink) ;

        return product_datalink ;





        function getSalesPersons(){
            return getArrayDataFromStore(Ext.getStore('invoice.RtDatalinkSalesPersonStore'));
        }



          function getArrayDataFromStore(store){

                var data = new Array();
                data = store.getData().items;

                var dataToReturn = new Array();

                for(var i=0; i < data.length ; i++){

                    dataToReturn.push(data[i].data);
                }

                return dataToReturn ;

            }


    }

});