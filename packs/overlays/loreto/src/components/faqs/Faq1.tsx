{/* Echo: each open question row carries a cropped number and travelling rule notch */}
import { ChevronDown } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

const faqs = [
  ['When should we apply?', 'As early as possible. Applications are considered by date received, with priority for siblings and Old Scholar families.'],
  ['Is boarding available part-time?', 'Yes. Loreto offers full-time and weekly boarding for students in Years 7 to 12.'],
  ['Do boys attend Loreto?', 'Boys may attend the Early Learning Centre. Reception to Year 12 is girls-only.']
];

export default function Faq1() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionIntro index="01" eyebrow="Questions" title="What parents ask first." />
        <div className="border-t border-line">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0} className="group relative overflow-hidden border-b border-line bg-paper transition-colors duration-200 ease-crisp hover:bg-white">
              <EchoMeasure index={`0${i + 1}`} size="sm" surface="bg-paper" />
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between px-5 py-6 text-xl font-semibold tracking-[-0.03em]">{q}<ChevronDown className="h-5 w-5 text-accent" /></summary>
              <p className="type-body max-w-2xl px-5 pb-6 text-secondary">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
