import type { BackgroundCategory, BackgroundMeta } from '../data/backgroundsMeta';

export function filterBackgrounds(
  items: BackgroundMeta[],
  category: 'all' | BackgroundCategory,
  searchQuery: string
): BackgroundMeta[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      item.id,
      item.name,
      item.technique,
      item.categoryLabel,
      item.description,
      ...item.tags,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function getCategoryCounts(items: BackgroundMeta[]): Record<'all' | BackgroundCategory, number> {
  return items.reduce(
    (acc, item) => {
      acc.all += 1;
      acc[item.category] += 1;
      return acc;
    },
    { all: 0, grids: 0, organic: 0, textures: 0 }
  );
}

export function buildAllComponentsBundle(items: BackgroundMeta[]): string {
  const header = `import React from 'react';\n\n// 20 Self-Contained Decorative Background Components (Bg1..Bg20)\n// Pure SVG & CSS gradients, zero external images, opacity-tuned light + dark variants.\n`;
  const usesIdHook = items.some((item) => item.sourceCode.includes('useId('));
  const reactHeader = usesIdHook
    ? `import React, { useId } from 'react';\n\n// 20 Self-Contained Decorative Background Components (Bg1..Bg20)\n// Pure SVG & CSS gradients, zero external images, opacity-tuned light + dark variants.\n`
    : header;

  const bodies = items.map((item) => {
    const cleaned = item.sourceCode.replace(/^import\s+\{[^}]*\}\s+from\s+'react';\s*\n*/m, '');
    return `// ${item.id} — ${item.name}\n${cleaned}`;
  });

  return `${reactHeader}\n${bodies.join('\n\n')}\n`;
}
