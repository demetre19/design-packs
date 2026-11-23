export type FooterTopology =
  | '4-Column Classic'
  | 'Mega + Newsletter'
  | 'Minimal Single-Row'
  | 'Sitemap Tree'
  | 'App Badges + Social'
  | 'Contact Details'
  | 'CTA Banner'
  | 'Logo Left + 3 Groups'
  | 'Language & Currency'
  | 'Stacked Centered';

export type FooterStyle =
  | 'Dark'
  | 'Light'
  | 'Coloured Band'
  | 'Minimal Border-Top'
  | 'Professional'
  | 'Playful';

export interface FooterCatalogItem {
  id: number;
  componentName: `Footer${number}`;
  brand: string;
  title: string;
  topology: FooterTopology;
  style: FooterStyle;
  secondaryStyle: FooterStyle;
  industry: string;
  description: string;
}

export const FOOTER_TOPOLOGIES: FooterTopology[] = [
  '4-Column Classic',
  'Mega + Newsletter',
  'Minimal Single-Row',
  'Sitemap Tree',
  'App Badges + Social',
  'Contact Details',
  'CTA Banner',
  'Logo Left + 3 Groups',
  'Language & Currency',
  'Stacked Centered',
];

export const FOOTER_STYLES: FooterStyle[] = [
  'Dark',
  'Light',
  'Coloured Band',
  'Minimal Border-Top',
  'Professional',
  'Playful',
];

