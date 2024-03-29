import { Game } from '@diablosnaps/common';

export const VERSION = '1.3.1.49495';

export async function loadAffixes() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await import('./data/affixes.json') as any;
    return (typeof data.default === 'object' ? data.default : data) as Game.Affixes;
}

export async function loadItems() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await import('./data/items.json') as any;
    return (typeof data.default === 'object' ? data.default : data) as Game.Items;
}

export async function loadTranslations() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = await import('./data/translations.json') as any;
    return (typeof data.default === 'object' ? data.default : data) as Game.Translations;
}
