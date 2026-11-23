import { ComponentType, useState } from 'react';
import { Check, Code2, Copy, Eye, Pin, PinOff } from 'lucide-react';
import { FeedbackMeta } from '../utils/feedbackCatalog';
import {
  Feedback1,
  Feedback2,
  Feedback3,
  Feedback4,
  Feedback5,
  Feedback6,
  Feedback7,
  Feedback8,
  Feedback9,
  Feedback10,
  Feedback11,
  Feedback12,
  Feedback13,
  Feedback14,
  Feedback15,
  Feedback16,
  Feedback17,
  Feedback18,
  Feedback19,
  Feedback20,
} from './feedback';

export const COMPONENT_MAP: Record<FeedbackMeta['componentName'], ComponentType> = {
  Feedback1,
  Feedback2,
  Feedback3,
  Feedback4,
  Feedback5,
  Feedback6,
  Feedback7,
  Feedback8,
  Feedback9,
  Feedback10,
  Feedback11,
  Feedback12,
  Feedback13,
  Feedback14,
  Feedback15,
  Feedback16,
  Feedback17,
  Feedback18,
  Feedback19,
  Feedback20,
};

interface ShowcaseCardProps {
  meta: FeedbackMeta;
  isPinned: boolean;
  onTogglePin: (meta: FeedbackMeta) => void;
}

function getStageAlignmentClass(placement: FeedbackMeta['placement']): string {
  switch (placement) {
    case 'Bottom-Right':
      return 'items-end justify-end pt-10';
    case 'Top-Right':
      return 'items-start justify-end pb-8';
    case 'Top Banner':
      return 'items-start justify-stretch pb-8';
    case 'Bottom Bar':
      return 'items-end justify-stretch pt-10';
    case 'Bottom-Center':
      return 'items-end justify-center pt-8';
    case 'Centered':
      return 'items-center justify-center py-4';
    case 'Inline':
    default:
      return 'items-stretch justify-center';
  }
}

export function ShowcaseCard({ meta, isPinned, onTogglePin }: ShowcaseCardProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const Component = COMPONENT_MAP[meta.componentName];
  const stageClass = getStageAlignmentClass(meta.placement);
  const formattedIndex = String(meta.number).padStart(2, '0');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meta.codeSnippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <article
      id={meta.id}
      data-testid={`card-${meta.componentName}`}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <div className="border-b border-slate-100 px-5 py-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-500">
            <span className="font-mono font-semibold tabular-nums text-slate-900">
              {formattedIndex}. {meta.componentName}
            </span>
            <span aria-hidden="true">·</span>
            <span>{meta.placement}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[11px] text-slate-600">{meta.ariaRole}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {meta.supportsViewportPin && (
              <button
                type="button"
                onClick={() => onTogglePin(meta)}
                aria-pressed={isPinned}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isPinned
                    ? 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {isPinned ? (
                  <>
                    <PinOff className="h-3.5 w-3.5" aria-hidden="true" />
                    Unpin Viewport
                  </>
                ) : (
                  <>
                    <Pin className="h-3.5 w-3.5" aria-hidden="true" />
                    Pin to Viewport
                  </>
                )}
              </button>
            )}

            <div
              role="group"
              aria-label={`${meta.componentName} view mode`}
              className="flex items-center rounded-lg bg-slate-100 p-0.5"
            >
              <button
                type="button"
                onClick={() => setViewMode('preview')}
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  viewMode === 'preview'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                Preview
              </button>
              <button
                type="button"
                onClick={() => setViewMode('code')}
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  viewMode === 'code'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                TSX
              </button>
            </div>
          </div>
        </div>

        <h3 className="mt-2.5 text-base font-semibold tracking-tight text-slate-900">
          {meta.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">{meta.summary}</p>
      </div>

      {viewMode === 'preview' ? (
        <div
          className={`flex min-h-[210px] flex-1 bg-[#F8F9FA] p-5 ${stageClass}`}
          aria-label={`${meta.componentName} interactive stage`}
        >
          <Component />
        </div>
      ) : (
        <div className="flex min-h-[210px] flex-1 flex-col justify-between bg-slate-950 p-4 text-slate-100">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <span className="font-mono text-xs text-slate-400">
              {meta.componentName}.tsx · {meta.dismissBehavior}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white hover:bg-white/20 whitespace-nowrap shrink-0"
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
          <pre className="mt-3 overflow-x-auto font-mono text-xs leading-relaxed text-slate-200">
            <code>{meta.codeSnippet}</code>
          </pre>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-white px-5 py-2.5 text-[11px] text-slate-500">
        <span>{meta.category}</span>
        <span>{meta.dismissBehavior}</span>
      </div>
    </article>
  );
}
