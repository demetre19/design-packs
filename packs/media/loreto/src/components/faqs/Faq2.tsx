{/* Echo: question index column uses cropped typography as the persistent orientation device */}
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

const items = [
  ['What makes a girls’ school different?', 'Participation, leadership and confidence are deliberately normalised rather than left to chance.'],
  ['What are the main intake points?', 'Reception, Year 7 and other year levels subject to availability.'],
  ['Are scholarships available?', 'Yes. Academic, music and boarding-related scholarship pathways are offered in selected years.']
];

export default function Faq2() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro index="02" eyebrow="Understand the fit" title="Answers without admissions fog." />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([q, a], i) => (
            <article key={q} className="group relative min-h-[290px] overflow-hidden border border-line bg-white p-6 transition-colors duration-200 ease-crisp hover:bg-ground">
              <EchoMeasure index={`0${i + 1}`} size="sm" surface="bg-white" />
              <div className="type-micro text-accent">0{i + 1}</div>
              <h3 className="mt-14 text-2xl font-semibold tracking-[-0.035em]">{q}</h3>
              <p className="type-body mt-4 text-sm text-secondary">{a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
