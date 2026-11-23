export type SpecimenCategory =
  | 'all'
  | 'css-timeline'
  | 'sticky-pinned'
  | 'spatial-media'
  | 'typography-data';

export interface SpecimenMeta {
  id: number;
  code: string;
  title: string;
  category: Exclude<SpecimenCategory, 'all'>;
  categoryLabel: string;
  mechanism: string;
  summary: string;
}

export const IMAGES = {
  heroAtrium: '/src/assets/images/hero_kinetic_architecture_1795324020886.jpg',
  sculpture: '/src/assets/images/scroll_gallery_sculpture_1795324020956.jpg',
  coastalMonolith: '/src/assets/images/scroll_coastal_monolith_1795324020573.jpg',
  staircase: '/src/assets/images/scroll_staircase_geometry_1795324020241.jpg',
  pavilionShadow: '/src/assets/images/scroll_pavilion_shadow_1795324020007.jpg',
} as const;

export const SPECIMENS: SpecimenMeta[] = [
  {
    id: 1,
    code: 'Scroll1',
    title: 'Pinned Stage',
    category: 'sticky-pinned',
    categoryLabel: 'Sticky & Pinned',
    mechanism: 'position: sticky + chapter progress',
    summary: 'Viewport frame remains anchored while vertical scroll cycles through four architectural chapters.',
  },
  {
    id: 2,
    code: 'Scroll2',
    title: 'Staggered Cascade',
    category: 'css-timeline',
    categoryLabel: 'CSS Timeline',
    mechanism: 'animation-timeline: view() + IO delay',
    summary: 'Editorial plates enter along sequential scroll ranges with calibrated vertical offsets.',
  },
  {
    id: 3,
    code: 'Scroll3',
    title: 'Depth Parallax Layers',
    category: 'spatial-media',
    categoryLabel: 'Spatial & Media',
    mechanism: 'view() timeline + 3-plane Y velocity',
    summary: 'Background stone, midground horizon, and foreground typography travel at distinct scroll speeds.',
  },
  {
    id: 4,
    code: 'Scroll4',
    title: 'Section Progress Meter',
    category: 'typography-data',
    categoryLabel: 'Typography & Data',
    mechanism: 'scaleX(progress) compositor meter',
    summary: 'Dedicated per-section linear meter measuring exact traversal from entry to completion.',
  },
  {
    id: 5,
    code: 'Scroll5',
    title: 'Horizontal Track on Vertical',
    category: 'sticky-pinned',
    categoryLabel: 'Sticky & Pinned',
    mechanism: 'sticky viewport + translateX(Y)',
    summary: 'Vertical scroll input drives a continuous horizontal translation across a five-plate gallery.',
  },
  {
    id: 6,
    code: 'Scroll6',
    title: 'Scale-Down Gallery',
    category: 'spatial-media',
    categoryLabel: 'Spatial & Media',
    mechanism: 'animation-timeline: view() scale',
    summary: 'Full-width lead plate contracts cleanly into a framed monograph composition as siblings surface.',
  },
  {
    id: 7,
    code: 'Scroll7',
    title: 'Sticky Image & Scrolling Prose',
    category: 'sticky-pinned',
    categoryLabel: 'Sticky & Pinned',
    mechanism: 'sticky left plate + IntersectionObserver',
    summary: 'Paired architectural plate remains pinned beside scrolling curatorial notes that switch the view.',
  },
  {
    id: 8,
    code: 'Scroll8',
    title: 'Scroll-Triggered Counters',
    category: 'typography-data',
    categoryLabel: 'Typography & Data',
    mechanism: 'IntersectionObserver + rAF easeOutCubic',
    summary: 'Tabular architectural measurements animate smoothly on first viewport intersection.',
  },
  {
    id: 9,
    code: 'Scroll9',
    title: 'Paragraph Cadence Reveal',
    category: 'css-timeline',
    categoryLabel: 'CSS Timeline',
    mechanism: 'per-paragraph view() range',
    summary: 'Each essay paragraph fades up and sharpens independently as it enters the reading band.',
  },
  {
    id: 10,
    code: 'Scroll10',
    title: 'Circular Progress Ring',
    category: 'typography-data',
    categoryLabel: 'Typography & Data',
    mechanism: 'SVG stroke-dashoffset + scroll math',
    summary: 'Radial SVG progress dial tracks section depth alongside chapter step navigation.',
  },
  {
    id: 11,
    code: 'Scroll11',
    title: 'Mandatory Section Snap Deck',
    category: 'sticky-pinned',
    categoryLabel: 'Sticky & Pinned',
    mechanism: 'CSS scroll-snap-type: y mandatory',
    summary: 'Self-contained vertical snap viewport locking cleanly to discrete architectural plates.',
  },
  {
    id: 12,
    code: 'Scroll12',
    title: 'Scroll-Filled Display Type',
    category: 'typography-data',
    categoryLabel: 'Typography & Data',
    mechanism: 'view() background-clip gradient sweep',
    summary: 'Large display statement transitions progressively from pale stone to deep ink as you scroll.',
  },
  {
    id: 13,
    code: 'Scroll13',
    title: 'Windowed Architectural Curtain',
    category: 'spatial-media',
    categoryLabel: 'Spatial & Media',
    mechanism: 'sticky backdrop + scrolling aperture',
    summary: 'Scrolling architectural panels glide over a stationary backdrop to frame windowed apertures.',
  },
  {
    id: 14,
    code: 'Scroll14',
    title: 'Perspective Tilt Flatten',
    category: 'css-timeline',
    categoryLabel: 'CSS Timeline',
    mechanism: 'view() perspective rotateX(18deg -> 0)',
    summary: 'Folio plates rotate forward from a reclined perspective plane into upright alignment.',
  },
  {
    id: 15,
    code: 'Scroll15',
    title: 'Counter-Scroll Split Columns',
    category: 'spatial-media',
    categoryLabel: 'Spatial & Media',
    mechanism: 'opposing translateY view() timelines',
    summary: 'Left and right visual columns shear smoothly in opposite vertical directions during passage.',
  },
  {
    id: 16,
    code: 'Scroll16',
    title: 'Clip-Path Aperture Expand',
    category: 'css-timeline',
    categoryLabel: 'CSS Timeline',
    mechanism: 'view() clip-path inset() expansion',
    summary: 'Inset geometric crop widens to full architectural bleed as the plate reaches focal center.',
  },
  {
    id: 17,
    code: 'Scroll17',
    title: 'Velocity-Reactive Marquee',
    category: 'spatial-media',
    categoryLabel: 'Spatial & Media',
    mechanism: 'scrollY delta velocity + skewX',
    summary: 'Dual opposing editorial ribbons accelerate and tilt subtly in response to scroll velocity.',
  },
  {
    id: 18,
    code: 'Scroll18',
    title: 'Sticky Stacked Folio Deck',
    category: 'sticky-pinned',
    categoryLabel: 'Sticky & Pinned',
    mechanism: 'progressive sticky top offsets',
    summary: 'Sequential editorial cards dock at stepped offsets and layer cleanly over earlier plates.',
  },
  {
    id: 19,
    code: 'Scroll19',
    title: 'Timeline Spine Draw',
    category: 'typography-data',
    categoryLabel: 'Typography & Data',
    mechanism: 'SVG path draw + milestone activation',
    summary: 'Vertical architectural axis draws downward with scroll, illuminating chronological milestones.',
  },
  {
    id: 20,
    code: 'Scroll20',
    title: 'Kinetic Frame Scrubbing Stage',
    category: 'spatial-media',
    categoryLabel: 'Spatial & Media',
    mechanism: 'scroll-linked 48-frame SVG vector scrub',
    summary: 'Continuous scroll position scrubs an animated architectural geometry sequence frame by frame.',
  },
];

export const CATEGORY_TABS: { id: SpecimenCategory; label: string }[] = [
  { id: 'all', label: 'All (20)' },
  { id: 'css-timeline', label: 'CSS Timeline' },
  { id: 'sticky-pinned', label: 'Sticky & Pinned' },
  { id: 'spatial-media', label: 'Spatial & Media' },
  { id: 'typography-data', label: 'Typography & Data' },
];

export function filterSpecimens(
  specimens: SpecimenMeta[],
  category: SpecimenCategory,
): SpecimenMeta[] {
  if (category === 'all') return specimens;
  return specimens.filter((item) => item.category === category);
}
