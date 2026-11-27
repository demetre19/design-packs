{/* Echo: compact FAQ list uses one cropped measure behind the active disclosure */}
import { Plus } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Faq3() {
  return (
    <section className="bg-ink px-5 py-20 text-white md:px-10">
      <div className="group relative mx-auto max-w-4xl overflow-hidden border border-white/15 p-6 md:p-9">
        <EchoMeasure index="03" tone="dark" size="md" surface="bg-ink" />
        <div className="type-micro text-accent">Boarding questions</div>
        {[
          ['How many boarders live at Loreto?', 'The boarding house accommodates up to approximately 60 girls.'],
          ['Who chooses weekly boarding?', 'Families who want school-week stability while keeping weekends at home.'],
          ['Can international students board?', 'Yes. Loreto supports international students within its boarding community.']
        ].map(([q, a], i) => (
          <details key={q} open={i === 0} className="border-t border-white/15 py-5 first:mt-8">
            <summary className="focus-ring flex cursor-pointer list-none items-center justify-between font-semibold">{q}<Plus className="h-4 w-4 text-accent" /></summary>
            <p className="type-body mt-3 max-w-2xl text-white/65">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
