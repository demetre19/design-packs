import { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import type { HeroMetadata } from '../data/heroCatalog';

interface SourceDrawerProps {
  hero: HeroMetadata | null;
  source: string;
  onClose: () => void;
}

export function SourceDrawer({ hero, source, onClose }: SourceDrawerProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [hero?.id]);

  useEffect(() => {
    if (!hero) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hero, onClose]);

  if (!hero) return null;

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(source).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="source-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-stone-950/50 backdrop-blur-[2px]"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-3xl h-full bg-stone-950 text-stone-100 border-l border-stone-800 flex flex-col shadow-2xl">
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h2 id="source-drawer-title" className="text-base font-semibold text-white truncate">
              {hero.name}.tsx — {hero.brand}
            </h2>
            <p className="mt-0.5 text-xs text-stone-400 truncate">
              {hero.patternLabel} · {hero.styleLabel} · Self-contained React + Tailwind
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-950 bg-white rounded-md hover:bg-stone-200 transition-colors whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied TSX' : 'Copy TSX'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close source drawer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <pre className="text-xs leading-relaxed font-mono text-stone-200 whitespace-pre overflow-x-auto">
            <code>{source}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
