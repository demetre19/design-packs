import { Check, Code2, Copy, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import type { BackgroundMeta } from '../data/backgroundsMeta';
import { BG_COMPONENT_MAP } from './backgrounds';

interface SpecimenCardProps {
  meta: BackgroundMeta;
  onInspect: (meta: BackgroundMeta, initialTab: 'preview' | 'code') => void;
}

export function SpecimenCard({ meta, onInspect }: SpecimenCardProps) {
  const [copied, setCopied] = useState(false);
  const BgComponent = BG_COMPONENT_MAP[meta.id];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meta.sourceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback: open code view if clipboard API is unavailable
      onInspect(meta, 'code');
    }
  };

  return (
    <article
      data-testid={`specimen-${meta.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors duration-150 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="relative w-full overflow-hidden">
        {BgComponent ? <BgComponent /> : null}
      </div>

      <div className="flex flex-col gap-3 border-t border-zinc-200 bg-white px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:bg-zinc-900/95">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
            <span className="font-mono text-xs text-blue-700 tabular-nums shrink-0 dark:text-blue-400">
              {meta.id}
            </span>
            <span aria-hidden="true" className="text-zinc-300 shrink-0 dark:text-zinc-700">
              ·
            </span>
            <h2 className="truncate">{meta.name}</h2>
          </div>
          <p className="mt-0.5 truncate text-xs text-zinc-500 dark:text-zinc-400">
            {meta.categoryLabel} · {meta.technique}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => onInspect(meta, 'preview')}
            aria-label={`Preview ${meta.id} ${meta.name}`}
            className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white whitespace-nowrap shrink-0"
          >
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Preview</span>
          </button>

          <button
            type="button"
            onClick={() => onInspect(meta, 'code')}
            aria-label={`View code for ${meta.id} ${meta.name}`}
            className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white whitespace-nowrap shrink-0"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Code</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${meta.id} TSX`}
            className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white whitespace-nowrap shrink-0"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
