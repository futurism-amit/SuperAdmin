Ext.define('RMdatalink.util.NetworkManager', {
    singleton: true,
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    },
    config: {
            timeOut:30000
    },
            
    ///Request to server using AJAX request        
    requestToserver: function(url, parms, successCallBack, errorCallBack) {
        Ext.Ajax.request({
            url: url,
            timeout: this.config.timeOut,
            responseType: "JSON",
            params: parms,
            success: successCallBack,
            failure: errorCallBack
        });
    },
            
       ///Request to server using Websocket request         
    requestToserverUsingWebSocket: function(wsUri, parms, successCallBack, errorCallBack) {

        function onOpen(evt) {
            writeToScreen("CONNECTED");
            doSend("WebSocket rocks");
        }
        function onClose(evt) {
            writeToScreen("DISCONNECTED");
        }
        function onMessage(evt) {
            writeToScreen(evt.data);
            successCallBack(evt);
            websocket.close();
        }
        function onError(evt) {
            errorCallBack(evt);
            writeToScreen('ERROR: ' + evt.data);
        }
        function doSend(message) {
            writeToScreen("SENT: " + message);
            websocket.send(message);
        }
        function writeToScreen(message) {
            console.log(message);
        }


        var websocket = new WebSocket(wsUri);
        websocket.onopen = function(evt) {
            onOpen(evt);
        };
        websocket.onclose = function(evt) {
            onClose(evt);
        };
        websocket.onmessage = function(evt) {
            onMessage(evt);
        };
        websocket.onerror = function(evt) {
            onError(evt);
        };

        doSend(parms);


    }
 
});