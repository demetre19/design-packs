import type {ReactNode} from 'react';
import {Code2} from 'lucide-react';
import type {SpecimenDefinition} from '../data/specimens';

interface SpecimenCardProps {
  specimen: SpecimenDefinition;
  onInspect: (specimen: SpecimenDefinition) => void;
  children: ReactNode;
}

export function SpecimenCard({
  specimen,
  onInspect,
  children,
}: SpecimenCardProps) {
  return (
    <article
      id={specimen.id.toLowerCase()}
      data-testid={`specimen-card-${specimen.id}`}
      className={`flex flex-col justify-between gap-6 p-6 rounded-2xl bg-white border border-zinc-200/90 ${
        specimen.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="font-mono font-medium text-zinc-700">
                {specimen.id}
              </span>
              <span aria-hidden="true">·</span>
              <span>{specimen.category}</span>
              <span aria-hidden="true">·</span>
              <span className="truncate">{specimen.mechanism}</span>
            </div>
            <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-zinc-950">
              {specimen.number}. {specimen.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onInspect(specimen)}
            aria-label={`Inspect source code for ${specimen.id} ${specimen.title}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <Code2 className="w-3.5 h-3.5" />
            Code
          </button>
        </div>

        <p className="text-sm leading-relaxed text-zinc-600 max-w-2xl">
          {specimen.description}
        </p>
      </div>

      <div className="pt-4 border-t border-zinc-100 flex items-center w-full">
        {children}
      </div>
    </article>
  );
}
