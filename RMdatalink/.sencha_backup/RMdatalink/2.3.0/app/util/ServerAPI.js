Ext.define('RMdatalink.util.ServerAPI', {
    singleton: true,
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);

      
     
    },
    config: {
        
    },
   
   /*
    Hook to access billing report for current month for all active retailers.
	Collection name:  "rdl_masterretailerrecords"
	
	record key:: for Product Datalink:- .product_billng.product_datalink
	             for Product RM-PRO:- .product_billng.product_rmpro
	
	param: monthNumber e.g for jan =1 ; for dec = 12 ;
	pageSize:
	suuccessCallBack: callback when success result from server
	failuerCallback: callback when error result from server
	
	return 
	1:array of retailer _id and total payable for give month
	2:Sum of total payable irrespective to pagination .
    3:Total number of retailers  //required to calculate Average Ammount	
   */
   
   getReportForMonth:function(productName,monthNumber,pageSize,successCallback,failuerCallback){
         var result =   {
					   count: 5,
					   items:
						[
							{
							   retailer_id: "1",
							   total_payble: 100,
							   payment_period:1
							},
							{
							   retailer_id: "2",
							   total_payble: 50,
							   payment_period:1
							},
							{
							   retailer_id: "3",
							   total_payble: 70,
							   payment_period:1
							},
							{
							   retailer_id: "4",
							   total_payble: 80,
							   payment_period:1
							},
							{
							   retailer_id: "5",
							   total_payble: 70,
							   payment_period:1
							},
						],
					   sum_of_total_payble:370
						
			    	};
		successCallback(result);
					
      
   },
   
   getLicenseConfig:function(modules,paymentPrd,user,storeName){
   },
   
   /*
    Hook to access billing report for current month for all active retailers.
	Collection name:  "rdl_masterretailerrecords"
	
	record key:: for Product Datalink:- .product_billng.product_datalink
	             for Product RM-PRO:- .product_billng.product_rmpro
				 
	param: year e.g 2014 , 2015 etc
	pageSize:
	suuccessCallBack: callback when success result from server
	failuerCallback: callback when error result from server
	
	return 
	1:array of retailer _id and total payable for give year months
	2:Sum of total payable irrespective to pagination .
    3:Total number of retailers  //required to calculate Average Ammount	
   */
   
   getReportForYear:function(productName,year,pageSize,successCallback,failuerCallback){
         var result =   {
					   count: 5,
					   items:
						[
							{
							   retailer_id: "1",
							   total_paybles: [
								   {
										total_payble:50
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:40
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:50
								   },
								   {
										total_payble:50
								   }
							   ],
							   payment_period:1
							},
							{
							   retailer_id: "2",
							   total_paybles: [
								   {
										total_payble:60
								   },
								   {
										total_payble:40
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:60
								   },
								   {
										total_payble:60
								   }
							   ],
							   payment_period:1
							},
							{
							   retailer_id: "3",
							   total_paybles: [
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:100
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   },
								   {
										total_payble:80
								   }
							   ],
							   payment_period:1
							},
							{
							   retailer_id: "4",
							   total_paybles: [
								   {
										total_payble:470
								   },
								   {
										total_payble:460
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   },
								   {
										total_payble:470
								   }
							   ],
							   payment_period:1
							},
							{
							   retailer_id: "5",
							   total_paybles: [
								   {
										total_payble:305
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:345
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   },
								   {
										total_payble:365
								   }
							   ],
							   payment_period:1
							}
						],
					   sum_of_total_payble:370
						
			    	};
		successCallback(result);
					
      
   },
   /*
		Reset Password function...
   */
   resetUserPassword:function(username,emailAddress,successCallback,failuerCallback){
   },
	
   getDefaultCommissionStructure:function(){
	return  {
		commission_structure:{

			  monthly:[
					{
						from:0,
						to:499,
						percentage:5.00
					},
					{
						from:500,
						to:799,
						percentage:7.50
					},
					{
						from:800,
						to:999,
						percentage:10.00
					},
					{
						from:1000,
						to:1499,
						percentage:12.50
					},
					{
						from:1500,
						to: "above",
						percentage:15.00
					}
				],
			  yearly :[
					{
						yearly_subscription_contract:1,
						percentage:100.00
					},
					{
						yearly_subscription_contract:2,
						percentage:100.00
					},
					{
						yearly_subscription_contract:3,
						percentage:90.00
					},
					{
						yearly_subscription_contract:4,
						percentage:90.00
					},
					{
						yearly_subscription_contract:5,
						percentage:80.00
					},
					{
						yearly_subscription_contract:6,
						percentage:80.00
					},
					{
						yearly_subscription_contract:7,
						percentage:70.00
					},
					{
						yearly_subscription_contract:8,
						percentage:60.00
					},
					{
						yearly_subscription_contract:8,
						percentage:50.00
					},
					{
						yearly_subscription_contract:10,
						percentage:50.00
					}
					
			  
			  
			  ]

			}
		};
	
	}   


});

