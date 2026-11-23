export type MorphCategory = 'all' | 'surfaces' | 'icons' | 'controls' | 'feedback';

export type MorphId =
  | 'morph1'
  | 'morph2'
  | 'morph3'
  | 'morph4'
  | 'morph5'
  | 'morph6'
  | 'morph7'
  | 'morph8'
  | 'morph9'
  | 'morph10'
  | 'morph11'
  | 'morph12'
  | 'morph13'
  | 'morph14'
  | 'morph15'
  | 'morph16'
  | 'morph17'
  | 'morph18'
  | 'morph19'
  | 'morph20';

export interface MorphSpec {
  id: MorphId;
  index: number;
  name: string;
  category: Exclude<MorphCategory, 'all'>;
  mechanism: string;
  endStateLabel: string;
  restStateLabel: string;
}

export const CATEGORY_LABELS: Record<MorphCategory, string> = {
  all: 'All Studies',
  surfaces: 'Surfaces',
  icons: 'Icons',
  controls: 'Controls',
  feedback: 'Feedback',
};

export const MORPH_SPECS: MorphSpec[] = [
  {
    id: 'morph1',
    index: 1,
    name: 'Button to Menu',
    category: 'surfaces',
    mechanism: 'Expands trigger footprint into anchored dropdown surface',
    endStateLabel: 'Menu Open',
    restStateLabel: 'Compact Button',
  },
  {
    id: 'morph2',
    index: 2,
    name: 'Button to Modal',
    category: 'surfaces',
    mechanism: 'Scales action button smoothly into scoped dialog container',
    endStateLabel: 'Dialog Open',
    restStateLabel: 'Trigger Button',
  },
  {
    id: 'morph3',
    index: 3,
    name: 'FAB Actions Fan-Out',
    category: 'surfaces',
    mechanism: 'Rotates + to × while fanning three radial action nodes',
    endStateLabel: 'Fanned Out',
    restStateLabel: 'FAB Closed',
  },
  {
    id: 'morph4',
    index: 4,
    name: 'Tab Indicator Goo Slide',
    category: 'controls',
    mechanism: 'SVG goo filter stretches droplet bridge mid-slide between tabs',
    endStateLabel: 'Mid-Slide Goo',
    restStateLabel: 'Settled Tab',
  },
  {
    id: 'morph5',
    index: 5,
    name: 'Hamburger to X',
    category: 'icons',
    mechanism: 'Translates and counter-rotates outer strokes while middle collapses',
    endStateLabel: 'X Shown',
    restStateLabel: 'Menu Bars',
  },
  {
    id: 'morph6',
    index: 6,
    name: 'Play to Pause',
    category: 'icons',
    mechanism: 'Interpolates dual SVG polygon halves from triangle to parallel bars',
    endStateLabel: 'Pause Shown',
    restStateLabel: 'Play Triangle',
  },
  {
    id: 'morph7',
    index: 7,
    name: 'Card to Expanded Detail',
    category: 'surfaces',
    mechanism: 'Unfolds compact preview row into full editorial detail card',
    endStateLabel: 'Expanded Detail',
    restStateLabel: 'Compact Card',
  },
  {
    id: 'morph8',
    index: 8,
    name: 'Search Icon to Input',
    category: 'controls',
    mechanism: 'Widens circular icon button into editable query field',
    endStateLabel: 'Input Expanded',
    restStateLabel: 'Search Icon',
  },
  {
    id: 'morph9',
    index: 9,
    name: 'Chip to Tag',
    category: 'controls',
    mechanism: 'Fills suggestion chip with ink surface and checkmark-to-remove state',
    endStateLabel: 'Active Tag',
    restStateLabel: 'Suggestion Chip',
  },
  {
    id: 'morph10',
    index: 10,
    name: 'Avatar to Menu Pop',
    category: 'surfaces',
    mechanism: 'Rings portrait trigger and pops anchored profile menu below',
    endStateLabel: 'Menu Popped',
    restStateLabel: 'Avatar Only',
  },
  {
    id: 'morph11',
    index: 11,
    name: 'Nav Pill to Dropdown',
    category: 'surfaces',
    mechanism: 'Extends navigation pill downward into structured link panel',
    endStateLabel: 'Dropdown Open',
    restStateLabel: 'Nav Pill',
  },
  {
    id: 'morph12',
    index: 12,
    name: 'Button to Loading',
    category: 'feedback',
    mechanism: 'Contracts horizontal button width into circular arc spinner',
    endStateLabel: 'Spinner Active',
    restStateLabel: 'Idle CTA',
  },
  {
    id: 'morph13',
    index: 13,
    name: 'Link Underline-Grow',
    category: 'feedback',
    mechanism: 'Sweeps baseline rule across width while nudging directional arrow',
    endStateLabel: 'Underline Grown',
    restStateLabel: 'Resting Link',
  },
  {
    id: 'morph14',
    index: 14,
    name: 'Logo Mark Hover Morph',
    category: 'icons',
    mechanism: 'Rotates and rounds 2×2 architectural tiles into aperture emblem',
    endStateLabel: 'Morphed Mark',
    restStateLabel: 'Grid Mark',
  },
  {
    id: 'morph15',
    index: 15,
    name: 'Segmented Control Slide',
    category: 'controls',
    mechanism: 'Elongates sliding pill indicator mid-transition across segments',
    endStateLabel: 'Mid-Slide',
    restStateLabel: 'Settled Segment',
  },
  {
    id: 'morph16',
    index: 16,
    name: 'Accordion Icon (+ to −)',
    category: 'icons',
    mechanism: 'Rotates vertical stroke 90° into alignment while revealing content',
    endStateLabel: 'Minus & Open',
    restStateLabel: 'Plus & Closed',
  },
  {
    id: 'morph17',
    index: 17,
    name: 'Price to CTA Morph',
    category: 'feedback',
    mechanism: 'Shifts tabular price upward into high-contrast subscription CTA',
    endStateLabel: 'CTA Shown',
    restStateLabel: 'Price Shown',
  },
  {
    id: 'morph18',
    index: 18,
    name: 'Like to Liked Fill',
    category: 'feedback',
    mechanism: 'Springs heart fill with radial burst ring and tabular count bump',
    endStateLabel: 'Liked (128)',
    restStateLabel: 'Unliked (127)',
  },
  {
    id: 'morph19',
    index: 19,
    name: 'Notification Dot to Panel',
    category: 'surfaces',
    mechanism: 'Transforms alert dot badge into full inbox activity panel',
    endStateLabel: 'Panel Open',
    restStateLabel: 'Dot Badge',
  },
  {
    id: 'morph20',
    index: 20,
    name: 'Filter Chip to Options',
    category: 'controls',
    mechanism: 'Unfolds compact filter trigger into inline selectable option rail',
    endStateLabel: 'Options Open',
    restStateLabel: 'Compact Chip',
  },
];

