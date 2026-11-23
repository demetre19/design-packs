export type ProofCategory =
  | 'Logo Clouds'
  | 'Testimonials'
  | 'Ratings'
  | 'Reviews'
  | 'Case Studies'
  | 'Stats'
  | 'Press';

export type ProofStyle = 'Minimal' | 'Dark' | 'Colourful' | 'Editorial';

export interface ProofCatalogItem {
  id: number;
  componentName: `Proof${number}`;
  title: string;
  category: ProofCategory;
  style: ProofStyle;
  layoutVariant: string;
  description: string;
  usageSnippet: string;
}

export interface RatingTierSummary {
  stars: 5 | 4 | 3 | 2 | 1;
  count: number;
  percentage: number;
}

export interface RatingBreakdownResult {
  totalReviews: number;
  averageRating: string;
  tiers: RatingTierSummary[];
}

export const PROOF_CATEGORIES: readonly ProofCategory[] = [
  'Logo Clouds',
  'Testimonials',
  'Ratings',
  'Reviews',
  'Case Studies',
  'Stats',
  'Press',
] as const;

export const PROOF_STYLES: readonly ProofStyle[] = [
  'Minimal',
  'Dark',
  'Colourful',
  'Editorial',
] as const;

export const PROOF_CATALOG: readonly ProofCatalogItem[] = [
  {
    id: 1,
    componentName: 'Proof1',
    title: 'Two-Row Architectural Logo Cloud',
    category: 'Logo Clouds',
    style: 'Minimal',
    layoutVariant: '2-Row Grid',
    description:
      'Crisp monochrome 10-brand grid divided into two balanced 5-column rows with hairline separators and inline SVG emblems.',
    usageSnippet: `import { Proof1 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof1 />;\n}`,
  },
  {
    id: 2,
    componentName: 'Proof2',
    title: 'Dual-Track Marquee Logo Strip',
    category: 'Logo Clouds',
    style: 'Dark',
    layoutVariant: 'Marquee-Style',
    description:
      'Deep obsidian double-row marquee scrolling in opposing directions with edge vignette fades and an accessible motion pause toggle.',
    usageSnippet: `import { Proof2 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof2 />;\n}`,
  },
  {
    id: 3,
    componentName: 'Proof3',
    title: 'Tinted Studio Partner Grid',
    category: 'Logo Clouds',
    style: 'Colourful',
    layoutVariant: '4x2 Cell Grid',
    description:
      'Cobalt-tinted 4x2 bordered grid pairing distinct saturated inline SVG brand marks with real deployment scale notes.',
    usageSnippet: `import { Proof3 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof3 />;\n}`,
  },
  {
    id: 4,
    componentName: 'Proof4',
    title: 'Broadsheet 2-Column Customer Essays',
    category: 'Testimonials',
    style: 'Editorial',
    layoutVariant: '2-Column Grid',
    description:
      'Archival warm-paper two-column testimonial layout with serif pull-quotes, crisp hairline rules, and custom SVG ink portraits.',
    usageSnippet: `import { Proof4 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof4 />;\n}`,
  },
  {
    id: 5,
    componentName: 'Proof5',
    title: 'Obsidian 3-Column Bento Testimonials',
    category: 'Testimonials',
    style: 'Dark',
    layoutVariant: '3-Column Grid',
    description:
      'Charcoal 3-column customer grid featuring verified outcomes, tabular star ratings, and dark-backdrop inline SVG avatars.',
    usageSnippet: `import { Proof5 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof5 />;\n}`,
  },
  {
    id: 6,
    componentName: 'Proof6',
    title: 'Multi-Hue Masonry Testimonial Wall',
    category: 'Testimonials',
    style: 'Colourful',
    layoutVariant: 'Masonry-Feel',
    description:
      'Staggered multi-column masonry flow with curated pastel-tint surfaces, high-contrast ink typography, and varied quote cadence.',
    usageSnippet: `import { Proof6 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof6 />;\n}`,
  },
  {
    id: 7,
    componentName: 'Proof7',
    title: 'Monumental Serif Quote Spotlight',
    category: 'Testimonials',
    style: 'Editorial',
    layoutVariant: 'Single Big-Quote',
    description:
      'Centered archival editorial spotlight with oversized serif quotation marks, generous paper margins, and illustrated SVG portrait.',
    usageSnippet: `import { Proof7 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof7 />;\n}`,
  },
  {
    id: 8,
    componentName: 'Proof8',
    title: 'Midnight Asymmetric Executive Quote',
    category: 'Testimonials',
    style: 'Dark',
    layoutVariant: 'Split Big-Quote',
    description:
      '12-column midnight split featuring a large framed geometric SVG portrait and metric callout beside an executive endorsement.',
    usageSnippet: `import { Proof8 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof8 />;\n}`,
  },
  {
    id: 9,
    componentName: 'Proof9',
    title: 'Emerald & Lime Studio Quote Block',
    category: 'Testimonials',
    style: 'Colourful',
    layoutVariant: 'Single Big-Quote',
    description:
      'Rich forest-emerald canvas accented with electric lime quotation marks, crisp white typography, and inline SVG avatar badge.',
    usageSnippet: `import { Proof9 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof9 />;\n}`,
  },
  {
    id: 10,
    componentName: 'Proof10',
    title: 'Minimal Aggregate Rating Breakdown',
    category: 'Ratings',
    style: 'Minimal',
    layoutVariant: 'Stars + Bars',
    description:
      'Two-zone rating summary combining a 4.9/5.0 tabular score, inline SVG star vector row, and five proportional breakdown bars.',
    usageSnippet: `import { Proof10 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof10 />;\n}`,
  },
  {
    id: 11,
    componentName: 'Proof11',
    title: 'Dark Multi-Axis Rating Scorecard',
    category: 'Ratings',
    style: 'Dark',
    layoutVariant: 'Breakdown + Dimensions',
    description:
      'Dark-surface scorecard pairing overall review distribution bars with interactive category tabs for Reliability, Speed, and Support.',
    usageSnippet: `import { Proof11 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof11 />;\n}`,
  },
  {
    id: 12,
    componentName: 'Proof12',
    title: 'Verified Platform Review Trio',
    category: 'Reviews',
    style: 'Minimal',
    layoutVariant: 'Source Cards',
    description:
      'Clean white review cards displaying inline SVG source emblems for G2, Trustpilot, and Capterra alongside verified reviewer notes.',
    usageSnippet: `import { Proof12 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof12 />;\n}`,
  },
  {
    id: 13,
    componentName: 'Proof13',
    title: 'Vivid Social & App Store Reviews',
    category: 'Reviews',
    style: 'Colourful',
    layoutVariant: 'Source Cards',
    description:
      'Soft violet-tinted section showcasing Product Hunt, App Store, and Chrome Store review cards with brand-accurate SVG marks.',
    usageSnippet: `import { Proof13 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof13 />;\n}`,
  },
  {
    id: 14,
    componentName: 'Proof14',
    title: 'Developer & Enterprise Review Feed',
    category: 'Reviews',
    style: 'Dark',
    layoutVariant: 'Source Cards',
    description:
      'High-contrast dark engineering review grid featuring GitHub, G2 Enterprise, and PeerSpot source badges with crisp tabular dates.',
    usageSnippet: `import { Proof14 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof14 />;\n}`,
  },
  {
    id: 15,
    componentName: 'Proof15',
    title: 'Minimal Case-Study Teaser Grid',
    category: 'Case Studies',
    style: 'Minimal',
    layoutVariant: '3-Card Teaser',
    description:
      'Three structured case-study cards with inline SVG architectural diagrams, quantified KPI gains, and interactive brief drawers.',
    usageSnippet: `import { Proof15 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof15 />;\n}`,
  },
  {
    id: 16,
    componentName: 'Proof16',
    title: 'Editorial Asymmetric Case-Study Folio',
    category: 'Case Studies',
    style: 'Editorial',
    layoutVariant: 'Lead + 2 Studies',
    description:
      'Broadsheet-inspired case study feature pairing a dominant lead monograph with two secondary customer transformation briefs.',
    usageSnippet: `import { Proof16 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof16 />;\n}`,
  },
  {
    id: 17,
    componentName: 'Proof17',
    title: 'Four-Column Tabular Metrics Band',
    category: 'Stats',
    layoutVariant: '4-Number Band',
    style: 'Minimal',
    description:
      'Architectural off-white metrics band divided by hairline rules displaying four tabular figures with explicit measurement periods.',
    usageSnippet: `import { Proof17 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof17 />;\n}`,
  },
  {
    id: 18,
    componentName: 'Proof18',
    title: 'Cobalt High-Impact Impact Strip',
    category: 'Stats',
    style: 'Colourful',
    layoutVariant: '4-Number Band',
    description:
      'Full-bleed royal cobalt statistics band featuring four crisp white figures, sky-blue sublabels, and geometric SVG index marks.',
    usageSnippet: `import { Proof18 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof18 />;\n}`,
  },
  {
    id: 19,
    componentName: 'Proof19',
    title: 'Editorial Press & Masthead Strip',
    category: 'Press',
    style: 'Editorial',
    layoutVariant: 'Interactive Press Bar',
    description:
      'Interactive newspaper masthead strip allowing visitors to select between five publication SVG wordmarks and inspect the press excerpt.',
    usageSnippet: `import { Proof19 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof19 />;\n}`,
  },
  {
    id: 20,
    componentName: 'Proof20',
    title: 'Dark Monochrome Featured-In Bar',
    category: 'Press',
    style: 'Dark',
    layoutVariant: 'Featured-In Strip',
    description:
      'Sleek dark press recognition strip pairing five custom publication SVG mastheads with direct editorial headline citations.',
    usageSnippet: `import { Proof20 } from './components/proofs';\n\nexport default function Page() {\n  return <Proof20 />;\n}`,
  },
] as const;

