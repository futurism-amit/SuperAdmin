/*
 * File: app/controller/ImportCSV.js
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

Ext.define('RMdatalink.controller.ImportCSV', {
    extend: 'Ext.app.Controller',

    config: {
        retailerForVendor: null,
        isRetailerMainView: false,

        control: {
            "filefield[action=importRetailers]": {
                initialize: 'oncsvImportFileFieldUpdatedata'
            }
        }
    },

    oncsvImportFileFieldUpdatedata: function(component, eOpts) {
        // itemId=csvImportFileField



        var fileField = component ;
        var fileSelect = fileField.element.dom.querySelector('input[type=file]');
        var that = this ;

        fileSelect.onchange = function() {

                    if(component.getItemId() == "retailersMainScreenImportFileFld")
                    {
                        that.config.isRetailerMainView = true ;
                    }
                    else{

                        that.config.isRetailerMainView = false ;
                    }


             var file = this.files[0];

        console.log(file);

            var reader = new FileReader();
            reader.onload = function(event) {
               console.log(event.target.result) ;

             var csvArray = processData(event.target.result) ;
             that.createJsonArray(csvArray) ;




            };
            reader.onerror = function(event) {
                console.error("File could not be read! Code " + event.target.error.code);
            };
            reader.readAsText(file);

        };



         function processData(csv) {
              var allTextLines = csv.split(/\r\n|\n/);
              var lines = [];
              for (var i=0; i<allTextLines.length; i++) {
                  var data = allTextLines[i].split(';');
                      var tarr = [];
                      for (var j=0; j<data.length; j++) {
                          tarr.push(data[j]);
                      }
                      lines.push(tarr);
              }
            console.log(lines);

             return lines ;
          }


    },

    csvToJSON: function() {

        function CSVToArray(strData, strDelimiter) {
            // Check to see if the delimiter is defined. If not,
            // then default to comma.
            strDelimiter = (strDelimiter || ",");
            // Create a regular expression to parse the CSV values.
            var objPattern = new RegExp((
            // Delimiters.
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            // Quoted fields.
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            // Standard fields.
            "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
            // Create an array to hold our data. Give the array
            // a default empty first row.
            var arrData = [[]];
            // Create an array to hold our individual pattern
            // matching groups.
            var arrMatches = null;
            // Keep looping over the regular expression matches
            // until we can no longer find a match.
            while (arrMatches == objPattern.exec(strData)) {
                // Get the delimiter that was found.
                var strMatchedDelimiter = arrMatches[1];
                // Check to see if the given delimiter has a length
                // (is not the start of string) and if it matches
                // field delimiter. If id does not, then we know
                // that this delimiter is a row delimiter.
                if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                    // Since we have reached a new row of data,
                    // add an empty row to our data array.
                    arrData.push([]);
                }
                // Now that we have our delimiter out of the way,
                // let's check to see which kind of value we
                // captured (quoted or unquoted).
                if (arrMatches[2]) {
                    // We found a quoted value. When we capture
                    // this value, unescape any double quotes.
                    var strMatchedValue = arrMatches[2].replace(
                    new RegExp("\"\"", "g"), "\"");
                } else {
                    // We found a non-quoted value.
                    var strMatchedValue = arrMatches[3];
                }
                // Now that we have our value string, let's add
                // it to the data array.
                arrData[arrData.length - 1].push(strMatchedValue);
            }
            // Return the parsed data.
            return (arrData);
        }

        function CSV2JSON(csv) {
            var array = CSVToArray(csv);
            var objArray = [];
            for (var i = 1; i < array.length; i++) {
                objArray[i - 1] = {};
                for (var k = 0; k < array[0].length && k < array[i].length; k++) {
                    var key = array[0][k];
                    objArray[i - 1][key] = array[i][k] ;
                }
            }

            var json = JSON.stringify(objArray);
            var str = json.replace(/},/g, "},\r\n");

            return str;
        }


        function splitString(stringToSplit,separator)
        {
            var arrayOfStrings = stringToSplit.split(separator);
            print('The original string is: "' + stringToSplit + '"');
            print('The separator is: "' + separator + '"');
            print("The array has " + arrayOfStrings.length + " elements: ");

            for (var i=0; i < arrayOfStrings.length; i++)
                print(arrayOfStrings[i] + " / ");
        }

        var tempestString = "Oh brave new world that has such people in it.";
        var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

        var space = " ";
        var comma = ",";

        splitString(tempestString, space);
        splitString(tempestString);
        splitString(monthString, comma);
    },

    getCSV: function() {


        //csvImportFileField
        //addCsvContentButton
    },

    temp: function() {
        csvReader =  new function() {

            var me = this;              // pointer to ourselves
            me.ready = false;           // are we done with reading the file ?
            me.debug = true;            // are we in debug mode ?
            me.fileData = new Array();  // line data array

            /* read file - event callback from the file input box */
            me.readFileEvent = function (event) {

                me.fileData.length = 0; // make sure the array is clear
                me.ready = false;       // set ready to false

                // the files, reader and string handler
                var files = event.target.files;
                var reader = new FileReader();
                var str;

                // parse the file - reader is async
                reader.onload = function(theFile) {


                    str = theFile.target.result;            // load file values
                    var lines = str.split(/[\r\n|\n]+/);    // split data by line

                    // for every line, remove formatting characters
                    for(i=0;i<lines.length;i++) {

                        lines[i]  = lines[i].replace(/(\r\n|\n|\r|)/gm,"").split(/[,;]+/);          // remove formatting and split by comma OR semi colon
                        lines[i]  = lines[i].filter( function(x){ if( x!= "" )return true; } );     // filter out null members

                        //if it isn't a comment line
                        if(lines[i][0][0] != "#") {

                            // cast all members to correct type
                            for(x =0;x< lines[i].length;x++) {
                                // try float
                                var result = parseFloat(lines[i][x]);

                                // check if cast ok and set value
                                if( !isNaN(result) )
                                    lines[i][x] = result;
                            }
                            // push line
                            me.fileData.push(lines[i]);
                        }
                    }
                    // done, set ready
                    me.ready = true;
                    // if in debug, dump data to console
                    me.consoleDump();
                };
                reader.onerror = function(){
                    console.log('Error reading file');
                };
                reader.readAsText(files[0])  ;                                      // start reading the text, async
            };

            /* dump the file data to the console */
            me.consoleDump = function() {

                if(!me.ready || !me.debug)
                    return null;
                var end = me.fileData.length;
                for(i=0; i<end; i++)
                    console.log(me.fileData[i]);
            };
        };

    },

    createJsonArray: function(csv) {

        var jsonArray = new Array() ;
        var keyStr = csv[0] ;
         keyStr = keyStr.toString() ;

         keys = keyStr.split(",") ;
        console.log(keys) ;

        for(var i= 1; i < csv.length ; i++){

            var objectToPush = {} ;

            for(var j = 0 ;j < keys.length ; j++ ){

                var key = keys[j] ;

                var valStr= csv[i].toString() ;
                var values = valStr.split(",") ;
                console.log(values) ;

                objectToPush[key] = values[j] ;



            }

              jsonArray.push(objectToPush);
        }


        console.log(jsonArray);
        this.loadRetailerToServer(jsonArray);

        /*
        var prospectList  = Ext.ComponentQuery.query('#RDInStoreVendorsTab')[0].down("#mainList");

        var prospectStore = prospectList.getStore() ;
        prospectStore.removeAll();
        prospectStore.sync();

        prospectStore.setData(jsonArray) ;

        prospectStore.sync();

        */
    },

    loadRetailerToServer: function(retailers) {
        /*


                    "store_name": "Abrash Rugs ",
                    "store_address_line1": "401 Milwaukee Road",
                    "store_city": "Singalin",
                    "store_state": "OH",
                    "store_zip": "40555",
                    "store_phone": "7073654287",
                    "store_website": "www.abrashrugs.com",




        */


            var that = this ;

            var crmUser = RMdatalink.app.getController('LoginHandler').config.userDetails.userName ;

            var recordIndex = -1;
            var failedRecords = [];
            var successfulRecords = [];
            var duplicateRecords = [];

        if(!that.config.isRetailerMainView )
        {
            var isRetailerDetailsView = RMdatalink.app.getController('UINav').isRetailerDetailsView;
            var selectedUserRecord = RMdatalink.util.globalConfig.getDataToShowInSettingWindow() ;

            var vendor_id = selectedUserRecord.record.data._id ;
            var vendor_name = selectedUserRecord.record.data.vendor_name ;
        }
            var masterStore = Ext.getStore('retailersMaster');

            if(this.validateRetailers(retailers[0])){

                 Ext.Viewport.setMasked({
                                            xtype: 'loadmask'
                                        });

                sendRecords() ;



            }else{

                Ext.Msg.alert("Alert","invalid records",Ext.emptyFn);

            }


        function sendRecords(){



               if(recordIndex < ( retailers.length -1)) {

                  recordIndex ++;
                  if(!that.config.isRetailerMainView )
                  {
                          retailers[recordIndex].store_status = "PROSPECTS";
                  }else{
                          retailers[recordIndex].store_status = "NO_STATUS";
                  }

                   retailers[recordIndex].user_since = RMdatalink.util.globalMethods.getToday() ;
                   retailers[recordIndex].created_by = crmUser ;

                       console.log( retailers[recordIndex]) ;

                          checkForDuplication() ;

                 }else{


                      Ext.Viewport.setMasked(false);


        //               RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('retailersMaster') ;
        //               RMdatalink.app.getController('PaginationController').loadStore(1,RMdatalink.util.DataLoader.getPageSize(),false);

                      Ext.Msg.alert("Info","Records Uploaded Successfully.",Ext.emptyFn);

                    if(!that.config.isRetailerMainView )
                    {
                         RMdatalink.app.getController('RetailerDeatilsDataSet').loadActiveRetailersForVendors() ;

                         RMdatalink.app.getController('VendorRetailerRelations').updateVendorOnRetailerAddedOrRemoved() ;


                          setVendorForRetailer();

                          console.log(successfulRecords);

                          console.log(failedRecords);

                          console.log(duplicateRecords);
                    }

                }


        }


        function sendRecordToServer(){




                RMdatalink.util.DataLoader.sendNewRecordForRetailerToServer(retailers[recordIndex],masterStore,successCallBack,errorCallBack) ;




        }





        function successCallBack(){

            successfulRecords.push(retailers[recordIndex]) ;
            if(!that.config.isRetailerMainView )
            {
                setRetailersForVendorByPhone(retailers[recordIndex]);
            }
            sendRecords();

        }

        function errorCallBack(){

            failedRecords.push(retailers[recordIndex]) ;
            sendRecords();

        }



        function checkForDuplication(){

            var str_name = retailers[recordIndex].store_phone ;
            RMdatalink.iwa.rdl.queryDB({collection: dbEnv + "rdl_masterretailerrecords",pageNo:1,pageSize: 2 ,sortBy:{},query:{store_phone:str_name },fields:{store_phone:1,vendors:1}},duplicationSuccess,duplicationError);



        }



        function duplicationSuccess(){
            console.log(arguments[0]);

            if(arguments[0].count == 0 ){
                  console.log("New Record");
                  sendRecordToServer() ;
            }
            else{

                console.log("Record Already Present ");
                 setRetailersForVendorByPhone(retailers[recordIndex]);

                duplicateRecords.push(arguments[0].items[0]) ;
                sendRecords() ;
            }


        }

        function duplicationError(){

            errorCallBack() ;

        }



        function setVendorForRetailer(){

                if(!that.config.isRetailerMainView )
                {
                    that.assignVendorForRetailer(vendor_id,vendor_name,duplicateRecords) ;
                }


        }


        /* Note: store_phone is used as primary key for retailers */

        function setRetailersForVendorByPhone(retailer){
            //assignRetailerForVendor
            if(!that.config.isRetailerMainView )
            {
                that.assignRetailerForVendor(selectedUserRecord.record.data,retailer.store_phone) ;
            }
        }
    },

    validateRetailers: function(retailer) {
           /*


                    "store_name": "Abrash Rugs ",
                    "store_address_line1": "401 Milwaukee Road",
                    "store_city": "Singalin",
                    "store_state": "OH",
                    "store_zip": "40555",
                    "store_phone": "7073654287",
                    "store_website": "www.abrashrugs.com",




            */



                var validationresult = true ;

                if(! retailer.store_name){

                    validationresult = false ;

                }

                if(! retailer.store_address_line1){

                    validationresult = false ;

                }

                if(! retailer.store_city){

                    validationresult = false ;

                }

                if(! retailer.store_state){

                    validationresult = false ;

                }


              if(! retailer.store_zip){

                    validationresult = false ;

                }


              if(! retailer.store_phone){

                    validationresult = false ;

                }



            return validationresult ;
    },

    assignRetailerForVendor: function(vendor, store_phone, isFromRelController, str_id) {



        /* Note: store_phone is used as primary key for retailers */

           if(!this.config.retailerForVendor)
           {
               this.config.retailerForVendor = new Array() ;
           }


               /*retailer_phone is store_phone*/

        var isRecAlreadyPresent = false ;


        for(var i =0 ; i < this.config.retailerForVendor.length ; i++){

            if( this.config.retailerForVendor[i].retailer_phone == store_phone ){

                isRecAlreadyPresent = true ;
                break ;
            }

        }

        console.log(store_phone) ;


        console.log(isRecAlreadyPresent) ;

        if(! isRecAlreadyPresent){

            if(isFromRelController){
                this.config.retailerForVendor.push({

                          retailer_phone : store_phone,
                          type: "ACTIVE",
                          retailer_id:str_id

               });
            }
            else{
               this.config.retailerForVendor.push({

                          retailer_phone : store_phone,
                          type: "ACTIVE"

               });
            }


            if(isFromRelController){

                RMdatalink.app.getController('VendorRetailerRelations').addRtToRTVList() ;
            }

        }
        else{


            console.log("Vendor already have this retailer");
        }


    },

    assignVendorForRetailer: function(vendor_id, vendor_name, duplicatedRetailers) {

        /*

         get all retailers having phone nos

        */


        return ;

        var rtIndex = -1 ;

        var updatedRecords = [] ;
        var duplicatedRecords = [] ;
        var failedRecords = [] ;
        var masterStore = Ext.getStore('retailersMaster');

        console.error(duplicatedRetailers);


        updateRetailers() ;


        function updateRetailers(){

            if(rtIndex  < (duplicatedRetailers.length -1 ))
            {
                 rtIndex++ ;

                var recAlreadyPresent = false ;
                for(var i =0 ; i < duplicatedRetailers[rtIndex].vendors.length ; i++ )
                {

                    if( duplicatedRetailers[rtIndex].vendors[i].vendor_id == vendor_id){

                        recAlreadyPresent = true ;
                        break ;
                    }

                }

                if(recAlreadyPresent){

                    duplicatedRecords.push(duplicatedRetailers[rtIndex]) ;

                    updateRetailers() ;

                }else{
                    duplicatedRetailers[rtIndex].vendors.push(

                      {
                          vendor_id : vendor_id,
                          vendor_name:vendor_name,
                          type: "ACTIVE"
                      }

                    );
                    sendUpdateData() ;
                }
            }
            else{

                console.log("Retailers updated for current Vendor");

                RMdatalink.app.getController('PaginationController').setCurrentActiveStoreId('retailersMaster') ;
                RMdatalink.app.getController('PaginationController').loadStore(masterStore.getPageNo(),RMdatalink.util.DataLoader.getPageSize(),false);


                console.log(updatedRecords) ;
                console.log(duplicatedRecords) ;
                console.log(failedRecords) ;

            }

        }


        function sendUpdateData(){


            //duplicatedRetailers[rtIndex]

             var rec = new Object() ;
             rec = duplicatedRetailers[rtIndex] ;
             var _id = duplicatedRetailers[rtIndex]._id ;

             delete(rec._id);
             delete(rec.store_phone );


             RMdatalink.iwa.rdl.doUpdateCollection(masterStore, rec , _id , successCallBack , errorCallback );


        }


        function successCallBack(){
            updatedRecords.push(duplicatedRetailers[rtIndex]) ;


            updateRetailers() ;
        }


        function errorCallback(){

            failedRecords.push(duplicatedRetailers[rtIndex]) ;

            updateRetailers();
        }

    }

});