import type { OrnamentCategory, OrnamentSpec } from '../types/ornament';

export type CategoryFilter = 'all' | OrnamentCategory;

export interface CategorySummary {
  id: CategoryFilter;
  label: string;
  count: number;
}

export function filterOrnaments(
  items: readonly OrnamentSpec[],
  category: CategoryFilter,
  query: string
): OrnamentSpec[] {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchable = [
      item.componentName,
      item.title,
      item.categoryLabel,
      item.description,
      ...item.motifs,
      ...item.semanticTags,
    ]
      .join(' ')
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });
}

export function buildCategorySummaries(
  items: readonly OrnamentSpec[]
): CategorySummary[] {
  const counts: Record<OrnamentCategory, number> = {
    dividers: 0,
    frames: 0,
    typography: 0,
    accents: 0,
  };

  for (const item of items) {
    counts[item.category] += 1;
  }

  return [
    { id: 'all', label: 'All Plates', count: items.length },
    { id: 'dividers', label: 'Section Dividers', count: counts.dividers },
    { id: 'frames', label: 'Content Frames', count: counts.frames },
    { id: 'typography', label: 'Rules & Headers', count: counts.typography },
    { id: 'accents', label: 'Editorial Accents', count: counts.accents },
  ];
}
