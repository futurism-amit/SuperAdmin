Ext.define('RMdatalink.util.globalConfig', {
    singleton: true,
	alias : 'widget.globalConfig',
	constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
	
	config:{
		/******THIS VARIABLES ARE ADDED IN ORDER TO GET ITEMTAP PURPOSE.**********/
		Store_nameDelegateClassForTap:'Store_nameDelegateClassForTap',
		Manager_LastNameDelegateClassForTap:'Manager_LastNameDelegateClassForTap',
		listAttrForDelHandling:'click_Delegate_Attr',
		urlForRetailerCard:'card'+14,
		dataToShowInSettingWindow:{},
		dataInRetailerScreenForSaveOrCancel:{},
		pageIndexOfLoaderFunction:1,
		ninArrayForLoaderFunction:[],
		newRetailerInfoAddedName:[]
		
	},
	addValueInNinArray:function(value){
		var array = RMdatalink.util.globalConfig.getNinArrayForLoaderFunction();
		if(array.indexOf(value) >=0){
			console.log("Nin ATTRIBUTE PRESENT");
			return;
		}else{
			array.push(value);
			RMdatalink.util.globalConfig.setNinArrayForLoaderFunction(array);
		}
	},
	addNewRetailerInfoAddedName:function(value){
		var array = RMdatalink.util.globalConfig.getNewRetailerInfoAddedName();
		if(array.indexOf(value) >=0){
			console.log("Nin ATTRIBUTE PRESENT");
			return;
		}else{
			array.push(value);
			RMdatalink.util.globalConfig.setNewRetailerInfoAddedName(array);
		}
	},	
	/*TRANSFER THIS FUNCTION TO GLOBAL METHODS*/
	isAttributePresentInTarget:function(attrName,target){
	   if(attrName && target){
		   var targetEl = target;
		   var attrToSearch = attrName;
		   //SEARCH IN PARENT IF POSSIBLE
		   if( targetEl.hasAttribute( attrToSearch ) || targetEl.parentNode.hasAttribute( attrToSearch ) ){
					return true;			 
			 }
			return false; 
		}	
		else{
			return false;
		}
	},

	validateVendorString:function(string){


		  var subStr = "prc_av_"
		  if(string.indexOf(subStr ) >= 0){
			 console.log("VENDORD");
			 var splitedString = string.split(subStr);
			 console.log(splitedString);
			 var result = splitedString.pop();
			 console.log("result" , result); 
			 var accStr = "_account";
			 if(result.indexOf( accStr) >= 0){
					  
				 console.log("account present");
				 var ultimateResultArray = result.split(accStr);
				 console.log(ultimateResultArray );
				 var vendorToReturn = ultimateResultArray [0]; 
				 return  vendorToReturn;
			 }else{
				return false;
			 }

		  }else{
			console.log("NO A VENDOR");
			return false;
		  }



	},
	getArrayOfVendorAndTheirAccountNo:function(object){
		
		var keysInObject = Object.keys(object);
		var arrayOfVendor = [];
		for(var i = 0; i < keysInObject.length ; i++){
		    var vendorString  = keysInObject[i] ;
			var isStringAVendor =  RMdatalink.util.globalConfig.validateVendorString( vendorString);
			var valueofKey = object[  keysInObject[i] ];
			if( valueofKey == 0){
				continue;
			}
			if(   isStringAVendor ){
			        var objToPush = {
					   vendor_name:isStringAVendor,
					   account_no:object[isStringAVendor + '_account']
					   //vendor_name
					   //Safavieh_account
					}
					arrayOfVendor.push(objToPush);
			}else{
				continue;
			}
		
		}
		return arrayOfVendor;
	
	},
	
	validateVIPString:function (string){
		  var subStr = "prc_af_"
		  if(string.indexOf(subStr ) >= 0){
			 console.log("VENDORD");
			 var splitedString = string.split(subStr);
			 console.log(splitedString);
			 var result = splitedString.pop();
			 console.log("result" , result); 
			 var accStr = "mo_";
			 var otStr = "ot_"
			 if(result.indexOf( accStr) >= 0){
					  
				 console.log("account present");
				 var ultimateResultArray = result.split(accStr);
				 console.log(ultimateResultArray );
				 var vendorToReturn = ultimateResultArray.pop();
				 if(vendorToReturn){
						return  vendorToReturn;
				 }else{
						return  false;
				}		
				 
			 }else
			 if (result.indexOf( otStr) >= 0){
			 
				 console.log("account present");
				 var ultimateResultArray = result.split(otStr);
				 console.log(ultimateResultArray );
				 var vendorToReturn = ultimateResultArray.pop();
				 if(vendorToReturn){
						return  vendorToReturn;
				 }else{
						return  false;
				}			 
			 
			 }
			 else{
				return false;
			 }
		  }else{
			console.log("NO A VENDOR");
			return false;
		  }		
	},
	getArrayOfVIPProgramAndTheirPrices:function(object){
		
		var keysInObject = Object.keys(object);
		var arrayOfVendor = [];
		for(var i = 0; i < keysInObject.length ; i++){
		    var vendorString  = keysInObject[i] ;
			var isStringAVendor =  RMdatalink.util.globalConfig.validateVIPString( vendorString);
			var valueofKey = object[  keysInObject[i] ];
			if( valueofKey == 0){
				continue;
			}
			if(   isStringAVendor ){
			        var objToPush = {
					   module_name:isStringAVendor,
					   module_price:object[vendorString]
					   //vendor_name
					   //Safavieh_account
					}
					arrayOfVendor.push(objToPush);
			}else{
				continue;
			}
		
		}
		return arrayOfVendor;
	
	},
	getObjectToSendToRetailerUpdater:function(newRetailerInformation){
				var objectToSend = {
				};
			/*


prc_af_mo_Additional E-Mail Addresses: 0,
prc_af_mo_Additional Vendors: 0,

'prc_af_mo_Blog': "199",
'prc_af_mo_Domain Name': "2",
'prc_af_mo_Social Media': 0,
'prc_af_ot_Custom Logo Creation': 0,
'prc_af_ot_Custom Pages': 0,
'prc_af_ot_Custom Promotional Banners': 0,

'prc_av_Capel_account': "",
'prc_av_Colonial Mills_account': "0",
'prc_av_Fanmats_account': "0",
'prc_av_Loloi_account': "0",
'prc_av_Nourison_account': "299",
'prc_av_Safavieh_account': "0",
'prc_av_Shaw_account': "0",

'pwd': "bokhari",
'pwd2': "bokhari",

    "agreement_accepted" : "yb",
    "agreement_date" : "Oct 14, 2014"





		
			
			*/	
				console.error(newRetailerInformation);
				var eCommInfo = {};
					objectToSend.store_name = newRetailerInformation.store;
					objectToSend.store_products_vip = true;
					objectToSend.store_products = objectToSend.store_products || {};
					objectToSend.store_products.vip_status  = "HOT_PROSPECT";
					//store_products_vip
					
					eCommInfo.vip_vendor = newRetailerInformation.partner;
					eCommInfo.account_no = newRetailerInformation.partner_account;
					eCommInfo.store_name = newRetailerInformation.store;
					eCommInfo.store_zip_code = newRetailerInformation.store_zip;
					eCommInfo.contact_name = newRetailerInformation.contact;
					eCommInfo.phone_no = newRetailerInformation.phone;
					eCommInfo.email_id = newRetailerInformation.mail || newRetailerInformation.email;
					eCommInfo.promo_code = newRetailerInformation.promo;
					eCommInfo.password = newRetailerInformation.pwd;
					eCommInfo.shopping_cart = "";
					eCommInfo.domain_name = newRetailerInformation.domain_name;
					eCommInfo.template_color = ( newRetailerInformation.template_color  || "").toLowerCase();
					eCommInfo.facebook = newRetailerInformation.facebook_url;
					eCommInfo.twitter = newRetailerInformation.twitter_url;
					eCommInfo.google_plus = newRetailerInformation.google_url;
					eCommInfo.youtube = newRetailerInformation.youtube_url;
					eCommInfo.linkedln = newRetailerInformation.linkedin_url;
					eCommInfo.pinterest = newRetailerInformation.pinterest_url;
					eCommInfo.tumblr = newRetailerInformation.tumblr_url;
					eCommInfo.web_addres = "";
					eCommInfo.website_name = "";
					eCommInfo.contactus_store_email = newRetailerInformation.store_email;
					eCommInfo.contactus_store_phone = newRetailerInformation.store_phone;
					eCommInfo.contactus_store_country = newRetailerInformation.store_country;
					eCommInfo.contactus_store_name = newRetailerInformation.store;
					eCommInfo.contactus_address = (newRetailerInformation.store_address  || " ") + " "  + (newRetailerInformation. store_address2 || " ");
					eCommInfo.contactus_city = newRetailerInformation.store_city;
					eCommInfo.contactus_state = newRetailerInformation.store_state;
					eCommInfo.contactus_zip = newRetailerInformation.store_zip;
					eCommInfo.about_you = newRetailerInformation.about_us_form;
					eCommInfo.ms_email_addresses = "";
					eCommInfo.additional_notes = "";
					eCommInfo.picker = "";
					eCommInfo.logo = newRetailerInformation.logo;
					eCommInfo.agreement_accepted = newRetailerInformation.agreement_accepted;
					eCommInfo.agreement_date = newRetailerInformation.agreement_date;
					
					eCommInfo.billing_address = (newRetailerInformation.billing_address  || " ") + " "  + (newRetailerInformation. billing_address2 || " ");;					
					eCommInfo.billing_city = newRetailerInformation.billing_city;
					eCommInfo.billing_country = newRetailerInformation.billing_country;
					eCommInfo.billing_email = newRetailerInformation.billing_email;
					eCommInfo.billing_phone = newRetailerInformation.billing_phone;
					eCommInfo.billing_state = newRetailerInformation.billing_state;
					eCommInfo.billing_zip = newRetailerInformation.billing_zip;
					eCommInfo.additional_vendors = RMdatalink.util.globalConfig.getArrayOfVendorAndTheirAccountNo(newRetailerInformation);
					eCommInfo.programs = RMdatalink.util.globalConfig.getArrayOfVIPProgramAndTheirPrices(newRetailerInformation);
					


					objectToSend.e_commerce_info = eCommInfo;
					console.log(objectToSend);		
					return 	objectToSend;
	},
	markRetailerAsScanned:function(newRetailerInformation , sCallBack , eCallBack){
						var objectForUpdate = {
							is_scanned_by_retailer_updater:true
						 };
						 var store = Ext.getStore("interMediateCollectionTable");
						 if(store){
							console.log( " interMediateCollectionTable store fouind");
						 }else
						 {
							console.log("STORE NOT FOUND");
							return;
						 }
						 console.log("THIS INFORMATION WILL BE MARKED AS SCANNED" , newRetailerInformation);	
						 RMdatalink.iwa.rdl.doUpdateCollection(store , objectForUpdate , newRetailerInformation._id , function (){
								console.log("IMTER<EDIATE TABLE UPDATED" , arguments);
								
								
								if(sCallBack && typeof(sCallBack) == 'function'){
									console.log("CALLING SCALLBACK");
									sCallBack.apply(window , arguments);
								}
								
								
						 },function(){
						 
								console.log("IMTER<EDIATE TABLE UPDATED FAIELD" , arguments);
								if(eCallBack && typeof(eCallBack) == 'function'){
									console.log("CALLING ECALLBACK");
									eCallBack.apply(window , arguments);
								}

								})	
	
	
	},
	updateRemoteRetailerInformation:function(){
		console.log("UPDATE RETAILER FUNCTION CALLED");
		var pageNo  = RMdatalink.util.globalConfig.getPageIndexOfLoaderFunction();
		RMdatalink.util.globalConfig.setPageIndexOfLoaderFunction( 1 + pageNo);
		console.log("pageNo = "  + pageNo);
		RMdatalink.iwa.rdl.queryDB(
			{collection: "rdl_int_e_commerce_infos", pageNo: pageNo, pageSize: 1, sortBy: {},query: {
			
			 '$and':[ 
						{
							'store':{ $exists: true}
						},
						{
							'store':{ $ne: ""}
						},
						{
							'is_scanned_by_retailer_updater':{ $ne: true}
						},
						{
							'store':{ $nin: RMdatalink.util.globalConfig.getNinArrayForLoaderFunction()  }
						}						
					]	
			},fields: {}	},
			function () {
			
				console.log('success in quering data from intermediate table', arguments);
				onLoadOFIntermediateData.apply(window,arguments);
			}
			,function () {
				console.log('err', arguments);
			}
		);
		function onLoadOFIntermediateData(count ,items){
			
			var items = arguments[0].items;
			if(items && items.length){
			
			}else{
				console.log("NO NEW DATA IS AVAILAIBLE IN DUMP");
				return;
			}
			for(var i=0;i<items.length; i++){
					if(items[i].delete_status == true) continue;	
					addOrUpdateInformationInRetailerMaster(items[i]);		
			} 
		
		}
		function addOrUpdateInformationInRetailerMaster(information){
		
			var store_name = information.store;
			if(store_name){
				RMdatalink.iwa.rdl.queryDB(
					{collection: "rdl_masterretailerrecords", pageNo: 1, pageSize: 1, sortBy: {},
						 query: {
							store_name:store_name 
						 },
						 fields: {}	
					},
					function () {
						console.log('RETAILER QUERY SUCCESS FUNCTION ', arguments);
						var items = arguments[0].items;
						console.log(items);
						if(items && items.length){
								
								console.log("RETAILER WAS PRESENT.JUST UPDATE INFORMATIOMN " +  store_name);
								updateAlreadyCreatedRetailer(items[0] , information);
								
						}else{
					       
							
								console.log("CREATE NEW RETAILER WITH NAME "  + store_name );
								createNewRetailer(information)
								
						}
						
					}
					,function () {
						console.log('err', arguments);
					}
				);				
			
			}else
			{
				console.log("NO STORE NAME PRESENT");
				return;
			}
			function createNewRetailer(newRetailerInformation){
				
				var objectToSend = {
				};
				objectToSend = RMdatalink.util.globalConfig.getObjectToSendToRetailerUpdater(newRetailerInformation);

					var masterStore = Ext.getStore('retailersMaster');
					// SEND DATA TO SERVER TO CREATE NEW RETAILER
					RMdatalink.util.DataLoader.sendNewRecordForRetailerToServer(objectToSend,masterStore,successCallBack,errorCallBack) ;
					
					function successCallBack(){

					// UPDATE INTERMEDIATE TABLE IN SUCH A WAY THAT YOU WILL KNOW THAT THE RECORD WAS SCANNED.
						console.log("ADDITTION WAS SUCCESSFUL" ,arguments);
						RMdatalink.util.globalConfig.markRetailerAsScanned(newRetailerInformation  , function(){
						
							RMdatalink.util.globalConfig.addNewRetailerInfoAddedName(newRetailerInformation.store);
							 console.log( " MARKING SCANNING SUCCESSFUL" , arguments );
							 RMdatalink.util.globalConfig.updateRemoteRetailerInformation();	
						}, function(){
							console.log( " MARKING SCANNING FAILURE" , arguments );
						
						} );

						
					}
					function errorCallBack(){
							console.log("ADDITTION WAS ERROR FUL " , arguments);
					}
			}
			function updateAlreadyCreatedRetailer(oldRetailerInformation , newRetailerInformation_fromTable){
					
					console.log(oldRetailerInformation);
					console.log(newRetailerInformation_fromTable);
					
					// ALGO
					
					//  BRING THE LATEST RECORD OF THE NEW RETAILER INFORMATION BY _id :-1 (DESCENDING ORDER OF TIME STAMP).
					//  UPDATE THE DATA FROM LATEST RECORD
					//  ALSO MARK THE NEW RETAILER INFORMATION AS VISITED SO THAT IT DOES NOT GET ITERATED NEXT TIME
					
					
					console.log("")
					RMdatalink.iwa.rdl.queryDB(
						{collection: "rdl_int_e_commerce_infos", pageNo: 1, pageSize: 1, sortBy: { _id: -1 },
							 query: {
								store: newRetailerInformation_fromTable.store 
							 },
							 fields: {}	
						},
						function (){
							console.log("THIS IS UPDATER LATEST INFORMATION " , arguments);
								var objectToSend = {
								};
								var newRetailerInformation = arguments[0].items[0];
								objectToSend = RMdatalink.util.globalConfig.getObjectToSendToRetailerUpdater(arguments[0].items[0]);
								// UPDATE THE INFORMATION WE RECIEVED IN RETAILER MASETER	
								var store = Ext.getStore('retailersMaster');
								var objectForUpdate = objectToSend;
								console.log("objectForUpdate" , objectToSend);								
								RMdatalink.iwa.rdl.doUpdateCollection(store , objectForUpdate , oldRetailerInformation._id , function (){
										
										
										RMdatalink.util.globalConfig.addValueInNinArray(objectForUpdate.store_name);
										console.log("RETAILER INFORMATION UPDATED" , arguments);
										
										
										RMdatalink.util.globalConfig.markRetailerAsScanned(newRetailerInformation_fromTable  , function(){
										
											
											 console.log( " MARKING SCANNING SUCCESSFUL IN LATEST RETAILER" , arguments );
											 RMdatalink.util.globalConfig.updateRemoteRetailerInformation();	
										
										}, function(){
											console.log( " MARKING SCANNING FAILURE" , arguments );
										
										} );										
										
										
										
										
										
										
										
								 },function(){
								 
										console.log("RETAILER INFORMATION  UPDATED FAIELD" , arguments);
								 });
							
						},
						function (){
							console.log("THIS IS UPDATER LATEST INFORMATION ERROR" , arguments);
						}
					)
					

					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
			}
		
		
		}
	
	}
});