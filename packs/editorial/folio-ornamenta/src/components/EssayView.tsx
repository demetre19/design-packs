import React from 'react';
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

interface EssayViewProps {
  onBackToGrid: () => void;
}

export function EssayView({ onBackToGrid }: EssayViewProps) {
  return (
    <article
      data-testid="essay-view"
      className="mx-auto max-w-3xl py-8 sm:py-12 space-y-10"
    >
      <header className="space-y-4 border-b border-[#E5E0D5] pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#57534E]">
          <span>Monograph No. 14</span>
          <span aria-hidden="true">·</span>
          <span>In-Context Demonstration</span>
          <span aria-hidden="true">·</span>
          <span>Deco1–Deco20</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#181715] text-balance">
          On Spatial Typography &amp; Margin Craft
        </h2>
        <p className="text-base leading-relaxed text-[#57534E]">
          A continuous reading column demonstrating how all twenty content-decoration ornaments operate together inside a single editorial essay.
        </p>
        <Deco17 />
      </header>

      <Deco14 />

      <section className="space-y-6">
        <p className="text-base leading-[1.78] text-[#292524] first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#181715]">
          Typography earns its authority through quiet structure. Before a single ornament is placed on the page, the editorial grid must establish measure, proportion, and optical balance so every paragraph welcomes sustained reading.
        </p>

        <Deco8 />

        <Deco5 />

        <Deco1 />

        <Deco6 />

        <Deco7 />
      </section>

      <section className="space-y-6 pt-4 border-t border-[#E5E0D5]">
        <Deco2 />

        <Deco9 />

        <Deco11 />

        <Deco4 />
      </section>

      <section className="space-y-6 pt-4 border-t border-[#E5E0D5]">
        <Deco12 />

        <Deco13 />

        <Deco16 />

        <Deco3 />
      </section>

      <section className="space-y-6 pt-4 border-t border-[#E5E0D5]">
        <Deco18 surface="paper" />

        <Deco19 />

        <Deco20 />

        <Deco10 />
      </section>

      <footer className="pt-4 border-t border-[#E5E0D5]">
        <Deco15
          directionLabel="Return to Catalogue"
          sectionIndex="Specimens 01–20"
          title="Browse Individual Content-Decoration Cards"
          onNavigate={onBackToGrid}
        />
      </footer>
    </article>
  );
}
