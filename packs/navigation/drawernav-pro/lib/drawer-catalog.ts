export type StyleFamily = 'Minimal' | 'Bold' | 'Dark' | 'Light Warm';

export interface DrawerSpec {
  id: number;
  componentName: `DrawerMenu${number}`;
  brandName: string;
  domain: string;
  styleFamily: StyleFamily;
  topology: string;
  widthPx: number;
  headingPattern: string;
  features: string[];
  ctaLabel: string;
  surfaceHex: string;
  inkHex: string;
  accentHex: string;
  summary: string;
}

export const DRAWER_CATALOG: DrawerSpec[] = [
  {
    id: 1,
    componentName: 'DrawerMenu1',
    brandName: 'Kanso Studio',
    domain: 'Architecture & Industrial Design',
    styleFamily: 'Minimal',
    topology: 'Vertical Spine + 2-Column Grid',
    widthPx: 340,
    headingPattern: 'Vertical Spine + Two-Column Index',
    features: ['48px vertical spine', 'Top live search', '2-column link grid'],
    ctaLabel: 'Book a Studio Call',
    surfaceHex: '#FFFFFF',
    inkHex: '#0F172A',
    accentHex: '#1D4ED8',
    summary:
      'Asymmetric layout pairing a 48px vertical brand spine with a searchable two-column studio index and pinned cobalt CTA.',
  },
  {
    id: 2,
    componentName: 'DrawerMenu2',
    brandName: 'Linearity',
    domain: 'Product Workspace SaaS',
    styleFamily: 'Minimal',
    topology: 'Dual-Rail Icon + Detail Pane',
    widthPx: 380,
    headingPattern: '64px Icon Rail + Contextual Pane',
    features: ['64px rail switcher', 'MK initials avatar', 'Scoped search bar'],
    ctaLabel: 'New Workspace',
    surfaceHex: '#F8FAFC',
    inkHex: '#0F172A',
    accentHex: '#0F172A',
    summary:
      'Dual-pane SaaS drawer where a 64px vertical icon rail switches the active workspace directory and search scope.',
  },
  {
    id: 3,
    componentName: 'DrawerMenu3',
    brandName: 'Vektor Docs',
    domain: 'Developer Platform Documentation',
    styleFamily: 'Dark',
    topology: 'Command Palette + Scope Chips',
    widthPx: 380,
    headingPattern: 'Spotlight Search + Scope Filter',
    features: ['Scope filter tabs', 'Shortcut keycaps', 'Expandable doc trees'],
    ctaLabel: 'Get API Key',
    surfaceHex: '#0B0F17',
    inkHex: '#F1F5F9',
    accentHex: '#0284C7',
    summary:
      'Command-palette inspired obsidian docs drawer with scope filter tabs (All, Guides, API), keycap hints, and social footer.',
  },
  {
    id: 4,
    componentName: 'DrawerMenu4',
    brandName: 'Hearth & Mill',
    domain: 'Artisan Bakery & Coffee Roastery',
    styleFamily: 'Light Warm',
    topology: '2x2 Bento Tile Grid + Secondary List',
    widthPx: 360,
    headingPattern: 'Search + 2x2 Bento Tiles',
    features: ['2x2 icon tile grid', 'Live menu search', 'Social + box CTA footer'],
    ctaLabel: 'Order Morning Box',
    surfaceHex: '#FAF6F0',
    inkHex: '#2C221E',
    accentHex: '#B45309',
    summary:
      'Warm oat-paper hospitality menu leading with a 2x2 tactile tile grid above a compact secondary bakery link list.',
  },
  {
    id: 5,
    componentName: 'DrawerMenu5',
    brandName: 'MONOLITH',
    domain: 'Creative & Engineering Agency',
    styleFamily: 'Bold',
    topology: 'Segmented Mode Tabs + Numbered Cascade',
    widthPx: 390,
    headingPattern: 'Mode Tabs + Oversized Index',
    features: ['Studio/Disciplines tabs', 'Search filter', 'Marigold CTA + social'],
    ctaLabel: 'Start a Project',
    surfaceHex: '#1D4ED8',
    inkHex: '#FFFFFF',
    accentHex: '#FACC15',
    summary:
      'Full-bleed cobalt agency drawer featuring a Studio/Disciplines mode switcher, live search, and oversized numbered links.',
  },
  {
    id: 6,
    componentName: 'DrawerMenu6',
    brandName: 'Kunsthalle North',
    domain: 'Contemporary Art Museum',
    styleFamily: 'Light Warm',
    topology: 'Drill-Down Multi-Level Stack',
    widthPx: 400,
    headingPattern: 'Breadcrumb Back + Level Push',
    features: ['Level-2 drill-down', 'Cross-level search', 'Pinned ticketing CTA'],
    ctaLabel: 'Reserve Timed Entry',
    surfaceHex: '#F4EFE6',
    inkHex: '#1C1917',
    accentHex: '#292524',
    summary:
      'Wide 400px stone museum drawer using push-style drill-down submenus with a Back breadcrumb and global exhibition search.',
  },
  {
    id: 7,
    componentName: 'DrawerMenu7',
    brandName: 'Meridian Vault',
    domain: 'Corporate Treasury & Fintech',
    styleFamily: 'Dark',
    topology: 'Org Switcher + Quick Actions + Ledger',
    widthPx: 360,
    headingPattern: 'Account Switcher + Action Strip',
    features: ['Interactive org switcher', 'AR initials avatar', '3-action quick bar'],
    ctaLabel: 'Initiate Transfer',
    surfaceHex: '#090D0B',
    inkHex: '#ECFDF5',
    accentHex: '#10B981',
    summary:
      'Treasury drawer with an interactive entity switcher dropdown, 3-button quick action strip, search bar, and wire submenus.',
  },
  {
    id: 8,
    componentName: 'DrawerMenu8',
    brandName: 'Wax & Needle',
    domain: 'Independent Vinyl & Listening Bar',
    styleFamily: 'Bold',
    topology: '3-Column Genre Matrix + Crate List',
    widthPx: 370,
    headingPattern: 'Crate Search + 3-Col Genre Matrix',
    features: ['3-column genre grid', 'Crate search bar', 'Radio + Bandcamp row'],
    ctaLabel: 'Join Vinyl Club',
    surfaceHex: '#C2410C',
    inkHex: '#FFF7ED',
    accentHex: '#1C1917',
    summary:
      'Burnt vermilion record store drawer combining a 3-column quick genre matrix with crate search and listening room links.',
  },
  {
    id: 9,
    componentName: 'DrawerMenu9',
    brandName: 'Harbor Health',
    domain: 'Patient Care Portal',
    styleFamily: 'Minimal',
    topology: 'Profile + 2x2 Portal Grid + Records',
    widthPx: 360,
    headingPattern: 'EL Profile + 2x2 Action Tiles',
    features: ['EL patient block', '2x2 care tile grid', 'Records search filter'],
    ctaLabel: 'Book Appointment',
    surfaceHex: '#FFFFFF',
    inkHex: '#0F172A',
    accentHex: '#0F766E',
    summary:
      'Clinical portal pairing an EL patient card and searchable care bar with 2x2 primary care tiles and a records list.',
  },
  {
    id: 10,
    componentName: 'DrawerMenu10',
    brandName: 'Nocturne Collective',
    domain: 'Design Residency & Workshop Series',
    styleFamily: 'Dark',
    topology: 'Inset Modular Card Islands',
    widthPx: 380,
    headingPattern: 'Stacked Inset Surface Cards',
    features: ['Modular card islands', 'Live search', 'Dual expandable trees'],
    ctaLabel: 'Apply for Residency',
    surfaceHex: '#141115',
    inkHex: '#F5F3FF',
    accentHex: '#F59E0B',
    summary:
      'Espresso-dark collective menu built from discrete floating surface islands housing search, dual curriculum trees, and social links.',
  },
  {
    id: 11,
    componentName: 'DrawerMenu11',
    brandName: 'Atelier Nord',
    domain: 'Apparel & Home Objects Store',
    styleFamily: 'Minimal',
    topology: 'Department Tabs + 2-Col Category Grid',
    widthPx: 400,
    headingPattern: 'Department Tabs + Material Swatches',
    features: ['Women/Men/Home tabs', 'Material swatch filters', 'Catalog search'],
    ctaLabel: 'Shop Seasonal Edit',
    surfaceHex: '#FAFAF9',
    inkHex: '#18181B',
    accentHex: '#78350F',
    summary:
      'Retail mega-drawer with top department tabs swapping a 2-column category grid and clickable material finish filters.',
  },
  {
    id: 12,
    componentName: 'DrawerMenu12',
    brandName: 'Morning Dispatch',
    domain: 'Independent Print & Digital Daily',
    styleFamily: 'Light Warm',
    topology: 'Bottom-Anchored Thumb-Zone Nav',
    widthPx: 340,
    headingPattern: 'Masthead Top + Thumb-Zone Bottom',
    features: ['Bottom-anchored search', 'Edition quick links', 'High-reach CTA'],
    ctaLabel: 'Subscribe Today',
    surfaceHex: '#F7F3EB',
    inkHex: '#1C1917',
    accentHex: '#B91C1C',
    summary:
      'Inverted thumb-ergonomic newspaper drawer placing masthead and lead sections above a bottom-docked search bar and nav.',
  },
  {
    id: 13,
    componentName: 'DrawerMenu13',
    brandName: 'Kernel Studio',
    domain: 'Cloud Code Editor & CLI',
    styleFamily: 'Dark',
    topology: 'Monospace IDE File-Tree Explorer',
    widthPx: 360,
    headingPattern: 'Symbol Search + Collapsible File Tree',
    features: ['Monospace folder tree', 'Vertical guide lines', 'Symbol search'],
    ctaLabel: 'Open Sandbox',
    surfaceHex: '#0D1117',
    inkHex: '#E6EDF3',
    accentHex: '#22C55E',
    summary:
      'Developer IDE explorer drawer using collapsible monospace folder trees, indentation guide lines, and symbol filtering.',
  },
  {
    id: 14,
    componentName: 'DrawerMenu14',
    brandName: 'Kew & Glass',
    domain: 'Botanical Conservatory & Gardens',
    styleFamily: 'Light Warm',
    topology: 'Dual-Column Parallel Directory',
    widthPx: 390,
    headingPattern: 'Split Two-Column Side-by-Side Nav',
    features: ['2 parallel nav columns', 'Vertical divider', 'Conservatory search'],
    ctaLabel: 'Plan Your Visit',
    surfaceHex: '#F2F4EE',
    inkHex: '#1A261B',
    accentHex: '#15803D',
    summary:
      'Botanical garden drawer splitting Visit and Collections into two parallel side-by-side columns beneath a unified search bar.',
  },
  {
    id: 15,
    componentName: 'DrawerMenu15',
    brandName: 'GRIDLOCK',
    domain: 'Experimental Design Biennial',
    styleFamily: 'Bold',
    topology: 'Neo-Brutalist Exposed Grid Cells',
    widthPx: 360,
    headingPattern: 'Zero-Radius Exposed Border Matrix',
    features: ['Sharp grid cells', '2x2 utility block', 'Acid-lime primary CTA'],
    ctaLabel: 'Get Biennial Pass',
    surfaceHex: '#FACC15',
    inkHex: '#09090B',
    accentHex: '#09090B',
    summary:
      'Zero-radius brutalist grid drawer dividing search, numbered program links, and a 2x2 utility matrix with crisp ink borders.',
  },
  {
    id: 16,
    componentName: 'DrawerMenu16',
    brandName: 'Cadence Learn',
    domain: 'Cohort Learning Platform',
    styleFamily: 'Minimal',
    topology: 'Role Switcher + Numbered Step Track',
    widthPx: 350,
    headingPattern: 'Student/Instructor Toggle + Steps',
    features: ['Role segmented toggle', 'Numbered step list', 'Course search'],
    ctaLabel: 'Continue Lesson',
    surfaceHex: '#FFFFFF',
    inkHex: '#0F172A',
    accentHex: '#4F46E5',
    summary:
      'Learning portal featuring a Student/Instructor segmented toggle that dynamically swaps a numbered curriculum track.',
  },
  {
    id: 17,
    componentName: 'DrawerMenu17',
    brandName: 'Aperture 3D',
    domain: 'Spatial Rendering Workspace',
    styleFamily: 'Dark',
    topology: 'Floating Inset Frosted Container',
    widthPx: 360,
    headingPattern: 'Inset Floating Card + JD Footer',
    features: ['Floating inset margin', 'Shader tree', 'JD initials footer'],
    ctaLabel: 'Enter Studio',
    surfaceHex: '#111318',
    inkHex: '#F8FAFC',
    accentHex: '#38BDF8',
    summary:
      'Floating inset dark drawer detached from viewport edges with rounded corners, search bar, shader tree, and JD creator bar.',
  },
  {
    id: 18,
    componentName: 'DrawerMenu18',
    brandName: 'Larder & Loaf',
    domain: 'Culinary Archive & Cookbook Index',
    styleFamily: 'Light Warm',
    topology: 'Directory + Right Quick-Jump Rail',
    widthPx: 380,
    headingPattern: 'Recipe Search + Right Index Rail',
    features: ['Right quick-jump rail', 'Category accordions', 'Ingredient search'],
    ctaLabel: 'Save Recipe Box',
    surfaceHex: '#FDF8F3',
    inkHex: '#271C19',
    accentHex: '#9F1239',
    summary:
      'Cookbook index featuring a slim vertical chapter-jump rail along the drawer right edge alongside searchable recipe sections.',
  },
  {
    id: 19,
    componentName: 'DrawerMenu19',
    brandName: 'Vance Advisory',
    domain: 'Corporate Law & Strategy',
    styleFamily: 'Minimal',
    topology: 'Roman-Numeral Dossier + Office Tree',
    widthPx: 370,
    headingPattern: 'VC Crest + Roman Numeral Directory',
    features: ['VC monogram crest', 'Roman numeral index', 'Expandable offices'],
    ctaLabel: 'Schedule Consultation',
    surfaceHex: '#F8FAFC',
    inkHex: '#0F172A',
    accentHex: '#1E293B',
    summary:
      'Restrained executive dossier pairing a VC monogram header and searchable practice index with an expandable global office list.',
  },
  {
    id: 20,
    componentName: 'DrawerMenu20',
    brandName: 'Subwave FM',
    domain: 'Independent Radio & Podcast Network',
    styleFamily: 'Bold',
    topology: 'Media Directory + Live Mini Player Bar',
    widthPx: 380,
    headingPattern: 'Show Search + Docked Audio Strip',
    features: ['Play/pause mini bar', 'Expandable episodes', 'Show search + social'],
    ctaLabel: 'Listen Live',
    surfaceHex: '#311042',
    inkHex: '#FAF5FF',
    accentHex: '#FB7185',
    summary:
      'Deep plum-violet radio drawer pairing searchable show channels and episode accordions with an interactive mini player strip.',
  },
];

