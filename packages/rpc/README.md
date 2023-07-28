# `@diablosnaps/rpc`

Provides an RPC client to access the app locally (browser/node.js)

## Usage

```ts
import { RPCClient, TransportError, TransportErrorCode } from '@diablosnaps/rpc';

const client = new RPCClient();
try {
    await client.connect();
} catch (error) {
    if (error instanceof TransportError && error.code === TransportErrorCode.ConnectionError) {
        // App is either not running or not installed
        // > Show a message to the user
        // Use `RPCClient.start()` or `RPCClient.download()`
    }
}

const info = await client.getInfo();
// => { appVersion: '1.4.0', ... }

const tags = await client.getBackpackTags();
// => [{ id: '0123456789', name: 'Mule#1' }, ...]

const { hits, hasMore } = await client.getBackpackItems({
    page: 1,
    search: 'core',
    // tags: ['0123456789']
});

const image = await client.getBackpackImage({
    id: hits[0].id
});
// { dataURL: '...' }
```

## Example

A live example can be found on the [diablosnaps.com](https://diablosnaps.com/examples/rpc) website.


## Installation

```sh
npm install @diablosnaps/rpc
# or yarn
yarn add @diablosnaps/rpc
```