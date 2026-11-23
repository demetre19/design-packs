import { useState } from 'react';
import { Check, Code2, Copy } from 'lucide-react';
import type { BadgeMeta } from '../utils/badgeCatalog';
import { BADGE_RAW_SOURCES } from '../utils/badgeRawSources';

interface BadgeSpecimenCardProps {
  meta: BadgeMeta;
  children: React.ReactNode;
  onInspect: (meta: BadgeMeta) => void;
}

export function BadgeSpecimenCard({
  meta,
  children,
  onInspect,
}: BadgeSpecimenCardProps) {
  const [copied, setCopied] = useState(false);

  const handleQuickCopy = async () => {
    const code = BADGE_RAW_SOURCES[meta.id] ?? '';
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const formattedIndex = String(meta.id).padStart(2, '0');

  return (
    <article
      data-testid={`badge-card-${meta.id}`}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Clean unboxed metadata header */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-3.5 dark:border-slate-800/80">
        <div className="flex min-w-0 items-baseline gap-2">
          <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums dark:text-slate-500">
            {formattedIndex}
          </span>
          <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
            {meta.title}
          </h3>
        </div>
        <span className="shrink-0 font-mono text-[11px] text-slate-500 dark:text-slate-400">
          {meta.hostType}
        </span>
      </div>

      {/* Generous stage so corner ribbons & rotated stickers never clip */}
      <div className="flex min-h-[196px] flex-1 items-center justify-center bg-slate-50/75 px-6 py-8 dark:bg-slate-950/65">
        {children}
      </div>

      {/* Footer description + inspect/copy actions */}
      <div className="flex flex-col justify-between gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800/80">
        <div>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            {meta.description}
          </p>
          <p className="mt-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
            {meta.componentName} · {meta.svgDetail}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            type="button"
            onClick={() => onInspect(meta)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-700 whitespace-nowrap shrink-0"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Inspect TSX</span>
          </button>

          <button
            type="button"
            onClick={handleQuickCopy}
            aria-label={`Copy ${meta.componentName} source code`}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white whitespace-nowrap shrink-0"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
