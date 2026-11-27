{/* Echo: each fee card carries a cropped index that moves as the card is considered */}
import { Check } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

const tiers = [
  { index: '01', name: 'Junior day education', price: 'from $14,890', note: '2027 total, Reception–Year 1', points: ['Reception to Year 6 pathway', 'Sibling discounts apply', 'Transition program included'] },
  { index: '02', name: 'Senior day education', price: 'from $20,280', note: '2027 total, Year 7 entry', points: ['Years 7–12 academic program', 'SEAD wellbeing framework', 'Co-curricular access'] },
  { index: '03', name: 'Boarding addition', price: '$25,900', note: 'Full boarding addition, 2027', points: ['Weekly boarding $22,200', 'Small residential community', '10% sibling boarding discount'] }
];

export default function Pricing1() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="01" eyebrow="2027 fees" title="Transparent numbers, presented without friction." copy="A clear view of the major tuition and boarding commitments before a family begins a deeper conversation." />
        <div className="grid gap-px bg-line md:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="group relative flex min-h-[440px] flex-col overflow-hidden bg-paper p-7 transition-colors duration-200 ease-crisp hover:bg-white">
              <EchoMeasure index={tier.index} size="sm" surface="bg-paper" />
              <div className="type-micro text-accent">{tier.index}</div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{tier.name}</h3>
              <div className="type-editorial mt-10 text-5xl">{tier.price}</div>
              <div className="mt-2 text-sm text-secondary">{tier.note}</div>
              <ul className="mt-8 space-y-3 text-sm">
                {tier.points.map((point) => <li key={point} className="flex gap-3"><Check className="h-4 w-4 shrink-0 text-accent" />{point}</li>)}
              </ul>
              <a href="#" className="focus-ring mt-auto inline-flex pt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-ink underline decoration-accent underline-offset-8 transition-colors duration-200 ease-crisp hover:text-accent">Read fee schedule</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
