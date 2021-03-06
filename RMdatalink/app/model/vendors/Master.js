/*
 * File: app/model/vendors/Master.js
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

Ext.define('RMdatalink.model.vendors.Master', {
    extend: 'Ext.data.Model',
    alias: 'model.vendorsMaster',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fiel: 'manager_position',
        fields: [
            {
                name: 'vendor_logo'
            },
            {
                name: 'vendor_name'
            },
            {
                name: 'vendor_owner_firstname'
            },
            {
                name: 'vendor_owner_lastname'
            },
            {
                name: 'vendor_address_line1'
            },
            {
                name: 'vendor_address_suite'
            },
            {
                name: 'vendor_city'
            },
            {
                name: 'vendor_state'
            },
            {
                name: 'vendor_zip'
            },
            {
                name: 'vendor_email'
            },
            {
                name: 'vendor_phone'
            },
            {
                name: 'vendor_phone_ext'
            },
            {
                name: 'vendor_fax'
            },
            {
                name: 'vendor_website'
            },
            {
                name: 'vendor_type'
            },
            {
                name: 'vendor_location'
            },
            {
                name: 'vendor_employees'
            },
            {
                name: 'vendor_yr_business'
            },
            {
                name: 'vendor_percent_program'
            },
            {
                name: 'vendor_percent_oneof_kind'
            },
            {
                name: 'vendor_challenges'
            },
            {
                name: 'vendor_advertising'
            },
            {
                name: 'vendor_monthly_budget'
            },
            {
                name: 'vendor_status'
            },
            {
                name: 'manager_photo_url'
            },
            {
                name: 'manager_firstname'
            },
            {
                name: 'manager_lastname'
            },
            {
                name: 'manager_email'
            },
            {
                name: 'manager_phone'
            },
            {
                name: 'manager_linkedin'
            },
            {
                name: 'manager_facebook'
            },
            {
                name: 'manager_twitter'
            },
            {
                name: 'manager_rd_years_at_co'
            },
            {
                name: 'manager_rd_sig_other'
            },
            {
                name: 'manager_rd_aniversary'
            },
            {
                name: 'manager_rd_relatives'
            },
            {
                name: 'manager_rd_dob'
            },
            {
                name: 'manager_rd_hobbies'
            },
            {
                name: 'manager_rd_car_of_choice'
            },
            {
                name: 'manager_rd_alt_phone'
            },
            {
                name: 'manager_rd_alt_email'
            },
            {
                name: 'manager_rd_website'
            },
            {
                name: 'manager_recent_activity'
            },
            {
                name: 'manager_rd_childs'
            },
            {
                name: 'manager_rd_partner'
            },
            {
                name: 'manager_follow_ups'
            },
            {
                name: 'manager_dos_and_donts'
            },
            {
                name: 'manager_blue_note'
            },
            {
                name: 'reps_bluebook_teamusers'
            },
            {
                name: 'vendor_monthly_subscription'
            },
            {
                name: 'vendor_note'
            },
            {
                name: 'vendor_inactive_reason'
            },
            {
                name: 'vendor_created_in_past'
            },
            {
                name: 'vendor_modified_in_past'
            },
            {
                name: 'crms'
            },
            {
                name: 'photos'
            },
            {
                name: 'notes'
            },
            {
                name: 'id'
            },
            {
                name: 'vendor_in_store_retailers'
            },
            {
                name: 'vendor_online_retailers'
            },
            {
                name: 'attachments'
            },
            {
                name: 'vendor_performance'
            },
            {
                name: 'user_since'
            },
            {
                name: 'last_login'
            },
            {
                name: 'last_export'
            },
            {
                name: 'order_no'
            },
            {
                name: 'reseller'
            },
            {
                name: 'dos_and_donts'
            },
            {
                name: 'follow_ups'
            },
            {
                name: 'blue_note'
            },
            {
                convert: function(v, rec) {
                    try{

                        //   console.error(v);
                        //    console.error(rec);

                        // var value = rec.get('SKU');
                        //  console.error(value);
                        if( parseInt(v) > 0 ||  parseInt(v) == 0 || parseInt(v) < 0)
                        {
                            //        console.log("RETRUNINIG V" ,v);
                            return v;
                        }
                        //    console.error("RETRUNING ZERO");
                        rec.set({'design':0});
                        return 0;
                    }catch(e){

                        //    console.error('CATCH THRWON');
                        rec.set({'design':0});
                        return 0;
                    }
                },
                defaultValue: 0,
                name: 'design',
                sortType: 'asInt',
                type: 'int'
            },
            {
                convert: function(v, rec) {
                    try{

                        //    console.error(v);
                        ///    console.error(rec);

                        // var value = rec.get('SKU');
                        //  console.error(value);
                        if( parseInt(v) > 0 ||  parseInt(v) == 0 || parseInt(v) < 0)
                        {
                            //        console.log("RETRUNINIG V" ,v);
                            return v;
                        }
                        //    console.error("RETRUNING ZERO");
                        rec.set({'SKU':0});
                        return 0;
                    }catch(e){

                        //    console.error('CATCH THRWON');
                        rec.set({'SKU':0});
                        return 0;
                    }
                },
                allowNull: false,
                defaultValue: 0,
                name: 'SKU',
                sortType: 'asInt',
                type: 'int'
            },
            {
                convert: function(v, rec) {
                    try{

                        //     console.error(v);
                        //     console.error(rec);

                        // var value = rec.get('SKU');
                        //  console.error(value);
                        if( parseInt(v) > 0 ||  parseInt(v) == 0 || parseInt(v) < 0)
                        {
                            //        console.log("RETRUNINIG V" ,v);
                            return v;
                        }
                        //    console.error("RETRUNING ZERO");
                        rec.set({'no_of_rugs_images':0});
                        return 0;
                    }catch(e){

                        //    console.error('CATCH THRWON');
                        rec.set({'no_of_rugs_images':0});
                        return 0;
                    }
                },
                defaultValue: 0,
                name: 'no_of_rugs_images',
                sortType: 'asInt',
                type: 'int'
            },
            {
                convert: function(v, rec) {
                    try{

                        //    console.error(v);
                        //    console.error(rec);

                        // var value = rec.get('SKU');
                        //  console.error(value);
                        if( parseInt(v) > 0 ||  parseInt(v) == 0 || parseInt(v) < 0)
                        {
                            //        console.log("RETRUNINIG V" ,v);
                            return v;
                        }
                        //    console.error("RETRUNING ZERO");
                        rec.set({'no_of_additional_images':0});
                        return 0;
                    }catch(e){

                        //    console.error('CATCH THRWON');
                        rec.set({'no_of_additional_images':0});
                        return 0;
                    }
                },
                defaultValue: 0,
                name: 'no_of_additional_images',
                sortType: 'asInt',
                type: 'int'
            },
            {
                convert: function(v, rec) {
                    try{

                        //    console.error(v);
                        //    console.error(rec);

                        // var value = rec.get('SKU');
                        //  console.error(value);
                        if( parseInt(v) > 0 ||  parseInt(v) == 0 || parseInt(v) < 0)
                        {
                            //        console.log("RETRUNINIG V" ,v);
                            return v;
                        }
                        //    console.error("RETRUNING ZERO");
                        rec.set({'collections':0});
                        return 0;
                    }catch(e){

                        //    console.error('CATCH THRWON');
                        rec.set({'collections':0});
                        return 0;
                    }
                },
                defaultValue: 0,
                name: 'collections',
                sortType: 'asInt',
                type: 'int'
            },
            {
                name: 'manager_position'
            },
            {
                name: 'company_contacts'
            },
            {
                name: 'manager_address'
            },
            {
                name: 'manager_city'
            },
            {
                name: 'manager_zip'
            },
            {
                name: 'manager_direct_number'
            },
            {
                name: 'manager_state'
            },
            {
                name: 'manager_phone_ext'
            },
            {
                name: 'manager_direct_number_ext'
            },
            {
                name: 'manager_address_suite'
            },
            {
                name: '_id'
            },
            {
                name: 'retailers'
            },
            {
                name: 'product_price'
            },
            {
                name: 'delete_status'
            },
            {
                name: 'last_data_update',
                sortType: 'asDate'
            },
            {
                name: 'last_inventory_update',
                sortType: 'asDate'
            },
            {
                name: 'account_details'
            },
            {
                name: 'vendor_facebook'
            },
            {
                name: 'vendor_twitter'
            },
            {
                name: 'vendor_linkedin'
            },
            {
                name: 'vendor_resources'
            },
            {
                name: 'created_by'
            },
            {
                name: 'no_of_images',
                sortType: 'asInt'
            },
            {
                name: 'ecom_std'
            },
            {
                name: 'ecom_promo'
            },
            {
                name: 'ecom_std_addl'
            },
            {
                name: 'ecom_promo_addl'
            },
            {
                name: 'dl_std'
            },
            {
                name: 'dl_promo'
            },
            {
                name: 'dl_std_addl'
            },
            {
                name: 'dl_promo_addl'
            },
            {
                name: 'retailers_ecommerce'
            },
            {
                name: 'prevent_be_vip'
            },
            {
                name: 'vip_program_info'
            },
            {
                name: 'promo_code_info'
            },
            {
                name: 'is_promo_code_active'
            },
            {
                name: 'prevent_be_ecommerceVendor'
            },
            {
                name: 'retailers_authorized'
            },
            {
                defaultValue: 0,
                name: 'totalVIPActiveVendor',
                type: 'int'
            },
            {
                defaultValue: 0,
                name: 'totalVIPProspectRetailer',
                type: 'int'
            }
        ],
        validations: [
            {
                type: 'email',
                field: 'vendor_email'
            }
        ]
    }
});