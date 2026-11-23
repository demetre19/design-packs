import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, Monitor, Smartphone, Tablet } from 'lucide-react';
import type { PricingCatalogItem } from './pricing';

interface FocusStageProps {
  items: PricingCatalogItem[];
  activeId: number;
  onSelectId: (id: number) => void;
  onExit: () => void;
}

export function FocusStage({ items, activeId, onSelectId, onExit }: FocusStageProps) {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  const currentIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId)
  );
  const current = items[currentIndex] ?? items[0];

  if (!current) {
    return null;
  }

  const ActiveComponent = current.Component;
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];

  const handleCopyImport = async () => {
    const snippet = `import { ${current.componentName} } from './components/pricing';\n\nexport default function Page() {\n  return <${current.componentName} />;\n}`;
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const frameWidthClass =
    viewport === 'desktop'
      ? 'w-full'
      : viewport === 'tablet'
        ? 'w-full max-w-[768px]'
        : 'w-full max-w-[390px]';

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-10 py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <button
            type="button"
            onClick={onExit}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Gallery</span>
          </button>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 [font-family:var(--font-display)]">
            {current.componentName} — {current.brand}
          </h1>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>{current.topologyLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{current.styleLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{current.domain}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden md:inline-flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => setViewport('desktop')}
              aria-label="Desktop preview width"
              aria-pressed={viewport === 'desktop'}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium inline-flex items-center gap-1.5 transition-colors ${
                viewport === 'desktop'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewport('tablet')}
              aria-label="Tablet preview width"
              aria-pressed={viewport === 'tablet'}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium inline-flex items-center gap-1.5 transition-colors ${
                viewport === 'tablet'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>768px</span>
            </button>
            <button
              type="button"
              onClick={() => setViewport('mobile')}
              aria-label="Mobile preview width"
              aria-pressed={viewport === 'mobile'}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium inline-flex items-center gap-1.5 transition-colors ${
                viewport === 'mobile'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>390px</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopyImport}
            className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Import Copied' : 'Copy Import'}</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => prevItem && onSelectId(prevItem.id)}
              aria-label={`Previous section (${prevItem?.componentName})`}
              className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
            <button
              type="button"
              onClick={() => nextItem && onSelectId(nextItem.id)}
              aria-label={`Next section (${nextItem?.componentName})`}
              className="px-3 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-1 whitespace-nowrap"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 flex justify-center sm:bg-slate-200/60 sm:border sm:border-slate-200 rounded-2xl p-0 sm:p-8">
        <div
          className={`${frameWidthClass} mx-auto rounded-xl overflow-hidden border border-slate-300/80 shadow-sm transition-all duration-200`}
        >
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}
