import type { AmbientCategory, AmbientComponentMeta } from './ambientTypes';

export function formatAmbientIndex(index: number): string {
  return String(index).padStart(2, '0');
}

export function filterAmbientItems(
  items: AmbientComponentMeta[],
  category: AmbientCategory,
  query: string
): AmbientComponentMeta[] {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      item.id,
      formatAmbientIndex(item.index),
      item.title,
      item.category,
      item.technique,
      item.summary,
      item.useCase,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function getAdjacentAmbientId(
  items: AmbientComponentMeta[],
  currentId: string,
  direction: 'prev' | 'next'
): string | null {
  if (items.length === 0) {
    return null;
  }
  const currentIndex = items.findIndex((item) => item.id === currentId);
  if (currentIndex === -1) {
    return items[0].id;
  }
  const delta = direction === 'next' ? 1 : -1;
  const targetIndex = (currentIndex + delta + items.length) % items.length;
  return items[targetIndex].id;
}

export function validateCatalogCompleteness(items: AmbientComponentMeta[]): {
  valid: boolean;
  missingIds: string[];
  duplicateIds: string[];
} {
  const expectedIds = Array.from({ length: 20 }, (_, i) => `Amb${i + 1}`);
  const seen = new Set<string>();
  const duplicateIds: string[] = [];

  for (const item of items) {
    if (seen.has(item.id)) {
      duplicateIds.push(item.id);
    }
    seen.add(item.id);
  }

  const missingIds = expectedIds.filter((id) => !seen.has(id));

  return {
    valid: missingIds.length === 0 && duplicateIds.length === 0 && items.length === 20,
    missingIds,
    duplicateIds,
  };
}
