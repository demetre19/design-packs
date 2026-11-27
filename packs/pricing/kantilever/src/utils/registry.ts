export interface RegistryEntry {
  id: string;
  name: string;
  category: string;
  path: string;
}

export interface CategoryMeta {
  id: string;
  label: string;
  count: number;
}

export function filterComponentsByCategory<T extends RegistryEntry>(
  items: T[],
  category: string
): T[] {
  if (category === 'all') {
    return items;
  }
  return items.filter((item) => item.category === category);
}

export function getCategoryCounts(
  items: RegistryEntry[],
  categoryLabels: Record<string, string>
): CategoryMeta[] {
  const counts: Record<string, number> = {};
  for (const item of items) {
    counts[item.category] = (counts[item.category] ?? 0) + 1;
  }

  const orderedCategories = Object.keys(categoryLabels).map((id) => ({
    id,
    label: `${categoryLabels[id]} (${counts[id] ?? 0})`,
    count: counts[id] ?? 0,
  }));

  return [
    {
      id: 'all',
      label: `All ${items.length} Components`,
      count: items.length,
    },
    ...orderedCategories,
  ];
}
