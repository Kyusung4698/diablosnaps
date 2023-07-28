var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const VERSION = '1.1.0.43333';
export function loadAffixes() {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = yield import('./data/affixes.json');
        return (typeof data.default === 'object' ? data.default : data);
    });
}
export function loadItems() {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = yield import('./data/items.json');
        return (typeof data.default === 'object' ? data.default : data);
    });
}
export function loadTranslations() {
    return __awaiter(this, void 0, void 0, function* () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = yield import('./data/translations.json');
        return (typeof data.default === 'object' ? data.default : data);
    });
}