export const FOOTER_CATALOG: FooterCatalogItem[] = [
  {
    id: 1,
    componentName: 'Footer1',
    brand: 'Vellum Cloud',
    title: 'Classic Four-Column Infrastructure',
    topology: '4-Column Classic',
    style: 'Dark',
    secondaryStyle: 'Professional',
    industry: 'Cloud Infrastructure',
    description: 'Deep slate canvas with geometric V letter-logo, four balanced link columns, and clean bottom legal row.',
  },
  {
    id: 2,
    componentName: 'Footer2',
    brand: 'Kestrel Press',
    title: 'Editorial Mega Newsletter Grid',
    topology: 'Mega + Newsletter',
    style: 'Light',
    secondaryStyle: 'Professional',
    industry: 'Independent Publishing',
    description: 'Validated editorial dispatch signup paired with five link columns and RSS archive links.',
  },
  {
    id: 3,
    componentName: 'Footer3',
    brand: 'Monolith Studio',
    title: 'Single-Row Hairline Studio Bar',
    topology: 'Minimal Single-Row',
    style: 'Minimal Border-Top',
    secondaryStyle: 'Light',
    industry: 'Industrial Design',
    description: 'Restrained top border separating a crisp M monogram, inline nav list, social icons, and copyright.',
  },
  {
    id: 4,
    componentName: 'Footer4',
    brand: 'Gridline Systems',
    title: 'Hierarchical Sitemap Tree',
    topology: 'Sitemap Tree',
    style: 'Dark',
    secondaryStyle: 'Professional',
    industry: 'Developer Tooling',
    description: 'Structured root-to-branch tree connectors mapping documentation, API references, and platform nodes.',
  },
  {
    id: 5,
    componentName: 'Footer5',
    brand: 'Tempo Health',
    title: 'Indigo Band with Mobile Store Badges',
    topology: 'App Badges + Social',
    style: 'Coloured Band',
    secondaryStyle: 'Professional',
    industry: 'Digital Health',
    description: 'Rich indigo surface featuring custom inline SVG App Store and Google Play badges alongside social channels.',
  },
  {
    id: 6,
    componentName: 'Footer6',
    brand: 'Harbor & Reed',
    title: 'Advisory Practice Contact Directory',
    topology: 'Contact Details',
    style: 'Professional',
    secondaryStyle: 'Light',
    industry: 'Corporate Law',
    description: 'Dedicated Zurich and New York office address column with telephone, direct email, and consultation hours.',
  },
  {
    id: 7,
    componentName: 'Footer7',
    brand: 'Arcway Robotics',
    title: 'Pre-Link Conversion CTA Header',
    topology: 'CTA Banner',
    style: 'Dark',
    secondaryStyle: 'Professional',
    industry: 'Industrial Automation',
    description: 'High-intent conversion banner with interactive demo scheduler above a four-column specification grid.',
  },
  {
    id: 8,
    componentName: 'Footer8',
    brand: 'Oslo Ceramics',
    title: 'Asymmetric Brand Manifesto & Three Groups',
    topology: 'Logo Left + 3 Groups',
    style: 'Light',
    secondaryStyle: 'Minimal Border-Top',
    industry: 'Homeware Atelier',
    description: 'Spacious left brand column with square OC emblem balanced against three tactile product and care groups.',
  },
  {
    id: 9,
    componentName: 'Footer9',
    brand: 'Ledgerflow',
    title: 'Global Fintech Locale & Currency Bar',
    topology: 'Language & Currency',
    style: 'Professional',
    secondaryStyle: 'Light',
    industry: 'Treasury Fintech',
    description: 'Interactive language and settlement currency selectors with live regional preview and compliance notes.',
  },
  {
    id: 10,
    componentName: 'Footer10',
    brand: 'Sunnydale Roasters',
    title: 'Centered Playful Coffee Club Stack',
    topology: 'Stacked Centered',
    style: 'Playful',
    secondaryStyle: 'Coloured Band',
    industry: 'Specialty Coffee',
    description: 'Warm peach-cream stack with centered emblem, horizontal nav cluster, newsletter signup, and social icons.',
  },
  {
    id: 11,
    componentName: 'Footer11',
    brand: 'Canopy Climate',
    title: 'Botanical Emerald Four-Column',
    topology: '4-Column Classic',
    style: 'Coloured Band',
    secondaryStyle: 'Professional',
    industry: 'Climate Telemetry',
    description: 'Deep forest emerald band with crisp off-white typography, four impact columns, and net-zero methodology link.',
  },
  {
    id: 12,
    componentName: 'Footer12',
    brand: 'Framecraft Video',
    title: 'Obsidian Mega Footer with Changelog',
    topology: 'Mega + Newsletter',
    style: 'Dark',
    secondaryStyle: 'Professional',
    industry: 'Video Production',
    description: 'Newsletter subscription on the left, four studio link columns, and a compact release notes digest on the right.',
  },
  {
    id: 13,
    componentName: 'Footer13',
    brand: 'Hexa Compute',
    title: 'Terminal Monospace Single-Row',
    topology: 'Minimal Single-Row',
    style: 'Minimal Border-Top',
    secondaryStyle: 'Dark',
    industry: 'Edge Compute',
    description: 'Jet black surface with top hairline rule, bracketed [H] monogram, single-line links, and region toggle.',
  },
  {
    id: 14,
    componentName: 'Footer14',
    brand: 'Pulsework HR',
    title: 'Cobalt CTA Band Over Dark Directory',
    topology: 'CTA Banner',
    style: 'Coloured Band',
    secondaryStyle: 'Dark',
    industry: 'Global Payroll',
    description: 'Electric cobalt action band bridging seamlessly into a structured dark slate workforce link matrix.',
  },
  {
    id: 15,
    componentName: 'Footer15',
    brand: 'Maison Verve',
    title: 'Luxury Editorial Centered Stack',
    topology: 'Stacked Centered',
    style: 'Minimal Border-Top',
    secondaryStyle: 'Light',
    industry: 'Fine Fragrance',
    description: 'Fraunces serif monogram, airy centered navigation list, geometric floral divider SVG, and atelier colophon.',
  },
  {
    id: 16,
    componentName: 'Footer16',
    brand: 'Northstar Logistics',
    title: 'Maritime Hubs & Direct Dispatch',
    topology: 'Contact Details',
    style: 'Dark',
    secondaryStyle: 'Professional',
    industry: 'Freight & Supply Chain',
    description: 'Deep navy enterprise footer featuring Rotterdam and Singapore port desk contacts alongside three service columns.',
  },
  {
    id: 17,
    componentName: 'Footer17',
    brand: 'MetroPay Wallet',
    title: 'App Download & SMS Link Sender',
    topology: 'App Badges + Social',
    style: 'Light',
    secondaryStyle: 'Professional',
    industry: 'Consumer Payments',
    description: 'Left download block with iOS/Android SVG badges and interactive link sender paired with three link columns.',
  },
  {
    id: 18,
    componentName: 'Footer18',
    brand: 'Zest Kitchen',
    title: 'Rounded Terracotta Trio Layout',
    topology: 'Logo Left + 3 Groups',
    style: 'Playful',
    secondaryStyle: 'Coloured Band',
    industry: 'Culinary Goods',
    description: 'Cheerful curved top edge in warm mustard-ochre with chunky ZK letter-mark and three recipe & shop columns.',
  },
  {
    id: 19,
    componentName: 'Footer19',
    brand: 'Draftboard CAD',
    title: 'Architectural Multi-Branch Sitemap',
    topology: 'Sitemap Tree',
    style: 'Light',
    secondaryStyle: 'Professional',
    industry: 'Engineering Software',
    description: 'Nested parent-child branch tree organized into Workspace, Engineering, and Governance directories.',
  },
  {
    id: 20,
    componentName: 'Footer20',
    brand: 'Forma Objects',
    title: 'Dark Commerce Locale & Payment Strip',
    topology: 'Language & Currency',
    style: 'Dark',
    secondaryStyle: 'Minimal Border-Top',
    industry: 'Object Design Store',
    description: 'Four shop columns, interactive language and currency controls, and crisp inline SVG payment card emblems.',
  },
  {
    id: 21,
    componentName: 'Footer21',
    brand: 'Broadsheet Quarterly',
    title: 'Two-Column Editorial Split & Subscribe',
    topology: 'Mega + Newsletter',
    style: 'Light',
    secondaryStyle: 'Professional',
    industry: 'Digital Magazine',
    description: 'Large editorial serif headline and reader dispatch form on the left paired with three clean archive columns.',
  },
  {
    id: 22,
    componentName: 'Footer22',
    brand: 'Kinetix Audio',
    title: 'CTA Header with Architectural Wordmark',
    topology: 'CTA Banner',
    style: 'Dark',
    secondaryStyle: 'Minimal Border-Top',
    industry: 'Acoustic Hardware',
    description: 'Listening-room booking CTA above four link columns, anchored by a full-width typographic wordmark baseline.',
  },
  {
    id: 23,
    componentName: 'Footer23',
    brand: 'Bibble Kids',
    title: 'Wavy Sky Band with Character Mark',
    topology: 'Stacked Centered',
    style: 'Playful',
    secondaryStyle: 'Coloured Band',
    industry: 'Early Education',
    description: 'Playful wavy SVG top silhouette over soft sky blue, geometric smiling emblem, newsletter form, and parent links.',
  },
  {
    id: 24,
    componentName: 'Footer24',
    brand: 'Beacon Docs',
    title: 'Searchable Four-Column Documentation',
    topology: '4-Column Classic',
    style: 'Light',
    secondaryStyle: 'Professional',
    industry: 'Knowledge Platforms',
    description: 'Includes a live inline link-filter input that narrows the four documentation and platform link columns.',
  },
  {
    id: 25,
    componentName: 'Footer25',
    brand: 'Quietude Wellness',
    title: 'Two-Row Split Minimalist Border',
    topology: 'Minimal Single-Row',
    style: 'Minimal Border-Top',
    secondaryStyle: 'Light',
    industry: 'Mindfulness & Health',
    description: 'Hairline top rule with brand and navigation above, balanced by legal links and quiet social SVG icons below.',
  },
  {
    id: 26,
    componentName: 'Footer26',
    brand: 'Forgecraft CNC',
    title: 'Industrial Plant Contact & Spec Request',
    topology: 'Contact Details',
    style: 'Dark',
    secondaryStyle: 'Professional',
    industry: 'Precision Manufacturing',
    description: 'Plant street address, direct engineering line, two capability columns, and interactive CAD spec sheet request.',
  },
  {
    id: 27,
    componentName: 'Footer27',
    brand: 'Wavelength Media',
    title: 'Aubergine Podcast App & Feed Band',
    topology: 'App Badges + Social',
    style: 'Coloured Band',
    secondaryStyle: 'Playful',
    industry: 'Audio & Podcasts',
    description: 'Deep plum band pairing iOS/Android badges and RSS/podcast feed icons with three network show columns.',
  },
  {
    id: 28,
    componentName: 'Footer28',
    brand: 'Vaultshield Security',
    title: 'Enterprise Trust & Region Matrix',
    topology: 'Language & Currency',
    style: 'Professional',
    secondaryStyle: 'Light',
    industry: 'Cybersecurity',
    description: 'Clean unboxed SOC 2 and ISO compliance strip alongside four enterprise columns and data-residency selectors.',
  },
  {
    id: 29,
    componentName: 'Footer29',
    brand: 'Pixelgarden Studio',
    title: 'Mint Botanical Centered Playful Stack',
    topology: 'Stacked Centered',
    style: 'Playful',
    secondaryStyle: 'Coloured Band',
    industry: 'Creative Tools',
    description: 'Crisp mint surface with deep pine ink, centered leaf-pixel SVG mark, two centered link rows, and social links.',
  },
  {
    id: 30,
    componentName: 'Footer30',
    brand: 'Atlas Marketplace',
    title: 'Six-Column Marketplace Directory',
    topology: '4-Column Classic',
    style: 'Light',
    secondaryStyle: 'Professional',
    industry: 'Global Commerce',
    description: 'High-density six-column taxonomy layout covering Categories, Sellers, Buyers, Trust, Developers, and Company.',
  },
  {
    id: 31,
    componentName: 'Footer31',
    brand: 'Polaris Travel',
    title: 'Split-Contrast 50/50 Light & Dark',
    topology: 'Contact Details',
    style: 'Coloured Band',
    secondaryStyle: 'Dark',
    industry: 'Boutique Expeditions',
    description: 'Dual-tone split layout pairing a light concierge & newsletter left half with an obsidian three-column right half.',
  },
  {
    id: 32,
    componentName: 'Footer32',
    brand: 'Atelier Timber',
    title: 'Commission CTA Over Logo + Three Groups',
    topology: 'CTA Banner',
    style: 'Light',
    secondaryStyle: 'Minimal Border-Top',
    industry: 'Bespoke Furniture',
    description: 'Horizontal consultation CTA header transitioning into an architectural left wordmark and three studio columns.',
  },
  {
    id: 33,
    componentName: 'Footer33',
    brand: 'Chronicle Archive',
    title: 'Four-Branch Sitemap with Top Anchor',
    topology: 'Sitemap Tree',
    style: 'Minimal Border-Top',
    secondaryStyle: 'Light',
    industry: 'Digital Preservation',
    description: 'Four structured sitemap branches with hairline tree markers and a functional Back to Top anchor button.',
  },
  {
    id: 34,
    componentName: 'Footer34',
    brand: 'Obsidian Labs',
    title: 'Matte Dark Centered Underlined Subscribe',
    topology: 'Stacked Centered',
    style: 'Dark',
    secondaryStyle: 'Minimal Border-Top',
    industry: 'AI Research Lab',
    description: 'Ultra-matte black canvas, centered geometric O monogram, underlined newsletter field, and single centered link row.',
  },
  {
    id: 35,
    componentName: 'Footer35',
    brand: 'BistroGo Delivery',
    title: 'Warm Amber App & Support Hybrid',
    topology: 'App Badges + Social',
    style: 'Coloured Band',
    secondaryStyle: 'Playful',
    industry: 'Local Food Delivery',
    description: 'Warm amber-gold band with espresso ink, courier support details, two link groups, and app download badges.',
  },
  {
    id: 36,
    componentName: 'Footer36',
    brand: 'Linearis Architecture',
    title: 'Hairline Divided Studio Grid',
    topology: 'Logo Left + 3 Groups',
    style: 'Minimal Border-Top',
    secondaryStyle: 'Professional',
    industry: 'Architectural Practice',
    description: 'Crisp vertical hairline column dividers pairing left L monogram and coordinates with three project groups.',
  },
  {
    id: 37,
    componentName: 'Footer37',
    brand: 'Bounce Studio',
    title: 'Acid Lime Brutalist Offset Grid',
    topology: 'Mega + Newsletter',
    style: 'Playful',
    secondaryStyle: 'Coloured Band',
    industry: 'Motion & Brand Agency',
    description: 'High-contrast 2px ink borders on vivid lime cream with bold BS monogram, three link columns, and newsletter form.',
  },
  {
    id: 38,
    componentName: 'Footer38',
    brand: 'Vanguard Holdings',
    title: 'Corporate Group Strip & Currency Bar',
    topology: 'Language & Currency',
    style: 'Dark',
    secondaryStyle: 'Professional',
    industry: 'Institutional Capital',
    description: 'Four institutional columns, interactive language and currency controls, and an unboxed group-companies index.',
  },
  {
    id: 39,
    componentName: 'Footer39',
    brand: 'Clearpath Care',
    title: 'Healthcare Support & Accessibility Hub',
    topology: 'Contact Details',
    style: 'Professional',
    secondaryStyle: 'Light',
    industry: 'Patient Healthcare',
    description: 'Four care columns paired with a dedicated 24/7 patient support & accessibility desk block and compliance notice.',
  },
  {
    id: 40,
    componentName: 'Footer40',
    brand: 'Novaframe Design',
    title: 'Minimal Bar with Expandable Sitemap',
    topology: 'Logo Left + 3 Groups',
    style: 'Dark',
    secondaryStyle: 'Minimal Border-Top',
    industry: 'Design Systems',
    description: 'Single-row minimal footer featuring an interactive Sitemap drawer toggle that expands four link groups on demand.',
  },
];

export interface FilterCriteria {
  topology?: FooterTopology | 'All';
  style?: FooterStyle | 'All';
  query?: string;
}

export function filterFooters(
  items: FooterCatalogItem[],
  criteria: FilterCriteria
): FooterCatalogItem[] {
  const normalizedQuery = (criteria.query ?? '').trim().toLowerCase();
  const topology = criteria.topology ?? 'All';
  const style = criteria.style ?? 'All';

  return items.filter((item) => {
    const matchesTopology = topology === 'All' || item.topology === topology;
    const matchesStyle =
      style === 'All' || item.style === style || item.secondaryStyle === style;

    if (!matchesTopology || !matchesStyle) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      item.componentName,
      item.brand,
      item.title,
      item.topology,
      item.style,
      item.secondaryStyle,
      item.industry,
      item.description,
      String(item.id),
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function validateNewsletterEmail(email: string): {
  valid: boolean;
  message: string;
} {
  const trimmed = email.trim();
  if (!trimmed) {
    return { valid: false, message: 'Please enter an email address.' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, message: 'Please enter a valid email address.' };
  }
  return { valid: true, message: 'Subscribed successfully.' };
}
