export type SpecimenCategory =
  | 'Editorial & Feature'
  | 'Technical & Docs'
  | 'Structured & Data'
  | 'Media & Narrative';

export interface SpecimenMeta {
  id: number;
  componentName: string;
  formatName: string;
  title: string;
  byline: string;
  date: string;
  readTime: string;
  category: SpecimenCategory;
  summary: string;
}

export const SPECIMEN_IMAGES = {
  concretePavilion: '/src/assets/images/editorial_concrete_pavilion_1795415323009.jpg',
  coastalStation: '/src/assets/images/coastal_weather_station_1795415325287.jpg',
  ceramicStudio: '/src/assets/images/artisan_ceramic_studio_1795415326726.jpg',
  botanicalGlasshouse: '/src/assets/images/botanical_glasshouse_light_1795415325786.jpg',
  rangefinderDesk: '/src/assets/images/analog_rangefinder_desk_1795415325873.jpg',
} as const;

export const SPECIMEN_CATALOG: SpecimenMeta[] = [
  {
    id: 1,
    componentName: 'BlogSingle1',
    formatName: 'Classic Editorial Column',
    title: 'The Quiet Endurance of Board-Formed Concrete',
    byline: 'Clara Lindqvist',
    date: 'October 14, 2026',
    readTime: '6 min read',
    category: 'Editorial & Feature',
    summary: 'Narrow 65ch column, opening drop cap, and wide serif pull quotes.',
  },
  {
    id: 2,
    componentName: 'BlogSingle2',
    formatName: 'Magazine Feature',
    title: 'Glasshouses of the Late Victorian Fringe',
    byline: 'Julian Vance',
    date: 'October 19, 2026',
    readTime: '8 min read',
    category: 'Editorial & Feature',
    summary: 'Full-bleed hero photograph with overlapping archival title card.',
  },
  {
    id: 3,
    componentName: 'BlogSingle3',
    formatName: 'Longform Scroll',
    title: 'Listening Posts Along the North Atlantic Ridge',
    byline: 'Soren Halvorsen',
    date: 'September 28, 2026',
    readTime: '11 min read',
    category: 'Media & Narrative',
    summary: 'Chapter markers with a sticky reading-progress rail and jump navigation.',
  },
  {
    id: 4,
    componentName: 'BlogSingle4',
    formatName: 'Two-Column Split',
    title: 'Designing Kilns for Small-Batch Stoneware',
    byline: 'Haruki Sato',
    date: 'November 2, 2026',
    readTime: '7 min read',
    category: 'Structured & Data',
    summary: 'Sticky table of contents on the left paired with long-form body prose.',
  },
  {
    id: 5,
    componentName: 'BlogSingle5',
    formatName: 'Centered Hero-Header Article',
    title: 'Why Mechanical Shutters Still Outlast Their Batteries',
    byline: 'Miriam Al-Khatib',
    date: 'October 8, 2026',
    readTime: '5 min read',
    category: 'Editorial & Feature',
    summary: 'Centered title, metadata, and lede set over a soft tonal gradient.',
  },
  {
    id: 6,
    componentName: 'BlogSingle6',
    formatName: 'Cover-Story',
    title: 'Storm Watch at Cape Wrath Observatory',
    byline: 'Alistair MacLeod',
    date: 'November 5, 2026',
    readTime: '9 min read',
    category: 'Media & Narrative',
    summary: 'Fullscreen cover photograph with bottom-anchored headline and deck.',
  },
  {
    id: 7,
    componentName: 'BlogSingle7',
    formatName: 'Annotated Margin Notes',
    title: 'The Botany of Cast-Iron Microclimates',
    byline: 'Dr. Eleanor Finch',
    date: 'October 22, 2026',
    readTime: '8 min read',
    category: 'Editorial & Feature',
    summary: 'Interactive side annotations aligned beside the main reading column.',
  },
  {
    id: 8,
    componentName: 'BlogSingle8',
    formatName: 'Academic Paper',
    title: 'Thermal Inertia in Timber-Shuttered Coastal Pavilions',
    byline: 'Prof. Henrik Nystrom & L. K. Osei',
    date: 'September 15, 2026',
    readTime: '14 min read',
    category: 'Structured & Data',
    summary: 'Formal serif typography with superscript footnote links and numbered figures.',
  },
  {
    id: 9,
    componentName: 'BlogSingle9',
    formatName: 'Newsletter-Style Single',
    title: 'Sunday Dispatch: Three Notebooks Worth Finishing',
    byline: 'Nadia Benali',
    date: 'November 8, 2026',
    readTime: '4 min read',
    category: 'Editorial & Feature',
    summary: 'Personal author masthead card on top with compact, conversational prose.',
  },
  {
    id: 10,
    componentName: 'BlogSingle10',
    formatName: 'Blog-with-Sidebar',
    title: 'Clay Mineralogy and the Ash Glaze Revival',
    byline: 'Kenji Watanabe',
    date: 'October 30, 2026',
    readTime: '6 min read',
    category: 'Editorial & Feature',
    summary: 'Primary essay column paired with an author bio and related readings rail.',
  },
  {
    id: 11,
    componentName: 'BlogSingle11',
    formatName: 'Image-Essay',
    title: 'Pacific Fog Lines: Architecture at the Edge of Timber',
    byline: 'Tomasz Kowalski',
    date: 'October 11, 2026',
    readTime: '7 min read',
    category: 'Media & Narrative',
    summary: 'Wide, full-bleed photographic figures breaking the rhythm of spare prose.',
  },
  {
    id: 12,
    componentName: 'BlogSingle12',
    formatName: 'Recipe / How-To Format',
    title: 'How to Mix and Apply a Traditional Shino Reduction Glaze',
    byline: 'Mina Takahashi',
    date: 'November 1, 2026',
    readTime: '10 min read',
    category: 'Structured & Data',
    summary: 'Checkable material checklist and numbered preparation stepper sections.',
  },
  {
    id: 13,
    componentName: 'BlogSingle13',
    formatName: 'Interview / Q&A Format',
    title: 'In Conversation with Optical Engineer Dieter Hoffmann',
    byline: 'Interview by Rachel Cho',
    date: 'October 25, 2026',
    readTime: '9 min read',
    category: 'Media & Narrative',
    summary: 'Alternating speaker blocks distinguishing interviewer questions and replies.',
  },
  {
    id: 14,
    componentName: 'BlogSingle14',
    formatName: 'Case-Study Format',
    title: 'Restoring the 1894 Kew Palm House Glazing Grid',
    byline: 'Arthur Pendelton',
    date: 'October 3, 2026',
    readTime: '8 min read',
    category: 'Structured & Data',
    summary: 'Challenge, approach, and results blocks anchored by tabular metric callouts.',
  },
  {
    id: 15,
    componentName: 'BlogSingle15',
    formatName: 'Changelog / Release-Notes Format',
    title: 'Folio Engine 4.2: Optical Kerning & Export Overhaul',
    byline: 'Release Engineering Team',
    date: 'November 12, 2026',
    readTime: '4 min read',
    category: 'Technical & Docs',
    summary: 'Chronological version blocks with filterable Added, Changed, and Fixed tags.',
  },
  {
    id: 16,
    componentName: 'BlogSingle16',
    formatName: 'Photojournalism Spread',
    title: 'Six Winters on the Faroe Sea Clifftop',
    byline: 'Photographs by Freja Lind',
    date: 'October 6, 2026',
    readTime: '6 min read',
    category: 'Media & Narrative',
    summary: 'Caption-led, image-dominant documentary spread with asymmetric plate notes.',
  },
  {
    id: 17,
    componentName: 'BlogSingle17',
    formatName: 'Tabbed Long-Article',
    title: 'Anatomy of a 35mm Rangefinder Assembly',
    byline: 'Martin Castellanos',
    date: 'November 4, 2026',
    readTime: '9 min read',
    category: 'Technical & Docs',
    summary: 'Multi-section article organized into interactive tabbed reading panels.',
  },
  {
    id: 18,
    componentName: 'BlogSingle18',
    formatName: 'Timeline Article',
    title: 'One Hundred Years of Coastal Concrete Engineering',
    byline: 'Dr. Ingrid Solberg',
    date: 'September 21, 2026',
    readTime: '8 min read',
    category: 'Structured & Data',
    summary: 'Dated milestones mapped along a vertical structural timeline axis.',
  },
  {
    id: 19,
    componentName: 'BlogSingle19',
    formatName: 'Quote-Led Feature',
    title: 'On Patience, Clay, and Unrepeatable Firings',
    byline: 'David Morrissey',
    date: 'October 29, 2026',
    readTime: '5 min read',
    category: 'Editorial & Feature',
    summary: 'Giant editorial pull-quote hero leading into grounded workshop commentary.',
  },
  {
    id: 20,
    componentName: 'BlogSingle20',
    formatName: 'Minimal Typography-Only',
    title: 'Against Ornamental Noise in Digital Reading',
    byline: 'Beatrice Vance',
    date: 'November 10, 2026',
    readTime: '5 min read',
    category: 'Editorial & Feature',
    summary: 'Zero photography; pure typographic hierarchy with a ruled proportion diagram.',
  },
  {
    id: 21,
    componentName: 'BlogSingle21',
    formatName: 'Dark-Mode Feature',
    title: 'Zero-Allocation Telemetry Parsers for Weather Buoys',
    byline: 'Kieran O’Connor',
    date: 'November 6, 2026',
    readTime: '7 min read',
    category: 'Technical & Docs',
    summary: 'Inverse obsidian reading band with syntax-highlighted code and copy controls.',
  },
  {
    id: 22,
    componentName: 'BlogSingle22',
    formatName: 'Podcast Show-Notes Format',
    title: 'Ep. 48: Why Botanical Archives Matter for Climate Baselines',
    byline: 'Hosted by Priya Nair',
    date: 'November 3, 2026',
    readTime: '42 min listen · 5 min notes',
    category: 'Media & Narrative',
    summary: 'Interactive episode audio scrubber with clickable chapter timestamp links.',
  },
  {
    id: 23,
    componentName: 'BlogSingle23',
    formatName: 'Report / Whitepaper Format',
    title: '2026 Coastal Concrete Salt-Ingress Durability Assessment',
    byline: 'Nordic Materials Institute',
    date: 'October 1, 2026',
    readTime: '12 min read',
    category: 'Structured & Data',
    summary: 'Executive abstract, key findings grid, and captioned technical data figure.',
  },
  {
    id: 24,
    componentName: 'BlogSingle24',
    formatName: 'Listicle Format',
    title: 'Five Workshop Tools That Earn Their Bench Space Every Day',
    byline: 'Samuel Brooks',
    date: 'October 17, 2026',
    readTime: '6 min read',
    category: 'Editorial & Feature',
    summary: 'Numbered editorial item blocks paired with crisp studio photography.',
  },
  {
    id: 25,
    componentName: 'BlogSingle25',
    formatName: 'Tutorial Format',
    title: 'Building a Deterministic EXIF Parser in TypeScript',
    byline: 'Elena Rostova',
    date: 'November 9, 2026',
    readTime: '10 min read',
    category: 'Technical & Docs',
    summary: 'Prerequisites checklist, numbered implementation steps, and runnable code.',
  },
  {
    id: 26,
    componentName: 'BlogSingle26',
    formatName: 'Review Format',
    title: 'Field Review: Leica M-A Mechanical Rangefinder After 120 Rolls',
    byline: 'Owen Mercer',
    date: 'October 27, 2026',
    readTime: '8 min read',
    category: 'Structured & Data',
    summary: 'Structured evaluation scorecard paired with a two-column pros and cons split.',
  },
  {
    id: 27,
    componentName: 'BlogSingle27',
    formatName: 'Opinion Column',
    title: 'Cities Need More Unprogrammed Concrete Shelters',
    byline: 'Hannah Gallagher',
    date: 'November 7, 2026',
    readTime: '5 min read',
    category: 'Editorial & Feature',
    summary: 'Columnist bio masthead card followed by numbered thesis argument blocks.',
  },
  {
    id: 28,
    componentName: 'BlogSingle28',
    formatName: 'Round-Up Format',
    title: 'Four Coastal Field Notebooks Tested in Salt Air',
    byline: 'Liam Fletcher',
    date: 'October 12, 2026',
    readTime: '7 min read',
    category: 'Structured & Data',
    summary: 'Sortable specification comparison table paired with compact summary mini-cards.',
  },
  {
    id: 29,
    componentName: 'BlogSingle29',
    formatName: 'Glossary / Reference Format',
    title: 'A Field Glossary of Ceramic Firing & Kiln Atmospheres',
    byline: 'Studio Reference Desk',
    date: 'September 30, 2026',
    readTime: '9 min read',
    category: 'Technical & Docs',
    summary: 'Interactive A–Z letter jump navigation over structured definition entries.',
  },
  {
    id: 30,
    componentName: 'BlogSingle30',
    formatName: 'Series-Article Format',
    title: 'Part 3: Calibration Drift in Barometric Pressure Sensors',
    byline: 'Dr. Tobias Weber',
    date: 'November 11, 2026',
    readTime: '8 min read',
    category: 'Technical & Docs',
    summary: 'Part 3 of 5 series indicator with interactive previous/next installment rail.',
  },
];

