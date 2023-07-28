"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVariant = exports.ITEM_NAME_QUALITIES = exports.ItemQuality = exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType["Axe"] = "Axe";
    ItemType["Axe2H"] = "Axe2H";
    ItemType["Bow"] = "Bow";
    ItemType["Crossbow"] = "Crossbow";
    ItemType["Crossbow2H"] = "Crossbow2H";
    ItemType["Dagger"] = "Dagger";
    ItemType["Focus"] = "Focus";
    ItemType["Mace"] = "Mace";
    ItemType["Mace2H"] = "Mace2H";
    ItemType["Scythe"] = "Scythe";
    ItemType["Scythe2H"] = "Scythe2H";
    ItemType["Staff"] = "Staff";
    ItemType["Sword"] = "Sword";
    ItemType["Sword2H"] = "Sword2H";
    ItemType["Polearm"] = "Polearm";
    ItemType["Wand"] = "Wand";
    ItemType["Amulet"] = "Amulet";
    ItemType["Boots"] = "Boots";
    ItemType["ChestArmor"] = "ChestArmor";
    ItemType["Gloves"] = "Gloves";
    ItemType["Helm"] = "Helm";
    ItemType["Legs"] = "Legs";
    ItemType["Ring"] = "Ring";
    ItemType["Shield"] = "Shield";
    // Gem = 'Gem',
    // Elixir = 'Elixir',
})(ItemType || (exports.ItemType = ItemType = {}));
var ItemQuality;
(function (ItemQuality) {
    ItemQuality["Common"] = "Normal";
    ItemQuality["Magic"] = "Magic";
    ItemQuality["Rare"] = "Rare";
    ItemQuality["Legendary"] = "Legendary";
    // Set = 'Set',
    ItemQuality["Unique"] = "Unique";
    // Artifact = 'Artifact',
    // Cosmetic = 'Cosmetic',
})(ItemQuality || (exports.ItemQuality = ItemQuality = {}));
exports.ITEM_NAME_QUALITIES = [
    ItemQuality.Unique,
    // ItemQuality.Set,
];
var ItemVariant;
(function (ItemVariant) {
    ItemVariant["Sacred"] = "Sacred";
    ItemVariant["Ancestral"] = "Ancestral";
})(ItemVariant || (exports.ItemVariant = ItemVariant = {}));
