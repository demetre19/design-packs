import fs from 'node:fs/promises';
import path from 'node:path';
import { DRAWER_CATALOG } from '@/lib/drawer-catalog';
import { DrawerShowcase } from '@/components/DrawerShowcase';

export default async function HomePage() {
  const drawersDir = path.join(process.cwd(), 'components', 'drawers');
  const entries = await Promise.all(
    DRAWER_CATALOG.map(async (spec) => {
      const filePath = path.join(drawersDir, `${spec.componentName}.tsx`);
      const source = await fs.readFile(filePath, 'utf8');
      return [spec.componentName, source] as const;
    })
  );

  const sourceMap = Object.fromEntries(entries);

  return <DrawerShowcase sourceMap={sourceMap} />;
}
