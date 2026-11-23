export function clamp(value: number, min = 0, max = 1): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * clamp(t, 0, 1);
}

export function easeOutCubic(t: number): number {
  const c = clamp(t, 0, 1);
  return 1 - Math.pow(1 - c, 3);
}

/**
 * Computes normalized [0, 1] progress for a sticky runway container.
 * 0 when container top aligns with viewport top (or sticky offset),
 * 1 when container bottom aligns with viewport bottom.
 */
export function computeStickyProgress(
  rectTop: number,
  rectHeight: number,
  viewportHeight: number,
): number {
  const scrollableDistance = rectHeight - viewportHeight;
  if (scrollableDistance <= 0) {
    return rectTop <= 0 ? 1 : 0;
  }
  return clamp(-rectTop / scrollableDistance, 0, 1);
}

/**
 * Computes normalized [0, 1] progress as an element crosses from entering
 * the bottom of the viewport to leaving toward the upper third.
 * Produces an intuitive mid-state (~0.45 - 0.7) while visible near center.
 */
export function computeViewportTraversal(
  rectTop: number,
  rectHeight: number,
  viewportHeight: number,
): number {
  const totalTravel = viewportHeight + rectHeight;
  if (totalTravel <= 0) return 0;
  const traveled = viewportHeight - rectTop;
  return clamp(traveled / totalTravel, 0, 1);
}

/**
 * Maps progress [0, 1] onto an active discrete step index [0..totalSteps - 1].
 */
export function getActiveStepIndex(progress: number, totalSteps: number): number {
  if (totalSteps <= 1) return 0;
  const p = clamp(progress, 0, 0.999999);
  return Math.floor(p * totalSteps);
}

/**
 * Computes SVG circle stroke-dashoffset for a progress ring.
 */
export function computeRingDashOffset(radius: number, progress: number): {
  circumference: number;
  dashOffset: number;
} {
  const circumference = 2 * Math.PI * radius;
  const p = clamp(progress, 0, 1);
  return {
    circumference,
    dashOffset: circumference * (1 - p),
  };
}

/**
 * Computes horizontal track translation X (negative px) given vertical progress.
 */
export function computeHorizontalTrackX(
  progress: number,
  trackWidth: number,
  viewportWidth: number,
): number {
  const maxTranslate = Math.max(0, trackWidth - viewportWidth);
  const offset = -lerp(0, maxTranslate, progress);
  return offset === 0 ? 0 : offset;
}
