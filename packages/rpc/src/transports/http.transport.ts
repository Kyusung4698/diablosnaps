import { RPC } from '@diablosnaps/common';
import { TransportError, TransportErrorCode } from '../errors';
import { Transport } from './transport';

export class HttpTransport implements Transport {
    private tries = 0;
    private port = -1;

    public static MIN_PORT = 6490;
    public static MAX_PORT = 6499;

    public async connect(

    ): Promise<void> {
        const port = HttpTransport.MIN_PORT + (this.tries % 10);
        try {
            const controller = new AbortController();
            const response$ = fetch(`http://localhost:${port}/connect`, {
                signal: controller.signal,
            });
            const timeout = setTimeout(() => controller.abort(), 250);
            const response = await response$;
            clearTimeout(timeout);
            if (response.ok) {
                this.tries = 0;
                this.port = port;
                return;
            }
        } catch {
            if (++this.tries >= 20) {
                this.tries = 0;
                throw new TransportError('Could not connect to RPC server.', TransportErrorCode.ConnectionError);
            }
            await this.connect();
        }
    }

    public async send<TResult, TParams>(
        method: RPC.Method,
        params?: TParams
    ): Promise<TResult> {
        if (this.port === -1) {
            throw new TransportError('Not connected to RPC server.', TransportErrorCode.ConnectionError);
        }
        try {
            const response = await fetch(`http://localhost:${this.port}/rpc`, {
                method: 'POST',
                body: JSON.stringify({
                    method,
                    params,
                }),
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            // handle disconnect error
            // this.port = -1;
            console.warn('Could not send RPC request.', error);
            throw new TransportError('Could not send RPC request.', TransportErrorCode.InternalError);
        }
    }
}