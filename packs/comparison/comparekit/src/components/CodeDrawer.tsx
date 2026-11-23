import { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import type { ComparisonShowcaseItem } from './comparisons';

interface CodeDrawerProps {
  item: ComparisonShowcaseItem | null;
  sourceCode: string;
  onClose: () => void;
}

export function CodeDrawer({ item, sourceCode, onClose }: CodeDrawerProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sourceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-stone-950/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="code-drawer-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-stone-950 text-stone-100 h-full flex flex-col border-l border-stone-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-stone-800">
          <div className="min-w-0">
            <p className="text-xs text-stone-400">
              {item.name}.tsx · {item.style} · {item.columnCount} Columns
            </p>
            <h2 id="code-drawer-title" className="text-base font-semibold text-white truncate font-display">
              {item.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-800 text-stone-100 hover:bg-stone-700 transition-colors whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copy TSX</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close code inspector"
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <pre className="text-xs leading-relaxed font-mono text-stone-200 whitespace-pre-wrap break-words">
            <code>{sourceCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
