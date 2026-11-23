export interface MagneticRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface Point2D {
  x: number;
  y: number;
}

export interface ParallaxOffsets {
  backgroundY: number;
  midgroundY: number;
  foregroundY: number;
}

export type SpecimenCategory =
  | 'All'
  | 'Scroll & Layout'
  | 'Typography'
  | 'Buttons & CTA'
  | 'Feedback & Cards';

export interface SpecimenMeta {
  id: string;
  number: string;
  title: string;
  category: Exclude<SpecimenCategory, 'All'>;
  mechanism: string;
  description: string;
  span?: 'wide' | 'normal';
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Computes normalized [0, 1] scroll progress for Fx1.
 */
export function calculateScrollProgress(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
): number {
  const maxScrollable = scrollHeight - clientHeight;
  if (maxScrollable <= 0) {
    return 0;
  }
  return clamp(scrollTop / maxScrollable, 0, 1);
}

/**
 * Ease-out cubic curve used for Fx3 animated counter stats.
 */
export function interpolateCounterValue(progress: number, target: number): number {
  const clamped = clamp(progress, 0, 1);
  const eased = 1 - Math.pow(1 - clamped, 3);
  return Math.round(eased * target);
}

/**
 * Computes magnetic pointer pull offset relative to button center for Fx9.
 */
export function calculateMagneticOffset(
  pointerX: number,
  pointerY: number,
  rect: MagneticRect,
  maxTranslate = 12
): Point2D {
  if (rect.width <= 0 || rect.height <= 0) {
    return {x: 0, y: 0};
  }
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const normalizedX = clamp((pointerX - centerX) / (rect.width / 2), -1, 1);
  const normalizedY = clamp((pointerY - centerY) / (rect.height / 2), -1, 1);

  return {
    x: Number((normalizedX * maxTranslate).toFixed(2)),
    y: Number((normalizedY * maxTranslate).toFixed(2)),
  };
}

/**
 * Linearly interpolates a 2D point for smooth cursor-follow dot motion (Fx18).
 */
export function lerpPoint(current: Point2D, target: Point2D, factor = 0.18): Point2D {
  const safeFactor = clamp(factor, 0, 1);
  return {
    x: current.x + (target.x - current.x) * safeFactor,
    y: current.y + (target.y - current.y) * safeFactor,
  };
}

/**
 * Computes multi-layer translateY values from normalized progress [0, 1] for Fx19.
 */
export function calculateParallaxLayers(
  progress: number,
  range = 36
): ParallaxOffsets {
  const centered = clamp(progress, 0, 1) - 0.5;
  return {
    backgroundY: Number((centered * -range).toFixed(2)),
    midgroundY: Number((centered * (range * 0.35)).toFixed(2)),
    foregroundY: Number((centered * (range * 0.75)).toFixed(2)),
  };
}

/**
 * Filters specimen metadata by category and optional search query.
 */
export function filterSpecimens(
  items: SpecimenMeta[],
  category: SpecimenCategory,
  query = ''
): SpecimenMeta[] {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.mechanism.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.id.toLowerCase().includes(normalizedQuery)
    );
  });
}
