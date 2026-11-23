import dividersRaw from '../components/ornaments/Dividers.tsx?raw';
import framesRaw from '../components/ornaments/Frames.tsx?raw';
import typographyRaw from '../components/ornaments/TypographyOrnaments.tsx?raw';
import accentsRaw from '../components/ornaments/EditorialAccents.tsx?raw';
import { extractComponentSource } from '../utils/sourceExtractor';

const ALL_RAW_SOURCES = [dividersRaw, framesRaw, typographyRaw, accentsRaw].join('\n');

const sourceCache = new Map<string, string>();

export function getOrnamentSource(componentName: string): string {
  const cached = sourceCache.get(componentName);
  if (cached !== undefined) {
    return cached;
  }
  const extracted = extractComponentSource(ALL_RAW_SOURCES, componentName);
  sourceCache.set(componentName, extracted);
  return extracted;
}
