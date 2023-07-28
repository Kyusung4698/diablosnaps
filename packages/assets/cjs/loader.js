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
exports.loadTranslations = exports.loadItems = exports.loadAffixes = exports.VERSION = void 0;
exports.VERSION = '1.1.0.43487';
function loadAffixes() {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = yield Promise.resolve().then(() => require('./data/affixes.json'));
        return (typeof data.default === 'object' ? data.default : data);
    });
}
exports.loadAffixes = loadAffixes;
function loadItems() {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = yield Promise.resolve().then(() => require('./data/items.json'));
        return (typeof data.default === 'object' ? data.default : data);
    });
}
exports.loadItems = loadItems;
function loadTranslations() {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = yield Promise.resolve().then(() => require('./data/translations.json'));
        return (typeof data.default === 'object' ? data.default : data);
    });
}
exports.loadTranslations = loadTranslations;
