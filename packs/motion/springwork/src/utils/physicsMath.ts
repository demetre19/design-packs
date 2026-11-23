export type SpecimenCategory = 'controls' | 'containers' | 'motion';

export interface SpecimenMeta {
  id: string;
  number: number;
  title: string;
  category: SpecimenCategory;
  categoryLabel: string;
  curve: string;
  mechanic: string;
}

export const SPECIMEN_REGISTRY: SpecimenMeta[] = [
  {
    id: 'Phys1',
    number: 1,
    title: 'Spring Squash Buttons',
    category: 'controls',
    categoryLabel: 'Controls & Inputs',
    curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    mechanic: 'Volume-preserving press squash with elastic rebound',
  },
  {
    id: 'Phys2',
    number: 2,
    title: 'Elastic Toggles',
    category: 'controls',
    categoryLabel: 'Controls & Inputs',
    curve: 'cubic-bezier(0.22, 1.4, 0.36, 1)',
    mechanic: 'Mid-transit thumb stretch and stop overshoot',
  },
  {
    id: 'Phys3',
    number: 3,
    title: 'Bounce-In Modals',
    category: 'containers',
    categoryLabel: 'Containers & Layout',
    curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    mechanic: 'Scale-from-0.82 entrance with damped settle',
  },
  {
    id: 'Phys4',
    number: 4,
    title: 'Drag-Feel Sliders',
    category: 'controls',
    categoryLabel: 'Controls & Inputs',
    curve: 'cubic-bezier(0.16, 1, 0.3, 1)',
    mechanic: 'Primary thumb with lagged trailing ghost & velocity stretch',
  },
  {
    id: 'Phys5',
    number: 5,
    title: 'Jelly Icons',
    category: 'controls',
    categoryLabel: 'Controls & Inputs',
    curve: 'cubic-bezier(0.22, 1, 0.36, 1)',
    mechanic: 'Multi-axis inverse squash-and-stretch impulse on click',
  },
  {
    id: 'Phys6',
    number: 6,
    title: 'Pendulum Swing Elements',
    category: 'motion',
    categoryLabel: 'Motion & Spatial',
    curve: 'cubic-bezier(0.37, 0, 0.63, 1)',
    mechanic: 'Top-hinged damped harmonic oscillation on nudge',
  },
  {
    id: 'Phys7',
    number: 7,
    title: 'Falling-Into-Place Items',
    category: 'motion',
    categoryLabel: 'Motion & Spatial',
    curve: 'cubic-bezier(0.22, 1.35, 0.36, 1)',
    mechanic: 'Staggered gravity cascade with bottom impact squash',
  },
  {
    id: 'Phys8',
    number: 8,
    title: 'Elastic List Reorder',
    category: 'motion',
    categoryLabel: 'Motion & Spatial',
    curve: 'cubic-bezier(0.34, 1.45, 0.64, 1)',
    mechanic: 'Positional slot displacement with spring overshoot',
  },
  {
    id: 'Phys9',
    number: 9,
    title: 'Physics-Flavored Hover',
    category: 'motion',
    categoryLabel: 'Motion & Spatial',
    curve: 'cubic-bezier(0.22, 1.32, 0.36, 1)',
    mechanic: 'Lagged pointer follower that catches up and snaps home',
  },
  {
    id: 'Phys10',
    number: 10,
    title: 'Bounce Notifications',
    category: 'containers',
    categoryLabel: 'Containers & Layout',
    curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    mechanic: 'Directional stack entrance with spring overshoot',
  },
  {
    id: 'Phys11',
    number: 11,
    title: 'Wobble-On-Hover Cards',
    category: 'motion',
    categoryLabel: 'Motion & Spatial',
    curve: 'cubic-bezier(0.22, 1, 0.36, 1)',
    mechanic: 'Torsional rotational wobble triggered on hover or tap',
  },
  {
    id: 'Phys12',
    number: 12,
    title: 'Rubber-Band Scroll Edges',
    category: 'containers',
    categoryLabel: 'Containers & Layout',
    curve: 'cubic-bezier(0.22, 1.4, 0.36, 1)',
    mechanic: 'Asymptotic boundary tension with elastic snap-back',
  },
  {
    id: 'Phys13',
    number: 13,
    title: 'Spring-Back Drawers',
    category: 'containers',
    categoryLabel: 'Containers & Layout',
    curve: 'cubic-bezier(0.34, 1.48, 0.64, 1)',
    mechanic: 'Threshold-snapped bottom drawer with pull-resistance',
  },
  {
    id: 'Phys14',
    number: 14,
    title: 'Inertia-Feel Carousel',
    category: 'containers',
    categoryLabel: 'Containers & Layout',
    curve: 'cubic-bezier(0.22, 1.24, 0.36, 1)',
    mechanic: 'Velocity-projected slide momentum and elastic detent',
  },
  {
    id: 'Phys15',
    number: 15,
    title: 'Shake-Denied Inputs',
    category: 'controls',
    categoryLabel: 'Controls & Inputs',
    curve: 'cubic-bezier(0.36, 0.07, 0.19, 0.97)',
    mechanic: 'Horizontal damped rejection wobble on validation fail',
  },
  {
    id: 'Phys16',
    number: 16,
    title: 'Magnetic Snap Docks',
    category: 'motion',
    categoryLabel: 'Motion & Spatial',
    curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    mechanic: 'Proximity-driven scale wave across adjacent dock nodes',
  },
  {
    id: 'Phys17',
    number: 17,
    title: 'Tactile Accordion Detents',
    category: 'containers',
    categoryLabel: 'Containers & Layout',
    curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    mechanic: 'Mechanical chevron snap and buoyant panel reveal',
  },
  {
    id: 'Phys18',
    number: 18,
    title: 'Elastic Segmented Tabs',
    category: 'controls',
    categoryLabel: 'Controls & Inputs',
    curve: 'cubic-bezier(0.34, 1.42, 0.64, 1)',
    mechanic: 'Gliding active indicator with overshoot lock-in',
  },
  {
    id: 'Phys19',
    number: 19,
    title: 'Recoil Counter Steppers',
    category: 'controls',
    categoryLabel: 'Controls & Inputs',
    curve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    mechanic: 'Directional vertical kick and min/max boundary bumper',
  },
  {
    id: 'Phys20',
    number: 20,
    title: 'Spring-Loaded Flip Cards',
    category: 'containers',
    categoryLabel: 'Containers & Layout',
    curve: 'cubic-bezier(0.34, 1.45, 0.64, 1)',
    mechanic: 'Pre-launch compression followed by 180° overshoot flip',
  },
];

