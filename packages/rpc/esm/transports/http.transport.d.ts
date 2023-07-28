import { RPC } from '@diablosnaps/common';
import { Transport } from './transport';
export declare class HttpTransport implements Transport {
    private tries;
    private port;
    static MIN_PORT: number;
    static MAX_PORT: number;
    connect(): Promise<void>;
    send<TResult, TParams>(method: RPC.Method, params?: TParams): Promise<TResult>;
}
//# sourceMappingURL=http.transport.d.ts.map