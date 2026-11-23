export type SpecimenCategory =
  | 'Quotes & Prose'
  | 'Inline & Micro'
  | 'Callouts & Navigation'
  | 'Structure & Lists';

export interface SpecimenMeta {
  id: string;
  number: number;
  title: string;
  category: SpecimenCategory;
  semanticTags: string[];
  summary: string;
  snippet: string;
}

export const SPECIMEN_CATEGORIES: SpecimenCategory[] = [
  'Quotes & Prose',
  'Inline & Micro',
  'Callouts & Navigation',
  'Structure & Lists',
];

export function formatInitials(fullName: string): string {
  const cleaned = fullName.trim();
  if (!cleaned) {
    return '?';
  }
  const parts = cleaned
    .split(/[\s-]+/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  const first = parts[0][0] ?? '';
  const last = parts[parts.length - 1][0] ?? '';
  return `${first}${last}`.toUpperCase();
}

export function calculateReadTime(wordCount: number, wordsPerMinute = 220): number {
  if (wordCount <= 0 || wordsPerMinute <= 0) {
    return 1;
  }
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function truncatePreview(text: string, maxChars = 160): string {
  const normalized = text.trim().replace(/\s+/g, ' ');
  if (normalized.length <= maxChars) {
    return normalized;
  }
  const sliced = normalized.slice(0, maxChars);
  const lastSpace = sliced.lastIndexOf(' ');
  const cutoff = lastSpace > maxChars * 0.5 ? lastSpace : maxChars;
  return `${sliced.slice(0, cutoff).trimEnd()}…`;
}

export interface FilterCriteria {
  category?: SpecimenCategory | 'All';
  query?: string;
}

export function filterSpecimens(
  items: SpecimenMeta[],
  criteria: FilterCriteria
): SpecimenMeta[] {
  const category = criteria.category ?? 'All';
  const normalizedQuery = (criteria.query ?? '').trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    const haystack = [
      item.id,
      item.title,
      item.category,
      item.summary,
      ...item.semanticTags,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

export function getCategoryCounts(
  items: SpecimenMeta[]
): Record<SpecimenCategory | 'All', number> {
  const counts: Record<SpecimenCategory | 'All', number> = {
    All: items.length,
    'Quotes & Prose': 0,
    'Inline & Micro': 0,
    'Callouts & Navigation': 0,
    'Structure & Lists': 0,
  };

  for (const item of items) {
    counts[item.category] += 1;
  }
  return counts;
}

export const SPECIMEN_CATALOG: SpecimenMeta[] = [
  {
    id: 'Deco1',
    number: 1,
    title: 'Oversized Quote Mark Blockquote',
    category: 'Quotes & Prose',
    semanticTags: ['figure', 'blockquote', 'figcaption', 'cite'],
    summary:
      'Editorial blockquote anchored by a sculptural oversized opening quotation mark and crisp serif attribution.',
    snippet: `<Deco1
  quote="Good typography is invisible until it invites the reader to pause and linger over a sentence."
  author="Beatrice Warde"
  source="The Crystal Goblet, 1955"
/>`,
  },
  {
    id: 'Deco2',
    number: 2,
    title: 'Side-Bar & Accent Left-Border Blockquote',
    category: 'Quotes & Prose',
    semanticTags: ['figure', 'blockquote', 'cite'],
    summary:
      'Dual-track blockquote pairing an exterior marginalia side-bar label with a crisp architectural accent left-border.',
    snippet: `<Deco2
  marginLabel="Marginalia · Sec. II"
  quote="Margins are not wasted space; they are the breathing room that frames the reader’s attention."
  author="Robert Bringhurst"
  source="The Elements of Typographic Style"
/>`,
  },
  {
    id: 'Deco3',
    number: 3,
    title: 'Avatar Attribution Blockquote',
    category: 'Quotes & Prose',
    semanticTags: ['blockquote', 'footer', 'img', 'cite'],
    summary:
      'Attributed commentary featuring an editorial portrait avatar with zero-broken-image fallback, author name, and title.',
    snippet: `<Deco3
  quote="When layout proportions obey optical weight rather than rigid symmetry, prose acquires physical poise."
  author="Clara Lindqvist"
  role="Principal Type Director, Basel"
  avatarSrc="/src/assets/images/editorial_author_portrait_1795323009831.jpg"
/>`,
  },
  {
    id: 'Deco4',
    number: 4,
    title: 'Editorial Pull Quote',
    category: 'Quotes & Prose',
    semanticTags: ['aside', 'blockquote'],
    summary:
      'Wide-set italic serif pull quote suspended between horizontal hairline rules and a centered fleuron ornament.',
    snippet: `<Deco4
  quote="Every rule, fleuron, and indent exists to clarify thought—never to compete with it."
  kicker="Excerpt from Chapter IV"
/>`,
  },
  {
    id: 'Deco5',
    number: 5,
    title: 'Highlighted & Marker Text Styles',
    category: 'Inline & Micro',
    semanticTags: ['p', 'mark'],
    summary:
      'Semantic <mark> treatments in three editorial registers: warm highlighter wash, lapis underline stroke, and bracket emphasis.',
    snippet: `<Deco5 /> // Renders <mark> wash, underline-stroke, and bracket-accent prose tokens`,
  },
  {
    id: 'Deco6',
    number: 6,
    title: 'Key-Stat Inline Callouts',
    category: 'Inline & Micro',
    semanticTags: ['p', 'data', 'strong'],
    summary:
      'Inline quantitative proof woven directly into running prose using tabular numerals and contextual unit deltas.',
    snippet: `<Deco6
  statValue="68ch"
  statLabel="optimal reading measure"
  delta="+19% comprehension"
/>`,
  },
  {
    id: 'Deco7',
    number: 7,
    title: 'Definition Tooltip-Text',
    category: 'Inline & Micro',
    semanticTags: ['dfn', 'button', 'div'],
    summary:
      'Dotted-underline editorial term trigger with accessible hover, focus, and click popover definition card.',
    snippet: `<Deco7
  term="leading"
  phonetic="/ˈlɛdɪŋ/"
  definition="The vertical distance between baselines of successive lines of type, named after strips of lead."
/>`,
  },
  {
    id: 'Deco8',
    number: 8,
    title: 'Numbered Feature Ornament',
    category: 'Callouts & Navigation',
    semanticTags: ['article', 'h3', 'p'],
    summary:
      'Sculptural tabular numeral ornament paired with a hairline divider and concise editorial principle.',
    snippet: `<Deco8
  index="01"
  title="Optical Alignment"
  description="Align curved ascenders and punctuation slightly outside the grid edge so the eye perceives a straight margin."
/>`,
  },
  {
    id: 'Deco9',
    number: 9,
    title: 'Icon + Text Inline Chips',
    category: 'Inline & Micro',
    semanticTags: ['p', 'span'],
    summary:
      'Compact inline semantic chips pairing crisp stroke icons with concise contextual labels inside narrative sentences.',
    snippet: `<Deco9 /> // Inline icon+text tokens embedded seamlessly inside prose`,
  },
  {
    id: 'Deco10',
    number: 10,
    title: 'Footnote & Endnote Markers',
    category: 'Inline & Micro',
    semanticTags: ['sup', 'button', 'aside', 'ol'],
    summary:
      'Interactive numbered superscript citations linked to an expandable endnote drawer with return-to-text focus.',
    snippet: `<Deco10 /> // Interactive [1] and [2] superscript markers with synchronized endnote panel`,
  },
  {
    id: 'Deco11',
    number: 11,
    title: 'Figure Caption with Ornament',
    category: 'Callouts & Navigation',
    semanticTags: ['figure', 'img', 'figcaption'],
    summary:
      'Archival plate presentation with classic fleuron rule ornament, figure numbering, and italic provenance note.',
    snippet: `<Deco11
  figureNumber="Fig. 11"
  caption="Metal movable type and brass spacing rules on a limestone composing stone."
  credit="Archival Press Workshop"
  imageSrc="/src/assets/images/typographic_press_plate_1795323009727.jpg"
/>`,
  },
  {
    id: 'Deco12',
    number: 12,
    title: 'Pro Tip Callout Box',
    category: 'Callouts & Navigation',
    semanticTags: ['aside', 'h4', 'p'],
    summary:
      'Structured advisory callout pairing a crisp icon, explicit "Pro Tip" label, and actionable typographic guidance.',
    snippet: `<Deco12
  title="Pro Tip: Match x-height when pairing fonts"
  body="When mixing a display serif with a body sans-serif, adjust relative sizes so their lowercase x-heights align optically."
/>`,
  },
  {
    id: 'Deco13',
    number: 13,
    title: 'Warning, Note & Aside Callouts',
    category: 'Callouts & Navigation',
    semanticTags: ['aside', 'h4', 'p'],
    summary:
      'Three distinct editorial callout registers—Warning, Note, and Aside—with explicit icon + text labeling.',
    snippet: `<Deco13 /> // Switchable or stacked Warning, Note, and Editorial Aside callout boxes`,
  },
  {
    id: 'Deco14',
    number: 14,
    title: 'Read-Time & Chapter Markers',
    category: 'Callouts & Navigation',
    semanticTags: ['header', 'time', 'progress'],
    summary:
      'Editorial chapter index marker displaying section title, word-count-derived reading time, and depth progress.',
    snippet: `<Deco14
  chapter="Chapter 03"
  title="Rhythm, Measure & White Space"
  wordCount={1320}
  progressPercent={64}
/>`,
  },
  {
    id: 'Deco15',
    number: 15,
    title: 'Next Section Link Arrows',
    category: 'Callouts & Navigation',
    semanticTags: ['nav', 'a', 'span'],
    summary:
      'Directional editorial pagination link with smooth arrow translation and clear next-chapter preview.',
    snippet: `<Deco15
  directionLabel="Next Section"
  sectionIndex="Chapter 04"
  title="Grid Systems & Asymmetric Margins"
  href="#chapter-04"
/>`,
  },
  {
    id: 'Deco16',
    number: 16,
    title: 'Decorative List Markers',
    category: 'Structure & Lists',
    semanticTags: ['ul', 'li'],
    summary:
      'Four distinct semantic unordered list styles: geometric diamond bullets, checkmarks, directional arrows, and em-dashes.',
    snippet: `<Deco16 /> // Switch between Diamond Bullets, Checkmarks, Arrows, and Em-Dashes`,
  },
  {
    id: 'Deco17',
    number: 17,
    title: 'Letter-Avatar Initials',
    category: 'Structure & Lists',
    semanticTags: ['figure', 'span', 'figcaption'],
    summary:
      'Deterministic monogram avatars extracting crisp initials from full names, shown individually and as a co-author stack.',
    snippet: `<Deco17
  authors={[
    { name: "Elena Vance", role: "Lead Editor" },
    { name: "Marcus Thorne", role: "Type Foundry" },
    { name: "Sora Takahashi", role: "Layout Systems" },
  ]}
/>`,
  },
  {
    id: 'Deco18',
    number: 18,
    title: 'Truncated-Text Read More Fade',
    category: 'Structure & Lists',
    semanticTags: ['section', 'p', 'button'],
    summary:
      'Expandable long-form excerpt using a paper-matched gradient fade mask and accessible aria-expanded toggle.',
    snippet: `<Deco18
  heading="On Paper Weight and Ink Absorption"
  text="Uncoated cotton rag paper drinks ink subtly into its fibers..."
/>`,
  },
  {
    id: 'Deco19',
    number: 19,
    title: 'Code-Inline Styling',
    category: 'Inline & Micro',
    semanticTags: ['p', 'code', 'button'],
    summary:
      'Crisp inline <code> tokens set in JetBrains Mono with balanced padding, hairline framing, and click-to-copy helper.',
    snippet: `<Deco19 /> // Inline CSS property tokens with copyable syntax reference`,
  },
  {
    id: 'Deco20',
    number: 20,
    title: 'Keyboard-Key Styling (<kbd>)',
    category: 'Inline & Micro',
    semanticTags: ['p', 'kbd', 'button'],
    summary:
      'Tactile <kbd> keycaps featuring physical key bevel depth, chord separators, and interactive press demonstration.',
    snippet: `<Deco20 /> // Tactile <kbd> key chords with interactive key-press state`,
  },
];
