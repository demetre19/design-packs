import fs from 'node:fs';
import path from 'node:path';
import { MENU_CATALOG } from '@/lib/menu-catalog';
import { ShowcaseApp } from '@/components/ShowcaseApp';

function loadComponentSources(): Record<string, string> {
  const sources: Record<string, string> = {};
  for (const entry of MENU_CATALOG) {
    const filePath = path.join(process.cwd(), 'components', 'menus', `${entry.componentName}.tsx`);
    try {
      sources[entry.componentName] = fs.readFileSync(filePath, 'utf8');
    } catch {
      sources[entry.componentName] = `// Source unavailable for ${entry.componentName}`;
    }
  }
  return sources;
}

export default function HomePage() {
  const sources = loadComponentSources();
  return <ShowcaseApp sources={sources} />;
}
