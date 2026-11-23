import { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import type { SpecimenEntry } from '../data/specimens';

interface SpecimenModalProps {
  specimen: SpecimenEntry | null;
  onClose: () => void;
}

export function SpecimenModal({ specimen, onClose }: SpecimenModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [specimen?.id]);

  useEffect(() => {
    if (!specimen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [specimen, onClose]);

  if (!specimen) return null;

  const { Component } = specimen;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(specimen.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specimen-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="font-mono font-medium text-stone-900">{specimen.name}</span>
              <span aria-hidden="true">·</span>
              <span>{specimen.category}</span>
              <span aria-hidden="true">·</span>
              <span>{specimen.trigger}</span>
            </div>
            <h2
              id="specimen-modal-title"
              className="mt-0.5 truncate text-xl font-semibold tracking-tight text-stone-900"
            >
              {specimen.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${specimen.name} inspector`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-6 overflow-y-auto p-6 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="text-xs font-medium text-stone-500">Interactive Specimen</div>
            <Component />
            <p className="text-xs leading-relaxed text-stone-600">
              Mechanism: <span className="font-mono text-stone-800">{specimen.technique}</span>
            </p>
          </div>

          <div className="flex min-w-0 flex-col space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-stone-500">
                Self-Contained Component ({specimen.name}.tsx)
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-md bg-[#1D4ED8] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy TSX</span>
                  </>
                )}
              </button>
            </div>
            <pre className="max-h-80 overflow-auto rounded-xl border border-stone-200 bg-[#141413] p-4 font-mono text-[11px] leading-relaxed text-stone-200">
              <code>{specimen.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
