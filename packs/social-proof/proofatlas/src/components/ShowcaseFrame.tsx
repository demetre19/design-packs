import React, { useState } from 'react';
import { Check, Copy, Code2, Monitor, Smartphone } from 'lucide-react';
import type { ProofCatalogItem } from '../utils/proofCatalog';

interface ShowcaseFrameProps {
  item: ProofCatalogItem;
  Component: React.ComponentType;
}

export function ShowcaseFrame({ item, Component }: ShowcaseFrameProps) {
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const paddedIndex = String(item.id).padStart(2, '0');

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(item.usageSnippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article
      id={`proof-${item.id}`}
      data-testid={`showcase-card-${item.componentName}`}
      className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
    >
      <div className="flex flex-col justify-between gap-4 border-b border-neutral-200 bg-[#FAFAF8] px-5 py-4 sm:flex-row sm:items-center sm:px-6">
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <h3 className="text-base font-semibold tracking-tight text-neutral-950">
              {paddedIndex}. {item.componentName} — {item.title}
            </h3>
          </div>
          <p className="mt-1 text-xs text-neutral-500">
            <span>{item.category}</span>
            <span aria-hidden="true" className="mx-1.5">·</span>
            <span>{item.style}</span>
            <span aria-hidden="true" className="mx-1.5">·</span>
            <span>{item.layoutVariant}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="inline-flex rounded-lg bg-neutral-200/70 p-0.5" role="group" aria-label={`Preview width for ${item.componentName}`}>
            <button
              type="button"
              onClick={() => setPreviewMode('desktop')}
              aria-pressed={previewMode === 'desktop'}
              aria-label={`Desktop preview for ${item.componentName}`}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                previewMode === 'desktop'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setPreviewMode('mobile')}
              aria-pressed={previewMode === 'mobile'}
              aria-label={`Mobile preview for ${item.componentName}`}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                previewMode === 'mobile'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
              Mobile
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowCode((prev) => !prev)}
            aria-expanded={showCode}
            aria-label={`Toggle TSX snippet for ${item.componentName}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-50 whitespace-nowrap shrink-0"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            {showCode ? 'Hide TSX' : 'View TSX'}
          </button>
        </div>
      </div>

      {showCode && (
        <div className="border-b border-neutral-200 bg-neutral-950 px-5 py-4 text-neutral-100 sm:px-6">
          <div className="mb-2 flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-neutral-400">
              {item.componentName} · Self-contained component import
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-xs font-medium text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white whitespace-nowrap shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copy snippet
                </>
              )}
            </button>
          </div>
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-neutral-200">
            <code>{item.usageSnippet}</code>
          </pre>
        </div>
      )}

      <div className={previewMode === 'mobile' ? 'bg-neutral-100 py-6 px-4' : 'bg-white'}>
        <div
          className={
            previewMode === 'mobile'
              ? 'mx-auto max-w-[390px] overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm'
              : 'w-full'
          }
        >
          <Component />
        </div>
      </div>
    </article>
  );
}
