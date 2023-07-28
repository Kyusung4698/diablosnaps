"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCClient = void 0;
const common_1 = require("@diablosnaps/common");
const transports_1 = require("./transports");
class RPCClient {
    constructor() {
        this._transport = new transports_1.HttpTransport();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._connectPromise) {
                return this._connectPromise;
            }
            this._connectPromise = this._transport.connect();
            try {
                yield this._connectPromise;
            }
            finally {
                this._connectPromise = null;
            }
        });
    }
    static start() {
        if (typeof window === 'undefined') {
            throw new Error('start is only available in the browser');
        }
        window.location.assign('diablosnaps://open');
    }
    static download() {
        if (typeof window === 'undefined') {
            throw new Error('download is only available in the browser');
        }
        window.open('https://diablosnaps.com/', '_blank');
    }
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._transport.send(common_1.RPC.Method.GetInfo);
        });
    }
    getBackpackItems(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._transport.send(common_1.RPC.Method.GetBackpackItems, params);
        });
    }
    getBackpackImage(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._transport.send(common_1.RPC.Method.GetBackpackImage, params);
        });
    }
    getBackpackTags() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._transport.send(common_1.RPC.Method.GetBackpackTags);
        });
    }
}
exports.RPCClient = RPCClient;
