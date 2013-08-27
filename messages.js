function Messages() {
    var self = this;
    self.consoleMessagesEnabled = true;
    self.includeTimestamp = true;
    self.messagePrefix = "";
    /* - Another way to organize supported console elements
    self.supported = {
        "console": hasConsoleSupport(),
        "log": hasConsoleLogSupport(),
        "warn": hasConsoleWarnSupport(),
        "error": hasConsoleErrorSupport()
    };
    */
    self.hasConsoleSupport = hasConsoleSupport();
    self.hasConsoleLogSupport = hasConsoleLogSupport();
    self.hasConsoleWarnSupport = hasConsoleWarnSupport();
    self.hasConsoleErrorSupport = hasConsoleErrorSupport();
    self.hasConsoleInfoSupport = hasConsoleInfoSupport();
    self.log = log;
    self.warn = warn;
    self.error = error;
    self.info = info;

    function hasConsoleSupport() {
        return (typeof console == "object");
    };

    function hasConsoleLogSupport() {
        return (self.hasConsoleSupport && (typeof console.log == "function"));
    };

    function hasConsoleWarnSupport() {
        return (self.hasConsoleSupport && (typeof console.warn == "function"));
    };

    function hasConsoleErrorSupport() {
        return (self.hasConsoleSupport && (typeof console.error == "function"));
    };

    function hasConsoleInfoSupport() {
        return (self.hasConsoleSupport && (typeof console.info == "function"));
    };

    function _getTimestampValue() {
        var _value;

        if (self.includeTimestamp) {
            _value = "| " + new Date().toLocaleTimeString();
        }
        else {
            _value = "";
        }

        return _value;
    };

    function log(message, object) {
        if (self.consoleMessagesEnabled && self.hasConsoleLogSupport) {
            var _msg = message || "",
                _obj = object || null;

            self.messagePrefix = "[DEBUG " + _getTimestampValue() + "] ";
            if (_obj) {
                _obj = JSON.stringify(_obj);
                if (typeof _obj == "object") {
                    console.log(self.messagePrefix + _msg + " : %o", _obj);
                }
                else {
                    console.log(self.messagePrefix + _msg + " : " + _obj);
                }
            }
            else {
                console.log(self.messagePrefix + _msg);
            }
        }
    };

    function warn(message, object) {
        if (self.consoleMessagesEnabled && self.hasConsoleWarnSupport) {
            var _msg = message || "",
                _obj = object || null;

            self.messagePrefix = "[WARN " + _getTimestampValue() + "] ";
            if (_obj) {
                _obj = JSON.stringify(_obj);
                if (typeof _obj == "object") {
                    console.warn(self.messagePrefix + _msg + " : %o", _obj);
                }
                else {
                    console.warn(self.messagePrefix + _msg + " : " + _obj);
                }
            }
            else {
                console.warn(self.messagePrefix + _msg);
            }
        }
    };

    function error(message, object) {
        if (self.consoleMessagesEnabled && self.hasConsoleErrorSupport) {
            var _msg = message || "",
                _obj = object || null;

            self.messagePrefix = "[ERROR " + _getTimestampValue() + "] ";
            if (_obj) {
                _obj = JSON.stringify(_obj);
                if (typeof _obj == "object") {
                    console.error(self.messagePrefix + _msg + " : %o", _obj);
                }
                else {
                    console.error(self.messagePrefix + _msg + " : " + _obj);
                }
            }
            else {
                console.error(self.messagePrefix + _msg);
            }
        }
    };

    function info(message, object) {
        if (self.consoleMessagesEnabled && self.hasConsoleInfoSupport) {
            var _msg = message || "",
                _obj = object || null;

            self.messagePrefix = "[INFO " + _getTimestampValue() + "] ";
            if (_obj) {
                _obj = JSON.stringify(_obj);
                if (typeof _obj == "object") {
                    console.info(self.messagePrefix + _msg + " : %o", _obj);
                }
                else {
                    console.info(self.messagePrefix + _msg + " : " + _obj);
                }
            }
            else {
                console.info(self.messagePrefix + _msg);
            }
        }
    };

};