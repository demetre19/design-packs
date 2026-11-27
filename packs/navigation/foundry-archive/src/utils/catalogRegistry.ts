export type CategoryId =
  | 'navbar'
  | 'heroes'
  | 'feature-grids'
  | 'pricing'
  | 'testimonials'
  | 'blog-cards'
  | 'footers'
  | 'contact-forms'
  | 'modals'
  | 'media'
  | 'faqs'
  | 'ctas'
  | 'stats'
  | 'content';

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  count: number;
  path: string;
}

export interface ComponentEntryMeta {
  id: string;
  category: CategoryId;
  name: string;
  path: string;
  archetype?: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'content', label: 'Content Sections', count: 15, path: 'src/components/content/' },
  { id: 'navbar', label: 'Navigation Bars', count: 4, path: 'src/components/navbar/' },
  { id: 'heroes', label: 'Hero Sections', count: 5, path: 'src/components/heroes/' },
  { id: 'feature-grids', label: 'Feature Grids', count: 4, path: 'src/components/feature-grids/' },
  { id: 'pricing', label: 'Pricing & Tiers', count: 4, path: 'src/components/pricing/' },
  { id: 'testimonials', label: 'Testimonials', count: 3, path: 'src/components/testimonials/' },
  { id: 'blog-cards', label: 'Journal & Blog Cards', count: 4, path: 'src/components/blog-cards/' },
  { id: 'footers', label: 'Footers & Colophons', count: 4, path: 'src/components/footers/' },
  { id: 'contact-forms', label: 'Research Inquiries', count: 3, path: 'src/components/contact-forms/' },
  { id: 'modals', label: 'Modals & Passes', count: 3, path: 'src/components/modals/' },
  { id: 'media', label: 'Media & Plates', count: 3, path: 'src/components/media/' },
  { id: 'faqs', label: 'FAQs & Q&A', count: 3, path: 'src/components/faqs/' },
  { id: 'ctas', label: 'Call to Actions', count: 3, path: 'src/components/ctas/' },
  { id: 'stats', label: 'Collection Stats', count: 3, path: 'src/components/stats/' },
];

export function getTotalComponentCount(categories: CategoryMeta[]): number {
  return categories.reduce((sum, cat) => sum + cat.count, 0);
}

export function filterComponentEntries(
  entries: ComponentEntryMeta[],
  query: string
): ComponentEntryMeta[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return entries;
  return entries.filter(
    (item) =>
      item.id.toLowerCase().includes(normalized) ||
      item.name.toLowerCase().includes(normalized) ||
      (item.archetype && item.archetype.toLowerCase().includes(normalized)) ||
      item.path.toLowerCase().includes(normalized)
  );
}
