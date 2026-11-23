import React, { useState } from 'react';
import { Code2, Copy, Check, Monitor, Smartphone } from 'lucide-react';
import { FooterCatalogItem } from '../data/footerCatalog';

interface FooterShowcaseCardProps {
  item: FooterCatalogItem;
  Component: React.ComponentType;
  sourceCode: string;
  onInspectCode: (item: FooterCatalogItem) => void;
  onPreviewLinkClick: (label: string, brand: string) => void;
}

export function FooterShowcaseCard({
  item,
  Component,
  sourceCode,
  onInspectCode,
  onPreviewLinkClick,
}: FooterShowcaseCardProps) {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(sourceCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const handlePreviewClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const label = anchor.textContent?.trim() || anchor.getAttribute('aria-label') || 'Link';
      onPreviewLinkClick(label, item.brand);
    }
  };

  return (
    <article
      id={`footer-${item.id}`}
      data-testid={`footer-card-${item.id}`}
      className="bg-white border border-zinc-200 rounded-xl overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-zinc-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white">
        <div className="space-y-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 tabular-nums">
            <span className="font-mono font-semibold text-zinc-900">
              {String(item.id).padStart(2, '0')}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-zinc-700">{item.componentName}</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-zinc-700">{item.topology}</span>
            <span aria-hidden="true">·</span>
            <span>{item.style}</span>
            <span aria-hidden="true">·</span>
            <span>{item.industry}</span>
          </div>
          <h2 className="text-base font-semibold tracking-tight text-zinc-950">
            {item.brand} — {item.title}
          </h2>
          <p className="text-xs text-zinc-500">{item.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="inline-flex items-center rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
            <button
              type="button"
              onClick={() => setViewport('desktop')}
              aria-label={`Desktop preview for ${item.componentName}`}
              aria-pressed={viewport === 'desktop'}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                viewport === 'desktop'
                  ? 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewport('mobile')}
              aria-label={`Mobile preview for ${item.componentName}`}
              aria-pressed={viewport === 'mobile'}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                viewport === 'mobile'
                  ? 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Mobile</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => onInspectCode(item)}
            aria-label={`View code for ${item.componentName}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-50 transition-colors cursor-pointer whitespace-nowrap"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>View Code</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy code for ${item.componentName}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800 transition-colors cursor-pointer whitespace-nowrap"
          >
            {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
            <span>{copied ? 'Copied' : 'Copy TSX'}</span>
          </button>
        </div>
      </div>

      <div
        onClickCapture={handlePreviewClick}
        className={`bg-zinc-100/80 transition-colors ${
          viewport === 'mobile' ? 'py-6 px-4 flex justify-center' : ''
        }`}
      >
        <div
          className={
            viewport === 'mobile'
              ? 'w-full max-w-[390px] border border-zinc-300 rounded-xl overflow-hidden shadow-sm bg-white'
              : 'w-full'
          }
        >
          <Component />
        </div>
      </div>
    </article>
  );
}
