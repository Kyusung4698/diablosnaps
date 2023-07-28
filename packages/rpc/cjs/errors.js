"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportError = exports.TransportErrorCode = void 0;
var TransportErrorCode;
(function (TransportErrorCode) {
    TransportErrorCode["ConnectionError"] = "ConnectionError";
    TransportErrorCode["InternalError"] = "InternalError";
})(TransportErrorCode || (exports.TransportErrorCode = TransportErrorCode = {}));
class TransportError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'TransportError';
    }
}
exports.TransportError = TransportError;
