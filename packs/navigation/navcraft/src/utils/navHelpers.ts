export type PaginationToken = number | 'ellipsis-left' | 'ellipsis-right';

/**
 * Computes an adaptive pagination sequence with boundary pages and ellipses.
 */
export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): PaginationToken[] {
  if (totalPages <= 0) return [];
  const safeCurrent = Math.min(Math.max(1, currentPage), totalPages);
  const totalNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(safeCurrent - siblingCount, 1);
  const rightSibling = Math.min(safeCurrent + siblingCount, totalPages);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  if (!showLeftDots && showRightDots) {
    const leftCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis-right', totalPages];
  }

  if (showLeftDots && !showRightDots) {
    const rightCount = 3 + 2 * siblingCount;
    const rightRange = Array.from(
      { length: rightCount },
      (_, i) => totalPages - rightCount + 1 + i,
    );
    return [1, 'ellipsis-left', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i,
  );
  return [1, 'ellipsis-left', ...middleRange, 'ellipsis-right', totalPages];
}

export function getBoundedPage(current: number, delta: number, totalPages: number): number {
  if (totalPages <= 0) return 1;
  return Math.min(Math.max(1, current + delta), totalPages);
}

export interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  keywords?: string;
}

export interface CommandGroup<T extends CommandItem = CommandItem> {
  group: string;
  items: T[];
}

export function filterCommandGroups<T extends CommandItem>(
  groups: CommandGroup<T>[],
  query: string,
): CommandGroup<T>[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return groups;
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const haystack = `${item.label} ${item.keywords ?? ''} ${group.group}`.toLowerCase();
        return haystack.includes(normalized);
      }),
    }))
    .filter((group) => group.items.length > 0);
}

export function toggleSetItem(current: string[], id: string): string[] {
  return current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
}
