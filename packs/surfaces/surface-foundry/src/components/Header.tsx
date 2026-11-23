import type { BackgroundCategory } from '../data/backgroundsMeta';

interface HeaderProps {
  activeCategory: 'all' | BackgroundCategory;
  onSelectCategory: (category: 'all' | BackgroundCategory) => void;
  onOpenExport: () => void;
}

export function Header({ activeCategory, onSelectCategory, onOpenExport }: HeaderProps) {
  const navItems: Array<{ id: 'all' | BackgroundCategory; label: string }> = [
    { id: 'all', label: 'All Patterns' },
    { id: 'grids', label: 'Grids & Geometry' },
    { id: 'organic', label: 'Organic & Glows' },
    { id: 'textures', label: 'Textures & Borders' },
  ];

  const handleNavClick = (id: 'all' | BackgroundCategory) => {
    onSelectCategory(id);
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-[#F8F8F7]/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#09090B]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <a
          href="#top"
          className="whitespace-nowrap shrink-0 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Surface Foundry
        </a>

        <nav aria-label="Pattern categories" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 cursor-pointer text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${
                  isActive
                    ? 'text-zinc-950 underline decoration-blue-600 decoration-2 underline-offset-8 dark:text-white dark:decoration-blue-400'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenExport}
            className="whitespace-nowrap shrink-0 cursor-pointer rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-colors duration-150 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Export TSX Bundle
          </button>
        </div>
      </div>
    </header>
  );
}
