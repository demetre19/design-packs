import { Maximize2, RotateCw } from 'lucide-react';
import { useState } from 'react';
import type { StateSpec } from '../utils/statesCatalog';
import { STATE_COMPONENTS } from './states';

interface SpecimenCardProps {
  spec: StateSpec;
  globalReplay: number;
  onInspect: (spec: StateSpec) => void;
}

export function SpecimenCard({ spec, globalReplay, onInspect }: SpecimenCardProps) {
  const [localReplay, setLocalReplay] = useState(0);
  const StateComponent = STATE_COMPONENTS[spec.id];
  const paddedIndex = String(spec.id).padStart(2, '0');

  return (
    <article
      data-testid={`specimen-card-${spec.id}`}
      className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden"
    >
      {/* Header Row: Editorial Index, Title & Unboxed Category */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-100">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-mono font-medium tabular-nums text-slate-400">
              {paddedIndex}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-500">{spec.componentName}</span>
            <span aria-hidden="true">·</span>
            <span>{spec.category}</span>
          </div>
          <h2 className="font-display text-base font-semibold text-slate-900 tracking-tight truncate mt-0.5">
            {spec.title}
          </h2>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setLocalReplay((n) => n + 1)}
            aria-label={`Replay ${spec.title}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Replay</span>
          </button>
          <button
            type="button"
            onClick={() => onInspect(spec)}
            aria-label={`Inspect ${spec.title}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Isolated Specimen Stage (End/Active State Rendered Statically) */}
      <div className="stage-grid flex-1 min-h-[208px] px-5 py-6 flex items-center justify-center">
        {StateComponent && <StateComponent replaySignal={globalReplay + localReplay} />}
      </div>

      {/* Footer Spec Line: Clean Unboxed Metadata */}
      <div className="px-4 py-2.5 border-t border-slate-100 bg-white flex items-center justify-between gap-2 text-xs text-slate-500">
        <span className="truncate">{spec.mechanism}</span>
        <span className="font-mono text-[11px] tabular-nums text-slate-400 whitespace-nowrap shrink-0">
          {spec.timing}
        </span>
      </div>
    </article>
  );
}
