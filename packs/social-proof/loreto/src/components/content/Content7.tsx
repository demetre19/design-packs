{/* Artifact: old scholar correspondence bundle | Echo: cropped year measure reads as an archive index | Interactions: letter columns reveal marginal notes and postal rules move sideways on hover */}
import { MailOpen, PenLine } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Content7() {
  return (
    <section className="bg-ground px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border-t border-ink pt-12">
        <EchoMeasure index="07" size="lg" surface="bg-ground" />
        <div className="type-micro flex items-center gap-2 text-accent"><MailOpen size={14} /> Correspondence bundle</div>
        <h2 className="type-editorial mt-4 max-w-4xl text-5xl md:text-7xl">Former students write back with evidence of what stayed.</h2>
        <div className="mt-14 gap-10 md:columns-2 xl:columns-3">
          {[
            ['1954', 'Margaret K.', 'I learned that accuracy could be elegant. The laboratory notebooks were exact, but nobody mistook exactness for timidity.', 'Metallurgist / Melbourne'],
            ['1988', 'Priya S.', 'Boarding made independence ordinary before it was impressive. We managed our time because someone trusted us with it.', 'Architect / Singapore'],
            ['2017', 'Claudia B.', 'The teachers asked what I thought and then waited long enough for a real answer. I still notice when rooms do not do that.', 'Barrister / Adelaide'],
            ['2024', 'Nadia R.', 'Being surrounded by girls who wanted things changed what seemed normal. Ambition stopped feeling like an exception.', 'Engineering student / UNSW']
          ].map((letter, i) => (
            <article key={letter[0]} className="group relative mb-10 break-inside-avoid border border-line bg-paper p-6 transition-transform duration-200 ease-crisp hover:translate-x-2">
              <div className="flex items-baseline justify-between border-b border-line pb-4">
                <div className="type-display text-6xl text-ink/10">{letter[0]}</div>
                <PenLine size={18} className="text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" />
              </div>
              <p className="type-editorial mt-6 text-2xl leading-tight">“{letter[2]}”</p>
              <div className="type-micro mt-6 text-secondary">{letter[1]}</div>
              <div className="type-body mt-2 text-xs text-secondary/80">{letter[3]}</div>
              <div className="mt-6 h-px w-16 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
              <span className="type-micro absolute -top-2 left-4 bg-ground px-2 text-[9px] text-secondary">LETTER {String(i+1).padStart(2,'0')}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
