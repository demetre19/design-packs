import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import type { WayCatalogItem } from '../utils/stepLogic';
import { WAY_COMPONENTS } from './wayfinding';

interface SpecimenCardProps {
  item: WayCatalogItem;
  globalResetKey: number;
}

const STYLE_LABELS: Record<WayCatalogItem['style'], string> = {
  minimal: 'Minimal',
  professional: 'Professional',
  dark: 'Dark',
  colourful: 'Colourful',
};

const DENSITY_LABELS: Record<WayCatalogItem['density'], string> = {
  compact: 'Compact',
  spacious: 'Spacious',
};

export function SpecimenCard({ item, globalResetKey }: SpecimenCardProps) {
  const [localResetKey, setLocalResetKey] = useState(0);
  const Component = WAY_COMPONENTS[item.componentName];

  return (
    <section
      id={item.id}
      data-testid={`specimen-${item.componentName}`}
      aria-labelledby={`${item.id}-heading`}
      className="pt-8 pb-10 border-t border-slate-200/90"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="font-mono tabular-nums text-slate-900 font-semibold">
              {String(item.index).padStart(2, '0')}. {item.componentName}
            </span>
            <span aria-hidden="true">·</span>
            <span>{item.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{DENSITY_LABELS[item.density]}</span>
            <span aria-hidden="true">·</span>
            <span>{STYLE_LABELS[item.style]}</span>
          </div>
          <h2
            id={`${item.id}-heading`}
            className="text-lg font-bold text-slate-950 tracking-tight mt-1"
          >
            {item.title}
          </h2>
          <p className="text-sm text-slate-600 mt-0.5 max-w-2xl">{item.description}</p>
        </div>

        <button
          type="button"
          onClick={() => setLocalResetKey((k) => k + 1)}
          aria-label={`Reset ${item.componentName} state`}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Reset
        </button>
      </div>

      <div key={`${globalResetKey}-${localResetKey}`}>
        {Component ? <Component /> : null}
      </div>
    </section>
  );
}
