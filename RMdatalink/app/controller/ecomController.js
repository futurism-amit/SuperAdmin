/*
 * File: app/controller/ecomController.js
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

Ext.define('RMdatalink.controller.ecomController', {
    extend: 'Ext.app.Controller',

    config: {
        isUpdateRequest: false,
        rmProSelectedRecord: {
            
        },
        isPricingPolicyUpdated: false,

        control: {
            "button[itemId=ecomAddModuleBtn]": {
                tap: 'onrmProAddModuleBtnTap'
            },
            "button[itemId=ecomNewResetBtn]": {
                tap: 'onrmProNewResetBtnTap'
            },
            "button[itemId=ecomsaveBundleBtn]": {
                tap: 'onSaveBundleBtnTap'
            },
            "button[itemId=ecomDiscountResetBtn]": {
                tap: 'onDatalinkDiscResetBtnTap'
            },
            "button[itemId=ecomDiscountSaveBtn]": {
                tap: 'onDatalinkDiscSavBtnTap'
            }
        }
    },

    onrmProAddModuleBtnTap: function(button, e, eOpts) {

                var action = button.action ;

                this.addUpdateRMproModule(action);



    },

    onrmProNewResetBtnTap: function(button, e, eOpts) {

        this.resetRMPROFlds() ;

          // Ext.ComponentQuery.query('#rmProMainListContainer')[0].down('#mainList').deselectAll() ;
    },

    onSaveBundleBtnTap: function(button, e, eOpts) {
        return ;

        this.saveBundlePrice() ;
    },

    onDatalinkDiscResetBtnTap: function(button, e, eOpts) {

        this.config.datalinkDiscountRecord  = null ;

            Ext.ComponentQuery.query('#datalinkDiscountNameFld')[0].setValue("") ;
            Ext.ComponentQuery.query('#datalinkDiscountValueFld')[0].setValue("") ;

            Ext.ComponentQuery.query('#datalinkDiscountListPanel')[0].down('#mainList').deselectAll();

            Ext.ComponentQuery.query('#datalinkDiscountSaveBtn')[0].setText("Add New Discount");
    },

    onDatalinkDiscSavBtnTap: function(button, e, eOpts) {

        this.doAddUpdateDiscount() ;
    },

    initRMproStore: function() {

                    function loadStore(){
                              if(! RMdatalink.app.getController('PaginationController').config.storesLoadedFirstTime[RMdatalink.app.getController('PaginationController').getCurrentActiveStoreId()]){
                                     RMdatalink.app.getController('PaginationController').loadStore(1,RMdatalink.util.DataLoader.getPageSize(),false);
                          }
                    }

                   RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('products.ecomMain') ;
                   loadStore();


    },

    addUpdateRMproModule: function(action) {


        var that = this ;
        var moduleName = Ext.ComponentQuery.query("#ecomModuleNameTxtFld")[0].getValue();
        var moduleDescription = Ext.ComponentQuery.query("#ecomModuleDescriptionTxtAreaFld")[0].getValue();



        var moduleSku =    Ext.ComponentQuery.query("#ecomSKUTxtFld")[0].getValue();

        var moduleDetails =    Ext.ComponentQuery.query("#ecomDetailsTxtAreaFld")[0].getValue();


        var module_standard_price  =    Ext.ComponentQuery.query("#ecomStandardPriceTxtFld")[0].getValue();
        var module_promotional_price =    Ext.ComponentQuery.query("#ecomPromotionalPriceTxtFld")[0].getValue();

        var moduleListedOrder =    Ext.ComponentQuery.query("#prodecomModuleIndexFld")[0].getValue();
        var module_id =  Ext.ComponentQuery.query("#prodecomModuleProductIdFld")[0].getValue();


        var chargeMeOtcFormPanel = Ext.ComponentQuery.query("#chargeMeOtcFormPanel")[0];
        var charge_mode = chargeMeOtcFormPanel.getValues();





        //productTypeFormE_Comm
        var productTypeFormE_Comm = Ext.ComponentQuery.query("#productTypeFormE_Comm")[0];
        var product_type = productTypeFormE_Comm.getValues();


        var rmProStore = Ext.getStore('products.ecomMain') ;

        if(moduleName == "" ){

            Ext.Msg.alert("Alert","Module name required.",Ext.emptyFn);
            return ;
        }else{

            var rmProRec = {

                module_name : moduleName,
                module_description : moduleDescription,
                module_skus : moduleSku,
                module_details: moduleDetails,
                module_standard_price:module_standard_price,
                module_promotional_price:module_promotional_price,
                module_id:module_id,
                module_listed_order: moduleListedOrder,
                charge_mode:charge_mode.charge_mode,
                product_type:product_type.product_type
            } ;

              Ext.ComponentQuery.query('#productecomMainPanel')[0].setMasked( {
                        xtype: 'loadmask'
                    });
            console.warn(rmProRec);
            if(action == "addNew")
            {
             RMdatalink.util.DataLoader.sendNewRecordForRetailerToServer(rmProRec,rmProStore,success,error) ;
            }
            else{

             RMdatalink.iwa.rdl.doUpdateCollection(rmProStore, rmProRec , this.config.rmProSelectedRecord.get('_id'), success, error);
            }

        }



        function success(){

            that.resetRMPROFlds() ;

            that.config.isPricingPolicyUpdated = true ;

           // Ext.ComponentQuery.query('#rmProMainListContainer')[0].down('#mainList').deselectAll() ;

            if(action == "addNew")
            {

                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('products.ecomMain') ;

                RMdatalink.app.getController('PaginationController').loadStore(1,RMdatalink.util.DataLoader.getPageSize(),false);
                var productsStore = Ext.getStore('products.ecomMain');
                    productsStore.addListener("load" , function(){


                    var productSetupeVipListPanel  = Ext.ComponentQuery.query("#productSetupeVipListPanel")[0];
                    var productSetupecomListPanel  = Ext.ComponentQuery.query("#productSetupecomListPanel")[0];


                        getItemsOfOnlyECommerceFromEcomStore(productSetupecomListPanel);
                        getItemsOfVIPFromEcomStore(productSetupeVipListPanel);

                    } , window , {
                    single:true
                    });

            }else{
                        updateRMPROREC() ;
                        Ext.ComponentQuery.query('#productecomMainPanel')[0].setMasked(false);

                        that.onRmProSelectUnselect();

            }


        }

        function error(){
            Ext.ComponentQuery.query('#productecomMainPanel')[0].setMasked(false);

             Ext.Msg.alert("Failuer","Fail to add/update record.",Ext.emptyFn);
        }

        function updateRMPROREC(){
             that.config.rmProSelectedRecord.set("module_name",moduleName) ;
             that.config.rmProSelectedRecord.set("module_description",moduleDescription) ;
             that.config.rmProSelectedRecord.set("module_skus",moduleSku) ;
             that.config.rmProSelectedRecord.set("module_details",moduleDetails) ;
             that.config.rmProSelectedRecord.set("module_standard_price",module_standard_price) ;
             that.config.rmProSelectedRecord.set("module_promotional_price",module_promotional_price) ;

            that.config.rmProSelectedRecord.set("module_id",module_id) ;
            that.config.rmProSelectedRecord.set("module_listed_order",moduleListedOrder) ;


        }
    },

    onProductRMProListSelect: function(list, record, eOpts) {
        //charge_mode
        console.log(record);

        //ecomSumOfStdPriceLbl
        //ecomSumOfPromoPriceLbl

            this.config.rmProSelectedRecord = record ;

            Ext.ComponentQuery.query("#ecomModuleNameTxtFld")[0].setValue( record.get("module_name"));
            Ext.ComponentQuery.query("#ecomModuleDescriptionTxtAreaFld")[0].setValue(record.get("module_description"));

            Ext.ComponentQuery.query("#ecomSKUTxtFld")[0].setValue(record.get("module_skus"));

            Ext.ComponentQuery.query("#ecomDetailsTxtAreaFld")[0].setValue(record.get("module_details"));

            Ext.ComponentQuery.query("#ecomStandardPriceTxtFld")[0].setValue(record.get("module_standard_price"));
            Ext.ComponentQuery.query("#ecomPromotionalPriceTxtFld")[0].setValue(record.get("module_promotional_price"));

             Ext.ComponentQuery.query("#prodecomModuleIndexFld")[0].setValue(record.get("module_listed_order"));

            Ext.ComponentQuery.query("#prodecomModuleProductIdFld")[0].setValue(record.get("module_id"));


              Ext.ComponentQuery.query('#ecomAddModuleBtn')[0].action = "update";

              Ext.ComponentQuery.query('#ecomAddModuleBtn')[0].setText("Update Module");


        eCommerceListSetupSelecteDRecord = record;
        var chargeMeOtcFormPanel = Ext.ComponentQuery.query("#chargeMeOtcFormPanel")[0];

        // 2 is the defaut value .
        // 2 Represents Monthly  while 1 represents OTC
        var valuesToSt = {
                charge_mode:( record.data.charge_mode || 2 ).toString()
            };
        console.log(valuesToSt);
            chargeMeOtcFormPanel.setValues( valuesToSt );


        var productTypeFormE_Comm = Ext.ComponentQuery.query("#productTypeFormE_Comm")[0];


        // 2 is the defaut value .
        // 2 Represents E-Commerce  while 1 represents VIP

        var valuesToSt = {
                product_type:(  record.data.product_type   || 2).toString()
            };
            productTypeFormE_Comm.setValues( valuesToSt );
        console.log("WOHOOOOOOOO")







        ;
        var form = Ext.ComponentQuery.query('#ecomProductSetupSideP2')[0] ;

        if(record.get("module_sku") == "DL-DATA" ){
                form.down('#delBtn').setHidden(true);
        }else{
            form.down('#delBtn').setHidden(false);
        }





    },

    resetRMPROFlds: function() {


            Ext.ComponentQuery.query('#ecomAddModuleBtn')[0].action = "addNew" ;
            Ext.ComponentQuery.query('#ecomAddModuleBtn')[0].setText("Add New Module");



            Ext.ComponentQuery.query("#ecomModuleNameTxtFld")[0].setValue("");
            Ext.ComponentQuery.query("#ecomModuleDescriptionTxtAreaFld")[0].setValue("");

            Ext.ComponentQuery.query("#ecomSKUTxtFld")[0].setValue("");

            Ext.ComponentQuery.query("#ecomDetailsTxtAreaFld")[0].setValue("");

            Ext.ComponentQuery.query("#ecomStandardPriceTxtFld")[0].setValue("");
            Ext.ComponentQuery.query("#ecomPromotionalPriceTxtFld")[0].setValue("");

            Ext.ComponentQuery.query("#prodecomModuleIndexFld")[0].setValue("");
            Ext.ComponentQuery.query("#prodecomModuleProductIdFld")[0].setValue("");


    },

    onRmProSelectUnselect: function(parent) {
        //ecomSumOfStdPriceLbl
        //ecomSumOfPromoPriceLbl
        //  (  parent  || Ext )
        var timeout = setTimeout(function(){
            var listParent = (  parent  || Ext.ComponentQuery ).query('#ecomMainListContainer')[0];
            var selectedRec =(  parent || listParent ).down('#mainList').getSelection() ;

            var standardPrice = 0 ;
            var promotionalPrice = 0;

            var priceLbl = (  parent  || Ext.ComponentQuery ).query('#ecomSumOfPromoPriceLbl')[0];
            var stdPriceLbl = (  parent  || Ext.ComponentQuery ).query('#ecomSumOfStdPriceLbl')[0];

            priceLbl.setHtml("Total Promotional Price : " + promotionalPrice);
            stdPriceLbl.setHtml("Total Standard Price : " + standardPrice);

            for( var i=0 ; i < selectedRec.length ; i++ ){

                standardPrice += parseInt(selectedRec[i].get('module_standard_price')) ;
                promotionalPrice += parseInt(selectedRec[i].get('module_promotional_price')) ;

            }
            var ecomSumOfPromoPriceLbl = (  parent  || Ext.ComponentQuery ).query('#ecomSumOfPromoPriceLbl')[0];
            var ecomSumOfStdPriceLbl = (  parent  || Ext.ComponentQuery ).query('#ecomSumOfStdPriceLbl')[0];
            ecomSumOfPromoPriceLbl.setHtml("$" + formatNum(promotionalPrice) );
            ecomSumOfStdPriceLbl.setHtml("$" + formatNum(standardPrice) );



            clearTimeout(timeout);
        },100);





        /*

                                            Ext.ComponentQuery.query('#rmProSumOfPromoPriceLbl')[0].setHtml("Total Promotional Price : " + promotionalPrice);
                                            Ext.ComponentQuery.query('#rmProSumOfStdPriceLbl')[0].setHtml("Total Standard Price : " + standardPrice);

        */
    },

    saveBundlePrice: function() {
        return ;

         RMdatalink.app.getController('BillingDetailsController').updateRMProPricing() ;

          Ext.Msg.alert("Success","Bundle price for selected modules saved successfully.",Ext.emptyFn);
    },

    createPricingTab: function() {
        //Ext.ComponentQuery.query('#productsDatalinkPricingTab')[0].add(Ext.ComponentQuery.query('#pricingMainContentsPanel')[0]);
    },

    onDatalinkVendorPricingPainted: function() {

        return ;

        if(Ext.ComponentQuery.query('#productsDatalinkPricingTab')[0].getItems().length == 0 )
        {
            Ext.ComponentQuery.query('#productsDatalinkPricingTab')[0].add(Ext.ComponentQuery.query('#pricingMainContentsPanel')[0]);
        }
        Ext.ComponentQuery.query('#productsDatalinkBtn')[0].fireEvent("tap",Ext.ComponentQuery.query('#productsDatalinkBtn')[0]);


        var pricingMainContentPanel = Ext.ComponentQuery.query('#pricingDetailsMainTabPanel')[0] ;

        pricingMainContentPanel.getTabBar().getAt(1).setHidden(true);
        pricingMainContentPanel.getTabBar().getAt(2).setHidden(true);
        pricingMainContentPanel.getTabBar().getAt(3).setHidden(true);
        pricingMainContentPanel.getTabBar().getAt(4).setHidden(true);


        Ext.ComponentQuery.query('#pricingMainContentsPanel')[0].down('#detailsHeaderTitle').setHidden(true);
        Ext.ComponentQuery.query('#pricingMainContentsPanel')[0].down('#detailsCancelBtn').setHidden(true);

        Ext.ComponentQuery.query('#pricingMainContentsPanel')[0].down('#dataLinkTab').down('#pricingListHeaderLabel').setHidden(true);


    },

    doAddUpdateDiscount: function() {
        //discount_policy

        var that = this ;
            var discountStore = Ext.getStore('products.DatalinkDiscountStore');

            var name = Ext.ComponentQuery.query('#datalinkDiscountNameFld')[0].getValue() ;
            var value = Ext.ComponentQuery.query('#datalinkDiscountValueFld')[0].getValue() ;

            var duration =Ext.ComponentQuery.query('#datalinkDiscountDurationFld')[0].getValue() ;

            if(name == "" || value == ""){
                Ext.Msg.alert("Alert","Discount Name and Value both required.",Ext.emptyFn);
                return;
            }

            var recToAddUpdate = {

                discount_name : name,
                discount_value:value,
                discount_duration:duration

            };

            if(that.config.datalinkDiscountRecord){

                 that.config.datalinkDiscountRecord.set(recToAddUpdate);

            }else{

                discountStore.add(recToAddUpdate);

            }


            discountStore.sync() ;

            doUpdateBillingForDiscount() ;


            that.config.datalinkDiscountRecord  = null ;

            Ext.ComponentQuery.query('#datalinkDiscountNameFld')[0].setValue("") ;
            Ext.ComponentQuery.query('#datalinkDiscountValueFld')[0].setValue("") ;
            Ext.ComponentQuery.query('#datalinkDiscountDurationFld')[0].setValue("") ;

            Ext.ComponentQuery.query('#datalinkDiscountListPanel')[0].down('#mainList').deselectAll();


            function doUpdateBillingForDiscount(){
                    var billingController =  RMdatalink.app.getController('BillingDetailsController') ;
                    var pricingMainStore = Ext.getStore('pricing.MainStore') ;


                    billingController.config.pricingData[0].advance_payment_discounts = getArrayDataFromStore(discountStore) ;
                    var rmPRORec = pricingMainStore.getAt(billingController.config.pricingData[0].searchIndex);

                    rmPRORec.set( billingController.config.pricingData[0] );
                    rmPRORec.dirty= true;
                    pricingMainStore.sync() ;


                      Ext.Msg.alert("Success","Discount Updated Successfully.",Ext.emptyFn);
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

    onDatalinkDiscountSelect: function(list, record) {
        this.config.datalinkDiscountRecord = record ;

        Ext.ComponentQuery.query('#datalinkDiscountNameFld')[0].setValue(record.get('discount_name')) ;
        Ext.ComponentQuery.query('#datalinkDiscountValueFld')[0].setValue(record.get('discount_value')) ;
        Ext.ComponentQuery.query('#datalinkDiscountDurationFld')[0].setValue(record.get('discount_duration')) ;

        Ext.ComponentQuery.query('#datalinkDiscountSaveBtn')[0].setText("Update Discount");
    },

    setDatalinkDiscountStore: function() {
                var discountStore = Ext.getStore('products.ecomDiscountStore');

                var billingController =  RMdatalink.app.getController('BillingDetailsController') ;


                discountStore.removeAll();
                discountStore.sync() ;

                discountStore.setData(billingController.config.pricingData[2].advance_payment_discounts ) ;
                discountStore.sync() ;


    },

    getVendorsPriceSum: function() {

        var vendorStore =  Ext.getStore('vendorTempRecordStore') ;



        var dataToReturn = {
            promotional_price :0,
            standard_price:0
        } ;

        for(var i=0; i < vendorStore.getData().all.length ; i++){


                    var record = vendorStore.getAt(i) ;
                    if(record.data.product_price && record.data.product_price.ecom){

                         dataToReturn.standard_price += parseInt(record.data.product_price.ecom.standard_price) ;
                         dataToReturn.promotional_price += parseInt(record.data.product_price.ecom.promotional_price) ;
                    }

        }


        console.log(dataToReturn) ;

        return dataToReturn ;
    },

    setDlDataPrice: function() {
        //getVendorsPriceSum  ( data[i].module_sku == "DL-DATA"){



        var datalinkStore = Ext.getStore('products.ecomMain') ;
        //resetActivePolicy() ;
        var recIndex = datalinkStore.findExact("module_sku","DL-DATA") ;

        if(recIndex != -1 ){

            var record = datalinkStore.getAt(recIndex) ;

            var stdPromoPrice = this.getVendorsPriceSum() ;

            record.set("module_standard_price",stdPromoPrice.standard_price);
            record.set("module_promotional_price",stdPromoPrice.promotional_price);

          //  record.set("active_policy","1") ;
        }



        function resetActivePolicy(){

            for(var i=0; i < datalinkStore.getData().all.length ; i ++){

                var rmRec = datalinkStore.getAt(i) ;

                rmRec.set("active_policy","99999");
                rmRec.dirty = true ;
            }

        }
    },

    selectAllModules: function() {


        var datalinkModuleList = Ext.ComponentQuery.query('#ecomMainListContainer')[0].down('#mainList');

        datalinkModuleList.selectAll(true);

        this.onRmProSelectUnselect() ;
    },

    setDatalinkListHeight: function() {

        var list = Ext.ComponentQuery.query('#productSetupecomListPanel')[0].down('#mainList') ;


        var allRecPanelHeight =  list.getStore().getData().all.length * list.getItemHeight() + 74 ;
         Ext.ComponentQuery.query('#productSetupecomListPanel')[0].setHeight(allRecPanelHeight);

    },

    setDatalinkVendorLsHeight: function() {

        var list = Ext.ComponentQuery.query('#productSetupecomListPanel')[0].down('#mainList') ;


        var allRecPanelHeight =  list.getStore().getData().all.length * list.getItemHeight() + 66 ;
         Ext.ComponentQuery.query('#productSetupecomListPanel')[0].setHeight(allRecPanelHeight);

    },

    refreshDatalinkSideCntHeight: function() {
         var list = Ext.ComponentQuery.query('#ecomAdvancePaymentDiscountList')[0].down('#mainList') ;


         var allRecPanelHeight =  list.getStore().getData().all.length * list.getItemHeight() + 14 ;
         Ext.ComponentQuery.query('#ecomAdvancePaymentDiscountList')[0].setHeight(allRecPanelHeight);



         var h1 =  Ext.ComponentQuery.query('#ecomProductSetupSideP1')[0].getEl().getHeight() ;
         var h2 =  Ext.ComponentQuery.query('#ecomProductSetupSideP2')[0].getEl().getHeight() ;
         var h3 =  Ext.ComponentQuery.query('#ecomDiscountListPanel')[0].getEl().getHeight() ;

         Ext.ComponentQuery.query('#productecomaddUpdateFrmPanel')[0].setHeight(h1+h2+h3 + 26) ;
         Ext.ComponentQuery.query('#productecomaddUpdateFrmPanel')[0].setMaxHeight(window.innerHeight - 122 );



    },

    enableDisableDlFlds: function(status) {
        var form = Ext.ComponentQuery.query('#productecomMainPanel')[0] ;

        var form1 = Ext.ComponentQuery.query('#productecomaddUpdateFrmPanel')[0] ;
        var form2 = Ext.ComponentQuery.query('#ecompricingPolicyTab1')[0] ;

        var btns = form1.query('button').concat(form2.query('button')) ;
        var txtflds = form1.query('textfield').concat(form.query('textfield')) ;
        var txtareaflds = form1.query('textareafield').concat( form2.query('textareafield'));
        var selectflds = form1.query('selectfield').concat(form2.query('selectfield'));



        var radioFields = form1.query("radiofield").concat(form2.query('button')) ;
        radioFields.forEach(function(obj){
            obj.setDisabled(status) ;

        });


        for(var i=0; i < btns.length ; i++){
        //     var itemId = btns[i].getItemId()  ;
        //     var isSkipBtns = itemId == "datalinkMainListContainer" ||  itemId == "productsDatalinkPricingTab"  ||  itemId == "dlSetUpHideShowArrowBtn" ;
        //     if(!isSkipBtns )
                btns[i].setDisabled(status) ;
        }

        for(var i=0; i < txtflds.length ; i++){
            txtflds[i].setDisabled(status) ;
        }

        for(var i=0; i < txtareaflds.length ; i++){
            txtareaflds[i].setDisabled(status) ;
        }

        for(var i=0; i < selectflds.length ; i++){
            selectflds[i].setDisabled(status) ;
        }

        // form.down('#datalinkSetupEditBtn').setDisabled(false) ;
        // form.down('#datalinkSetupCancelBtn').setDisabled(false) ;
        // form.down('#datalinkSetupSaveBtn').setDisabled(false) ;

        form.down('#ecomSetupEditBtn').setHidden(!status) ;
        form.down('#ecomSetupCancelBtn').setHidden(status) ;
        form.down('#ecomSetupSaveBtn').setHidden(status) ;

        // form.down('#datalinkMainListContainer').setDisabled(false) ;
        // form.down('#productsDatalinkPricingTab').setDisabled(false) ;
        // form.down('#dlSetUpHideShowArrowBtn').setDisabled(false) ;


        Ext.ComponentQuery.query('#productecomMainPanel')[0].down('#headerEditTxtLbl').setHidden(status) ;


        var selectFlds = document.getElementsByClassName('prodecomSetupFlds');

        for( var i = 0 ; i< selectFlds.length ; i++ ){


                selectFlds[i].disabled = status  ;



        }
    },

    setDefaultDlDataProduct: function() {
        //var datalinkStore = Ext.getStore('products.ecomMain') ;


        var productList = Ext.ComponentQuery.query('#ecomMainListContainer')[0].down('#mainList');
        var datalinkStore = productList.getStore('products.ecomMain') ;

        var dlDataRIndex = datalinkStore.findExact('module_sku',"DL-DATA") ;
        if( dlDataRIndex == -1 ){
         return ;
        }

        var dlDataRecord = datalinkStore.getAt(dlDataRIndex) ;
        var dl_id = dlDataRecord.get('_id');


        //var productList = Ext.ComponentQuery.query('#ecomMainListContainer')[0].down('#mainList');
        productList.deselect(dlDataRecord,true);

         RMdatalink.app.getController('ecomController').onRmProSelectUnselect();
    }

});