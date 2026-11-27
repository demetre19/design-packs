{/* Echo: comparison rows use cropped numerals and lateral rule movement to signal selection */}
import { Check } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

const rows = [
  ['All-girls environment', 'Purpose-built confidence, participation and leadership'],
  ['Day and boarding', 'One connected community across Adelaide, regional SA and overseas'],
  ['Early Learning to Year 12', 'Continuity of culture, expectations and care'],
  ['SEAD framework', 'Social-emotional and academic development taught deliberately']
];

export default function Feature4() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionIntro index="04" eyebrow="Compare carefully" title="What families are really comparing." />
        <div className="overflow-hidden border border-line bg-paper">
          {rows.map(([title, copy], i) => (
            <div key={title} className="group relative grid gap-3 overflow-hidden border-b border-line p-5 transition-colors duration-200 ease-crisp last:border-b-0 hover:bg-white md:grid-cols-[72px_1fr_1.2fr_32px] md:items-center md:p-6">
              <EchoMeasure index={`0${i + 1}`} size="sm" surface="bg-paper" />
              <div className="type-micro text-accent">0{i + 1}</div>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3>
              <p className="type-body text-sm text-secondary">{copy}</p>
              <Check className="h-5 w-5 text-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
