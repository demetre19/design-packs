import React from 'react';
import { Shop1 } from './Shop1';
import { Shop2 } from './Shop2';
import { Shop3 } from './Shop3';
import { Shop4 } from './Shop4';
import { Shop5 } from './Shop5';
import { Shop6 } from './Shop6';
import { Shop7 } from './Shop7';
import { Shop8 } from './Shop8';
import { Shop9 } from './Shop9';
import { Shop10 } from './Shop10';
import { Shop11 } from './Shop11';
import { Shop12 } from './Shop12';
import { Shop13 } from './Shop13';
import { Shop14 } from './Shop14';
import { Shop15 } from './Shop15';
import { Shop16 } from './Shop16';
import { Shop17 } from './Shop17';
import { Shop18 } from './Shop18';
import { Shop19 } from './Shop19';
import { Shop20 } from './Shop20';

export {
  Shop1,
  Shop2,
  Shop3,
  Shop4,
  Shop5,
  Shop6,
  Shop7,
  Shop8,
  Shop9,
  Shop10,
  Shop11,
  Shop12,
  Shop13,
  Shop14,
  Shop15,
  Shop16,
  Shop17,
  Shop18,
  Shop19,
  Shop20,
};

export type FlowCategory =
  | 'Multi-Step Checkout'
  | 'Single-Page Checkout'
  | 'Shopping Cart'
  | 'Payment Screen'
  | 'Order Confirmation'
  | 'Product Detail'
  | 'Product Archive';

export type VisualStyle =
  | 'Minimal / Professional'
  | 'Light-Warm'
  | 'Dark'
  | 'Bold / Colourful'
  | 'Luxury-Editorial';

export type ScreenTopology = 'Split-Pane' | 'Centered Single Column';

export interface ShopMeta {
  id: string;
  name: string;
  brand: string;
  category: FlowCategory;
  style: VisualStyle;
  topology: ScreenTopology;
  Component: React.ComponentType;
}

export const SHOP_SCREENS: ShopMeta[] = [
  { id: 'Shop1', name: 'Kronos Multi-Step', brand: 'Kronos Atelier', category: 'Multi-Step Checkout', style: 'Minimal / Professional', topology: 'Split-Pane', Component: Shop1 },
  { id: 'Shop2', name: 'Botanica Stepper', brand: 'Terra Botanica', category: 'Multi-Step Checkout', style: 'Light-Warm', topology: 'Centered Single Column', Component: Shop2 },
  { id: 'Shop3', name: 'Kinetic Hardware', brand: 'Kinetic Audio Lab', category: 'Multi-Step Checkout', style: 'Dark', topology: 'Split-Pane', Component: Shop3 },
  { id: 'Shop4', name: 'Volt Sneaker Drop', brand: 'Volt Court', category: 'Multi-Step Checkout', style: 'Bold / Colourful', topology: 'Centered Single Column', Component: Shop4 },
  { id: 'Shop5', name: 'Valmont Atelier', brand: 'Maison Valmont', category: 'Single-Page Checkout', style: 'Luxury-Editorial', topology: 'Split-Pane', Component: Shop5 },
  { id: 'Shop6', name: 'Monograph Express', brand: 'Monograph Supply', category: 'Single-Page Checkout', style: 'Minimal / Professional', topology: 'Centered Single Column', Component: Shop6 },
  { id: 'Shop7', name: 'Solaris Pantry', brand: 'Solaris Provisions', category: 'Single-Page Checkout', style: 'Bold / Colourful', topology: 'Split-Pane', Component: Shop7 },
  { id: 'Shop8', name: 'Kiln Ceramics Bag', brand: 'Kiln & Clay', category: 'Shopping Cart', style: 'Light-Warm', topology: 'Split-Pane', Component: Shop8 },
  { id: 'Shop9', name: 'Obsidian Carry Bag', brand: 'Obsidian Carry', category: 'Shopping Cart', style: 'Dark', topology: 'Centered Single Column', Component: Shop9 },
  { id: 'Shop10', name: 'Véra Empty Bag State', brand: 'Atelier Véra', category: 'Shopping Cart', style: 'Luxury-Editorial', topology: 'Centered Single Column', Component: Shop10 },
  { id: 'Shop11', name: 'Strata Vault Pay', brand: 'Strata Optics', category: 'Payment Screen', style: 'Minimal / Professional', topology: 'Split-Pane', Component: Shop11 },
  { id: 'Shop12', name: 'Chromatic Wallet Pay', brand: 'Chromatic Studio', category: 'Payment Screen', style: 'Bold / Colourful', topology: 'Centered Single Column', Component: Shop12 },
  { id: 'Shop13', name: 'Nocturne Live Card', brand: 'Nocturne Vault', category: 'Payment Screen', style: 'Dark', topology: 'Split-Pane', Component: Shop13 },
  { id: 'Shop14', name: 'Lumière Receipt', brand: 'Maison Lumière', category: 'Order Confirmation', style: 'Luxury-Editorial', topology: 'Centered Single Column', Component: Shop14 },
  { id: 'Shop15', name: 'Nordic Dispatch', brand: 'Nordic Dispatch', category: 'Order Confirmation', style: 'Minimal / Professional', topology: 'Split-Pane', Component: Shop15 },
  { id: 'Shop16', name: 'Volt Airbox Receipt', brand: 'Volt Court', category: 'Order Confirmation', style: 'Bold / Colourful', topology: 'Centered Single Column', Component: Shop16 },
  { id: 'Shop17', name: 'Sorel Clock PDP', brand: 'Sorel Objects', category: 'Product Detail', style: 'Light-Warm', topology: 'Split-Pane', Component: Shop17 },
  { id: 'Shop18', name: 'Vectra Synth PDP', brand: 'Vectra Labs', category: 'Product Detail', style: 'Dark', topology: 'Split-Pane', Component: Shop18 },
  { id: 'Shop19', name: 'Form & Matter Grid', brand: 'Form & Matter', category: 'Product Archive', style: 'Minimal / Professional', topology: 'Split-Pane', Component: Shop19 },
  { id: 'Shop20', name: 'Verrier Catalogue', brand: 'Maison Verrier', category: 'Product Archive', style: 'Luxury-Editorial', topology: 'Split-Pane', Component: Shop20 },
];
