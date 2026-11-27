export interface CategoryDef {
  id: string;
  label: string;
}

export interface CatalogEntry {
  id: string;
  name: string;
  category: string;
  path: string;
}

export const CATEGORIES: CategoryDef[] = [
  { id: 'all', label: 'Toutes les Planches (62)' },
  { id: 'content', label: 'Contenus Éditoriaux (15)' },
  { id: 'navbar', label: 'Navigations (4)' },
  { id: 'heroes', label: 'Héros (5)' },
  { id: 'feature-grids', label: 'Grilles de Savoir-Faire (4)' },
  { id: 'pricing', label: 'Tarifs & Services (4)' },
  { id: 'testimonials', label: 'Témoignages (3)' },
  { id: 'blog-cards', label: 'Journal & Articles (4)' },
  { id: 'footers', label: 'Pieds de Page (4)' },
  { id: 'contact-forms', label: 'Formulaires (3)' },
  { id: 'modals', label: 'Modales & Dialogues (3)' },
  { id: 'media', label: 'Médias & Lookbooks (3)' },
  { id: 'faqs', label: 'Questions Fréquentes (3)' },
  { id: 'ctas', label: 'Appels à l\'Action (3)' },
  { id: 'stats', label: 'Statistiques & Registres (4)' },
];

export function filterCatalogEntries<T extends { category: string }>(
  entries: T[],
  activeCategory: string
): T[] {
  if (activeCategory === 'all') {
    return entries;
  }
  return entries.filter((entry) => entry.category === activeCategory);
}

export function formatPlateNumber(index: number): string {
  const num = index + 1;
  return num < 10 ? `0${num}` : `${num}`;
}
