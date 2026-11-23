import { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import type { BadgeMeta } from '../utils/badgeCatalog';
import { BADGE_RAW_SOURCES } from '../utils/badgeRawSources';

interface BadgeInspectorModalProps {
  badge: BadgeMeta | null;
  renderBadge: (id: number) => React.ReactNode;
  onClose: () => void;
}

export function BadgeInspectorModal({
  badge,
  renderBadge,
  onClose,
}: BadgeInspectorModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [badge?.id]);

  useEffect(() => {
    if (!badge) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [badge, onClose]);

  if (!badge) return null;

  const sourceCode = BADGE_RAW_SOURCES[badge.id] ?? '';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sourceCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inspector-title"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-4 dark:border-slate-800">
          <div>
            <p className="font-mono text-xs text-slate-500 tabular-nums dark:text-slate-400">
              {badge.componentName} · {badge.hostType} · {badge.svgDetail}
            </p>
            <h2
              id="inspector-title"
              className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100"
            >
              {badge.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:text-slate-950 dark:hover:bg-blue-400 whitespace-nowrap shrink-0"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied TSX' : 'Copy TSX'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close component inspector"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable body: Side-by-side Light & Dark live preview + Source */}
        <div className="overflow-y-auto p-6 space-y-6">
          <p className="text-sm text-slate-600 dark:text-slate-300">{badge.description}</p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Forced Light Surface Specimen */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-4 text-xs font-semibold text-slate-500">Light Surface Preview</p>
              <div className="light flex min-h-[140px] items-center justify-center">
                {renderBadge(badge.id)}
              </div>
            </div>

            {/* Forced Dark Surface Specimen */}
            <div className="dark rounded-xl border border-slate-800 bg-slate-950 p-5">
              <p className="mb-4 text-xs font-semibold text-slate-400">Dark Surface Preview</p>
              <div className="flex min-h-[140px] items-center justify-center">
                {renderBadge(badge.id)}
              </div>
            </div>
          </div>

          {/* Self-contained TSX Source */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                src/components/badges/{badge.componentName}.tsx
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Self-contained React + Tailwind + SVG
              </span>
            </div>
            <pre className="max-h-[340px] overflow-auto rounded-xl border border-slate-200 bg-slate-950 p-4 font-mono text-xs leading-relaxed text-slate-100 dark:border-slate-800">
              <code>{sourceCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
