export declare enum TransportErrorCode {
    ConnectionError = "ConnectionError",
    InternalError = "InternalError"
}
export declare class TransportError extends Error {
    code: TransportErrorCode;
    constructor(message: string, code: TransportErrorCode);
}
//# sourceMappingURL=errors.d.ts.map