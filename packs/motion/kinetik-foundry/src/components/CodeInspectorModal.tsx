import React, { useEffect, useState } from 'react';
import { Check, Copy, RotateCcw, X } from 'lucide-react';
import { type KineticSpecimenMeta } from '../utils/kineticCatalog';
import { KINETIC_COMPONENTS, KINETIC_SOURCES } from './kinetic';

interface CodeInspectorModalProps {
  specimen: KineticSpecimenMeta | null;
  customText: string;
  speedMultiplier: number;
  onClose: () => void;
}

export function CodeInspectorModal({
  specimen,
  customText,
  speedMultiplier,
  onClose,
}: CodeInspectorModalProps) {
  const [replayKey, setReplayKey] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
    setReplayKey(0);
  }, [specimen?.id]);

  useEffect(() => {
    if (!specimen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [specimen, onClose]);

  if (!specimen) return null;

  const Component = KINETIC_COMPONENTS[specimen.id];
  const sourceCode = KINETIC_SOURCES[specimen.id] ?? '';
  const displayText = customText.trim() ? customText.trim() : specimen.defaultText;

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#121211]/55 p-4 sm:p-6"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inspector-dialog-title"
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-[#E5E3DD] bg-white shadow-xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#EFECE6] px-6 py-4">
          <div>
            <h2
              id="inspector-dialog-title"
              className="font-display text-lg font-bold text-[#121211]"
            >
              {specimen.componentName} — {specimen.title}
            </h2>
            <p className="mt-0.5 text-xs text-[#62605B]">
              {specimen.technique} · {specimen.timingLabel} · {specimen.properties.join(', ')}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close code inspector"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E3DD] text-[#121211] transition-colors hover:bg-[#FAF9F6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9381E] cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          <div className="rounded-xl border border-[#E5E3DD] bg-[#FAF9F6] p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-[#62605B]">Live Specimen Stage</span>
              <button
                type="button"
                onClick={() => setReplayKey((k) => k + 1)}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#E5E3DD] bg-white px-3 text-xs font-medium text-[#121211] transition-colors hover:border-[#121211] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5 text-[#62605B]" aria-hidden="true" />
                <span>Replay Animation</span>
              </button>
            </div>
            <div className="flex min-h-[120px] items-center overflow-hidden py-3">
              <Component
                key={`modal-${specimen.id}-${replayKey}-${speedMultiplier}-${displayText}`}
                text={displayText}
                speed={speedMultiplier}
                className="text-2xl sm:text-4xl leading-[1.15]"
              />
            </div>
          </div>

          <div>
            <div className="mb-2.5 flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#62605B]">
                src/components/kinetic/{specimen.componentName}.tsx
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#121211] px-3.5 text-xs font-medium text-white transition-colors hover:bg-[#D9381E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9381E] whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="max-h-[340px] overflow-auto rounded-xl border border-[#27272A] bg-[#141413] p-4 font-mono text-xs leading-relaxed text-[#F4F3EE]">
              <code>{sourceCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
