export type StyleFamily =
  | 'Minimal / Professional'
  | 'Dark'
  | 'Warm Editorial'
  | 'Bold / Colourful';

export type LayoutArchetype =
  | 'Command & Dock'
  | 'Split & Preview'
  | 'Broadsheet & Magazine'
  | 'Tabbed & Workspace'
  | 'Bento & Radial'
  | 'Hierarchy & Index';

export interface MenuCatalogEntry {
  id: number;
  componentName: `ModalMenu${number}`;
  title: string;
  layoutArchetype: LayoutArchetype;
  styleFamily: StyleFamily;
  panelWidthPx: number;
  linkCount: number;
  summary: string;
  headingPattern: string;
  swatchColors: [string, string, string];
}

export const MENU_CATALOG: MenuCatalogEntry[] = [
  {
    id: 1,
    componentName: 'ModalMenu1',
    title: 'Developer Command Palette',
    layoutArchetype: 'Command & Dock',
    styleFamily: 'Dark',
    panelWidthPx: 580,
    linkCount: 9,
    summary:
      'Live search input with arrow-key navigation, grouped routes, and mono keyboard hints.',
    headingPattern: 'Search bar + 3 grouped sections with kbd shortcuts',
    swatchColors: ['#0B0D12', '#171C28', '#38BDF8'],
  },
  {
    id: 2,
    componentName: 'ModalMenu2',
    title: 'Architectural Split Directory',
    layoutArchetype: 'Split & Preview',
    styleFamily: 'Minimal / Professional',
    panelWidthPx: 680,
    linkCount: 8,
    summary:
      'Filterable two-column directory where hovering or focusing a route updates the live preview pane.',
    headingPattern: 'Search bar + left grouped nav + right preview inspector',
    swatchColors: ['#FFFFFF', '#F8FAFC', '#0F172A'],
  },
  {
    id: 3,
    componentName: 'ModalMenu3',
    title: 'Alabaster Broadsheet Index',
    layoutArchetype: 'Broadsheet & Magazine',
    styleFamily: 'Warm Editorial',
    panelWidthPx: 680,
    linkCount: 12,
    summary:
      'Two-tier broadsheet pairing oversized numbered lead stories with a 3-column department directory and live search.',
    headingPattern: 'Masthead + search + 3 lead stories + 3 department columns',
    swatchColors: ['#FAF7F2', '#E7DFD3', '#9A3412'],
  },
  {
    id: 4,
    componentName: 'ModalMenu4',
    title: 'Segmented Platform Tabs',
    layoutArchetype: 'Tabbed & Workspace',
    styleFamily: 'Minimal / Professional',
    panelWidthPx: 640,
    linkCount: 16,
    summary:
      'Top horizontal tab bar plus cross-tab live search switching across four two-column directories.',
    headingPattern: 'Tablist + search bar + 2 sub-group headings per tab',
    swatchColors: ['#FFFFFF', '#F1F5F9', '#2563EB'],
  },
  {
    id: 5,
    componentName: 'ModalMenu5',
    title: 'Asymmetric Bento Studio Launcher',
    layoutArchetype: 'Bento & Radial',
    styleFamily: 'Bold / Colourful',
    panelWidthPx: 640,
    linkCount: 9,
    summary:
      'Saturated asymmetric bento mosaic with a 2x2 featured hero tile, secondary tiles, and live search.',
    headingPattern: 'Search header + 2x2 hero bento grid + 3-col publish strip',
    swatchColors: ['#FFFFFF', '#2563EB', '#F97316'],
  },
  {
    id: 6,
    componentName: 'ModalMenu6',
    title: 'Obsidian Gallery Spotlight',
    layoutArchetype: 'Split & Preview',
    styleFamily: 'Dark',
    panelWidthPx: 700,
    linkCount: 10,
    summary:
      'Filterable dark dual-column link index paired with a curated spotlight panel and featured route.',
    headingPattern: 'Search bar + dual nav groups + right featured spotlight card',
    swatchColors: ['#121110', '#1E1B18', '#F59E0B'],
  },
  {
    id: 7,
    componentName: 'ModalMenu7',
    title: 'Curatorial Vertical Rail',
    layoutArchetype: 'Tabbed & Workspace',
    styleFamily: 'Warm Editorial',
    panelWidthPx: 660,
    linkCount: 14,
    summary:
      'Vertical chapter tab rail on desktop (scrollable strip on mobile) with cross-chapter live search.',
    headingPattern: 'Search bar + vertical chapter rail + contextual reading pane',
    swatchColors: ['#F5F1EA', '#EAE3D5', '#14532D'],
  },
  {
    id: 8,
    componentName: 'ModalMenu8',
    title: 'Bauhaus Poster Index',
    layoutArchetype: 'Broadsheet & Magazine',
    styleFamily: 'Bold / Colourful',
    panelWidthPx: 600,
    linkCount: 8,
    summary:
      'Hard-bordered poster typography with inline category filters, uppercase search, and bold hover blocks.',
    headingPattern: 'Poster header + search + inline filters + oversized index',
    swatchColors: ['#FAFAF9', '#18181B', '#DC2626'],
  },
  {
    id: 9,
    componentName: 'ModalMenu9',
    title: 'Monochrome Quick Matrix',
    layoutArchetype: 'Command & Dock',
    styleFamily: 'Minimal / Professional',
    panelWidthPx: 540,
    linkCount: 10,
    summary:
      'Compact filterable command box combining a 4-item quick-jump strip and numbered groups.',
    headingPattern: 'Search input + quick-jump strip + 2 compact lists',
    swatchColors: ['#FFFFFF', '#F3F4F6', '#111827'],
  },
  {
    id: 10,
    componentName: 'ModalMenu10',
    title: 'Midnight Console Launcher',
    layoutArchetype: 'Bento & Radial',
    styleFamily: 'Dark',
    panelWidthPx: 620,
    linkCount: 11,
    summary:
      'Filterable dark-mode module grid with emerald/sky accents and bottom utility nav row.',
    headingPattern: 'Search header + 2 icon grids + bottom utility nav',
    swatchColors: ['#090D16', '#111827', '#10B981'],
  },
  {
    id: 11,
    componentName: 'ModalMenu11',
    title: 'Drill-Down Breadcrumb Stack',
    layoutArchetype: 'Hierarchy & Index',
    styleFamily: 'Minimal / Professional',
    panelWidthPx: 520,
    linkCount: 12,
    summary:
      'Single-pane progressive stack drilling into nested folders with back button, breadcrumbs, and cross-depth search.',
    headingPattern: 'Breadcrumb trail + search bar + single-level folder/leaf stack',
    swatchColors: ['#FFFFFF', '#F8FAFC', '#0F172A'],
  },
  {
    id: 12,
    componentName: 'ModalMenu12',
    title: 'Accordion Directory Tree',
    layoutArchetype: 'Hierarchy & Index',
    styleFamily: 'Dark',
    panelWidthPx: 560,
    linkCount: 11,
    summary:
      'Terminal-style collapsible outline with indentation guide rails, Expand All toggle, and auto-expanding search.',
    headingPattern: 'Search + expand controls + collapsible nested tree branches',
    swatchColors: ['#0B100E', '#11221B', '#34D399'],
  },
  {
    id: 13,
    componentName: 'ModalMenu13',
    title: '3-Column Miller Browser',
    layoutArchetype: 'Hierarchy & Index',
    styleFamily: 'Minimal / Professional',
    panelWidthPx: 720,
    linkCount: 14,
    summary:
      'macOS Finder-inspired cascading three-column hierarchy (Domain → Category → Destinations) with flat path search.',
    headingPattern: 'Search header + 3 synchronized cascading hierarchy columns',
    swatchColors: ['#F8FAFC', '#FFFFFF', '#2563EB'],
  },
  {
    id: 14,
    componentName: 'ModalMenu14',
    title: 'Radial Hub-and-Spoke Map',
    layoutArchetype: 'Bento & Radial',
    styleFamily: 'Bold / Colourful',
    panelWidthPx: 680,
    linkCount: 12,
    summary:
      'Central workspace hub anchor radiating into four color-coded satellite spoke quadrants with live search.',
    headingPattern: 'Search bar + center hub anchor + 4 corner spoke clusters',
    swatchColors: ['#F8FAFC', '#0F172A', '#7C3AED'],
  },
  {
    id: 15,
    componentName: 'ModalMenu15',
    title: 'Horizontal Snap Card-Deck',
    layoutArchetype: 'Bento & Radial',
    styleFamily: 'Warm Editorial',
    panelWidthPx: 680,
    linkCount: 8,
    summary:
      'Scroll-snapping horizontal collection cards with prev/next buttons, quick atelier index, and search filtering.',
    headingPattern: 'Search + scrollable snap card-deck + 2-column quick index',
    swatchColors: ['#FBF9F5', '#EDE6DA', '#78350F'],
  },
  {
    id: 16,
    componentName: 'ModalMenu16',
    title: 'Lifecycle Timeline Spine',
    layoutArchetype: 'Hierarchy & Index',
    styleFamily: 'Dark',
    panelWidthPx: 600,
    linkCount: 12,
    summary:
      'Sequential 4-stage vertical delivery spine branching into phase routes for Plan, Build, Ship, and Observe.',
    headingPattern: 'Search header + numbered vertical timeline spine + route nodes',
    swatchColors: ['#0F111E', '#171B2E', '#F59E0B'],
  },
  {
    id: 17,
    componentName: 'ModalMenu17',
    title: 'Dense A–Z Sitemap Matrix',
    layoutArchetype: 'Hierarchy & Index',
    styleFamily: 'Minimal / Professional',
    panelWidthPx: 720,
    linkCount: 21,
    summary:
      'High-density 3-column alphabetical directory with A–D through S–Z bucket jump toggles and live keyword search.',
    headingPattern: 'Search + alphabetical bucket tabs + 3-column 21-route matrix',
    swatchColors: ['#FFFFFF', '#F5F5F5', '#171717'],
  },
  {
    id: 18,
    componentName: 'ModalMenu18',
    title: 'Workspace & Pinned Shelf',
    layoutArchetype: 'Tabbed & Workspace',
    styleFamily: 'Dark',
    panelWidthPx: 640,
    linkCount: 6,
    summary:
      'Production/Staging context switcher paired with an interactive pinnable favorites bar and filtered route list.',
    headingPattern: 'Environment toggle + search + pinned shelf + route directory',
    swatchColors: ['#141216', '#1F1B22', '#FB7185'],
  },
  {
    id: 19,
    componentName: 'ModalMenu19',
    title: 'Asymmetric Magazine Grid',
    layoutArchetype: 'Broadsheet & Magazine',
    styleFamily: 'Bold / Colourful',
    panelWidthPx: 700,
    linkCount: 6,
    summary:
      '12-column editorial layout pairing a tall 2-row emerald lead dossier with stacked ochre/sky feature blocks.',
    headingPattern: 'Search header + 12-col asymmetric feature blocks + dept strip',
    swatchColors: ['#FFFFFF', '#064E3B', '#FFEDD5'],
  },
  {
    id: 20,
    componentName: 'ModalMenu20',
    title: 'Bottom-Docked Command Sheet',
    layoutArchetype: 'Command & Dock',
    styleFamily: 'Warm Editorial',
    panelWidthPx: 540,
    linkCount: 6,
    summary:
      'Inverted thumb-first modal positioning filterable results above and anchoring scope chips and search at the bottom.',
    headingPattern: 'Header + upper results viewport + bottom-docked search input',
    swatchColors: ['#FAF6EF', '#F1E9DC', '#B45309'],
  },
];

