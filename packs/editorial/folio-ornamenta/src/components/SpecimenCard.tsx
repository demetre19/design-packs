import React, { useState } from 'react';
import { Check, Code2, Copy } from 'lucide-react';
import { SpecimenMeta } from '../utils/specimenCatalog';
import {
  Deco1,
  Deco2,
  Deco3,
  Deco4,
  Deco5,
  Deco6,
  Deco7,
  Deco8,
  Deco9,
  Deco10,
  Deco11,
  Deco12,
  Deco13,
  Deco14,
  Deco15,
  Deco16,
  Deco17,
  Deco18,
  Deco19,
  Deco20,
} from './deco';

const COMPONENT_MAP: Record<string, React.ComponentType> = {
  Deco1,
  Deco2,
  Deco3,
  Deco4,
  Deco5,
  Deco6,
  Deco7,
  Deco8,
  Deco9,
  Deco10,
  Deco11,
  Deco12,
  Deco13,
  Deco14,
  Deco15,
  Deco16,
  Deco17,
  Deco18,
  Deco19,
  Deco20,
};

interface SpecimenCardProps {
  specimen: SpecimenMeta;
}

export function SpecimenCard({ specimen }: SpecimenCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const Component = COMPONENT_MAP[specimen.id];
  const paddedNum = String(specimen.number).padStart(2, '0');
  const tagString = specimen.semanticTags.map((t) => `<${t}>`).join(' ');

  const handleCopySnippet = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(specimen.snippet).catch(() => {});
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <article
      id={specimen.id.toLowerCase()}
      data-testid={`specimen-card-${specimen.id}`}
      className="flex flex-col justify-between rounded-xl border border-[#E5E0D5] bg-white p-6 sm:p-7 transition-colors"
    >
      <div>
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#EFECE4]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#78716C]">
              <span className="font-mono font-semibold text-[#1E3A8A] tabular-nums">
                {paddedNum}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono font-medium text-[#181715]">
                {specimen.id}
              </span>
              <span aria-hidden="true">·</span>
              <span>{specimen.category}</span>
            </div>
            <p className="mt-1 font-mono text-[11px] text-[#78716C] truncate">
              {tagString}
            </p>
            <h2 className="mt-2 font-serif text-xl font-semibold text-[#181715] leading-snug">
              {specimen.title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-[#57534E]">
              {specimen.summary}
            </p>
          </div>

          <button
            type="button"
            aria-expanded={showCode}
            aria-label={`${showCode ? 'Hide' : 'View'} code for ${specimen.id}`}
            onClick={() => setShowCode((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D6CEBE] bg-[#FAF8F4] text-xs font-medium text-[#181715] hover:bg-[#F2EFE9] transition-colors shrink-0 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E3A8A]"
          >
            <Code2 className="w-3.5 h-3.5 text-[#57534E]" aria-hidden="true" />
            <span>{showCode ? 'Preview' : 'Code'}</span>
          </button>
        </div>

        <div className="pt-6">
          {showCode ? (
            <div className="rounded-lg border border-[#E5E0D5] bg-[#FAF8F4] p-4">
              <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#E5E0D5]">
                <span className="font-mono text-xs text-[#57534E]">
                  {specimen.id}.tsx usage
                </span>
                <button
                  type="button"
                  onClick={handleCopySnippet}
                  aria-label={`Copy ${specimen.id} snippet`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#D6CEBE] bg-white text-xs font-medium text-[#181715] hover:bg-[#F2EFE9] transition-colors whitespace-nowrap cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#14532D]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#57534E]" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-[#181715]">
                <code>{specimen.snippet}</code>
              </pre>
            </div>
          ) : (
            <div>{Component ? <Component /> : null}</div>
          )}
        </div>
      </div>
    </article>
  );
}
