/*
 * File: app/controller/UINav.js
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

Ext.define('RMdatalink.controller.UINav', {
    extend: 'Ext.app.Controller',
    alias: 'controller.UINav',

    requires: [
        'Ext.app.Route'
    ],

    config: {
        routes: {
            'main': 'showMain',
            'regeneratepwd': 'regeneratepwd',
            'RTcard:index': 'goToRTUserCard',
            'card:index': {
                conditions: {
                    
                },
                action: 'gotoCard'
            },
            'retailerCard:index': 'showInRetailer',
            'browseLatestLogCard:index': 'showInBrowseLatestLog',
            'billingCard:index': 'showInBilling',
            'pricingCard:index': 'showInPricing',
            'vendorCard:index': 'showInVendor',
            'discountCard:index': 'showInDiscount',
            'inhouseCard:index': 'showInInhouse'
        },

        control: {
            "button[action=changecard]": {
                tap: 'onChangeCardTap'
            },
            "button[action=changecardRT]": {
                tap: 'onChangecardRTTap'
            },
            "panel": {
                addretailertapped: 'onPanelAddretailertapped',
                inhouseAddNewTap: 'ControllerAction15'
            },
            "container[itemId=RMContentPanel]": {
                activeitemchange: 'onRM_mainContainerActiveItemChange'
            }
        }
    },

    onChangeCardTap: function(button, e, eOpts) {
        this.redirectTo('card'+button.config.index);
    },

    onChangecardRTTap: function(button, e, eOpts) {
        this.redirectTo('RTcard'+button.config.index);
    },

    onPanelAddretailertapped: function(panel) {
        switch(panel.getItemId()) {

            case 'retailersMaincontentpanel':

                this.isRetailerDetailsView = true;
                break;

            case 'vendorsMainContentPanel':

                this.isRetailerDetailsView = false;
                break;

        }

        this.redirectTo( RMdatalink.util.globalConfig.getUrlForRetailerCard() );
    },

    ControllerAction15: function(panel) {
        this.redirectTo('inhouseCard1');
    },

    onRM_mainContainerActiveItemChange: function(container, value, oldValue, eOpts) {
        ///SHIFT THIS  PART INSIDE APPROPRAITE CONTROLLER
        //THE BELOWN FUNCTION DEFINED CAN BE MADE PUBLIC IF ADDED INSIDE THE CONTROLLER
        /*

        retailersMaster

        inhouseMasterStore

        discountsMasterStore

        vendorDetailsRecodsStore

        productDetailsRecordsStore

        billingMasterStore

        notificationsNew


        */
        //  **********  REMOVE  PRESSED  CLS  *********

        Ext.ComponentQuery.query('#overviewRetailersBtn')[0].removeCls('x-button-pressing');
        Ext.ComponentQuery.query('#overviewVendorsBtn')[0].removeCls('x-button-pressing');


        var activeIndex = container.items.indexOf(value);

        var itemId = value.getItemId() ;
        console.log(itemId);

        switch(itemId) {

            case "billingDetailCard":
                return ;

            case 'card-vendors':
              var vendorMaster = Ext.getStore('vendors.Master') ;
                vendorMaster.clearFilter();

                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('vendors.Master') ;
                Ext.ComponentQuery.query('#overviewVendorsBtn')[0].addCls('x-button-pressing');
                value.down('#cardTitleLabel').setHtml('<div style="font-size: large;">Vendors</div>');
                value.down('#cardImportBtn').setHidden(true);
                value.down('#cardActionBtn').setHidden(true);
                value.down("#cardDeleteBtn").setHidden(false);
                break;

            case 'card-dashboard':
                break;

            case 'card-retailers':

                 var rtMaster =  Ext.getStore('retailersMaster') ;


                rtMaster.clearFilter();

                Ext.ComponentQuery.query('#overviewRetailersBtn')[0].addCls('x-button-pressing');
                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('retailersMaster') ;
                value.down('#cardTitleLabel').setHtml('<div style="font-size: large;">Retailers</div>');
               // value.down('#cardTitleLabel').setHtml('<div style="font-size: large;">BACK / <span style="color:#2EC1DA;"> RETAILERS </span></div>');
               // value.down('#cardImportBtn').setHidden(true);
                value.down("#cardDeleteBtn").setHidden(true);

                break;

            case 'card-billing':

                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('billingMasterStore') ;
                value.down('#cardTitleLabel').setHtml('<div style="font-size: large;">Billing</div>');
                Ext.ComponentQuery.query('#billingTabPanel')[0].setActiveItem(0);
                value.down("#cardDeleteBtn").setHidden(true);

                if(Ext.getStore('billingMasterStore').getData().all.length > 0 ){

                    return ;
                }
                break;


            case 'card-retailer-details':

                RMdatalink.app.getController('RetailerDeatilsDataSet').setResetRetailersDetailedView();
                break;

            case 'card-inhouse':

                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('inhouseMasterStore') ;
                value.down('#cardTitleLabel').setHtml('<div style="font-size: large;">Inhouse</div>');
                //value.down("#cardDeleteBtn").setHidden(false);



                break;

            case 'card-pricing':

                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('productDetailsRecordsStore') ;
                Ext.ComponentQuery.query('#pricingDetailsMainTabPanel')[0].setActiveItem(0);
                Ext.ComponentQuery.query('#pricingSideContainerItemID')[0].setActiveItem(0);
                //value.down('#detailsHeaderTitle').setWidth('75%');
        //         value.down('#detailsHeaderTitle').setMargin('0 20 0 0');

                value.down('#detailsHeaderTitle').setHtml('<div style="font-size: large;">BACK / <span style="color:#2EC1DA;"> PRICING</span></div>');
                value.down('#detailsSaveBtn').addCls('x-rm-detailsSaveBtns');

                break;

            case 'card-discounts':

                value.down('#detailsHeaderTitle').setWidth('100%');
                value.down('#detailsHeaderTitle').setHtml('<div style="font-size: large;">BACK / <span style="color:#2EC1DA;"> DISCOUNTS</span></div>');
                value.down('#detailsCancelBtn').setHidden(true);
                value.down('#detailsSaveBtn').setHidden(true);
                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('discountsMasterStore') ;
                break;
            case "card-browse-latest-log":
                //value.down('#detailsHeaderTitle').setWidth('100%');
                value.down('#cardTitleLabel').setHtml('<div style="font-size: large;">BACK / <span style="color:#2EC1DA;"> LATEST TECH SUPPORT LOGS</span></div>');
                        value.down('#cardImportBtn').setHidden(true);
                value.down('#cardActionBtn').setHidden(true);
                value.down("#cardDeleteBtn").setHidden(false);
                value.down("#cardAddRetailerBtn").setHidden(true);
                 value.down("#cardExportBtn").setHidden(true);


                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('TechSupportLogsStore') ;
                break;


            case "card-rmplc":

                  RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('products.RMProStore') ;



                break ;

               case "card-datalink":

                  RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('products.DatalinkMain') ;



                break ;


        }

        var activeStoreId = RMdatalink.app.getController('PaginationController').getCurrentActiveStoreId() ;

        if(! RMdatalink.app.getController('PaginationController').config.storesLoadedFirstTime[RMdatalink.app.getController('PaginationController').getCurrentActiveStoreId()]  && activeStoreId != 'retailersMaster'){
            RMdatalink.app.getController('PaginationController').loadStore(1,RMdatalink.util.DataLoader.getPageSize(),RMdatalink.util.DataLoader.getEnableCachig());
        }
    },

    showMain: function() {
        //this.redirectTo('card'+0);

        var rMNavPanel = Ext.ComponentQuery.query('RMNavigationPanel')[0];
        var buttons = rMNavPanel.query('button');
        buttons.forEach(function(button) {
            if(button.element.dom.classList.contains('x-button-selected'))
                button.element.dom.classList.remove('x-button-selected');

            if(button.index === 0 ) {
                button.element.dom.classList.add('x-button-selected');
            }
        });

        Ext.ComponentQuery.query('#RMContentPanel')[0].setActiveItem(0);
    },

    regeneratepwd: function() {
        //this.redirectTo('card'+0);




        var username = RMdatalink.util.globalMethods.getParameterByName("user");
        var temppwd =  RMdatalink.util.globalMethods.getParameterByName("temppwd");

        RMdatalink.app.getController('LoginHandler').config.resetPwdUser =
            {
                username:username ,
                tempPassword :temppwd
            };


        if( username && username != "" && temppwd && temppwd != "" ){

            Ext.ComponentQuery.query('#loginScreenContainer')[0].setActiveItem(2) ;

        }


    },

    goToRTUserCard: function() {
        if(Ext.ComponentQuery.query('#RMContentPanel')[0].getActiveItem().getItemId() == "card-retailer-details"){


            if(RMdatalink.app.getController('RetailerDeatilsDataSet').config.isEditMode)
            {

                Ext.Msg.confirm("Confirm","View in edit mode, do you want to continue ?",onMessageAns ,this);


            }
        }else{
             fn() ;
        }

           function onMessageAns(action,opt,confirmBox){


                    if(action == "yes"){

                            fn() ;
                    }else{

                           // throw "action canceled";
                    }


                }

        function fn()
        {
            var index = parseInt(arguments[0]);

            var rMNavPanel = Ext.ComponentQuery.query('#rtNavPanelMain')[0];
            var buttons = rMNavPanel.query('button');
            buttons.forEach(function(button) {
                if(button.element.dom.classList.contains('x-button-selected'))
                    button.element.dom.classList.remove('x-button-selected');

                if(button.index === index ) {
                    button.element.dom.classList.add('x-button-selected');
                }
            });

            Ext.ComponentQuery.query('#retailerMainContainer')[0].setActiveItem(index);
        }
    },

    gotoCard: function() {
        var index = parseInt(arguments[0]);


        function fn()
        {


        // var index = parseInt(arguments[0]);

        var rMNavPanel = Ext.ComponentQuery.query('RMNavigationPanel')[0];
            if(rMNavPanel){
                var buttons = rMNavPanel.query('button');
                buttons.forEach(function(button) {
                    if(button.element.dom.classList.contains('x-button-selected'))
                        button.element.dom.classList.remove('x-button-selected');

                    if(button.index === index ) {
                        button.element.dom.classList.add('x-button-selected');
                    }
                });

            }
            var RMContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
            if(RMContentPanel){
                    RMContentPanel.setActiveItem(index);
            }


        }



        var mainActiveCard = Ext.ComponentQuery.query('#RMContentPanel').length?
                            Ext.ComponentQuery.query('#RMContentPanel')[0].getActiveItem().getItemId()
                            : undefined;
        if(mainActiveCard == "card-retailer-details"){


            if(RMdatalink.app.getController('RetailerDeatilsDataSet').config.isEditMode )
            {

                Ext.Msg.confirm("Confirm","View in edit mode, do you want to continue ?",onMessageAns ,this);


            }else{
             fn() ;

            }

        }else if( mainActiveCard == "card-rmplc" ){

            var rmproMainPanel  = Ext.ComponentQuery.query('#productRMproMainPanel')[0];

            var isInEditMode = rmproMainPanel.down('#headerEditTxtLbl').getHidden() ;
            isInEditMode = !isInEditMode ;
            if(isInEditMode )
            {

                Ext.Msg.confirm("Confirm","View in edit mode, do you want to continue ?",onMessageAns ,this);


            }else{
             fn() ;

            }



        }else{

             fn() ;
        }

           function onMessageAns(action,opt,confirmBox){


                    if(action == "yes"){

                            fn() ;
                    }else{

                           // throw "action canceled";
                    }


                }

    },

    showInRetailer: function() {

        var index = parseInt(arguments[0]);

        var mainContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
        var activeCard = mainContentPanel.getActiveItem();

        if(activeCard.getItemId() != "card-retailers") {
            RMdatalink.app.getController('UINav').redirectTo('card'+1);
        }

        var retailersCard = mainContentPanel.getActiveItem();
        var retailerTabPanel = retailersCard.down("#retailersTabPanel");

        //  ***   CLEAR ALL FILTER  ON LIST  AND  STORE ***
        var retailerList = retailerTabPanel.down('#retailerList');
        if(retailerList.getStore())
        {
            retailerList.getStore().clearFilter();
        }

        var activeIndex = retailerTabPanel.getInnerItems().indexOf(retailerTabPanel.getActiveItem());

        if(activeIndex !== index) {
            retailerTabPanel.setActiveItem(index);
        }

        if(index === 5)
        {
            //importRetailers
         //   retailersCard.down("#retailersMainScreenImportFileFld").setAction("importRetailers");
            retailersCard.down("#cardImportBtn").setHidden(false);
        }
        else
        {
           //  retailersCard.down("#retailersMainScreenImportFileFld").setAction("");
            retailersCard.down("#cardImportBtn").setHidden(true);
        }

        // ******  HIDE  ACTION  BUTTON FOR ALL TAB  **********
        if(index === 5)
            retailersCard.down("#cardActionBtn").setHidden(true);
        else
            retailersCard.down("#cardActionBtn").setHidden(false);



    },

    showInBrowseLatestLog: function() {


        var index = parseInt(arguments[0]);

        var mainContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
        var activeCard = mainContentPanel.getActiveItem();

        if(activeCard.getItemId() != "card-browse-latest-log") {
            RMdatalink.app.getController('UINav').redirectTo('card'+17);
        }

        // var browseLatestLogCard = mainContentPanel.getActiveItem();
        // var discountsTabPanel = discountsCard.down("#discountsTabPanel");




    },

    showInBilling: function() {
        var index = parseInt(arguments[0]);

        var mainContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
        var activeCard = mainContentPanel.getActiveItem();
        if(activeCard.getItemId() != "card-billing") {
            this.redirectTo('card'+2);

        }

        var billingCard = mainContentPanel.getActiveItem();
        var billingTabPanel = billingCard.down("#billingTabPanel");
        billingCard.down("#cardImportBtn").setHidden(true);
        billingCard.down("#cardAddRetailerBtn").setHidden(true);


        //  ***   CLEAR ALL FILTER  ON LIST  AND  STORE ***
        var billingList = billingTabPanel.down('#billingList');
        if(billingList.getStore())
        {
            billingList.getStore().clearFilter();
        }


        var activeIndex = billingTabPanel.getInnerItems().indexOf(billingTabPanel.getActiveItem());

        if(activeIndex !== index) {
            billingTabPanel.setActiveItem(index);
        }

        if(index===0)
        {
          billingCard.down("#cardActionBtn").setHidden(true);
        }
        else
        {
            billingCard.down("#cardActionBtn").setHidden(false);
            //billingCard.down("#cardActionBtn").setDisabled(true);
        }

    },

    showInPricing: function() {
        var index = parseInt(arguments[0]);

        var mainContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
        var activeCard = mainContentPanel.getActiveItem();
        if(activeCard.getItemId() != "card-pricing") {
            this.redirectTo('card'+10);
        }

        var pricingCard = mainContentPanel.getActiveItem();
        var pricingTabPanel = pricingCard.down("#pricingDetailsMainTabPanel");

        var activeIndex = pricingTabPanel.getInnerItems().indexOf(pricingTabPanel.getActiveItem());

        if(activeIndex !== index) {
            pricingTabPanel.setActiveItem(index);
        }


    },

    showInVendor: function() {



        var index = parseInt(arguments[0]);

        var mainContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
        var activeCard = mainContentPanel.getActiveItem();
        if(activeCard.getItemId() != "card-vendors") {
            RMdatalink.app.getController('UINav').redirectTo('card'+3);
        }

        var vendorCard = mainContentPanel.getActiveItem();
        var vendorTabPanel = vendorCard.down("#vendorsMainContentPanel");

        //  ***   CLEAR ALL FILTER  ON LIST  AND  STORE ***
        var vendorList = vendorTabPanel.down('#vendorList');
        if(vendorList.getStore())
        {
            vendorList.getStore().clearFilter();
        }

        var activeIndex = vendorTabPanel.getInnerItems().indexOf(vendorTabPanel.getActiveItem());

        if(activeIndex !== index) {
            vendorTabPanel.setActiveItem(index);
        }

        // ******  HIDE  ACTION  BUTTON FOR ALL TAB  **********
        if(index === 2)
            vendorCard.down("#cardActionBtn").setHidden(true);
        else
            vendorCard.down("#cardActionBtn").setHidden(false);

    },

    showInDiscount: function() {

        var index = parseInt(arguments[0]);

        var mainContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
        var activeCard = mainContentPanel.getActiveItem();
        if(activeCard.getItemId() != "card-discounts") {
            RMdatalink.app.getController('UINav').redirectTo('card'+11);
        }

        var discountsCard = mainContentPanel.getActiveItem();
        var discountsTabPanel = discountsCard.down("#discountsTabPanel");


        var activeIndex = discountsTabPanel.getInnerItems().indexOf(discountsTabPanel.getActiveItem());

        Ext.ComponentQuery.query('#discountsSidePanel')[0].setActiveItem(0);


        if(activeIndex !== index) {
            discountsTabPanel.setActiveItem(index);
        }

    },

    showInInhouse: function() {



        var index = parseInt(arguments[0]);

        var mainContentPanel = Ext.ComponentQuery.query('#RMContentPanel')[0];
        var activeCard = mainContentPanel.getActiveItem();



        if(index==1){

            var ihouseTabs = Ext.ComponentQuery.query('#inhouseTabPanel')[0] ;

                 RMdatalink.app.getController('inhouse.DetailScreenController').setUserType(ihouseTabs.getActiveItem().getItemId()) ;


            mainContentPanel.setActiveItem(15);
            setSiderBarForInhouseDetailPage() ;

        }

        var inhouseTabPanel = activeCard.down("#inhouseTabPanel");

        //  ***   CLEAR ALL FILTER  ON LIST  AND  STORE ***
        var inhouseList = inhouseTabPanel.down('#inhouseList');
        if(inhouseList.getStore())
        {
            inhouseList.getStore().clearFilter();
        }


        function setSiderBarForInhouseDetailPage()
        {
                var container = Ext.ComponentQuery.query('#inhouseDetailsMainTabPanel')[0] ;
                var sideContainer = container.parent.down('#inhouseSideContainer');
                var managerSideContainer = sideContainer.down('#inhouseProfileSideContainer');
                var crmNotesSideContainer = sideContainer.down('#inhouseSideForNotesSideContainer');
                var value = container.getActiveItem();

                if(value.title === "PROFILE") {
                    sideContainer.setHidden(false);
                    managerSideContainer.setHidden(false);
                    crmNotesSideContainer.setHidden(true);
                }

                else if( value.title === "NOTES") {
                    sideContainer.setHidden(false);
                    managerSideContainer.setHidden(true);
                    crmNotesSideContainer.setHidden(false);
                }


        }


    },

    onBackTextTap: function() {
        var actions = RMdatalink.app.getHistory().config.actions ;






            if(actions && actions.length > 1 )
            {
                var lastAction = actions[actions.length - 2 ];



                RMdatalink.app.getController('UINav').redirectTo(lastAction._url);




                console.log(lastAction._url);
            }

    },

    checkForRtDtl: function(executeMe) {
        if(Ext.ComponentQuery.query('#RMContentPanel')[0].getActiveItem().getItemId() == "card-retailer-details"){


            if(RMdatalink.app.getController('RetailerDeatilsDataSet').config.isEditMode)
            {

                Ext.Msg.confirm("Confirm","View in edit mode, do you want to continue ?",onMessageAns ,this);


            }
        }else{
             fn() ;
        }

           function onMessageAns(action,opt,confirmBox){


                    if(action == "yes"){

                            fn() ;
                    }else{

                           // throw "action canceled";
                    }


                }
    }

});