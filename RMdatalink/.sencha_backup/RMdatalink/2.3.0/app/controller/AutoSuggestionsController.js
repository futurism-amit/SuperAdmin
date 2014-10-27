/*
 * File: app/controller/AutoSuggestionsController.js
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

Ext.define('RMdatalink.controller.AutoSuggestionsController', {
    extend: 'Ext.app.Controller',

    config: {
        activeTextField: {
            
        },
        autoSuggetionView: {
            
        },

        control: {
            "list[itemId=autoSuggestionsList]": {
                select: 'onAutoSuggestionsListSelect'
            },
            "textfield[action=autoSuggestionField]": {
                keyup: 'onAutoSuggestionTextfieldKeyup',
                clearicontap: 'onAutoSuggestionTextfieldClearicontap'
            }
        }
    },

    onAutoSuggestionsListSelect: function(dataview, record, eOpts) {
        console.log(record);

        this.config.activeTextField.setValue(record.data.text);

        this.config.autoSuggetionView.hide();

        dataview.deselect(record) ;
    },

    onAutoSuggestionTextfieldKeyup: function(textfield, e, eOpts) {
        console.log(textfield.getValue());


        this.createAutoSuggetionView();

        this.config.activeTextField = textfield ;




        this.config.autoSuggetionView.showBy(textfield) ;

        this.filterAutoSuggestionList(textfield);
    },

    onAutoSuggestionTextfieldClearicontap: function(textfield, e, eOpts) {
        if(this.config.autoSuggetionView)
        {
            this.config.autoSuggetionView.hide();


            Ext.getStore('AutoCompleteStore').clearFilter();
        }
    },

    createAutoSuggetionView: function() {
        if(Ext.getCmp("AutoSuggetionsDataView"))
        {

         return ;

        }else{

          this.config.autoSuggetionView  = Ext.widget('AutoSuggetionsDataView');
        }

    },

    filterAutoSuggestionList: function(textfield) {
        var listToSearch = Ext.ComponentQuery.query('#autoSuggestionsList')[0];
        var store = null;

        if(!listToSearch)
            return;
        store = listToSearch.getStore();
        if(!store)
            return;
        store.clearFilter();

        var value = textfield.getValue();
        var keysToSearch = store.getModel().getFields().keys;

        if (!value) {
            store.filterBy(function() {
                return true;
            });
        }
        else {
            var searches = value.split(' '),
                regexps = [],
                i;

            for (i = 0; i < searches.length; i++) {
                if (searches[i]) {
                   regexps.push(new RegExp(searches[i], 'i'));
                }
            }

            store.filterBy(function(record) {
                var matched = [];
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i];
                    var recordAllowed = false;
                    for(var j=0 ; j<keysToSearch.length ; j++) {
                        if(record.get(keysToSearch[j]) === null || record.get(keysToSearch[j]) === undefined )
                            continue;
                        if(record.get(keysToSearch[j]).toString().match(search) &&
                           keysToSearch[j]!=="id" && !recordAllowed)
                            recordAllowed = true;
                    }
                    matched.push(recordAllowed);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    }

});