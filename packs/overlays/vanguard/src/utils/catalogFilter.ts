export interface CatalogMetaItem {
  id: string;
  name: string;
  category: string;
  path: string;
}

export const CATALOG_CATEGORIES = [
  { id: 'all', label: 'ALL 62 ELEMENTS' },
  { id: 'content', label: 'CONTENT SECTIONS (15)' },
  { id: 'navbar', label: 'NAVBAR (4)' },
  { id: 'heroes', label: 'HEROES (5)' },
  { id: 'feature-grids', label: 'FEATURE GRIDS (4)' },
  { id: 'pricing', label: 'PRICING (4)' },
  { id: 'testimonials', label: 'TESTIMONIALS (3)' },
  { id: 'blog-cards', label: 'BLOG CARDS (4)' },
  { id: 'footers', label: 'FOOTERS (4)' },
  { id: 'contact-forms', label: 'CONTACT FORMS (3)' },
  { id: 'modals', label: 'MODALS (3)' },
  { id: 'media', label: 'MEDIA (3)' },
  { id: 'faqs', label: 'FAQS (3)' },
  { id: 'ctas', label: 'CTAS (3)' },
  { id: 'stats', label: 'STATS (4)' },
] as const;

export function filterCatalogItems<T extends CatalogMetaItem>(
  items: readonly T[],
  category: string,
  query: string
): T[] {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery) ||
      item.id.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getCategoryCounts<T extends CatalogMetaItem>(
  items: readonly T[]
): Record<string, number> {
  const counts: Record<string, number> = { all: items.length };
  for (const item of items) {
    counts[item.category] = (counts[item.category] ?? 0) + 1;
  }
  return counts;
}

export function validateCatalogIntegrity<T extends CatalogMetaItem>(
  items: readonly T[]
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const seenIds = new Set<string>();
  const seenPaths = new Set<string>();

  for (const item of items) {
    if (seenIds.has(item.id)) {
      errors.push(`Duplicate id: ${item.id}`);
    }
    seenIds.add(item.id);

    if (seenPaths.has(item.path)) {
      errors.push(`Duplicate path: ${item.path}`);
    }
    seenPaths.add(item.path);
  }

  return { valid: errors.length === 0, errors };
}