export function filterDrawersByStyle(
  catalog: DrawerSpec[],
  styleFilter: 'All' | StyleFamily
): DrawerSpec[] {
  if (styleFilter === 'All') {
    return catalog;
  }
  return catalog.filter((item) => item.styleFamily === styleFilter);
}

export interface SearchableNavGroup<T> {
  heading: string;
  items: T[];
}

export function filterNavGroupsByQuery<
  T extends { label: string; children?: { label: string }[] }
>(groups: SearchableNavGroup<T>[], rawQuery: string): SearchableNavGroup<T>[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return groups;
  }

  return groups
    .map((group) => {
      const filteredItems = group.items
        .map((item) => {
          const itemMatches = item.label.toLowerCase().includes(query);
          const matchingChildren = item.children?.filter((child) =>
            child.label.toLowerCase().includes(query)
          );

          if (itemMatches) {
            return item;
          }
          if (matchingChildren && matchingChildren.length > 0) {
            return { ...item, children: matchingChildren };
          }
          return null;
        })
        .filter((item): item is T => item !== null);

      return {
        ...group,
        items: filteredItems,
      };
    })
    .filter((group) => group.items.length > 0);
}

export function validateDrawerCatalog(catalog: DrawerSpec[]): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const seenIds = new Set<number>();
  const seenNames = new Set<string>();
  const seenTopologies = new Set<string>();

  if (catalog.length !== 20) {
    errors.push(`Expected 20 drawer specs, got ${catalog.length}`);
  }

  for (const spec of catalog) {
    if (seenIds.has(spec.id)) {
      errors.push(`Duplicate id ${spec.id}`);
    }
    seenIds.add(spec.id);

    if (seenNames.has(spec.componentName)) {
      errors.push(`Duplicate componentName ${spec.componentName}`);
    }
    seenNames.add(spec.componentName);

    if (seenTopologies.has(spec.topology)) {
      errors.push(`Duplicate topology "${spec.topology}" on ${spec.componentName}`);
    }
    seenTopologies.add(spec.topology);

    if (spec.widthPx < 320 || spec.widthPx > 400) {
      errors.push(`${spec.componentName} width ${spec.widthPx}px outside 320-400px`);
    }
  }

  return { valid: errors.length === 0, errors };
}
