import React from 'react';
import type { CategoryFilter } from '../utils/ornamentFilter';

interface TopBarProps {
  onSelectCategory: (category: CategoryFilter) => void;
  onJumpToCatalog: () => void;
}

export function TopBar({ onSelectCategory, onJumpToCatalog }: TopBarProps) {
  const navItems: { label: string; category: CategoryFilter }[] = [
    { label: 'All Plates', category: 'all' },
    { label: 'Dividers', category: 'dividers' },
    { label: 'Frames', category: 'frames' },
    { label: 'Typography', category: 'typography' },
    { label: 'Accents', category: 'accents' },
  ];

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 whitespace-nowrap shrink-0"
        >
          Folio Ornaments
        </a>

        <nav aria-label="Primary sections" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.category}
              type="button"
              onClick={() => {
                onSelectCategory(item.category);
                onJumpToCatalog();
              }}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onJumpToCatalog}
            className="rounded-md bg-blue-700 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-blue-500 dark:text-zinc-950 dark:hover:bg-blue-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
          >
            Browse Specimens
          </button>
        </div>
      </div>
    </header>
  );
}
