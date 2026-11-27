{/* Echo: the table’s active row uses the travelling measure under a cropped year index */}
import { EchoMeasure } from '../../system/echo';
import { SectionIntro } from '../../system/ui';

const rows = [
  ['Reception–Year 1', '$14,890', '$13,537', '$12,184'],
  ['Year 6', '$19,625', '$17,719', '$15,812'],
  ['Year 8', '$21,280', '$19,125', '$16,971'],
  ['Years 11–12', '$24,030', '$21,463', '$18,896']
];

export default function Pricing3() {
  return (
    <section className="bg-paper px-5 py-20 text-ink md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="03" eyebrow="Sibling structure" title="The fee table, edited to what parents need first." copy="Totals include tuition and fixed fees. Sibling reductions apply to tuition only." />
        <div className="group relative overflow-hidden border border-line bg-white">
          <EchoMeasure index="2027" size="md" surface="bg-white" />
          <div className="hidden grid-cols-4 border-b border-line bg-ground md:grid px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
            <span>Year level</span><span>First child</span><span>Second child</span><span>Third child</span>
          </div>
          {rows.map((row) => (
            <div key={row[0]} className="group/row grid gap-2 border-b md:grid-cols-4 md:gap-0 border-line px-5 py-5 transition-colors duration-200 ease-crisp last:border-b-0 hover:bg-ground">
              {row.map((cell, i) => <div key={cell} className={i === 0 ? 'font-semibold' : 'flex items-baseline justify-between text-secondary md:block'}>{i > 0 ? <span className="type-micro text-[9px] text-secondary/70 md:hidden">{['Year level','First child','Second child','Third child'][i]}</span> : null}{cell}</div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
