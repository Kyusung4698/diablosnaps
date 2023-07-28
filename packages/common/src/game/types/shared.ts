export enum Language {
    German = 'deDE',
    English = 'enUS',
    Spanish = 'esES',
    Mexican = 'esMX',
    French = 'frFR',
    Italian = 'itIT',
    Japanese = 'jaJP',
    Korean = 'koKR',
    Polish = 'plPL',
    Portuguese = 'ptBR',
    Russian = 'ruRU',
    Turkish = 'trTR',
    SimplifiedChinese = 'zhCN',
    TraditionalChinese = 'zhTW',
}

export type AffixId = string;
export enum AffixType {
    Basic = 'basic',
    Legendary = 'legendary',
    Unique = 'unique',
}
export type AttributeId = string;

export interface AttributeDefinition {
    id: AttributeId;
    param?: number;
}

export interface AffixDefinition {
    name: string;
    attributes: AttributeDefinition[];
}

export interface AttributeRange {
    minItemPower: number;
    minValue: number;
    maxValue: number;
}

export interface Attribute {
    ranges: AttributeRange[];
}

export interface Affixes {
    definitions: Record<AffixType, Record<AffixId, AffixDefinition>>;
    attributes: Record<AttributeId, Attribute>;
    descriptions: Record<Language, Record<AttributeId, string>>;
}

export type ItemId = string;
export type ItemMap = Record<ItemId, string>;
export type Items = Record<Language, ItemMap>;

export type TranslationId = string;
export type TranslationMap = Record<TranslationId, string>;
export type Translations = Record<Language, TranslationMap>;