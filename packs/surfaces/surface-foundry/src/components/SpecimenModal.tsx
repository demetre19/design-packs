import { Check, ChevronLeft, ChevronRight, Copy, Download, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { BackgroundMeta } from '../data/backgroundsMeta';
import { BG_COMPONENT_MAP } from './backgrounds';

interface SpecimenModalProps {
  meta: BackgroundMeta | null;
  initialTab: 'preview' | 'code';
  isDark: boolean;
  onToggleDark: () => void;
  onClose: () => void;
  onStep: (direction: -1 | 1) => void;
}

export function SpecimenModal({
  meta,
  initialTab,
  isDark,
  onToggleDark,
  onClose,
  onStep,
}: SpecimenModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
    setCopied(false);
  }, [meta, initialTab]);

  useEffect(() => {
    if (!meta) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onStep(-1);
      } else if (e.key === 'ArrowRight') {
        onStep(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [meta, onClose, onStep]);

  if (!meta) return null;

  const BgComponent = BG_COMPONENT_MAP[meta.id];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meta.sourceCode);
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 px-5 py-3.5 dark:border-zinc-800">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-xs font-medium text-blue-700 tabular-nums dark:text-blue-400">
              {meta.id} / 20
            </span>
            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">
              ·
            </span>
            <h2
              id="specimen-modal-title"
              className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100"
            >
              {meta.name}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`cursor-pointer rounded-md px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === 'preview'
                    ? 'bg-white text-zinc-900 shadow-xs dark:bg-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                Live Preview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`cursor-pointer rounded-md px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === 'code'
                    ? 'bg-white text-zinc-900 shadow-xs dark:bg-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                TSX Source
              </button>
            </div>

            <button
              type="button"
              onClick={onToggleDark}
              aria-label={isDark ? 'Switch preview to light mode' : 'Switch preview to dark mode'}
              className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
            >
              {isDark ? <Sun className="h-3.5 w-3.5" aria-hidden="true" /> : <Moon className="h-3.5 w-3.5" aria-hidden="true" />}
              <span>{isDark ? 'Light' : 'Dark'}</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onStep(-1)}
                aria-label="Previous background"
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onStep(1)}
                aria-label="Next background"
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close specimen modal"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {activeTab === 'preview' ? (
            <div className="p-0">
              {BgComponent ? <BgComponent className="min-h-[440px] flex items-center" /> : null}
            </div>
          ) : (
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Self-contained React + Tailwind CSS component · {meta.technique}
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400 dark:text-emerald-600" aria-hidden="true" />
                      <span>Copied TSX</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy TSX</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                <code>{meta.sourceCode}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ExportBundleModalProps {
  isOpen: boolean;
  bundleCode: string;
  onClose: () => void;
}

export function ExportBundleModal({ isOpen, bundleCode, onClose }: ExportBundleModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyAll = async () => {
    try {
      await navigator.clipboard.writeText(bundleCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([bundleCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'backgrounds.tsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="export-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
          <div>
            <h2 id="export-modal-title" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Export All 20 Components (Bg1–Bg20)
            </h2>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              Single self-contained TSX module · Pure SVG &amp; CSS gradients · Light + dark opacity variants
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 whitespace-nowrap shrink-0"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download .tsx</span>
            </button>
            <button
              type="button"
              onClick={handleCopyAll}
              className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white whitespace-nowrap shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400 dark:text-emerald-600" aria-hidden="true" />
                  <span>Copied Bundle</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy All</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close export modal"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs leading-relaxed text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <code>{bundleCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
