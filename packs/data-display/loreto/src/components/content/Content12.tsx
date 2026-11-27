{/* Artifact: library borrowing card | Echo: cropped borrow sequence number projects from the catalogue rail | Interactions: index dividers, due-date stamps and checkout rules slide horizontally on hover */}
import { BookCopy, LibraryBig } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const offsets = ['md:translate-y-0','md:translate-y-8','md:translate-y-0','md:translate-y-8'];

const loans = [
  ['The Midnight Library', 'Matt Haig', '14 MAR', 'renewed once', 'md:flex-[1.2]'],
  ['A Room of One’s Own', 'Virginia Woolf', '21 MAR', 'senior reading circle', 'md:flex-[0.95]'],
  ['The Queen’s Gambit', 'Walter Tevis', '28 MAR', 'strategy club reference', 'md:flex-[1.05]'],
  ['Hidden Figures', 'Margot Lee Shetterly', '04 APR', 'STEM biography shelf', 'md:flex-[0.8]']
];

export default function Content12() {
  return (
    <section className="surface-archive bg-ground px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-line bg-paper p-6 md:p-10">
        <EchoMeasure index="12" size="lg" surface="bg-paper" />
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <div className="type-micro flex items-center gap-2 text-accent"><LibraryBig size={14} /> Borrowing card</div>
            <h2 className="type-editorial mt-4 max-w-2xl text-5xl md:text-7xl">A reading life leaves a visible trail.</h2>
          </div>
          <p className="type-body mt-6 max-w-sm text-sm text-secondary md:mt-0">The library card treats curiosity as evidence: what was borrowed, when it returned, and what conversation it fed next.</p>
        </div>
        <div className="relative mt-16 border-y border-ink py-8">
          <div className="absolute inset-x-0 bottom-8 hidden h-px bg-ink/30 md:block" />
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:gap-0">
            {loans.map((book, i) => (
              <article key={book[0]} className={`group relative border border-line bg-ground p-5 md:mx-[-2px] ${book[4]} ${offsets[i]}`}>
                <div className="flex items-start justify-between gap-5">
                  <div className="type-display text-6xl text-ink/10 transition-transform duration-200 ease-crisp group-hover:translate-x-2">{String(i+1).padStart(2,'0')}</div>
                  <div className="shrink-0 border border-ink px-3 py-2 text-center transition-transform duration-200 ease-crisp group-hover:translate-x-3">
                    <div className="type-micro text-[9px] text-secondary">DUE</div>
                    <div className="type-editorial mt-1 text-lg">{book[2]}</div>
                  </div>
                </div>
                <h3 className="type-editorial mt-6 text-2xl md:text-3xl">{book[0]}</h3>
                <div className="type-micro mt-2 text-secondary">{book[1]}</div>
                <p className="type-body mt-4 text-xs text-secondary md:text-sm">{book[3]}</p>
                <div className="mt-5 h-[3px] w-10 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
        <div className="type-micro mt-8 flex items-center gap-2 text-secondary"><BookCopy size={14} /> Fiction and biography are issued for three weeks; renewal is one conversation long.</div>
      </div>
    </section>
  );
}
