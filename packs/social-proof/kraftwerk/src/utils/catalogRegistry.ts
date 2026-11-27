export interface ComponentCategory {
  id: string;
  label: string;
  count: number;
  folder: string;
  familyTitle: string;
}

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
  { id: 'all', label: 'ALL 62 SPECIMENS', count: 62, folder: 'SRC/COMPONENTS/*', familyTitle: 'ALL SPECIMENS' },
  { id: 'content', label: 'CONTENT (15)', count: 15, folder: 'SRC/COMPONENTS/CONTENT/', familyTitle: 'CONTENT SECTIONS' },
  { id: 'navbar', label: 'NAVBARS (4)', count: 4, folder: 'SRC/COMPONENTS/NAVBAR/', familyTitle: 'NAVBARS' },
  { id: 'heroes', label: 'HEROES (5)', count: 5, folder: 'SRC/COMPONENTS/HEROES/', familyTitle: 'HEROES' },
  { id: 'feature-grids', label: 'FEATURES (4)', count: 4, folder: 'SRC/COMPONENTS/FEATURE-GRIDS/', familyTitle: 'FEATURE GRIDS' },
  { id: 'pricing', label: 'PRICING (4)', count: 4, folder: 'SRC/COMPONENTS/PRICING/', familyTitle: 'PRICING' },
  { id: 'testimonials', label: 'TESTIMONIALS (3)', count: 3, folder: 'SRC/COMPONENTS/TESTIMONIALS/', familyTitle: 'TESTIMONIALS' },
  { id: 'blog-cards', label: 'EDITORIAL (4)', count: 4, folder: 'SRC/COMPONENTS/BLOG-CARDS/', familyTitle: 'EDITORIAL / BLOG CARDS' },
  { id: 'footers', label: 'FOOTERS (4)', count: 4, folder: 'SRC/COMPONENTS/FOOTERS/', familyTitle: 'FOOTERS' },
  { id: 'contact-forms', label: 'CONTACTS (3)', count: 3, folder: 'SRC/COMPONENTS/CONTACT-FORMS/', familyTitle: 'CONTACT FORMS' },
  { id: 'modals', label: 'MODALS (3)', count: 3, folder: 'SRC/COMPONENTS/MODALS/', familyTitle: 'MODALS & DIALOGS' },
  { id: 'media', label: 'MEDIA (3)', count: 3, folder: 'SRC/COMPONENTS/MEDIA/', familyTitle: 'MEDIA SECTIONS' },
  { id: 'faqs', label: 'FAQS (3)', count: 3, folder: 'SRC/COMPONENTS/FAQS/', familyTitle: 'FAQS' },
  { id: 'ctas', label: 'CTAS (3)', count: 3, folder: 'SRC/COMPONENTS/CTAS/', familyTitle: 'CTAS' },
  { id: 'stats', label: 'STATS (4)', count: 4, folder: 'SRC/COMPONENTS/STATS/', familyTitle: 'STATS & DATA' },
];

export function getTotalComponentCount(categories: ComponentCategory[] = COMPONENT_CATEGORIES): number {
  return categories
    .filter((cat) => cat.id !== 'all')
    .reduce((sum, cat) => sum + cat.count, 0);
}

export function isSectionVisible(activeCategory: string, sectionId: string): boolean {
  if (activeCategory === 'all') {
    return true;
  }
  return activeCategory === sectionId;
}

export function getInitialCategory(searchString: string): string {
  const params = new URLSearchParams(searchString);
  const requested = params.get('category');
  if (requested && COMPONENT_CATEGORIES.some((cat) => cat.id === requested)) {
    return requested;
  }
  return 'content';
}
