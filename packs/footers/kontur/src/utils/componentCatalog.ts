/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CatalogEntry {
  id: string;
  name: string;
  category: string;
  path: string;
}

export interface CategoryMeta {
  id: string;
  label: string;
}

export const CATALOG_CATEGORIES: CategoryMeta[] = [
  { id: 'all', label: 'ALL 61 ELEMENTS' },
  { id: 'content', label: 'CONTENT (15)' },
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
  { id: 'stats', label: 'STATS (3)' },
];

export function filterCatalogEntries<T extends CatalogEntry>(
  entries: T[],
  activeCategory: string,
  searchQuery: string
): T[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return entries.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.path.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getCategoryCount(entries: CatalogEntry[], categoryId: string): number {
  if (categoryId === 'all') {
    return entries.length;
  }
  return entries.filter((item) => item.category === categoryId).length;
}
