export type StateCategory = 'Confirmation' | 'Feedback' | 'Transitions' | 'Commerce';

export type FilterTab = 'All' | StateCategory;

export interface StateSpec {
  id: number;
  componentName: `State${number}`;
  title: string;
  category: StateCategory;
  mechanism: string;
  timing: string;
  summary: string;
  keywords: string[];
}

export const STATE_CATEGORIES: FilterTab[] = [
  'All',
  'Confirmation',
  'Feedback',
  'Transitions',
  'Commerce',
];

export const STATES_CATALOG: StateSpec[] = [
  {
    id: 1,
    componentName: 'State1',
    title: 'Checkmark Draw',
    category: 'Confirmation',
    mechanism: 'SVG stroke-dashoffset',
    timing: '420ms · ease-out',
    summary: 'Sequential circle and checkmark path drawing via SVG stroke offsets.',
    keywords: ['svg', 'check', 'stroke', 'dashoffset', 'success'],
  },
  {
    id: 2,
    componentName: 'State2',
    title: 'Confetti Burst',
    category: 'Confirmation',
    mechanism: 'CSS particle explosion',
    timing: '560ms · spring settle',
    summary: 'Geometric confetti shards radiating outward and holding mid-burst.',
    keywords: ['confetti', 'particles', 'burst', 'celebration', 'explosion'],
  },
  {
    id: 3,
    componentName: 'State3',
    title: 'Toast Slide & Stack',
    category: 'Feedback',
    mechanism: 'Layered Y-offset & scale',
    timing: '340ms · spring-stack',
    summary: 'Three stacked notification cards compressed cleanly by depth index.',
    keywords: ['toast', 'notification', 'stack', 'slide', 'queue'],
  },
  {
    id: 4,
    componentName: 'State4',
    title: 'Page Transition Wipe',
    category: 'Transitions',
    mechanism: 'Diagonal clip-path reveal',
    timing: '520ms · ease-out',
    summary: 'Crisp diagonal curtain sweep revealing the published view over draft.',
    keywords: ['wipe', 'curtain', 'diagonal', 'page', 'reveal', 'clip-path'],
  },
  {
    id: 5,
    componentName: 'State5',
    title: 'Progress Ring 100%',
    category: 'Confirmation',
    mechanism: 'Radial ring + center check',
    timing: '680ms · tabular-nums',
    summary: 'Circular upload arc closing at 100% and locking into a checkmark.',
    keywords: ['progress', 'ring', '100%', 'circle', 'check'],
  },
  {
    id: 6,
    componentName: 'State6',
    title: 'Button Success Pulse',
    category: 'Confirmation',
    mechanism: 'Concentric pulse rings',
    timing: '480ms · dual ring wave',
    summary: 'Confirmed action button radiating twin emerald pulse rings outward.',
    keywords: ['button', 'pulse', 'ripple', 'saved', 'click'],
  },
  {
    id: 7,
    componentName: 'State7',
    title: 'Error Shake & Flash',
    category: 'Feedback',
    mechanism: 'Horizontal oscillation + flash',
    timing: '420ms · keyframe decay',
    summary: 'Damped horizontal shake paired with a crimson surface flash and alert.',
    keywords: ['error', 'shake', 'red', 'flash', 'validation'],
  },
  {
    id: 8,
    componentName: 'State8',
    title: 'Loading to Check Morph',
    category: 'Transitions',
    mechanism: 'Spinner-to-badge morph',
    timing: '360ms · scale crossfade',
    summary: 'Spinning progress arc compressing cleanly into a verified check capsule.',
    keywords: ['loading', 'spinner', 'morph', 'check', 'transition'],
  },
  {
    id: 9,
    componentName: 'State9',
    title: 'Cart-Add Parabolic Fly',
    category: 'Commerce',
    mechanism: 'Quadratic arc trajectory',
    timing: '580ms · X/Y decoupled',
    summary: 'Product thumbnail arcing into the cart icon while incrementing count.',
    keywords: ['cart', 'fly', 'arc', 'ecommerce', 'add'],
  },
  {
    id: 10,
    componentName: 'State10',
    title: 'Form Submit Celebration',
    category: 'Commerce',
    mechanism: 'State swap + spark halo',
    timing: '460ms · card reveal',
    summary: 'Submitted form transitioning into a stamped confirmation summary.',
    keywords: ['form', 'submit', 'celebration', 'confirmed', 'receipt'],
  },
  {
    id: 11,
    componentName: 'State11',
    title: 'Step-Complete Markers',
    category: 'Transitions',
    mechanism: 'Sequential node cascade',
    timing: '140ms · per-step stagger',
    summary: 'Four-stage stepper with filled track connectors and checked nodes.',
    keywords: ['stepper', 'steps', 'markers', 'wizard', 'complete'],
  },
  {
    id: 12,
    componentName: 'State12',
    title: 'Skeleton Crossfade',
    category: 'Transitions',
    mechanism: 'Shimmer to content fade',
    timing: '280ms · opacity crossfade',
    summary: 'Shimmering wireframe placeholders resolving into populated profile data.',
    keywords: ['skeleton', 'shimmer', 'crossfade', 'loading', 'content'],
  },
  {
    id: 13,
    componentName: 'State13',
    title: 'Badge Scale Overshoot',
    category: 'Feedback',
    mechanism: 'Spring overshoot pop',
    timing: '420ms · spring-overshoot',
    summary: 'Unread counter badge popping past 1.25x scale before settling crisp.',
    keywords: ['badge', 'pop', 'overshoot', 'scale', 'notification'],
  },
  {
    id: 14,
    componentName: 'State14',
    title: 'Undo Countdown Toast',
    category: 'Feedback',
    mechanism: 'Linear decay progress bar',
    timing: '3500ms · live countdown',
    summary: 'Action toast with live Undo trigger and visible remaining-time bar.',
    keywords: ['undo', 'toast', 'countdown', 'timer', 'bar'],
  },
  {
    id: 15,
    componentName: 'State15',
    title: 'Download Complete Ring',
    category: 'Confirmation',
    mechanism: 'Ring lock + arrow swap',
    timing: '540ms · stroke close',
    summary: 'File download row resolved with closed completion ring and check.',
    keywords: ['download', 'ring', 'complete', 'file', 'check'],
  },
  {
    id: 16,
    componentName: 'State16',
    title: 'Bookmark Fill Sweep',
    category: 'Commerce',
    mechanism: 'Vertical fill + spring lift',
    timing: '380ms · clip reveal',
    summary: 'Saved bookmark ribbon sweeping upward from outline to solid ink.',
    keywords: ['bookmark', 'save', 'fill', 'ribbon', 'collection'],
  },
  {
    id: 17,
    componentName: 'State17',
    title: 'Like Heart Burst',
    category: 'Feedback',
    mechanism: 'Radial dots + heart bounce',
    timing: '400ms · 8-point burst',
    summary: 'Liked heart popping with eight radial particles and expanding ring.',
    keywords: ['like', 'heart', 'burst', 'favorite', 'particles'],
  },
  {
    id: 18,
    componentName: 'State18',
    title: 'Rating Stars Cascade',
    category: 'Commerce',
    mechanism: 'Staggered star wave',
    timing: '55ms · sequential delay',
    summary: 'Five rating stars cascading in sequence with crisp scale settle.',
    keywords: ['rating', 'stars', 'cascade', 'review', 'score'],
  },
  {
    id: 19,
    componentName: 'State19',
    title: 'Clipboard Copy Ripple',
    category: 'Confirmation',
    mechanism: 'Dual button ripple + swap',
    timing: '460ms · radial wave',
    summary: 'Copy command bar showing dual confirmation ripples and Copied state.',
    keywords: ['clipboard', 'copy', 'ripple', 'snippet', 'copied'],
  },
  {
    id: 20,
    componentName: 'State20',
    title: 'Upload Verified Dropzone',
    category: 'Confirmation',
    mechanism: 'Progress seal + border lock',
    timing: '480ms · verified stamp',
    summary: 'Dropzone sealed at 100% upload with verified file checksum state.',
    keywords: ['upload', 'dropzone', 'verified', 'file', 'complete'],
  },
];

