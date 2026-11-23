import React from 'react';
import { FooterTopology } from '../data/footerCatalog';

interface ShowcaseHeaderProps {
  onQuickPreset: (preset: 'all' | FooterTopology) => void;
  onJumpToCatalog: () => void;
}

export function ShowcaseHeader({ onQuickPreset, onJumpToCatalog }: ShowcaseHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#F6F6F4]/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onQuickPreset('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-bold tracking-tight text-zinc-950 whitespace-nowrap shrink-0"
        >
          Footercraft
        </a>

        <nav aria-label="Primary catalog presets" className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <button
            type="button"
            onClick={() => onQuickPreset('all')}
            className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            All 40 Footers
          </button>
          <button
            type="button"
            onClick={() => onQuickPreset('Mega + Newsletter')}
            className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Newsletter Mega
          </button>
          <button
            type="button"
            onClick={() => onQuickPreset('CTA Banner')}
            className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            CTA Banners
          </button>
          <button
            type="button"
            onClick={() => onQuickPreset('Sitemap Tree')}
            className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sitemap Trees
          </button>
        </nav>

        <div className="shrink-0">
          <button
            type="button"
            onClick={onJumpToCatalog}
            className="rounded-lg bg-zinc-950 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Browse Index
          </button>
        </div>
      </div>
    </header>
  );
}
