export var TransportErrorCode;
(function (TransportErrorCode) {
    TransportErrorCode["ConnectionError"] = "ConnectionError";
    TransportErrorCode["InternalError"] = "InternalError";
})(TransportErrorCode || (TransportErrorCode = {}));
export class TransportError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'TransportError';
    }
}
