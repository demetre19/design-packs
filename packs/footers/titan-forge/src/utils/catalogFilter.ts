export interface CatalogItemMeta {
  id: string;
  category: string;
  name: string;
  desc: string;
  path: string;
}

export function filterCatalogItems<T extends CatalogItemMeta>(
  items: T[],
  selectedCategory: string,
  searchQuery: string
): T[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.desc.toLowerCase().includes(normalizedQuery) ||
      item.id.toLowerCase().includes(normalizedQuery)
    );
  });
}
