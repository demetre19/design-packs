'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { Check, Copy, FileCode2, X } from 'lucide-react';

interface SourceViewerModalProps {
  componentName: string | null;
  sourceCode: string;
  onClose: () => void;
}

export function SourceViewerModal({
  componentName,
  sourceCode,
  onClose,
}: SourceViewerModalProps) {
  const [copied, setCopied] = useState(false);
  const headingId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!componentName) return;
    document.body.classList.add('overflow-hidden');
    const timer = setTimeout(() => closeRef.current?.focus(), 10);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [componentName, onClose]);

  if (!componentName) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sourceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/65 backdrop-blur-xs p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className="w-full max-w-[720px] max-h-[85vh] flex flex-col overflow-hidden rounded-xl bg-[#0F1218] text-slate-100 border border-slate-800 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-800 px-5 py-3.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <FileCode2
              className="h-4 w-4 text-sky-400 shrink-0"
              aria-hidden="true"
            />
            <h2
              id={headingId}
              className="font-mono text-sm font-semibold text-white truncate"
            >
              {componentName}.tsx
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
                  <span>Copy TSX</span>
                </>
              )}
            </button>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={`Close ${componentName} source viewer`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-5">
          <pre className="font-mono text-xs leading-relaxed text-slate-200 whitespace-pre">
            <code>{sourceCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
