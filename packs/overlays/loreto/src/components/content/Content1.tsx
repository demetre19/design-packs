{/* Artifact: enrolment register ledger | Echo: register measure and travelling notch mark each row as it is read | Interactions: ledger rules and reference slips slide laterally on hover */}
import { ArrowRight, BookOpenCheck } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

const entries = [
  ['R-2027-014', 'Reception', 'First confidence interview', 'Families meet the junior school before any paperwork is signed.'],
  ['Y5-2027-031', 'Year 5', 'Mid-primary entry', 'Literacy and numeracy evidence read beside the student conversation.'],
  ['Y7-2027-086', 'Year 7', 'Major intake', 'Scholarship, boarding and subject intentions recorded in one register line.'],
  ['Y10-2027-009', 'Year 10', 'Senior entry', 'SACE pathway discussed against existing subject history.']
];

export default function Content1() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl border-y border-line py-10">
        <EchoMeasure index="01" size="lg" surface="bg-paper" />
        <div className="flex flex-col gap-8 md:flex-row md:items-end">
          <div className="md:w-[36%]">
            <div className="type-micro flex items-center gap-2 text-accent"><BookOpenCheck size={14} /> Enrolment register</div>
            <h2 className="type-editorial mt-4 text-5xl md:text-7xl">Entry is recorded as a conversation, not a transaction.</h2>
          </div>
          <p className="type-body max-w-md text-sm text-secondary md:ml-auto">A working register for the four most common entry points. Each line keeps the administrative fact and the human evidence in view at once.</p>
        </div>
        <div className="mt-12 border-t border-ink">
          {entries.map((row, i) => (
            <article key={row[0]} className="group relative flex flex-col border-b border-line py-5 md:flex-row md:items-baseline">
              <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
              <div className="type-micro w-36 text-secondary transition-transform duration-200 ease-crisp group-hover:translate-x-2">{row[0]}</div>
              <div className="type-editorial mt-2 text-3xl md:mt-0 md:w-36">{row[1]}</div>
              <div className="type-micro mt-4 text-accent md:ml-8 md:mt-0 md:w-44">{row[2]}</div>
              <p className="type-body mt-3 max-w-xl text-sm text-secondary md:ml-auto md:mt-0">{row[3]}</p>
              <ArrowRight className="absolute right-0 top-6 hidden text-accent opacity-0 transition-all duration-200 ease-crisp group-hover:translate-x-2 group-hover:opacity-100 md:block" size={18} />
              {i === 0 ? <span className="absolute -right-2 bottom-0 h-px w-24 bg-ink/20" /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