export interface CatalogFilterOptions {
  category?: ProofCategory | 'All';
  style?: ProofStyle | 'All';
  query?: string;
}

export function filterProofCatalog(
  items: readonly ProofCatalogItem[],
  options: CatalogFilterOptions
): ProofCatalogItem[] {
  const { category = 'All', style = 'All', query = '' } = options;
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    if (category !== 'All' && item.category !== category) {
      return false;
    }
    if (style !== 'All' && item.style !== style) {
      return false;
    }
    if (normalizedQuery.length > 0) {
      const haystack = [
        item.componentName,
        item.title,
        item.category,
        item.style,
        item.layoutVariant,
        item.description,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });
}

export function computeCatalogCounts(items: readonly ProofCatalogItem[]): {
  total: number;
  byCategory: Record<ProofCategory, number>;
  byStyle: Record<ProofStyle, number>;
} {
  const byCategory: Record<ProofCategory, number> = {
    'Logo Clouds': 0,
    Testimonials: 0,
    Ratings: 0,
    Reviews: 0,
    'Case Studies': 0,
    Stats: 0,
    Press: 0,
  };

  const byStyle: Record<ProofStyle, number> = {
    Minimal: 0,
    Dark: 0,
    Colourful: 0,
    Editorial: 0,
  };

  for (const item of items) {
    byCategory[item.category] += 1;
    byStyle[item.style] += 1;
  }

  return {
    total: items.length,
    byCategory,
    byStyle,
  };
}

export function calculateRatingBreakdown(
  counts: Record<5 | 4 | 3 | 2 | 1, number>
): RatingBreakdownResult {
  const starKeys: readonly (5 | 4 | 3 | 2 | 1)[] = [5, 4, 3, 2, 1];
  let totalReviews = 0;
  let weightedSum = 0;

  for (const star of starKeys) {
    const safeCount = Math.max(0, Math.floor(counts[star] ?? 0));
    totalReviews += safeCount;
    weightedSum += star * safeCount;
  }

  const average = totalReviews > 0 ? (weightedSum / totalReviews).toFixed(1) : '0.0';

  const tiers: RatingTierSummary[] = starKeys.map((star) => {
    const safeCount = Math.max(0, Math.floor(counts[star] ?? 0));
    const percentage =
      totalReviews > 0 ? Math.round((safeCount / totalReviews) * 100) : 0;
    return {
      stars: star,
      count: safeCount,
      percentage,
    };
  });

  return {
    totalReviews,
    averageRating: average,
    tiers,
  };
}
