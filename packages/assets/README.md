# `@diablosnaps/assets`

Provides loaders for `affixes`, `items` and `translations` assets. These assets are used to translate item data into human-readable text. 

## Usage

```ts
import { Assets } from '@diablosnaps/assets';
import { Game } from '@diablosnaps/common';

const affixes = await Assets.loadAffixes();
const affixText = Game.getItemAffixText('577013', Game.Language.English, Game.AffixType.Basic, 800, 1, affixes);
// => '+13 Maximum Mana'

const items = await Assets.loadItems();
const name = Game.getItemName('1210590', Game.Language.English, items);
// => '100,000 Steps'

const translations = await Assets.loadTranslations();
const variantText = Game.getItemVariantText(Game.ItemVariant.Ancestral, Game.Language.English, translations);
// => 'Ancestral'
```

## Installation

```sh
npm install @diablosnaps/assets
# or yarn
yarn add @diablosnaps/assets
```