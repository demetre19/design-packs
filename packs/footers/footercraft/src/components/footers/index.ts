import React from 'react';
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer5,
  Footer6,
  Footer7,
  Footer8,
  Footer9,
  Footer10,
} from './FootersBatch1';
import {
  Footer11,
  Footer12,
  Footer13,
  Footer14,
  Footer15,
  Footer16,
  Footer17,
  Footer18,
  Footer19,
  Footer20,
} from './FootersBatch2';
import {
  Footer21,
  Footer22,
  Footer23,
  Footer24,
  Footer25,
  Footer26,
  Footer27,
  Footer28,
  Footer29,
  Footer30,
} from './FootersBatch3';
import {
  Footer31,
  Footer32,
  Footer33,
  Footer34,
  Footer35,
  Footer36,
  Footer37,
  Footer38,
  Footer39,
  Footer40,
} from './FootersBatch4';

import batch1Raw from './FootersBatch1.tsx?raw';
import batch2Raw from './FootersBatch2.tsx?raw';
import batch3Raw from './FootersBatch3.tsx?raw';
import batch4Raw from './FootersBatch4.tsx?raw';
import { extractComponentSource } from '../../utils/sourceExtractor';

export {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer5,
  Footer6,
  Footer7,
  Footer8,
  Footer9,
  Footer10,
  Footer11,
  Footer12,
  Footer13,
  Footer14,
  Footer15,
  Footer16,
  Footer17,
  Footer18,
  Footer19,
  Footer20,
  Footer21,
  Footer22,
  Footer23,
  Footer24,
  Footer25,
  Footer26,
  Footer27,
  Footer28,
  Footer29,
  Footer30,
  Footer31,
  Footer32,
  Footer33,
  Footer34,
  Footer35,
  Footer36,
  Footer37,
  Footer38,
  Footer39,
  Footer40,
};

export const FOOTER_COMPONENTS: Record<number, React.ComponentType> = {
  1: Footer1,
  2: Footer2,
  3: Footer3,
  4: Footer4,
  5: Footer5,
  6: Footer6,
  7: Footer7,
  8: Footer8,
  9: Footer9,
  10: Footer10,
  11: Footer11,
  12: Footer12,
  13: Footer13,
  14: Footer14,
  15: Footer15,
  16: Footer16,
  17: Footer17,
  18: Footer18,
  19: Footer19,
  20: Footer20,
  21: Footer21,
  22: Footer22,
  23: Footer23,
  24: Footer24,
  25: Footer25,
  26: Footer26,
  27: Footer27,
  28: Footer28,
  29: Footer29,
  30: Footer30,
  31: Footer31,
  32: Footer32,
  33: Footer33,
  34: Footer34,
  35: Footer35,
  36: Footer36,
  37: Footer37,
  38: Footer38,
  39: Footer39,
  40: Footer40,
};

export function getFooterSource(id: number): string {
  const name = `Footer${id}`;
  if (id <= 10) return extractComponentSource(batch1Raw, name);
  if (id <= 20) return extractComponentSource(batch2Raw, name);
  if (id <= 30) return extractComponentSource(batch3Raw, name);
  return extractComponentSource(batch4Raw, name);
}