export function filterStates(
  states: StateSpec[],
  category: FilterTab,
  query: string,
): StateSpec[] {
  const normalizedQuery = query.trim().toLowerCase();
  return states.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    const haystack = [
      String(item.id),
      item.componentName.toLowerCase(),
      item.title.toLowerCase(),
      item.category.toLowerCase(),
      item.mechanism.toLowerCase(),
      item.summary.toLowerCase(),
      ...item.keywords,
    ].join(' ');
    return haystack.includes(normalizedQuery);
  });
}

export function getCategoryCounts(states: StateSpec[]): Record<FilterTab, number> {
  const counts: Record<FilterTab, number> = {
    All: states.length,
    Confirmation: 0,
    Feedback: 0,
    Transitions: 0,
    Commerce: 0,
  };
  for (const state of states) {
    counts[state.category] += 1;
  }
  return counts;
}

export function computeRingStrokeOffset(circumference: number, progressPercent: number): number {
  const clamped = Math.max(0, Math.min(100, progressPercent));
  return Number((circumference * (1 - clamped / 100)).toFixed(2));
}

export function computeStarCascadeDelay(starIndex: number, stepMs = 55): number {
  const safeIndex = Math.max(0, starIndex);
  return safeIndex * stepMs;
}

export function clampCountdownRatio(remainingMs: number, totalMs: number): number {
  if (totalMs <= 0) return 0;
  return Math.max(0, Math.min(1, remainingMs / totalMs));
}
