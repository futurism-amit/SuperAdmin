/*
 * File: app/controller/VendorStatsController.js
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

Ext.define('RMdatalink.controller.VendorStatsController', {
    extend: 'Ext.app.Controller',

    config: {
        vendorStats: null
    },

    loadVendorStats: function() {
            var _this =this ;
            var vendorMasterStr = Ext.getStore('vendors.Master')  ;

            for(var i=0; i < vendorMasterStr.getData().all.length ; i++){

                 var record =   vendorMasterStr.getAt(i);


                                    if(record){

                                        //console.error(record) ;
                                          record.set('collections',"") ;
                                          record.set('SKU',"") ;
                                          record.set('design',"") ;

                                            record.dirty= true;

                                    }
            }

            RMdatalink.iwa.rdl.getVendorStats('', function(res)
                        {
        //                      Ext.Viewport.setMasked(false);
                            console.log('result:');
                            console.log(res);

                              _this.config.vendorStats = res ;


                               var vendorData = vendorMasterStr.getData().all ;

                                for(var i =0 ; i< res.length ; i++){

                                  var recordIndex =   vendorMasterStr.findExact("vendor_name",res[i].vendor);

                                  var record =   vendorMasterStr.getAt(recordIndex);


                                    if(record){

                                        //console.error(record) ;
                                          record.set('collections',res[i].collections) ;
                                          record.set('SKU',res[i].skus) ;
                                          record.set('design',res[i].designs) ;

                                            record.dirty= true;

                                    }
                                    }

                            vendorMasterStr.sync() ;

                            var tempArray = new Array();
                            tempArray = getArrayDataFromStore(Ext.getStore('vendors.Master'));

                            var tempVendorStore = Ext.getStore('vendorTempRecordStore') ;

                            tempVendorStore.removeAll();
                            tempVendorStore.sync();

                            tempVendorStore.setData(tempArray);
                            tempVendorStore.sync();




                        },
                        function(err)
                        {
                            console.log('error:');
                            console.log(err);
                        });







        function getArrayDataFromStore(store){

            var data = new Array();
            data = store.getData().all;

            var dataToReturn = new Array();

            for(var i=0; i < data.length ; i++){

                dataToReturn.push(data[i].data);
            }

            return dataToReturn ;
         }





    },

    showCalenderForDataupdated: function(component, record) {

               function fn(newDate){


                    var date = Ext.Date.format(newDate, "m/d/Y");
                    RMdatalink.util.Calendar.hideCalendar();
                    updateDataUpdated(date);
                }

                RMdatalink.util.Calendar.showCalendar(fn,component);



                function updateDataUpdated(date){

                    var dataToupdate = {

                        last_data_update:date

                    } ;

                     var vendorStore = Ext.getStore('vendors.Master') ;
                     RMdatalink.iwa.rdl.doUpdateCollection(vendorStore, dataToupdate , record.get('_id'), suc, err);

                    record.set("last_data_update",date) ;

                    function suc(){

                    }
                    function err(){

                         Ext.Msg.alert("Alert","Vendor last data updated date updation failed, for vendor "+record.get("vendor_name"),Ext.emptyFn);

                    }

                }
    },

    showCalenderForInventoryupdated: function(component, record) {

               function fn(newDate){


                    var date = Ext.Date.format(newDate, "m/d/Y");
                    RMdatalink.util.Calendar.hideCalendar();
                    updateInventoryUpdated(date);

                }

                RMdatalink.util.Calendar.showCalendar(fn,component);



                function updateInventoryUpdated(date){

                    var dataToupdate = {

                        last_inventory_update:date

                    } ;

                     var vendorStore = Ext.getStore('vendors.Master') ;
                     RMdatalink.iwa.rdl.doUpdateCollection(vendorStore, dataToupdate , record.get('_id'), suc, err);

                    record.set("last_inventory_update",date) ;

                    function suc(){

                    }
                    function err(){

                        Ext.Msg.alert("Alert","Vendor last inventory updated date updation failed, for vendor "+record.get("vendor_name"),Ext.emptyFn);

                    }

                }
    }

});