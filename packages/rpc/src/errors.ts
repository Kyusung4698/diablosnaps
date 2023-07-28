export enum TransportErrorCode {
    ConnectionError = 'ConnectionError',
    InternalError = 'InternalError',
}

export class TransportError extends Error {
    constructor(
        message: string,
        public code: TransportErrorCode,
    ) {
        super(message);
        this.name = 'TransportError';
    }
}