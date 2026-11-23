export type ComparisonStyle = 'Minimal' | 'Professional' | 'Dark' | 'Editorial';

export type ComparisonCategory =
  | 'Feature Matrix'
  | 'Before / After'
  | 'Competitor vs Us'
  | 'Spec Sheet'
  | 'Pricing + Features'
  | 'Mobile Cards'
  | 'Toggleable View'
  | 'Pros & Cons'
  | 'Version Comparison';

export interface ComparisonCatalogEntry {
  id: string;
  number: number;
  name: string;
  title: string;
  description: string;
  category: ComparisonCategory;
  style: ComparisonStyle;
  columnCount: 2 | 3 | 4;
  usesTable: boolean;
}

export interface ComparisonRowBase {
  category?: string;
  values: ReadonlyArray<string | boolean>;
}

/**
 * Calculates dynamic pricing for seat-based or flat-rate plans with optional annual discount.
 */
export function calculateTierPrice(
  baseMonthlyPerSeat: number,
  seats: number,
  billingCycle: 'monthly' | 'annual',
  annualDiscountRate = 0.2,
  includedSeats = 0
): number {
  const billableSeats = Math.max(1, seats - includedSeats);
  const rawMonthly = baseMonthlyPerSeat * billableSeats;
  if (billingCycle === 'annual') {
    return Math.round(rawMonthly * (1 - annualDiscountRate));
  }
  return Math.round(rawMonthly);
}

/**
 * Filters comparison rows by category and/or whether values differ across columns.
 */
export function filterComparisonRows<T extends ComparisonRowBase>(
  rows: ReadonlyArray<T>,
  options: { differencesOnly?: boolean; category?: string }
): T[] {
  const { differencesOnly = false, category = 'All' } = options;
  return rows.filter((row) => {
    if (category !== 'All' && row.category && row.category !== category) {
      return false;
    }
    if (differencesOnly && row.values.length > 1) {
      const first = row.values[0];
      const allEqual = row.values.every((val) => val === first);
      if (allEqual) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Computes percentage improvement/change from beforeVal to afterVal.
 * Returns formatted signed string such as "-64%" or "+180%".
 */
export function computeDeltaPercentage(beforeVal: number, afterVal: number): string {
  if (beforeVal === 0) {
    return afterVal === 0 ? '0%' : '+100%';
  }
  const pct = Math.round(((afterVal - beforeVal) / Math.abs(beforeVal)) * 100);
  if (pct > 0) return `+${pct}%`;
  return `${pct}%`;
}

/**
 * Filters the catalog of 20 comparison components by style, category, column count, and search query.
 */
export function filterCatalog<T extends ComparisonCatalogEntry>(
  entries: ReadonlyArray<T>,
  filters: {
    style?: ComparisonStyle | 'All';
    category?: ComparisonCategory | 'All';
    columnCount?: 2 | 3 | 4 | 'All';
    query?: string;
  }
): T[] {
  const {
    style = 'All',
    category = 'All',
    columnCount = 'All',
    query = '',
  } = filters;
  const normalizedQuery = query.trim().toLowerCase();

  return entries.filter((item) => {
    if (style !== 'All' && item.style !== style) return false;
    if (category !== 'All' && item.category !== category) return false;
    if (columnCount !== 'All' && item.columnCount !== columnCount) return false;
    if (normalizedQuery) {
      const haystack = `${item.name} ${item.title} ${item.description} ${item.category} ${item.style}`.toLowerCase();
      if (!haystack.includes(normalizedQuery)) return false;
    }
    return true;
  });
}
