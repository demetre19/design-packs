import React, { useEffect, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Code2, Copy, Eye, Pause, Play, X } from 'lucide-react';
import type { AmbientComponentMeta } from '../data/ambientTypes';
import { AMBIENT_REGISTRY } from '../data/ambientRegistry';
import { formatAmbientIndex } from '../data/ambientUtils';

export interface AmbientInspectorModalProps {
  item: AmbientComponentMeta | null;
  paused: boolean;
  onTogglePause: () => void;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function AmbientInspectorModal({
  item,
  paused,
  onTogglePause,
  onClose,
  onNavigate,
}: AmbientInspectorModalProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNavigate('next');
      } else if (event.key === 'ArrowLeft') {
        onNavigate('prev');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onNavigate]);

  if (!item) {
    return null;
  }

  const entry = AMBIENT_REGISTRY[item.id];
  const PreviewComponent = entry?.Component;
  const sourceCode = entry?.source ?? '';

  const handleCopy = async () => {
    if (!sourceCode) return;
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
      role="dialog"
      aria-modal="true"
      aria-labelledby="inspector-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#0F1118] text-slate-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-mono-code tabular-nums">{formatAmbientIndex(item.index)}</span>
              <span aria-hidden="true">·</span>
              <span>{item.id}</span>
              <span aria-hidden="true">·</span>
              <span>{item.technique}</span>
            </div>
            <h2 id="inspector-modal-title" className="mt-1 text-lg font-semibold text-white">
              {item.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-white/10 bg-[#090A0F] p-1">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'preview'
                    ? 'bg-slate-100 text-slate-950'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                Live Stage
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'code'
                    ? 'bg-slate-100 text-slate-950'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                Source TSX
              </button>
            </div>

            <button
              type="button"
              onClick={onTogglePause}
              aria-label={paused ? 'Resume ambient motion' : 'Pause ambient motion'}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 px-3 text-xs font-medium text-slate-200 transition-colors hover:bg-white/5 whitespace-nowrap"
            >
              {paused ? (
                <>
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  Pause
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close inspector"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'preview' && PreviewComponent ? (
            <div className="space-y-6">
              <div
                data-motion={paused ? 'paused' : 'running'}
                className="rounded-xl border border-white/10"
              >
                <PreviewComponent className="min-h-[340px]" />
              </div>

              <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-medium text-slate-400">Implementation</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{item.summary}</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-slate-400">Recommended Placement</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{item.useCase}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Self-contained component — copy directly into any React + Tailwind project.
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:bg-white/10 whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy TSX
                    </>
                  )}
                </button>
              </div>
              <pre className="font-mono-code max-h-[420px] overflow-auto rounded-lg border border-white/10 bg-[#08090D] p-4 text-xs leading-relaxed text-slate-200">
                <code>{sourceCode}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer nav */}
        <div className="flex items-center justify-between border-t border-white/10 px-6 py-3.5">
          <button
            type="button"
            onClick={() => onNavigate('prev')}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white whitespace-nowrap"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </button>
          <span className="font-mono-code text-xs text-slate-400 tabular-nums">
            {formatAmbientIndex(item.index)} / 20
          </span>
          <button
            type="button"
            onClick={() => onNavigate('next')}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white whitespace-nowrap"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
