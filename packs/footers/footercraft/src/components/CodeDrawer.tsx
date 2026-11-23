import React, { useEffect, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { FooterCatalogItem } from '../data/footerCatalog';

interface CodeDrawerProps {
  item: FooterCatalogItem | null;
  sourceCode: string;
  onClose: () => void;
}

export function CodeDrawer({ item, sourceCode, onClose }: CodeDrawerProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(sourceCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-zinc-950/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="code-drawer-title"
      onClick={onClose}
    >
      <div
        className="relative h-full w-full max-w-3xl bg-zinc-950 text-zinc-100 border-l border-zinc-800 flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-zinc-800">
          <div>
            <p className="text-xs text-zinc-400">
              {String(item.id).padStart(2, '0')} · {item.topology} · {item.style}
            </p>
            <h2 id="code-drawer-title" className="mt-1 text-lg font-semibold text-white">
              {item.componentName} — {item.brand}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors cursor-pointer whitespace-nowrap"
            >
              {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
              <span>{copied ? 'Copied TSX' : 'Copy TSX'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close code inspector"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <pre className="font-mono text-xs leading-relaxed text-zinc-200 whitespace-pre overflow-x-auto">
            <code>{sourceCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
