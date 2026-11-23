export type MediaCategory =
  | 'all'
  | 'overlays'
  | 'interactive'
  | 'layouts'
  | 'placeholders';

export interface MediaComponentMeta {
  id: string;
  number: number;
  title: string;
  pattern: string;
  category: Exclude<MediaCategory, 'all'>;
  span: 'single' | 'wide';
}

export function clampPercentage(value: number): number {
  if (!Number.isFinite(value)) return 50;
  return Math.min(100, Math.max(0, Math.round(value * 10) / 10));
}

export function stepCarouselIndex(
  current: number,
  delta: number,
  total: number
): number {
  if (total <= 0) return 0;
  return ((current + delta) % total + total) % total;
}

export function computePointerPercent(
  clientX: number,
  rectLeft: number,
  rectWidth: number
): number {
  if (rectWidth <= 0) return 50;
  const raw = ((clientX - rectLeft) / rectWidth) * 100;
  return clampPercentage(raw);
}

export function computeLoupeOrigin(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number }
): { x: number; y: number } {
  if (rect.width <= 0 || rect.height <= 0) {
    return { x: 50, y: 50 };
  }
  return {
    x: clampPercentage(((clientX - rect.left) / rect.width) * 100),
    y: clampPercentage(((clientY - rect.top) / rect.height) * 100),
  };
}

export function computeAspectDimensions(
  ratio: '16:9' | '1:1' | '4:3',
  baseWidth: number
): { width: number; height: number; label: string } {
  const safeWidth = Math.max(1, Math.round(baseWidth));
  switch (ratio) {
    case '16:9':
      return {
        width: safeWidth,
        height: Math.round((safeWidth * 9) / 16),
        label: '1.78 : 1',
      };
    case '1:1':
      return {
        width: safeWidth,
        height: safeWidth,
        label: '1.00 : 1',
      };
    case '4:3':
      return {
        width: safeWidth,
        height: Math.round((safeWidth * 3) / 4),
        label: '1.33 : 1',
      };
  }
}

export function filterMediaRegistry<T extends MediaComponentMeta>(
  items: T[],
  category: MediaCategory,
  query: string
): T[] {
  const normalized = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalized) return true;
    return (
      item.id.toLowerCase().includes(normalized) ||
      item.title.toLowerCase().includes(normalized) ||
      item.pattern.toLowerCase().includes(normalized)
    );
  });
}

export function formatSlideCounter(index: number, total: number): string {
  const safeTotal = Math.max(1, total);
  const safeIndex = Math.min(safeTotal, Math.max(1, index + 1));
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(safeIndex)} / ${pad(safeTotal)}`;
}
