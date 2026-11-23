export type ScreenCategory =
  | 'Product Detail'
  | 'Product Archive'
  | 'Shopping Cart'
  | 'Mini-Cart Drawer';

export type ScreenStyle =
  | 'Minimal / Professional'
  | 'Bold / Colourful'
  | 'Dark'
  | 'Luxury-Editorial';

export type ScreenTopology =
  | 'Split-Pane'
  | 'Single Column'
  | 'Drawer';

export interface ScreenMeta {
  id: `Shop${number}`;
  number: number;
  title: string;
  brand: string;
  category: ScreenCategory;
  style: ScreenStyle;
  topology: ScreenTopology;
  summary: string;
}

export interface LineItemCalc {
  price: number;
  quantity: number;
}

export interface PromoRule {
  code: string;
  percentOff: number;
}

const PROMO_RULES: PromoRule[] = [
  { code: 'SAVE10', percentOff: 0.1 },
  { code: 'WELCOME15', percentOff: 0.15 },
  { code: 'VELO15', percentOff: 0.15 },
  { code: 'MOD20', percentOff: 0.2 },
  { code: 'ATELIER10', percentOff: 0.1 },
];

export function calculateSubtotal(items: LineItemCalc[]): number {
  return items.reduce((sum, item) => sum + Math.max(0, item.price) * Math.max(0, item.quantity), 0);
}

export function evaluatePromoCode(code: string, subtotal: number): { valid: boolean; discount: number; rate: number } {
  const normalized = code.trim().toUpperCase();
  const match = PROMO_RULES.find((rule) => rule.code === normalized);
  if (!match || subtotal <= 0) {
    return { valid: false, discount: 0, rate: 0 };
  }
  return {
    valid: true,
    discount: Number((subtotal * match.percentOff).toFixed(2)),
    rate: match.percentOff,
  };
}

export function calculateFreeShippingProgress(subtotal: number, threshold: number): {
  remaining: number;
  percent: number;
  unlocked: boolean;
} {
  if (threshold <= 0) {
    return { remaining: 0, percent: 100, unlocked: true };
  }
  const safeSubtotal = Math.max(0, subtotal);
  const remaining = Math.max(0, Number((threshold - safeSubtotal).toFixed(2)));
  const percent = Math.min(100, Math.round((safeSubtotal / threshold) * 100));
  return {
    remaining,
    percent,
    unlocked: safeSubtotal >= threshold,
  };
}

export function paginateItems<T>(items: T[], page: number, pageSize: number): {
  pageItems: T[];
  totalPages: number;
  currentPage: number;
} {
  const safeSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(items.length / safeSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * safeSize;
  return {
    pageItems: items.slice(start, start + safeSize),
    totalPages,
    currentPage,
  };
}

export function filterScreens(
  screens: ScreenMeta[],
  category: ScreenCategory | 'All',
  style: ScreenStyle | 'All'
): ScreenMeta[] {
  return screens.filter((screen) => {
    const matchesCat = category === 'All' || screen.category === category;
    const matchesStyle = style === 'All' || screen.style === style;
    return matchesCat && matchesStyle;
  });
}

export function resolveScreenFromSearch(search: string, screens: ScreenMeta[]): `Shop${number}` {
  const params = new URLSearchParams(search);
  const requested = params.get('screen');
  if (requested) {
    const found = screens.find((s) => s.id.toLowerCase() === requested.toLowerCase());
    if (found) return found.id;
  }
  return 'Shop1';
}
