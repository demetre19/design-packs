export type MenuKind = 'top-dropdown' | 'bottom-sheet';
export type LayoutPattern =
  | 'sectioned-groups'
  | 'icon-grid'
  | 'large-type'
  | 'master-detail'
  | 'command-palette'
  | 'accordion-tree'
  | 'bento-mosaic'
  | 'drill-down'
  | 'tabbed-scope'
  | 'az-index';

export type StyleFamily =
  | 'minimal-light'
  | 'minimal-dark'
  | 'playful-colourful'
  | 'editorial-light'
  | 'playful-dark';

export interface SnapPoint {
  id: string;
  label: string;
  heightPercent: number;
}

export interface FilterableMenuItem {
  id: string;
  label: string;
  description?: string;
  category?: string;
}

export interface MenuCatalogMeta {
  id: number;
  componentName: `SheetMenu${number}`;
  title: string;
  kind: MenuKind;
  layoutPattern: LayoutPattern;
  topologyLabel: string;
  styleFamily: StyleFamily;
  hasProfileFooter: boolean;
  hasUtilityActions: boolean;
  hasSearchBar: boolean;
  snapPoints?: SnapPoint[];
  summary: string;
}

/**
 * Given a list of snap points (ascending heightPercent), current height percent,
 * drag deltaY in pixels (positive = dragged down, negative = dragged up),
 * and container height in pixels, computes either the next snap point or dismissal.
 */
export function resolveSnapAfterDrag(params: {
  snapPoints: SnapPoint[];
  currentSnapId: string;
  deltaY: number;
  containerHeight: number;
  dismissThresholdPercent?: number;
}): { action: 'dismiss' } | { action: 'snap'; snap: SnapPoint } {
  const {
    snapPoints,
    currentSnapId,
    deltaY,
    containerHeight,
    dismissThresholdPercent = 24,
  } = params;

  if (snapPoints.length === 0) {
    return { action: 'dismiss' };
  }

  const sorted = [...snapPoints].sort((a, b) => a.heightPercent - b.heightPercent);
  const current = sorted.find((s) => s.id === currentSnapId) ?? sorted[0];
  const safeContainerHeight = Math.max(containerHeight, 100);
  const deltaPercent = (deltaY / safeContainerHeight) * 100;
  const projectedPercent = current.heightPercent - deltaPercent;

  const lowest = sorted[0];
  if (
    projectedPercent < lowest.heightPercent - (lowest.heightPercent - dismissThresholdPercent) * 0.65 &&
    deltaY > 28
  ) {
    return { action: 'dismiss' };
  }

  if (projectedPercent <= dismissThresholdPercent) {
    return { action: 'dismiss' };
  }

  let closest = sorted[0];
  let minDistance = Math.abs(projectedPercent - closest.heightPercent);

  for (const point of sorted) {
    const distance = Math.abs(projectedPercent - point.heightPercent);
    if (distance < minDistance) {
      minDistance = distance;
      closest = point;
    }
  }

  return { action: 'snap', snap: closest };
}

/**
 * Cycles to the next snap point (upwards until highest, then wraps to lowest,
 * or steps cleanly by direction).
 */
export function getNextSnapPoint(
  snapPoints: SnapPoint[],
  currentSnapId: string,
  direction: 'cycle' | 'up' | 'down' = 'cycle'
): SnapPoint | null {
  if (snapPoints.length === 0) return null;
  const sorted = [...snapPoints].sort((a, b) => a.heightPercent - b.heightPercent);
  const idx = sorted.findIndex((s) => s.id === currentSnapId);
  const currentIndex = idx === -1 ? 0 : idx;

  if (direction === 'up') {
    return sorted[Math.min(currentIndex + 1, sorted.length - 1)];
  }
  if (direction === 'down') {
    return sorted[Math.max(currentIndex - 1, 0)];
  }
  return sorted[(currentIndex + 1) % sorted.length];
}

/**
 * Filters navigation items by case-insensitive substring match across label,
 * description, and category.
 */
export function filterMenuItems<T extends FilterableMenuItem>(
  items: T[],
  query: string
): T[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return items;
  return items.filter((item) => {
    const labelMatch = item.label.toLowerCase().includes(normalized);
    const descMatch = item.description?.toLowerCase().includes(normalized) ?? false;
    const catMatch = item.category?.toLowerCase().includes(normalized) ?? false;
    return labelMatch || descMatch || catMatch;
  });
}

/**
 * Groups items alphabetically by the first uppercase character of their label.
 */
export function groupItemsAlphabetically<T extends { label: string }>(
  items: T[]
): Array<{ letter: string; items: T[] }> {
  const sorted = [...items].sort((a, b) => a.label.localeCompare(b.label));
  const map = new Map<string, T[]>();

  for (const item of sorted) {
    const letter = (item.label.trim().charAt(0) || '#').toUpperCase();
    const list = map.get(letter) ?? [];
    list.push(item);
    map.set(letter, list);
  }

  return Array.from(map.entries()).map(([letter, groupItems]) => ({
    letter,
    items: groupItems,
  }));
}

/**
 * Filters the 20-menu catalog by kind, topology group, and search query.
 */
export function filterCatalog(
  catalog: MenuCatalogMeta[],
  filters: {
    kind?: MenuKind | 'all';
    layout?: LayoutPattern | 'all';
    style?: StyleFamily | 'all';
    query?: string;
  }
): MenuCatalogMeta[] {
  const { kind = 'all', layout = 'all', style = 'all', query = '' } = filters;
  const q = query.trim().toLowerCase();

  return catalog.filter((entry) => {
    if (kind !== 'all' && entry.kind !== kind) return false;
    if (layout !== 'all' && entry.layoutPattern !== layout) return false;
    if (style !== 'all' && entry.styleFamily !== style) return false;
    if (q) {
      const haystack =
        `${entry.componentName} ${entry.title} ${entry.summary} ${entry.topologyLabel} ${entry.styleFamily}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

/**
 * Clamps live drag height percentage within safe viewport bounds while dragging.
 */
export function computeLiveDragHeightPercent(params: {
  baseHeightPercent: number;
  deltaY: number;
  containerHeight: number;
  minPercent?: number;
  maxPercent?: number;
}): number {
  const {
    baseHeightPercent,
    deltaY,
    containerHeight,
    minPercent = 18,
    maxPercent = 96,
  } = params;
  const safeHeight = Math.max(containerHeight, 100);
  const deltaPercent = (deltaY / safeHeight) * 100;
  const raw = baseHeightPercent - deltaPercent;
  return Math.min(maxPercent, Math.max(minPercent, Math.round(raw * 10) / 10));
}
