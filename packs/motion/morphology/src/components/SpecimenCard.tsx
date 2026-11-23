import type { ReactNode } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import type { MorphSpec } from '../utils/morphCatalog';

interface SpecimenCardProps {
  spec: MorphSpec;
  morphed: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export function SpecimenCard({ spec, morphed, onToggle, children }: SpecimenCardProps) {
  const paddedIndex = String(spec.index).padStart(2, '0');

  return (
    <article
      data-testid={`specimen-${spec.id}`}
      data-morphed={morphed ? 'true' : 'false'}
      className="flex flex-col bg-white border border-[#E5E5E0] rounded-2xl p-5 shadow-[0_1px_2px_rgba(17,17,16,0.04)]"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="min-w-0 flex items-baseline gap-2">
          <span className="text-xs font-mono tabular-nums text-[#6E6E68] shrink-0">
            {paddedIndex}.
          </span>
          <h3 className="text-sm font-semibold text-[#111110] truncate">{spec.name}</h3>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-label={
            morphed
              ? `Reset ${spec.name} to resting state`
              : `Morph ${spec.name} to end state`
          }
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#52524E] hover:text-[#111110] hover:bg-[#F4F4F0] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
        >
          {morphed ? (
            <>
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
              <span>Morph</span>
            </>
          )}
        </button>
      </div>

      <div className="stage-grid relative flex-1 min-h-[252px] bg-[#FAFAF8] border border-[#ECECE6] rounded-xl p-4 flex items-center justify-center">
        {children}
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <p className="text-xs text-[#52524E] leading-relaxed">{spec.mechanism}</p>
        <div className="flex items-center gap-2 text-[11px] text-[#6E6E68]">
          <span>Morph{spec.index}</span>
          <span aria-hidden="true">·</span>
          <span className={morphed ? 'text-[#2563EB] font-medium' : 'text-[#6E6E68]'}>
            {morphed ? spec.endStateLabel : spec.restStateLabel}
          </span>
        </div>
      </div>
    </article>
  );
}
