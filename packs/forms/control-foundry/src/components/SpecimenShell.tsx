import type { ReactNode } from 'react';

interface SpecimenShellProps {
  index: string;
  id: string;
  categoryLabel: string;
  title: string;
  summary: string;
  ariaNote: string;
  children: ReactNode;
}

export function SpecimenShell({
  index,
  id,
  categoryLabel,
  title,
  summary,
  ariaNote,
  children,
}: SpecimenShellProps) {
  return (
    <article
      id={id}
      data-testid={`specimen-${id}`}
      className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-slate-300"
    >
      <div>
        <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-mono tabular-nums">
            <span className="font-semibold text-slate-900">{index}</span>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <span>{id}</span>
          </div>
          <span className="font-medium text-slate-600">{categoryLabel}</span>
        </div>

        <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
          {summary}
        </p>
      </div>

      <div className="mt-5 rounded-lg border border-slate-200/80 bg-slate-50/70 p-4">
        {children}
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
        <span>Accessibility: {ariaNote}</span>
      </div>
    </article>
  );
}
