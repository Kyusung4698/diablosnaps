import { Language, ServerType, Translations } from '../types/index.js';

export function getServerTypeText(
    serverType: ServerType,
    language: Language,
    translations: Translations
): string {
    return translations[language][`ServerType${serverType}`];
}