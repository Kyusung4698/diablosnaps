import { RPC } from '@diablosnaps/common';

export interface Transport {
    connect(): Promise<void>;
    send<TResult, TParams>(method: RPC.Method, params?: TParams): Promise<TResult>;
}