export type MorphStateMap = Record<MorphId, boolean>;

export function createInitialMorphMap(
  specs: MorphSpec[] = MORPH_SPECS,
  initialValue = true
): MorphStateMap {
  const map = {} as MorphStateMap;
  for (const spec of specs) {
    map[spec.id] = initialValue;
  }
  return map;
}

export function setAllMorphStates(stateMap: MorphStateMap, morphed: boolean): MorphStateMap {
  const next = {} as MorphStateMap;
  for (const key of Object.keys(stateMap) as MorphId[]) {
    next[key] = morphed;
  }
  return next;
}

export function countMorphedStates(stateMap: MorphStateMap): number {
  return Object.values(stateMap).filter(Boolean).length;
}

export function filterMorphSpecs(
  specs: MorphSpec[],
  category: MorphCategory,
  searchQuery = ''
): MorphSpec[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return specs.filter((spec) => {
    const matchesCategory = category === 'all' || spec.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      spec.name.toLowerCase().includes(normalizedQuery) ||
      spec.mechanism.toLowerCase().includes(normalizedQuery) ||
      spec.endStateLabel.toLowerCase().includes(normalizedQuery) ||
      String(spec.index).padStart(2, '0').includes(normalizedQuery)
    );
  });
}

export interface IndicatorGeometry {
  leftPercent: number;
  widthPercent: number;
  stretchRatio: number;
}

/**
 * Computes percentage geometry for a sliding indicator across equal-width segments.
 * When progress is between 0 and 1 (mid-slide), the indicator stretches along the
 * travel axis so motion momentum is visible even in a static snapshot.
 */
export function computeMidSlideIndicator(
  fromIndex: number,
  toIndex: number,
  progress: number,
  segmentCount: number
): IndicatorGeometry {
  if (segmentCount <= 0) {
    return { leftPercent: 0, widthPercent: 100, stretchRatio: 1 };
  }
  const clampedFrom = Math.max(0, Math.min(segmentCount - 1, fromIndex));
  const clampedTo = Math.max(0, Math.min(segmentCount - 1, toIndex));
  const clampedProgress = Math.max(0, Math.min(1, progress));

  const baseWidth = 100 / segmentCount;
  // Peak elastic stretch at progress = 0.5 when moving between distinct indices
  const isMoving = clampedFrom !== clampedTo;
  const bellCurve = isMoving ? Math.sin(clampedProgress * Math.PI) : 0;
  const stretchRatio = 1 + bellCurve * 0.28;
  const widthPercent = baseWidth * stretchRatio;

  const interpolatedIndex = clampedFrom + (clampedTo - clampedFrom) * clampedProgress;
  const centerPercent = (interpolatedIndex + 0.5) * baseWidth;
  const leftPercent = Math.max(0, Math.min(100 - widthPercent, centerPercent - widthPercent / 2));

  return {
    leftPercent: Number(leftPercent.toFixed(2)),
    widthPercent: Number(widthPercent.toFixed(2)),
    stretchRatio: Number(stretchRatio.toFixed(3)),
  };
}
