export type StepStatus = 'completed' | 'current' | 'upcoming';

export type WayCategory =
  | 'all'
  | 'steppers'
  | 'breadcrumbs'
  | 'headers'
  | 'anchors-back'
  | 'hybrid';

export type WayDensity = 'compact' | 'spacious';
export type WayStyle = 'minimal' | 'professional' | 'dark' | 'colourful';

export interface WayCatalogItem {
  id: string;
  index: number;
  componentName: string;
  title: string;
  category: Exclude<WayCategory, 'all'>;
  categoryLabel: string;
  density: WayDensity;
  style: WayStyle;
  description: string;
}

export function clampStep(step: number, totalSteps: number): number {
  if (totalSteps <= 0) return 0;
  if (!Number.isFinite(step)) return 0;
  return Math.max(0, Math.min(totalSteps - 1, Math.trunc(step)));
}

export function getStepStatus(index: number, currentIndex: number): StepStatus {
  if (index < currentIndex) return 'completed';
  if (index === currentIndex) return 'current';
  return 'upcoming';
}

export function getProgressPercent(currentIndex: number, totalSteps: number): number {
  if (totalSteps <= 1) return totalSteps === 1 ? 100 : 0;
  const clamped = clampStep(currentIndex, totalSteps);
  return Math.round((clamped / (totalSteps - 1)) * 100);
}

export interface CollapsedCrumbsResult<T> {
  leading: T[];
  hidden: T[];
  trailing: T[];
  isCollapsed: boolean;
}

export function collapseCrumbs<T>(
  items: T[],
  maxVisible = 4
): CollapsedCrumbsResult<T> {
  if (items.length <= maxVisible || maxVisible < 3) {
    return {
      leading: items,
      hidden: [],
      trailing: [],
      isCollapsed: false,
    };
  }
  const trailingCount = maxVisible - 2;
  return {
    leading: items.slice(0, 1),
    hidden: items.slice(1, items.length - trailingCount),
    trailing: items.slice(items.length - trailingCount),
    isCollapsed: true,
  };
}

export type PaginationToken = number | 'ellipsis-left' | 'ellipsis-right';

export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1
): PaginationToken[] {
  if (totalPages <= 0) return [];
  const safeCurrent = Math.max(1, Math.min(totalPages, Math.trunc(currentPage)));
  const totalNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(safeCurrent - siblingCount, 1);
  const rightSibling = Math.min(safeCurrent + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + 2 * siblingCount;
    const leftRange = Array.from({ length: leftCount }, (_, i) => i + 1);
    return [...leftRange, 'ellipsis-right', totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblingCount;
    const start = totalPages - rightCount + 1;
    const rightRange = Array.from({ length: rightCount }, (_, i) => start + i);
    return [1, 'ellipsis-left', ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i
  );
  return [1, 'ellipsis-left', ...middleRange, 'ellipsis-right', totalPages];
}

export function filterCatalog(
  items: WayCatalogItem[],
  options: {
    category: WayCategory;
    style: WayStyle | 'all';
    density: WayDensity | 'all';
    query: string;
  }
): WayCatalogItem[] {
  const q = options.query.trim().toLowerCase();
  return items.filter((item) => {
    if (options.category !== 'all' && item.category !== options.category) return false;
    if (options.style !== 'all' && item.style !== options.style) return false;
    if (options.density !== 'all' && item.density !== options.density) return false;
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.componentName.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q) ||
      item.style.toLowerCase().includes(q)
    );
  });
}