export const STYLE_FAMILIES: Array<'All' | StyleFamily> = [
  'All',
  'Minimal / Professional',
  'Dark',
  'Warm Editorial',
  'Bold / Colourful',
];

export const LAYOUT_ARCHETYPES: Array<'All' | LayoutArchetype> = [
  'All',
  'Command & Dock',
  'Split & Preview',
  'Broadsheet & Magazine',
  'Tabbed & Workspace',
  'Bento & Radial',
  'Hierarchy & Index',
];

export interface CatalogFilterCriteria {
  styleFamily?: 'All' | StyleFamily;
  layoutArchetype?: 'All' | LayoutArchetype;
  query?: string;
}

export function filterMenuCatalog(
  entries: MenuCatalogEntry[],
  criteria: CatalogFilterCriteria
): MenuCatalogEntry[] {
  const normalizedQuery = (criteria.query ?? '').trim().toLowerCase();
  return entries.filter((entry) => {
    if (
      criteria.styleFamily &&
      criteria.styleFamily !== 'All' &&
      entry.styleFamily !== criteria.styleFamily
    ) {
      return false;
    }
    if (
      criteria.layoutArchetype &&
      criteria.layoutArchetype !== 'All' &&
      entry.layoutArchetype !== criteria.layoutArchetype
    ) {
      return false;
    }
    if (normalizedQuery) {
      const haystack = `${entry.componentName} ${entry.title} ${entry.layoutArchetype} ${entry.styleFamily} ${entry.summary}`.toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });
}

export interface SearchableItem {
  label: string;
  description?: string;
  keywords?: string;
}

export interface SearchableGroup<T extends SearchableItem> {
  heading: string;
  items: T[];
}

export function filterCommandGroups<T extends SearchableItem>(
  groups: SearchableGroup<T>[],
  query: string
): SearchableGroup<T>[] {
  const q = query.trim().toLowerCase();
  if (!q) return groups;
  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const text = `${item.label} ${item.description ?? ''} ${item.keywords ?? ''} ${group.heading}`.toLowerCase();
        return text.includes(q);
      }),
    }))
    .filter((group) => group.items.length > 0);
}
