import fs from 'node:fs';
import path from 'node:path';
import { MenuShowcase } from '@/components/MenuShowcase';

function loadMenuSources(): Record<string, string> {
  const sources: Record<string, string> = {};
  for (let i = 1; i <= 20; i++) {
    const name = `ModalMenu${i}`;
    const filePath = path.join(process.cwd(), 'components', 'menus', `${name}.tsx`);
    try {
      sources[name] = fs.readFileSync(filePath, 'utf8');
    } catch {
      sources[name] = `// Unable to read ${name}.tsx`;
    }
  }
  return sources;
}

export default function HomePage() {
  const sources = loadMenuSources();
  return <MenuShowcase sources={sources} />;
}
