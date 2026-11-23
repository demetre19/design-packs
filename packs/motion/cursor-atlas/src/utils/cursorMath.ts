export interface Point2D {
  x: number;
  y: number;
}

export interface RectBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * clamp(factor, 0, 1);
}

/**
 * Normalizes client coordinates into [0, 1] space relative to a bounding box.
 * Returns centered { x: 0.5, y: 0.5 } if width or height is non-positive.
 */
export function normalizePointer(
  clientX: number,
  clientY: number,
  bounds: RectBounds,
): Point2D {
  if (bounds.width <= 0 || bounds.height <= 0) {
    return { x: 0.5, y: 0.5 };
  }
  return {
    x: clamp((clientX - bounds.left) / bounds.width, 0, 1),
    y: clamp((clientY - bounds.top) / bounds.height, 0, 1),
  };
}

/**
 * Computes magnetic translation offset toward a pointer normalized in [0, 1]
 * relative to a target anchor normalized in [0, 1].
 */
export function computeMagneticOffset(
  pointer: Point2D,
  anchor: Point2D,
  radius = 0.45,
  maxPullPx = 18,
  active = true,
): Point2D {
  if (!active || radius <= 0) {
    return { x: 0, y: 0 };
  }
  const dx = pointer.x - anchor.x;
  const dy = pointer.y - anchor.y;
  const dist = Math.hypot(dx, dy);
  if (dist > radius || dist === 0) {
    return { x: 0, y: 0 };
  }
  const strength = 1 - dist / radius;
  return {
    x: (dx / radius) * maxPullPx * strength * 1.4,
    y: (dy / radius) * maxPullPx * strength * 1.4,
  };
}

/**
 * Computes 3D perspective card tilt angles (deg) and shine percentage coordinates.
 * When inactive, returns flat { rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 }.
 */
export function computeTiltTransform(
  pointer: Point2D,
  maxDeg = 14,
  active = true,
): { rotateX: number; rotateY: number; shineX: number; shineY: number } {
  if (!active) {
    return { rotateX: 0, rotateY: 0, shineX: 50, shineY: 50 };
  }
  const nx = clamp(pointer.x, 0, 1) - 0.5;
  const ny = clamp(pointer.y, 0, 1) - 0.5;
  return {
    rotateX: Number((-ny * 2 * maxDeg).toFixed(2)),
    rotateY: Number((nx * 2 * maxDeg).toFixed(2)),
    shineX: Number((clamp(pointer.x, 0, 1) * 100).toFixed(1)),
    shineY: Number((clamp(pointer.y, 0, 1) * 100).toFixed(1)),
  };
}

/**
 * Computes radial repel or attract displacement for typography glyphs or grid points.
 */
export function computeRepelOffset(
  pointer: Point2D,
  elementCenter: Point2D,
  mode: 'repel' | 'attract',
  radius = 0.35,
  maxDisplacementPx = 22,
  active = true,
): Point2D {
  if (!active || radius <= 0) {
    return { x: 0, y: 0 };
  }
  const dx = elementCenter.x - pointer.x;
  const dy = elementCenter.y - pointer.y;
  const dist = Math.hypot(dx, dy);
  if (dist >= radius || dist < 0.0001) {
    return { x: 0, y: 0 };
  }
  const falloff = Math.pow(1 - dist / radius, 1.4);
  const sign = mode === 'repel' ? 1 : -1;
  return {
    x: Number(((dx / dist) * maxDisplacementPx * falloff * sign).toFixed(2)),
    y: Number(((dy / dist) * maxDisplacementPx * falloff * sign).toFixed(2)),
  };
}

/**
 * Computes layered parallax pixel translation for a depth factor.
 */
export function computeParallaxOffset(
  pointer: Point2D,
  depth: number,
  maxShiftPx = 28,
  active = true,
): Point2D {
  if (!active) {
    return { x: 0, y: 0 };
  }
  const nx = clamp(pointer.x, 0, 1) - 0.5;
  const ny = clamp(pointer.y, 0, 1) - 0.5;
  return {
    x: Number((nx * 2 * maxShiftPx * depth).toFixed(2)),
    y: Number((ny * 2 * maxShiftPx * depth).toFixed(2)),
  };
}

/**
 * Computes split curtain percentage (5%..95%), centered at 50% when static.
 */
export function computeSplitRatio(pointerX: number, active = true): number {
  if (!active) return 50;
  return Number(clamp(pointerX * 100, 8, 92).toFixed(1));
}
