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
		newRetailerInfoAddedName:[],
		updaterRunningStatus:false
		
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
	markRetailerAsVisited:function(newRetailerInformation , sCallBack , eCallBack){
						var objectForUpdate = {
							is_visited_by_retailer_updater:true
						 };
						 
						 var store = Ext.getStore("interMediateCollectionTable");
						 if(store){
							console.log( " interMediateCollectionTable store fouind");
						 }else
						 {
							console.log("STORE NOT FOUND");
							return;
						 }
						 console.log("THIS INFORMATION WILL BE MARKED AS VISITED" , newRetailerInformation);	
						 RMdatalink.iwa.rdl.doUpdateCollection(store , objectForUpdate , newRetailerInformation._id , function (){
								console.log("IMTER<EDIATE TABLE UPDATED FOR VISITED" , arguments);
								console.error(newRetailerInformation);
								
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
		RMdatalink.util.globalConfig.setUpdaterRunningStatus(true);
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
						},
/*						{
							'flag_for_development':true
						}
*/					
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
				RMdatalink.util.globalConfig.setUpdaterRunningStatus(false);
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
							    if( newRetailerInformation.is_visited_by_retailer_updater ){
									console.warn("THIS RETAILER LATEST INFORMATIOn HASE BEEN TRANSFFERED TO THE DB. WE WILL CONVERT OBJECT TO UPDATE TO EMPTY OBJECT");
									objectForUpdate = {};
									objectForUpdate.store_name = objectToSend.store_name;
								} 			
								RMdatalink.iwa.rdl.doUpdateCollection(store , objectForUpdate , oldRetailerInformation._id , function (){
										
										
										RMdatalink.util.globalConfig.addValueInNinArray(objectForUpdate.store_name);
										console.log("RETAILER INFORMATION UPDATED" , arguments);
										
										RMdatalink.util.globalConfig.autoUpdateRetailerProductSetup(newRetailerInformation   , oldRetailerInformation  );
										RMdatalink.util.globalConfig.markRetailerAsScanned(newRetailerInformation_fromTable  , function(){
										
											
											 console.log( " MARKING SCANNING SUCCESSFUL IN LATEST RETAILER" , arguments );
											 RMdatalink.util.globalConfig.updateRemoteRetailerInformation();	
										
										}, function(){
											console.log( " MARKING SCANNING FAILURE" , arguments );
										
										} );
										RMdatalink.util.globalConfig.markRetailerAsVisited(newRetailerInformation  , function(){
										
											
											 console.log( " MARKING THE LATEST RETAILER INFORMATION AS VISISTED SUCCESSFUL IN LATEST RETAILER" , arguments );
											// RMdatalink.util.globalConfig.updateRemoteRetailerInformation();	
										
										}, function(){
											console.log( " MARKING SCANNING FAILURE" , arguments );
										
										} );											
										
//	markRetailerAsVisited									
										
										
										
										
										
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
	
	},autoUpdateRetailerProductSetup:function(      retailerInfoFromIntermediateCollection , retailerFromVendorMasterCollection                        ){
	    
		return;
		//ALGO : 1   GET THE LATEST INFORMATION OF RETAILER FROM VENDOR MASTER
	    // 2 : On SUCCESS CREATE  product_billing_object.
		if( retailerInfoFromIntermediateCollection.is_registeration_complete  || retailerInfoFromIntermediateCollection.flag_for_development)
		{
		}else{
			return;
		}
		
		var latestInformationOfRetailerFromVendorMaster;
	    RMdatalink.iwa.rdl.queryDB(
					{collection: "rdl_masterretailerrecords", pageNo: 1, pageSize: 1, sortBy: {},
						 query: {
							_id: retailerFromVendorMasterCollection._id 
						 },
						 fields: {}	
					},function(){
						
						// SINCE THE INFORMATION RECEIVED IN INTERMEDIATE TABLE IS ALMOST HALF OF WHAT WE REQUIRE WITH DIFFERENT SIGNATURE
						// WE HAVE TO CONVERT THE DETAIL INTO OUR SIGNATURE.
						latestInformationOfRetailerFromVendorMaster = arguments[0].items[0];
						
						var product_billng_object = latestInformationOfRetailerFromVendorMaster.product_billng || {};
						var product_vip_object = {
							contract_period:12,
							created_by :  "vip registeration program",  // VIP PROGRAM WILL ALWAYS BE FOR 12 MONTHS
							last_created_by : "vip registeration program",
							payment_frequency : 1,   // VIP PROGRAM PAYMENT FRRQUENCY WILL BE ONE
							payment_status : "paid", // VIP REGISTERATION PRODUCT SETUP WILL TAKE PLACE ONLY WHEN PAYMENT IS RECEIVED.
							payments:[],
							payment_period:1,  // PAYMENT PERIOD WILL BE 1. THIS MEANS MONTHLY.
							retailer_id:latestInformationOfRetailerFromVendorMaster._id,
							sales_persons:[],
							vendor_sku_discount:null,
							vendor_pricing_policy:'',
							bundle_addons:'',
							bundle_vendors:'',
							commission_percent:'',
							commissionable_ammount:'',
							invoice_product:'product_vip',
							invoice_id:'',
							invoice_number:'',
							pricing_policy_option:'',
							products_rate:'',
							vendors_rate:''
	
							
						};
							
							product_vip_object.created_date_stamp =    new Date().toLocaleDateString();
							product_vip_object.last_created_date_stamp =  product_vip_object.created_date_stamp;
							product_vip_object.pay_date =  product_vip_object.created_date_stamp 
							product_vip_object.payment_period_start = product_vip_object.pay_date;         
							
							var endDate = new Date( product_vip_object.payment_period_start );
								endDate.setFullYear( endDate.getFullYear() + 1);
								
							
							product_vip_object.payment_period_end = endDate.toLocaleDateString();

							var date = new Date(product_vip_object.created_date_stamp);
								 date.setMonth(date.getMonth() + 1);
							product_vip_object.contract_renewal_date = date.toLocaleDateString();
							product_vip_object.contract_send_date =  product_vip_object.created_date_stamp;
							product_vip_object.contract_sent_date = product_vip_object.created_date_stamp;
							product_vip_object.contract_signed_date = product_vip_object.created_date_stamp;
							product_vip_object.contract_start_date = product_vip_object.created_date_stamp;
							
							product_vip_object.vendor_count_discount  =  product_vip_object.created_date_stamp;
							product_vip_object.due_date  =  product_vip_object.contract_renewal_date;
							product_vip_object.initial_activation_date =  product_vip_object.created_date_stamp;	
							
							var total = 0;
							RMdatalink.util.globalConfig.getArrayOfVIPProgramAndTheirPrices(retailerInfoFromIntermediateCollection).forEach(function(obj){
								total += parseInt( obj. module_price);	
							}  ) ;
							product_vip_object.ammount_paying = total;
							product_vip_object.contract_price = product_vip_object.ammount_paying;
							product_vip_object.monthly_membership =product_vip_object.ammount_paying;
							product_vip_object.total_payble= product_vip_object.ammount_paying;
							var programDetails = []
							RMdatalink.util.globalConfig.getArrayOfVIPProgramAndTheirPrices(retailerInfoFromIntermediateCollection).forEach(function(obj){
								var program = findProgramBy_name(  obj.module_name );
								if( program  )
								{
									programDetails .push(program.raw)
								
								}

							}  ) ;	
							product_vip_object.product_modules =  programDetails;				
							product_vip_object.total_payble = product_vip_object.ammount_paying;
							
							product_billng_object. product_vip = product_vip_object;
							var objectForUpdate = {
								product_billng_object:product_billng_object
							};
							var store = Ext.getStore('retailersMaster');
							RMdatalink.iwa.rdl.doUpdateCollection(store , objectForUpdate , retailerFromVendorMasterCollection._id , function (){
								console.log("SUCCESS in INFORAMTAION");
								console.log(arguments);
							},function(){})
							
							
							
							
							
							

						
						
						
					
					}, function(){}
					)
		
						
	
	
	
	
	}
});