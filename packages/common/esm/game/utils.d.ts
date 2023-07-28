import { AffixId, AffixType, Affixes, ItemQuality, ItemType, ItemVariant, Items, Language, Translations } from './types';
export declare function getItemName(id: string, language: Language, items: Items): string;
export declare function getItemTypeLine(variant: ItemVariant, quality: ItemQuality, type: ItemType, language: Language, translations: Translations): string;
export declare function getItemVariantText(variant: ItemVariant, language: Language, translations: Translations): string;
export declare function getItemQualityText(quality: ItemQuality, language: Language, translations: Translations): string;
export declare function getItemTypeText(type: ItemType, language: Language, translations: Translations): string;
export declare function getItemAffixText(id: AffixId, language: Language, type: AffixType, power: number, value: number, affixes: Affixes): string;
//# sourceMappingURL=utils.d.ts.map