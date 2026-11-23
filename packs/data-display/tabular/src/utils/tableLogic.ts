export type SortDirection = 'ascending' | 'descending' | 'none';

export interface SortConfig<K extends string = string> {
  key: K;
  direction: SortDirection;
}

/**
 * Cycles sort state for a column: none -> ascending -> descending -> none (or ascending on new key).
 */
export function nextSortConfig<K extends string>(
  current: SortConfig<K>,
  clickedKey: K
): SortConfig<K> {
  if (current.key !== clickedKey) {
    return { key: clickedKey, direction: 'ascending' };
  }
  if (current.direction === 'none') {
    return { key: clickedKey, direction: 'ascending' };
  }
  if (current.direction === 'ascending') {
    return { key: clickedKey, direction: 'descending' };
  }
  return { key: clickedKey, direction: 'none' };
}

/**
 * Deterministically sorts an array of records by key and direction without mutating the input.
 */
export function sortRecords<T, K extends keyof T & string>(
  items: readonly T[],
  config: SortConfig<K>
): T[] {
  if (config.direction === 'none') {
    return [...items];
  }
  const factor = config.direction === 'ascending' ? 1 : -1;
  return [...items].sort((a, b) => {
    const av = a[config.key];
    const bv = b[config.key];
    if (typeof av === 'number' && typeof bv === 'number') {
      return (av - bv) * factor;
    }
    if (typeof av === 'boolean' && typeof bv === 'boolean') {
      return (Number(av) - Number(bv)) * factor;
    }
    return String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: 'base' }) * factor;
  });
}

/**
 * Toggles a single row ID inside a Set-like selection array.
 */
export function toggleSelection(selectedIds: readonly string[], id: string): string[] {
  return selectedIds.includes(id)
    ? selectedIds.filter((item) => item !== id)
    : [...selectedIds, id];
}

/**
 * Toggles all visible row IDs: if every visible ID is selected, clears them; otherwise selects all visible IDs.
 */
export function toggleAllSelection(
  selectedIds: readonly string[],
  visibleIds: readonly string[]
): string[] {
  if (visibleIds.length === 0) return [...selectedIds];
  const allSelected = visibleIds.every((id) => selectedIds.includes(id));
  if (allSelected) {
    return selectedIds.filter((id) => !visibleIds.includes(id));
  }
  const merged = new Set([...selectedIds, ...visibleIds]);
  return Array.from(merged);
}

/**
 * Formats currency with tabular precision.
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Formats byte count into KB / MB / GB.
 */
export function formatBytes(bytes: number): string {
  if (bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const exp = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, exp);
  return `${value >= 10 || exp === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[exp]}`;
}

/**
 * Sums numeric field across items.
 */
export function sumBy<T>(items: readonly T[], selector: (item: T) => number): number {
  return items.reduce((acc, item) => acc + selector(item), 0);
}
