import { Class, Language, Translations } from '../types/index.js';

export function getCharacterClassText(
    characterClass: Class,
    language: Language,
    translations: Translations,
    gender: 'Male' | 'Female' = 'Male'
): string {
    return translations[language][`GeneralPlayerClass${characterClass}${gender}`];
}