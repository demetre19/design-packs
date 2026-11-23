interface ShowcaseHeaderProps {
  viewMode: 'stack' | 'directory' | 'focus';
  onChangeView: (mode: 'stack' | 'directory' | 'focus') => void;
  onResetFilters: () => void;
}

export function ShowcaseHeader({
  viewMode,
  onChangeView,
  onResetFilters,
}: ShowcaseHeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-16 flex items-center justify-between gap-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onResetFilters();
            onChangeView('stack');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-bold tracking-tight text-slate-900 [font-family:var(--font-display)] whitespace-nowrap shrink-0"
        >
          Pricing Atlas
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            type="button"
            onClick={() => {
              onResetFilters();
              onChangeView('stack');
            }}
            className={`hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 ${
              viewMode === 'stack' ? 'text-slate-900 underline' : ''
            }`}
          >
            All Sections
          </button>
          <button
            type="button"
            onClick={() => onChangeView('directory')}
            className={`hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 ${
              viewMode === 'directory' ? 'text-slate-900 underline' : ''
            }`}
          >
            Directory
          </button>
          <a
            href="#pricing-1"
            onClick={() => {
              if (viewMode !== 'stack') onChangeView('stack');
            }}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Topologies
          </a>
          <a
            href="#pricing-29"
            onClick={() => {
              if (viewMode !== 'stack') onChangeView('stack');
            }}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Text-Only
          </a>
        </nav>

        <div className="shrink-0">
          <button
            type="button"
            onClick={() => onChangeView(viewMode === 'focus' ? 'stack' : 'focus')}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
          >
            {viewMode === 'focus' ? 'Exit Focus Stage' : 'Focus Stage'}
          </button>
        </div>
      </div>
    </header>
  );
}
