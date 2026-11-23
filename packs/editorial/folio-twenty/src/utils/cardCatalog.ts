export type CardStyle = 'minimal' | 'editorial' | 'dark' | 'playful';

export type CardCategory =
  | 'Editorial & Blog'
  | 'Team & Profile'
  | 'Testimonials'
  | 'Features & Stats'
  | 'Product & Commerce'
  | 'Gallery & Events'
  | 'Lists & Utility';

export type ViewMode = 'both' | 'standalone' | 'grid';

export interface CardSpec {
  id: string;
  number: string;
  componentName: string;
  title: string;
  cardType: string;
  category: CardCategory;
  style: CardStyle;
  supports3Up: boolean;
  standaloneWidthClass: string;
  contextNote: string;
  description: string;
}

export interface CardFilterCriteria {
  style: CardStyle | 'all';
  category: CardCategory | 'all';
  query: string;
}

export const CARD_SPECS: CardSpec[] = [
  {
    id: 'card-1',
    number: '01',
    componentName: 'Card1',
    title: 'Architectural Monograph Article',
    cardType: 'Blog / Article (Vertical)',
    category: 'Editorial & Blog',
    style: 'minimal',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Vertical article card with 4:3 photography, unboxed metadata separators, and author footer.',
  },
  {
    id: 'card-2',
    number: '02',
    componentName: 'Card2',
    title: 'Long-Form Feature Essay',
    cardType: 'Blog / Article (Horizontal)',
    category: 'Editorial & Blog',
    style: 'editorial',
    supports3Up: false,
    standaloneWidthClass: 'max-w-3xl',
    contextNote: 'Standalone & Stacked Editorial Feed',
    description: 'Asymmetric horizontal split article card pairing documentary photography with Fraunces serif display typography.',
  },
  {
    id: 'card-3',
    number: '03',
    componentName: 'Card3',
    title: 'Studio Partner Directory',
    cardType: 'Team / Person Card',
    category: 'Team & Profile',
    style: 'minimal',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Clean portrait card with square avatar, discipline metadata, short practice note, and interactive profile link.',
  },
  {
    id: 'card-4',
    number: '04',
    componentName: 'Card4',
    title: 'Systems Principal Dossier',
    cardType: 'Team / Person Card',
    category: 'Team & Profile',
    style: 'dark',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Obsidian dark team card with optical weight compensation, tabular tenure metrics, and direct message toggle.',
  },
  {
    id: 'card-5',
    number: '05',
    componentName: 'Card5',
    title: 'Client Outcome Endorsement',
    cardType: 'Testimonial Card',
    category: 'Testimonials',
    style: 'editorial',
    supports3Up: true,
    standaloneWidthClass: 'max-w-md',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Editorial blockquote with quantified outcome figure, attributed author figcaption, and warm paper surface.',
  },
  {
    id: 'card-6',
    number: '06',
    componentName: 'Card6',
    title: 'Creator Community Quote',
    cardType: 'Testimonial Card',
    category: 'Testimonials',
    style: 'playful',
    supports3Up: true,
    standaloneWidthClass: 'max-w-md',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Tactile cream, sky, and rose testimonial block with expressive typography, concrete outcome, and interactive applause counter.',
  },
  {
    id: 'card-7',
    number: '07',
    componentName: 'Card7',
    title: 'Precision Capability Tile',
    cardType: 'Feature Card with Icon',
    category: 'Features & Stats',
    style: 'minimal',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Minimal feature card with hairline icon frame, concise engineering copy, and expandable specification drawer.',
  },
  {
    id: 'card-8',
    number: '08',
    componentName: 'Card8',
    title: 'Infrastructure Engine Module',
    cardType: 'Feature Card with Icon',
    category: 'Features & Stats',
    style: 'dark',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Dark-surface capability card featuring crisp icon affordance, tabular benchmark figures, and interactive state toggle.',
  },
  {
    id: 'card-9',
    number: '09',
    componentName: 'Card9',
    title: 'Industrial Hardware Edition',
    cardType: 'Pricing-Adjacent Product Card',
    category: 'Product & Commerce',
    style: 'minimal',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Minimal product card with studio lighting photo, interactive finish/edition selector, tabular pricing, and bag action.',
  },
  {
    id: 'card-10',
    number: '10',
    componentName: 'Card10',
    title: 'Makers Studio License Kit',
    cardType: 'Pricing-Adjacent Product Card',
    category: 'Product & Commerce',
    style: 'playful',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Tactile playful product bundle card with interactive seat/quantity stepper, live total calculation, and deliverables list.',
  },
  {
    id: 'card-11',
    number: '11',
    componentName: 'Card11',
    title: 'Operational Metric Block',
    cardType: 'Stat Card',
    category: 'Features & Stats',
    style: 'minimal',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Semantic definition-list metric card with tabular numerals, explicit text+icon delta, and crisp SVG trendline.',
  },
  {
    id: 'card-12',
    number: '12',
    componentName: 'Card12',
    title: 'Dark Telemetry Breakdown',
    cardType: 'Stat Card',
    category: 'Features & Stats',
    style: 'dark',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Charcoal metric card pairing a primary KPI with a 3-row tabular breakdown and SVG bar cadence.',
  },
  {
    id: 'card-13',
    number: '13',
    componentName: 'Card13',
    title: 'Monolith Geometric Plate',
    cardType: 'Image-Free Gallery Tile (SVG Art)',
    category: 'Gallery & Events',
    style: 'editorial',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Image-free exhibition tile built purely with CSS atmospheric gradients and vector architectural geometry.',
  },
  {
    id: 'card-14',
    number: '14',
    componentName: 'Card14',
    title: 'Risograph Kinetic Tile',
    cardType: 'Image-Free Gallery Tile (SVG Art)',
    category: 'Gallery & Events',
    style: 'playful',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Playful SVG geometric print tile with interactive colorway switcher and tabular edition numbering.',
  },
  {
    id: 'card-15',
    number: '15',
    componentName: 'Card15',
    title: 'Architect Public Profile',
    cardType: 'Profile Card',
    category: 'Team & Profile',
    style: 'editorial',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Editorial creator profile card with studio portrait, tabular work/follower counts, and live Follow toggle.',
  },
  {
    id: 'card-16',
    number: '16',
    componentName: 'Card16',
    title: 'Open Role Specification Row',
    cardType: 'Job-Listing Row',
    category: 'Lists & Utility',
    style: 'minimal',
    supports3Up: false,
    standaloneWidthClass: 'max-w-3xl',
    contextNote: 'Standalone & Stacked Directory Rows',
    description: 'Semantic horizontal job-listing row with compensation band, expandable role brief, and bookmark state.',
  },
  {
    id: 'card-17',
    number: '17',
    componentName: 'Card17',
    title: 'Evening Symposium Pass',
    cardType: 'Event Card',
    category: 'Gallery & Events',
    style: 'dark',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Dark-mode event card with semantic time block, venue coordinates, and interactive RSVP seat toggle.',
  },
  {
    id: 'card-18',
    number: '18',
    componentName: 'Card18',
    title: 'Weekend Print Workshop',
    cardType: 'Event Card',
    category: 'Gallery & Events',
    style: 'playful',
    supports3Up: true,
    standaloneWidthClass: 'max-w-sm',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Playful workshop card with live remaining-seat counter, calendar date block, and interactive spot reservation.',
  },
  {
    id: 'card-19',
    number: '19',
    componentName: 'Card19',
    title: 'Structured Release Chronicle',
    cardType: 'Changelog Entry',
    category: 'Lists & Utility',
    style: 'editorial',
    supports3Up: false,
    standaloneWidthClass: 'max-w-3xl',
    contextNote: 'Standalone & Stacked Release Timeline',
    description: 'Editorial changelog entry with semantic time stamp, categorized release notes, and copy-summary action.',
  },
  {
    id: 'card-20',
    number: '20',
    componentName: 'Card20',
    title: 'Interactive Knowledge Accordion',
    cardType: 'FAQ Accordion Card',
    category: 'Lists & Utility',
    style: 'minimal',
    supports3Up: true,
    standaloneWidthClass: 'max-w-md',
    contextNote: 'Standalone & 3-Up Grid',
    description: 'Accessible FAQ card using native disclosure buttons with aria-expanded state and crisp divider rhythm.',
  },
];

