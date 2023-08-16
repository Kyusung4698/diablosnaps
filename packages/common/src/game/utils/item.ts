import {
    Affixes,
    AffixId,
    AffixType,
    ItemQuality,
    Items,
    ItemSocketType,
    ItemType,
    ItemVariant,
    Language,
    Translations,
} from './../types/index.js';

export function getItemName(
    id: string,
    language: Language,
    items: Items,
): string {
    return items[language][id];
}

export function getItemTypeLine(
    itemVariant: ItemVariant,
    itemQuality: ItemQuality,
    itemType: ItemType,
    language: Language,
    translations: Translations,
): string {
    let format = '{VARIANT} {QUALITY} {TYPE}';
    switch (language) {
        case Language.German:
        case Language.Polish:
        case Language.Russian:
        case Language.Turkish:
            format = '{VARIANT} {TYPE}';
            break;
        case Language.Mexican:
        case Language.Italian:
        case Language.French:
            format = '{TYPE} {VARIANT}';
            break;
        case Language.Spanish:
        case Language.Portuguese:
            format = '{TYPE} {QUALITY}';
            break;
        case Language.Japanese:
        case Language.SimplifiedChinese:
        case Language.TraditionalChinese:
            format = '{VARIANT}{QUALITY}{TYPE}';
            break;
    }

    return replaceVariables(format, {
        variant: getItemVariantText(itemVariant, language, translations) || '',
        quality: getItemQualityText(itemQuality, language, translations) || '',
        type: getItemTypeText(itemType, language, translations) || '',
    }).trim();
}

export function getItemVariantText(
    itemVariant: ItemVariant,
    language: Language,
    translations: Translations,
): string {
    return translations[language][`ItemQuality${itemVariant}`];
}

export function getItemQualityText(
    itemQuality: ItemQuality,
    language: Language,
    translations: Translations,
): string {
    return translations[language][`ItemQuality${itemQuality}`];
}

export function getItemTypeText(
    itemType: ItemType,
    language: Language,
    translations: Translations,
): string {
    return translations[language][`ItemType${itemType}`];
}

export function getItemSocketTypeText(
    itemSocketType: ItemSocketType,
    language: Language,
    translations: Translations,
): string {
    return translations[language][`ItemSocketType${itemSocketType}`];
}

export function getItemAffixName(
    affixType: AffixType,
    affixId: AffixId,
    language: Language,
    affixes: Affixes,
): string {
    const definition = affixes.definitions[affixType][affixId];
    if (!definition) {
        return '';
    }
    const name = affixes.names[language][definition.name];
    return name;
}

export function getItemAffixDescription(
    affixType: AffixType,
    affixId: AffixId,
    language: Language,
    affixes: Affixes,
    value = '#',
): string {
    const definition = affixes.definitions[affixType][affixId];
    if (!definition) {
        return '';
    }
    const description = definition.attributes
        .map(attribute => {
            const attributeDescriptionId = `${attribute.id}${isNaN(attribute.param) ? '' : `#${attribute.param}`}`;
            const attributeDescription = affixes.descriptions[language][attributeDescriptionId];
            return executeFormulas(
                replaceVariables(attributeDescription, { value }),
                value,
            );
        })
        .join('\n');
    return description;
}

function replaceVariables(
    template: string,
    variables: Record<string, string>,
) {
    return template
        .replace(/\{([^}]+)\}/g, (_, key: string) => {
            const value = variables[key.toLocaleLowerCase()];
            return value === undefined ? `{${key}}` : `${value}`;
        });
}

function roundValue(
    value: number,
    decimals: number,
) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}

function formatValue(
    value: number | string,
    format: string,
) {
    switch (format) {
        case '~':
            return `${typeof value === 'string' ? value : Math.round(value)}`;
        case '~%':
            return `${typeof value === 'string' ? value : Math.round(value)}%`;

        case '1':
            return `${typeof value === 'string' ? value : value.toFixed(1)}`;
        case '1%x':
            return `${typeof value === 'string' ? value : value.toFixed(1)}%[x]`;
        case '1%':
        case '%1':
            return `${typeof value === 'string' ? value : value.toFixed(1)}%`;
        case '1%+':
            return `+${typeof value === 'string' ? value : value.toFixed(1)}%`;

        case '2':
            return `${typeof value === 'string' ? value : value.toFixed(2)}`;
        case '2%x':
            return `${typeof value === 'string' ? value : value.toFixed(2)}%[x]`;
        case '2%':
        case '%2':
            return `${typeof value === 'string' ? value : value.toFixed(2)}%`;
        case '2%+':
            return `+${typeof value === 'string' ? value : value.toFixed(2)}%`;

        case '%x':
            return `${typeof value === 'string' ? value : roundValue(value, 3)}%[x]`;
        case '%':
            return `${typeof value === 'string' ? value : roundValue(value, 3)}%`;
        case '+%':
        case '%+':
            return `+${typeof value === 'string' ? value : roundValue(value, 3)}%`;
        case '':
            return `${typeof value === 'string' ? value : roundValue(value, 3)}`;
        default:
            console.warn('Unknown format', format);
            return `${typeof value === 'string' ? value : roundValue(value, 3)}`;
    }
}

function executeFormulas(
    template: string,
    value: string,
) {
    return template
        .replace(/\[([^\]]+)\]/g, (_, formula: string) => {
            if (formula === 'x') return '[x]';
            let format = '';
            formula
                .replace(/\}/g, '')
                .replace(/\|([^|]+)\|/g, (_, key) => {
                    format = key;
                    return '';
                });
            return formatValue(value, format);
        });
}
