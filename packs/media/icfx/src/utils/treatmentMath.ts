export type TreatmentCategory =
  | 'All'
  | 'Clip & Mask'
  | 'Scroll & Depth'
  | 'Color & Optics'
  | 'Interactive & Grid';

export interface SpecimenMeta {
  id: number;
  name: string;
  title: string;
  category: Exclude<TreatmentCategory, 'All'>;
  trigger: string;
  technique: string;
  spanWide?: boolean;
}

export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function clampPercentage(value: number): number {
  return clamp(value, 0, 100);
}

/**
 * Computes parallax Y translation in pixels as an element moves through the viewport.
 * progress = 0 when element enters bottom, 1 when element exits top.
 */
export function computeParallaxOffset(progress: number, maxShiftPx = 36): number {
  const clamped = clamp(progress, 0, 1);
  return Math.round(((clamped - 0.5) * 2 * maxShiftPx) * 100) / 100;
}

/**
 * Computes scale factor for scale-down-on-scroll galleries.
 * Starts slightly zoomed (maxScale) and settles down toward 1.0 as scroll progress rises.
 */
export function computeScrollScale(
  progress: number,
  maxScale = 1.14,
  minScale = 1.0
): number {
  const clamped = clamp(progress, 0, 1);
  const scale = maxScale - clamped * (maxScale - minScale);
  return Math.round(scale * 1000) / 1000;
}

/**
 * Computes bounded 3D tilt angles from normalized pointer position [0..1, 0..1].
 */
export function computeTiltAngles(
  normX: number,
  normY: number,
  maxDeg = 12
): { rotateX: number; rotateY: number } {
  const x = clamp(normX, 0, 1);
  const y = clamp(normY, 0, 1);
  const rotateY = Math.round(((x - 0.5) * 2 * maxDeg) * 100) / 100;
  const rotateX = Math.round(((0.5 - y) * 2 * maxDeg) * 100) / 100;
  return { rotateX, rotateY };
}

export function filterSpecimens(
  items: SpecimenMeta[],
  category: TreatmentCategory,
  query: string
): SpecimenMeta[] {
  const normalizedQuery = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.technique.toLowerCase().includes(normalizedQuery) ||
      item.trigger.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery)
    );
  });
}