export function filterCardSpecs(specs: CardSpec[], criteria: CardFilterCriteria): CardSpec[] {
  const normalizedQuery = criteria.query.trim().toLowerCase();

  return specs.filter((spec) => {
    if (criteria.style !== 'all' && spec.style !== criteria.style) {
      return false;
    }
    if (criteria.category !== 'all' && spec.category !== criteria.category) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const searchable = [
        spec.componentName,
        spec.title,
        spec.cardType,
        spec.category,
        spec.style,
        spec.description,
      ]
        .join(' ')
        .toLowerCase();
      return searchable.includes(normalizedQuery);
    }
    return true;
  });
}

export function countSpecsByStyle(specs: CardSpec[]): Record<CardStyle | 'all', number> {
  const counts: Record<CardStyle | 'all', number> = {
    all: specs.length,
    minimal: 0,
    editorial: 0,
    dark: 0,
    playful: 0,
  };
  for (const spec of specs) {
    counts[spec.style] += 1;
  }
  return counts;
}

export function getAvailableCategories(specs: CardSpec[]): CardCategory[] {
  const seen = new Set<CardCategory>();
  const result: CardCategory[] = [];
  for (const spec of specs) {
    if (!seen.has(spec.category)) {
      seen.add(spec.category);
      result.push(spec.category);
    }
  }
  return result;
}

export function resolveVisibleContexts(
  viewMode: ViewMode,
  supports3Up: boolean
): { showStandalone: boolean; showCollectionWrapper: boolean; collectionLabel: string } {
  const collectionLabel = supports3Up ? '3-Up Grid Wrapper' : 'Stacked Row Context';
  if (viewMode === 'standalone') {
    return { showStandalone: true, showCollectionWrapper: false, collectionLabel };
  }
  if (viewMode === 'grid') {
    return { showStandalone: false, showCollectionWrapper: true, collectionLabel };
  }
  return { showStandalone: true, showCollectionWrapper: true, collectionLabel };
}

export function formatCatalogSummary(visibleCount: number, totalCount: number): string {
  if (visibleCount === totalCount) {
    return `Showing all ${totalCount} components`;
  }
  return `Showing ${visibleCount} of ${totalCount} components`;
}
