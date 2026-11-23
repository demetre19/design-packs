import React, { useState } from 'react';
import { Code2, RotateCcw } from 'lucide-react';
import { type KineticSpecimenMeta } from '../utils/kineticCatalog';
import { KINETIC_COMPONENTS } from './kinetic';

interface SpecimenCardProps {
  specimen: KineticSpecimenMeta;
  customText: string;
  speedMultiplier: number;
  globalReplayKey: number;
  onInspect: (specimen: KineticSpecimenMeta) => void;
}

const CATEGORY_LABELS: Record<KineticSpecimenMeta['category'], string> = {
  entrance: 'Entrance',
  interactive: 'Interactive',
  loop: 'Loop',
  editorial: 'Editorial',
};

export function SpecimenCard({
  specimen,
  customText,
  speedMultiplier,
  globalReplayKey,
  onInspect,
}: SpecimenCardProps) {
  const [localReplayKey, setLocalReplayKey] = useState(0);
  const Component = KINETIC_COMPONENTS[specimen.id];
  const displayText = customText.trim() ? customText.trim() : specimen.defaultText;
  const formattedIndex = String(specimen.id).padStart(2, '0');

  return (
    <article
      data-testid={`specimen-card-${specimen.id}`}
      className="flex flex-col justify-between rounded-xl border border-[#E5E3DD] bg-white p-6 transition-colors duration-200 hover:border-[#C9C6BE]"
    >
      <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-4 border-b border-[#EFECE6] pb-4">
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold text-[#121211]">
            <span className="font-mono text-xs font-medium text-[#716E68] tabular-nums mr-2">
              {formattedIndex}.
            </span>
            <span>{specimen.componentName}</span>
            <span className="mx-2 text-[#C4C1B8]" aria-hidden="true">
              —
            </span>
            <span>{specimen.title}</span>
          </h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-[#62605B]">
            <span>{CATEGORY_LABELS[specimen.category]}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{specimen.timingLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{specimen.technique}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setLocalReplayKey((k) => k + 1)}
            aria-label={`Replay ${specimen.componentName}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#E5E3DD] bg-[#FAF9F6] px-3 text-xs font-medium text-[#121211] transition-colors hover:border-[#121211] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9381E] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5 text-[#62605B]" aria-hidden="true" />
            <span>Replay</span>
          </button>
          <button
            type="button"
            onClick={() => onInspect(specimen)}
            aria-label={`View code for ${specimen.componentName}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#E5E3DD] bg-white px-3 text-xs font-medium text-[#121211] transition-colors hover:border-[#D9381E] hover:text-[#D9381E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9381E] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>View Code</span>
          </button>
        </div>
      </div>

      <div className="flex min-h-[168px] w-full items-center justify-start overflow-hidden py-8">
        <div className="w-full">
          <Component
            key={`${specimen.id}-${globalReplayKey}-${localReplayKey}-${speedMultiplier}-${displayText}`}
            text={displayText}
            speed={speedMultiplier}
            className={
              specimen.id === 6
                ? 'text-xl sm:text-2xl'
                : specimen.id === 14
                  ? 'text-2xl sm:text-3xl'
                  : 'text-2xl sm:text-[1.85rem] leading-[1.15]'
            }
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#EFECE6] pt-3.5 text-xs text-[#62605B]">
        <p className="max-w-[54ch] leading-relaxed">{specimen.description}</p>
        {specimen.interactionHint && (
          <span className="font-mono text-[11px] font-medium text-[#D9381E] whitespace-nowrap shrink-0">
            {specimen.interactionHint}
          </span>
        )}
      </div>
    </article>
  );
}
