import { RPC } from '@diablosnaps/common';
import { HttpTransport, Transport } from './transports/index.js';

export class RPCClient {
    private _connectPromise: Promise<void>;
    private _transport: Transport;

    constructor() {
        this._transport = new HttpTransport();
    }

    public async connect(): Promise<void> {
        if (this._connectPromise) {
            return this._connectPromise;
        }
        this._connectPromise = this._transport.connect();
        try {
            await this._connectPromise;
        } finally {
            this._connectPromise = null;
        }
    }

    public static start(): void {
        if (typeof window === 'undefined') {
            throw new Error('start is only available in the browser');
        }
        window.location.assign('diablosnaps://open');
    }

    public static download(): void {
        if (typeof window === 'undefined') {
            throw new Error('download is only available in the browser');
        }
        window.open('https://diablosnaps.com/', '_blank');
    }

    public async getInfo(): Promise<RPC.GetInfoResult> {
        return await this._transport.send(RPC.Method.GetInfo);
    }

    public async getBackpackItems(
        params: RPC.GetBackpackItemsParams = {}
    ): Promise<RPC.GetBackpackItemsResult> {
        return await this._transport.send(RPC.Method.GetBackpackItems, params);
    }

    public async getBackpackImage(
        params: RPC.GetBackpackImageParams
    ): Promise<RPC.GetBackpackImageResult> {
        return await this._transport.send(RPC.Method.GetBackpackImage, params);
    }

    public async getBackpackTags(): Promise<RPC.GetBackpackTagsResult> {
        return await this._transport.send(RPC.Method.GetBackpackTags);
    }
}