export const SPECIMEN_CATEGORIES: ('All' | SpecimenCategory)[] = [
  'All',
  'Editorial & Feature',
  'Technical & Docs',
  'Structured & Data',
  'Media & Narrative',
];

export function filterSpecimens(
  specimens: SpecimenMeta[],
  category: 'All' | SpecimenCategory,
  query: string
): SpecimenMeta[] {
  const normalized = query.trim().toLowerCase();
  return specimens.filter((item) => {
    const categoryMatch = category === 'All' || item.category === category;
    if (!categoryMatch) return false;
    if (!normalized) return true;
    return (
      item.formatName.toLowerCase().includes(normalized) ||
      item.title.toLowerCase().includes(normalized) ||
      item.componentName.toLowerCase().includes(normalized) ||
      item.summary.toLowerCase().includes(normalized) ||
      String(item.id) === normalized
    );
  });
}

export function getAdjacentSpecimens(
  specimens: SpecimenMeta[],
  currentId: number
): { prev: SpecimenMeta; next: SpecimenMeta } {
  const idx = specimens.findIndex((s) => s.id === currentId);
  if (idx === -1 || specimens.length === 0) {
    return { prev: specimens[0], next: specimens[0] };
  }
  const prevIdx = (idx - 1 + specimens.length) % specimens.length;
  const nextIdx = (idx + 1) % specimens.length;
  return { prev: specimens[prevIdx], next: specimens[nextIdx] };
}

export function parseSpecimenParam(search: string, total = 30): number {
  const params = new URLSearchParams(search);
  const raw = params.get('specimen');
  if (!raw) return 1;
  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed) || parsed < 1 || parsed > total) return 1;
  return parsed;
}
