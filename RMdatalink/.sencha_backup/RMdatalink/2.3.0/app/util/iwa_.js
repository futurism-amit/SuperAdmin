 Ext.define('RMdatalink.util.iwa', {
    extend: 'Ext.Component',
    config: {
        timeCreated: new Date(),
        timeUpdated: null
    },
    requires:['RMdatalink.util.SocketIO'],

    constructor: function()
    {
        this.callParent(arguments);
        console.log('[* RMdatalink *] constructor: ' + this.$className);
    },

    rdl: {
        collections: {},

        getCN: function(store)
        {
            return RMdatalink.iwa.rdl.collections[store.getStoreId()];
        },

        addToStore: function(record, store, succescall, errorcall, cb)
        {
            console.log('$$$ add call for [%s]: %O', store.getStoreId(), arguments);

            RMdatalink.iwa.rdl.doAddUpdateStore(true, store, record, succescall, errorcall, cb);
        },

        updateStore: function(store, record, newIndex, oldIndex, modifiedFieldNames, modifiedValues, eOpts, cb)
        {
            RMdatalink.iwa.rdl.doAddUpdateStore(false, store, record, cb, function(res)
            {
                console.log('error updating store [%s]: %O', store.getStoreId(), res);
            });
        },

        removeFromStore: function(store, records, indices, eOpts, cb)
        {
            var pr = {};

            console.log('$$$ removing for [%s] (NOT IMPLEMENTED!!!): %O', store.getStoreId(), arguments);

            cb({});
        },

        doAddUpdateStore: function(isAdd, store, record, cbOk, cbErr)
        {
            var pr = {};

            pr.cn = RMdatalink.iwa.rdl.getCN(store);
            pr.flt = (isAdd) ? { ts: (new Date()).getTime() } : { _id: record.raw._id };
            pr.isAdd = isAdd;
            pr.upd = { $set: {}};
            pr.upd.$set = (isAdd) ? record : record.data;

            RMdatalink.iwa.sct.evalremote('add_update_store.js', pr, function(res)
            {
                if (!res.error)
                {
                    console.log('$$$ add/update call for [%s]: %O', RMdatalink.iwa.rdl.getCN(store), res);

                    cbOk(res);
                }
                else
                {
                    cbErr(res);
                }
            });
        },

        loadStorePaged: function(scope, pageNo, pageSize, storeName, rootProperty, cn, callBack)
        {
            var pr = {};
            pr.cn = cn;
            pr.pn = parseInt(pageNo) - 1;
            pr.ps = pageSize;

            console.log(pr);

            RMdatalink.iwa.sct.evalremote('load_store.js', pr, function(res)
            {
                var dt = {};

                console.log('>>> {%s] records for store [%s]: %O', res.length, storeName, res);

                dt[rootProperty] = res;

                RMdatalink.util.DataManager.loadDataInStore(
                    {
                        storeName: storeName,
                        proxy: {
                            //type: 'ajax',
                            //url: 'app/data/MasterRetailerRecords.json',

                            type: 'memory',
                            data: dt,
                            reader: {
                                type: 'json',
                                rootProperty: rootProperty
                            }
                        },

                        successCallback: function(store)
                        {
                            var sid = store.getStoreId();

                            RMdatalink.iwa.rdl.collections[sid] = cn;

                            //RMdatalink.util.globalMethods.fillDataFromMasterStore.call(this, arguments);

                            callBack();
                        },

                        errorCallback: function() {
                            console.log("Exception occured. data not loaded");
                        },

                        scope: scope
                    }
                );
            });
        }
    },

    ws: function(cb)
    {
        var _this = this;
        var wshost;
        var wsport;
        var url;

        if (true)
        {
            wshost = '50.112.98.174';
            wsport = 8484;
        }
        else
        {
            if (document.location.hostname == 'localhost')
            {
                wshost = 'localhost';
                wsport = 8484;
            }
            else
            {
                wshost = '50.112.98.174';
                wsport = 8484;
            }
        }

        this.nodeUrl = 'http://' + wshost + ':' + wsport;
        url = "Socket.IO.js" ;
        //url = 'http://' + wshost + ':' + wsport + '/socket.io/socket.io.js';

        console.log('ws url: ' + url);

        Ext.Loader.loadScriptFile(url, function()
        {
        //   var sct = RMdatalink.util.SocketIO.create({    
          var sct = Ext.create('RMdatalink.util.SocketIO', {   
                host: wshost,
                port: wsport
            });

            _this.sct.socket = sct;

            cb(sct);
        })
    },

    sct:
    {
        on: function(evt, cb)
        {
            RMdatalink.iwa.sct.socket.on(evt, cb);
        },

        evalremote: function(name, params, cbk)
        {
            data = params;
            data.__name = name;

            RMdatalink.iwa.sct.socket.emit('remote', data, function(res)
            {
                if (cbk)
                {
                    cbk(res);
                }
            });
        }
    },

    fire: function(evt, a1, a2, a3, a4, a5, a6, a7)
    {
        Ext.Viewport.fireEvent(evt, a1, a2, a3, a4, a5, a6, a7);
    },

    on: function(evt, cb, ctx)
    {
        if (!this._ons)
        {
            this._ons = {};
        }

        if (this._ons[evt])
        {
            Ext.Viewport.un(evt, this._ons[evt]);
        }

        this._ons[evt] = cb;

        Ext.Viewport.on(evt, cb);
    },

    un: function(evt)
    {
        if (!this._ons)
        {
            this._ons = {};
        }

        if (this._ons[evt])
        {
            Ext.Viewport.un(evt, this._ons[evt]);
        }
    },

    f: function()
    {
        return Ext.String.format.apply(this, arguments);
    }
});
