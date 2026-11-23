export type HeroStyle = 'minimal' | 'bold' | 'dark' | 'warm-editorial';

export type HeroPattern =
  | 'centered'
  | 'split'
  | 'gradient'
  | 'stats'
  | 'logo-cloud'
  | 'video'
  | 'text-only'
  | 'announcement'
  | 'email-capture'
  | 'editorial';

export interface HeroMetadata {
  id: string;
  number: number;
  name: string;
  brand: string;
  pattern: HeroPattern;
  patternLabel: string;
  style: HeroStyle;
  styleLabel: string;
  summary: string;
}

export const STYLE_OPTIONS: ReadonlyArray<{ id: 'all' | HeroStyle; label: string }> = [
  { id: 'all', label: 'All Styles' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'bold', label: 'Bold' },
  { id: 'dark', label: 'Dark' },
  { id: 'warm-editorial', label: 'Warm Editorial' },
];

export const PATTERN_OPTIONS: ReadonlyArray<{ id: 'all' | HeroPattern; label: string }> = [
  { id: 'all', label: 'All Patterns' },
  { id: 'centered', label: 'Centered + CTA' },
  { id: 'split', label: 'Split Visual' },
  { id: 'gradient', label: 'Full-Bleed Gradient' },
  { id: 'stats', label: 'Stats Row' },
  { id: 'logo-cloud', label: 'Logo Cloud' },
  { id: 'video', label: 'Video Block' },
  { id: 'text-only', label: 'Text-Only' },
  { id: 'announcement', label: 'Announcement Bar' },
  { id: 'email-capture', label: 'Email Capture' },
  { id: 'editorial', label: 'Editorial Magazine' },
];

