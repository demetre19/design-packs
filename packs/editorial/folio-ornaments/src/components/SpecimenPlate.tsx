import React, { useState } from 'react';
import { Check, Code2, Copy } from 'lucide-react';
import type { OrnamentSpec } from '../types/ornament';
import { getOrnamentSource } from '../data/ornamentSources';
import {
  Orn1,
  Orn2,
  Orn3,
  Orn4,
  Orn5,
  Orn6,
  Orn7,
  Orn8,
  Orn9,
  Orn10,
  Orn11,
  Orn12,
  Orn13,
  Orn14,
  Orn15,
  Orn16,
  Orn17,
  Orn18,
  Orn19,
  Orn20,
} from './ornaments';

interface SpecimenPlateProps {
  spec: OrnamentSpec;
}

export function SpecimenPlate({ spec }: SpecimenPlateProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Interactive preview controls for components supporting variants
  const [orn1Flip, setOrn1Flip] = useState(false);
  const [orn2Variant, setOrn2Variant] = useState<'layered' | 'wave' | 'curved'>('layered');
  const [orn15Variant, setOrn15Variant] = useState<'all' | 'hand-drawn' | 'gradient' | 'double'>('all');

  const sourceCode = showCode ? getOrnamentSource(spec.componentName) : '';

  const handleCopy = async () => {
    const text = getOrnamentSource(spec.componentName);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const renderSpecimen = () => {
    switch (spec.componentName) {
      case 'Orn1':
        return <Orn1 flip={orn1Flip} />;
      case 'Orn2':
        return <Orn2 variant={orn2Variant} />;
      case 'Orn3':
        return <Orn3 />;
      case 'Orn4':
        return <Orn4 />;
      case 'Orn5':
        return <Orn5 />;
      case 'Orn6':
        return <Orn6 />;
      case 'Orn7':
        return <Orn7 />;
      case 'Orn8':
        return <Orn8 />;
      case 'Orn9':
        return <Orn9 />;
      case 'Orn10':
        return <Orn10 />;
      case 'Orn11':
        return <Orn11 />;
      case 'Orn12':
        return <Orn12 />;
      case 'Orn13':
        return <Orn13 />;
      case 'Orn14':
        return <Orn14 />;
      case 'Orn15':
        return <Orn15 variant={orn15Variant} />;
      case 'Orn16':
        return <Orn16 />;
      case 'Orn17':
        return <Orn17 />;
      case 'Orn18':
        return <Orn18 />;
      case 'Orn19':
        return <Orn19 />;
      case 'Orn20':
        return <Orn20 />;
      default:
        return null;
    }
  };

  const formattedNum = String(spec.number).padStart(2, '0');

  return (
    <article
      id={spec.id}
      data-testid={`specimen-${spec.componentName}`}
      className="flex flex-col border-t border-zinc-200 dark:border-zinc-800 pt-7"
    >
      {/* Plate Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-mono font-medium tabular-nums text-blue-700 dark:text-blue-400">
              Plate {formattedNum}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-zinc-700 dark:text-zinc-300">
              {spec.componentName}
            </span>
            <span aria-hidden="true">·</span>
            <span>{spec.categoryLabel}</span>
          </div>

          <h2 className="mt-1.5 font-serif text-xl font-semibold text-zinc-950 dark:text-zinc-50">
            {spec.title}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {spec.description}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            aria-expanded={showCode}
            aria-label={`Inspect TSX for ${spec.componentName}`}
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 dark:text-zinc-300 dark:hover:text-zinc-50 dark:hover:border-zinc-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:focus-visible:outline-blue-400"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{showCode ? 'Hide TSX' : 'Inspect TSX'}</span>
          </button>
        </div>
      </div>

      {/* Live Specimen Stage */}
      <div className="mt-4 rounded-lg bg-zinc-100/75 dark:bg-zinc-900/50 p-4 sm:p-5">
        {spec.componentName === 'Orn1' && (
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Orientation</span>
            <button
              type="button"
              onClick={() => setOrn1Flip((prev) => !prev)}
              className="rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              {orn1Flip ? 'Ascending Left' : 'Ascending Right'}
            </button>
          </div>
        )}

        {spec.componentName === 'Orn2' && (
          <div
            className="mb-3 flex flex-wrap items-center justify-between gap-2"
            role="group"
            aria-label="Orn2 curve mode"
          >
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Curve Mode</span>
            <div className="flex items-center gap-1.5">
              {(['layered', 'wave', 'curved'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={orn2Variant === mode}
                  onClick={() => setOrn2Variant(mode)}
                  className={`rounded px-2.5 py-1 text-xs font-medium capitalize transition-colors cursor-pointer ${
                    orn2Variant === mode
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                      : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        )}

        {spec.componentName === 'Orn15' && (
          <div
            className="mb-3 flex flex-wrap items-center justify-between gap-2"
            role="group"
            aria-label="Orn15 underline mode"
          >
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Treatment</span>
            <div className="flex flex-wrap items-center gap-1.5">
              {([
                { id: 'all', label: 'All Three' },
                { id: 'hand-drawn', label: 'Hand-Drawn' },
                { id: 'gradient', label: 'Gradient Bar' },
                { id: 'double', label: 'Double-Line' },
              ] as const).map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  aria-pressed={orn15Variant === mode.id}
                  onClick={() => setOrn15Variant(mode.id)}
                  className={`rounded px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                    orn15Variant === mode.id
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                      : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {renderSpecimen()}
      </div>

      {/* Expandable TSX Source Inspector */}
      {showCode && (
        <div className="mt-3 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100">
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2 text-xs text-zinc-400">
            <span className="font-mono">{spec.componentName}.tsx</span>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={`Copy TSX for ${spec.componentName}`}
              className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Copy TSX</span>
                </>
              )}
            </button>
          </div>
          <pre className="max-h-72 overflow-auto p-4 font-mono text-xs leading-relaxed text-zinc-200">
            <code>{sourceCode}</code>
          </pre>
        </div>
      )}

      {/* Quiet Unboxed Motif Footer */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <span>{spec.motifs.join(' · ')}</span>
        <span className="font-mono">{spec.semanticTags.join(' / ')}</span>
      </div>
    </article>
  );
}
