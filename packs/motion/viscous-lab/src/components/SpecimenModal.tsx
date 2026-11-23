import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';
import { CATEGORY_LABELS, GooSpecimenMeta } from '../utils/gooCatalog';
import { GOO_COMPONENTS } from './goo';

interface SpecimenModalProps {
  specimen: GooSpecimenMeta | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const SpecimenModal: React.FC<SpecimenModalProps> = ({
  specimen,
  onClose,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!specimen) return;
    setCopied(false);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [specimen, onClose, onNavigate]);

  if (!specimen) return null;

  const Component = GOO_COMPONENTS[specimen.componentName];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(specimen.codeExcerpt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specimen-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 border-b border-stone-200 px-6 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="font-mono font-medium text-[#141413]">{specimen.componentName}</span>
              <span aria-hidden="true">·</span>
              <span>{CATEGORY_LABELS[specimen.category]}</span>
              <span aria-hidden="true">·</span>
              <span className="truncate">{specimen.technique}</span>
            </div>
            <h2
              id="specimen-modal-title"
              className="mt-1 font-display text-xl font-semibold tracking-tight text-[#141413]"
            >
              {String(specimen.id).padStart(2, '0')}. {specimen.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close inspector"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition-colors hover:bg-stone-100 hover:text-[#141413] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Enlarged Interactive Stage */}
        <div className="p-6">
          <div className="rounded-xl border border-stone-200 p-2 bg-white">
            <Component />
          </div>

          <p className="mt-4 text-sm leading-relaxed text-stone-600">{specimen.description}</p>

          <div className="mt-4 flex items-center justify-between text-xs text-stone-500">
            <span>Interaction: {specimen.trigger}</span>
            <span className="font-mono">Self-contained TSX</span>
          </div>

          {/* Code Excerpt */}
          <div className="mt-4 overflow-hidden rounded-xl border border-stone-200 bg-[#141413] text-stone-100">
            <div className="flex items-center justify-between border-b border-stone-800 px-4 py-2">
              <span className="font-mono text-xs text-stone-400">Core Pattern</span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
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
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-stone-200">
              <code>{specimen.codeExcerpt}</code>
            </pre>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between border-t border-stone-200 bg-[#F7F7F5] px-6 py-3">
          <button
            type="button"
            onClick={() => onNavigate('prev')}
            className="flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Previous</span>
          </button>

          <span className="font-mono text-xs text-stone-500 tabular-nums">
            {specimen.id} / 20
          </span>

          <button
            type="button"
            onClick={() => onNavigate('next')}
            className="flex items-center gap-1.5 rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-800 transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-blue-600"
          >
            <span>Next</span>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
