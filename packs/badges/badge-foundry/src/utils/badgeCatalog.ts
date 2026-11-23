export type BadgeCategory = 'all' | 'status' | 'ribbons' | 'stickers' | 'seals' | 'chips';

export type HostType = 'Card Corner' | 'Icon Host' | 'Inline Text';

export interface BadgeMeta {
  id: number;
  componentName: string;
  title: string;
  category: Exclude<BadgeCategory, 'all'>;
  hostType: HostType;
  svgDetail: string;
  description: string;
  keywords: string[];
}

export const BADGE_CATEGORY_LABELS: Record<BadgeCategory, string> = {
  all: 'All 20',
  status: 'Status & Indicators',
  ribbons: 'Ribbons & Flags',
  stickers: 'Stickers & Tags',
  seals: 'Seals & Awards',
  chips: 'Chips & Marks',
};

export const BADGE_CATALOG: BadgeMeta[] = [
  {
    id: 1,
    componentName: 'Badge1',
    title: 'Status Badges',
    category: 'status',
    hostType: 'Inline Text',
    svgDetail: 'Chamfered SVG corner notch & micro glyph',
    description: 'Five semantic status tokens (New, Beta, Pro, Sale, Hot) with beveled SVG geometry.',
    keywords: ['new', 'beta', 'pro', 'sale', 'hot', 'status'],
  },
  {
    id: 2,
    componentName: 'Badge2',
    title: 'Diagonal Corner Ribbon',
    category: 'ribbons',
    hostType: 'Card Corner',
    svgDetail: 'SVG 3D back-fold wrap triangles',
    description: '45° folded corner banner wrapping behind the host card edge with crisp shadow tabs.',
    keywords: ['diagonal', 'corner', 'ribbon', 'fold', 'popular'],
  },
  {
    id: 3,
    componentName: 'Badge3',
    title: 'Bookmark Corner Ribbon',
    category: 'ribbons',
    hostType: 'Card Corner',
    svgDetail: 'SVG swallowtail notch & top curl lip',
    description: 'Vertical hanging bookmark tab anchored to a top card edge with a V-cut tail.',
    keywords: ['bookmark', 'ribbon', 'swallowtail', 'editorial'],
  },
  {
    id: 4,
    componentName: 'Badge4',
    title: 'Scalloped Sticker Tag',
    category: 'stickers',
    hostType: 'Card Corner',
    svgDetail: '16-lobe scalloped SVG die-cut perimeter',
    description: 'Rotated die-cut sticker with wavy scalloped SVG boundary and inner ring.',
    keywords: ['sticker', 'rotated', 'scalloped', 'die-cut'],
  },
  {
    id: 5,
    componentName: 'Badge5',
    title: 'Taped Sticker Tag',
    category: 'stickers',
    hostType: 'Card Corner',
    svgDetail: 'SVG serrated masking tape strips',
    description: 'Tilted paper label pinned down by translucent sawtooth masking tape corners.',
    keywords: ['taped', 'sticker', 'kraft', 'tape', 'label'],
  },
  {
    id: 6,
    componentName: 'Badge6',
    title: 'Count Badge on Icon',
    category: 'status',
    hostType: 'Icon Host',
    svgDetail: 'SVG squircle contour & host ring cutout',
    description: 'Numeric counter anchored to an icon button with 99+ overflow clamping.',
    keywords: ['count', 'notification', 'icon', 'counter', '99+'],
  },
  {
    id: 7,
    componentName: 'Badge7',
    title: 'Verified / Pro Checkmark',
    category: 'chips',
    hostType: 'Inline Text',
    svgDetail: '10-point SVG rosette & checkmark path',
    description: 'Inline verification seal and Pro distinction paired with creator handles.',
    keywords: ['verified', 'pro', 'checkmark', 'rosette', 'trust'],
  },
  {
    id: 8,
    componentName: 'Badge8',
    title: 'Rank / Level Chip',
    category: 'chips',
    hostType: 'Inline Text',
    svgDetail: 'SVG hexagonal chevron frame & crest',
    description: 'Angled tier and level badge formatted with tabular numerals beside user names.',
    keywords: ['rank', 'level', 'chip', 'tier', 'chevron'],
  },
  {
    id: 9,
    componentName: 'Badge9',
    title: 'Achievement Badge',
    category: 'seals',
    hostType: 'Card Corner',
    svgDetail: 'SVG heraldic shield, bevel & laurel strokes',
    description: 'Engraved milestone shield medal mounted on a compact achievement card corner.',
    keywords: ['achievement', 'medal', 'shield', 'laurel', 'streak'],
  },
  {
    id: 10,
    componentName: 'Badge10',
    title: 'Punched Discount Tag',
    category: 'stickers',
    hostType: 'Card Corner',
    svgDetail: 'SVG ticket notches, perforation & punched eyelet',
    description: 'Die-cut ticket stub discount tag with semicircular notches and tear perforation.',
    keywords: ['discount', 'punched', 'ticket', 'stub', 'off'],
  },
  {
    id: 11,
    componentName: 'Badge11',
    title: 'Flag / Label Pin',
    category: 'ribbons',
    hostType: 'Card Corner',
    svgDetail: 'SVG pushpin dome, needle & pennant tail',
    description: 'Tactile enamel pushpin with angled pennant flag pinned to a card corner.',
    keywords: ['flag', 'pin', 'pushpin', 'pennant', 'label'],
  },
  {
    id: 12,
    componentName: 'Badge12',
    title: 'Availability Dot with Pulse',
    category: 'status',
    hostType: 'Inline Text',
    svgDetail: 'Concentric SVG ring & reduced-motion pulse',
    description: 'Live status indicator pairing concentric animated pulse rings with explicit labels.',
    keywords: ['availability', 'dot', 'pulse', 'online', 'live'],
  },
  {
    id: 13,
    componentName: 'Badge13',
    title: 'Featured Star',
    category: 'seals',
    hostType: 'Card Corner',
    svgDetail: 'SVG faceted 4-point & 8-point starburst',
    description: 'Two-tone geometric star crest highlighting curated showcase cards.',
    keywords: ['featured', 'star', 'sparkle', 'pick', 'highlight'],
  },
  {
    id: 14,
    componentName: 'Badge14',
    title: 'Percentage-Off Tag',
    category: 'stickers',
    hostType: 'Card Corner',
    svgDetail: 'SVG sawtooth edge & hang-cord eyelet',
    description: 'Serrated zig-zag retail price-drop hang tag with punched eyelet loop.',
    keywords: ['percentage', 'percent', 'off', 'sawtooth', 'price'],
  },
  {
    id: 15,
    componentName: 'Badge15',
    title: 'Category Chips',
    category: 'chips',
    hostType: 'Inline Text',
    svgDetail: 'SVG chamfered corners & crisp close glyph',
    description: 'Outlined, filled, and interactive removable taxonomy chips with restore support.',
    keywords: ['category', 'chips', 'outlined', 'filled', 'removable'],
  },
  {
    id: 16,
    componentName: 'Badge16',
    title: 'Award Seal',
    category: 'seals',
    hostType: 'Card Corner',
    svgDetail: '24-tooth SVG guilloché rosette & twin tails',
    description: 'Embossed gold/brass serrated award seal with swallowtail ribbon streamers.',
    keywords: ['award', 'seal', 'rosette', 'winner', 'gold'],
  },
  {
    id: 17,
    componentName: 'Badge17',
    title: 'Certification Mark',
    category: 'seals',
    hostType: 'Card Corner',
    svgDetail: 'Double-ring SVG calibration stamp & stars',
    description: 'Technical compliance rubber stamp emblem with concentric dashed borders.',
    keywords: ['certification', 'mark', 'stamp', 'iso', 'compliance'],
  },
  {
    id: 18,
    componentName: 'Badge18',
    title: 'As Seen In Mini-Badge',
    category: 'chips',
    hostType: 'Card Corner',
    svgDetail: 'SVG editorial bracket laurel & press mark',
    description: 'Compact press attribution strip combining a subtle laurel frame and masthead glyph.',
    keywords: ['as seen in', 'press', 'media', 'mention', 'mini'],
  },
  {
    id: 19,
    componentName: 'Badge19',
    title: 'Version Tag',
    category: 'chips',
    hostType: 'Inline Text',
    svgDetail: 'SVG pointed git-tag outline & punched hole',
    description: 'Monospace release tag with pointed luggage-tag geometry and tabular numerals.',
    keywords: ['version', 'tag', 'semver', 'release', 'git'],
  },
  {
    id: 20,
    componentName: 'Badge20',
    title: 'Flag Ribbon',
    category: 'ribbons',
    hostType: 'Card Corner',
    svgDetail: 'SVG 3D edge fold triangle & forked end',
    description: 'Wrap-around horizontal edge banner protruding past the left border with a forked tail.',
    keywords: ['flag', 'ribbon', 'banner', 'wrap', 'edition'],
  },
];

export function formatBadgeCount(count: number, max = 99): string {
  const safeCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
  const safeMax = Number.isFinite(max) ? Math.max(1, Math.floor(max)) : 99;
  if (safeCount > safeMax) {
    return `${safeMax}+`;
  }
  return String(safeCount);
}

export function filterBadges(
  badges: BadgeMeta[],
  category: BadgeCategory,
  searchQuery: string
): BadgeMeta[] {
  const q = searchQuery.trim().toLowerCase();
  return badges.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    const haystack = [
      item.componentName,
      item.title,
      item.hostType,
      item.svgDetail,
      item.description,
      ...item.keywords,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function getCategoryCounts(badges: BadgeMeta[]): Record<BadgeCategory, number> {
  const counts: Record<BadgeCategory, number> = {
    all: badges.length,
    status: 0,
    ribbons: 0,
    stickers: 0,
    seals: 0,
    chips: 0,
  };
  for (const b of badges) {
    counts[b.category] += 1;
  }
  return counts;
}
