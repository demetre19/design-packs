import fs from 'node:fs/promises';
import path from 'node:path';
import { MenuShowcase } from '@/components/MenuShowcase';

async function loadMenuSources(): Promise<Record<number, string>> {
  const sources: Record<number, string> = {};
  const menusDir = path.join(process.cwd(), 'components', 'menus');

  await Promise.all(
    Array.from({ length: 20 }, (_, idx) => idx + 1).map(async (id) => {
      const filePath = path.join(menusDir, `SheetMenu${id}.tsx`);
      try {
        sources[id] = await fs.readFile(filePath, 'utf8');
      } catch {
        sources[id] = `// Source for SheetMenu${id}.tsx unavailable`;
      }
    })
  );

  return sources;
}

export default async function HomePage() {
  const sources = await loadMenuSources();
  return <MenuShowcase sources={sources} />;
}
