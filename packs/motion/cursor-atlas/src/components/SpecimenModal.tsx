import React, { useEffect, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Copy, X } from 'lucide-react';
import type { CursorSpecimen } from '../data/cursorCatalog';

interface SpecimenModalProps {
  specimen: CursorSpecimen | null;
  onClose: () => void;
  onSelectNumber: (num: number) => void;
  totalCount: number;
}

export function SpecimenModal({
  specimen,
  onClose,
  onSelectNumber,
  totalCount,
}: SpecimenModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!specimen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onSelectNumber(specimen.number >= totalCount ? 1 : specimen.number + 1);
      }
      if (e.key === 'ArrowLeft') {
        onSelectNumber(specimen.number <= 1 ? totalCount : specimen.number - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [specimen, onClose, onSelectNumber, totalCount]);

  if (!specimen) return null;

  const { Component } = specimen;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `import { ${specimen.componentName} } from './components/cursors';\n\nexport default function Demo() {\n  return (\n    <div className="h-[360px] w-full rounded-2xl overflow-hidden">\n      <${specimen.componentName} />\n    </div>\n  );\n}`,
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="specimen-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/65 p-4 sm:p-6 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-6 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="font-mono tabular-nums font-medium text-blue-600">
                {String(specimen.number).padStart(2, '0')} / {totalCount}
              </span>
              <span aria-hidden="true">·</span>
              <span>{specimen.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-zinc-700">{specimen.componentName}</span>
            </div>
            <h2
              id="specimen-modal-title"
              className="mt-0.5 font-display text-xl font-semibold tracking-tight text-zinc-900 truncate"
            >
              {specimen.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous specimen"
              onClick={() =>
                onSelectNumber(specimen.number <= 1 ? totalCount : specimen.number - 1)
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next specimen"
              onClick={() =>
                onSelectNumber(specimen.number >= totalCount ? 1 : specimen.number + 1)
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Close inspector"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Enlarged Interactive Stage */}
        <div className="h-[360px] sm:h-[420px] w-full border-b border-zinc-200">
          <Component />
        </div>

        {/* Specimen Notes & Copy Usage */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-zinc-50 px-6 py-4">
          <div className="space-y-1 max-w-xl">
            <p className="text-sm text-zinc-800">{specimen.summary}</p>
            <p className="text-xs text-zinc-500">
              <strong className="font-medium text-zinc-700">Static fallback:</strong>{' '}
              {specimen.staticBehavior}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-blue-600 transition-colors whitespace-nowrap shrink-0"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? 'Copied JSX' : `Copy <${specimen.componentName} />`}
          </button>
        </div>
      </div>
    </div>
  );
}
