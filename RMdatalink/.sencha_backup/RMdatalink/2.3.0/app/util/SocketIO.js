Ext.define('RMdatalink.util.SocketIO', {
    constructor: function(config) {

        var me = this;
        me.superclass.constructor.call(me);

        me.self._sockets = me.self._sockets || {};

        var key = config.host + ':' + config.port;
        if (!me.self._sockets[key]) {
            me.self._sockets[key] = me.connect(config);
        }

        me._socket = me.self._sockets[key];
    },

    connect: function(config) {
        return io.connect(config.host, {
            port: config.port,
            path: config.path,
            reconnection: config.reconnection,
            reconnectionAttempts: config.reconnectionAttempts,
            reconnectionDelay: config.reconnectionDelay,
            reconnectionDelayMax: config.reconnectionDelayMax,
            timeout: config.timeout
        });
    },

    on: function() {
        return this._socket.on.apply(this._socket, arguments);
    },

    removeListener: function() {
        return this._socket.removeListener.apply(this._socket, arguments);
    },

    removeAllListener: function() {
        return this._socket.removeAllListener.apply(this._socket, arguments);
    },

    emit: function() {
        return this._socket.emit.apply(this._socket, arguments);
    }
});
