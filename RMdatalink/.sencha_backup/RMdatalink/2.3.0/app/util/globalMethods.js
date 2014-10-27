Ext.define('RMdatalink.util.globalMethods', {
    singleton: true,
    alias: 'widget.globalMethods',
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    config: {
    },
	
	getArrayDataFromStore: function(store) {
		var data = new Array() ;
		data = store.getData().all;
		var dataToSet = new Array();
		for(var i=0;i<data.length;i++) {
			dataToSet.push(data[i].data);
		}
		return dataToSet;
	},

    SetCommaForNumericField: function(value) {
        var sumStr = "" + Math.round(value);

        var len = sumStr.length;
        if (len > 3)
        {
            sumStr1 = sumStr.substr(0, (len - 3));
            sumStr2 = sumStr.substr((len - 3), (len - 1));
            sumStr = sumStr1 + ',' + sumStr2;
        }

        return sumStr;
    },
    getValueFromComponet: function(cmp) {
        if (cmp) {
            var keyForFunction;
            if (cmp.getValue && typeof(cmp.getValue) === 'function') {
                keyForFunction = 'getValue';

            }
//			returning false can create ambiguity			
//			else if(cmp.isChecked  && typeof(cmp.isChecked) === 'function'){
//				keyForFunction = 'isChecked';
//			}
            else if (cmp.getData && typeof(cmp.getData) === 'function') {
                keyForFunction = 'getData';
            }
            if (keyForFunction) {

                var functionToExecute = cmp[keyForFunction];
                //USE BIND FUNCTION IF WANTED TO IMPROVE PERFORMANCE,
                var value = functionToExecute.call(cmp);
                return value;

            }
        }
        return false;

    },
    addValueToComponent: function(cmp, value) {
        if (cmp) {
            var keyForFunction;
            if (cmp.setValue && typeof(cmp.setValue) === 'function') {
                keyForFunction = 'setValue';

            }
            else if (cmp.checked && typeof(cmp.checked) === 'function') {
                keyForFunction = 'checked';
            }
            else if (cmp.setData && typeof(cmp.setData) === 'function') {
                keyForFunction = 'setData';
            }
            if (keyForFunction) {

                var functionToExecute = cmp[keyForFunction];
                //USE BIND FUNCTION IF WANTED TO IMPROVE PERFORMANCE,

                functionToExecute.call(cmp, value);

            }


        }
    },
    trimNullsFromLiteralObj: function(data) {
        var y;
        for (var x in data) {
            y = data[x];
            if (y === null || y === "" || typeof y === "undefined" || (y instanceof Object && Object.keys(y).length == 0)) {
                delete data[x];
            }
            if (y instanceof Object)
                y = this.trimNullsFromJson(y);
        }
        return data;
    },
    getRefinedArray: function(arrayofKeys, objectToScan) {
        //  ASSUMPTION 
        //  1 >ARRAY OF OBJECTS
        //  2>KEYS INSIDE OBJECTES ARE   itemId  and   keyName
        // keyName's VALUE CAN BE ONLY ARRAY OR STRING,but NOT OBJECT.
        var returningArray = new Array();
        for (var i = 0; i < arrayofKeys.length; i++) {

            var iteratedObject = arrayofKeys[i];
            var keysToSearch = iteratedObject.keyName;
            if (!(keysToSearch instanceof Array)) {

                if (objectToScan.hasOwnProperty(keysToSearch)) {
                    returningArray.push(iteratedObject);
                }
            }
            else {
                var shouldPush = true;
                for (var j = 0; j < keysToSearch.length; j++) {
                    var tempKey = keysToSearch[j];
                    if (objectToScan.hasOwnProperty(tempKey)) {
                        shouldPush = true;
                    }
                    else {
                        shouldPush = false;
                        break;
                    }
                }
                if (shouldPush) {
                    returningArray.push(iteratedObject);
                }
            }

        }
        return returningArray;

    },
    getValuesFromObj: function(object, keys) {
        if (object && keys) {
            var objectToScan = object;
            if (!(keys instanceof Array)) {

                if (objectToScan.hasOwnProperty(keys)) {
                    return objectToScan[keys];
                }

            }
            else {

                var valuesArray = new Array();
                for (var i = 0; i < keys.length; i++) {
                    if (objectToScan.hasOwnProperty(keys[i])) {
                        valuesArray.push(objectToScan[keys[i]]);
                    }

                }
                return valuesArray.toString();
            }

        }

    },
    fillListData: function(selectionQuery, data, index) {

        var listArray = Ext.ComponentQuery.query(selectionQuery);
        if (listArray.length) {
            if (typeof(index) === 'number' && index >= 0 && index < cmp.length) {
            }
            else {
                index = 0;
            }
            var list = listArray[index]
              this.fillListDataByListObject(list,data)
            return;
//            var listStore = list.getStore();
//            if (listStore) {
//                listStore.removeAll();
//                listStore.sync();
//            }
//            list.setData(data);
//            list.refresh();
        }

    },
    fillListDataByListObject: function(list, data) {
        if (list && data && data.length > 0)
        {
            var listStore = list.getStore();
            if (listStore) {
                listStore.removeAll();
                listStore.sync();
                listStore.setData(data);
                listStore.sync();
            }
            else {

                list.setData(data);
                list.refresh();
            }

        }
        else if(list && data && data.length === 0)
        {
            var listStore = list.getStore();
            if (listStore)
            {
                listStore.removeAll();
                listStore.sync();
            }
        }
    },
    getComponent: function(selectionQuery, index, filter) {
        var valToReturn = false;
        var cmp = Ext.ComponentQuery.query(selectionQuery);
        if (cmp.length) {
            if (typeof(index) === 'number' && index >= 0 && index < cmp.length) {
                if (filter && typeof(filter) === 'function') {
                    filter();
                }
            }
            else {
                index = 0;
            }
            valToReturn = cmp[index];
        }
        return valToReturn;
    },
    setValueWithSelectionQuery: function(selectionQuery, value, index, filter) {
        if (!selectionQuery)
            return;
        var cmp = this.getComponent(selectionQuery, index, filter);
        if (cmp) {
            this.addValueToComponent(cmp, value)
        }
    },
    fillDataFromMasterStore: function() {
        return ;
        console.log("successfully loaded");
        //   var store = Ext.getStore('retailersMaster');
//         var data = store.getData();
//         
//         store.removeAll();
//         store.sync();
//         store.setData(data.all)

        RMdatalink.util.DataManager.addFilteredDataInStore('retailersMaster', 'retailerUsers', {
            key: 'store_status',
            value: 'ACTIVE'
        });
        RMdatalink.util.DataManager.addFilteredDataInStore('retailersMaster', 'retailerInactive', {
            key: 'store_status',
            value: 'INACTIVE'
        });
        RMdatalink.util.DataManager.addFilteredDataInStore('retailersMaster', 'retailerHotProspects', {
            key: 'store_status',
            value: 'HOT_PROSPECTS'
        });
        
        RMdatalink.util.DataManager.addFilteredDataInStore('retailersMaster', 'retailerProspects', {
            key: 'store_status',
            value: 'PROSPECTS'
        });
        
        
        RMdatalink.util.DataManager.addFilteredDataInStore('retailersMaster', 'retailerPending', {
            key: 'store_status',
            value: 'PENDING'
        });
    },
    setkeyValuePairToObject: function(object, key, value) {
        //THIS FUNCTION IS WRITTEN PURPOSEFULY.
        object[key] = value;
    },
    isValidWebsite: function(website) {
        var regEx = /^(((ht|f){1}((tp|tps):[/][/]){1}))[-a-zA-Z0-9@:%_\+.~#!?&//=]+$/;

        return regEx.test(website);
    },
    
    getToday:function(){
            
                return new Date() ;
                
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!

                var yyyy = today.getFullYear();
                if(dd<10)
                {
                    dd='0'+dd
                } 
                if(mm<10)
                {
                    mm='0'+mm
                } 

                return (dd+'/'+mm+'/'+yyyy);
    },
	getAmToday:function(){
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0!

                var yyyy = today.getFullYear();
                if(dd<10)
                {
                    dd='0'+dd
                } 
                if(mm<10)
                {
                    mm='0'+mm
                } 

                return (mm+'/'+dd+'/'+yyyy);
		},
    getDateDifferenceInDays:function(date1,date2){
        
        date1 = new Date(date1);
        date2 = new Date(date2);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        return diffDays;
    },
	
	getDateTimeFromMongo_id:function(_id){
	
	return new Date(parseInt( _id.toString().slice(0,8), 16)*1000);
	
	},
	
	getAMDate:function(date){
				date = new Date(date);
                var dd = date.getDate();
                var mm = date.getMonth()+1; //January is 0!

                var yyyy = date.getFullYear();
                if(dd<10)
                {
                    dd='0'+dd
                } 
                if(mm<10)
                {
                    mm='0'+mm
                } 

                return (mm+'/'+dd+'/'+yyyy);
	},
	
	getParameterByName:function(name) {

        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},
	
	getAMDateFrom_id:function(_id){
			var timestamp = _id.toString().substring(0,8) ;
			var date = new Date( parseInt( timestamp, 16 ) * 1000 ) ;
			
			return (this.getAMDate(date)) ;
	},
	setLatesetUserActivity:function(){
	},
	getlatestUserActivity:function(){
		return {
		
			"retailersScreen":{
				"isDatalinkChecked" : true,
				"isECommChecked":false,
				"isRMproChecked":true
			}
		
		}
	}
	
	
	



});