/**
 * Computes classic iOS-style asymptotic rubber-band resistance.
 * Beyond the boundary, displacement grows sub-linearly and never exceeds maxStretch.
 */
export function rubberBandOffset(
  distance: number,
  dimension = 240,
  constant = 0.55
): number {
  if (distance === 0) return 0;
  const sign = Math.sign(distance);
  const abs = Math.abs(distance);
  const result = (abs * constant * dimension) / (dimension + constant * abs);
  return sign * Math.round(result * 100) / 100;
}

/**
 * Computes the target slide index after a drag/flick gesture using
 * displacement plus projected velocity inertia.
 */
export function computeInertiaTargetIndex(
  currentIndex: number,
  dragOffsetPx: number,
  velocityPxPerMs: number,
  slideWidthPx: number,
  totalSlides: number
): number {
  if (totalSlides <= 1 || slideWidthPx <= 0) return 0;
  const projectedOffset = dragOffsetPx + velocityPxPerMs * 160;
  const slideDelta = Math.round(-projectedOffset / slideWidthPx);
  const clampedDelta = Math.max(-2, Math.min(2, slideDelta));
  const next = currentIndex + clampedDelta;
  return Math.max(0, Math.min(totalSlides - 1, next));
}

/**
 * Moves an item up or down in a list immutably.
 */
export function reorderListItem<T>(
  items: readonly T[],
  index: number,
  direction: 'up' | 'down'
): T[] {
  if (index < 0 || index >= items.length) return [...items];
  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= items.length) return [...items];
  const copy = [...items];
  const [moved] = copy.splice(index, 1);
  copy.splice(targetIndex, 0, moved);
  return copy;
}

export interface ValidationResult {
  valid: boolean;
  reason: string;
}

/**
 * Validates the access code for Phys15 (Shake-Denied Input).
 * Accepts alphanumeric codes >= 6 chars containing at least one digit.
 */
export function validateAccessCode(input: string): ValidationResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return { valid: false, reason: 'Enter an access code (e.g. SPRING20).' };
  }
  if (trimmed.length < 6) {
    return { valid: false, reason: 'Code must be at least 6 characters.' };
  }
  if (!/\d/.test(trimmed)) {
    return { valid: false, reason: 'Include at least one digit (e.g. SPRING20).' };
  }
  return { valid: true, reason: 'Code accepted.' };
}

/**
 * Filters the 20 specimens by category and optional search query.
 */
export function filterPhysSpecimens(
  specimens: readonly SpecimenMeta[],
  category: 'all' | SpecimenCategory,
  query: string
): SpecimenMeta[] {
  const normalizedQuery = query.trim().toLowerCase();
  return specimens.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.id.toLowerCase().includes(normalizedQuery) ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.mechanic.toLowerCase().includes(normalizedQuery) ||
      item.curve.toLowerCase().includes(normalizedQuery)
    );
  });
}
