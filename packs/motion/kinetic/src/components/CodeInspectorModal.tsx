import {useEffect, useState} from 'react';
import {Check, Copy, X} from 'lucide-react';
import type {SpecimenDefinition} from '../data/specimens';

interface CodeInspectorModalProps {
  specimen: SpecimenDefinition | null;
  onClose: () => void;
}

export function CodeInspectorModal({
  specimen,
  onClose,
}: CodeInspectorModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
    if (!specimen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [specimen, onClose]);

  if (!specimen) return null;

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/45 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inspector-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-2xl bg-white border border-zinc-200 shadow-xl overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-zinc-200">
          <div>
            <p className="text-xs text-zinc-500">
              {specimen.id} · {specimen.category} · {specimen.mechanism}
            </p>
            <h2
              id="inspector-modal-title"
              className="mt-1 text-lg font-semibold text-zinc-950"
            >
              {specimen.number}. {specimen.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close code inspector"
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 bg-zinc-50 space-y-4">
          <p className="text-sm text-zinc-600 leading-relaxed">
            {specimen.description}
          </p>

          <div className="relative rounded-xl bg-zinc-950 text-zinc-100 p-4 overflow-x-auto">
            <pre className="font-mono text-xs leading-relaxed">
              <code>{specimen.code}</code>
            </pre>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-6 py-4 bg-white border-t border-zinc-200">
          <span className="text-xs text-zinc-500">
            Self-contained React + Tailwind snippet
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Snippet
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
