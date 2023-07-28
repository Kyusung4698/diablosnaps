import { RPC } from '@diablosnaps/common';
export declare class RPCClient {
    private _connectPromise;
    private _transport;
    constructor();
    connect(): Promise<void>;
    static start(): void;
    static download(): void;
    getInfo(): Promise<RPC.GetInfoResult>;
    getBackpackItems(params?: RPC.GetBackpackItemsParams): Promise<RPC.GetBackpackItemsResult>;
    getBackpackImage(params: RPC.GetBackpackImageParams): Promise<RPC.GetBackpackImageResult>;
    getBackpackTags(): Promise<RPC.GetBackpackItemsResult>;
}
//# sourceMappingURL=client.d.ts.map