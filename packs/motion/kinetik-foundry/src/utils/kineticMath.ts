export type SpeedScale = 'fast' | 'normal' | 'dramatic';

const SPEED_MULTIPLIERS: Record<SpeedScale, number> = {
  fast: 0.6,
  normal: 1,
  dramatic: 1.6,
};

export function getSpeedMultiplier(speed: SpeedScale = 'normal'): number {
  return SPEED_MULTIPLIERS[speed] ?? 1;
}

export function scaleMs(baseMs: number, speed: SpeedScale = 'normal'): number {
  const safeBase = Number.isFinite(baseMs) && baseMs >= 0 ? baseMs : 0;
  return Math.round(safeBase * getSpeedMultiplier(speed));
}

export function computeStaggerDelay(
  index: number,
  stepMs: number,
  speed: SpeedScale = 'normal',
  offsetMs = 0,
): string {
  const safeIndex = Math.max(0, Math.floor(index));
  const safeStep = Math.max(0, stepMs);
  const total = Math.round((offsetMs + safeIndex * safeStep) * getSpeedMultiplier(speed));
  return `${total}ms`;
}

export function splitChars(text: string): string[] {
  return Array.from(text);
}

export function splitWords(text: string): string[] {
  return text.trim().length === 0 ? [] : text.trim().split(/\s+/);
}

export function splitLines(text: string, maxWordsPerLine = 3): string[] {
  if (text.includes('\n')) {
    return text
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
  }
  const words = splitWords(text);
  if (words.length <= 2) {
    return words.length ? [words.join(' ')] : [];
  }
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += maxWordsPerLine) {
    lines.push(words.slice(i, i + maxWordsPerLine).join(' '));
  }
  return lines;
}

/**
 * Computes symmetric horizontal spread offset (in px) from center character.
 */
export function computeCenterSpread(index: number, total: number, spreadPx = 6): number {
  if (total <= 1) return 0;
  const center = (total - 1) / 2;
  return Number(((index - center) * spreadPx).toFixed(2));
}

export const SCRAMBLE_GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+';

export function resolveScrambleChar(
  targetChar: string,
  charIndex: number,
  tick: number,
  settleTickPerChar = 2,
): string {
  if (targetChar === ' ') return ' ';
  const settleAt = (charIndex + 1) * settleTickPerChar;
  if (tick >= settleAt) {
    return targetChar;
  }
  const glyphIndex = (charIndex * 7 + tick * 5) % SCRAMBLE_GLYPHS.length;
  return SCRAMBLE_GLYPHS[glyphIndex];
}