export const HERO_META: ReadonlyArray<HeroMetadata> = [
  {
    id: 'hero-1',
    number: 1,
    name: 'Hero1',
    brand: 'Meridian Ledger',
    pattern: 'centered',
    patternLabel: 'Centered Headline + CTA',
    style: 'minimal',
    styleLabel: 'Minimal',
    summary: 'Architectural hairline grid backdrop with centered treasury proposition and dual action row.',
  },
  {
    id: 'hero-2',
    number: 2,
    name: 'Hero2',
    brand: 'Kestrel Studio',
    pattern: 'split',
    patternLabel: 'Split Copy + Visual',
    style: 'minimal',
    styleLabel: 'Minimal',
    summary: 'Twelve-column split pairing acoustic studio copy left with full-height architectural photography right.',
  },
  {
    id: 'hero-3',
    number: 3,
    brand: 'Vespera Cloud',
    name: 'Hero3',
    pattern: 'gradient',
    patternLabel: 'Full-Bleed Gradient',
    style: 'dark',
    styleLabel: 'Dark',
    summary: 'Obsidian full-bleed radial gradient canvas with edge compute proposition and one-click CLI copy.',
  },
  {
    id: 'hero-4',
    number: 4,
    name: 'Hero4',
    brand: 'Harborline Logistics',
    pattern: 'stats',
    patternLabel: 'Hero + Stats Row',
    style: 'minimal',
    styleLabel: 'Minimal',
    summary: 'Cold-chain freight header anchored by a four-column tabular KPI strip along the baseline.',
  },
  {
    id: 'hero-5',
    number: 5,
    name: 'Hero5',
    brand: 'Sable Procurement',
    pattern: 'logo-cloud',
    patternLabel: 'Hero + Logo Cloud',
    style: 'minimal',
    styleLabel: 'Minimal',
    summary: 'Enterprise governance hero with monochrome partner wordmark strip below a 1px divider.',
  },
  {
    id: 'hero-6',
    number: 6,
    name: 'Hero6',
    brand: 'Monolith Audio',
    pattern: 'video',
    patternLabel: 'Video-Style Play Block',
    style: 'dark',
    styleLabel: 'Dark',
    summary: 'Dark studio mastering showcase featuring an interactive 16:9 reel player block and play trigger.',
  },
  {
    id: 'hero-7',
    number: 7,
    name: 'Hero7',
    brand: 'Alder & Reed',
    pattern: 'text-only',
    patternLabel: 'Minimal Text-Only',
    style: 'minimal',
    styleLabel: 'Minimal',
    summary: 'Swiss typographic restraint using pure display scale, baseline rules, and unboxed counsel CTA.',
  },
  {
    id: 'hero-8',
    number: 8,
    name: 'Hero8',
    brand: 'Foundry Grid',
    pattern: 'announcement',
    patternLabel: 'Announcement + Hero',
    style: 'bold',
    styleLabel: 'Bold',
    summary: 'Dismissible release ribbon over high-contrast condensed typography and kinetic primary action.',
  },
  {
    id: 'hero-9',
    number: 9,
    name: 'Hero9',
    brand: 'Fieldwork Dispatch',
    pattern: 'email-capture',
    patternLabel: 'Email Capture Hero',
    style: 'warm-editorial',
    styleLabel: 'Warm Editorial',
    summary: 'Warm archival paper essay dispatch with validated inline newsletter subscription form.',
  },
  {
    id: 'hero-10',
    number: 10,
    name: 'Hero10',
    brand: 'The Quarto Review',
    pattern: 'editorial',
    patternLabel: 'Editorial Magazine',
    style: 'warm-editorial',
    styleLabel: 'Warm Editorial',
    summary: 'Broadsheet masthead and asymmetric lead feature pairing serif typography with limestone colonnade photography.',
  },
  {
    id: 'hero-11',
    number: 11,
    name: 'Hero11',
    brand: 'Chronicle Telemetry',
    pattern: 'centered',
    patternLabel: 'Centered + Frame',
    style: 'dark',
    styleLabel: 'Dark',
    summary: 'Deep slate centered proposition elevated above a structured live-telemetry vector panel.',
  },
  {
    id: 'hero-12',
    number: 12,
    name: 'Hero12',
    brand: 'Voltline Mobility',
    pattern: 'split',
    patternLabel: 'Split + Waitlist Form',
    style: 'bold',
    styleLabel: 'Bold',
    summary: 'High-contrast split layout combining bold condensed headline, waitlist email form, and dusk EV photography.',
  },
  {
    id: 'hero-13',
    number: 13,
    name: 'Hero13',
    brand: 'Northstar Maritime',
    pattern: 'gradient',
    patternLabel: 'Full-Bleed Scrim',
    style: 'dark',
    styleLabel: 'Dark',
    summary: 'Edge-to-edge architectural dusk scene with measured directional contrast scrim and bottom-left anchor.',
  },
  {
    id: 'hero-14',
    number: 14,
    name: 'Hero14',
    brand: 'Atelier Verve',
    pattern: 'stats',
    patternLabel: 'Editorial Split + Stats',
    style: 'warm-editorial',
    styleLabel: 'Warm Editorial',
    summary: 'Travertine apothecary showcase pairing serif narrative, ceramic still life, and provenance metrics.',
  },
  {
    id: 'hero-15',
    number: 15,
    name: 'Hero15',
    brand: 'Kinetic Press',
    pattern: 'announcement',
    patternLabel: 'Poster + Announcement',
    style: 'bold',
    styleLabel: 'Bold',
    summary: 'Vermilion exhibition strip and oversized poster specimen display for an independent type lab.',
  },
  {
    id: 'hero-16',
    number: 16,
    name: 'Hero16',
    brand: 'Loomworks Robotics',
    pattern: 'video',
    patternLabel: 'Split Video Reel',
    style: 'minimal',
    styleLabel: 'Minimal',
    summary: 'Crisp industrial split pairing precision robotics copy with an interactive 16:9 facility walkthrough reel.',
  },
  {
    id: 'hero-17',
    number: 17,
    name: 'Hero17',
    brand: 'Commonplace Books',
    pattern: 'text-only',
    patternLabel: 'Editorial Text-Only',
    style: 'warm-editorial',
    styleLabel: 'Warm Editorial',
    summary: 'Pure typographic monograph manifesto set on warm linen paper with two-column prose and edition index.',
  },
  {
    id: 'hero-18',
    number: 18,
    name: 'Hero18',
    brand: 'Bastion Custody',
    pattern: 'logo-cloud',
    patternLabel: 'Dark Split + Logos',
    style: 'dark',
    styleLabel: 'Dark',
    summary: 'Zero-trust infrastructure split with vector hardware diagram and monochrome institutional logo cloud.',
  },
  {
    id: 'hero-19',
    number: 19,
    name: 'Hero19',
    brand: 'Apex Athletics',
    pattern: 'gradient',
    patternLabel: 'Bold Gradient + Stats',
    style: 'bold',
    styleLabel: 'Bold',
    summary: 'Deep cobalt-to-midnight gradient canvas with condensed biomechanics headline and four-metric bar.',
  },
  {
    id: 'hero-20',
    number: 20,
    name: 'Hero20',
    brand: 'Halcyon Almanac',
    pattern: 'editorial',
    patternLabel: 'Broadsheet + Dispatch',
    style: 'warm-editorial',
    styleLabel: 'Warm Editorial',
    summary: 'Three-column editorial front page uniting lead cultural essay, photography, and sidebar email signup.',
  },
];

export function filterHeroes(
  heroes: ReadonlyArray<HeroMetadata>,
  options: {
    style?: 'all' | HeroStyle;
    pattern?: 'all' | HeroPattern;
    query?: string;
  }
): HeroMetadata[] {
  const style = options.style ?? 'all';
  const pattern = options.pattern ?? 'all';
  const query = (options.query ?? '').trim().toLowerCase();

  return heroes.filter((hero) => {
    if (style !== 'all' && hero.style !== style) {
      return false;
    }
    if (pattern !== 'all' && hero.pattern !== pattern) {
      return false;
    }
    if (query.length > 0) {
      const haystack = `${hero.name} ${hero.brand} ${hero.patternLabel} ${hero.styleLabel} ${hero.summary}`.toLowerCase();
      return haystack.includes(query);
    }
    return true;
  });
}

export function validateEmailAddress(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Please enter an email address.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return 'Enter a valid email address (for example, name@company.com).';
  }
  return null;
}
